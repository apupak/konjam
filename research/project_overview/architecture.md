# Architecture & Infrastructure

KONJAM masquerades as a static documentation site but operates as a dynamic, Progressive Web App (PWA) under the hood. It leverages **MkDocs (Material Theme)** for content rendering and **Vanilla JavaScript** for logic and state.

---

## 🏗 Core Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | MkDocs (Material) | Converts Markdown to HTML, handles navigation, search, and core site structure. |
| **Styling** | Custom CSS (`assets/css/custom.css`) | Overrides MkDocs defaults; provides glassmorphism, responsive grid layouts, and game UI styling. |
| **Logic** | Vanilla JavaScript (ES6) | Handles all interactive elements (badges, tracking, games, audio playback). |
| **Data Layer** | `localStorage` | Client-side persistence. No backend database exists. |
| **Audio** | Google Cloud TTS | High-fidelity Chirp-3 HD generated audio tracks for Native Tamil phonetics. |
| **Flashcards**| Orbit (`withorbit.com`) | Third-party web component for spaced-repetition embedded directly in markdown. |

---

## 🗄 Storage Architecture (`localStorage`)

Because KONJAM has no backend, the browser's `localStorage` is the absolute source of truth for a user's profile.

### Key Data Structures

1. **`konjam_visit_history` (Array of Date Strings)**
   * **Purpose**: Tracks every unique calendar day the user loads the site.
   * **Location**: Managed by `assets/js/wotd.js`.
   * **Usage**: Used to calculate `Daily Streaks`.

2. **`konjam_unlocked_badges` (Array of Strings)**
   * **Purpose**: Tracks which milestone badges the user has earned.
   * **Format**: `["filter_coffee_first", "local_insider", "regular_giraki"]`
   * **Rule**: This array is strictly additive. Badges, once unlocked, cannot be removed.

3. **`respectPoints` (Integer)**
   * **Purpose**: Global score calculating the user's proficiency level in the "Adjust Maadi" and "Meter Haaki" JS games.
   * **Impact**: Determines the user's global ranking on their Profile Dashboard (e.g., "Tourist", "Local", "Bangalore Guru").

---

## 🚀 Game Engine Architecture

The site hosts three interactive mini-games located in `docs/games/`. They follow a Strict Model-View-Controller (MVC) pattern written in Vanilla JS.

### 1. Meter Haaki & Adjust Maadi (Roleplay Negotiation)
* **Mechanic**: Text-based dialogue trees simulating real-world conflict regarding transport and landlords.
* **Architecture**: 
  * `data.js`: Holds JSON structures representing dialogue nodes, choices, and state modifiers (prices, patience).
  * `game.js`: The central loop. Renders the UI, parses the node from `data.js`, animates typewriter effects, and calculates the `respectPoints` outcome.
  * `style.css`: Specific interactive styling decoupled from the main MkDocs `custom.css`.

### 2. Suffix Station (Time-Attack Quiz)
* **Mechanic**: Rapid-fire grammar matching against a descending progress bar timer. 
* **Architecture**: Similar decoupling of `questions.js` (Question Bank) and `game.js` (Timer execution and DOM manipulation).

---

## 🔄 Deployment Pipeline

KONJAM uses a custom deployment flow to split the "working" repository from the "public" repository.

1. **Development**: All changes, `.md` authoring, CSS tweaks, and JS logic are written in `konjam-private`.
2. **Local Testing**: Devs run `mkdocs serve` to validate changes visually on `127.0.0.1:8000`.
3. **Sync Process**: The developer executes `./scripts/sync_to_public.sh <commit_message>`.
   * This script cleans the public `/docs` directory.
   * It carefully uses `rsync` to mirror the `docs/` and `mkdocs.yml` from `konjam-private` into `konjam` (the public repo).
   * Artifacts, research, and generation scripts are intentionally left behind.
4. **Cloudflare Automation**: Pushing to the `konjam` (public) main branch triggers a GitHub Action that deploys the static build directly to Cloudflare Pages (`konjam.org`).
