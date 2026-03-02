---
description: Explore the complete Konjam curriculum. Learn Chennai Tamil step by step, from survival basics to everyday negotiations.
hide:
  - toc
---

# 📚 Core Lessons

Welcome to the KONJAM Curriculum! These 10 modules are designed to take you from a confused newcomer at Central Station to a confident local navigating the streets of Namma Chennai.

<div class="konjam-feature-list">
    <a href="../01_history_and_nuances/" class="konjam-feature-item" data-lesson="01_history_and_nuances">
        <div class="konjam-feature-icon">📖</div>
        <div class="konjam-feature-content">
            <h3>1. History & Nuances <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Understand the cultural context, the street dialect versus textbook Tamil, and the core philosophy of this guide.</p>
        </div>
    </a>

    <a href="../02_survival_and_emergencies/" class="konjam-feature-item" data-lesson="02_survival_and_emergencies">
        <div class="konjam-feature-icon">🚨</div>
        <div class="konjam-feature-content">
            <h3>2. Survival & Emergencies <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Essential phrases for getting out of tricky situations, asking for help, and basic navigation.</p>
        </div>
    </a>

    <a href="../03_social_interactions/" class="konjam-feature-item" data-lesson="03_social_interactions">
        <div class="konjam-feature-icon">👋</div>
        <div class="konjam-feature-content">
            <h3>3. Social Interactions <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Greetings, introducing yourself, making friends, and participating in polite conversation.</p>
        </div>
    </a>

    <a href="../04_time_and_numbers/" class="konjam-feature-item" data-lesson="04_time_and_numbers">
        <div class="konjam-feature-icon">⏰</div>
        <div class="konjam-feature-content">
            <h3>4. Time & Numbers <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Telling time, negotiating costs, and handling money effectively in shops and rickshaws.</p>
        </div>
    </a>

    <a href="../05_verbs_and_grammar/" class="konjam-feature-item" data-lesson="05_verbs_and_grammar">
        <div class="konjam-feature-icon">⚙️</div>
        <div class="konjam-feature-content">
            <h3>5. Verbs & Grammar <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>The engine of the language—learn how to put complete sentences together using practical grammatical bridges.</p>
        </div>
    </a>

    <a href="../06_adjectives/" class="konjam-feature-item" data-lesson="06_adjectives">
        <div class="konjam-feature-icon">📏</div>
        <div class="konjam-feature-content">
            <h3>6. Adjectives & Limits <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Describing things, people, and situations properly. Express scales, limits, and comparisons.</p>
        </div>
    </a>

    <a href="../07_slang/" class="konjam-feature-item" data-lesson="07_slang">
        <div class="konjam-feature-icon">🤙</div>
        <div class="konjam-feature-content">
            <h3>7. Slang & Tanglish <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Sound like a true Chennaite. Master local colloquialisms, street filler words, and expressive reactions.</p>
        </div>
    </a>

    <a href="../08_travel_and_conflict/" class="konjam-feature-item" data-lesson="08_travel_and_conflict">
        <div class="konjam-feature-icon">🛺</div>
        <div class="konjam-feature-content">
            <h3>8. Travel & Conflict <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Navigating autos, buses, MRTS, giving directions, and successfully resolving disputes peacefully.</p>
        </div>
    </a>

    <a href="../09_everyday_logistics_and_services/" class="konjam-feature-item" data-lesson="09_everyday_logistics_and_services">
        <div class="konjam-feature-icon">📦</div>
        <div class="konjam-feature-content">
            <h3>9. Logistics & Services <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Dealing with delivery drivers, landlords, swiggy, basic home repairs, and office navigation.</p>
        </div>
    </a>

    <a href="../10_household_and_logistics/" class="konjam-feature-item" data-lesson="10_household_and_logistics">
        <div class="konjam-feature-icon">🛒</div>
        <div class="konjam-feature-content">
            <h3>10. Household & Groceries <span class="lesson-tick" style="display:none; margin-left:8px;">✅</span></h3>
            <p>Interacting with domestic help, identifying local vegetables, understanding recipes, and handling daily errands.</p>
        </div>
    </a>
</div>

---

### How to use this curriculum
Don't rush to memorize vocabulary. Focus on the **structural bridges** in Chapter 5. Try immediately using one new phrase a day with your local shopkeeper or cab driver. 

> [!NOTE]
> *Konjam Konjam* (Little by little). Consistent, messy practice is much better than perfect textbook grammar!

<script>
document.addEventListener('DOMContentLoaded', () => {
    try {
        const completedStr = localStorage.getItem('konjam_completed_lessons');
        if (completedStr) {
            const completedArr = JSON.parse(completedStr);
            const lessonItems = document.querySelectorAll('a.konjam-feature-item[data-lesson]');
            
            lessonItems.forEach(item => {
                const lessonId = item.getAttribute('data-lesson');
                if (completedArr.includes(lessonId)) {
                    const tick = item.querySelector('.lesson-tick');
                    if (tick) {
                        tick.style.display = 'inline';
                    }
                    item.style.borderColor = 'rgba(34, 197, 94, 0.4)';
                    item.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), transparent)';
                }
            });
        }
    } catch (e) {
        console.error("Dashboard check failed:", e);
    }
});
</script>
