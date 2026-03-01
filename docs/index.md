---
description: Konjam is a free, practical guide to spoken Chennai Tamil. Learn everyday phrases, auto-rickshaw negotiation, street slang, and survival vocabulary — all phonetically.
comments: true
---
<h1 id="typewriter-text" style="min-height: 48px; border-right: 2px solid; animation: blink 1s step-end infinite;"></h1>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to KONJAM";
    const el = document.getElementById("typewriter-text");
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            el.style.borderRight = "none";
        }
    }
    setTimeout(type, 500);
});
</script>
<style>
@keyframes blink { 50% { border-color: transparent; } }
</style>

Vanakkam! Welcome to **KONJAM** (**K**nowledge **O**f **N**ative **J**argon **A**nd **M**adras — and yes, we totally forced that backronym 🙃).

![KONJAM Hero Illustration](assets/img/hero.png){: .floating-hero }

<div class="phrase-card" markdown>
## 🎯 Our Mission
Our goal is to provide a **phonetic-only, Chennai-functional** Tamil learning resource. This guide is built specifically for non-Tamil speakers in Chennai—such as IT professionals, recent migrants, and long-term residents—who want to survive and thrive through spoken language without needing to learn the formal written script.

We focus on maximizing your return on investment by teaching you high-frequency vocabulary and practical phrases that you can use immediately in your daily life in Namma Chennai.
</div>

---

<div id="swalpa-wotd-root"></div>

<div id="swalpa-progress-dashboard" style="margin: 20px 0; padding: 25px; background: rgba(30, 41, 59, 0.7); border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.1); color: #F8FAFC; text-align: center; backdrop-filter: blur(12px);">
  <h2 style="margin-top: 0; color: #FFD700; font-family: 'Outfit', sans-serif;">🏆 Your Chennai Journey</h2>
  
  <div style="margin: 20px 0;">
    <span id="global-rank-title" style="font-size: 28px; font-weight: 800; display: block; margin-bottom: 5px;">🌴 Tourist</span>
    <p id="global-rank-desc" style="font-size: 14px; color: #94A3B8; line-height: 1.4; margin-bottom: 20px;">Just arrived at Central. Confused but curious.</p>
    
    <div style="width: 100%; height: 10px; background: rgba(255, 255, 255, 0.08); border-radius: 5px; overflow: hidden; margin-bottom: 5px;">
      <div id="global-progress-fill" style="width: 0%; height: 100%; background: #FFD700; transition: width 0.8s ease;"></div>
    </div>
    <span id="global-progress-text" style="font-size: 12px; font-weight: 700; color: #FFD700;">0% to next rank</span>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px; text-align: center;">
    <div>
      <span style="font-size: 10px; text-transform: uppercase; color: #94A3B8; display: block; margin-bottom: 5px;">Suffix Station</span>
      <span id="best-suffix" style="font-size: 20px; font-weight: 800;">---</span>
    </div>
    <div>
      <span style="font-size: 10px; text-transform: uppercase; color: #94A3B8; display: block; margin-bottom: 5px;">Rickshaw Respect</span>
      <span id="best-rickshaw" style="font-size: 20px; font-weight: 800;">---</span>
    </div>
    <div>
      <span style="font-size: 10px; text-transform: uppercase; color: #94A3B8; display: block; margin-bottom: 5px;">Adjust-Paani</span>
      <span id="best-adjust" style="font-size: 20px; font-weight: 800;">---</span>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
<script type="module">
  import { calculateProgress } from './assets/js/progress.js';
  import { getHighScores } from './assets/js/scores.js';

  function updateDashboard() {
    const progress = calculateProgress();
    const scores = getHighScores();

    document.getElementById('global-rank-title').innerText = progress.rank.title;
    document.getElementById('global-rank-desc').innerText = progress.rank.desc;
    document.getElementById('global-progress-fill').style.width = progress.percentToNext + '%';
    document.getElementById('global-progress-text').innerText = progress.percentToNext + '% to next rank';

    document.getElementById('best-suffix').innerText = scores['suffix-station'] || '---';
    document.getElementById('best-rickshaw').innerText = scores['meter-haaki'] ? scores['meter-haaki'].respect : '---';
    document.getElementById('best-adjust').innerText = scores['adjust-maadi'] ? scores['adjust-maadi'].respect : '---';
  }

  window.addEventListener('load', updateDashboard);
</script>

## 👥 Target Audience
This guide is for you if:

- You live in Chennai and want to interact confidently with locals, auto drivers, shopkeepers, and colleagues.
- You want to learn practical, street-smart Tamil (the Chennai dialect, like *Saptiya?* instead of the textbook *Saapiteergala?*).
- You find learning a new script intimidating and prefer to learn through transliteration (reading Tamil words in English letters).
- You relate well to structural bridges, which we use to make grammar easier to grasp intuitively.

## 📖 Course Preview
Here is a sneak peek at what you will learn in the upcoming modules:

*   **[1. History & Nuances](01_history_and_nuances.md)**: Understand the cultural context, the Chennai dialect, and how this guide approaches learning.
*   **[2. Survival & Emergencies](02_survival_and_emergencies.md)**: Essential phrases for getting out of tricky situations, asking for help, and basic navigation.
*   **[3. Social Interactions](03_social_interactions.md)**: Greetings, making friends, and polite conversation.
*   **[4. Time & Numbers](04_time_and_numbers.md)**: Telling time, bargaining, and handling money effectively.
*   **[5. Verbs & Grammar](05_verbs_and_grammar.md)**: The engine of the language—how to put sentences together using practical grammatical bridges.
*   **[6. Adjectives & Limits](06_adjectives.md)**: Describing things, people, and situations properly.
*   **[7. Slang & Tanglish](07_slang.md)**: Sounding like a true Chennaite with local colloquialisms.
*   **[8. Travel & Conflict](08_travel_and_conflict.md)**: Navigating autos, buses, MRTS, and successfully resolving disputes without escalating.
*   **[9. Everyday Logistics & Services](09_everyday_logistics_and_services.md)**: Dealing with delivery drivers, landlords, basic repairs, and office navigation.
*   **[10. Household, Groceries & Nature](10_household_and_logistics.md)**: Interacting with domestic help, identifying local vegetables, and handling daily errands.

Dive in, practice speaking out loud, and don't worry about being perfect. *Konjam Konjam* (little by little), you'll get there!
