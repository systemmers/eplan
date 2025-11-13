// ePlan Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('ePlan website loaded');
    
    // 네비게이션 토글 (모바일)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
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
});

