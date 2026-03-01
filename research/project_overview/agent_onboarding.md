# Agent Onboarding & Development Protocols

If you are an AI Coding Agent assigned to work on the KONJAM project, **you must read and adhere to these directives.**

**Failure to heed these warnings will likely break the application state or corrupt the deployment pipeline.**

---

## 🛑 Critical Rule 1: No Backend Magic
KONJAM **does not** have a backend. There is no Node Server, no Postgres database, and no API endpoint to hit. 
* Do not attempt to write server-side code. 
* Do not attempt to use `fs` or `path` inside the frontend JavaScript files. 
* **ALL state must be saved to `localStorage`.** 

## 🛑 Critical Rule 2: Vanilla JavaScript Only
We do not use React, Vue, Svelte, or any build tools (Webpack, Vite) for the frontend logic. 
* Do not run `npm install react`. 
* You must manipulate the DOM using standard `document.getElementById` or `document.querySelector`.
* Keep the footprint lightweight.

## 🛑 Critical Rule 3: The Working Directory
You operate inside `konjam-private`. 
* **Never** attempt to execute shell commands or git modifications on the public `konjam` repository directly.
* Your git commits should occur right here in `konjam-private`. 
* When a task is complete, use the provided bash script `./scripts/sync_to_public.sh "your commit message"` to propagate the changes forward.

## 🛑 Critical Rule 4: MkDocs Material Overrides
If you need to change the fundamental layout or colors of the application:
1. Do not edit HTML files directly unless generating a custom game in `docs/games/`.
2. Most layout changes must happen in `mkdocs.yml` (Navigation, theme colors, plugins).
3. Visual styling changes must happen in `docs/assets/css/custom.css`. We use CSS variables (`var(--md-primary-fg-color)`) inherited from the MkDocs Material theme. Try to reuse these variables to ensure Dark Mode compatibility.

## 🛑 Critical Rule 5: Audio Generation Workflow
If you are tasked with adding new Tamil audio:
1. The user utilizes **Google Cloud TTS (Text-to-Speech)**. 
2. You must rely on python scripts (likely available in `scripts/` or as instructed by the user) to batch generate audio files.
3. Ensure the synthesized voice mapping uses Native Indian logic (e.g., `Chirp-3-HD` profiles).
4. Audio elements in HTML must follow the project's preload logic. Do not auto-play audio on page load. Use hover-preloading logic if modifying `audio.js` to ensure zero-latency playback on click.

---

## Workflow Checklist for New Features:
1. Check `mkdocs.yml` to ensure your new markdown file is listed in the `nav` tree.
2. If introducing a new JS script, it must be appended to the `extra_javascript` array in `mkdocs.yml`.
3. If writing complex DOM logic, wrap it in a `document.addEventListener('DOMContentLoaded', ...)` block to prevent race conditions during MkDocs rendering.
4. Always test using a browser subagent trace against `127.0.0.1:8000` before declaring completion.
