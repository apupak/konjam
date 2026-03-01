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
    const completedStr = localStorage.getItem('swalpa_completed_lessons');
    if (completedStr) {
        try {
            const completedArr = JSON.parse(completedStr);
            totalPoints += (completedArr.length * 100);
        } catch (e) { }
    }

    // Suffix Station: 1 point per point
    totalPoints += scores['suffix-station'] || 0;

    // Meter Haaki: level * 100 + respect
    if (scores['meter-haaki']) {
        totalPoints += (scores['meter-haaki'].level * 100) + (scores['meter-haaki'].respect || 0);
    }

    // Adjust Maadi: level * 100 + respect
    if (scores['adjust-maadi']) {
        totalPoints += (scores['adjust-maadi'].level * 100) + (scores['adjust-maadi'].respect || 0);
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
    const completedLessons = localStorage.getItem('swalpa_completed_lessons');
    const streak = localStorage.getItem('swalpa_streak');

    try {
        await setDoc(doc(db, "users", user.uid), {
            totalPoints: progress.totalPoints,
            rankTitle: progress.rank.title,
            scores: scores,
            completedLessons: completedLessons ? JSON.parse(completedLessons) : [],
            streak: streak ? parseInt(streak, 10) : 1,
            lastSynced: new Date().toISOString()
        }, { merge: true });
        console.log("Progress synced to Firestore");
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
            if (data.completedLessons) {
                localStorage.setItem('swalpa_completed_lessons', JSON.stringify(data.completedLessons));
            }
            if (data.streak) {
                localStorage.setItem('swalpa_streak', data.streak.toString());
            }
            if (data.scores) {
                localStorage.setItem('swalpa_high_scores', JSON.stringify(data.scores));
            }
            // Trigger a reload or UI update
            return true;
        }
    } catch (e) {
        console.error("Error loading from Firestore:", e);
    }
    return false;
}
