# 📝 Local Resident Profile

Welcome to your Chennai progress dashboard! As you complete lessons and navigate street scenarios in the games, you will earn Respect Points (**RP**), rank up, and unlock exclusive badges.

<div id="konjam-profile-root">
    <div style="text-align: center; padding: 40px; color: var(--md-default-fg-color--light);">
        <i>Initializing your Chennai profile...</i>
    </div>
</div>

<script type="module">
    import { auth, provider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, doc, getDoc, setDoc } from '/assets/js/firebase-config.js';
    import { calculateProgress, loadProgressFromFirestore, syncProgressToFirestore, clearLocalProgress } from '/assets/js/progress.js';
    import { getActivityLog } from '/assets/js/activity.js';

    console.log("Profile module loaded. Auth state check starting...");

    onAuthStateChanged(auth, async (user) => {
        console.log("Auth state changed. User:", user ? user.displayName : "Guest (Not Logged In)");
        if (user) {
            try {
                // Short throttle to ensure Firestore is ready
                await new Promise(r => setTimeout(r, 500));
                const loaded = await loadProgressFromFirestore();
                console.log("Cloud data check complete. Loaded successfully:", loaded);
                
                // If this is the first time we've fetched cloud data in this session, 
                // reload so site-wide UI (phonetics, lessons) reflects the fresh state.
                if (loaded && !sessionStorage.getItem('konjam_session_synced')) {
                    sessionStorage.setItem('konjam_session_synced', 'true');
                    console.log("First sync of session: Reloading for UI consistency...");
                    window.location.reload();
                    return; // Stop execution here
                }
                
                await syncProgressToFirestore();
                console.log("Local state synced to cloud.");
            } catch (err) {
                console.error("Firestore sync error:", err);
            }
        }
        try {
            await renderProfile(user);
        } catch (renderErr) {
            console.error("Critical rendering error in Profile:", renderErr);
            const root = document.getElementById('konjam-profile-root');
            if (root) root.innerHTML = `<div style="padding:20px; color:#FFB6C1;">Error rendering profile. Please <a href="." style="color:inherit; text-decoration:underline;">refresh</a>.</div>`;
        }
    });

    async function renderProfile(user) {
        // Robustness check for ID errors
        const getSafeElement = (id) => {
            if (!id) {
                console.warn("getSafeElement received an empty ID.");
                return null;
            }
            return document.getElementById(id);
        };

        const progress = calculateProgress();
        const activityLog = getActivityLog();
        const unlockedBadges = window.getUnlockedBadges ? window.getUnlockedBadges() : [];
        const badgeDefs = window.BADGE_DEFINITIONS || {};
        const currentStreak = window.localStorage.getItem('konjam_streak') || 1;

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
                    <button id="firebase-login-btn" style="background: var(--konjam-ombre-gradient); border: none; color: #1E293B; padding: 12px 24px; border-radius: 20px; cursor: pointer; font-weight: 700; font-family: 'Outfit'; box-shadow: 0 4px 15px rgba(137, 207, 240, 0.3);">Log in with Google</button>
                    <div style="margin-top:10px; font-size:10px; opacity:0.6;">Note: Use <b>localhost</b> if login fails on 127.0.0.1</div>
                </div>
            `;
        }

        let html = authHtml + `
            <div class="konjam-profile-card">
                <div class="konjam-profile-rank-header">
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
                <div class="konjam-profile-progress-bar">
                    <div class="sp-fill" style="width: ${progress.percentToNext}%"></div>
                </div>
                <div class="konjam-profile-progress-text">
                    ${progress.nextRank ? `<b>${progress.percentToNext}%</b> progress to ${progress.nextRank.title}` : 'Maximum Rank Achieved! You are a true Chennaite.'}
                </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05);">
                <h3 style="margin-top: 0; margin-bottom: 12px; font-family: Outfit, sans-serif; font-size: 16px; color: var(--md-default-fg-color--light);">Consistency (Last 90 Days)</h3>
                <div class="konjam-heatmap-container">
                    <div class="heatmap-grid">
        `;
        
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
                <button class="konjam-share-button profile-share-btn" id="profile-share-btn">
                    <span class="share-icon">📤</span> Share My Progress
                </button>
            </div>
            
            <h2 style="margin-top: 40px; margin-bottom: 20px;">🏆 Achiever Badges</h2>
            <div class="konjam-badge-grid">
        `;

        for (const [badgeId, badge] of Object.entries(badgeDefs)) {
            const isUnlocked = unlockedBadges.includes(badgeId);
            const statusClass = isUnlocked ? 'unlocked' : 'locked';
            const displayEmoji = isUnlocked ? badge.emoji : '🔒';
            html += `
                <div class="konjam-badge ${statusClass}">
                    <div class="badge-icon">${displayEmoji}</div>
                    <div class="badge-title">${badge.title}</div>
                    <div class="badge-desc">${badge.description}</div>
                </div>
            `;
        }

        html += `</div>`;
        const root = getSafeElement('konjam-profile-root');
        if (root) root.innerHTML = html;

        // Attaching Listeners
        if (user) {
            const logoutBtn = getSafeElement('firebase-logout-btn');
            if (logoutBtn) logoutBtn.addEventListener('click', async () => {
                console.log("Logout clicked. Performing final sync...");
                await syncProgressToFirestore();
                clearLocalProgress();
                signOut(auth).then(() => {
                    window.location.reload();
                });
            });
        } else {
            const loginBtn = getSafeElement('firebase-login-btn');
            if (loginBtn) {
                loginBtn.addEventListener('click', async () => {
                    console.log("Login button clicked! Attempting popup...");
                    try {
                        const res = await signInWithPopup(auth, provider);
                        console.log("Popup login success:", res.user.displayName);
                        // Fetch progress immediately so it's in localStorage before reload
                        await loadProgressFromFirestore();
                        sessionStorage.setItem('konjam_session_synced', 'true');
                        window.location.reload();
                    } catch (err) {
                        console.error("Firebase Login Error:", err);
                        alert("Login failed. Possible solutions:\n1. Use 'localhost' instead of IP address.\n2. Enable third-party cookies.\n\nError: " + err.message);
                    }
                });
            }
        }

        const shareBtn = getSafeElement('profile-share-btn');
        if (shareBtn) shareBtn.addEventListener('click', () => {
            const arr = unlockedBadges.slice(0, 3).map(bid => ({emoji: badgeDefs[bid].emoji, title: badgeDefs[bid].title}));
            window.triggerProfileShare(progress.rank.title, currentStreak, arr);
        });
    }
</script>
