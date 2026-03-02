# Handoff Prompt: Konjam Native Audio Finalization & Deployment

## 🎯 Context
You are stepping into the **Konjam** project, a Tamil language learning platform. We have just completed a high-fidelity "Native Audio" batch using Google Cloud TTS (`kn-IN-Wavenet-A`) and custom Unicode mappings. The system currently supports a dual-mode toggle (Phonetic vs. Native), but we are now ready to commit to **Native-only** audio for the production site.

## 🏗️ Technical Architecture
*   **Audio Assets**:
    *   `docs/assets/audio/`: Current phonetic (Indian-English) MP3s.
    *   `docs/assets/audio_native/`: New high-fidelity native Tamil MP3s (Verified 374/374 coverage).
*   **Logic**:
    *   `scripts/Tamil_mapping.py`: The source of truth mapping phonetic IDs to Tamil Unicode.
    *   `scripts/generate_audio.py`: The generator script (supports `--mode native`).
    *   `docs/assets/js/audio.js`: Frontend logic that currently handles the "Voice Style" toggle and URL construction.
*   **Remotes**:
    *   `origin`: `git@github.com:apupak/konjam-private.git` (Private staging/research).
    *   `public`: `https://github.com/apupak/konjam.git` (Public production site).

## 🚀 Your Objective
Your goal is to simplify the codebase to use **only** the native audio assets and deploy the result to the public repository.

### 1. Simplify the Audio System (Private Repo)
*   **Remove Toggle UI**: Modify `docs/assets/js/audio.js` to remove the "Voice Style" toggle and `localStorage` logic. 
*   **Hardcode Native Mode**: Update the JS logic so all audio requests point to `assets/audio_native/` by default.
*   **Clean up Scripts**: Update `generate_audio.py` to default to native mode or remove the phonetic branch if it simplifies maintenance.
*   **Verify**: Ensure that clicking a ⟨phonetic-guide⟩ in the browser plays the native Tamil audio correctly without any user configuration.

### 2. Public Deployment
*   **Sync Files**: Mirror the `docs/` and `mkdocs.yml` changes to the `public` remote.
*   **Exclusions**: Ensure the `scripts/` and `research/` directories are **NOT** pushed to the public repository (as per `GEMINI.md` rules).
*   **Assets**: Ensure the full set of 374 assets in `docs/assets/audio_native/` is included in the public push.

## 📂 Key Files to Inspect First
1.  [Tamil_mapping.py](file:///Users/apupak/Documents/Konjam-private/scripts/Tamil_mapping.py) - Contains the mappings for the 374 assets.
2.  [audio.js](file:///Users/apupak/Documents/Konjam-private/docs/assets/js/audio.js) - Contains the toggle and playback logic you need to simplify.
3.  [pronunciation_tts_retrospective.md](file:///Users/apupak/Documents/Konjam-private/research/pronunciation_tts_retrospective.md) - Context on how the audio was generated and the "accent stripping" logic used.
4.  [GEMINI.md](file:///Users/apupak/Documents/Konjam-private/GEMINI.md) - The project's private rules and remote configuration details.

## 🚦 Constraints
*   **No Placeholders**: Do not break existing links. Every ⟨...⟩ tag MUST trigger a native audio file.
*   **Aesthetics**: Maintain the "premium" look achieved in the private staging area.
*   **Privacy**: Never push `scripts/`, `research/`, or `.env` to the `public` repo.
