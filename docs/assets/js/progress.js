/**
 * progress.js
 * Calculates global "Respect Points" and "Chennai Thala" rank.
 */

import { getHighScores } from './scores.js';
import { auth, db, doc, setDoc, getDoc } from './firebase-config.js';

const RANKS = [
    { title: "🌴 Tourist", threshold: 0, desc: "Just arrived at Central Station. Confused but curious." },
    { title: "💻 Techie", threshold: 100, desc: "Can find the nearest Filter Kaapi. Know the MRTS lines." },
    { title: "🏠 Resident", threshold: 500, desc: "You don't need Google Maps for T. Nagar anymore." },
    { title: "🛵 Ooru Local", threshold: 1500, desc: "You can negotiate with any auto driver. Legend." },
    { title: "👑 Chennai Thala", threshold: 3000, desc: "Namma Ooru is your kingdom. You speak the language of the streets." }
];

export function calculateProgress() {
    const scores = getHighScores();
    let totalPoints = 0;

    // Lessons: 100 points per completed lesson
    const completedStr = localStorage.getItem('konjam_completed_lessons');
    if (completedStr) {
        try {
            const completedArr = JSON.parse(completedStr);
            totalPoints += (completedArr.length * 100);
        } catch (e) { }
    }

    // Suffix Station: 1 point per point
    totalPoints += scores['suffix-station'] || 0;

    // Meter Podunga (Legacy: Meter Haaki): level * 100 + respect
    const meterScore = scores['meter-podunga'] || scores['meter-haaki'];
    if (meterScore) {
        totalPoints += (meterScore.level * 100) + (meterScore.respect || 0);
    }

    // Adjust Pannunga (Legacy: Adjust Maadi): level * 100 + respect
    const adjustScore = scores['adjust-pannunga'] || scores['adjust-maadi'];
    if (adjustScore) {
        totalPoints += (adjustScore.level * 100) + (adjustScore.respect || 0);
    }

    // Determine Rank
    let currentRank = RANKS[0];
    let currentRankIndex = 0;
    for (let i = RANKS.length - 1; i >= 0; i--) {
        if (totalPoints >= RANKS[i].threshold) {
            currentRank = RANKS[i];
            currentRankIndex = i;
            break;
        }
    }

    // Level-up Confetti & Local Storage Logic
    try {
        const savedRankStr = localStorage.getItem('konjam_rank_index');
        const savedRank = savedRankStr ? parseInt(savedRankStr, 10) : 0;

        if (currentRankIndex > savedRank) {
            // Level up! Fire confetti and update rank up
            // Dynamically load the confetti script to avoid module scope issues
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
            script.onload = () => {
                if (window.confetti) {
                    setTimeout(() => {
                        const end = Date.now() + 3000; // 3 seconds of confetti
                        const colors = ['#89CFF0', '#FFB6C1', '#FFD700'];

                        (function frame() {
                            window.confetti({
                                particleCount: 5,
                                angle: 60,
                                spread: 55,
                                origin: { x: 0, y: 0.6 },
                                colors: colors
                            });
                            window.confetti({
                                particleCount: 5,
                                angle: 120,
                                spread: 55,
                                origin: { x: 1, y: 0.6 },
                                colors: colors
                            });

                            if (Date.now() < end) {
                                requestAnimationFrame(frame);
                            }
                        }());
                    }, 500); // 500ms delay to ensure they see it
                }
            };
            document.head.appendChild(script);

            localStorage.setItem('konjam_rank_index', currentRankIndex.toString());
        } else if (currentRankIndex < savedRank) {
            localStorage.setItem('konjam_rank_index', currentRankIndex.toString());
        } else if (savedRankStr === null) {
            localStorage.setItem('konjam_rank_index', currentRankIndex.toString());
        }
    } catch (e) { }

    // Find next rank for percentage
    const nextRankIndex = RANKS.indexOf(currentRank) + 1;
    let percentToNext = 100;
    if (nextRankIndex < RANKS.length) {
        const range = RANKS[nextRankIndex].threshold - currentRank.threshold;
        const progress = totalPoints - currentRank.threshold;
        percentToNext = Math.min(Math.round((progress / range) * 100), 99);
    }

    return {
        totalPoints,
        rank: currentRank,
        percentToNext,
        nextRank: nextRankIndex < RANKS.length ? RANKS[nextRankIndex] : null
    };
}

export async function syncProgressToFirestore() {
    const user = auth.currentUser;
    if (!user) return;

    const progress = calculateProgress();
    const scores = getHighScores();
    const completedLessons = localStorage.getItem('konjam_completed_lessons');
    const streak = localStorage.getItem('konjam_streak');
    const lastVisit = localStorage.getItem('konjam_last_visit');
    const activityLog = localStorage.getItem('konjam_activity_log');
    const unlockedBadges = localStorage.getItem('konjam_unlocked_badges');
    const rankIndex = localStorage.getItem('konjam_rank_index');
    const showPhonetics = localStorage.getItem('konjam_show_phonetics');
    const voiceDir = localStorage.getItem('konjam_voice_dir');

    try {
        await setDoc(doc(db, "users", user.uid), {
            totalPoints: progress.totalPoints,
            rankTitle: progress.rank.title,
            rankIndex: rankIndex ? parseInt(rankIndex, 10) : 0,
            scores: scores,
            completedLessons: completedLessons ? JSON.parse(completedLessons) : [],
            streak: streak ? parseInt(streak, 10) : 1,
            lastVisit: lastVisit || new Date().toISOString().split('T')[0],
            activityLog: activityLog ? JSON.parse(activityLog) : {},
            unlockedBadges: unlockedBadges ? JSON.parse(unlockedBadges) : [],
            preferences: {
                showPhonetics: showPhonetics === 'true',
                voiceDir: voiceDir || 'audio_native_v4_male'
            },
            lastSynced: new Date().toISOString()
        }, { merge: true });
        console.log("[KONJAM] All useful data synced to Firestore");
        // Dispatch global event for iframes (games) to listen to
        window.dispatchEvent(new CustomEvent('konjam-data-synced', { detail: 'completed' }));
    } catch (e) {
        console.error("Error syncing to Firestore:", e);
    }
}

