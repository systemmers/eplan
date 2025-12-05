/**
 * Circular Gallery Component
 * 3D 원형 갤러리 - 스크롤 기반 회전
 */

class CircularGallery {
    constructor(element) {
        this.gallery = element;
        this.container = element.querySelector('.circular-gallery__container');
        this.items = element.querySelectorAll('.circular-gallery__item');

        // 설정값
        this.rotation = 0;
        this.isScrolling = false;
        this.scrollTimeout = null;
        this.animationFrameId = null;
        this.radius = parseInt(element.dataset.radius) || 600;
        this.autoRotateSpeed = parseFloat(element.dataset.autoRotateSpeed) || 0.02;

        // 중복 초기화 방지
        if (element.dataset.circularBound) return;
        element.dataset.circularBound = 'true';

        this.init();
    }

    init() {
        if (this.items.length === 0) return;

        this.anglePerItem = 360 / this.items.length;
        this.positionItems();
        this.bindEvents();
        this.startAutoRotate();
        this.update();
    }

    positionItems() {
        this.items.forEach((item, i) => {
            const itemAngle = i * this.anglePerItem;
            item.style.transform = `rotateY(${itemAngle}deg) translateZ(${this.radius}px)`;
            item.dataset.angle = itemAngle;
        });
    }

    bindEvents() {
        // 스크롤 이벤트
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

        // 리사이즈 이벤트 (반응형 대응)
        window.addEventListener('resize', () => this.handleResize());
    }

    handleScroll() {
        this.isScrolling = true;

        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }

        // 스크롤 진행률 계산
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        this.rotation = scrollProgress * 360;

        this.update();

        // 스크롤 종료 감지
        this.scrollTimeout = setTimeout(() => {
            this.isScrolling = false;
        }, 150);
    }

    handleResize() {
        // 모바일에서 radius 조정
        if (window.innerWidth <= 768) {
            this.radius = 400;
        } else if (window.innerWidth <= 480) {
            this.radius = 300;
        } else {
            this.radius = parseInt(this.gallery.dataset.radius) || 600;
        }
        this.positionItems();
        this.update();
    }

    startAutoRotate() {
        const autoRotate = () => {
            if (!this.isScrolling) {
                this.rotation += this.autoRotateSpeed;
                this.update();
            }
            this.animationFrameId = requestAnimationFrame(autoRotate);
        };

        this.animationFrameId = requestAnimationFrame(autoRotate);
    }

    stopAutoRotate() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    update() {
        // 컨테이너 회전
        this.container.style.transform = `rotateY(${this.rotation}deg)`;

        // 각 아이템의 투명도 계산 (전면 밝게, 후면 어둡게)
        const totalRotation = this.rotation % 360;

        this.items.forEach((item) => {
            const itemAngle = parseFloat(item.dataset.angle);
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));

            item.style.opacity = opacity;
        });
    }

    destroy() {
        this.stopAutoRotate();
        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }
        this.gallery.removeAttribute('data-circular-bound');
    }
}

/**
 * 갤러리 초기화 함수
 */
function initCircularGalleries() {
    const galleries = document.querySelectorAll('.circular-gallery');
    galleries.forEach(gallery => {
        if (!gallery.dataset.circularBound) {
            new CircularGallery(gallery);
        }
    });
}

// DOMContentLoaded 시 초기화
document.addEventListener('DOMContentLoaded', initCircularGalleries);

// HTMX 페이지 전환 후 재초기화
document.body.addEventListener('htmx:afterSwap', function(event) {
    if (event.detail.target.id === 'main-content') {
        initCircularGalleries();
    }
});
