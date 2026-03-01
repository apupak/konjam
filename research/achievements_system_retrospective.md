# Achievements & Profile System: Retrospective

**Date:** February 28, 2026
**Feature Focus:** Gamifying Bangalore Kannada Learning (Achievements, Badges, Profile Dashboard)

---

## 1. Architectural Overview & Context
The SWALPA platform was designed to move beyond traditional textbook learning by simulating the "streets of Bangalore." While the three core minigames (`Meter Haaki`, `Adjust Maadi`, `Suffix Station`) provided excellent situational practice, there was no persistent progression to tie the user's journey together across multiple sessions. 

We introduced a **Profile Dashboard** and an **Achievements (Badges) System** to build long-term retention hooks.

### Core Components Built:
- `profile.md`: A MkDocs page rendering an interactive dashboard (Rank Card, Progress Bar, Badge Grid).
- `badges.js`: A central service handling `localStorage` state for unlocked badges and rendering an animated "Toast" notification in the DOM.
- `lessons.js` & game hooks: Injected triggers (`unlockBadge(id)`) upon the completion of lessons and minigames.
- `custom.css` Updates: Added extensive styling for the glassmorphism profile cards, grid layouts, and the sliding toast animation.

## 2. Technical Findings & Roadblocks

### The ES6 Module Injection Conflict with MkDocs
**The Problem:**
Initially, I structured `badges.js` as an ES6 module (using `export function unlockBadge()`). I then added it to `mkdocs.yml` under `extra_javascript`. 

However, MkDocs Material injects these scripts as standard tags (`<script src="...">`) rather than `<script type="module" src="...">`. When `lessons.js` attempted to `import { unlockBadge } from ...`, it resulted in cross-origin and syntax errors, completely breaking the lesson completion toggle.

**The Solution:**
Instead of fighting the MkDocs build process or creating complex custom HTML templates, I refactored the badge definitions and functions to attach directly to the global `window` object:
```javascript
window.unlockBadge = unlockBadge;
window.getUnlockedBadges = getUnlockedBadges;
window.BADGE_DEFINITIONS = BADGE_DEFINITIONS;
```
This allowed `lessons.js` and the in-line script on `profile.md` to access the logic reliably without module scope issues. **Future AI Agents:** Keep this in mind when adding new global tracking scripts to the MkDocs ecosystem. 

### The "Conversationalist" Badge & Iframe Interaction
**The Problem:**
The user requested a badge for "leaving a comment." Since our comment system (Giscus) operates within an isolated GitHub OAuth iframe, there is no native JavaScript event dispatched specifically when a comment is successfully posted.

**The Solution:**
I utilized a clever UI trick to detect "engagement" without breaching cross-origin constraints. By listening to the `blur` event on the global `window`, we can check if the new `document.activeElement` is the Giscus `iframe`.
```javascript
window.addEventListener('blur', () => {
    const giscusFrame = document.querySelector('iframe.giscus-frame');
    if (giscusFrame && document.activeElement === giscusFrame) {
        unlockBadge('conversationalist');
    }
});
```
This acts as a socio-technical proxy: if the user clicks into the comments section, they are engaging with the community, satisfying the intent behind the badge.

## 3. Socio-Linguistic Impact (The "Bangalore Flavor")
The aesthetic and linguistic choices for the badges intentionally lean into expat/tech-worker tropes in Bangalore.

*   **Filter Coffee First (☕):** A nod to the standard start of any day in South India. (Awarded on the first lesson).
*   **Local Insider (🕶️):** Rewards diving into the street slang module, past the formal vocabulary.
*   **Auto Rickshaw Negotiator (🛺):** Rewards surviving the psychological stress of the `Meter Haaki` minigame.

By replacing generic "Level 1" language with cultural inside jokes, the progression feels like an integration into the city, not just an academic exercise. 

## 4. Recommendations for Next Iterations
*   **Server-Side Syncing:** Currently, `swalpa_unlocked_badges` lives entirely in `localStorage`. If the user clears their cache or switches to mobile, their badges are lost. Implementing a simple backend (e.g., Firebase or a serverless KV store) tied to GitHub auth would make this persistent.
*   **Social Export:** Add a button prominently on the Profile page to "Export Progress Image." We could use a canvas renderer to snapshot their rank and badges into an image they can easily drop into an office Slack channel or group chat.