export async function loadProgressFromFirestore() {
    const user = auth.currentUser;
    if (!user) return;

    try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();

            // 1. Completed Lessons (Union of local and cloud)
            const localLessons = JSON.parse(localStorage.getItem('konjam_completed_lessons') || '[]');
            const cloudLessons = data.completedLessons || [];
            const mergedLessons = Array.from(new Set([...localLessons, ...cloudLessons]));
            localStorage.setItem('konjam_completed_lessons', JSON.stringify(mergedLessons));

            // 2. Streak Logic: Prevent overwriting a higher local streak unless cloud is even higher
            const localStreak = parseInt(localStorage.getItem('konjam_streak') || '0', 10);
            if (data.streak && data.streak >= localStreak) {
                localStorage.setItem('konjam_streak', data.streak.toString());
                if (data.lastVisit) {
                    localStorage.setItem('konjam_last_visit', data.lastVisit);
                }
            } else if (data.lastVisit && !localStorage.getItem('konjam_last_visit')) {
                // Only use cloud visit if local is missing
                localStorage.setItem('konjam_last_visit', data.lastVisit);
            }

            // 3. High Scores (Take higher of local or cloud)
            const localScores = getHighScores();
            const cloudScores = data.scores || {};
            const mergedScores = { ...localScores };

            for (const [gameId, cloudVal] of Object.entries(cloudScores)) {
                if (gameId === 'suffix-station') {
                    mergedScores[gameId] = Math.max(localScores[gameId] || 0, cloudVal);
                } else if (cloudVal && typeof cloudVal === 'object') {
                    // Meter Podu or Adjust Maadi
                    const localVal = localScores[gameId] || { level: 0, respect: 0 };
                    if (cloudVal.level > localVal.level) {
                        mergedScores[gameId] = cloudVal;
                    } else if (cloudVal.level === localVal.level && cloudVal.respect > localVal.respect) {
                        mergedScores[gameId] = cloudVal;
                    }
                }
            }
            localStorage.setItem('konjam_high_scores', JSON.stringify(mergedScores));

            // 4. Badges (Union)
            const localBadges = JSON.parse(localStorage.getItem('konjam_unlocked_badges') || '[]');
            const cloudBadges = data.unlockedBadges || [];
            const mergedBadges = Array.from(new Set([...localBadges, ...cloudBadges]));
            localStorage.setItem('konjam_unlocked_badges', JSON.stringify(mergedBadges));

            // 5. Activity Log (Merge daily counts)
            const localLog = JSON.parse(localStorage.getItem('konjam_activity_log') || '{}');
            const cloudLog = data.activityLog || {};
            const mergedLog = { ...localLog };
            for (const [date, count] of Object.entries(cloudLog)) {
                mergedLog[date] = Math.max(localLog[date] || 0, count);
            }
            localStorage.setItem('konjam_activity_log', JSON.stringify(mergedLog));

            // 6. Rank Index & Preferences
            if (data.rankIndex !== undefined) {
                const localRank = parseInt(localStorage.getItem('konjam_rank_index') || '0', 10);
                localStorage.setItem('konjam_rank_index', Math.max(localRank, data.rankIndex).toString());
            }

            if (data.preferences) {
                if (data.preferences.showPhonetics !== undefined) {
                    localStorage.setItem('konjam_show_phonetics', data.preferences.showPhonetics.toString());
                }
                if (data.preferences.voiceDir) {
                    localStorage.setItem('konjam_voice_dir', data.preferences.voiceDir);
                }
            }

            return true;
        }
    } catch (e) {
        console.error("Error loading from Firestore:", e);
    }
    return false;
}

/**
 * Force clears all local storage keys related to progress/user state.
 * Used during logout to ensure a clean state for the next session.
 */
export function clearLocalProgress() {
    const keysToRemove = [
        'konjam_completed_lessons',
        'konjam_rank_index',
        'konjam_high_scores',
        'konjam_streak',
        'konjam_last_visit',
        'konjam_activity_log',
        'konjam_unlocked_badges',
        'konjam_show_phonetics',
        'konjam_voice_dir',
        // Legacy keys (Swalpa branding)
        'swalpa_completed_lessons',
        'swalpa_high_scores',
        'swalpa_streak',
        'swalpa_rank_index'
    ];

    keysToRemove.forEach(key => localStorage.removeItem(key));
    console.log("[KONJAM] Local progress cache cleared.");
}
