// ============================================
// Navigation Component
// 네비게이션, 드롭다운, 모바일 메뉴 관련 기능
// ============================================

function initNavigation() {
    // Floating Glass Navigation - Mobile Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.floating-nav .nav-menu');
    const dropdowns = document.querySelectorAll('.floating-nav .dropdown');

    // 모바일 메뉴 토글
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 모바일 드롭다운 토글
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        if (toggle) {
            toggle.addEventListener('click', function(e) {
                // On mobile (< 1024px), toggle dropdown on click
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');

                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove('active');
                        }
                    });
                }
            });
        }
    });

    // 외부 클릭 시 모바일 메뉴 닫기
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.floating-nav')) {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // 데스크톱 리사이즈 시 모바일 메뉴 닫기
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
}

// ============================================
// UI Utilities
// Alert, Smooth Scroll, Clients Slider
// ============================================

function initUIUtilities() {
    // Alert 닫기
    const closeAlerts = document.querySelectorAll('.alert__close');
    closeAlerts.forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 클라이언트 슬라이더 무한 루프 설정
    const slider = document.querySelector('.clients-slider');
    if (slider) {
        const sliderContent = slider.innerHTML;
        slider.innerHTML += sliderContent; // 복제하여 무한 루프
    }
}

// 전역 함수로 내보내기
window.initNavigation = initNavigation;
window.initUIUtilities = initUIUtilities;
