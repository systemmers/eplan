// Accordion Component

/**
 * Accordion 컴포넌트
 * 아코디언 UI 패턴을 구현하는 클래스
 */
class Accordion {
    /**
     * Accordion 생성자
     * @param {HTMLElement} accordionElement - 아코디언 컨테이너 요소
     */
    constructor(accordionElement) {
        this.accordion = accordionElement;
        // 모든 아코디언 아이템 요소들을 선택
        this.items = this.accordion.querySelectorAll('.accordion__item');
        
        // 초기화 메서드 호출
        this.init();
    }
    
    /**
     * 아코디언 초기화
     * 각 아이템의 헤더에 클릭 이벤트 리스너를 등록
     */
    init() {
        this.items.forEach((item, index) => {
            const header = item.querySelector('.accordion__header');
            
            // 헤더 클릭 시 해당 아이템 토글
            header.addEventListener('click', () => {
                this.toggle(item);
            });
        });
    }
    
    /**
     * 아코디언 아이템 토글
     * @param {HTMLElement} item - 토글할 아코디언 아이템
     */
    toggle(item) {
        // 현재 아이템이 활성화 상태인지 확인
        const isActive = item.classList.contains('is-active');
        
        // 단일 모드인 경우 모든 아이템 닫기
        // data-single 속성이 있으면 한 번에 하나의 아이템만 열림
        if (this.accordion.hasAttribute('data-single')) {
            this.items.forEach(i => i.classList.remove('is-active'));
        }
        
        // 현재 아이템 토글
        if (!isActive) {
            // 비활성 상태였다면 활성화
            item.classList.add('is-active');
        } else {
            // 활성 상태였다면 비활성화
            item.classList.remove('is-active');
        }
    }
}

// Auto-initialize accordions
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        new Accordion(accordion);
    });
});

