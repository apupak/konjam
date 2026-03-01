# 📝 Local Resident Profile

Welcome to your Chennai progress dashboard! As you complete lessons and navigate street scenarios in the games, you will earn Respect Points (**RP**), rank up, and unlock exclusive badges.

<div id="swalpa-profile-root">
    <div style="text-align: center; padding: 40px; color: var(--md-default-fg-color--light);">
        <i>Initializing your Chennai profile...</i>
    </div>
</div>

<script type="module">
    import { auth, provider, signInWithPopup, signOut, onAuthStateChanged, doc, getDoc, setDoc } from '/assets/js/firebase-config.js';
    import { calculateProgress, loadProgressFromFirestore, syncProgressToFirestore } from '/assets/js/progress.js';
    import { getActivityLog } from '/assets/js/activity.js';

    document.addEventListener('DOMContentLoaded', () => {
        const root = document.getElementById('swalpa-profile-root');
        if (!root) return;

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Try to load cloud data on login
                const loaded = await loadProgressFromFirestore();
                if (loaded) {
                    // If data was updated from cloud, we might need a refresh logic 
                    // or just re-render with local storage which is now updated.
                }
                // Sync current state to cloud as well
                await syncProgressToFirestore();
            }
            renderProfile(user);
        });

        async function renderProfile(user) {
            const progress = calculateProgress();
            const activityLog = getActivityLog();
            const unlockedBadges = window.getUnlockedBadges ? window.getUnlockedBadges() : [];
            const badgeDefs = window.BADGE_DEFINITIONS || {};
            const currentStreak = window.localStorage.getItem('swalpa_streak') || 1;

            let authHtml = "";
            if (user) {
                authHtml = `
                    <div style="margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 12px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <img src="${user.photoURL}" style="width: 32px; height: 32px; border-radius: 50%;" />
                            <span>Logged in as <b>${user.displayName}</b></span>
                        </div>
                        <button id="firebase-logout-btn" style="background: none; border: 1px solid rgba(255,255,255,0.2); color: #94A3B8; padding: 4px 12px; border-radius: 6px; cursor: pointer; font-size: 12px;">Logout</button>
                    </div>
                `;
            } else {
                authHtml = `
                    <div style="margin-bottom: 20px; text-align: center; background: rgba(137, 207, 240, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(137, 207, 240, 0.2);">
                        <p style="margin-top: 0; font-size: 14px; color: var(--md-default-fg-color);">Log in to sync your progress across devices!</p>
                        <button id="firebase-login-btn" style="background: var(--konjam-ombre-gradient); border: none; color: #1E293B; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-weight: 700; font-family: 'Outfit';">Log in with Google</button>
                    </div>
                `;
            }

            let html = authHtml + `
                <div class="swalpa-profile-card">
                    <div class="swalpa-profile-rank-header">
                        <div class="sp-emoji">${progress.rank.title.split(' ')[0]}</div>
                        <div class="sp-details">
                            <h2>${progress.rank.title.split(' ').slice(1).join(' ')}</h2>
                            <div class="sp-points">
                                ${progress.totalPoints} <span>RP</span>
                                <span style="opacity: 0.5; margin: 0 8px;">|</span>
                                🔥 ${currentStreak} <span style="font-size: 0.8em">Day Streak</span>
                            </div>
                        </div>
                    </div>
                    <div class="swalpa-profile-progress-bar">
                        <div class="sp-fill" style="width: ${progress.percentToNext}%"></div>
                    </div>
                    <div class="swalpa-profile-progress-text">
                        ${progress.nextRank ? `<b>${progress.percentToNext}%</b> progress to ${progress.nextRank.title}` : 'Maximum Rank Achieved! You are a true Chennaite.'}
                    </div>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05);">
                    <h3 style="margin-top: 0; margin-bottom: 12px; font-family: Outfit, sans-serif; font-size: 16px; color: var(--md-default-fg-color--light);">Consistency (Last 90 Days)</h3>
                    <div class="swalpa-heatmap-container">
                        <div class="heatmap-grid">
            `;
            
            // Generate last 90 days array
            const todayD = new Date();
            const dates = [];
            for(let i=89; i>=0; i--) {
                const d = new Date(todayD);
                d.setDate(d.getDate() - i);
                dates.push(d.toLocaleDateString('en-CA'));
            }
            
            for(const dStr of dates) {
                const count = activityLog[dStr] || 0;
                let level = 0;
                if(count > 0) level = 1;
                if(count >= 3) level = 2;
                if(count >= 6) level = 3;
                if(count >= 10) level = 4;
                
                html += `<div class="heatmap-cell level-${level}" title="${count} actions on ${dStr}"></div>`;
            }
            
            html += `
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 25px;">
                    <button class="swalpa-share-button profile-share-btn" id="profile-share-btn">
                        <span class="share-icon">📤</span> Share My Progress
                    </button>
                </div>
                
                <h2 style="margin-top: 40px; margin-bottom: 20px;">🏆 Achiever Badges</h2>
                <div class="swalpa-badge-grid">
            `;

            for (const [id, badge] of Object.entries(badgeDefs)) {
                const isUnlocked = unlockedBadges.includes(id);
                const statusClass = isUnlocked ? 'unlocked' : 'locked';
                const displayEmoji = isUnlocked ? badge.emoji : '🔒';
                
                html += `
                    <div class="swalpa-badge ${statusClass}">
                        <div class="badge-icon">${displayEmoji}</div>
                        <div class="badge-title">${badge.title}</div>
                        <div class="badge-desc">${badge.description}</div>
                    </div>
                `;
            }

            html += `</div>`;
            root.innerHTML = html;

            // Event Listeners
            if (user) {
                document.getElementById('firebase-logout-btn').addEventListener('click', () => signOut(auth));
            } else if (document.getElementById('firebase-login-btn')) {
                document.getElementById('firebase-login-btn').addEventListener('click', () => signInWithPopup(auth, provider));
            }

            document.getElementById('profile-share-btn').addEventListener('click', () => {
                const arr = unlockedBadges.slice(0, 3).map(id => ({emoji: badgeDefs[id].emoji, title: badgeDefs[id].title}));
                window.triggerProfileShare(progress.rank.title, currentStreak, arr);
            });
        }
    });
</script>
