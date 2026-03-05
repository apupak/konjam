/**
 * activity.js
 * Tracks daily user activities to build a heatmap.
 */

export function getActivityLog() {
    try {
        const logStr = localStorage.getItem('konjam_activity_log');
        return logStr ? JSON.parse(logStr) : {};
    } catch {
        return {};
    }
}

export function logActivity(weight = 1) {
    try {
        const dStr = new Date().toLocaleDateString('en-CA');
        const logStr = localStorage.getItem('konjam_activity_log');
        const log = logStr ? JSON.parse(logStr) : {};
        log[dStr] = (log[dStr] || 0) + weight;
        localStorage.setItem('konjam_activity_log', JSON.stringify(log));
    } catch (e) {
        console.error("Failed to log activity", e);
    }
}

// Make it globally available for legacy scripts to avoid module import issues in every file
window.konjamLogActivity = logActivity;
