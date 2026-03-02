---
description: Explore the complete Konjam curriculum. Learn Chennai Tamil step by step, from survival basics to everyday negotiations.
hide:
  - toc
---

# 📚 Core Lessons

Welcome to the KONJAM Curriculum! These 10 modules are designed to take you from a confused newcomer at Central Station to a confident local navigating the streets of Namma Chennai.

<div class="konjam-feature-list">
    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">📖</div>
        <div class="konjam-feature-content">
            <h3>1. History & Nuances</h3>
            <p>Understand the cultural context, the street dialect versus textbook Tamil, and the core philosophy of this guide.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../01_history_and_nuances/" class="konjam-button" data-lesson="01_history_and_nuances">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">🚨</div>
        <div class="konjam-feature-content">
            <h3>2. Survival & Emergencies</h3>
            <p>Essential phrases for getting out of tricky situations, asking for help, and basic navigation.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../02_survival_and_emergencies/" class="konjam-button" data-lesson="02_survival_and_emergencies">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">👋</div>
        <div class="konjam-feature-content">
            <h3>3. Social Interactions</h3>
            <p>Greetings, introducing yourself, making friends, and participating in polite conversation.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../03_social_interactions/" class="konjam-button" data-lesson="03_social_interactions">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">⏰</div>
        <div class="konjam-feature-content">
            <h3>4. Time & Numbers</h3>
            <p>Telling time, negotiating costs, and handling money effectively in shops and rickshaws.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../04_time_and_numbers/" class="konjam-button" data-lesson="04_time_and_numbers">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">⚙️</div>
        <div class="konjam-feature-content">
            <h3>5. Verbs & Grammar</h3>
            <p>The engine of the language—learn how to put complete sentences together using practical grammatical bridges.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../05_verbs_and_grammar/" class="konjam-button" data-lesson="05_verbs_and_grammar">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">📏</div>
        <div class="konjam-feature-content">
            <h3>6. Adjectives & Limits</h3>
            <p>Describing things, people, and situations properly. Express scales, limits, and comparisons.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../06_adjectives/" class="konjam-button" data-lesson="06_adjectives">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">🤙</div>
        <div class="konjam-feature-content">
            <h3>7. Slang & Tanglish</h3>
            <p>Sound like a true Chennaite. Master local colloquialisms, street filler words, and expressive reactions.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../07_slang/" class="konjam-button" data-lesson="07_slang">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">🛺</div>
        <div class="konjam-feature-content">
            <h3>8. Travel & Conflict</h3>
            <p>Navigating autos, buses, MRTS, giving directions, and successfully resolving disputes peacefully.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../08_travel_and_conflict/" class="konjam-button" data-lesson="08_travel_and_conflict">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">📦</div>
        <div class="konjam-feature-content">
            <h3>9. Logistics & Services</h3>
            <p>Dealing with delivery drivers, landlords, swiggy, basic home repairs, and office navigation.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../09_everyday_logistics_and_services/" class="konjam-button" data-lesson="09_everyday_logistics_and_services">Start Lesson</a>
        </div>
    </div>

    <div class="konjam-feature-item">
        <div class="konjam-feature-icon">🛒</div>
        <div class="konjam-feature-content">
            <h3>10. Household & Groceries</h3>
            <p>Interacting with domestic help, identifying local vegetables, understanding recipes, and handling daily errands.</p>
        </div>
        <div class="konjam-feature-action">
            <a href="../10_household_and_logistics/" class="konjam-button" data-lesson="10_household_and_logistics">Start Lesson</a>
        </div>
    </div>
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
            const lessonButtons = document.querySelectorAll('a[data-lesson]');
            
            lessonButtons.forEach(btn => {
                const lessonId = btn.getAttribute('data-lesson');
                if (completedArr.includes(lessonId)) {
                    btn.innerHTML = 'Revise ✅';
                    btn.style.background = '#22c55e';
                    btn.style.boxShadow = 'none';
                    btn.style.color = '#ffffff';
                }
            });
        }
    } catch (e) {
        console.error("Dashboard check failed:", e);
    }
});
</script>
