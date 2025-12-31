// ============================================
// Navigation Component
// 네비게이션, 드롭다운, 모바일 메뉴, Dynamic Island
// ============================================

/**
 * Dynamic Island 확장/축소 기능
 * 호버 시 확장, 호버 해제 시 축소 (blur fade 효과)
 */
function initDynamicIsland() {
    const nav = document.querySelector('.floating-nav');
    if (!nav) return;

    // 모바일에서는 Dynamic Island 비활성화
    const isMobile = () => window.innerWidth <= 1024;

    let expandTimeout = null;
    let isHovering = false;

    // 호버 시 확장
    nav.addEventListener('mouseenter', () => {
        if (isMobile()) return;
        isHovering = true;
        clearTimeout(expandTimeout);
        nav.classList.add('is-expanded');
    });

    // 호버 해제 시 축소 (300ms 딜레이)
    nav.addEventListener('mouseleave', () => {
        if (isMobile()) return;
        isHovering = false;
        expandTimeout = setTimeout(() => {
            if (!isHovering) {
                nav.classList.remove('is-expanded');
            }
        }, 300);
    });

    // 스크롤 다운 시 축소 (100px 이상 스크롤 시)
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (isMobile()) return;
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            nav.classList.remove('is-expanded');
        }
        lastScrollY = window.scrollY;
    }, { passive: true });

    // 리사이즈 시 모바일 전환되면 클래스 제거
    window.addEventListener('resize', () => {
        if (isMobile()) {
            nav.classList.remove('is-expanded');
        }
    });
}

function initNavigation() {
    // Dynamic Island 초기화
    initDynamicIsland();

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
// Hero Card Animation
// Blur In effect with IntersectionObserver
// ============================================

/**
 * 히어로 네비게이션 카드 Blur In 애니메이션
 * 스크롤 시 카드가 흐릿한 상태에서 선명하게 나타남
 */
function initHeroCardAnimation() {
    const cards = document.querySelectorAll('.hero-nav-card');
    if (!cards.length) return;

    // 이미 visible 클래스가 있으면 스킵
    if (cards[0].classList.contains('visible')) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 모든 카드에 visible 클래스 추가
                cards.forEach(card => card.classList.add('visible'));
                observer.disconnect(); // 한 번만 실행
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
    });

    // 첫 번째 카드 관찰
    observer.observe(cards[0]);

    // 초기 로드 시 카드가 이미 뷰포트에 있으면 즉시 표시 (약간의 딜레이로 애니메이션 효과 유지)
    setTimeout(() => {
        const rect = cards[0].getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            cards.forEach(card => card.classList.add('visible'));
            observer.disconnect();
        }
    }, 100);
}

// 전역 함수로 내보내기 (HTMX afterSwap에서 호출용)
window.initHeroCardAnimation = initHeroCardAnimation;

// ============================================
// UI Utilities
// Alert, Smooth Scroll, Clients Slider
// ============================================

function initUIUtilities() {
    // 히어로 카드 애니메이션 초기화
    initHeroCardAnimation();
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
