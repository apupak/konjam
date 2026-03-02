# Podcast Feature: AI-Driven Spoken Tamil Learning

## Overview
The Podcast Feature is a planned extension of the Konjam project. It leverages AI-generated audio and research corpus data to provide an immersive, audio-first learning experience for non-native speakers in Chennai. 

The primary goal is to move beyond static text and simple audio snippets toward long-form, context-rich content (podcasts) that demonstrates natural conversational flow, prosody, and the distinct "linguistic layer cake" of Chennai Tamil.

## Current State & Pilot Assessment
We have an existing sample podcast in the `research/` folder:
- **File**: `v3_Survive_Chennai_Traffic_With_Tamil_Mechanics.m4a`
- **Assessment**: The conceptual content is excellent, covering high-utility scenarios and vocabulary. However, the **Tamil pronunciation is completely incorrect**, rendering it unusable for its intended instructional purpose.

## The Strategy: Custom Google Cloud TTS Pipeline
NotebookLM was initially tested but **failed due to severe Tamil pronunciation degradation**. To create a high-fidelity replacement, we built a custom multi-voice generation pipeline using the Google Cloud TTS API (`scripts/generate_podcast.py`).

### 1. The Multi-Voice Engine
- **English Host**: Uses `en-IN` voices for narration and setup.
- **Tamil Expert**: Uses `kn-IN` voices (e.g., `Chirp3-HD-Puck`) to pronounce the Tamil words natively.
- **SSML Tags**: Tamil text is wrapped in `<lang xml:lang='kn-IN'>` to ensure the TTS engine switches phoneme sets, solving the pronunciation issue entirely.

### 2. The Content: Transcription & "The Morphosyntactic Engine"
We have successfully transcribed the original pilot audio into two CSV files:
- `research/podcasts/v3_traffic_part1.csv`
- `research/podcasts/v3_traffic_part2.csv`

These transcripts reveal a brilliant educational structure:
- **The "Lego Theory"**: Teaching Tamil grammar as agglutinative suffixes (e.g., `-alli`, `-inda`) that snap onto English nouns (e.g., "Office-nalli").
- **Phonetic Drills**: Emphasizing retroflex consonants, vowel length, and aspiration to prevent "phonetic degradation."
- **The P-to-H Shift**: A historical hack connecting Tamil/Proto-Dravidian words to modern Tamil (e.g., `Paalu` -> `Haalu`).
- **The Experiencer Dative**: Shifting the English "I want" to the Tamil "To me, it is needed" (`Nanage... beku`).

### 3. Proposed Tasks for the Next Agent
- [ ] Read the two CSV transcripts (`v3_traffic_part1.csv` and `v3_traffic_part2.csv`).
- [ ] Format the transcripts into our Markdown script standard: `**Host**: text` and `**Expert**: text`.
- [ ] Apply phonetic overrides and SSML `<lang>` tags to the Tamil words in the script.
- [ ] Run `scripts/generate_podcast.py` to synthesize the high-fidelity, multi-voice podcast audio.
- [ ] Use `ffmpeg` to stitch the final audio segments together.

## Core Research Pillars
The feature is informed by the following internal research documents:

1. **Improving Tamil Pronunciation in AI Podcasts**: 
   - Focuses on the technical challenges of using TTS engines for Tamil.
   - Researches phonetic mapping (similar to the `⟨...⟩` guides) to ensure AI voices sound natural.
   
2. **Chennai Spoken Tamil Corpus**:
   - Provides the lexical and morphosyntactic foundation.
   - Ensures the language reflects actual street-level "Chennai Tamil."

3. **Language Research Corpus Generation**:
   - Outlines methodology for generating diverse language samples.

## Reference Material
- `research/Improving Tamil Pronunciation in AI Podcasts.pdf`
- `research/v3_Survive_Chennai_Traffic_With_Tamil_Mechanics.mp3` (Original 32min pilot)
- `research/podcasts/v3_traffic_part1.csv` and `part2.csv` (The extracted transcripts)
- `scripts/generate_podcast.py` (The bespoke generation engine)

> [!NOTE]
> This document remains in the `research` folder and is not yet part of the public documentation. All refinement work is strictly confined to the `Konjam-private` repository.
