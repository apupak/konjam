document.addEventListener('DOMContentLoaded', () => {
    // Unregister any lingering Service Workers from previous PWA setups
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (let registration of registrations) {
                registration.unregister();
            }
        });
    }

    // Dynamic injections
    const headerInner = document.querySelector('.md-header__inner');

    if (headerInner) {
        // Create a container for the auth button if it doesn't exist
        let authContainer = document.querySelector('.konjam-header-auth');
        if (!authContainer) {
            authContainer = document.createElement('div');
            authContainer.className = 'konjam-header-auth';
            headerInner.appendChild(authContainer);
        }

        // Load Firebase and handle auth state
        import('/assets/js/firebase-config.js').then(firebase => {
            firebase.onAuthStateChanged(firebase.auth, (user) => {
                if (user) {
                    authContainer.innerHTML = `
                        <a href="/profile/" class="konjam-auth-btn profile-btn" title="View Profile">
                            <img src="${user.photoURL}" referrerPolicy="no-referrer" />
                            <span>${user.displayName.split(' ')[0]}</span>
                        </a>
                    `;
                } else {
                    authContainer.innerHTML = `
                        <button class="konjam-auth-btn login-btn" id="header-login-btn">
                            <span>Login</span>
                        </button>
                    `;

                    const loginBtn = document.getElementById('header-login-btn');
                    if (loginBtn) {
                        loginBtn.addEventListener('click', async () => {
                            try {
                                const res = await firebase.signInWithPopup(firebase.auth, firebase.provider);
                                console.log("Header login success:", res.user.displayName);
                                // Progress loading happens in profile.md or we could trigger it here if needed
                                // For simplicity, we just reload as that's the established pattern in this project
                                window.location.reload();
                            } catch (err) {
                                console.error("Header login failed:", err);
                                alert("Login failed: " + err.message);
                            }
                        });
                    }
                }
            });
        }).catch(err => console.error("KONJAM: Auth injection failed.", err));
    }

    // Dynamically import progress module so it works across all site pages
    import('/assets/js/progress.js').then(module => {
        const progress = module.calculateProgress();

        // Find the MkDocs header title area to inject the progress UI
        const headerTitle = document.querySelector('.md-header__title');

        if (headerTitle) {
            // Extract emoji and name
            const rankParts = progress.rank.title.split(' ');
            const emoji = rankParts[0];
            const rankName = rankParts.slice(1).join(' ');

            const progressUi = `
                <div class="konjam-header-progress" title="${progress.percentToNext}% to ${progress.nextRank ? progress.nextRank.title : 'Max Rank'}" onclick="window.location.href='/profile/'">
                    <span class="shp-emoji">${emoji}</span>
                    <span class="shp-rank">${rankName}</span>
                    
                    <div class="shp-bar-wrapper">
                        <div class="shp-bar-fill" style="width: ${progress.percentToNext}%;"></div>
                    </div>
                    
                    <span class="shp-percent">${progress.percentToNext}%</span>
                </div>
            `;

            // Insert the progress UI next to the site title
            headerTitle.insertAdjacentHTML('afterend', progressUi);
        }
    }).catch(err => {
        console.error("KONJAM: Could not load progress indicator in header.", err);
    });
});
