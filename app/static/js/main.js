// ePlan Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('ePlan website loaded');

    // Floating Glass Navigation - Mobile Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.floating-nav .nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.floating-nav .dropdown');

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

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.floating-nav')) {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // Close mobile menu on window resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
    
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

// HTMX 페이지 전환 시 스크롤 상단으로 이동 (업계 표준)
document.body.addEventListener('htmx:afterSwap', function(event) {
    // main-content가 타겟인 경우에만 스크롤 이동
    if (event.detail.target.id === 'main-content') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ============================================
// Textbook Accordion Feature
// ============================================

// 교재 데이터
const textbookData = {
    general: [
        {
            title: 'Smart Choice Starter',
            level: 'Level 1-3 (Beginner)',
            author: 'Ken Wilson',
            publisher: 'Oxford University Press',
            year: '2016',
            rating: 4.5,
            description: '성인 학습자를 위한 실용적 회화 교재입니다. 일상생활에서 바로 활용할 수 있는 표현들을 중심으로 기초 문법과 어휘를 자연스럽게 학습합니다.',
            features: ['기초 문법 체계적 학습', '일상 회화 표현 중심', '발음 교정 자료 포함']
        },
        {
            title: 'Smart Choice Main',
            level: 'Level 4-6 (Pre-intermediate)',
            author: 'Ken Wilson',
            publisher: 'Oxford University Press',
            year: '2016',
            rating: 4.6,
            description: '기초를 마친 학습자를 위한 중급 회화 교재입니다. 다양한 상황별 대화와 토론 주제를 통해 실용적인 영어 능력을 향상시킵니다.',
            features: ['상황별 실전 대화', '토론 및 발표 연습', '리스닝 스킬 강화']
        },
        {
            title: 'Side by Side 1-3',
            level: 'Level 1-3 (Beginner)',
            author: 'Steven J. Molinsky',
            publisher: 'Pearson Education',
            year: '2015',
            rating: 4.4,
            description: '전 세계적으로 사랑받는 베스트셀러 영어 교재입니다. 체계적인 문법 학습과 함께 4기능(듣기, 말하기, 읽기, 쓰기)을 균형있게 발전시킵니다.',
            features: ['4기능 통합 학습', '풍부한 연습 문제', '명확한 문법 설명']
        },
        {
            title: 'Side by Side 4-7',
            level: 'Level 4-7 (Intermediate)',
            author: 'Steven J. Molinsky',
            publisher: 'Pearson Education',
            year: '2015',
            rating: 4.5,
            description: 'Side by Side 시리즈의 중급 과정입니다. 더 복잡한 문법 구조와 다양한 주제의 대화를 통해 영어 실력을 한 단계 높여줍니다.',
            features: ['고급 문법 구조 학습', '다양한 토픽 대화', '비즈니스 영어 입문']
        },
        {
            title: 'Touchstone 1-4',
            level: 'Level 3-6 (Pre-intermediate)',
            author: 'Michael McCarthy',
            publisher: 'Cambridge University Press',
            year: '2018',
            rating: 4.7,
            description: 'Cambridge Corpus 기반의 현대적인 영어 교재입니다. 실제 원어민들이 사용하는 자연스러운 표현을 학습할 수 있습니다.',
            features: ['코퍼스 기반 실용 표현', '대화 전략 학습', '온라인 학습 지원']
        },
        {
            title: 'Interchange Intro',
            level: 'Level 1-3 (Beginner)',
            author: 'Jack C. Richards',
            publisher: 'Cambridge University Press',
            year: '2017',
            rating: 4.3,
            description: '세계적으로 인정받는 영어 회화 교재입니다. 의사소통 중심의 교수법을 바탕으로 실제 상황에서 활용 가능한 영어를 학습합니다.',
            features: ['의사소통 중심 학습', '실생활 상황 대화', '자기 평가 시스템']
        }
    ],
    business: [
        {
            title: 'Business Venture 1-2',
            level: 'Level 4-6 (Pre-intermediate)',
            author: 'Roger Barnard',
            publisher: 'Oxford University Press',
            year: '2017',
            rating: 4.5,
            description: '비즈니스 영어 입문자를 위한 실용적인 교재입니다. 기본적인 비즈니스 상황에서 필요한 의사소통 능력을 키워줍니다.',
            features: ['비즈니스 기초 표현', '이메일 작성 연습', '전화 영어 학습']
        },
        {
            title: 'Business Venture 3',
            level: 'Level 6-7 (Intermediate)',
            author: 'Roger Barnard',
            publisher: 'Oxford University Press',
            year: '2017',
            rating: 4.6,
            description: '중급 비즈니스 영어 학습자를 위한 교재입니다. 협상, 프레젠테이션, 회의 진행 등 고급 비즈니스 스킬을 학습합니다.',
            features: ['협상 및 설득 기술', '프레젠테이션 스킬', '회의 진행 영어']
        },
        {
            title: 'Market Leader Basic',
            level: 'Level 5-6 (Intermediate)',
            author: 'David Cotton',
            publisher: 'Pearson Education',
            year: '2020',
            rating: 4.7,
            description: 'Financial Times 기사를 활용한 비즈니스 영어 교재입니다. 실제 비즈니스 사례를 통해 실용적인 영어를 학습합니다.',
            features: ['FT 기사 기반 학습', '케이스 스터디', '비즈니스 어휘 강화']
        },
        {
            title: 'Market Leader Advanced',
            level: 'Level 7-8 (Upper-intermediate)',
            author: 'David Cotton',
            publisher: 'Pearson Education',
            year: '2020',
            rating: 4.8,
            description: 'Market Leader 시리즈의 고급 과정입니다. 복잡한 비즈니스 상황에서의 의사소통과 전략적 사고를 발전시킵니다.',
            features: ['전략적 비즈니스 영어', '고급 협상 기술', 'MBA 수준 어휘']
        },
        {
            title: 'Business Result',
            level: 'Level 5-7 (Intermediate)',
            author: 'John Hughes',
            publisher: 'Oxford University Press',
            year: '2017',
            rating: 4.6,
            description: '실제 비즈니스 상황에서 바로 활용 가능한 실용적인 영어 교재입니다. 다양한 비즈니스 시나리오를 다룹니다.',
            features: ['실전 비즈니스 케이스', '비디오 자료 포함', '온라인 학습 지원']
        }
    ],
    test: [
        {
            title: 'TOEIC Speaking Basic',
            level: 'Level 5-6 (Intermediate)',
            author: 'ePlan 교재개발팀',
            publisher: 'ePlan',
            year: '2023',
            rating: 4.5,
            description: 'TOEIC Speaking 시험을 처음 준비하는 학습자를 위한 기초 교재입니다. 시험 유형별 전략과 기본 표현을 학습합니다.',
            features: ['시험 유형별 전략', '기초 답변 템플릿', '발음 교정 포함']
        },
        {
            title: 'TOEIC Speaking Advanced',
            level: 'Level 6-7 (Intermediate)',
            author: 'ePlan 교재개발팀',
            publisher: 'ePlan',
            year: '2023',
            rating: 4.6,
            description: 'TOEIC Speaking 중급 학습자를 위한 교재입니다. 고득점을 위한 심화 전략과 다양한 실전 연습을 제공합니다.',
            features: ['고득점 전략 학습', '실전 모의고사', '피드백 시스템']
        },
        {
            title: 'TOEIC Speaking Expert',
            level: 'Level 7-8 (Upper-intermediate)',
            author: 'ePlan 교재개발팀',
            publisher: 'ePlan',
            year: '2023',
            rating: 4.8,
            description: 'TOEIC Speaking 최고 등급을 목표로 하는 학습자를 위한 전문 교재입니다. 완벽한 답변 구성과 고급 표현을 학습합니다.',
            features: ['최고 등급 전략', '고급 표현 학습', '1:1 피드백 연계']
        },
        {
            title: 'OPIc IM',
            level: 'Level 5-6 (Intermediate)',
            author: 'ePlan 교재개발팀',
            publisher: 'ePlan',
            year: '2023',
            rating: 4.4,
            description: 'OPIc IM 등급을 목표로 하는 학습자를 위한 교재입니다. 자기소개부터 롤플레이까지 체계적으로 준비합니다.',
            features: ['IM 등급 맞춤 전략', 'Background Survey 가이드', '롤플레이 연습']
        },
        {
            title: 'OPIc IH',
            level: 'Level 6-7 (Intermediate)',
            author: 'ePlan 교재개발팀',
            publisher: 'ePlan',
            year: '2023',
            rating: 4.6,
            description: 'OPIc IH 등급을 목표로 하는 중급 학습자를 위한 교재입니다. 다양한 주제에 대한 심층 답변 능력을 키웁니다.',
            features: ['IH 등급 심화 전략', '주제별 답변 구성', '시간 관리 기술']
        },
        {
            title: 'OPIc AL',
            level: 'Level 7-8 (Upper-intermediate)',
            author: 'ePlan 교재개발팀',
            publisher: 'ePlan',
            year: '2023',
            rating: 4.8,
            description: 'OPIc 최고 등급 AL을 목표로 하는 학습자를 위한 전문 교재입니다. 원어민 수준의 유창성과 정확성을 훈련합니다.',
            features: ['AL 등급 완벽 대비', '고급 문장 구조', '실전 시뮬레이션']
        }
    ],
    discussion: [
        {
            title: 'Conversation Strategies',
            level: 'Level 7-8 (Upper-intermediate)',
            author: 'David Kehe',
            publisher: 'Pro Lingua Associates',
            year: '2019',
            rating: 4.7,
            description: '효과적인 대화 전략을 학습하는 고급 회화 교재입니다. 원어민처럼 자연스럽게 대화를 이끌어가는 기술을 익힙니다.',
            features: ['대화 전략 테크닉', '자연스러운 전환 표현', '적극적 청취 기술']
        },
        {
            title: 'Impact Issues',
            level: 'Level 7-8 (Upper-intermediate)',
            author: 'Richard R. Day',
            publisher: 'Pearson Education',
            year: '2018',
            rating: 4.6,
            description: '사회적 이슈에 대해 토론하는 고급 영어 교재입니다. 비판적 사고와 논리적 표현력을 동시에 발전시킵니다.',
            features: ['시사 이슈 토론', '비판적 사고 훈련', '논리적 표현 학습']
        },
        {
            title: 'Advanced Discussion',
            level: 'Level 8-9 (Advanced)',
            author: 'ePlan 교재개발팀',
            publisher: 'ePlan',
            year: '2023',
            rating: 4.9,
            description: '최상급 토론 능력을 기르기 위한 ePlan 자체 개발 교재입니다. 복잡한 주제에 대해 깊이 있는 토론을 진행합니다.',
            features: ['심층 토론 주제', '논증 기술 훈련', '프리토킹 연습']
        }
    ]
};

// 별점 생성 함수
function generateStarRating(rating) {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        const filled = i < Math.floor(rating);
        starsHtml += `
            <svg class="book-detail__rating-star ${filled ? 'book-detail__rating-star--filled' : 'book-detail__rating-star--empty'}"
                 viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
        `;
    }
    return `
        <div class="book-detail__rating">
            <div class="book-detail__rating-stars">${starsHtml}</div>
            <span class="book-detail__rating-value">${rating}</span>
        </div>
    `;
}

// 특징 목록 생성 함수
function generateFeaturesList(features) {
    return features.map(feature => `<li>${feature}</li>`).join('');
}

// 상세 패널 업데이트 함수
function updateBookDetailPanel(panel, book) {
    if (!panel || !book) return;

    panel.innerHTML = `
        <div class="book-detail">
            <div class="book-detail__header">
                <div class="book-detail__icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                </div>
                <div>
                    <span class="book-detail__level">${book.level}</span>
                    <h4 class="book-detail__title">${book.title}</h4>
                </div>
            </div>

            <div class="book-detail__meta">
                <div class="book-detail__meta-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>${book.author}</span>
                </div>
                <div class="book-detail__meta-item">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>${book.publisher} · ${book.year}</span>
                </div>
            </div>

            ${generateStarRating(book.rating)}

            <div class="book-detail__section">
                <h5 class="book-detail__section-title">교재 소개</h5>
                <p class="book-detail__desc">${book.description}</p>
            </div>

            <div class="book-detail__section">
                <h5 class="book-detail__section-title">주요 특징</h5>
                <ul class="book-detail__features">
                    ${generateFeaturesList(book.features)}
                </ul>
            </div>
        </div>
    `;
}

// 활성 아이템 설정 함수
function setActiveAccordionItem(items, activeIndex) {
    items.forEach((item, idx) => {
        if (idx === activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 아코디언 초기화 함수
function initTextbookAccordions() {
    const accordions = document.querySelectorAll('.book-accordion');

    accordions.forEach(accordion => {
        const category = accordion.dataset.category;
        const items = accordion.querySelectorAll('.book-accordion-item');
        const detailPanel = document.getElementById(`detail-${category}`);

        // 데이터 확인
        if (!textbookData[category]) {
            console.warn(`No data found for category: ${category}`);
            return;
        }

        // 초기 상태: 첫 번째 항목 표시
        updateBookDetailPanel(detailPanel, textbookData[category][0]);

        // 이벤트 리스너 등록
        items.forEach((item, index) => {
            // 마우스 오버 이벤트
            item.addEventListener('mouseenter', function() {
                setActiveAccordionItem(items, index);
                updateBookDetailPanel(detailPanel, textbookData[category][index]);
            });

            // 클릭 이벤트 (모바일용)
            item.addEventListener('click', function() {
                setActiveAccordionItem(items, index);
                updateBookDetailPanel(detailPanel, textbookData[category][index]);
            });
        });
    });
}

// DOM Ready 시 아코디언 초기화
document.addEventListener('DOMContentLoaded', function() {
    initTextbookAccordions();
    initTextbookGalleryModal();
});

// ============================================
// Textbook Gallery Modal Feature
// ============================================

// 교재 갤러리 모달용 데이터 (그리드 카드와 연동)
const textbookGalleryData = {
    'sc-starter': {
        title: 'Smart Choice Starter',
        level: 'L1-3',
        category: 'General Conversation',
        target: '영어 입문 ~ 초급 학습자',
        image: '/static/images/books_img/sc-starter.jpg',
        description: '성인 학습자를 위한 실용적 회화 교재입니다. 일상생활에서 바로 활용할 수 있는 표현들을 중심으로 기초 문법과 어휘를 자연스럽게 학습합니다. Oxford University Press에서 출판된 검증된 교재로, 체계적인 학습 구조를 제공합니다.',
        features: ['기초 문법 체계적 학습', '일상 회화 표현 중심', '발음 교정 자료 포함', 'MP3 음성 파일 제공']
    },
    'sc-main': {
        title: 'Smart Choice Main',
        level: 'L3-5',
        category: 'General Conversation',
        target: '초중급 학습자',
        image: '/static/images/books_img/sc-main.jpg',
        description: '기초를 마친 학습자를 위한 중급 회화 교재입니다. 다양한 상황별 대화와 토론 주제를 통해 실용적인 영어 능력을 향상시킵니다.',
        features: ['상황별 실전 대화', '토론 및 발표 연습', '리스닝 스킬 강화', '문화적 표현 학습']
    },
    'sbs-1-3': {
        title: 'Side by Side 1-3',
        level: 'L1-3',
        category: 'General Conversation',
        target: '영어 입문 ~ 초급 학습자',
        image: '/static/images/books_img/sbs-1-3.jpg',
        description: '전 세계적으로 사랑받는 베스트셀러 영어 교재입니다. 체계적인 문법 학습과 함께 4기능(듣기, 말하기, 읽기, 쓰기)을 균형있게 발전시킵니다.',
        features: ['4기능 통합 학습', '풍부한 연습 문제', '명확한 문법 설명', '단계별 난이도 조절']
    },
    'sbs-4-7': {
        title: 'Side by Side 4-7',
        level: 'L4-7',
        category: 'General Conversation',
        target: '중급 ~ 중상급 학습자',
        image: '/static/images/books_img/sbs-4-7.jpg',
        description: 'Side by Side 시리즈의 중급 과정입니다. 더 복잡한 문법 구조와 다양한 주제의 대화를 통해 영어 실력을 한 단계 높여줍니다.',
        features: ['고급 문법 구조 학습', '다양한 토픽 대화', '비즈니스 영어 입문', '실전 회화 연습']
    },
    'touchstone-1-4': {
        title: 'Touchstone 1-4',
        level: 'L1-4',
        category: 'General Conversation',
        target: '입문 ~ 초중급 학습자',
        image: '/static/images/books_img/touchstone-1-4.jpg',
        description: 'Cambridge Corpus 기반의 현대적인 영어 교재입니다. 실제 원어민들이 사용하는 자연스러운 표현을 학습할 수 있습니다.',
        features: ['코퍼스 기반 실용 표현', '대화 전략 학습', '온라인 학습 지원', '자연스러운 구어체 학습']
    },
    'interchange-intro': {
        title: 'Interchange Intro',
        level: 'L2-4',
        category: 'General Conversation',
        target: '초급 ~ 초중급 학습자',
        image: '/static/images/books_img/interchange-intro.jpg',
        description: '세계적으로 인정받는 영어 회화 교재입니다. 의사소통 중심의 교수법을 바탕으로 실제 상황에서 활용 가능한 영어를 학습합니다.',
        features: ['의사소통 중심 학습', '실생활 상황 대화', '자기 평가 시스템', '멀티미디어 자료 제공']
    },
    'business-venture-1-2': {
        title: 'Business Venture 1-2',
        level: 'L4-6',
        category: 'Business English',
        target: '비즈니스 영어 입문자',
        image: '/static/images/books_img/business-venture-1-2.jpg',
        description: '비즈니스 영어 입문자를 위한 실용적인 교재입니다. 기본적인 비즈니스 상황에서 필요한 의사소통 능력을 키워줍니다.',
        features: ['비즈니스 기초 표현', '이메일 작성 연습', '전화 영어 학습', '회의 기초 표현']
    },
    'business-venture-3': {
        title: 'Business Venture 3',
        level: 'L6-7',
        category: 'Business English',
        target: '비즈니스 영어 중급자',
        image: '/static/images/books_img/business-venture-3.jpg',
        description: '중급 비즈니스 영어 학습자를 위한 교재입니다. 협상, 프레젠테이션, 회의 진행 등 고급 비즈니스 스킬을 학습합니다.',
        features: ['협상 및 설득 기술', '프레젠테이션 스킬', '회의 진행 영어', '비즈니스 문서 작성']
    },
    'market-leader-basic': {
        title: 'Market Leader Basic',
        level: 'L5-6',
        category: 'Business English',
        target: '중급 비즈니스 학습자',
        image: '/static/images/books_img/market-leader-basic.jpg',
        description: 'Financial Times 기사를 활용한 비즈니스 영어 교재입니다. 실제 비즈니스 사례를 통해 실용적인 영어를 학습합니다.',
        features: ['FT 기사 기반 학습', '케이스 스터디', '비즈니스 어휘 강화', '실전 시나리오 연습']
    },
    'market-leader-advanced': {
        title: 'Market Leader Advanced',
        level: 'L7-8',
        category: 'Business English',
        target: '고급 비즈니스 학습자',
        image: '/static/images/books_img/market-leader-advanced.jpg',
        description: 'Market Leader 시리즈의 고급 과정입니다. 복잡한 비즈니스 상황에서의 의사소통과 전략적 사고를 발전시킵니다.',
        features: ['전략적 비즈니스 영어', '고급 협상 기술', 'MBA 수준 어휘', '글로벌 비즈니스 문화']
    },
    'business-result': {
        title: 'Business Result',
        level: 'L6-8',
        category: 'Business English',
        target: '중상급 비즈니스 학습자',
        image: '/static/images/books_img/business-result.jpg',
        description: '실제 비즈니스 상황에서 바로 활용 가능한 실용적인 영어 교재입니다. 다양한 비즈니스 시나리오를 다룹니다.',
        features: ['실전 비즈니스 케이스', '비디오 자료 포함', '온라인 학습 지원', '실무 영어 집중']
    },
    'toeic-speaking-basic': {
        title: 'TOEIC Speaking Basic',
        level: 'L5-6',
        category: 'Test Preparation',
        target: 'TOEIC Speaking 입문자',
        image: '/static/images/books_img/toeic-speaking-basic.jpg',
        description: 'TOEIC Speaking 시험을 처음 준비하는 학습자를 위한 기초 교재입니다. 시험 유형별 전략과 기본 표현을 학습합니다.',
        features: ['시험 유형별 전략', '기초 답변 템플릿', '발음 교정 포함', '기초 문법 복습']
    },
    'toeic-speaking-advanced': {
        title: 'TOEIC Speaking Advanced',
        level: 'L6-7',
        category: 'Test Preparation',
        target: 'TOEIC Speaking 중급자',
        image: '/static/images/books_img/toeic-speaking-advanced.jpg',
        description: 'TOEIC Speaking 중급 학습자를 위한 교재입니다. 고득점을 위한 심화 전략과 다양한 실전 연습을 제공합니다.',
        features: ['고득점 전략 학습', '실전 모의고사', '피드백 시스템', '시간 관리 기술']
    },
    'toeic-speaking-expert': {
        title: 'TOEIC Speaking Expert',
        level: 'L7-8',
        category: 'Test Preparation',
        target: 'TOEIC Speaking 고급자',
        image: '/static/images/books_img/toeic-speaking-expert.jpg',
        description: 'TOEIC Speaking 최고 등급을 목표로 하는 학습자를 위한 전문 교재입니다. 완벽한 답변 구성과 고급 표현을 학습합니다.',
        features: ['최고 등급 전략', '고급 표현 학습', '1:1 피드백 연계', '실전 시뮬레이션']
    },
    'opic-im': {
        title: 'OPIc IM',
        level: 'L5-6',
        category: 'Test Preparation',
        target: 'OPIc IM 등급 목표자',
        image: '/static/images/books_img/opic-im.jpg',
        description: 'OPIc IM 등급을 목표로 하는 학습자를 위한 교재입니다. 자기소개부터 롤플레이까지 체계적으로 준비합니다.',
        features: ['IM 등급 맞춤 전략', 'Background Survey 가이드', '롤플레이 연습', '주제별 답변 패턴']
    },
    'opic-ih': {
        title: 'OPIc IH',
        level: 'L6-7',
        category: 'Test Preparation',
        target: 'OPIc IH 등급 목표자',
        image: '/static/images/books_img/opic-ih.jpg',
        description: 'OPIc IH 등급을 목표로 하는 중급 학습자를 위한 교재입니다. 다양한 주제에 대한 심층 답변 능력을 키웁니다.',
        features: ['IH 등급 심화 전략', '주제별 답변 구성', '시간 관리 기술', '복합 질문 대응']
    },
    'opic-al': {
        title: 'OPIc AL',
        level: 'L7-9',
        category: 'Test Preparation',
        target: 'OPIc AL 등급 목표자',
        image: '/static/images/books_img/opic-al.jpg',
        description: 'OPIc 최고 등급 AL을 목표로 하는 학습자를 위한 전문 교재입니다. 원어민 수준의 유창성과 정확성을 훈련합니다.',
        features: ['AL 등급 완벽 대비', '고급 문장 구조', '실전 시뮬레이션', '원어민 표현 학습']
    },
    'conversation-strategies': {
        title: 'Conversation Strategies',
        level: 'L7-8',
        category: 'Discussion & Debate',
        target: '고급 회화 학습자',
        image: '/static/images/books_img/conversation-strategies.jpg',
        description: '효과적인 대화 전략을 학습하는 고급 회화 교재입니다. 원어민처럼 자연스럽게 대화를 이끌어가는 기술을 익힙니다.',
        features: ['대화 전략 테크닉', '자연스러운 전환 표현', '적극적 청취 기술', '대화 주도 기술']
    },
    'impact-issues': {
        title: 'Impact Issues',
        level: 'L6-8',
        category: 'Discussion & Debate',
        target: '시사 토론 관심자',
        image: '/static/images/books_img/impact-issues.jpg',
        description: '사회적 이슈에 대해 토론하는 고급 영어 교재입니다. 비판적 사고와 논리적 표현력을 동시에 발전시킵니다.',
        features: ['시사 이슈 토론', '비판적 사고 훈련', '논리적 표현 학습', '다양한 관점 이해']
    },
    'advanced-discussion': {
        title: 'Advanced Discussion',
        level: 'L8-9',
        category: 'Discussion & Debate',
        target: '최고급 토론 학습자',
        image: '/static/images/books_img/advanced-discussion.jpg',
        description: '최상급 토론 능력을 기르기 위한 ePlan 자체 개발 교재입니다. 복잡한 주제에 대해 깊이 있는 토론을 진행합니다.',
        features: ['심층 토론 주제', '논증 기술 훈련', '프리토킹 연습', '토론 리더십']
    }
};

// 교재 갤러리 모달 초기화 함수
function initTextbookGalleryModal() {
    const modal = document.getElementById('textbook-modal');
    if (!modal) return;

    const backdrop = modal.querySelector('.textbook-modal__backdrop');
    const closeBtn = modal.querySelector('.textbook-modal__close');
    const cards = document.querySelectorAll('.textbook-card');

    // 카드 클릭 이벤트
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const bookId = this.dataset.book;
            openTextbookModal(bookId);
        });
    });

    // 모달 닫기 이벤트
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTextbookModal);
    }
    if (backdrop) {
        backdrop.addEventListener('click', closeTextbookModal);
    }

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
            closeTextbookModal();
        }
    });
}

// 모달 열기 함수
function openTextbookModal(bookId) {
    const modal = document.getElementById('textbook-modal');
    const bookData = textbookGalleryData[bookId];

    if (!modal || !bookData) {
        console.warn('Modal or book data not found:', bookId);
        return;
    }

    // 모달 콘텐츠 업데이트
    document.getElementById('modal-title').textContent = bookData.title;
    document.getElementById('modal-cover').src = bookData.image;
    document.getElementById('modal-cover').alt = bookData.title;
    document.getElementById('modal-level').textContent = bookData.level;
    document.getElementById('modal-category').textContent = bookData.category;
    document.getElementById('modal-target').textContent = bookData.target;
    document.getElementById('modal-desc').textContent = bookData.description;

    // 특징 목록 업데이트
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = bookData.features.map(f => `<li>${f}</li>`).join('');

    // 모달 표시
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeTextbookModal() {
    const modal = document.getElementById('textbook-modal');
    if (modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
    }
}

