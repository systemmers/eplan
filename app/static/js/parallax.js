/**
 * 패럴랙스 애니메이션 모듈
 * ePlan 프로젝트 통합 버전
 *
 * 스프링 물리 기반 스크롤 패럴랙스 효과
 */

// 스프링 물리 클래스
class SpringValue {
    constructor(initialValue = 0, config = {}) {
        this.value = initialValue;
        this.target = initialValue;
        this.velocity = 0;
        this.stiffness = config.stiffness || 300;
        this.damping = config.damping || 30;
    }

    setTarget(target) {
        this.target = target;
    }

    update(deltaTime) {
        const dt = Math.min(deltaTime, 0.064); // Cap delta time for stability

        // Spring force
        const springForce = -this.stiffness * (this.value - this.target);

        // Damping force
        const dampingForce = -this.damping * this.velocity;

        // Total acceleration
        const acceleration = springForce + dampingForce;

        // Update velocity and position
        this.velocity += acceleration * dt;
        this.value += this.velocity * dt;

        return this.value;
    }
}

// 변환 헬퍼 함수 - 값 범위 매핑
function parallaxTransform(value, inputRange, outputRange) {
    const [inMin, inMax] = inputRange;
    const [outMin, outMax] = outputRange;

    // Clamp input value
    const clampedValue = Math.max(inMin, Math.min(inMax, value));

    // Linear interpolation
    const ratio = (clampedValue - inMin) / (inMax - inMin);
    return outMin + ratio * (outMax - outMin);
}

/**
 * 패럴랙스 컨트롤러 네임스페이스
 */
