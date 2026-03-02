import os
import re
import glob
import requests
import json
import base64
import sys
import time
import argparse
import unicodedata

import argparse
try:
    from tamil_mapping import TAMIL_MAPPING
except ImportError:
    TAMIL_MAPPING = {}

# Load API key from .env file
def load_api_key():
    env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
    if not os.path.exists(env_path):
        print(f"Error: .env file not found at {env_path}")
        return None
    with open(env_path, 'r') as f:
        for line in f:
            if line.startswith('GOOGLE_CLOUD_API_KEY='):
                return line.split('=')[1].strip()
    return None

def strip_accents(s):
   return ''.join(c for c in unicodedata.normalize('NFD', s)
                  if unicodedata.category(c) != 'Mn')

def generate_audio(mode='phonetic', custom_voice=None, custom_output_dir=None):
    api_key = load_api_key()
    if not api_key:
        print("Error: GOOGLE_CLOUD_API_KEY not found in .env")
        sys.exit(1)

    docs_dir = os.path.join(os.path.dirname(__file__), '..', 'docs')
    
    if mode == 'native':
        audio_dir = os.path.join(docs_dir, 'assets', custom_output_dir or 'audio_native_v4_male')
        voice_name = custom_voice or "ta-IN-Chirp3-HD-Puck"
        lang_code = "ta-IN"
    else:
        audio_dir = os.path.join(docs_dir, 'assets', custom_output_dir or 'audio')
        voice_name = custom_voice or "en-IN-Wavenet-A"
        lang_code = "en-IN"
        
    os.makedirs(audio_dir, exist_ok=True)
    
    # Regex Patterns
    if mode == 'native':
        pattern = re.compile(r'([^*‘“⟨\n]{1,40})\s*⟨(?P<phonetic>[^⟩]+)⟩')
    else:
        pattern = re.compile(r'⟨(?P<phonetic>[^⟩]+)⟩')
    
    md_files = glob.glob(os.path.join(docs_dir, '*.md'))
    
    generation_map = {}
    
    # Phonetic overrides for the en-IN voice
    phonetic_overrides = {
        'hul': 'hull', 'pul': 'pull', 'cul': 'cull', 'tul': 'tull',
        'nuh': 'na', 'muh': 'ma', 'ruh': 'ra', 'duh': 'da',
        'kuh': 'ka', 'guh': 'ga', 'luh': 'la', 'vuh': 'va',
        'yuh': 'ya', 'buh': 'ba', 'huh': 'ha', 'thuh': 'tha', 'shuh': 'sha',
        'gey': 'gay', 'dey': 'day', 'bey': 'bay', 'ney': 'nay',
        'ley': 'lay', 'hey': 'hay', 'sey': 'say', 'tay': 'tay', 'ay': 'ay',
        'ree': 'ree', 
    }

    for file_path in md_files:
        name = os.path.basename(file_path)
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for match in pattern.finditer(content):
            phonetic_text = match.group('phonetic').strip()
            safe_filename = re.sub(r'[^a-zA-Z0-9_\-]', '_', phonetic_text)
            safe_filename = re.sub(r'_+', '_', safe_filename).strip('_')
            
            is_ssml = False
            if mode == 'native':
                if safe_filename in TAMIL_MAPPING:
                    word = TAMIL_MAPPING[safe_filename]
                else:
                    raw_word = match.group(1).strip().split('\n')[-1]
                    word = re.sub(r'[*‘“’”|/]+', '', raw_word).strip()
                    # Do not strip_accents on Tamil words because it strips vowel marks!
                
                # If word is empty or just punctuation, fallback to phonetic
                if not re.search(r'[a-zA-Z\u0B80-\u0BFF]', word):
                    word = phonetic_text.replace('-', ' ')

                tts_text = f"<speak><lang xml:lang='ta-IN'>{word}</lang></speak>"
                is_ssml = True
            else:
                normalized = phonetic_text.lower()
                parts = normalized.split('-')
                overridden_parts = [phonetic_overrides.get(p, p) for p in parts]
                tts_text = ' '.join(overridden_parts)
            
            generation_map[safe_filename] = (tts_text, is_ssml, phonetic_text)

    # Add WOTD phrases
    wotd_path = os.path.join(docs_dir, 'assets', 'js', 'wotd.js')
    if os.path.exists(wotd_path):
        import ast
        with open(wotd_path, 'r', encoding='utf-8') as f:
            wotd_content = f.read()
        
        # Simple regex extraction for WOTD objects
        wotd_pattern = re.compile(r'\{\s*kan:\s*"([^"]+)",\s*dKan:\s*"([^"]+)",\s*eng:\s*"([^"]+)",\s*audio:\s*"([^"]+)"\s*\}')
        for match in wotd_pattern.finditer(wotd_content):
            kan_text, dkan_text, eng_text, audio_key = match.groups()
            
            # Use TAMIL_MAPPING override if it exists, otherwise use the Tamil kan text
            wordToSay = TAMIL_MAPPING.get(audio_key, kan_text)
            tts_text = f"<speak><lang xml:lang='ta-IN'>{wordToSay}</lang></speak>"
            generation_map[audio_key] = (tts_text, True, dkan_text)

    print(f"Mode: {mode}. Found {len(generation_map)} unique audio items. Default Voice: {voice_name}")
    
    url = "https://texttospeech.googleapis.com/v1/text:synthesize"
    headers = {"X-Goog-Api-Key": api_key, "Content-Type": "application/json"}
    
    success_count = 0
    errors = 0
    
    sorted_filenames = sorted(generation_map.keys())
    for i, safe_filename in enumerate(sorted_filenames, 1):
        tts_text, is_ssml, phonetic_text = generation_map[safe_filename]
        mp3_path = os.path.join(audio_dir, f"{safe_filename}.mp3")
        
        # Skip if already exists and is not 0 bytes
        if os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 0: continue

        input_payload = {"ssml": tts_text} if is_ssml else {"text": tts_text}
        
        payload = {
            "input": input_payload,
            "voice": {
                "languageCode": lang_code,
                "name": voice_name
            },
            "audioConfig": {
                "audioEncoding": "MP3",
                "pitch": 0,
                "speakingRate": 0.95
            }
        }
        
        if "Wavenet" in voice_name and not custom_voice:
            payload["voice"]["ssmlGender"] = "FEMALE"
        if "Chirp" in voice_name and not custom_voice:
            pass # Use default gender config from google registry
        
        max_retries = 3
        for attempt in range(max_retries):
            try:
                response = requests.post(url, headers=headers, json=payload, timeout=10)
                if response.status_code == 200:
                    audio_content = base64.b64decode(response.json()['audioContent'])
                    with open(mp3_path, 'wb') as out:
                        out.write(audio_content)
                    success_count += 1
                    break
                else:
                    if attempt < max_retries - 1:
                        time.sleep(1)
                    else:
                        print(f"Error {response.status_code} for {phonetic_text}: {response.text}")
                        errors += 1
            except Exception as e:
                if attempt < max_retries - 1:
                    time.sleep(1)
                else:
                    print(f"Failed to generate {phonetic_text}: {e}")
                    errors += 1
        
        if i % 20 == 0 or i == len(sorted_filenames):
            print(f"[{i}/{len(sorted_filenames)}] Success: {success_count}, Errors: {errors}")
            
    print(f"DONE: {success_count} assets generated in {audio_dir}")

    # Orphan Check
    all_mp3_files = set(glob.glob(os.path.join(audio_dir, '*.mp3')))
    used_mp3_files = set(os.path.join(audio_dir, f"{name}.mp3") for name in generation_map.keys())
    orphaned_files = all_mp3_files - used_mp3_files
    
    if orphaned_files:
        print(f"\n[WARNING] Found {len(orphaned_files)} orphaned file(s) in {audio_dir}:")
        for orphan in sorted(orphaned_files):
            print(f"  - {os.path.basename(orphan)}")
        print("\nThese files are no longer referenced in markdown or WOTD and can likely be deleted.")
    else:
        print("\nAll files in the directory are actively used. No orphaned files found.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Generate Konjam audio.')
    parser.add_argument('--mode', choices=['phonetic', 'native'], default='native', help='Audio generation mode')
    parser.add_argument('--voice', help='Override voice name (e.g., ta-IN-Chirp3-HD-Puck)')
    parser.add_argument('--output-dir', dest='output_dir', help='Override output directory within docs/assets (e.g., audio_native_v4_male)')
    args = parser.parse_args()
    generate_audio(mode=args.mode, custom_voice=args.voice, custom_output_dir=args.output_dir)
