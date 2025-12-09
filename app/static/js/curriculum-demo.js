/**
 * ============================================================================
 * Curriculum Demo Page JavaScript
 * ============================================================================
 *
 * File: curriculum-demo.js
 * Purpose: Handle style selector interactions for curriculum demo page
 * Dependencies: None (vanilla JavaScript)
 *
 * Components:
 *   - StyleSelector: Manages active state for style navigation buttons
 *
 * ============================================================================
 */

/**
 * StyleSelector Class
 * Handles the style selector button interactions with active state management
 */
class StyleSelector {
    /**
     * @param {string} selector - CSS selector for style buttons
     */
    constructor(selector) {
        this.buttons = document.querySelectorAll(selector);
        this.activeClass = 'active';

        if (this.buttons.length > 0) {
            this.init();
        }
    }

    /**
     * Initialize event listeners
     */
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleClick(e));
        });

        // Handle hash changes for direct URL navigation
        window.addEventListener('hashchange', () => this.handleHashChange());

        // Set initial state based on URL hash
        this.handleHashChange();
    }

    /**
     * Handle button click
     * @param {Event} e - Click event
     */
    handleClick(e) {
        // Remove active class from all buttons
        this.buttons.forEach(b => b.classList.remove(this.activeClass));

        // Add active class to clicked button
        e.currentTarget.classList.add(this.activeClass);
    }

    /**
     * Handle URL hash change
     * Updates active state based on current hash
     */
    handleHashChange() {
        const hash = window.location.hash;

        if (hash) {
            this.buttons.forEach(btn => {
                const btnHash = btn.getAttribute('href');
                if (btnHash === hash) {
                    this.buttons.forEach(b => b.classList.remove(this.activeClass));
                    btn.classList.add(this.activeClass);
                }
            });
        }
    }
}

/**
 * SmoothScrollHandler Class
 * Handles smooth scrolling for anchor links
 */
class SmoothScrollHandler {
    /**
     * @param {string} selector - CSS selector for anchor links
     * @param {Object} options - Scroll options
     */
    constructor(selector, options = {}) {
        this.links = document.querySelectorAll(selector);
        this.options = {
            behavior: 'smooth',
            block: 'start',
            offset: options.offset || 0,
            ...options
        };

        if (this.links.length > 0) {
            this.init();
        }
    }

    /**
     * Initialize smooth scroll handlers
     */
    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    /**
     * Handle link click for smooth scroll
     * @param {Event} e - Click event
     */
    handleClick(e) {
        const href = e.currentTarget.getAttribute('href');

        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - this.options.offset;

                window.scrollTo({
                    top: offsetTop,
                    behavior: this.options.behavior
                });

                // Update URL hash without scrolling
                history.pushState(null, null, href);
            }
        }
    }
}

/**
 * Initialize all components on DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize style selector
    new StyleSelector('.style-selector__btn');

    // Initialize smooth scroll for style selector links
    new SmoothScrollHandler('.style-selector__btn', {
        offset: 80 // Account for fixed header
    });
});

/**
 * Export for module usage (optional)
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StyleSelector, SmoothScrollHandler };
}