const HeroParallax = {
    springs: {},
    isAnimating: false,
    lastTime: 0,
    container: null,
    motionContainer: null,
    rows: [],
    boundScrollHandler: null,
    boundResizeHandler: null,
    boundVisibilityHandler: null,
    boundHeightHandler: null,
    FIXED_BOTTOM_MARGIN: 80, // 고정 하단 여백 (px)

    /**
     * 초기화
     * @param {string} containerId - 패럴랙스 컨테이너 ID
     */
    init: function(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.motionContainer = document.getElementById('motionContainer');
        if (!this.motionContainer) return;

        this.rows = [
            document.getElementById('row1'),
            document.getElementById('row2'),
            document.getElementById('row3')
        ].filter(row => row !== null);

        // 스프링 설정
        const springConfig = { stiffness: 300, damping: 30 };
        this.springs = {
            translateX: new SpringValue(0, springConfig),
            translateXReverse: new SpringValue(0, springConfig),
            rotateX: new SpringValue(15, springConfig),
            rotateZ: new SpringValue(20, springConfig),
            translateY: new SpringValue(-700, springConfig),
            opacity: new SpringValue(0.2, springConfig)
        };

        this.lastTime = performance.now();
        this.isAnimating = true;

        // 이벤트 핸들러 바인딩 (cleanup을 위해 저장)
        this.boundScrollHandler = () => this.updateSpringTargets();
        this.boundResizeHandler = () => {
            this.calculateAndSetHeight();
            this.updateSpringTargets();
        };
        this.boundVisibilityHandler = () => this.handleVisibility();

        window.addEventListener('scroll', this.boundScrollHandler, { passive: true });
        window.addEventListener('resize', this.boundResizeHandler, { passive: true });
        document.addEventListener('visibilitychange', this.boundVisibilityHandler);

        // 동적 높이 계산 및 초기 업데이트
        this.calculateAndSetHeight();
        this.updateSpringTargets();

        // 초기 상태 즉시 적용 (애니메이션 시작 전에 현재 스크롤 위치 반영)
        this.applyInitialState();

        this.animate();
    },

    /**
     * 초기 상태 즉시 적용
     * 스크롤 위치에 맞게 초기 transform 값을 즉시 설정
     */
    applyInitialState: function() {
        if (!this.motionContainer) return;

        const progress = this.getScrollProgress();

        // 스프링 값을 타겟으로 즉시 설정 (애니메이션 없이)
        const translateX = parallaxTransform(progress, [0, 1], [0, 1000]);
        const translateXReverse = parallaxTransform(progress, [0, 1], [0, -1000]);
        const rotateX = parallaxTransform(progress, [0, 0.2], [15, 0]);
        const rotateZ = parallaxTransform(progress, [0, 0.2], [20, 0]);
        const translateY = parallaxTransform(progress, [0, 0.2], [-700, 500]);
        const opacity = parallaxTransform(progress, [0, 0.2], [0.2, 1]);

        // 스프링 현재값도 타겟값으로 설정 (점프 방지)
        this.springs.translateX.value = translateX;
        this.springs.translateX.target = translateX;
        this.springs.translateXReverse.value = translateXReverse;
        this.springs.translateXReverse.target = translateXReverse;
        this.springs.rotateX.value = rotateX;
        this.springs.rotateX.target = rotateX;
        this.springs.rotateZ.value = rotateZ;
        this.springs.rotateZ.target = rotateZ;
        this.springs.translateY.value = translateY;
        this.springs.translateY.target = translateY;
        this.springs.opacity.value = opacity;
        this.springs.opacity.target = opacity;

        // 즉시 적용
        this.motionContainer.style.transform = `
            rotateX(${rotateX}deg)
            rotateZ(${rotateZ}deg)
            translateY(${translateY}px)
        `;
        this.motionContainer.style.opacity = opacity;

        // 각 행에도 즉시 적용
        this.rows.forEach((row, index) => {
            if (!row) return;
            const cards = row.querySelectorAll('.parallax-card');
            const tx = (index === 1) ? translateXReverse : translateX;
            cards.forEach(card => {
                card.style.transform = `translateX(${tx}px)`;
            });
        });
    },

    /**
     * 동적 높이 계산 및 설정
     *
     * 목표: 스크롤 완료(progress=1) 시 콘텐츠 하단이 뷰포트 하단 - 고정 여백에 위치
     *
     * 계산 원리:
     * - scrollProgress = scrollY / (containerHeight - viewportHeight)
     * - progress=1 일 때 scrollY = containerHeight - viewportHeight
     * - 이때 콘텐츠 하단 위치 = headerHeight + contentHeight + finalTranslateY
     * - 콘텐츠 하단이 뷰포트 하단 - margin에 위치하려면:
     *   containerHeight - scrollY + contentFinalBottom = viewportHeight - margin
     *   containerHeight - (containerHeight - viewportHeight) + contentFinalBottom = viewportHeight - margin
     *   viewportHeight + contentFinalBottom = viewportHeight - margin
     *
     * 이 계산이 잘못됨. 다른 접근법 사용:
     * - 스크롤 완료 시 콘텐츠가 화면 하단에 딱 맞도록 하려면
     * - containerHeight = viewportHeight + scrollNeeded
     * - scrollNeeded = contentFinalBottom - viewportHeight + margin
     */
    calculateAndSetHeight: function() {
        if (!this.container || !this.motionContainer) return;

        // 컨테이너 패딩 측정
        const containerStyle = window.getComputedStyle(this.container);
        const paddingTop = parseFloat(containerStyle.paddingTop) || 0;

        // 헤더 높이 측정
        const header = this.container.querySelector('.hero-parallax__header');
        const headerHeight = header ? header.offsetHeight : 0;

        // 콘텐츠(motionContainer) 높이 측정
        const contentHeight = this.motionContainer.scrollHeight;

        // 애니메이션 완료 시 translateY 최종값 (progress 0.2 이후 고정)
        const finalTranslateY = 500;

        // 콘텐츠 최종 하단 위치 (컨테이너 상단 기준, 패딩 포함)
        const contentFinalBottom = paddingTop + headerHeight + contentHeight + finalTranslateY;

        // 컨테이너 높이 = 콘텐츠 최종 하단 + 고정 여백
        const totalHeight = contentFinalBottom + this.FIXED_BOTTOM_MARGIN;

        this.container.style.height = totalHeight + 'px';
    },

    /**
     * 스크롤 진행률 계산
     * @returns {number} 0~1 사이의 진행률
     */
    getScrollProgress: function() {
        if (!this.container) return 0;

        const rect = this.container.getBoundingClientRect();
        const elementTop = -rect.top;
        const elementHeight = rect.height - window.innerHeight;

        return Math.max(0, Math.min(1, elementTop / elementHeight));
    },

    /**
     * 스프링 타겟 값 업데이트
     */
    updateSpringTargets: function() {
        if (!this.container) return;

        const progress = this.getScrollProgress();

        // Row 1, 3: 오른쪽으로 이동
        this.springs.translateX.setTarget(parallaxTransform(progress, [0, 1], [0, 1000]));

        // Row 2: 왼쪽으로 이동
        this.springs.translateXReverse.setTarget(parallaxTransform(progress, [0, 1], [0, -1000]));

        // 3D 회전 효과 (스크롤 초반 20%에서)
        this.springs.rotateX.setTarget(parallaxTransform(progress, [0, 0.2], [15, 0]));
        this.springs.rotateZ.setTarget(parallaxTransform(progress, [0, 0.2], [20, 0]));

        // 수직 이동
        this.springs.translateY.setTarget(parallaxTransform(progress, [0, 0.2], [-700, 500]));

        // 투명도
        this.springs.opacity.setTarget(parallaxTransform(progress, [0, 0.2], [0.2, 1]));
    },

    /**
     * 애니메이션 루프
     */
    animate: function() {
        if (!this.isAnimating) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // 모든 스프링 업데이트
        const translateX = this.springs.translateX.update(deltaTime);
        const translateXReverse = this.springs.translateXReverse.update(deltaTime);
        const rotateX = this.springs.rotateX.update(deltaTime);
        const rotateZ = this.springs.rotateZ.update(deltaTime);
        const translateY = this.springs.translateY.update(deltaTime);
        const opacity = this.springs.opacity.update(deltaTime);

        // 모션 컨테이너에 transform 적용
        if (this.motionContainer) {
            this.motionContainer.style.transform = `
                rotateX(${rotateX}deg)
                rotateZ(${rotateZ}deg)
                translateY(${translateY}px)
            `;
            this.motionContainer.style.opacity = opacity;
        }

        // 각 행의 카드에 수평 이동 적용
        this.rows.forEach((row, index) => {
            if (!row) return;
            const cards = row.querySelectorAll('.parallax-card');
            // Row 1, 3: translateX / Row 2: translateXReverse
            const tx = (index === 1) ? translateXReverse : translateX;
            cards.forEach(card => {
                card.style.transform = `translateX(${tx}px)`;
            });
        });

        requestAnimationFrame(() => this.animate());
    },

    /**
     * 탭 가시성 변경 핸들러
     */
    handleVisibility: function() {
        if (document.hidden) {
            this.isAnimating = false;
        } else {
            this.isAnimating = true;
            this.lastTime = performance.now();
            this.animate();
        }
    },

    /**
     * 정리 (이벤트 리스너 제거)
     */
    destroy: function() {
        this.isAnimating = false;

        if (this.boundScrollHandler) {
            window.removeEventListener('scroll', this.boundScrollHandler);
        }
        if (this.boundResizeHandler) {
            window.removeEventListener('resize', this.boundResizeHandler);
        }
        if (this.boundVisibilityHandler) {
            document.removeEventListener('visibilitychange', this.boundVisibilityHandler);
        }

        this.container = null;
        this.motionContainer = null;
        this.rows = [];
        this.boundScrollHandler = null;
        this.boundResizeHandler = null;
        this.boundVisibilityHandler = null;
        this.boundHeightHandler = null;
    }
};

/**
 * Hero Parallax 초기화 함수
 */
function initHeroParallax() {
    if (document.getElementById('heroParallax')) {
        HeroParallax.init('heroParallax');
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initHeroParallax);

// HTMX 호환성 - 동적 콘텐츠 로드 시 재초기화
if (typeof htmx !== 'undefined') {
    document.body.addEventListener('htmx:afterSwap', function() {
        HeroParallax.destroy();
        initHeroParallax();
    });
}
