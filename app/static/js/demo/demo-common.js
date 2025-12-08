/**
 * Demo Common JavaScript
 *
 * Description: Shared functionality for demo pages
 * Dependencies: None (vanilla JS)
 */

(function() {
    'use strict';

    /**
     * Demo Navigation - Smooth scroll and active state
     */
    function initDemoNav() {
        const navLinks = document.querySelectorAll('.demo-nav__link');

        if (navLinks.length === 0) return;

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        const headerOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Update active state
                        navLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                }
            });
        });

        // Update active state on scroll
        updateActiveNavOnScroll(navLinks);
    }

    /**
     * Update active nav link based on scroll position
     */
    function updateActiveNavOnScroll(navLinks) {
        const sections = [];

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const section = document.getElementById(href.substring(1));
                if (section) {
                    sections.push({ link, section });
                }
            }
        });

        if (sections.length === 0) return;

        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset + 100;

            sections.forEach(({ link, section }) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    /**
     * Code Preview Toggle
     */
    function initCodePreviewToggle() {
        const toggleButtons = document.querySelectorAll('[data-toggle-code]');

        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-toggle-code');
                const codeBlock = document.getElementById(targetId);

                if (codeBlock) {
                    codeBlock.classList.toggle('hidden');
                    this.textContent = codeBlock.classList.contains('hidden')
                        ? 'Show Code'
                        : 'Hide Code';
                }
            });
        });
    }

    /**
     * Pattern Label Copy
     */
    function initPatternLabelCopy() {
        const labels = document.querySelectorAll('.demo-pattern-label');

        labels.forEach(label => {
            label.style.cursor = 'pointer';
            label.title = 'Click to copy';

            label.addEventListener('click', function() {
                const text = this.textContent.trim();
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 1500);
                });
            });
        });
    }

    /**
     * Initialize all demo functionality
     */
    function init() {
        initDemoNav();
        initCodePreviewToggle();
        initPatternLabelCopy();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
