# Features & State Machine Reference

This document catalogs the primary interactive features injected into the MkDocs structure via `docs/assets/js/`.

---

## 1. Gamified Profile & Badges (`badges.js` & `profile.md`)

KONJAM leverages milestone conditioning to encourage retention.

* **Profile Dashboard**: A dedicated markdown page (`profile.md`) containing empty container `<div>` elements. On load, JavaScript reads `localStorage` and hydrates these containers with dynamic DOM elements (Progress Bars, Rank Titles, Emoji Badges).
* **Badge Definitions**: Located at the top of `badges.js` (`BADGE_DEFINITIONS`). Defines the Title, Description, and Emoji for every possible achievement.
* **`window.unlockBadge(badgeId)`**: The global method called from *other* scripts (like games or lessons) to trigger an unlock. It injects the ID into `localStorage` and spawns a floating Toast Notification in the browser.

## 2. Word of the Day & Streak Tracking (`wotd.js`)

A daily engagement hook designed to pull users back to the homepage.

* **Phrase Array**: A hardcoded array of culturally relevant slang and phrases.
* **Seeded Randomization**: It uses the current calendar date (`YYYY-MM-DD`) as a seed to index the array. This guarantees that every user sees the exact same "Word of the Day", and that phrase remains static for 24 hours without requiring a backend database.
* **Streak Math**: On load, the script writes today's date into the `konjam_visit_history` array. It then loops backward through the array to calculate the number of consecutive days logged. If days > X, it fires `window.unlockBadge` for specific milestone achievements.

## 3. The Custom Share Modal (`share.js`)

Unlike standard Web Share API implementations, KONJAM uses a branded, custom Share drawer that maximizes conversion on desktop and mobile platforms.

* **Trigger**: Lesson pages feature a "Share 📤" button at the bottom. 
* **The Modal**: Calls `window.triggerShare(text, url)`. This injects a high-z-index glassmorphic modal overlay spanning the full screen.
* **Preview Box**: The modal dynamically parses the incoming text payload and renders it inside a stylized `.share-preview-box`. This provides the user transparency on exactly what they are about to send.
* **Actions**: 
  * WhatsApp (`https://wa.me/?text=`)
  * X / Twitter (`https://twitter.com/intent/tweet?text=`)
  * System Clipboard (`navigator.clipboard.writeText`) with an integrated success toast.

## 4. Spaced Repetition Flashcards (`11_flashcards_*.md`)

Vocabulary memorization is outsourced to **Orbit**.

* **Implementation**: We inject `<script type="module" src="https://js.withorbit.com/orbit-web-component.js"></script>` into the header of the flashcard markdown files.
* **Structure**: Words are defined inside `<orbit-reviewarea>` and `<orbit-prompt>` DOM nodes.
* **Persistence**: Orbit's web component natively manages its own spaced-repetition algorithm using IndexedDB/LocalStorage. KONJAM does not need to calculate card intervals; we merely provide the content.
* **Gamification Hook**: We use a `MutationObserver` to watch the DOM. The moment a user clicks an `orbit-reviewarea` for the first time, it triggers `window.unlockBadge('flashcard_starter')`.
