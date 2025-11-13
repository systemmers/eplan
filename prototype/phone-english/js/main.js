/**
 * ePlan - 전화외국어 섹션 프로토타입
 * JavaScript 인터랙션
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initSmoothScroll();
    initMobileMenu();
    initLevelChartHover();
});

/**
 * Tab Component Initialization
 */
function initTabs() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all tabs and panels
            tabItems.forEach(tab => tab.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked tab and corresponding panel
            this.classList.add('active');
            const activePanel = document.getElementById(tabName);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Mobile Menu Toggle (for responsive navigation)
 */
function initMobileMenu() {
    // Check if mobile menu button exists
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

/**
 * Level Chart Hover Effects
 */
function initLevelChartHover() {
    const levelBlocks = document.querySelectorAll('.level-block');

    levelBlocks.forEach((block, index) => {
        block.addEventListener('mouseenter', function() {
            showLevelTooltip(this, index + 1);
        });

        block.addEventListener('mouseleave', function() {
            hideLevelTooltip();
        });
    });
}

/**
 * Show Level Tooltip
 */
function showLevelTooltip(element, level) {
    // Create tooltip if it doesn't exist
    let tooltip = document.querySelector('.level-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'level-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: var(--color-neutral-dark);
            color: var(--color-neutral-white);
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            z-index: 1000;
            pointer-events: none;
            white-space: nowrap;
        `;
        document.body.appendChild(tooltip);
    }

    // Get level description
    const levelDescriptions = {
        1: 'Beginner - 기초 단계',
        2: 'Beginner - 초급',
        3: 'Beginner - 초급 완성',
        4: 'Pre-intermediate - 중급 준비',
        5: 'Pre-intermediate - 중급 기초',
        6: 'Pre-intermediate - 중급',
        7: 'Intermediate - 중상급',
        8: 'Intermediate - 고급 준비',
        9: 'Advanced - 고급'
    };

    tooltip.textContent = `Level ${level}: ${levelDescriptions[level]}`;

    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 40}px`;
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.display = 'block';
}

/**
 * Hide Level Tooltip
 */
function hideLevelTooltip() {
    const tooltip = document.querySelector('.level-tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

/**
 * Card Hover Animation Enhancement
 */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/**
 * Scroll to Top Button (optional)
 */
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary-yellow);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: var(--shadow-button);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = 'var(--color-primary-yellow-dark)';
    });

    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = 'var(--color-primary-yellow)';
    });
}

// Initialize scroll to top
initScrollToTop();

/**
 * Form Validation (if contact form exists)
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--color-accent-orange)';
                } else {
                    input.style.borderColor = 'var(--color-neutral-border)';
                }
            });

            if (isValid) {
                alert('신청이 접수되었습니다. 곧 연락드리겠습니다.');
                this.reset();
            } else {
                alert('모든 필수 항목을 입력해주세요.');
            }
        });
    });
}

initFormValidation();

/**
 * Lazy Loading Images (optional optimization)
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    initLazyLoading();
}

console.log('ePlan 전화외국어 프로토타입 로드 완료');
