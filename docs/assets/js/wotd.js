/**
 * KONJAM Phrase of the Day & Streak Tracker
 */

const WOTD_PHRASES = [
    { kan: "வணக்கம்", dKan: "Vanakkam", eng: "Hello / Worship.", audio: "phrase_vanakkam" },
    { kan: "எப்படி இருக்கீங்க?", dKan: "Eppadi irukkeenga?", eng: "How are you?", audio: "phrase_eppadi_irukkeenga" },
    { kan: "ரொம்ப நன்றி", dKan: "Romba nandri", eng: "Thank you very much.", audio: "phrase_romba_nandri" },
    { kan: "எவ்வளவு ஆச்சு?", dKan: "Evvalavu aachu?", eng: "How much did it cost?", audio: "phrase_evvalavu_aachu" },
    { kan: "கொஞ்சம் அட்ஜஸ்ட் பண்ணுங்க", dKan: "Konjam adjust pannunga", eng: "Please adjust a little.", audio: "phrase_konjam_adjust" },
    { kan: "சாப்பிட்டாச்சா?", dKan: "Saappittaachaa?", eng: "Had your meal?", audio: "phrase_saappittaachaa" },
    { kan: "எனக்கு தெரியாது", dKan: "Enakku theriyaadhu", eng: "I don't know.", audio: "phrase_enakku_theriyaadhu" },
    { kan: "வேண்டாம்", dKan: "Vendaam", eng: "Don't want / No need.", audio: "word_vendaam" },
    { kan: "சரி", dKan: "Sari", eng: "Okay / Alright.", audio: "word_sari" },
    { kan: "வாங்க", dKan: "Vaanga", eng: "Come (respectful).", audio: "word_vaanga" },
    { kan: "போகலாம்", dKan: "Pogalaam", eng: "Let's go.", audio: "word_pogalaam" },
    { kan: "அப்புறம் பாக்கலாம்", dKan: "Appuram paakkalaam", eng: "Let's meet later.", audio: "phrase_appuram_paakkalaam" },
    { kan: "சீக்கிரம் வாங்க", dKan: "Seekkiram vaanga", eng: "Come fast.", audio: "phrase_seekkiram_vaanga" },
    { kan: "நிறுத்துங்க", dKan: "Nirutthunga", eng: "Stop.", audio: "word_nirutthunga" },
    { kan: "தமிழ் பேசுங்க", dKan: "Thamizh pesunga", eng: "Speak in Tamil.", audio: "phrase_thamizh_pesunga" },
    { kan: "வலது பக்கம்", dKan: "Valadhu pakkam", eng: "To the right.", audio: "phrase_valadhu_pakkam" },
    { kan: "இடது பக்கம்", dKan: "Idadhu pakkam", eng: "To the left.", audio: "word_idadhu_pakkam" }
];

// Helper to get consistent hash based on the date string
function getDeterministicWordIndex(dateStr) {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % WOTD_PHRASES.length;
}

// Ensure the WSD (Words Service Dictionary) audio is ready
const wotdAudio = new Audio();
window.playWotdAudio = function (filename) {
    const voiceDir = localStorage.getItem('konjam_voice_dir') || 'audio_native_v4_male';
    wotdAudio.src = `/assets/${voiceDir}/${filename}.mp3`;
    wotdAudio.play().catch(e => console.log("[KONJAM] WOTD Audio play failed:", filename));
};

function initWotd() {
    const root = document.getElementById('konjam-wotd-root');
    if (!root) return; // Only process if the container exists (homepage)

    const todayDateObj = new Date();
    // Use local YYYY-MM-DD
    const todayStr = `${todayDateObj.getFullYear()}-${(todayDateObj.getMonth() + 1).toString().padStart(2, '0')}-${todayDateObj.getDate().toString().padStart(2, '0')}`;

    // Streak Calculation
    let lastVisitStr = localStorage.getItem('konjam_last_visit');
    let streakCount = parseInt(localStorage.getItem('konjam_streak')) || 0;

    if (!lastVisitStr) {
        // First visit
        streakCount = 1;
    } else if (lastVisitStr !== todayStr) {
        // Did they miss a day?
        const lastVisitDate = new Date(lastVisitStr + 'T00:00:00');
        const differenceInTime = todayDateObj.getTime() - lastVisitDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

        if (differenceInDays === 1) {
            streakCount++;
        } else {
            // Broke the streak (or time traveled backwards in testing)
            streakCount = 1;
        }

        localStorage.setItem('konjam_last_visit', todayStr);
        localStorage.setItem('konjam_streak', streakCount.toString());

        // Log daily activity for interacting with WOTD
        if (window.konjamLogActivity) window.konjamLogActivity(1);

        // Evaluate Streak Badges
        if (window.unlockBadge) {
            if (streakCount >= 2) window.unlockBadge('regular_giraki');
            if (streakCount >= 5) window.unlockBadge('dedicated_shishya');
        }
    }

    // Select Word
    const wordIndex = getDeterministicWordIndex(todayStr);
    const phrase = WOTD_PHRASES[wordIndex];

    // Render HTML
    const isActiveStreak = streakCount > 1;
    const streakIcon = isActiveStreak ? '🔥' : '⏳';

    root.innerHTML = `
    <div class="konjam-wotd-container" onclick="playWotdAudio('${phrase.audio}')">
        <div class="konjam-wotd-header">
            <h3>Phrase of the Day</h3>
            <div class="konjam-streak-pill ${isActiveStreak ? 'active' : ''}" title="Your daily streak">
                <span class="streak-icon">${streakIcon}</span>
                <span class="streak-count">${streakCount} ${streakCount === 1 ? 'Day' : 'Days'}</span>
            </div>
        </div>
        
        <div class="konjam-wotd-body">
            <div class="konjam-wotd-kan">${phrase.kan}</div>
            <div class="konjam-wotd-dkan">⟨${phrase.dKan}⟩</div>
            <div class="konjam-wotd-eng">"${phrase.eng}"</div>
            
            <div class="konjam-wotd-play">
                <span class="audio-icon">🔊</span> Tap to Play
            </div>
        </div>
    </div>
`;
}

document.addEventListener('DOMContentLoaded', initWotd);
