document.addEventListener('DOMContentLoaded', function () {

    /*
     * ArtsByPraveen
     * Accessibility fixes for icon-only buttons
     */

    // ==========================================
    // 1. MOBILE MENU OPEN BUTTON
    // ==========================================
    const menuBtn = document.getElementById('menuBtn');

    if (menuBtn) {
        menuBtn.setAttribute('type', 'button');
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuBtn.setAttribute('aria-expanded', 'false');

        const icon = menuBtn.querySelector('svg');

        if (icon) {
            icon.setAttribute('aria-hidden', 'true');
            icon.setAttribute('focusable', 'false');
        }
    }


    // ==========================================
    // 2. MOBILE MENU CLOSE BUTTON
    // ==========================================
    const menuClose = document.getElementById('menuClose');

    if (menuClose) {
        menuClose.setAttribute('type', 'button');
        menuClose.setAttribute('aria-label', 'Close menu');

        const icon = menuClose.querySelector('svg');

        if (icon) {
            icon.setAttribute('aria-hidden', 'true');
            icon.setAttribute('focusable', 'false');
        }
    }


    // ==========================================
    // 3. PREVIOUS PROJECT BUTTON
    // ==========================================
    const projPrev = document.getElementById('projPrev');

    if (projPrev) {
        projPrev.setAttribute('type', 'button');
        projPrev.setAttribute('aria-label', 'Previous project');

        const icon = projPrev.querySelector('svg');

        if (icon) {
            icon.setAttribute('aria-hidden', 'true');
            icon.setAttribute('focusable', 'false');
        }
    }


    // ==========================================
    // 4. NEXT PROJECT BUTTON
    // ==========================================
    const projNext = document.getElementById('projNext');

    if (projNext) {
        projNext.setAttribute('type', 'button');
        projNext.setAttribute('aria-label', 'Next project');

        const icon = projNext.querySelector('svg');

        if (icon) {
            icon.setAttribute('aria-hidden', 'true');
            icon.setAttribute('focusable', 'false');
        }
    }


    // ==========================================
    // 5. SEND MESSAGE BUTTON
    // ==========================================
    // No aria-label is added because the button
    // already has visible text: "Send Message".
    const submitBtn = document.getElementById('submitBtn');

    if (submitBtn) {
        submitBtn.setAttribute('type', 'submit');
    }

});
