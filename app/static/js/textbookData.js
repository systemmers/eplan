// ============================================
// 통합 교재 데이터 (Unified Textbook Data)
// ============================================
// curriculum-roadmap.html, textbook accordion, gallery modal 모두 사용
// 단일 데이터 소스 (Single Source of Truth)
//
// 사용처:
// - curriculum-roadmap.html: 커리큘럼 테이블 (textbooks, tableRows)
// - phone_english_demo.html: 아코디언 (accordionCategories), 갤러리 모달 (textbooks)
// - curriculum.js: 커리큘럼 셀 표시 (textbooks)

const textbookData = {
    // ============================================
    // 카테고리 정의
    // ============================================
    categories: {
        'general-english': {
            name: 'General English',
            nameKo: '일반영어',
            icon: 'conversation',
            rowCount: 5  // 테이블 행 수
        },
        'test-prep': {
            name: 'Test Preparation',
            nameKo: '시험대비',
            icon: 'test',
            rowCount: 3
        },
        'business': {
            name: 'Business English',
            nameKo: '비즈니스 영어',
            icon: 'business',
            rowCount: 2
        }
    },

    // ============================================
    // 개별 교재 데이터
    // ============================================
    textbooks: {
        // ----------------------------------------
        // General English - Stretch 시리즈
        // ----------------------------------------
        'stretchStarter': {
            id: 'stretchStarter',
            galleryId: 'stretch-starter',  // kebab-case 별칭 (갤러리 카드 data-book용)
            name: 'Stretch Starter',
            publisher: 'Oxford University Press',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-english',
            accordionCategory: 'general',  // 아코디언 카테고리
            target: '영어 입문 학습자',
            coverImage: '/static/images/books/stretchStarter_cover.png',
            description: '초보자를 위한 체계적인 기초 영어 교재입니다. 기본 문법과 일상 표현을 자연스럽게 학습합니다.',
            objectives: ['기초 문법 패턴 습득', '일상 회화 표현 학습', '듣기 및 말하기 능력 향상', '기본 어휘력 강화'],
            features: ['기초 문법 체계적 학습', '일상 회화 표현 중심', '발음 교정 자료 포함', 'MP3 음성 파일 제공'],
            samples: ['/static/images/books/stretchStarter_cover.png', '/static/images/books/stretchStarter_01.png', '/static/images/books/stretchStarter_02.png'],
            // 아코디언용 추가 필드
            author: 'Oxford University Press',
            year: '2020',
            rating: 4.5
        },
        'stretch1': {
            id: 'stretch1',
            galleryId: 'stretch-1',
            name: 'Stretch 1',
            publisher: 'Oxford University Press',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-english',
            accordionCategory: 'general',
            target: '초급 학습자',
            coverImage: '/static/images/books/stretch1_cover.png',
            description: '21세기 스킬 기반의 영어 학습 교재입니다. 비판적 사고와 커뮤니케이션 능력을 함께 개발합니다.',
            objectives: ['기초 문법 심화', '실생활 표현 확장', '리스닝 스킬 향상', '기본 토론 능력 개발'],
            features: ['21세기 스킬 기반', '비판적 사고력 개발', '협업 활동 포함', '온라인 자료 제공'],
            samples: ['/static/images/books/stretch1_cover.png', '/static/images/books/stretch1_01.png', '/static/images/books/stretch1_02.png'],
            author: 'Oxford University Press',
            year: '2020',
            rating: 4.6
        },
        'stretch2': {
            id: 'stretch2',
            galleryId: 'stretch-2',
            name: 'Stretch 2',
            publisher: 'Oxford University Press',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-english',
            accordionCategory: 'general',
            target: '초중급 학습자',
            coverImage: '/static/images/books/stretch2_cover.png',
            description: '협업과 창의성 중심의 영어 학습 교재입니다. 다양한 주제로 영어 실력을 확장합니다.',
            objectives: ['중급 문법 구조 이해', '다양한 주제 토론', '프레젠테이션 기초', '어휘력 확장'],
            features: ['창의성 중심 학습', '팀 프로젝트 활동', '멀티미디어 자료', '자기 평가 도구'],
            samples: ['/static/images/books/stretch2_cover.png', '/static/images/books/stretch2_01.png', '/static/images/books/stretch2_02.png'],
            author: 'Oxford University Press',
            year: '2020',
            rating: 4.6
        },
        'stretch3': {
            id: 'stretch3',
            galleryId: 'stretch-3',
            name: 'Stretch 3',
            publisher: 'Oxford University Press',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'general-english',
            accordionCategory: 'general',
            target: '중급 학습자',
            coverImage: '/static/images/books/stretch3_cover.png',
            description: '중급 커뮤니케이션 역량을 강화하는 교재입니다. 복잡한 주제에 대한 토론 능력을 개발합니다.',
            objectives: ['고급 문법 활용', '복잡한 주제 토론', '설득력 있는 표현', '학술적 어휘 습득'],
            features: ['고급 사고력 개발', '토론 및 디베이트', '학술적 글쓰기 입문', '실전 영어 능력'],
            samples: ['/static/images/books/stretch3_cover.png', '/static/images/books/stretch3_01.png', '/static/images/books/stretch3_02.png'],
            author: 'Oxford University Press',
            year: '2020',
            rating: 4.7
        },

        // ----------------------------------------
        // General English - Smart Choice 시리즈
        // ----------------------------------------
        'smartChoice1': {
            id: 'smartChoice1',
            galleryId: 'smart-choice-1',
            name: 'Smart Choice 1',
            publisher: 'Oxford University Press',
            levels: 'Level 1-3',
            levelRange: [1, 3],
            category: 'general-english',
            accordionCategory: 'general',
            target: '영어 입문 ~ 초급 학습자',
            coverImage: '/static/images/books/smartChoice1_cover.png',
            description: '성인 학습자를 위한 실용적 회화 교재입니다. 일상 표현 중심으로 기초 문법과 어휘를 학습합니다.',
            objectives: ['기초 문법 체계적 학습', '일상 회화 표현 습득', '발음 및 억양 교정', '기본 어휘력 강화'],
            features: ['기초 문법 체계적 학습', '일상 회화 표현 중심', '발음 교정 자료 포함', 'MP3 음성 파일 제공'],
            samples: ['/static/images/books/smartChoice1_cover.png', '/static/images/books/smartChoice1_01.png', '/static/images/books/smartChoice1_02.png', '/static/images/books/smartChoice1_03.png', '/static/images/books/smartChoice1_04.png'],
            author: 'Ken Wilson',
            year: '2016',
            rating: 4.5
        },
        'smartChoice2': {
            id: 'smartChoice2',
            galleryId: 'smart-choice-2',
            name: 'Smart Choice 2',
            publisher: 'Oxford University Press',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'general-english',
            accordionCategory: 'general',
            target: '초중급 학습자',
            coverImage: '/static/images/books/smartChoice2_cover.png',
            description: '중급 학습자를 위한 체계적 회화 교재입니다. 상황별 대화와 토론을 통해 실용 영어를 향상시킵니다.',
            objectives: ['중급 문법 마스터', '상황별 회화 능력', '리스닝 스킬 강화', '실전 대화 연습'],
            features: ['상황별 실전 대화', '토론 및 발표 연습', '리스닝 스킬 강화', '문화적 표현 학습'],
            samples: ['/static/images/books/smartChoice2_cover.png', '/static/images/books/smartChoice2_01.png', '/static/images/books/smartChoice2_02.png', '/static/images/books/smartChoice2_03.png', '/static/images/books/smartChoice2_04.png'],
            author: 'Ken Wilson',
            year: '2016',
            rating: 4.6
        },

        // ----------------------------------------
        // General English - Begin Again 시리즈
        // ----------------------------------------
        'beginAgainVol1': {
            id: 'beginAgainVol1',
            galleryId: 'begin-again-vol1',
            name: 'Begin Again Vol.1',
            publisher: '길벗이지톡',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-english',
            accordionCategory: 'general',
            target: '영어 재학습 성인 학습자',
            coverImage: '/static/images/books/beginAgainVol1_cover.png',
            description: '영어를 다시 시작하는 성인을 위한 교재입니다. 기초부터 차근차근 영어 실력을 쌓아갑니다.',
            objectives: ['영어 기초 재정립', '기본 문법 복습', '일상 표현 학습', '학습 자신감 회복'],
            features: ['성인 학습자 맞춤', '기초부터 체계적', '실생활 표현 중심', '자기 학습 가이드'],
            samples: ['/static/images/books/beginAgainVol1_cover.png', '/static/images/books/beginAgainVol1_01.png', '/static/images/books/beginAgainVol1_02.png', '/static/images/books/beginAgainVol1_03.png'],
            author: '길벗이지톡',
            year: '2018',
            rating: 4.4
        },
        'beginAgainVol2': {
            id: 'beginAgainVol2',
            galleryId: 'begin-again-vol2',
            name: 'Begin Again Vol.2',
            publisher: '길벗이지톡',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-english',
            accordionCategory: 'general',
            target: '기초 완성 학습자',
            coverImage: '/static/images/books/beginAgainVol2_cover.png',
            description: 'Begin Again 시리즈의 두 번째 교재입니다. 기초를 다진 후 초급 회화로 나아갑니다.',
            objectives: ['초급 문법 완성', '회화 표현 확장', '리스닝 능력 향상', '기본 독해력 개발'],
            features: ['Vol.1 연계 학습', '실전 회화 연습', '다양한 주제 학습', '복습 시스템 포함'],
            samples: ['/static/images/books/beginAgainVol2_cover.png', '/static/images/books/beginAgainVol2_01.png', '/static/images/books/beginAgainVol2_02.png', '/static/images/books/beginAgainVol2_03.png'],
            author: '길벗이지톡',
            year: '2018',
            rating: 4.4
        },

        // ----------------------------------------
        // General English - Jazz English 시리즈
        // ----------------------------------------
        'jazzEnglish1': {
            id: 'jazzEnglish1',
            galleryId: 'jazz-english-1',
            name: 'Jazz English 1',
            publisher: 'Compass Publishing',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-english',
            accordionCategory: 'general',
            target: '초중급 학습자',
            coverImage: '/static/images/books/jazzEnglish1_cover.png',
            description: '재즈 리듬으로 배우는 영어 교재입니다. 자연스러운 영어 리듬감을 익힙니다.',
            objectives: ['영어 리듬 습득', '자연스러운 발화', '일상 대화 연습', '억양 교정'],
            features: ['리듬 기반 학습', '자연스러운 발음', '실생활 대화', '음성 자료 풍부'],
            samples: ['/static/images/books/jazzEnglish1_cover.png', '/static/images/books/jazzEnglish1_01.png', '/static/images/books/jazzEnglish1_02.png', '/static/images/books/jazzEnglish1_03.png'],
            author: 'Compass Publishing',
            year: '2019',
            rating: 4.5
        },
        'jazzEnglish2': {
            id: 'jazzEnglish2',
            galleryId: 'jazz-english-2',
            name: 'Jazz English 2',
            publisher: 'Compass Publishing',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'general-english',
            accordionCategory: 'general',
            target: '중급 학습자',
            coverImage: '/static/images/books/jazzEnglish2_cover.png',
            description: 'Jazz English 시리즈의 심화 과정입니다. 더욱 자연스러운 영어 구사력을 개발합니다.',
            objectives: ['고급 리듬 패턴', '토론 능력 개발', '복잡한 표현 학습', '유창성 향상'],
            features: ['심화 리듬 학습', '토론 및 디베이트', '고급 표현 학습', '실전 대화 연습'],
            samples: ['/static/images/books/jazzEnglish2_cover.png', '/static/images/books/jazzEnglish2_01.png', '/static/images/books/jazzEnglish2_02.png', '/static/images/books/jazzEnglish2_03.png'],
            author: 'Compass Publishing',
            year: '2019',
            rating: 4.6
        },

        // ----------------------------------------
        // General English - American English File 시리즈
        // ----------------------------------------
        'americanEnglishFile1': {
            id: 'americanEnglishFile1',
            galleryId: 'american-english-file-1',
            name: 'American English File 1',
            publisher: 'Oxford University Press',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'general-english',
            accordionCategory: 'general',
            target: '중급 학습자',
            coverImage: '/static/images/books/americanEnglishFile1_cover.png',
            description: '미국식 영어를 체계적으로 학습하는 교재입니다. 4가지 스킬을 균형있게 발전시킵니다.',
            objectives: ['미국식 영어 습득', '4대 영역 균형 학습', '실용적 문법 마스터', '어휘력 확장'],
            features: ['미국식 발음 학습', '통합 스킬 접근', '다양한 액티비티', '온라인 자료 연동'],
            samples: ['/static/images/books/americanEnglishFile1_cover.png', '/static/images/books/americanEnglishFile1_01.png', '/static/images/books/americanEnglishFile1_02.png', '/static/images/books/americanEnglishFile1_03.png'],
            author: 'Oxford University Press',
            year: '2019',
            rating: 4.7
        },
        'americanEnglishFile4_3rdEdition': {
            id: 'americanEnglishFile4_3rdEdition',
            galleryId: 'american-english-file-4',
            name: 'American English File 4',
            publisher: 'Oxford University Press',
            levels: 'Level 8-9',
            levelRange: [8, 9],
            category: 'general-english',
            accordionCategory: 'general',
            target: '상급 학습자',
            coverImage: '/static/images/books/americanEnglishFile4_3rdEdition_cover.png',
            description: '고급 미국식 영어 교재입니다. 복잡한 주제에 대한 토론과 학술적 영어를 학습합니다.',
            objectives: ['고급 문법 마스터', '학술적 영어 습득', '복잡한 토론 참여', '원어민 수준 목표'],
            features: ['고급 어휘 학습', '학술적 글쓰기', '심화 토론 연습', '문화적 뉘앙스'],
            samples: ['/static/images/books/americanEnglishFile4_3rdEdition_cover.png', '/static/images/books/americanEnglishFile4_3rdEdition_01.png', '/static/images/books/americanEnglishFile4_3rdEdition_02.png', '/static/images/books/americanEnglishFile4_3rdEdition_03.png'],
            author: 'Oxford University Press',
            year: '2020',
            rating: 4.8
        },
        'americanEnglishFile5': {
            id: 'americanEnglishFile5',
            galleryId: 'american-english-file-5',
            name: 'American English File 5',
            publisher: 'Oxford University Press',
            levels: 'Level 9-10',
            levelRange: [9, 10],
            category: 'general-english',
            accordionCategory: 'general',
            target: '최상급 학습자',
            coverImage: '/static/images/books/americanEnglishFile5_cover.png',
            description: 'American English File 시리즈의 최고급 과정입니다. 원어민 수준의 영어 구사력을 목표로 합니다.',
            objectives: ['원어민 수준 영어', '전문적 토론 능력', '학술적 글쓰기', '문화적 이해'],
            features: ['최고급 어휘', '전문 분야 영어', '학술적 토론', '원어민 자료 활용'],
            samples: ['/static/images/books/americanEnglishFile5_cover.png', '/static/images/books/americanEnglishFile5_01.png', '/static/images/books/americanEnglishFile5_02.png', '/static/images/books/americanEnglishFile5_03.png'],
            author: 'Oxford University Press',
            year: '2020',
            rating: 4.8
        },

        // ----------------------------------------
        // General English - New Connection 시리즈
        // ----------------------------------------
        'newConnection1': {
            id: 'newConnection1',
            galleryId: 'new-connection-1',
            name: 'New Connection 1',
            publisher: 'Compass Publishing',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-english',
            accordionCategory: 'general',
            target: '영어 입문 학습자',
            coverImage: '/static/images/books/newConnection1_cover.png',
            description: '커뮤니케이션 스킬 개발을 위한 기초 교재입니다. 실생활 대화 중심으로 학습합니다.',
            objectives: ['기초 대화 능력', '실생활 표현 학습', '듣기 능력 향상', '기본 문법 습득'],
            features: ['대화 중심 학습', '실생활 상황', '듣기 자료 풍부', '단계별 학습'],
            samples: ['/static/images/books/newConnection1_cover.png', '/static/images/books/newConnection1_01.png', '/static/images/books/newConnection1_02.png', '/static/images/books/newConnection1_03.png'],
            author: 'Compass Publishing',
            year: '2017',
            rating: 4.4
        },
        'newConnection2': {
            id: 'newConnection2',
            galleryId: 'new-connection-2',
            name: 'New Connection 2',
            publisher: 'Compass Publishing',
            levels: 'Level 2-4',
            levelRange: [2, 4],
            category: 'general-english',
            accordionCategory: 'general',
            target: '초급 학습자',
            coverImage: '/static/images/books/newConnection2_cover.png',
            description: 'New Connection 시리즈의 두 번째 교재입니다. 대화 능력을 한 단계 높여줍니다.',
            objectives: ['초급 대화 완성', '다양한 상황 대응', '어휘력 확장', '문법 활용 능력'],
            features: ['상황별 대화', '다양한 주제', '실전 연습', '복습 시스템'],
            samples: ['/static/images/books/newConnection2_cover.png', '/static/images/books/newConnection2_01.png', '/static/images/books/newConnection2_02.png', '/static/images/books/newConnection2_03.png'],
            author: 'Compass Publishing',
            year: '2017',
            rating: 4.5
        },
        'newConnection3': {
            id: 'newConnection3',
            galleryId: 'new-connection-3',
            name: 'New Connection 3',
            publisher: 'Compass Publishing',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'general-english',
            accordionCategory: 'general',
            target: '중급 학습자',
            coverImage: '/static/images/books/newConnection3_cover.png',
            description: 'New Connection 시리즈의 심화 과정입니다. 더욱 자연스러운 대화 능력을 개발합니다.',
            objectives: ['중급 대화 마스터', '복잡한 주제 토론', '유창성 향상', '자연스러운 표현'],
            features: ['심화 대화 학습', '토론 연습', '고급 어휘', '실전 커뮤니케이션'],
            samples: ['/static/images/books/newConnection3_cover.png', '/static/images/books/newConnection3_01.png', '/static/images/books/newConnection3_02.png', '/static/images/books/newConnection3_03.png'],
            author: 'Compass Publishing',
            year: '2017',
            rating: 4.6
        },

        // ----------------------------------------
        // General English - PEP 900
        // ----------------------------------------
        'pep900': {
            id: 'pep900',
            galleryId: 'pep-900',
            name: 'PEP 900',
            publisher: 'PEP Learning',
            levels: 'Level 8-10',
            levelRange: [8, 10],
            category: 'general-english',
            accordionCategory: 'general',
            target: '상급 ~ 최상급 학습자',
            coverImage: '/static/images/books/pep900_cover.png',
            description: '실전 영어 표현 900 패턴을 마스터하는 고급 교재입니다. 원어민 수준의 표현력을 목표로 합니다.',
            objectives: ['고급 패턴 900개 습득', '원어민 표현 학습', '유창성 극대화', '고급 토론 능력'],
            features: ['900개 핵심 패턴', '원어민 표현', '실전 활용 연습', '고급 어휘 포함'],
            samples: ['/static/images/books/pep900_cover.png', '/static/images/books/pep900_01.png', '/static/images/books/pep900_02.png', '/static/images/books/pep900_03.png'],
            author: 'PEP Learning',
            year: '2021',
            rating: 4.7
        },

        // ----------------------------------------
        // General English - 여행 영어
        // ----------------------------------------
        'ilbbangbbangTravelEnglish': {
            id: 'ilbbangbbangTravelEnglish',
            galleryId: 'ilbbangbbang-travel-english',
            name: '일빵빵 여행영어',
            publisher: '일빵빵',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'general-english',
            accordionCategory: 'general',
            target: '여행 영어 학습자',
            coverImage: '/static/images/books/ilbbangbbangTravelEnglish_cover.png',
            description: '해외 여행에 필요한 영어 표현을 집중적으로 학습하는 교재입니다.',
            objectives: ['여행 필수 표현', '공항/호텔 영어', '쇼핑/식당 영어', '긴급 상황 대응'],
            features: ['상황별 여행 영어', '실용적 표현 중심', '음성 자료 제공', '핵심 패턴 정리'],
            samples: ['/static/images/books/ilbbangbbangTravelEnglish_cover.png', '/static/images/books/ilbbangbbangTravelEnglish_01.png', '/static/images/books/ilbbangbbangTravelEnglish_02.png', '/static/images/books/ilbbangbbangTravelEnglish_03.png'],
            author: '일빵빵',
            year: '2019',
            rating: 4.3
        },
        'travelEnglish100DaysMiracle': {
            id: 'travelEnglish100DaysMiracle',
            galleryId: 'travel-english-100-days-miracle',
            name: '여행영어 100일의 기적',
            publisher: '넥서스',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'general-english',
            accordionCategory: 'general',
            target: '여행 영어 학습자',
            coverImage: '/static/images/books/travelEnglish100DaysMiracle_cover.png',
            description: '100일 완성 여행 영어 프로그램입니다. 체계적인 학습으로 여행 영어를 마스터합니다.',
            objectives: ['100일 완성 프로그램', '여행 상황별 영어', '실전 대화 연습', '자신감 향상'],
            features: ['100일 커리큘럼', '일일 학습 분량', '복습 시스템', 'MP3 자료'],
            samples: ['/static/images/books/travelEnglish100DaysMiracle_cover.png', '/static/images/books/travelEnglish100DaysMiracle_01.png', '/static/images/books/travelEnglish100DaysMiracle_02.png', '/static/images/books/travelEnglish100DaysMiracle_03.png'],
            author: '넥서스',
            year: '2018',
            rating: 4.4
        },

        // ----------------------------------------
        // Test Preparation - OPIc 시리즈
        // ----------------------------------------
        'opicAllInOnePackage': {
            id: 'opicAllInOnePackage',
            galleryId: 'opic-all-in-one-package',
            name: 'OPIc 올인원 패키지',
            publisher: '해커스',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'OPIc IM 목표 수험생',
            coverImage: '/static/images/books/opicAllInOnePackage_cover.png',
            description: 'OPIc 시험 대비 올인원 패키지입니다. 체계적인 학습으로 IM 등급을 목표로 합니다.',
            objectives: ['OPIc IM 등급 달성', '주제별 답변 전략', '롤플레이 대비', '실전 모의고사'],
            features: ['올인원 패키지', '주제별 완벽 대비', '실전 모의고사', '답변 템플릿'],
            samples: ['/static/images/books/opicAllInOnePackage_cover.png', '/static/images/books/opicAllInOnePackage_01.png', '/static/images/books/opicAllInOnePackage_02.png', '/static/images/books/opicAllInOnePackage_03.png'],
            author: '해커스',
            year: '2021',
            rating: 4.6
        },
        'opicShortTermIhAl': {
            id: 'opicShortTermIhAl',
            galleryId: 'opic-short-term-ih-al',
            name: 'OPIc 단기공략 IH/AL',
            publisher: '시원스쿨',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'OPIc IH/AL 목표 수험생',
            coverImage: '/static/images/books/opicShortTermIhAl_cover.png',
            description: 'OPIc IH/AL 등급 단기 공략 교재입니다. 고급 답변 전략을 집중적으로 학습합니다.',
            objectives: ['IH/AL 등급 달성', '고급 답변 전략', '돌발 상황 대응', '실전 감각 향상'],
            features: ['단기 집중 학습', '고급 답변 템플릿', '실전 문제 풍부', '합격 전략 제공'],
            samples: ['/static/images/books/opicShortTermIhAl_cover.png', '/static/images/books/opicShortTermIhAl_01.png', '/static/images/books/opicShortTermIhAl_02.png', '/static/images/books/opicShortTermIhAl_03.png'],
            author: '시원스쿨',
            year: '2021',
            rating: 4.7
        },
        'opicGod': {
            id: 'opicGod',
            galleryId: 'opic-god',
            name: '오픽의 신',
            publisher: '넥서스',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'OPIc 고득점 목표 수험생',
            coverImage: '/static/images/books/opicGod_cover.png',
            description: 'OPIc 고득점을 위한 전략 교재입니다. 신의 한 수로 등급을 올려드립니다.',
            objectives: ['고득점 전략 습득', '답변 퀄리티 향상', '시간 관리 능력', '자신감 향상'],
            features: ['고득점 비법 공개', '실전 답변 예시', '빈출 주제 정리', '등급별 전략'],
            samples: ['/static/images/books/opicGod_cover.png', '/static/images/books/opicGod_01.png', '/static/images/books/opicGod_02.png', '/static/images/books/opicGod_03.png'],
            author: '넥서스',
            year: '2020',
            rating: 4.5
        },
        'hackersOpicAdvanced': {
            id: 'hackersOpicAdvanced',
            galleryId: 'hackers-opic-advanced',
            name: '해커스 OPIc Advanced',
            publisher: '해커스',
            levels: 'Level 7-9',
            levelRange: [7, 9],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'OPIc AL 목표 수험생',
            coverImage: '/static/images/books/hackersOpicAdvanced_cover.png',
            description: '해커스 OPIc 고급 과정입니다. AL 등급 달성을 위한 심화 전략을 학습합니다.',
            objectives: ['AL 등급 달성', '고급 답변 구조', '복잡한 주제 대응', '원어민 수준 표현'],
            features: ['AL 전문 교재', '심화 답변 전략', '고급 표현 학습', '실전 모의고사'],
            samples: ['/static/images/books/hackersOpicAdvanced_cover.png', '/static/images/books/hackersOpicAdvanced_01.png', '/static/images/books/hackersOpicAdvanced_02.png', '/static/images/books/hackersOpicAdvanced_03.png'],
            author: '해커스',
            year: '2021',
            rating: 4.7
        },
        'opicChineseIhStrategy': {
            id: 'opicChineseIhStrategy',
            galleryId: 'opic-chinese-ih-strategy',
            name: 'OPIc 중국어 IH 공략',
            publisher: '다락원',
            levels: 'Level 5-8',
            levelRange: [5, 8],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'OPIc 중국어 수험생',
            coverImage: '/static/images/books/opicChineseIhStrategy_cover.png',
            description: 'OPIc 중국어 IH 등급 공략 교재입니다. 중국어 OPIc 시험을 체계적으로 대비합니다.',
            objectives: ['중국어 OPIc IH 달성', '주제별 답변 전략', '중국어 표현 학습', '실전 대비'],
            features: ['중국어 OPIc 전문', 'IH 등급 전략', '주제별 학습', '모의고사 포함'],
            samples: ['/static/images/books/opicChineseIhStrategy_cover.png', '/static/images/books/opicChineseIhStrategy_01.png', '/static/images/books/opicChineseIhStrategy_02.png', '/static/images/books/opicChineseIhStrategy_03.png'],
            author: '다락원',
            year: '2020',
            rating: 4.4
        },

        // ----------------------------------------
        // Test Preparation - TOEIC Speaking
        // ----------------------------------------
        'siwonschoolToeicSpeaking10Tests': {
            id: 'siwonschoolToeicSpeaking10Tests',
            galleryId: 'siwonschool-toeic-speaking-10-tests',
            name: '시원스쿨 토익스피킹 실전 10회',
            publisher: '시원스쿨',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'TOEIC Speaking 수험생',
            coverImage: '/static/images/books/siwonschoolToeicSpeaking10Tests_cover.png',
            description: 'TOEIC Speaking 실전 대비 10회분 모의고사 교재입니다.',
            objectives: ['TOEIC Speaking 고득점', '실전 감각 향상', '시간 관리 능력', '파트별 전략'],
            features: ['실전 모의고사 10회', '파트별 전략', '모범 답안 제공', '해설 포함'],
            samples: ['/static/images/books/siwonschoolToeicSpeaking10Tests_cover.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_01.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_02.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_03.png'],
            author: '시원스쿨',
            year: '2021',
            rating: 4.6
        },

        // ----------------------------------------
        // Test Preparation - TOEFL Speaking
        // ----------------------------------------
        'hackersToeflSpeaking': {
            id: 'hackersToeflSpeaking',
            galleryId: 'hackers-toefl-speaking',
            name: '해커스 토플 스피킹',
            publisher: '해커스',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'TOEFL Speaking 수험생',
            coverImage: '/static/images/books/hackersToeflSpeaking_cover.png',
            description: 'TOEFL Speaking 완벽 대비 교재입니다. 체계적인 학습으로 고득점을 목표로 합니다.',
            objectives: ['TOEFL Speaking 고득점', 'Integrated Task 전략', 'Independent Task 전략', '실전 대비'],
            features: ['파트별 완벽 대비', '고득점 전략', '실전 문제', '모범 답안'],
            samples: ['/static/images/books/hackersToeflSpeaking_cover.png', '/static/images/books/hackersToeflSpeaking_01.png', '/static/images/books/hackersToeflSpeaking_02.png', '/static/images/books/hackersToeflSpeaking_03.png'],
            author: '해커스',
            year: '2021',
            rating: 4.7
        },
        'siwonschoolToeflSpeaking': {
            id: 'siwonschoolToeflSpeaking',
            galleryId: 'siwonschool-toefl-speaking',
            name: '시원스쿨 토플 스피킹',
            publisher: '시원스쿨',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'TOEFL Speaking 수험생',
            coverImage: '/static/images/books/siwonschoolToeflSpeaking_cover.png',
            description: '시원스쿨 TOEFL Speaking 교재입니다. 기초부터 고득점까지 체계적으로 학습합니다.',
            objectives: ['TOEFL Speaking 기초', '답변 구조 학습', '표현력 향상', '실전 연습'],
            features: ['기초부터 고득점', '체계적 커리큘럼', '풍부한 연습', '온라인 자료'],
            samples: ['/static/images/books/siwonschoolToeflSpeaking_cover.png', '/static/images/books/siwonschoolToeflSpeaking_01.png', '/static/images/books/siwonschoolToeflSpeaking_02.png', '/static/images/books/siwonschoolToeflSpeaking_03.png'],
            author: '시원스쿨',
            year: '2021',
            rating: 4.6
        },

        // ----------------------------------------
        // Test Preparation - IELTS Speaking
        // ----------------------------------------
        'hackersIeltsSpeaking': {
            id: 'hackersIeltsSpeaking',
            galleryId: 'hackers-ielts-speaking',
            name: '해커스 IELTS Speaking',
            publisher: '해커스',
            levels: 'Level 7-9',
            levelRange: [7, 9],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'IELTS Speaking 수험생',
            coverImage: '/static/images/books/hackersIeltsSpeaking_cover.png',
            description: 'IELTS Speaking 완벽 대비 교재입니다. Band 7 이상을 목표로 합니다.',
            objectives: ['IELTS Band 7+ 달성', '파트별 전략 습득', '고급 표현 학습', '실전 대비'],
            features: ['파트별 완벽 대비', 'Band 7+ 전략', '풍부한 어휘', '실전 모의고사'],
            samples: ['/static/images/books/hackersIeltsSpeaking_cover.png', '/static/images/books/hackersIeltsSpeaking_01.png', '/static/images/books/hackersIeltsSpeaking_02.png', '/static/images/books/hackersIeltsSpeaking_03.png'],
            author: '해커스',
            year: '2021',
            rating: 4.7
        },
        'ieltsMasterComplete': {
            id: 'ieltsMasterComplete',
            galleryId: 'ielts-master-complete',
            name: 'IELTS Master Complete',
            publisher: 'Cambridge',
            levels: 'Level 7-9',
            levelRange: [7, 9],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'IELTS 고득점 목표 수험생',
            coverImage: '/static/images/books/ieltsMasterComplete_cover.png',
            description: 'IELTS 마스터를 위한 완벽 가이드입니다. 4가지 영역을 통합적으로 학습합니다.',
            objectives: ['IELTS 4대 영역 마스터', 'Band 7-8 달성', '실전 감각 향상', '시험 전략 완성'],
            features: ['통합 학습 교재', '실전 문제 풍부', '전략 가이드', '모범 답안'],
            samples: ['/static/images/books/ieltsMasterComplete_cover.png', '/static/images/books/ieltsMasterComplete_01.png', '/static/images/books/ieltsMasterComplete_02.png', '/static/images/books/ieltsMasterComplete_03.png'],
            author: 'Cambridge',
            year: '2020',
            rating: 4.8
        },
        'ielts18GeneralTraining': {
            id: 'ielts18GeneralTraining',
            galleryId: 'ielts-18-general-training',
            name: 'IELTS 18 General Training',
            publisher: 'Cambridge',
            levels: 'Level 7-10',
            levelRange: [7, 10],
            category: 'test-prep',
            accordionCategory: 'test',
            target: 'IELTS General 수험생',
            coverImage: '/static/images/books/ielts18GeneralTraining_cover.png',
            description: 'Cambridge IELTS 18 General Training 공식 문제집입니다.',
            objectives: ['최신 기출 유형 파악', '실전 문제 연습', '점수 향상', '시험 감각 향상'],
            features: ['공식 기출 문제', '최신 유형 반영', '답안 및 해설', '음성 자료'],
            samples: ['/static/images/books/ielts18GeneralTraining_cover.png', '/static/images/books/ielts18GeneralTraining_01.png', '/static/images/books/ielts18GeneralTraining_02.png', '/static/images/books/ielts18GeneralTraining_03.png'],
            author: 'Cambridge',
            year: '2022',
            rating: 4.8
        },

        // ----------------------------------------
        // Business English
        // ----------------------------------------
        'businessEnglishEmailPattern233': {
            id: 'businessEnglishEmailPattern233',
            galleryId: 'business-english-email-pattern-233',
            name: '비즈니스 영어 이메일 패턴 233',
            publisher: '길벗이지톡',
            levels: 'Level 4-8',
            levelRange: [4, 8],
            category: 'business',
            accordionCategory: 'business',
            target: '비즈니스 영어 학습자',
            coverImage: '/static/images/books/businessEnglishEmailPattern233_cover.png',
            description: '비즈니스 이메일에 필요한 233개 핵심 패턴을 학습하는 교재입니다.',
            objectives: ['비즈니스 이메일 마스터', '233개 패턴 습득', '상황별 이메일 작성', '전문적인 표현'],
            features: ['233개 핵심 패턴', '상황별 예시', '실전 연습', '표현 사전'],
            samples: ['/static/images/books/businessEnglishEmailPattern233_cover.png', '/static/images/books/businessEnglishEmailPattern233_01.png', '/static/images/books/businessEnglishEmailPattern233_02.png', '/static/images/books/businessEnglishEmailPattern233_03.png'],
            author: '길벗이지톡',
            year: '2019',
            rating: 4.5
        },
        'businessJapaneseEmailPattern200': {
            id: 'businessJapaneseEmailPattern200',
            galleryId: 'business-japanese-email-pattern-200',
            name: '비즈니스 일본어 이메일 패턴 200',
            publisher: '다락원',
            levels: 'Level 4-8',
            levelRange: [4, 8],
            category: 'business',
            accordionCategory: 'business',
            target: '비즈니스 일본어 학습자',
            coverImage: '/static/images/books/businessJapaneseEmailPattern200_cover.png',
            description: '비즈니스 일본어 이메일 작성을 위한 200개 패턴 교재입니다.',
            objectives: ['일본어 이메일 마스터', '200개 패턴 습득', '비즈니스 매너 학습', '실전 이메일 작성'],
            features: ['200개 핵심 패턴', '일본 비즈니스 문화', '상황별 예시', '경어 표현'],
            samples: ['/static/images/books/businessJapaneseEmailPattern200_cover.png', '/static/images/books/businessJapaneseEmailPattern200_01.png', '/static/images/books/businessJapaneseEmailPattern200_02.png', '/static/images/books/businessJapaneseEmailPattern200_03.png'],
            author: '다락원',
            year: '2019',
            rating: 4.4
        },
        'businessJapaneseEmailPattern233': {
            id: 'businessJapaneseEmailPattern233',
            galleryId: 'business-japanese-email-pattern-233',
            name: '비즈니스 일본어 이메일 패턴 233',
            publisher: '다락원',
            levels: 'Level 4-8',
            levelRange: [4, 8],
            category: 'business',
            accordionCategory: 'business',
            target: '비즈니스 일본어 학습자',
            coverImage: '/static/images/books/businessJapaneseEmailPattern233_cover.png',
            description: '비즈니스 일본어 이메일 심화 과정입니다. 233개 패턴으로 완벽 대비합니다.',
            objectives: ['일본어 이메일 심화', '233개 패턴 마스터', '고급 비즈니스 표현', '전문적인 이메일'],
            features: ['233개 심화 패턴', '고급 경어 표현', '업종별 예시', '실전 연습'],
            samples: ['/static/images/books/businessJapaneseEmailPattern233_cover.png', '/static/images/books/businessJapaneseEmailPattern233_01.png', '/static/images/books/businessJapaneseEmailPattern233_02.png', '/static/images/books/businessJapaneseEmailPattern233_03.png'],
            author: '다락원',
            year: '2020',
            rating: 4.5
        },

        // ----------------------------------------
        // 영어 - 추가 교재 (커리큘럼 9레벨용)
        // ----------------------------------------
        'worldEnglish3': {
            id: 'worldEnglish3',
            galleryId: 'world-english-3',
            name: 'World English 3',
            publisher: 'Cengage Learning',
            levels: 'Level 5',
            levelRange: [5, 5],
            category: 'general-english',
            target: '중급 학습자',
            coverImage: '/static/images/books/worldEnglish3_cover.png',
            description: 'World English 시리즈의 중급 과정입니다. 글로벌 주제로 실용 영어를 학습합니다.',
            objectives: ['중급 회화 능력 향상', '글로벌 주제 토론', '리스닝 스킬 강화', '어휘력 확장'],
            features: ['글로벌 주제 중심', '실용적 표현', '다양한 액티비티', '온라인 자료 연동'],
            samples: ['/static/images/books/worldEnglish3_cover.png', '/static/images/books/worldEnglish3_01.png', '/static/images/books/worldEnglish3_03.png']
        },
        'englishCorePattern233Advanced': {
            id: 'englishCorePattern233Advanced',
            galleryId: 'english-core-pattern-233-advanced',
            name: '영어회화 핵심패턴 233 중고급편',
            publisher: '길벗이지톡',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'general-english',
            target: '중고급 학습자',
            coverImage: '/static/images/books/englishCorePattern233Advanced_cover.png',
            description: '영어회화 핵심패턴 233개를 중고급 수준으로 학습하는 교재입니다.',
            objectives: ['핵심 패턴 233개 마스터', '중고급 표현 학습', '실전 회화 능력', '유창성 향상'],
            features: ['233개 핵심 패턴', '중고급 수준', '실전 대화 예시', 'MP3 음성 제공'],
            samples: ['/static/images/books/englishCorePattern233Advanced_cover.png', '/static/images/books/englishCorePattern233Advanced_01.png', '/static/images/books/englishCorePattern233Advanced_02.png']
        },

        // Smart English 시리즈 (주니어)
        'smartEnglishStarter': {
            id: 'smartEnglishStarter',
            galleryId: 'smart-english-starter',
            name: 'Smart English Starter',
            publisher: 'e-future',
            levels: 'Level 1',
            levelRange: [1, 1],
            category: 'junior-english',
            target: '영어 입문 주니어 학습자',
            coverImage: '/static/images/books/smartEnglishStarter_cover.png',
            description: '주니어 학습자를 위한 영어 입문 교재입니다.',
            objectives: ['기초 영어 학습', '알파벳과 파닉스', '기본 단어 학습', '듣기 능력 향상'],
            features: ['주니어 맞춤', '파닉스 기반', '재미있는 액티비티', '음성 자료 제공'],
            samples: ['/static/images/books/smartEnglishStarter_cover.png', '/static/images/books/smartEnglishStarter_01.png', '/static/images/books/smartEnglishStarter_02.png', '/static/images/books/smartEnglishStarter_03.png']
        },
        'smartEnglish1': {
            id: 'smartEnglish1',
            galleryId: 'smart-english-1',
            name: 'Smart English 1',
            publisher: 'e-future',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'junior-english',
            target: '주니어 초급 학습자',
            coverImage: '/static/images/books/smartEnglish1_cover.png',
            description: 'Smart English 시리즈 1단계입니다.',
            objectives: ['기초 문법 학습', '기본 회화 표현', '어휘력 확장', '리스닝 향상'],
            features: ['체계적 커리큘럼', '재미있는 학습', '다양한 액티비티', '온라인 자료'],
            samples: ['/static/images/books/smartEnglish1_cover.png', '/static/images/books/smartEnglish1_01.png', '/static/images/books/smartEnglish1_02.png']
        },
        'smartEnglish2': {
            id: 'smartEnglish2',
            galleryId: 'smart-english-2',
            name: 'Smart English 2',
            publisher: 'e-future',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'junior-english',
            target: '주니어 초급 학습자',
            coverImage: '/static/images/books/smartEnglish2_cover.png',
            description: 'Smart English 시리즈 2단계입니다.',
            objectives: ['초급 문법 심화', '회화 표현 확장', '읽기 능력 향상', '쓰기 기초'],
            features: ['단계별 학습', '실생활 표현', '게임형 액티비티', '워크북 포함'],
            samples: ['/static/images/books/smartEnglish2_cover.png', '/static/images/books/smartEnglish2_01.png', '/static/images/books/smartEnglish2_02.png']
        },
        'smartEnglish3': {
            id: 'smartEnglish3',
            galleryId: 'smart-english-3',
            name: 'Smart English 3',
            publisher: 'e-future',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'junior-english',
            target: '주니어 초중급 학습자',
            coverImage: '/static/images/books/smartEnglish3_cover.png',
            description: 'Smart English 시리즈 3단계입니다.',
            objectives: ['중급 문법 학습', '대화 능력 향상', '독해력 강화', '작문 연습'],
            features: ['심화 학습 내용', '토론 액티비티', '프로젝트 학습', '평가 자료'],
            samples: ['/static/images/books/smartEnglish3_cover.png', '/static/images/books/smartEnglish3_01.png', '/static/images/books/smartEnglish3_02.png']
        },
        'smartEnglish4': {
            id: 'smartEnglish4',
            galleryId: 'smart-english-4',
            name: 'Smart English 4',
            publisher: 'e-future',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'junior-english',
            target: '주니어 중급 학습자',
            coverImage: '/static/images/books/smartEnglish4_cover.png',
            description: 'Smart English 시리즈 4단계입니다.',
            objectives: ['중급 문법 완성', '유창한 대화', '비판적 사고', '발표 능력'],
            features: ['고급 어휘', '토론 중심', '프레젠테이션', '자기 평가'],
            samples: ['/static/images/books/smartEnglish4_cover.png', '/static/images/books/smartEnglish4_01.png', '/static/images/books/smartEnglish4_02.png']
        },
        'smartEnglish5': {
            id: 'smartEnglish5',
            galleryId: 'smart-english-5',
            name: 'Smart English 5',
            publisher: 'e-future',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'junior-english',
            target: '주니어 중고급 학습자',
            coverImage: '/static/images/books/smartEnglish5_cover.png',
            description: 'Smart English 시리즈 5단계입니다.',
            objectives: ['고급 문법 학습', '학술적 영어', '비판적 읽기', '에세이 작성'],
            features: ['학술 영어 기초', '심화 토론', '연구 프로젝트', '포트폴리오'],
            samples: ['/static/images/books/smartEnglish5_cover.png', '/static/images/books/smartEnglish5_01.png', '/static/images/books/smartEnglish5_02.png']
        },
        'smartEnglish6': {
            id: 'smartEnglish6',
            galleryId: 'smart-english-6',
            name: 'Smart English 6',
            publisher: 'e-future',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'junior-english',
            target: '주니어 고급 학습자',
            coverImage: '/static/images/books/smartEnglish6_cover.png',
            description: 'Smart English 시리즈 최종 단계입니다.',
            objectives: ['고급 영어 완성', '원어민 수준 목표', '학술적 토론', '창의적 글쓰기'],
            features: ['최고급 과정', '심화 프로젝트', '실전 영어', '종합 평가'],
            samples: ['/static/images/books/smartEnglish6_cover.png', '/static/images/books/smartEnglish6_01.png', '/static/images/books/smartEnglish6_02.png']
        },

        // Smart Phonics 시리즈 (주니어)
        'smartPhonics1': {
            id: 'smartPhonics1',
            galleryId: 'smart-phonics-1',
            name: 'Smart Phonics 1',
            publisher: 'e-future',
            levels: 'Level 1',
            levelRange: [1, 1],
            category: 'junior-english',
            target: '파닉스 입문 학습자',
            coverImage: '/static/images/books/smartPhonics1_cover.png',
            description: 'Smart Phonics 시리즈 1단계로 알파벳과 기초 파닉스를 학습합니다.',
            objectives: ['알파벳 마스터', '기초 파닉스', '발음 기초', '듣기 능력'],
            features: ['알파벳 학습', '파닉스 기초', '노래와 챈트', '플래시카드'],
            samples: ['/static/images/books/smartPhonics1_cover.png']
        },
        'smartPhonics2': {
            id: 'smartPhonics2',
            galleryId: 'smart-phonics-2',
            name: 'Smart Phonics 2',
            publisher: 'e-future',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'junior-english',
            target: '파닉스 초급 학습자',
            coverImage: '/static/images/books/smartPhonics2_cover.png',
            description: 'Smart Phonics 시리즈 2단계로 단모음과 자음을 학습합니다.',
            objectives: ['단모음 마스터', '자음 조합', '단어 읽기', '발음 교정'],
            features: ['단모음 학습', '자음 블렌딩', '단어 읽기', '워크북'],
            samples: ['/static/images/books/smartPhonics2_cover.png']
        },
        'smartPhonics3': {
            id: 'smartPhonics3',
            galleryId: 'smart-phonics-3',
            name: 'Smart Phonics 3',
            publisher: 'e-future',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'junior-english',
            target: '파닉스 중급 학습자',
            coverImage: '/static/images/books/smartPhonics3_cover.png',
            description: 'Smart Phonics 시리즈 3단계로 장모음과 이중모음을 학습합니다.',
            objectives: ['장모음 마스터', '이중모음', '문장 읽기', '유창성 향상'],
            features: ['장모음 학습', '이중모음', '스토리 읽기', '평가 자료'],
            samples: ['/static/images/books/smartPhonics3_cover.png']
        },

        // Exploring English 시리즈
        'exploringEnglish1': {
            id: 'exploringEnglish1',
            galleryId: 'exploring-english-1',
            name: 'Exploring English 1',
            publisher: 'Longman',
            levels: 'Level 1',
            levelRange: [1, 1],
            category: 'general-english',
            target: '영어 입문 학습자',
            coverImage: '/static/images/books/exploringEnglish1_cover.png',
            description: 'Exploring English 시리즈 1단계로 기초 영어를 학습합니다.',
            objectives: ['기초 영어 학습', '기본 문법', '일상 회화', '듣기 능력'],
            features: ['체계적 학습', '실생활 영어', '다양한 연습', '음성 자료'],
            samples: ['/static/images/books/exploringEnglish1_cover.png', '/static/images/books/exploringEnglish1_01.png', '/static/images/books/exploringEnglish1_02.png']
        },
        'exploringEnglish2': {
            id: 'exploringEnglish2',
            galleryId: 'exploring-english-2',
            name: 'Exploring English 2',
            publisher: 'Longman',
            levels: 'Level 2',
            levelRange: [2, 2],
            category: 'general-english',
            target: '초급 학습자',
            coverImage: '/static/images/books/exploringEnglish2_cover.png',
            description: 'Exploring English 시리즈 2단계입니다.',
            objectives: ['초급 문법 심화', '회화 확장', '읽기 연습', '어휘 확장'],
            features: ['단계별 학습', '다양한 주제', '연습 문제', '복습 시스템'],
            samples: ['/static/images/books/exploringEnglish2_cover.png', '/static/images/books/exploringEnglish2_01.png', '/static/images/books/exploringEnglish2_02.png']
        },
        'exploringEnglish3': {
            id: 'exploringEnglish3',
            galleryId: 'exploring-english-3',
            name: 'Exploring English 3',
            publisher: 'Longman',
            levels: 'Level 3',
            levelRange: [3, 3],
            category: 'general-english',
            target: '초중급 학습자',
            coverImage: '/static/images/books/exploringEnglish3_cover.png',
            description: 'Exploring English 시리즈 3단계입니다.',
            objectives: ['중급 문법', '토론 능력', '독해력 향상', '작문 기초'],
            features: ['심화 학습', '토론 활동', '읽기 자료', '쓰기 연습'],
            samples: ['/static/images/books/exploringEnglish3_cover.png', '/static/images/books/exploringEnglish3_01.png', '/static/images/books/exploringEnglish3_02.png']
        },
        'exploringEnglish4': {
            id: 'exploringEnglish4',
            galleryId: 'exploring-english-4',
            name: 'Exploring English 4',
            publisher: 'Longman',
            levels: 'Level 4',
            levelRange: [4, 4],
            category: 'general-english',
            target: '중급 학습자',
            coverImage: '/static/images/books/exploringEnglish4_cover.png',
            description: 'Exploring English 시리즈 4단계입니다.',
            objectives: ['중급 완성', '유창한 대화', '비판적 읽기', '에세이 작성'],
            features: ['고급 문법', '다양한 주제', '프로젝트', '평가 자료'],
            samples: ['/static/images/books/exploringEnglish4_cover.png', '/static/images/books/exploringEnglish4_01.png', '/static/images/books/exploringEnglish4_02.png']
        },
        'exploringEnglish5': {
            id: 'exploringEnglish5',
            galleryId: 'exploring-english-5',
            name: 'Exploring English 5',
            publisher: 'Longman',
            levels: 'Level 5',
            levelRange: [5, 5],
            category: 'general-english',
            target: '중고급 학습자',
            coverImage: '/static/images/books/exploringEnglish5_cover.png',
            description: 'Exploring English 시리즈 5단계입니다.',
            objectives: ['고급 영어', '학술적 토론', '심화 독해', '학술 작문'],
            features: ['최고급 과정', '심화 프로젝트', '종합 평가', '실전 영어'],
            samples: ['/static/images/books/exploringEnglish5_cover.png', '/static/images/books/exploringEnglish5_01.png', '/static/images/books/exploringEnglish5_02.png', '/static/images/books/exploringEnglish5_03.png']
        },

        // 비즈니스 영어 - Oxford Business Skills
        'englishForMeetings': {
            id: 'englishForMeetings',
            galleryId: 'english-for-meetings',
            name: 'English for Meetings',
            publisher: 'Oxford University Press',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'business',
            target: '비즈니스 영어 학습자',
            coverImage: '/static/images/books/englishForMeetings_cover.png',
            description: '비즈니스 미팅에서 필요한 영어 표현을 학습하는 교재입니다.',
            objectives: ['미팅 영어 마스터', '회의 진행 표현', '의견 제시 방법', '협상 스킬'],
            features: ['실전 미팅 영어', '롤플레이 연습', '비디오 자료', '실무 표현'],
            samples: ['/static/images/books/englishForMeetings_cover.png', '/static/images/books/englishForMeetings_01.png', '/static/images/books/englishForMeetings_02.png']
        },
        'englishForNegotiation': {
            id: 'englishForNegotiation',
            galleryId: 'english-for-negotiation',
            name: 'English for Negotiation',
            publisher: 'Oxford University Press',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'business',
            target: '비즈니스 영어 학습자',
            coverImage: '/static/images/books/englishForNegotiation_cover.png',
            description: '비즈니스 협상에서 필요한 영어 표현을 학습하는 교재입니다.',
            objectives: ['협상 영어 마스터', '설득 기법', '타협점 찾기', '계약 영어'],
            features: ['실전 협상 영어', '케이스 스터디', '롤플레이', '전략 학습'],
            samples: ['/static/images/books/englishForNegotiation_cover.png', '/static/images/books/englishForNegotiation_01.png', '/static/images/books/englishForNegotiation_02.png', '/static/images/books/englishForNegotiation_03.png']
        },
        'englishForPresentations': {
            id: 'englishForPresentations',
            galleryId: 'english-for-presentations',
            name: 'English for Presentations',
            publisher: 'Oxford University Press',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'business',
            target: '비즈니스 영어 학습자',
            coverImage: '/static/images/books/englishForPresentations_cover.png',
            description: '프레젠테이션에서 필요한 영어 표현을 학습하는 교재입니다.',
            objectives: ['프레젠테이션 영어', '청중 분석', '시각 자료 설명', 'Q&A 대응'],
            features: ['발표 영어 실전', '구조화 기법', '시각 자료 활용', '질의응답 연습'],
            samples: ['/static/images/books/englishForPresentations_cover.png', '/static/images/books/englishForPresentations_01.png', '/static/images/books/englishForPresentations_02.png', '/static/images/books/englishForPresentations_03.png']
        },
        'englishForSocializing': {
            id: 'englishForSocializing',
            galleryId: 'english-for-socializing',
            name: 'English for Socializing',
            publisher: 'Oxford University Press',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'business',
            target: '비즈니스 영어 학습자',
            coverImage: '/static/images/books/englishForSocializing_cover.png',
            description: '비즈니스 네트워킹과 사교 상황에서의 영어 표현을 학습합니다.',
            objectives: ['사교 영어 마스터', '스몰토크', '네트워킹 스킬', '문화적 매너'],
            features: ['실전 사교 영어', '상황별 표현', '문화 차이', '롤플레이'],
            samples: ['/static/images/books/englishForSocializing_cover.png', '/static/images/books/englishForSocializing_01.png', '/static/images/books/englishForSocializing_02.png', '/static/images/books/englishForSocializing_03.png']
        },
        'englishForTelephoning': {
            id: 'englishForTelephoning',
            galleryId: 'english-for-telephoning',
            name: 'English for Telephoning',
            publisher: 'Oxford University Press',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'business',
            target: '비즈니스 영어 학습자',
            coverImage: '/static/images/books/englishForTelephoning_cover.png',
            description: '비즈니스 전화 영어를 학습하는 교재입니다.',
            objectives: ['전화 영어 마스터', '메시지 전달', '약속 잡기', '문제 해결'],
            features: ['실전 전화 영어', '상황별 연습', '청취 훈련', '롤플레이'],
            samples: ['/static/images/books/englishForTelephoning_cover.png', '/static/images/books/englishForTelephoning_01.png', '/static/images/books/englishForTelephoning_02.png', '/static/images/books/englishForTelephoning_03.png']
        },

        // Business Partner 시리즈
        'businessPartnerA2': {
            id: 'businessPartnerA2',
            galleryId: 'business-partner-a2',
            name: 'Business Partner A2',
            publisher: 'Pearson',
            levels: 'Level 3',
            levelRange: [3, 3],
            category: 'business',
            target: '비즈니스 영어 초급 학습자',
            coverImage: '/static/images/books/businessPartnerA2_cover.png',
            description: 'Business Partner A2 레벨 비즈니스 영어 교재입니다.',
            objectives: ['비즈니스 영어 기초', '직장 영어', '이메일 작성', '기초 회의 영어'],
            features: ['A2 레벨 맞춤', 'GSE 기반', '실무 중심', '온라인 자료'],
            samples: ['/static/images/books/businessPartnerA2_cover.png', '/static/images/books/businessPartnerA2_01.png', '/static/images/books/businessPartnerA2_02.png', '/static/images/books/businessPartnerA2_03.png']
        },
        'businessPartnerB2Plus': {
            id: 'businessPartnerB2Plus',
            galleryId: 'business-partner-b2-plus',
            name: 'Business Partner B2+',
            publisher: 'Pearson',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'business',
            target: '비즈니스 영어 중급 학습자',
            coverImage: '/static/images/books/businessPartnerB2Plus_cover.png',
            description: 'Business Partner B2+ 레벨 비즈니스 영어 교재입니다.',
            objectives: ['비즈니스 영어 심화', '프레젠테이션', '협상 영어', '보고서 작성'],
            features: ['B2+ 레벨', 'GSE 기반', '케이스 스터디', '비디오 자료'],
            samples: ['/static/images/books/businessPartnerB2Plus_cover.png', '/static/images/books/businessPartnerB2Plus_01.png', '/static/images/books/businessPartnerB2Plus_02.png', '/static/images/books/businessPartnerB2Plus_03.png']
        },

        // Profile 시리즈
        'profile1': {
            id: 'profile1',
            galleryId: 'profile-1',
            name: 'Profile 1',
            publisher: 'Oxford University Press',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'business',
            target: '비즈니스 영어 중고급 학습자',
            coverImage: '/static/images/books/profile1_cover.png',
            description: 'Profile 시리즈 1단계로 비즈니스 영어를 학습합니다.',
            objectives: ['비즈니스 영어 중급', '직장 커뮤니케이션', '보고서 작성', '발표 영어'],
            features: ['중급 비즈니스', '실무 표현', '케이스 스터디', '프로젝트 학습'],
            samples: ['/static/images/books/profile1_cover.png', '/static/images/books/profile1_01.png', '/static/images/books/profile1_02.png', '/static/images/books/profile1_03.png']
        },
        'profile2': {
            id: 'profile2',
            galleryId: 'profile-2',
            name: 'Profile 2',
            publisher: 'Oxford University Press',
            levels: 'Level 7-8',
            levelRange: [7, 8],
            category: 'business',
            target: '비즈니스 영어 고급 학습자',
            coverImage: '/static/images/books/profile2_cover.png',
            description: 'Profile 시리즈 2단계입니다.',
            objectives: ['비즈니스 영어 고급', '협상 영어', '리더십 영어', '전략 커뮤니케이션'],
            features: ['고급 비즈니스', '리더십 영어', '심화 케이스', '실전 프로젝트'],
            samples: ['/static/images/books/profile2_cover.png', '/static/images/books/profile2_01.png', '/static/images/books/profile2_02.png', '/static/images/books/profile2_03.png']
        },
        'profile3': {
            id: 'profile3',
            galleryId: 'profile-3',
            name: 'Profile 3',
            publisher: 'Oxford University Press',
            levels: 'Level 8-9',
            levelRange: [8, 9],
            category: 'business',
            target: '비즈니스 영어 최고급 학습자',
            coverImage: '/static/images/books/profile3_cover.png',
            description: 'Profile 시리즈 최종 단계입니다.',
            objectives: ['비즈니스 영어 최고급', '경영진 영어', 'M&A 영어', '글로벌 비즈니스'],
            features: ['최고급 비즈니스', '경영진 표현', '글로벌 케이스', '전략 프로젝트'],
            samples: ['/static/images/books/profile3_cover.png', '/static/images/books/profile3_01.png', '/static/images/books/profile3_02.png', '/static/images/books/profile3_03.png']
        },

        // Business Venture 시리즈
        'businessVenture1': {
            id: 'businessVenture1',
            galleryId: 'business-venture-1',
            name: 'Business Venture 1',
            publisher: 'Oxford University Press',
            levels: 'Level 4',
            levelRange: [4, 4],
            category: 'business',
            target: '비즈니스 영어 초중급 학습자',
            coverImage: '/static/images/books/businessVenture1_cover.png',
            description: 'Business Venture 시리즈 1단계입니다.',
            objectives: ['비즈니스 영어 기초', '직장 영어', '이메일 영어', '전화 영어'],
            features: ['초중급 비즈니스', '실무 중심', '롤플레이', '음성 자료'],
            samples: ['/static/images/books/businessVenture1_cover.png', '/static/images/books/businessVenture1_01.png', '/static/images/books/businessVenture1_02.png', '/static/images/books/businessVenture1_03.png']
        },
        'businessVenture2': {
            id: 'businessVenture2',
            galleryId: 'business-venture-2',
            name: 'Business Venture 2',
            publisher: 'Oxford University Press',
            levels: 'Level 5',
            levelRange: [5, 5],
            category: 'business',
            target: '비즈니스 영어 중급 학습자',
            coverImage: '/static/images/books/businessVenture2_cover.png',
            description: 'Business Venture 시리즈 2단계입니다.',
            objectives: ['비즈니스 영어 중급', '회의 영어', '프레젠테이션', '보고서 작성'],
            features: ['중급 비즈니스', '케이스 스터디', '실전 연습', '평가 자료'],
            samples: ['/static/images/books/businessVenture2_cover.png', '/static/images/books/businessVenture2_01.png', '/static/images/books/businessVenture2_02.png', '/static/images/books/businessVenture2_03.png']
        },
        'businessResultUpperIntermediate': {
            id: 'businessResultUpperIntermediate',
            galleryId: 'business-result-upper-intermediate',
            name: 'Business Result Upper-Intermediate',
            publisher: 'Oxford University Press',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'business',
            target: '비즈니스 영어 중고급 학습자',
            coverImage: '/static/images/books/businessResultUpperIntermediate_cover.png',
            description: 'Business Result 시리즈 Upper-Intermediate 레벨입니다.',
            objectives: ['비즈니스 영어 심화', '전문 분야 영어', '프로젝트 영어', '글로벌 커뮤니케이션'],
            features: ['중고급 비즈니스', '업종별 영어', '멀티미디어', '온라인 학습'],
            samples: ['/static/images/books/businessResultUpperIntermediate_cover.png', '/static/images/books/businessResultUpperIntermediate_01.png', '/static/images/books/businessResultUpperIntermediate_02.png', '/static/images/books/businessResultUpperIntermediate_03.png', '/static/images/books/businessResultUpperIntermediate_04.png']
        },

        // 주제토론 - News Media, HBR, Hot Topics 등
        'newsMedia': {
            id: 'newsMedia',
            galleryId: 'news-media',
            name: 'News Media',
            publisher: 'ePlan',
            levels: 'Level 4-9',
            levelRange: [4, 9],
            category: 'discussion',
            target: '중급 이상 학습자',
            coverImage: '/static/images/books/newsMedia_cover.png',
            description: '뉴스 미디어를 활용한 영어 토론 교재입니다.',
            objectives: ['뉴스 영어 학습', '시사 토론', '비판적 사고', '미디어 리터러시'],
            features: ['실시간 뉴스', '토론 중심', '다양한 관점', '미디어 분석'],
            samples: ['/static/images/books/newsMedia_cover.png', '/static/images/books/newsMedia_01.png', '/static/images/books/newsMedia_02.png', '/static/images/books/newsMedia_03.png']
        },
        'hbrOrange': {
            id: 'hbrOrange',
            galleryId: 'hbr-orange',
            name: 'Harvard Business Review Orange',
            publisher: 'Harvard Business Review',
            levels: 'Level 4-7',
            levelRange: [4, 7],
            category: 'discussion',
            target: '비즈니스 토론 학습자',
            coverImage: '/static/images/books/hbrOrange_cover.png',
            description: 'Harvard Business Review를 활용한 비즈니스 영어 토론 교재입니다.',
            objectives: ['비즈니스 토론', '경영 지식', '리더십 이해', '전략적 사고'],
            features: ['HBR 아티클', '비즈니스 토론', '케이스 분석', '어휘 학습'],
            samples: ['/static/images/books/hbrOrange_cover.png', '/static/images/books/hbrOrange_01.png', '/static/images/books/hbrOrange_02.png', '/static/images/books/hbrOrange_03.png']
        },
        'hbrDaily': {
            id: 'hbrDaily',
            galleryId: 'hbr-daily',
            name: 'Harvard Business Review Daily',
            publisher: 'Harvard Business Review',
            levels: 'Level 4-7',
            levelRange: [4, 7],
            category: 'discussion',
            target: '비즈니스 토론 학습자',
            coverImage: '/static/images/books/hbrDaily_cover.png',
            description: 'Harvard Business Review Daily 시리즈입니다.',
            objectives: ['일일 비즈니스 학습', '최신 트렌드', '리더십 스킬', '경영 인사이트'],
            features: ['매일 학습', 'HBR 콘텐츠', '토론 주제', '실무 적용'],
            samples: ['/static/images/books/hbrDaily_cover.png', '/static/images/books/hbrDaily_01.png', '/static/images/books/hbrDaily_02.png', '/static/images/books/hbrDaily_03.png', '/static/images/books/hbrDaily_04.png', '/static/images/books/hbrDaily_05.png']
        },
        'powerOfStorytelling': {
            id: 'powerOfStorytelling',
            galleryId: 'power-of-storytelling',
            name: 'Power of Storytelling',
            publisher: 'ePlan',
            levels: 'Level 5-9',
            levelRange: [5, 9],
            category: 'discussion',
            target: '고급 영어 학습자',
            coverImage: '/static/images/books/powerOfStorytelling_cover.png',
            description: '스토리텔링을 통한 영어 학습 교재입니다.',
            objectives: ['스토리텔링 스킬', '설득력 있는 표현', '발표 능력', '창의적 사고'],
            features: ['스토리텔링 기법', '프레젠테이션', '사례 연구', '실전 연습'],
            samples: ['/static/images/books/powerOfStorytelling_cover.png', '/static/images/books/powerOfStorytelling_01.png']
        },
        'hotTopics1': {
            id: 'hotTopics1',
            galleryId: 'hot-topics-1',
            name: 'Hot Topics 1',
            publisher: 'Compass Publishing',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'discussion',
            target: '토론 영어 학습자',
            coverImage: '/static/images/books/hotTopics1_cover.png',
            description: '핫 토픽 시리즈 1단계로 시사 주제 토론을 학습합니다.',
            objectives: ['시사 영어', '토론 스킬', '비판적 사고', '논리적 표현'],
            features: ['시사 주제', '찬반 토론', '어휘 학습', '토론 연습'],
            samples: ['/static/images/books/hotTopics1_cover.png', '/static/images/books/hotTopics1_01.png']
        },
        'hotTopics2': {
            id: 'hotTopics2',
            galleryId: 'hot-topics-2',
            name: 'Hot Topics 2',
            publisher: 'Compass Publishing',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'discussion',
            target: '토론 영어 학습자',
            coverImage: '/static/images/books/hotTopics2_cover.png',
            description: '핫 토픽 시리즈 2단계입니다.',
            objectives: ['심화 토론', '복잡한 주제', '고급 어휘', '설득력 향상'],
            features: ['심화 주제', '디베이트', '고급 표현', '실전 토론'],
            samples: ['/static/images/books/hotTopics2_cover.png', '/static/images/books/hotTopics2_01.png']
        },
        'debateEnglish': {
            id: 'debateEnglish',
            galleryId: 'debate-english',
            name: '실전 토론 영어',
            publisher: '다락원',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'discussion',
            target: '토론 영어 학습자',
            coverImage: '/static/images/books/debateEnglish_cover.png',
            description: '실전 토론 영어를 학습하는 교재입니다.',
            objectives: ['토론 영어 마스터', '논리적 표현', '반박 기술', '설득력 향상'],
            features: ['실전 토론', '한국어 지원', '다양한 주제', '토론 팁'],
            samples: ['/static/images/books/debateEnglish_cover.png', '/static/images/books/debateEnglish_01.png', '/static/images/books/debateEnglish_02.png', '/static/images/books/debateEnglish_03.png']
        },

        // 시험대비 - TOEIC Speaking 추가
        'hackersToeicSpeakingStart': {
            id: 'hackersToeicSpeakingStart',
            galleryId: 'hackers-toeic-speaking-start',
            name: 'TOEIC Speaking Start',
            publisher: '해커스',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'test-prep',
            target: 'TOEIC Speaking 입문 수험생',
            coverImage: '/static/images/books/hackersToeicSpeakingStart_cover.png',
            description: 'TOEIC Speaking 입문 교재입니다.',
            objectives: ['TOEIC Speaking 입문', '기초 답변 전략', '발음 교정', '시간 관리'],
            features: ['입문자 맞춤', '기초부터 학습', '실전 문제', '음성 자료'],
            samples: ['/static/images/books/hackersToeicSpeakingStart_cover.png', '/static/images/books/hackersToeicSpeakingStart_01.png', '/static/images/books/hackersToeicSpeakingStart_02.png', '/static/images/books/hackersToeicSpeakingStart_03.png', '/static/images/books/hackersToeicSpeakingStart_04.png']
        },
        'hackersToeicSpeakingLv6': {
            id: 'hackersToeicSpeakingLv6',
            galleryId: 'hackers-toeic-speaking-lv6',
            name: 'TOEIC Speaking Lv.6',
            publisher: '해커스',
            levels: 'Level 5',
            levelRange: [5, 5],
            category: 'test-prep',
            target: 'TOEIC Speaking Lv.6 목표 수험생',
            coverImage: '/static/images/books/hackersToeicSpeakingLv6_cover.png',
            description: 'TOEIC Speaking Lv.6 달성을 위한 교재입니다.',
            objectives: ['Lv.6 달성', '파트별 전략', '답변 템플릿', '실전 감각'],
            features: ['Lv.6 맞춤', '전략적 학습', '실전 문제', '모범 답안'],
            samples: ['/static/images/books/hackersToeicSpeakingLv6_cover.png', '/static/images/books/hackersToeicSpeakingLv6_01.png', '/static/images/books/hackersToeicSpeakingLv6_02.png', '/static/images/books/hackersToeicSpeakingLv6_03.png', '/static/images/books/hackersToeicSpeakingLv6_04.png']
        },
        'hackersToeicSpeakingLv78': {
            id: 'hackersToeicSpeakingLv78',
            galleryId: 'hackers-toeic-speaking-lv78',
            name: 'TOEIC Speaking Lv.7-8',
            publisher: '해커스',
            levels: 'Level 6',
            levelRange: [6, 6],
            category: 'test-prep',
            target: 'TOEIC Speaking Lv.7-8 목표 수험생',
            coverImage: '/static/images/books/hackersToeicSpeakingLv78_cover.png',
            description: 'TOEIC Speaking Lv.7-8 달성을 위한 교재입니다.',
            objectives: ['Lv.7-8 달성', '고급 답변 전략', '유창성 향상', '고급 표현'],
            features: ['고급 과정', '심화 전략', '실전 모의고사', '고급 템플릿'],
            samples: ['/static/images/books/hackersToeicSpeakingLv78_cover.png', '/static/images/books/hackersToeicSpeakingLv78_01.png', '/static/images/books/hackersToeicSpeakingLv78_02.png', '/static/images/books/hackersToeicSpeakingLv78_03.png', '/static/images/books/hackersToeicSpeakingLv78_04.png', '/static/images/books/hackersToeicSpeakingLv78_05.png']
        },
        'etsToeicSpeaking12': {
            id: 'etsToeicSpeaking12',
            galleryId: 'ets-toeic-speaking-12',
            name: 'ETS TOEIC Speaking 기출',
            publisher: 'ETS',
            levels: 'Level 7',
            levelRange: [7, 7],
            category: 'test-prep',
            target: 'TOEIC Speaking 수험생',
            coverImage: '/static/images/books/etsToeicSpeaking12_cover.png',
            description: 'ETS 공식 TOEIC Speaking 기출 문제집입니다.',
            objectives: ['기출 문제 분석', '실전 감각 향상', '시험 패턴 파악', '고득점 전략'],
            features: ['공식 기출', 'ETS 제작', '실전 문제', '해설 포함'],
            samples: ['/static/images/books/etsToeicSpeaking12_cover.png', '/static/images/books/etsToeicSpeaking12_01.png', '/static/images/books/etsToeicSpeaking12_02.png', '/static/images/books/etsToeicSpeaking12_03.png']
        },

        // SPA 시리즈
        'spartaSpaBasic': {
            id: 'spartaSpaBasic',
            galleryId: 'sparta-spa-basic',
            name: 'SPA 초급',
            publisher: '스파르타',
            levels: 'Level 2-4',
            levelRange: [2, 4],
            category: 'test-prep',
            target: 'SPA 초급 수험생',
            coverImage: '/static/images/books/spartaSpaBasic_cover.png',
            description: 'SPA(Speaking Proficiency Assessment) 초급 과정입니다.',
            objectives: ['SPA 초급 대비', '기초 답변 전략', '발음 교정', '시간 관리'],
            features: ['초급 맞춤', '기초부터 학습', '실전 문제', '음성 자료'],
            samples: ['/static/images/books/spartaSpaBasic_cover.png', '/static/images/books/spartaSpaBasic_01.png', '/static/images/books/spartaSpaBasic_02.png', '/static/images/books/spartaSpaBasic_03.png', '/static/images/books/spartaSpaBasic_04.png', '/static/images/books/spartaSpaBasic_05.png']
        },
        'spaShortTermTraining': {
            id: 'spaShortTermTraining',
            galleryId: 'spa-short-term-training',
            name: 'SPA 단기 트레이닝',
            publisher: '스파르타',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'test-prep',
            target: 'SPA 중급 수험생',
            coverImage: '/static/images/books/spaShortTermTraining_cover.png',
            description: 'SPA 단기 집중 트레이닝 교재입니다.',
            objectives: ['단기 집중 학습', '중급 답변 전략', '유창성 향상', '실전 대비'],
            features: ['단기 집중', '전략적 학습', '실전 문제', '모범 답안'],
            samples: ['/static/images/books/spaShortTermTraining_cover.png', '/static/images/books/spaShortTermTraining_01.png', '/static/images/books/spaShortTermTraining_02.png', '/static/images/books/spaShortTermTraining_03.png', '/static/images/books/spaShortTermTraining_04.png']
        },
        'spaTrainer20Days': {
            id: 'spaTrainer20Days',
            galleryId: 'spa-trainer-20-days',
            name: 'SPA 트레이너 20일',
            publisher: '스파르타',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'test-prep',
            target: 'SPA 고급 수험생',
            coverImage: '/static/images/books/spaTrainer20Days_cover.png',
            description: 'SPA 20일 완성 트레이너 교재입니다.',
            objectives: ['20일 완성', '고급 답변 전략', '고득점 달성', '실전 감각'],
            features: ['20일 커리큘럼', '고급 전략', '실전 모의고사', '심화 학습'],
            samples: ['/static/images/books/spaTrainer20Days_cover.png', '/static/images/books/spaTrainer20Days_01.png', '/static/images/books/spaTrainer20Days_02.png', '/static/images/books/spaTrainer20Days_03.png', '/static/images/books/spaTrainer20Days_04.png', '/static/images/books/spaTrainer20Days_05.png', '/static/images/books/spaTrainer20Days_06.png', '/static/images/books/spaTrainer20Days_07.png']
        },

        // ============================================
        // 일본어 교재 (Japanese)
        // ============================================

        // 다락원 일본어 마스터 시리즈
        'darakwonJapaneseMaster1': {
            id: 'darakwonJapaneseMaster1',
            galleryId: 'darakwon-japanese-master-1',
            name: '다락원 일본어 마스터 1',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-japanese',
            target: '일본어 입문자',
            coverImage: '/static/images/books/darakwonJapaneseMaster1_cover.png',
            description: '체계적인 일본어 학습을 위한 다락원 마스터 시리즈 1권입니다.',
            objectives: ['히라가나/가타카나 마스터', '기초 문법 학습', '일상 인사 표현', '기본 회화 능력'],
            features: ['체계적인 문자 학습', '기초 문법 설명', '실용 회화 예문', '연습 문제 수록'],
            samples: ['/static/images/books/darakwonJapaneseMaster1_cover.png', '/static/images/books/darakwonJapaneseMaster1_01.png', '/static/images/books/darakwonJapaneseMaster1_02.png']
        },
        'darakwonJapaneseMaster2': {
            id: 'darakwonJapaneseMaster2',
            galleryId: 'darakwon-japanese-master-2',
            name: '다락원 일본어 마스터 2',
            publisher: '다락원',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-japanese',
            target: '일본어 초급 학습자',
            coverImage: '/static/images/books/darakwonJapaneseMaster2_cover.png',
            description: '체계적인 일본어 학습을 위한 다락원 마스터 시리즈 2권입니다.',
            objectives: ['초급 문법 확장', '어휘력 향상', '일상 회화 능력', '읽기 능력 강화'],
            features: ['심화 문법 학습', '다양한 상황 회화', '독해 연습', '청해 훈련'],
            samples: ['/static/images/books/darakwonJapaneseMaster2_cover.png', '/static/images/books/darakwonJapaneseMaster2_01.png', '/static/images/books/darakwonJapaneseMaster2_02.png', '/static/images/books/darakwonJapaneseMaster2_03.png', '/static/images/books/darakwonJapaneseMaster2_04.png', '/static/images/books/darakwonJapaneseMaster2_05.png', '/static/images/books/darakwonJapaneseMaster2_06.png']
        },
        'darakwonJapaneseMaster3': {
            id: 'darakwonJapaneseMaster3',
            galleryId: 'darakwon-japanese-master-3',
            name: '다락원 일본어 마스터 3',
            publisher: '다락원',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-japanese',
            target: '일본어 초중급 학습자',
            coverImage: '/static/images/books/darakwonJapaneseMaster3_cover.png',
            description: '체계적인 일본어 학습을 위한 다락원 마스터 시리즈 3권입니다.',
            objectives: ['중급 문법 학습', '복잡한 문장 구성', '자연스러운 회화', '뉴스/기사 이해'],
            features: ['중급 문법 완성', '실용 표현 확대', '독해력 강화', '작문 연습'],
            samples: ['/static/images/books/darakwonJapaneseMaster3_cover.png', '/static/images/books/darakwonJapaneseMaster3_01.png', '/static/images/books/darakwonJapaneseMaster3_02.png', '/static/images/books/darakwonJapaneseMaster3_03.png', '/static/images/books/darakwonJapaneseMaster3_04.png', '/static/images/books/darakwonJapaneseMaster3_05.png', '/static/images/books/darakwonJapaneseMaster3_06.png']
        },
        'darakwonJapaneseMaster4': {
            id: 'darakwonJapaneseMaster4',
            galleryId: 'darakwon-japanese-master-4',
            name: '다락원 일본어 마스터 4',
            publisher: '다락원',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-japanese',
            target: '일본어 중급 학습자',
            coverImage: '/static/images/books/darakwonJapaneseMaster4_cover.png',
            description: '체계적인 일본어 학습을 위한 다락원 마스터 시리즈 4권입니다.',
            objectives: ['고급 문법 학습', '비즈니스 표현', '시사 토론 능력', '문화 이해'],
            features: ['고급 표현 학습', '비즈니스 상황', '토론/발표', '문화 콘텐츠'],
            samples: ['/static/images/books/darakwonJapaneseMaster4_cover.png', '/static/images/books/darakwonJapaneseMaster4_01.png', '/static/images/books/darakwonJapaneseMaster4_02.png', '/static/images/books/darakwonJapaneseMaster4_03.png', '/static/images/books/darakwonJapaneseMaster4_04.png', '/static/images/books/darakwonJapaneseMaster4_05.png', '/static/images/books/darakwonJapaneseMaster4_06.png']
        },
        'darakwonJapaneseMaster5': {
            id: 'darakwonJapaneseMaster5',
            galleryId: 'darakwon-japanese-master-5',
            name: '다락원 일본어 마스터 5',
            publisher: '다락원',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'general-japanese',
            target: '일본어 중고급 학습자',
            coverImage: '/static/images/books/darakwonJapaneseMaster5_cover.png',
            description: '체계적인 일본어 학습을 위한 다락원 마스터 시리즈 5권입니다.',
            objectives: ['상급 표현 마스터', '전문 분야 일본어', '원어민 수준 회화', '고급 독해'],
            features: ['상급 문법 완성', '전문 어휘', '뉴스/논설 독해', '고급 작문'],
            samples: ['/static/images/books/darakwonJapaneseMaster5_cover.png', '/static/images/books/darakwonJapaneseMaster5_01.png', '/static/images/books/darakwonJapaneseMaster5_02.png', '/static/images/books/darakwonJapaneseMaster5_03.png', '/static/images/books/darakwonJapaneseMaster5_04.png', '/static/images/books/darakwonJapaneseMaster5_05.png', '/static/images/books/darakwonJapaneseMaster5_06.png']
        },

        // New Dynamic Japanese 시리즈
        'newDynamicJapanese4Extra': {
            id: 'newDynamicJapanese4Extra',
            galleryId: 'new-dynamic-japanese-4-extra',
            name: 'New Dynamic Japanese 4 Extra',
            publisher: '동양북스',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-japanese',
            target: '일본어 중급 학습자',
            coverImage: '/static/images/books/newDynamicJapanese4Extra_cover.png',
            description: 'New Dynamic Japanese 시리즈의 심화 과정입니다.',
            objectives: ['중급 회화 완성', '자연스러운 표현', '상황별 대화', '청해 능력 향상'],
            features: ['실생활 회화', '다양한 상황 연습', '원어민 음성', '문화 학습'],
            samples: ['/static/images/books/newDynamicJapanese4Extra_cover.png', '/static/images/books/newDynamicJapanese4Extra_01.png', '/static/images/books/newDynamicJapanese4Extra_02.png', '/static/images/books/newDynamicJapanese4Extra_03.png', '/static/images/books/newDynamicJapanese4Extra_04.png', '/static/images/books/newDynamicJapanese4Extra_05.png']
        },

        // 다락원 일본어 리딩 시리즈
        'darakwonJapaneseReadingBasic': {
            id: 'darakwonJapaneseReadingBasic',
            galleryId: 'darakwon-japanese-reading-basic',
            name: '다락원 일본어 리딩 Basic',
            publisher: '다락원',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-japanese',
            target: '일본어 초급 학습자',
            coverImage: '/static/images/books/darakwonJapaneseReadingBasic_cover.png',
            description: '일본어 독해력 향상을 위한 기초 리딩 교재입니다.',
            objectives: ['기초 독해력 향상', '어휘력 확대', '문장 구조 이해', '읽기 속도 향상'],
            features: ['짧은 지문 연습', '어휘 설명', '문법 포인트', '독해 문제'],
            samples: ['/static/images/books/darakwonJapaneseReadingBasic_cover.png', '/static/images/books/darakwonJapaneseReadingBasic_01.png']
        },
        'darakwonJapaneseReadingIntermediate': {
            id: 'darakwonJapaneseReadingIntermediate',
            galleryId: 'darakwon-japanese-reading-intermediate',
            name: '다락원 일본어 리딩 Intermediate',
            publisher: '다락원',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-japanese',
            target: '일본어 중급 학습자',
            coverImage: '/static/images/books/darakwonJapaneseReadingIntermediate_cover.png',
            description: '일본어 독해력 향상을 위한 중급 리딩 교재입니다.',
            objectives: ['중급 독해력 완성', '다양한 장르 독해', '속독 훈련', '요약 능력'],
            features: ['다양한 장르', '중급 어휘', '독해 전략', '요약 연습'],
            samples: ['/static/images/books/darakwonJapaneseReadingIntermediate_cover.png', '/static/images/books/darakwonJapaneseReadingIntermediate_01.png', '/static/images/books/darakwonJapaneseReadingIntermediate_02.png', '/static/images/books/darakwonJapaneseReadingIntermediate_03.png', '/static/images/books/darakwonJapaneseReadingIntermediate_04.png', '/static/images/books/darakwonJapaneseReadingIntermediate_05.png', '/static/images/books/darakwonJapaneseReadingIntermediate_06.png']
        },
        'themeStudyJapaneseReading': {
            id: 'themeStudyJapaneseReading',
            galleryId: 'theme-study-japanese-reading',
            name: '테마로 배우는 일본어 독해',
            publisher: '다락원',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'general-japanese',
            target: '일본어 중고급 학습자',
            coverImage: '/static/images/books/themeStudyJapaneseReading_cover.png',
            description: '다양한 테마로 배우는 일본어 독해 교재입니다.',
            objectives: ['테마별 독해', '고급 어휘 학습', '문화 이해', '비판적 읽기'],
            features: ['테마별 구성', '고급 어휘', '문화 해설', '토론 주제'],
            samples: ['/static/images/books/themeStudyJapaneseReading_cover.png', '/static/images/books/themeStudyJapaneseReading_01.png']
        },

        // 프리토킹 일본어 시리즈
        'funFreetalkJp40': {
            id: 'funFreetalkJp40',
            galleryId: 'fun-freetalk-jp-40',
            name: '재미있는 프리토킹 일본어 40',
            publisher: '시사일본어사',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-japanese',
            target: '일본어 초중급 학습자',
            coverImage: '/static/images/books/funFreetalkJp40_cover.png',
            description: '40가지 주제로 배우는 프리토킹 일본어입니다.',
            objectives: ['자유 회화 능력', '다양한 주제 토론', '표현력 향상', '자신감 향상'],
            features: ['40개 주제', '핵심 표현', '대화 예문', '토킹 포인트'],
            samples: ['/static/images/books/funFreetalkJp40_cover.png']
        },
        'sudaFreetalkJp360': {
            id: 'sudaFreetalkJp360',
            galleryId: 'suda-freetalk-jp-360',
            name: '수다 일본어 프리토킹 360',
            publisher: '시사일본어사',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'general-japanese',
            target: '일본어 중급 이상 학습자',
            coverImage: '/static/images/books/sudaFreetalkJp360_cover.png',
            description: '360가지 주제로 깊이있는 프리토킹을 연습하는 교재입니다.',
            objectives: ['심화 프리토킹', '다양한 주제 마스터', '논리적 표현', '토론 능력'],
            features: ['360개 주제', '심화 표현', '토론 가이드', '실전 연습'],
            samples: ['/static/images/books/sudaFreetalkJp360_cover.png', '/static/images/books/sudaFreetalkJp360_01.png', '/static/images/books/sudaFreetalkJp360_02.png', '/static/images/books/sudaFreetalkJp360_03.png']
        },

        // 나미야 잡화점의 기적 (리딩/문화)
        'namiyaMiracle': {
            id: 'namiyaMiracle',
            galleryId: 'namiya-miracle',
            name: '나미야 잡화점의 기적',
            publisher: '현대문학',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'general-japanese',
            target: '일본어 고급 학습자',
            coverImage: '/static/images/books/namiyaMiracle_cover.png',
            description: '히가시노 게이고의 소설로 배우는 일본어 독해입니다.',
            objectives: ['소설 원서 독해', '문학적 표현 학습', '고급 어휘', '일본 문화 이해'],
            features: ['실제 소설 텍스트', '어휘 해설', '문화 배경', '독후 토론'],
            samples: ['/static/images/books/namiyaMiracle_cover.png', '/static/images/books/namiyaMiracle_01.png']
        },

        // 일본어 시험 대비 - SJPT
        'sjptComplete': {
            id: 'sjptComplete',
            galleryId: 'sjpt-complete',
            name: 'SJPT 완벽대비',
            publisher: '시사일본어사',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'test-japanese',
            target: 'SJPT 수험생',
            coverImage: '/static/images/books/sjptComplete_cover.png',
            description: 'SJPT 시험 완벽 대비를 위한 종합 교재입니다.',
            objectives: ['SJPT 고득점', '말하기 능력 향상', '실전 감각', '시험 전략'],
            features: ['유형별 대비', '실전 모의고사', '답변 전략', '채점 기준 분석'],
            samples: ['/static/images/books/sjptComplete_cover.png', '/static/images/books/sjptComplete_01.png']
        },
        'sjptIntermediate': {
            id: 'sjptIntermediate',
            galleryId: 'sjpt-intermediate',
            name: 'SJPT 중급',
            publisher: '시사일본어사',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'test-japanese',
            target: 'SJPT 중급 수험생',
            coverImage: '/static/images/books/sjptIntermediate_cover.png',
            description: 'SJPT 중급 레벨 집중 대비 교재입니다.',
            objectives: ['중급 레벨 달성', '유창성 향상', '복잡한 표현', '즉각적 응답'],
            features: ['중급 유형 집중', '표현 확장', '실전 연습', '피드백 가이드'],
            samples: ['/static/images/books/sjptIntermediate_cover.png', '/static/images/books/sjptIntermediate_01.png']
        },
        'sjptMockTest': {
            id: 'sjptMockTest',
            galleryId: 'sjpt-mock-test',
            name: 'SJPT 실전 모의고사',
            publisher: '시사일본어사',
            levels: 'Level 3-6',
            levelRange: [3, 6],
            category: 'test-japanese',
            target: 'SJPT 수험생',
            coverImage: '/static/images/books/sjptMockTest_cover.png',
            description: 'SJPT 실전 모의고사 문제집입니다.',
            objectives: ['실전 경험', '시간 관리', '약점 파악', '점수 향상'],
            features: ['다수의 모의고사', '해설 수록', '채점 기준', '오답 분석'],
            samples: ['/static/images/books/sjptMockTest_cover.png', '/static/images/books/sjptMockTest_01.png']
        },
        'sjptPastExams': {
            id: 'sjptPastExams',
            galleryId: 'sjpt-past-exams',
            name: 'SJPT 기출문제집',
            publisher: '시사일본어사',
            levels: 'Level 3-6',
            levelRange: [3, 6],
            category: 'test-japanese',
            target: 'SJPT 수험생',
            coverImage: '/static/images/books/sjptPastExams_cover.png',
            description: 'SJPT 기출문제와 해설을 수록한 교재입니다.',
            objectives: ['기출 유형 분석', '출제 경향 파악', '실전 대비', '고득점 전략'],
            features: ['최신 기출문제', '상세 해설', '유형 분석', '팁 제공'],
            samples: ['/static/images/books/sjptPastExams_cover.png', '/static/images/books/sjptPastExams_01.png', '/static/images/books/sjptPastExams_02.png', '/static/images/books/sjptPastExams_03.png']
        },

        // JPT 시험 대비
        'jpt800Complete': {
            id: 'jpt800Complete',
            galleryId: 'jpt-800-complete',
            name: 'JPT 800 완전정복',
            publisher: '다락원',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'test-japanese',
            target: 'JPT 고득점 목표자',
            coverImage: '/static/images/books/jpt800Complete_cover.png',
            description: 'JPT 800점 이상을 목표로 하는 종합 대비서입니다.',
            objectives: ['JPT 800점 달성', '청해/독해 마스터', '실전 감각', '시간 관리'],
            features: ['파트별 전략', '고난도 문제', '실전 모의고사', '해설 수록'],
            samples: ['/static/images/books/jpt800Complete_cover.png', '/static/images/books/jpt800Complete_01.png', '/static/images/books/jpt800Complete_02.png', '/static/images/books/jpt800Complete_03.png', '/static/images/books/jpt800Complete_04.png']
        },

        // JLPT 시험 대비
        'jlptN2Complete': {
            id: 'jlptN2Complete',
            galleryId: 'jlpt-n2-complete',
            name: 'JLPT N2 종합대비',
            publisher: '다락원',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'test-japanese',
            target: 'JLPT N2 수험생',
            coverImage: '/static/images/books/jlptN2Complete_cover.png',
            description: 'JLPT N2 합격을 위한 종합 대비서입니다.',
            objectives: ['JLPT N2 합격', '언어지식 마스터', '독해/청해 완성', '실전 대비'],
            features: ['영역별 대비', 'N2 필수 문법', 'N2 필수 어휘', '모의고사'],
            samples: ['/static/images/books/jlptN2Complete_cover.png', '/static/images/books/jlptN2Complete_01.png', '/static/images/books/jlptN2Complete_02.png', '/static/images/books/jlptN2Complete_03.png', '/static/images/books/jlptN2Complete_04.png', '/static/images/books/jlptN2Complete_05.png']
        },

        // ============================================
        // 중국어 교재 (Chinese)
        // ============================================

        // Chinese Master 시리즈 (구판)
        'chineseMasterOld1': {
            id: 'chineseMasterOld1',
            galleryId: 'chinese-master-old-1',
            name: 'Chinese Master 1 (구판)',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-chinese',
            target: '중국어 입문자',
            coverImage: '/static/images/books/chineseMasterOld1_cover.png',
            description: 'Chinese Master 시리즈 구판 1권입니다.',
            objectives: ['성조/발음 기초', '기초 문법', '일상 인사', '기본 회화'],
            features: ['발음 집중 훈련', '기초 문법 설명', '실용 회화', '연습 문제'],
            samples: ['/static/images/books/chineseMasterOld1_cover.png', '/static/images/books/chineseMasterOld1_01.png', '/static/images/books/chineseMasterOld1_02.png', '/static/images/books/chineseMasterOld1_03.png', '/static/images/books/chineseMasterOld1_04.png']
        },

        // Chinese Master 시리즈 (신판)
        'chineseMaster1': {
            id: 'chineseMaster1',
            galleryId: 'chinese-master-1',
            name: 'Chinese Master 1',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-chinese',
            target: '중국어 입문자',
            coverImage: '/static/images/books/chineseMaster1_cover.png',
            description: '체계적인 중국어 학습을 위한 Chinese Master 시리즈 1권입니다.',
            objectives: ['발음/성조 마스터', '병음 학습', '기초 문법', '기본 회화'],
            features: ['체계적인 발음 훈련', '기초 문법 설명', '실용 회화 예문', '연습 문제'],
            samples: ['/static/images/books/chineseMaster1_cover.png', '/static/images/books/chineseMaster1_01.png', '/static/images/books/chineseMaster1_02.png', '/static/images/books/chineseMaster1_03.png', '/static/images/books/chineseMaster1_04.png', '/static/images/books/chineseMaster1_05.png']
        },
        'chineseMaster2': {
            id: 'chineseMaster2',
            galleryId: 'chinese-master-2',
            name: 'Chinese Master 2',
            publisher: '다락원',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-chinese',
            target: '중국어 초급 학습자',
            coverImage: '/static/images/books/chineseMaster2_cover.png',
            description: '체계적인 중국어 학습을 위한 Chinese Master 시리즈 2권입니다.',
            objectives: ['초급 문법 확장', '어휘력 향상', '일상 회화', '독해 기초'],
            features: ['심화 문법', '다양한 상황 회화', '독해 연습', '듣기 훈련'],
            samples: ['/static/images/books/chineseMaster2_cover.png', '/static/images/books/chineseMaster2_01.png', '/static/images/books/chineseMaster2_02.png', '/static/images/books/chineseMaster2_03.png', '/static/images/books/chineseMaster2_04.png', '/static/images/books/chineseMaster2_05.png', '/static/images/books/chineseMaster2_06.png', '/static/images/books/chineseMaster2_07.png']
        },
        'chineseMaster3': {
            id: 'chineseMaster3',
            galleryId: 'chinese-master-3',
            name: 'Chinese Master 3',
            publisher: '다락원',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-chinese',
            target: '중국어 초중급 학습자',
            coverImage: '/static/images/books/chineseMaster3_cover.png',
            description: '체계적인 중국어 학습을 위한 Chinese Master 시리즈 3권입니다.',
            objectives: ['중급 문법', '복잡한 문장', '자연스러운 표현', '뉴스 이해'],
            features: ['중급 문법 완성', '실용 표현', '독해력 강화', '작문 연습'],
            samples: ['/static/images/books/chineseMaster3_cover.png', '/static/images/books/chineseMaster3_01.png', '/static/images/books/chineseMaster3_02.png', '/static/images/books/chineseMaster3_03.png', '/static/images/books/chineseMaster3_04.png', '/static/images/books/chineseMaster3_05.png']
        },
        'chineseMaster4': {
            id: 'chineseMaster4',
            galleryId: 'chinese-master-4',
            name: 'Chinese Master 4',
            publisher: '다락원',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-chinese',
            target: '중국어 중급 학습자',
            coverImage: '/static/images/books/chineseMaster4_cover.png',
            description: '체계적인 중국어 학습을 위한 Chinese Master 시리즈 4권입니다.',
            objectives: ['고급 문법', '비즈니스 표현', '시사 토론', '문화 이해'],
            features: ['고급 표현', '비즈니스 상황', '토론/발표', '문화 콘텐츠'],
            samples: ['/static/images/books/chineseMaster4_cover.png', '/static/images/books/chineseMaster4_01.png', '/static/images/books/chineseMaster4_02.png', '/static/images/books/chineseMaster4_03.png', '/static/images/books/chineseMaster4_04.png', '/static/images/books/chineseMaster4_05.png']
        },
        'chineseMaster5': {
            id: 'chineseMaster5',
            galleryId: 'chinese-master-5',
            name: 'Chinese Master 5',
            publisher: '다락원',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'general-chinese',
            target: '중국어 중고급 학습자',
            coverImage: '/static/images/books/chineseMaster5_cover.png',
            description: '체계적인 중국어 학습을 위한 Chinese Master 시리즈 5권입니다.',
            objectives: ['상급 표현', '전문 중국어', '원어민 수준', '고급 독해'],
            features: ['상급 문법', '전문 어휘', '뉴스/논설', '고급 작문'],
            samples: ['/static/images/books/chineseMaster5_cover.png', '/static/images/books/chineseMaster5_01.png', '/static/images/books/chineseMaster5_02.png', '/static/images/books/chineseMaster5_03.png', '/static/images/books/chineseMaster5_04.png', '/static/images/books/chineseMaster5_05.png']
        },
        'chineseMaster6': {
            id: 'chineseMaster6',
            galleryId: 'chinese-master-6',
            name: 'Chinese Master 6',
            publisher: '다락원',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'general-chinese',
            target: '중국어 고급 학습자',
            coverImage: '/static/images/books/chineseMaster6_cover.png',
            description: '체계적인 중국어 학습을 위한 Chinese Master 시리즈 최고급 6권입니다.',
            objectives: ['최상급 표현', '학술/전문 중국어', '네이티브 수준', '비판적 독해'],
            features: ['최상급 문법', '학술 어휘', '고급 토론', '논술 작문'],
            samples: ['/static/images/books/chineseMaster6_cover.png', '/static/images/books/chineseMaster6_01.png', '/static/images/books/chineseMaster6_02.png', '/static/images/books/chineseMaster6_03.png', '/static/images/books/chineseMaster6_04.png', '/static/images/books/chineseMaster6_05.png']
        },

        // Delicious Chinese 시리즈
        'deliciousChinese1': {
            id: 'deliciousChinese1',
            galleryId: 'delicious-chinese-1',
            name: '맛있는 중국어 1',
            publisher: 'JRC북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-chinese',
            target: '중국어 입문자',
            coverImage: '/static/images/books/deliciousChinese1_cover.png',
            description: '맛있는 중국어 시리즈 1권 - 초급 입문 과정입니다.',
            objectives: ['발음/성조 기초', '병음 학습', '기초 문법', '생활 회화'],
            features: ['쉬운 설명', '실용 표현', '문화 소개', '연습 문제'],
            samples: ['/static/images/books/deliciousChinese1_cover.png', '/static/images/books/deliciousChinese1_01.png', '/static/images/books/deliciousChinese1_02.png', '/static/images/books/deliciousChinese1_03.png', '/static/images/books/deliciousChinese1_04.png']
        },
        'deliciousChinese2': {
            id: 'deliciousChinese2',
            galleryId: 'delicious-chinese-2',
            name: '맛있는 중국어 2',
            publisher: 'JRC북스',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-chinese',
            target: '중국어 초급 학습자',
            coverImage: '/static/images/books/deliciousChinese2_cover.png',
            description: '맛있는 중국어 시리즈 2권 - 초급 과정입니다.',
            objectives: ['초급 문법 확장', '어휘 확대', '일상 대화', '간단한 독해'],
            features: ['문법 심화', '다양한 상황', '독해 연습', '회화 훈련'],
            samples: ['/static/images/books/deliciousChinese2_cover.png', '/static/images/books/deliciousChinese2_01.png', '/static/images/books/deliciousChinese2_02.png', '/static/images/books/deliciousChinese2_03.png', '/static/images/books/deliciousChinese2_04.png', '/static/images/books/deliciousChinese2_05.png']
        },
        'deliciousChinese3': {
            id: 'deliciousChinese3',
            galleryId: 'delicious-chinese-3',
            name: '맛있는 중국어 3',
            publisher: 'JRC북스',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-chinese',
            target: '중국어 초중급 학습자',
            coverImage: '/static/images/books/deliciousChinese3_cover.png',
            description: '맛있는 중국어 시리즈 3권 - 초중급 과정입니다.',
            objectives: ['중급 문법', '표현력 향상', '자연스러운 회화', '독해력 강화'],
            features: ['중급 문법 완성', '실용 표현', '독해 심화', '작문 연습'],
            samples: ['/static/images/books/deliciousChinese3_cover.png', '/static/images/books/deliciousChinese3_01.png', '/static/images/books/deliciousChinese3_02.png', '/static/images/books/deliciousChinese3_03.png', '/static/images/books/deliciousChinese3_04.png', '/static/images/books/deliciousChinese3_05.png']
        },
        'deliciousChinese4': {
            id: 'deliciousChinese4',
            galleryId: 'delicious-chinese-4',
            name: '맛있는 중국어 4',
            publisher: 'JRC북스',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-chinese',
            target: '중국어 중급 학습자',
            coverImage: '/static/images/books/deliciousChinese4_cover.png',
            description: '맛있는 중국어 시리즈 4권 - 중급 과정입니다.',
            objectives: ['고급 문법', '비즈니스 기초', '시사 이해', '토론 능력'],
            features: ['고급 표현', '비즈니스 상황', '뉴스 독해', '토론 훈련'],
            samples: ['/static/images/books/deliciousChinese4_cover.png', '/static/images/books/deliciousChinese4_01.png', '/static/images/books/deliciousChinese4_02.png', '/static/images/books/deliciousChinese4_03.png', '/static/images/books/deliciousChinese4_04.png', '/static/images/books/deliciousChinese4_05.png']
        },
        'deliciousChinese5': {
            id: 'deliciousChinese5',
            galleryId: 'delicious-chinese-5',
            name: '맛있는 중국어 5',
            publisher: 'JRC북스',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'general-chinese',
            target: '중국어 중고급 학습자',
            coverImage: '/static/images/books/deliciousChinese5_cover.png',
            description: '맛있는 중국어 시리즈 5권 - 중고급 과정입니다.',
            objectives: ['상급 표현', '전문 주제', '유창한 회화', '심층 독해'],
            features: ['상급 문법', '전문 어휘', '고급 독해', '발표 훈련'],
            samples: ['/static/images/books/deliciousChinese5_cover.png', '/static/images/books/deliciousChinese5_01.png', '/static/images/books/deliciousChinese5_02.png', '/static/images/books/deliciousChinese5_03.png', '/static/images/books/deliciousChinese5_04.png', '/static/images/books/deliciousChinese5_05.png']
        },
        'deliciousChinese6': {
            id: 'deliciousChinese6',
            galleryId: 'delicious-chinese-6',
            name: '맛있는 중국어 6',
            publisher: 'JRC북스',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'general-chinese',
            target: '중국어 고급 학습자',
            coverImage: '/static/images/books/deliciousChinese6_cover.png',
            description: '맛있는 중국어 시리즈 최고급 6권입니다.',
            objectives: ['최상급 표현', '학술/전문', '네이티브 수준', '비평적 사고'],
            features: ['최상급 문법', '학술 어휘', '논술 작문', '고급 토론'],
            samples: ['/static/images/books/deliciousChinese6_cover.png', '/static/images/books/deliciousChinese6_01.png', '/static/images/books/deliciousChinese6_02.png', '/static/images/books/deliciousChinese6_03.png', '/static/images/books/deliciousChinese6_04.png', '/static/images/books/deliciousChinese6_05.png']
        },

        // 중국어 회화 교재
        'freeTalkChinese': {
            id: 'freeTalkChinese',
            galleryId: 'free-talk-chinese',
            name: '프리토킹 중국어',
            publisher: '시사중국어사',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'general-chinese',
            target: '중국어 중급 이상 학습자',
            coverImage: '/static/images/books/freeTalkChinese_cover.png',
            description: '자유로운 중국어 회화를 위한 프리토킹 교재입니다.',
            objectives: ['자유 회화', '다양한 주제 토론', '표현력 향상', '자신감 구축'],
            features: ['다양한 토픽', '핵심 표현', '대화 예문', '토킹 포인트'],
            samples: ['/static/images/books/freeTalkChinese_cover.png', '/static/images/books/freeTalkChinese_01.png', '/static/images/books/freeTalkChinese_02.png', '/static/images/books/freeTalkChinese_03.png', '/static/images/books/freeTalkChinese_04.png']
        },
        'finishChineseBasic': {
            id: 'finishChineseBasic',
            galleryId: 'finish-chinese-basic',
            name: '중국어 기초 완성',
            publisher: '시사중국어사',
            levels: 'Level 1-3',
            levelRange: [1, 3],
            category: 'general-chinese',
            target: '중국어 초급 학습자',
            coverImage: '/static/images/books/finishChineseBasic_cover.png',
            description: '중국어 기초를 완성하는 종합 교재입니다.',
            objectives: ['기초 완성', '필수 문법', '생활 회화', '독해 기초'],
            features: ['체계적 구성', '필수 문법', '실용 회화', '연습 문제'],
            samples: ['/static/images/books/finishChineseBasic_cover.png', '/static/images/books/finishChineseBasic_01.png', '/static/images/books/finishChineseBasic_02.png', '/static/images/books/finishChineseBasic_03.png', '/static/images/books/finishChineseBasic_04.png', '/static/images/books/finishChineseBasic_05.png']
        },
        'finishChineseConversation': {
            id: 'finishChineseConversation',
            galleryId: 'finish-chinese-conversation',
            name: '중국어 회화 완성',
            publisher: '시사중국어사',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'general-chinese',
            target: '중국어 초중급 학습자',
            coverImage: '/static/images/books/finishChineseConversation_cover.png',
            description: '중국어 회화 능력을 완성하는 교재입니다.',
            objectives: ['회화 완성', '상황별 대화', '표현력 향상', '유창성 확보'],
            features: ['상황별 회화', '핵심 표현', '롤플레이', '실전 연습'],
            samples: ['/static/images/books/finishChineseConversation_cover.png', '/static/images/books/finishChineseConversation_01.png', '/static/images/books/finishChineseConversation_02.png', '/static/images/books/finishChineseConversation_03.png', '/static/images/books/finishChineseConversation_04.png', '/static/images/books/finishChineseConversation_05.png', '/static/images/books/finishChineseConversation_06.png', '/static/images/books/finishChineseConversation_07.png']
        },
        'newCultureChinese': {
            id: 'newCultureChinese',
            galleryId: 'new-culture-chinese',
            name: '신문화 중국어',
            publisher: '다락원',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'general-chinese',
            target: '중국어 중급 학습자',
            coverImage: '/static/images/books/newCultureChinese_cover.png',
            description: '중국 문화와 함께 배우는 중국어 교재입니다.',
            objectives: ['문화 이해', '중급 회화', '독해력 향상', '표현력 확대'],
            features: ['문화 콘텐츠', '중급 표현', '독해 연습', '토론 주제'],
            samples: ['/static/images/books/newCultureChinese_cover.png', '/static/images/books/newCultureChinese_01.png', '/static/images/books/newCultureChinese_02.png', '/static/images/books/newCultureChinese_03.png', '/static/images/books/newCultureChinese_04.png', '/static/images/books/newCultureChinese_05.png', '/static/images/books/newCultureChinese_06.png']
        },

        // 중국어 뉴스/비즈니스
        'fearlessChineseNews': {
            id: 'fearlessChineseNews',
            galleryId: 'fearless-chinese-news',
            name: '무작정 따라하는 중국어 뉴스',
            publisher: '길벗이지톡',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'general-chinese',
            target: '중국어 중고급 학습자',
            coverImage: '/static/images/books/fearlessChineseNews_cover.png',
            description: '중국어 뉴스를 통해 고급 독해를 학습하는 교재입니다.',
            objectives: ['뉴스 독해', '시사 어휘', '고급 표현', '청해 훈련'],
            features: ['실제 뉴스', '어휘 해설', '문법 설명', '청취 훈련'],
            samples: ['/static/images/books/fearlessChineseNews_cover.png', '/static/images/books/fearlessChineseNews_01.png', '/static/images/books/fearlessChineseNews_02.png', '/static/images/books/fearlessChineseNews_03.png', '/static/images/books/fearlessChineseNews_04.png', '/static/images/books/fearlessChineseNews_05.png']
        },
        'fearlessBusinessTripChinese': {
            id: 'fearlessBusinessTripChinese',
            galleryId: 'fearless-business-trip-chinese',
            name: '무작정 따라하는 비즈니스 출장 중국어',
            publisher: '길벗이지톡',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'business-chinese',
            target: '비즈니스 출장자',
            coverImage: '/static/images/books/fearlessBusinessTripChinese_cover.png',
            description: '비즈니스 출장에 필요한 중국어를 학습하는 교재입니다.',
            objectives: ['출장 회화', '비즈니스 매너', '상황별 표현', '실무 능력'],
            features: ['출장 상황별', '비즈니스 표현', '문화 팁', '실전 연습'],
            samples: ['/static/images/books/fearlessBusinessTripChinese_cover.png', '/static/images/books/fearlessBusinessTripChinese_01.png', '/static/images/books/fearlessBusinessTripChinese_02.png', '/static/images/books/fearlessBusinessTripChinese_03.png', '/static/images/books/fearlessBusinessTripChinese_04.png', '/static/images/books/fearlessBusinessTripChinese_05.png']
        },
        'okBusinessChinese': {
            id: 'okBusinessChinese',
            galleryId: 'ok-business-chinese',
            name: 'OK 비즈니스 중국어',
            publisher: '시사중국어사',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'business-chinese',
            target: '비즈니스 실무자',
            coverImage: '/static/images/books/okBusinessChinese_cover.png',
            description: '비즈니스 실무 중국어 교재입니다.',
            objectives: ['비즈니스 회화', '상담/협상', '프레젠테이션', '이메일 작성'],
            features: ['비즈니스 상황', '협상 표현', '발표 스킬', '비즈니스 작문'],
            samples: ['/static/images/books/okBusinessChinese_cover.png', '/static/images/books/okBusinessChinese_01.png', '/static/images/books/okBusinessChinese_02.png', '/static/images/books/okBusinessChinese_03.png', '/static/images/books/okBusinessChinese_04.png', '/static/images/books/okBusinessChinese_05.png']
        },
        'businessChinesePractice': {
            id: 'businessChinesePractice',
            galleryId: 'business-chinese-practice',
            name: '비즈니스 중국어 실전',
            publisher: '다락원',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'business-chinese',
            target: '비즈니스 실무자',
            coverImage: '/static/images/books/businessChinesePractice_cover.png',
            description: '비즈니스 현장 실전 중국어 교재입니다.',
            objectives: ['실전 비즈니스', '협상 스킬', '프레젠테이션', '비즈니스 매너'],
            features: ['실전 시나리오', '협상 전략', '발표 기법', '문화 이해'],
            samples: ['/static/images/books/businessChinesePractice_cover.png', '/static/images/books/businessChinesePractice_01.png', '/static/images/books/businessChinesePractice_02.png', '/static/images/books/businessChinesePractice_03.png', '/static/images/books/businessChinesePractice_04.png']
        },
        'hackersTravelChinese': {
            id: 'hackersTravelChinese',
            galleryId: 'hackers-travel-chinese',
            name: '해커스 여행 중국어',
            publisher: '해커스어학연구소',
            levels: 'Level 2-4',
            levelRange: [2, 4],
            category: 'general-chinese',
            target: '중국 여행자',
            coverImage: '/static/images/books/hackersTravelChinese_cover.png',
            description: '중국 여행에 필요한 실용 중국어 교재입니다.',
            objectives: ['여행 회화', '상황별 표현', '긴급 상황 대처', '문화 이해'],
            features: ['여행 상황별', '필수 표현', '발음 가이드', '문화 팁'],
            samples: ['/static/images/books/hackersTravelChinese_cover.png', '/static/images/books/hackersTravelChinese_01.png', '/static/images/books/hackersTravelChinese_02.png', '/static/images/books/hackersTravelChinese_03.png', '/static/images/books/hackersTravelChinese_04.png', '/static/images/books/hackersTravelChinese_05.png']
        },

        // 중국어 시험 대비 - TSC
        'tscStart': {
            id: 'tscStart',
            galleryId: 'tsc-start',
            name: 'TSC 스타트',
            publisher: '시사중국어사',
            levels: 'Level 2-4',
            levelRange: [2, 4],
            category: 'test-chinese',
            target: 'TSC 입문 수험생',
            coverImage: '/static/images/books/tscStart_cover.png',
            description: 'TSC 시험 입문을 위한 교재입니다.',
            objectives: ['TSC 기초', '시험 유형 이해', '기초 말하기', '시험 감각'],
            features: ['유형 소개', '기초 연습', '실전 대비', '팁 제공'],
            samples: ['/static/images/books/tscStart_cover.png', '/static/images/books/tscStart_01.png', '/static/images/books/tscStart_02.png', '/static/images/books/tscStart_03.png', '/static/images/books/tscStart_04.png']
        },
        'tscBasic': {
            id: 'tscBasic',
            galleryId: 'tsc-basic',
            name: 'TSC 베이직',
            publisher: '시사중국어사',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'test-chinese',
            target: 'TSC 초급 수험생',
            coverImage: '/static/images/books/tscBasic_cover.png',
            description: 'TSC 시험 초급 대비 교재입니다.',
            objectives: ['TSC 초급 레벨', '기본 유형 마스터', '표현력 향상', '시험 전략'],
            features: ['유형별 연습', '표현 학습', '모의고사', '해설 수록'],
            samples: ['/static/images/books/tscBasic_cover.png', '/static/images/books/tscBasic_01.png', '/static/images/books/tscBasic_02.png', '/static/images/books/tscBasic_03.png', '/static/images/books/tscBasic_04.png']
        },
        'tscLevel4': {
            id: 'tscLevel4',
            galleryId: 'tsc-level-4',
            name: 'TSC Level 4',
            publisher: '시사중국어사',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'test-chinese',
            target: 'TSC 4급 목표 수험생',
            coverImage: '/static/images/books/tscLevel4_cover.png',
            description: 'TSC 4급 달성을 위한 집중 대비서입니다.',
            objectives: ['TSC 4급 달성', '중급 표현', '유창한 응답', '시간 관리'],
            features: ['4급 유형 집중', '핵심 표현', '실전 모의고사', '채점 기준'],
            samples: ['/static/images/books/tscLevel4_cover.png', '/static/images/books/tscLevel4_01.png', '/static/images/books/tscLevel4_02.png', '/static/images/books/tscLevel4_03.png']
        },
        'tscBooster': {
            id: 'tscBooster',
            galleryId: 'tsc-booster',
            name: 'TSC 부스터',
            publisher: '시사중국어사',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'test-chinese',
            target: 'TSC 점수 향상 목표자',
            coverImage: '/static/images/books/tscBooster_cover.png',
            description: 'TSC 점수 향상을 위한 부스터 교재입니다.',
            objectives: ['점수 향상', '약점 보완', '고급 표현', '실전 감각'],
            features: ['취약점 분석', '집중 훈련', '고급 표현', '실전 연습'],
            samples: ['/static/images/books/tscBooster_cover.png', '/static/images/books/tscBooster_01.png', '/static/images/books/tscBooster_02.png', '/static/images/books/tscBooster_03.png', '/static/images/books/tscBooster_04.png']
        },
        'tscHigher': {
            id: 'tscHigher',
            galleryId: 'tsc-higher',
            name: 'TSC 하이어',
            publisher: '시사중국어사',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'test-chinese',
            target: 'TSC 고득점 목표자',
            coverImage: '/static/images/books/tscHigher_cover.png',
            description: 'TSC 고득점을 위한 상급 교재입니다.',
            objectives: ['고득점 달성', '고급 표현', '논리적 응답', '시험 전략'],
            features: ['고급 유형', '심화 표현', '논리 훈련', '실전 대비'],
            samples: ['/static/images/books/tscHigher_cover.png', '/static/images/books/tscHigher_01.png', '/static/images/books/tscHigher_02.png', '/static/images/books/tscHigher_03.png']
        },
        'tscMaster': {
            id: 'tscMaster',
            galleryId: 'tsc-master',
            name: 'TSC 마스터',
            publisher: '시사중국어사',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'test-chinese',
            target: 'TSC 최고급 목표자',
            coverImage: '/static/images/books/tscMaster_cover.png',
            description: 'TSC 최고 레벨을 위한 마스터 교재입니다.',
            objectives: ['최상위 레벨', '원어민 수준', '완벽한 응답', '고급 전략'],
            features: ['최상급 유형', '고급 표현', '완성도 훈련', '마스터 전략'],
            samples: ['/static/images/books/tscMaster_cover.png', '/static/images/books/tscMaster_01.png', '/static/images/books/tscMaster_02.png', '/static/images/books/tscMaster_03.png', '/static/images/books/tscMaster_04.png']
        },
        'tscMasterLevel': {
            id: 'tscMasterLevel',
            galleryId: 'tsc-master-level',
            name: 'TSC 마스터 레벨',
            publisher: '시사중국어사',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'test-chinese',
            target: 'TSC 최고급 수험생',
            coverImage: '/static/images/books/tscMasterLevel_cover.png',
            description: 'TSC 최고 레벨 달성을 위한 종합 교재입니다.',
            objectives: ['최고 레벨 달성', '완벽한 표현', '논리적 사고', '최고급 전략'],
            features: ['최고급 유형', '완벽 표현', '논리 훈련', '최종 마무리'],
            samples: ['/static/images/books/tscMasterLevel_cover.png', '/static/images/books/tscMasterLevel_01.png', '/static/images/books/tscMasterLevel_02.png', '/static/images/books/tscMasterLevel_03.png']
        },

        // HSK 시험 대비
        'hsk2Mock': {
            id: 'hsk2Mock',
            galleryId: 'hsk-2-mock',
            name: 'HSK 2급 모의고사',
            publisher: '다락원',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'test-chinese',
            target: 'HSK 2급 수험생',
            coverImage: '/static/images/books/hsk2Mock_cover.png',
            description: 'HSK 2급 실전 모의고사입니다.',
            objectives: ['HSK 2급 합격', '실전 연습', '시간 관리', '유형 파악'],
            features: ['다수 모의고사', '해설 수록', '듣기 MP3', '채점 기준'],
            samples: ['/static/images/books/hsk2Mock_cover.png', '/static/images/books/hsk2Mock_01.png', '/static/images/books/hsk2Mock_02.png', '/static/images/books/hsk2Mock_03.png', '/static/images/books/hsk2Mock_04.png']
        },
        'hsk4Mock': {
            id: 'hsk4Mock',
            galleryId: 'hsk-4-mock',
            name: 'HSK 4급 모의고사',
            publisher: '다락원',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'test-chinese',
            target: 'HSK 4급 수험생',
            coverImage: '/static/images/books/hsk4Mock_cover.png',
            description: 'HSK 4급 실전 모의고사입니다.',
            objectives: ['HSK 4급 합격', '실전 대비', '시간 관리', '약점 보완'],
            features: ['다수 모의고사', '상세 해설', '듣기 MP3', '성적 분석'],
            samples: ['/static/images/books/hsk4Mock_cover.png', '/static/images/books/hsk4Mock_01.png', '/static/images/books/hsk4Mock_02.png', '/static/images/books/hsk4Mock_03.png']
        },
        'hsk5Mock': {
            id: 'hsk5Mock',
            galleryId: 'hsk-5-mock',
            name: 'HSK 5급 모의고사',
            publisher: '다락원',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'test-chinese',
            target: 'HSK 5급 수험생',
            coverImage: '/static/images/books/hsk5Mock_cover.png',
            description: 'HSK 5급 실전 모의고사입니다.',
            objectives: ['HSK 5급 합격', '고급 문제 대비', '작문 연습', '고득점 전략'],
            features: ['실전 모의고사', '작문 예시', '듣기 MP3', '채점 가이드'],
            samples: ['/static/images/books/hsk5Mock_cover.png', '/static/images/books/hsk5Mock_01.png', '/static/images/books/hsk5Mock_02.png', '/static/images/books/hsk5Mock_03.png']
        },
        'hsk6Mock': {
            id: 'hsk6Mock',
            galleryId: 'hsk-6-mock',
            name: 'HSK 6급 모의고사',
            publisher: '다락원',
            levels: 'Level 6-7',
            levelRange: [6, 7],
            category: 'test-chinese',
            target: 'HSK 6급 수험생',
            coverImage: '/static/images/books/hsk6Mock_cover.png',
            description: 'HSK 6급 실전 모의고사입니다.',
            objectives: ['HSK 6급 합격', '최고급 대비', '고급 작문', '완벽 대비'],
            features: ['실전 모의고사', '고급 작문 예시', '듣기 MP3', '상세 해설'],
            samples: ['/static/images/books/hsk6Mock_cover.png', '/static/images/books/hsk6Mock_01.png', '/static/images/books/hsk6Mock_02.png', '/static/images/books/hsk6Mock_03.png']
        },

        // BCT 시험 대비
        'bctSpeaking': {
            id: 'bctSpeaking',
            galleryId: 'bct-speaking',
            name: 'BCT Speaking',
            publisher: '다락원',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'test-chinese',
            target: 'BCT 수험생',
            coverImage: '/static/images/books/bctSpeaking_cover.png',
            description: 'BCT 비즈니스 중국어 말하기 시험 대비서입니다.',
            objectives: ['BCT 합격', '비즈니스 말하기', '실전 대비', '고득점 전략'],
            features: ['유형별 대비', '비즈니스 표현', '모의고사', '채점 기준'],
            samples: ['/static/images/books/bctSpeaking_cover.png', '/static/images/books/bctSpeaking_01.png', '/static/images/books/bctSpeaking_02.png', '/static/images/books/bctSpeaking_03.png', '/static/images/books/bctSpeaking_04.png']
        },

        // ============================================
        // 스페인어 교재 (Spanish)
        // ============================================
        'spanishBeginner': {
            id: 'spanishBeginner',
            galleryId: 'spanish-beginner',
            name: '스페인어 첫걸음',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-spanish',
            target: '스페인어 입문자',
            coverImage: '/static/images/books/spanishBeginner_cover.png',
            description: '스페인어 입문자를 위한 기초 교재입니다.',
            objectives: ['스페인어 발음', '기초 문법', '일상 인사', '기본 회화'],
            features: ['발음 훈련', '기초 문법', '실용 회화', '연습 문제'],
            samples: ['/static/images/books/spanishBeginner_cover.png', '/static/images/books/spanishBeginner_01.png', '/static/images/books/spanishBeginner_02.png', '/static/images/books/spanishBeginner_03.png', '/static/images/books/spanishBeginner_04.png']
        },
        'flexSpanish': {
            id: 'flexSpanish',
            galleryId: 'flex-spanish',
            name: 'FLEX 스페인어',
            publisher: '다락원',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'test-spanish',
            target: 'FLEX 스페인어 수험생',
            coverImage: '/static/images/books/flexSpanish_cover.png',
            description: 'FLEX 스페인어 시험 대비 교재입니다.',
            objectives: ['FLEX 합격', '듣기/읽기 마스터', '실전 대비', '고득점 전략'],
            features: ['유형별 대비', '실전 모의고사', '해설 수록', '전략 제공'],
            samples: ['/static/images/books/flexSpanish_cover.png', '/static/images/books/flexSpanish_01.png', '/static/images/books/flexSpanish_02.png', '/static/images/books/flexSpanish_03.png', '/static/images/books/flexSpanish_04.png']
        },
        'nuevoEspanol1': {
            id: 'nuevoEspanol1',
            galleryId: 'nuevo-espanol-1',
            name: 'Nuevo Espanol 1',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-spanish',
            target: '스페인어 입문자',
            coverImage: '/static/images/books/nuevoEspanol1_cover.png',
            description: 'Nuevo Espanol 시리즈 1권 - 입문 과정입니다.',
            objectives: ['기초 발음', '기초 문법', '일상 회화', '문화 이해'],
            features: ['체계적 학습', '실용 표현', '문화 소개', '연습 문제'],
            samples: ['/static/images/books/nuevoEspanol1_cover.png', '/static/images/books/nuevoEspanol1_01.png', '/static/images/books/nuevoEspanol1_02.png', '/static/images/books/nuevoEspanol1_03.png', '/static/images/books/nuevoEspanol1_04.png']
        },
        'nuevoEspanol2': {
            id: 'nuevoEspanol2',
            galleryId: 'nuevo-espanol-2',
            name: 'Nuevo Espanol 2',
            publisher: '다락원',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-spanish',
            target: '스페인어 초급 학습자',
            coverImage: '/static/images/books/nuevoEspanol2_cover.png',
            description: 'Nuevo Espanol 시리즈 2권 - 초급 과정입니다.',
            objectives: ['초급 문법 확장', '어휘 확대', '일상 대화', '독해 기초'],
            features: ['심화 문법', '다양한 상황', '독해 연습', '작문 기초'],
            samples: ['/static/images/books/nuevoEspanol2_cover.png', '/static/images/books/nuevoEspanol2_01.png', '/static/images/books/nuevoEspanol2_02.png', '/static/images/books/nuevoEspanol2_03.png']
        },
        'nuevoEspanol3': {
            id: 'nuevoEspanol3',
            galleryId: 'nuevo-espanol-3',
            name: 'Nuevo Espanol 3',
            publisher: '다락원',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-spanish',
            target: '스페인어 초중급 학습자',
            coverImage: '/static/images/books/nuevoEspanol3_cover.png',
            description: 'Nuevo Espanol 시리즈 3권 - 초중급 과정입니다.',
            objectives: ['중급 문법', '표현력 향상', '자연스러운 회화', '독해력 강화'],
            features: ['중급 문법', '실용 표현', '독해 심화', '작문 연습'],
            samples: ['/static/images/books/nuevoEspanol3_cover.png', '/static/images/books/nuevoEspanol3_01.png', '/static/images/books/nuevoEspanol3_02.png']
        },
        'nuevoEspanol4': {
            id: 'nuevoEspanol4',
            galleryId: 'nuevo-espanol-4',
            name: 'Nuevo Espanol 4',
            publisher: '다락원',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-spanish',
            target: '스페인어 중급 학습자',
            coverImage: '/static/images/books/nuevoEspanol4_cover.png',
            description: 'Nuevo Espanol 시리즈 4권 - 중급 과정입니다.',
            objectives: ['고급 문법', '비즈니스 기초', '시사 이해', '토론 능력'],
            features: ['고급 표현', '비즈니스 상황', '뉴스 독해', '토론 훈련'],
            samples: ['/static/images/books/nuevoEspanol4_cover.png', '/static/images/books/nuevoEspanol4_01.png', '/static/images/books/nuevoEspanol4_02.png', '/static/images/books/nuevoEspanol4_03.png']
        },
        'entornoLaboralA1B1': {
            id: 'entornoLaboralA1B1',
            galleryId: 'entorno-laboral-a1-b1',
            name: 'Entorno Laboral A1-B1',
            publisher: 'Edelsa',
            levels: 'Level 2-4',
            levelRange: [2, 4],
            category: 'business-spanish',
            target: '비즈니스 스페인어 학습자',
            coverImage: '/static/images/books/entornoLaboralA1B1_cover.png',
            description: '비즈니스 스페인어 A1-B1 레벨 교재입니다.',
            objectives: ['비즈니스 기초', '직장 회화', '이메일 작성', '비즈니스 매너'],
            features: ['비즈니스 상황', '실무 표현', '이메일 샘플', '문화 이해'],
            samples: ['/static/images/books/entornoLaboralA1B1_cover.png', '/static/images/books/entornoLaboralA1B1_01.png', '/static/images/books/entornoLaboralA1B1_02.png', '/static/images/books/entornoLaboralA1B1_03.png']
        },
        'entornoEmpresarialB2': {
            id: 'entornoEmpresarialB2',
            galleryId: 'entorno-empresarial-b2',
            name: 'Entorno Empresarial B2',
            publisher: 'Edelsa',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'business-spanish',
            target: '비즈니스 스페인어 중급자',
            coverImage: '/static/images/books/entornoEmpresarialB2_cover.png',
            description: '비즈니스 스페인어 B2 레벨 교재입니다.',
            objectives: ['고급 비즈니스', '협상 스킬', '프레젠테이션', '보고서 작성'],
            features: ['고급 비즈니스 상황', '협상 표현', '발표 기법', '작문 연습'],
            samples: ['/static/images/books/entornoEmpresarialB2_cover.png', '/static/images/books/entornoEmpresarialB2_01.png', '/static/images/books/entornoEmpresarialB2_02.png', '/static/images/books/entornoEmpresarialB2_03.png']
        },
        'deleA2': {
            id: 'deleA2',
            galleryId: 'dele-a2',
            name: 'DELE A2 대비',
            publisher: 'Edelsa',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'test-spanish',
            target: 'DELE A2 수험생',
            coverImage: '/static/images/books/deleA2_cover.png',
            description: 'DELE A2 시험 대비 교재입니다.',
            objectives: ['DELE A2 합격', '4개 영역 대비', '실전 연습', '시험 전략'],
            features: ['유형별 대비', '모의고사', '해설 수록', '팁 제공'],
            samples: ['/static/images/books/deleA2_cover.png', '/static/images/books/deleA2_01.png', '/static/images/books/deleA2_02.png', '/static/images/books/deleA2_03.png']
        },

        // ============================================
        // 프랑스어 교재 (French)
        // ============================================
        'festival1': {
            id: 'festival1',
            galleryId: 'festival-1',
            name: 'Festival 1',
            publisher: 'CLE International',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-french',
            target: '프랑스어 입문자',
            coverImage: '/static/images/books/festival1_cover.png',
            description: 'Festival 시리즈 1권 - 프랑스어 입문 과정입니다.',
            objectives: ['기초 발음', '기초 문법', '일상 회화', '문화 이해'],
            features: ['체계적 학습', '실용 표현', '문화 소개', '연습 문제'],
            samples: ['/static/images/books/festival1_cover.png', '/static/images/books/festival1_01.png', '/static/images/books/festival1_02.png', '/static/images/books/festival1_03.png', '/static/images/books/festival1_04.png']
        },
        'festival2': {
            id: 'festival2',
            galleryId: 'festival-2',
            name: 'Festival 2',
            publisher: 'CLE International',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-french',
            target: '프랑스어 초급 학습자',
            coverImage: '/static/images/books/festival2_cover.png',
            description: 'Festival 시리즈 2권 - 프랑스어 초급 과정입니다.',
            objectives: ['초급 문법 확장', '어휘 확대', '일상 대화', '독해 기초'],
            features: ['심화 문법', '다양한 상황', '독해 연습', '작문 기초'],
            samples: ['/static/images/books/festival2_cover.png', '/static/images/books/festival2_01.png', '/static/images/books/festival2_02.png', '/static/images/books/festival2_03.png', '/static/images/books/festival2_04.png']
        },
        'festival3': {
            id: 'festival3',
            galleryId: 'festival-3',
            name: 'Festival 3',
            publisher: 'CLE International',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-french',
            target: '프랑스어 초중급 학습자',
            coverImage: '/static/images/books/festival3_cover.png',
            description: 'Festival 시리즈 3권 - 프랑스어 초중급 과정입니다.',
            objectives: ['중급 문법', '표현력 향상', '자연스러운 회화', '독해력 강화'],
            features: ['중급 문법', '실용 표현', '독해 심화', '작문 연습'],
            samples: ['/static/images/books/festival3_cover.png', '/static/images/books/festival3_01.png', '/static/images/books/festival3_02.png', '/static/images/books/festival3_03.png', '/static/images/books/festival3_04.png']
        },

        // ============================================
        // 독일어 교재 (German)
        // ============================================
        'germanBeginner': {
            id: 'germanBeginner',
            galleryId: 'german-beginner',
            name: '독일어 첫걸음',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-german',
            target: '독일어 입문자',
            coverImage: '/static/images/books/germanBeginner_cover.png',
            description: '독일어 입문자를 위한 기초 교재입니다.',
            objectives: ['독일어 발음', '기초 문법', '일상 인사', '기본 회화'],
            features: ['발음 훈련', '기초 문법', '실용 회화', '연습 문제'],
            samples: ['/static/images/books/germanBeginner_cover.png', '/static/images/books/germanBeginner_01.png', '/static/images/books/germanBeginner_02.png', '/static/images/books/germanBeginner_03.png']
        },
        'germanIntermediate': {
            id: 'germanIntermediate',
            galleryId: 'german-intermediate',
            name: '독일어 중급',
            publisher: '다락원',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'general-german',
            target: '독일어 중급 학습자',
            coverImage: '/static/images/books/germanIntermediate_cover.png',
            description: '독일어 중급 학습자를 위한 교재입니다.',
            objectives: ['중급 문법', '표현력 향상', '독해력 강화', '작문 능력'],
            features: ['중급 문법', '다양한 주제', '독해 연습', '작문 훈련'],
            samples: ['/static/images/books/germanIntermediate_cover.png', '/static/images/books/germanIntermediate_01.png', '/static/images/books/germanIntermediate_02.png', '/static/images/books/germanIntermediate_03.png', '/static/images/books/germanIntermediate_04.png', '/static/images/books/germanIntermediate_05.png', '/static/images/books/germanIntermediate_06.png', '/static/images/books/germanIntermediate_07.png']
        },

        // ============================================
        // 베트남어 교재 (Vietnamese)
        // ============================================
        'easiestVietnamese': {
            id: 'easiestVietnamese',
            galleryId: 'easiest-vietnamese',
            name: '가장 쉬운 베트남어',
            publisher: '동양북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-vietnamese',
            target: '베트남어 입문자',
            coverImage: '/static/images/books/easiestVietnamese_cover.png',
            description: '베트남어 입문자를 위한 쉬운 교재입니다.',
            objectives: ['성조/발음 기초', '기초 문법', '일상 인사', '기본 회화'],
            features: ['쉬운 설명', '발음 훈련', '실용 회화', '연습 문제'],
            samples: ['/static/images/books/easiestVietnamese_cover.png', '/static/images/books/easiestVietnamese_01.png', '/static/images/books/easiestVietnamese_02.png', '/static/images/books/easiestVietnamese_03.png', '/static/images/books/easiestVietnamese_04.png', '/static/images/books/easiestVietnamese_05.png']
        },
        'patternVietnamese': {
            id: 'patternVietnamese',
            galleryId: 'pattern-vietnamese',
            name: '패턴 베트남어',
            publisher: '동양북스',
            levels: 'Level 2-4',
            levelRange: [2, 4],
            category: 'general-vietnamese',
            target: '베트남어 초급 학습자',
            coverImage: '/static/images/books/patternVietnamese_cover.png',
            description: '패턴으로 배우는 베트남어 교재입니다.',
            objectives: ['패턴 학습', '문장 구성', '회화 능력', '표현력 향상'],
            features: ['핵심 패턴', '예문 수록', '회화 연습', '응용 훈련'],
            samples: ['/static/images/books/patternVietnamese_cover.png', '/static/images/books/patternVietnamese_01.png', '/static/images/books/patternVietnamese_02.png', '/static/images/books/patternVietnamese_03.png', '/static/images/books/patternVietnamese_04.png', '/static/images/books/patternVietnamese_05.png', '/static/images/books/patternVietnamese_06.png']
        },
        'vietnameseIntermediate': {
            id: 'vietnameseIntermediate',
            galleryId: 'vietnamese-intermediate',
            name: '베트남어 중급',
            publisher: '동양북스',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'general-vietnamese',
            target: '베트남어 중급 학습자',
            coverImage: '/static/images/books/vietnameseIntermediate_cover.png',
            description: '베트남어 중급 학습자를 위한 교재입니다.',
            objectives: ['중급 문법', '표현력 향상', '독해력 강화', '비즈니스 기초'],
            features: ['중급 문법', '다양한 주제', '독해 연습', '비즈니스 표현'],
            samples: ['/static/images/books/vietnameseIntermediate_cover.png', '/static/images/books/vietnameseIntermediate_01.png', '/static/images/books/vietnameseIntermediate_02.png', '/static/images/books/vietnameseIntermediate_03.png', '/static/images/books/vietnameseIntermediate_04.png', '/static/images/books/vietnameseIntermediate_05.png']
        },
        'barunVietnamese2': {
            id: 'barunVietnamese2',
            galleryId: 'barun-vietnamese-2',
            name: '바른 베트남어 Step 2',
            publisher: '동양북스',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-vietnamese',
            target: '베트남어 초급 학습자',
            coverImage: '/static/images/books/barunVietnamese2_cover.png',
            description: '바른 베트남어 시리즈 2권입니다.',
            objectives: ['초급 문법 확장', '어휘 확대', '일상 대화', '독해 기초'],
            features: ['체계적 학습', '실용 표현', '문화 소개', '연습 문제'],
            samples: ['/static/images/books/barunVietnamese2_cover.png', '/static/images/books/barunVietnamese2_01.png', '/static/images/books/barunVietnamese2_02.png', '/static/images/books/barunVietnamese2_03.png', '/static/images/books/barunVietnamese2_04.png', '/static/images/books/barunVietnamese2_05.png']
        },

        // ============================================
        // 러시아어 교재 (Russian)
        // ============================================
        'russianBeginner': {
            id: 'russianBeginner',
            galleryId: 'russian-beginner',
            name: '러시아어 첫걸음',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-russian',
            target: '러시아어 입문자',
            coverImage: '/static/images/books/russianBeginner_cover.png',
            description: '러시아어 입문자를 위한 기초 교재입니다.',
            objectives: ['키릴 문자', '기초 발음', '기초 문법', '기본 회화'],
            features: ['문자 학습', '발음 훈련', '기초 문법', '실용 회화'],
            samples: ['/static/images/books/russianBeginner_cover.png', '/static/images/books/russianBeginner_01.png', '/static/images/books/russianBeginner_02.png', '/static/images/books/russianBeginner_03.png', '/static/images/books/russianBeginner_04.png']
        },
        'russianIntermediate': {
            id: 'russianIntermediate',
            galleryId: 'russian-intermediate',
            name: '러시아어 중급',
            publisher: '다락원',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'general-russian',
            target: '러시아어 중급 학습자',
            coverImage: '/static/images/books/russianIntermediate_cover.png',
            description: '러시아어 중급 학습자를 위한 교재입니다.',
            objectives: ['중급 문법', '격변화 마스터', '독해력 향상', '표현력 확대'],
            features: ['중급 문법', '격변화 연습', '독해 훈련', '작문 연습'],
            samples: ['/static/images/books/russianIntermediate_cover.png', '/static/images/books/russianIntermediate_01.png', '/static/images/books/russianIntermediate_02.png', '/static/images/books/russianIntermediate_03.png', '/static/images/books/russianIntermediate_04.png', '/static/images/books/russianIntermediate_05.png', '/static/images/books/russianIntermediate_06.png', '/static/images/books/russianIntermediate_07.png']
        },

        // ============================================
        // 아랍어 교재 (Arabic)
        // ============================================
        'barunArabic1': {
            id: 'barunArabic1',
            galleryId: 'barun-arabic-1',
            name: '바른 아랍어 Step 1',
            publisher: '동양북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-arabic',
            target: '아랍어 입문자',
            coverImage: '/static/images/books/barunArabic1_cover.png',
            description: '바른 아랍어 시리즈 1권 - 입문 과정입니다.',
            objectives: ['아랍 문자', '기초 발음', '기초 문법', '기본 회화'],
            features: ['문자 학습', '발음 훈련', '기초 문법', '실용 회화'],
            samples: ['/static/images/books/barunArabic1_cover.png', '/static/images/books/barunArabic1_01.png', '/static/images/books/barunArabic1_02.png', '/static/images/books/barunArabic1_03.png', '/static/images/books/barunArabic1_04.png']
        },
        'barunArabic2': {
            id: 'barunArabic2',
            galleryId: 'barun-arabic-2',
            name: '바른 아랍어 Step 2',
            publisher: '동양북스',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-arabic',
            target: '아랍어 초급 학습자',
            coverImage: '/static/images/books/barunArabic2_cover.png',
            description: '바른 아랍어 시리즈 2권 - 초급 과정입니다.',
            objectives: ['초급 문법 확장', '어휘 확대', '일상 대화', '독해 기초'],
            features: ['심화 문법', '다양한 상황', '독해 연습', '작문 기초'],
            samples: ['/static/images/books/barunArabic2_cover.png', '/static/images/books/barunArabic2_01.png', '/static/images/books/barunArabic2_02.png', '/static/images/books/barunArabic2_03.png']
        },

        // ============================================
        // 태국어 교재 (Thai)
        // ============================================
        'barunThai': {
            id: 'barunThai',
            galleryId: 'barun-thai',
            name: '바른 태국어',
            publisher: '동양북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-thai',
            target: '태국어 입문자',
            coverImage: '/static/images/books/barunThai_cover.png',
            description: '바른 태국어 입문 교재입니다.',
            objectives: ['태국 문자', '성조 학습', '기초 문법', '기본 회화'],
            features: ['문자 학습', '성조 훈련', '기초 문법', '실용 회화'],
            samples: ['/static/images/books/barunThai_cover.png', '/static/images/books/barunThai_01.png', '/static/images/books/barunThai_02.png', '/static/images/books/barunThai_03.png', '/static/images/books/barunThai_04.png']
        },
        'thaiStandardA0': {
            id: 'thaiStandardA0',
            galleryId: 'thai-standard-a0',
            name: 'Thai Standard A0',
            publisher: '동양북스',
            levels: 'Level 1',
            levelRange: [1, 1],
            category: 'general-thai',
            target: '태국어 입문자',
            coverImage: '/static/images/books/thaiStandardA0_cover.png',
            description: 'Thai Standard 시리즈 A0 레벨입니다.',
            objectives: ['태국 문자', '기초 발음', '인사 표현', '숫자/시간'],
            features: ['문자 학습', '발음 훈련', '기초 표현', '연습 문제'],
            samples: ['/static/images/books/thaiStandardA0_cover.png', '/static/images/books/thaiStandardA0_01.png', '/static/images/books/thaiStandardA0_02.png', '/static/images/books/thaiStandardA0_03.png']
        },
        'thaiStandardA1': {
            id: 'thaiStandardA1',
            galleryId: 'thai-standard-a1',
            name: 'Thai Standard A1',
            publisher: '동양북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-thai',
            target: '태국어 초급 학습자',
            coverImage: '/static/images/books/thaiStandardA1_cover.png',
            description: 'Thai Standard 시리즈 A1 레벨입니다.',
            objectives: ['기초 문법', '일상 회화', '어휘 확대', '읽기 기초'],
            features: ['기초 문법', '실용 회화', '어휘 학습', '독해 기초'],
            samples: ['/static/images/books/thaiStandardA1_cover.png', '/static/images/books/thaiStandardA1_01.png', '/static/images/books/thaiStandardA1_02.png', '/static/images/books/thaiStandardA1_03.png']
        },
        'thaiStandardA2': {
            id: 'thaiStandardA2',
            galleryId: 'thai-standard-a2',
            name: 'Thai Standard A2',
            publisher: '동양북스',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-thai',
            target: '태국어 초급 학습자',
            coverImage: '/static/images/books/thaiStandardA2_cover.png',
            description: 'Thai Standard 시리즈 A2 레벨입니다.',
            objectives: ['초급 문법 확장', '일상 대화', '독해력 향상', '작문 기초'],
            features: ['심화 문법', '회화 연습', '독해 훈련', '작문 연습'],
            samples: ['/static/images/books/thaiStandardA2_cover.png', '/static/images/books/thaiStandardA2_01.png', '/static/images/books/thaiStandardA2_02.png', '/static/images/books/thaiStandardA2_03.png']
        },
        'thaiStandardB1': {
            id: 'thaiStandardB1',
            galleryId: 'thai-standard-b1',
            name: 'Thai Standard B1',
            publisher: '동양북스',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'general-thai',
            target: '태국어 중급 학습자',
            coverImage: '/static/images/books/thaiStandardB1_cover.png',
            description: 'Thai Standard 시리즈 B1 레벨입니다.',
            objectives: ['중급 문법', '표현력 향상', '독해력 강화', '토론 능력'],
            features: ['중급 문법', '실용 표현', '독해 심화', '토론 연습'],
            samples: ['/static/images/books/thaiStandardB1_cover.png', '/static/images/books/thaiStandardB1_01.png', '/static/images/books/thaiStandardB1_02.png', '/static/images/books/thaiStandardB1_03.png', '/static/images/books/thaiStandardB1_04.png']
        },
        'thaiStandardB2': {
            id: 'thaiStandardB2',
            galleryId: 'thai-standard-b2',
            name: 'Thai Standard B2',
            publisher: '동양북스',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'general-thai',
            target: '태국어 중고급 학습자',
            coverImage: '/static/images/books/thaiStandardB2_cover.png',
            description: 'Thai Standard 시리즈 B2 레벨입니다.',
            objectives: ['고급 문법', '비즈니스 기초', '시사 이해', '발표 능력'],
            features: ['고급 표현', '비즈니스 상황', '뉴스 독해', '발표 훈련'],
            samples: ['/static/images/books/thaiStandardB2_cover.png', '/static/images/books/thaiStandardB2_01.png', '/static/images/books/thaiStandardB2_02.png', '/static/images/books/thaiStandardB2_03.png', '/static/images/books/thaiStandardB2_04.png']
        },

        // ============================================
        // 인도네시아어 교재 (Indonesian)
        // ============================================
        'barunIndonesian1': {
            id: 'barunIndonesian1',
            galleryId: 'barun-indonesian-1',
            name: '바른 인도네시아어 Step 1',
            publisher: '동양북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-indonesian',
            target: '인도네시아어 입문자',
            coverImage: '/static/images/books/barunIndonesian1_cover.png',
            description: '바른 인도네시아어 시리즈 1권입니다.',
            objectives: ['기초 발음', '기초 문법', '일상 인사', '기본 회화'],
            features: ['발음 훈련', '기초 문법', '실용 회화', '연습 문제'],
            samples: ['/static/images/books/barunIndonesian1_cover.png', '/static/images/books/barunIndonesian1_01.png', '/static/images/books/barunIndonesian1_02.png', '/static/images/books/barunIndonesian1_03.png', '/static/images/books/barunIndonesian1_04.png', '/static/images/books/barunIndonesian1_05.png']
        },
        'barunIndonesian2': {
            id: 'barunIndonesian2',
            galleryId: 'barun-indonesian-2',
            name: '바른 인도네시아어 Step 2',
            publisher: '동양북스',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-indonesian',
            target: '인도네시아어 초급 학습자',
            coverImage: '/static/images/books/barunIndonesian2_cover.png',
            description: '바른 인도네시아어 시리즈 2권입니다.',
            objectives: ['초급 문법 확장', '어휘 확대', '일상 대화', '독해 기초'],
            features: ['심화 문법', '다양한 상황', '독해 연습', '작문 기초'],
            samples: ['/static/images/books/barunIndonesian2_cover.png', '/static/images/books/barunIndonesian2_01.png', '/static/images/books/barunIndonesian2_02.png', '/static/images/books/barunIndonesian2_03.png', '/static/images/books/barunIndonesian2_04.png']
        },

        // ============================================
        // 체코어 교재 (Czech)
        // ============================================
        'barunCzech': {
            id: 'barunCzech',
            galleryId: 'barun-czech',
            name: '바른 체코어',
            publisher: '동양북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-czech',
            target: '체코어 입문자',
            coverImage: '/static/images/books/barunCzech_cover.png',
            description: '바른 체코어 입문 교재입니다.',
            objectives: ['체코어 발음', '기초 문법', '일상 인사', '기본 회화'],
            features: ['발음 훈련', '기초 문법', '실용 회화', '문화 소개'],
            samples: ['/static/images/books/barunCzech_cover.png', '/static/images/books/barunCzech_01.png', '/static/images/books/barunCzech_02.png', '/static/images/books/barunCzech_03.png', '/static/images/books/barunCzech_04.png']
        },
        'sayItCzech': {
            id: 'sayItCzech',
            galleryId: 'say-it-czech',
            name: 'Say It in Czech',
            publisher: '동양북스',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'general-czech',
            target: '체코어 초급 학습자',
            coverImage: '/static/images/books/sayItCzech_cover.png',
            description: '실용 체코어 회화 교재입니다.',
            objectives: ['실용 회화', '상황별 표현', '여행 체코어', '문화 이해'],
            features: ['상황별 회화', '핵심 표현', '여행 표현', '문화 팁'],
            samples: ['/static/images/books/sayItCzech_cover.png', '/static/images/books/sayItCzech_01.png', '/static/images/books/sayItCzech_02.png', '/static/images/books/sayItCzech_03.png', '/static/images/books/sayItCzech_04.png']
        },
        'cestinaCizince': {
            id: 'cestinaCizince',
            galleryId: 'cestina-cizince',
            name: 'Cestina pro cizince',
            publisher: '다락원',
            levels: 'Level 1-3',
            levelRange: [1, 3],
            category: 'general-czech',
            target: '체코어 학습자',
            coverImage: '/static/images/books/cestinaCizince_cover.png',
            description: '외국인을 위한 체코어 교재입니다.',
            objectives: ['체계적 학습', '문법 마스터', '회화 능력', '독해력 향상'],
            features: ['체계적 구성', '문법 설명', '회화 연습', '독해 훈련'],
            samples: ['/static/images/books/cestinaCizince_cover.png', '/static/images/books/cestinaCizince_01.png', '/static/images/books/cestinaCizince_02.png', '/static/images/books/cestinaCizince_03.png', '/static/images/books/cestinaCizince_04.png', '/static/images/books/cestinaCizince_05.png']
        },

        // ============================================
        // 폴란드어 교재 (Polish)
        // ============================================
        'barunPolish1': {
            id: 'barunPolish1',
            galleryId: 'barun-polish-1',
            name: '바른 폴란드어 Step 1',
            publisher: '동양북스',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-polish',
            target: '폴란드어 입문자',
            coverImage: '/static/images/books/barunPolish1_cover.png',
            description: '바른 폴란드어 시리즈 1권입니다.',
            objectives: ['폴란드어 발음', '기초 문법', '일상 인사', '기본 회화'],
            features: ['발음 훈련', '기초 문법', '실용 회화', '문화 소개'],
            samples: ['/static/images/books/barunPolish1_cover.png', '/static/images/books/barunPolish1_01.png', '/static/images/books/barunPolish1_02.png', '/static/images/books/barunPolish1_03.png', '/static/images/books/barunPolish1_04.png', '/static/images/books/barunPolish1_05.png']
        },

        // ============================================
        // 이탈리아어 교재 (Italian)
        // ============================================
        'italianBeginner': {
            id: 'italianBeginner',
            galleryId: 'italian-beginner',
            name: '이탈리아어 첫걸음',
            publisher: '다락원',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'general-italian',
            target: '이탈리아어 입문자',
            coverImage: '/static/images/books/italianBeginner_cover.png',
            description: '이탈리아어 입문자를 위한 기초 교재입니다.',
            objectives: ['이탈리아어 발음', '기초 문법', '일상 인사', '기본 회화'],
            features: ['발음 훈련', '기초 문법', '실용 회화', '문화 소개'],
            samples: ['/static/images/books/italianBeginner_cover.png', '/static/images/books/italianBeginner_01.png', '/static/images/books/italianBeginner_02.png', '/static/images/books/italianBeginner_03.png', '/static/images/books/italianBeginner_04.png']
        }
    },

    // ============================================
    // 테이블 행 정의 (카테고리별 레벨 범위)
    // ============================================
    tableRows: {
        'general-english': [
            {
                textbooks: ['stretchStarter', 'stretch1', 'stretch2'],
                levelStart: 1, levelEnd: 5,
                displayName: 'Stretch Starter~2'
            },
            {
                textbooks: ['stretch3', 'smartChoice1', 'smartChoice2'],
                levelStart: 6, levelEnd: 10,
                displayName: 'Stretch 3 / Smart Choice 1~2'
            },
            {
                textbooks: ['beginAgainVol1', 'beginAgainVol2'],
                levelStart: 1, levelEnd: 3,
                displayName: 'Begin Again Vol.1~2'
            },
            {
                textbooks: ['jazzEnglish1', 'jazzEnglish2'],
                levelStart: 4, levelEnd: 7,
                displayName: 'Jazz English 1~2'
            },
            {
                textbooks: ['americanEnglishFile4_3rdEdition', 'americanEnglishFile5'],
                levelStart: 8, levelEnd: 10,
                displayName: 'American English File 4~5'
            },
            {
                textbooks: ['newConnection1', 'newConnection2'],
                levelStart: 1, levelEnd: 4,
                displayName: 'New Connection 1~2'
            },
            {
                textbooks: ['newConnection3', 'americanEnglishFile1'],
                levelStart: 5, levelEnd: 7,
                displayName: 'New Connection 3 / AEF 1'
            },
            {
                textbooks: ['pep900'],
                levelStart: 8, levelEnd: 10,
                displayName: 'PEP 900'
            },
            {
                textbooks: ['smartChoice1', 'smartChoice2', 'stretch1', 'stretch2', 'stretch3'],
                levelStart: 1, levelEnd: 10,
                displayName: 'Smart Choice / Stretch 시리즈 (전 레벨)'
            },
            {
                textbooks: ['ilbbangbbangTravelEnglish', 'travelEnglish100DaysMiracle'],
                levelStart: 3, levelEnd: 8,
                displayName: '여행 영어 (일빵빵 / 100일의 기적)'
            }
        ],
        'test-prep': [
            {
                textbooks: ['opicAllInOnePackage', 'opicShortTermIhAl', 'opicGod'],
                levelStart: 4, levelEnd: 7,
                displayName: 'OPIc 올인원 / 단기공략'
            },
            {
                textbooks: ['hackersOpicAdvanced', 'siwonschoolToeicSpeaking10Tests'],
                levelStart: 6, levelEnd: 10,
                displayName: '해커스 OPIc / 토익스피킹'
            },
            {
                textbooks: ['hackersToeflSpeaking', 'siwonschoolToeflSpeaking'],
                levelStart: 5, levelEnd: 8,
                displayName: 'TOEFL Speaking (해커스/시원스쿨)'
            },
            {
                textbooks: ['hackersIeltsSpeaking', 'ieltsMasterComplete', 'ielts18GeneralTraining'],
                levelStart: 7, levelEnd: 10,
                displayName: 'IELTS Speaking'
            },
            {
                textbooks: ['opicChineseIhStrategy'],
                levelStart: 5, levelEnd: 9,
                displayName: 'OPIc 중국어 IH 공략'
            }
        ],
        'business': [
            {
                textbooks: ['businessEnglishEmailPattern233'],
                levelStart: 4, levelEnd: 9,
                displayName: '비즈니스 영어 이메일 패턴 233'
            },
            {
                textbooks: ['businessJapaneseEmailPattern200', 'businessJapaneseEmailPattern233'],
                levelStart: 4, levelEnd: 9,
                displayName: '비즈니스 일본어 이메일 패턴'
            }
        ]
    }
};

// ============================================
// 하위 호환성을 위한 별칭
// ============================================
const curriculumTextbookData = textbookData.textbooks;

// ============================================
// 헬퍼 함수
// ============================================

/**
 * 교재 ID로 데이터 가져오기
 * @param {string} textbookId - 교재 ID
 * @returns {object|null} 교재 데이터
 */
function getTextbookById(textbookId) {
    return textbookData.textbooks[textbookId] || null;
}

/**
 * 카테고리별 교재 목록 가져오기
 * @param {string} categoryId - 카테고리 ID
 * @returns {array} 교재 ID 배열
 */
function getTextbooksByCategory(categoryId) {
    const rows = textbookData.tableRows[categoryId];
    if (!rows) return [];

    const textbookIds = new Set();
    rows.forEach(row => {
        row.textbooks.forEach(id => textbookIds.add(id));
    });
    return Array.from(textbookIds);
}

/**
 * 테이블 행 데이터 가져오기
 * @param {string} categoryId - 카테고리 ID
 * @returns {array} 테이블 행 배열
 */
function getTableRows(categoryId) {
    return textbookData.tableRows[categoryId] || [];
}

// ============================================
// 갤러리 ID 매핑 (kebab-case → camelCase)
// ============================================
// phone_english_demo.html의 data-book 속성값 → textbookData.textbooks 키 변환용

const galleryIdMapping = {
    // General English - Stretch 시리즈
    'stretch-starter': 'stretchStarter',
    'stretch-1': 'stretch1',
    'stretch-2': 'stretch2',
    'stretch-3': 'stretch3',

    // General English - Smart Choice 시리즈
    'smart-choice-1': 'smartChoice1',
    'smart-choice-2': 'smartChoice2',
    'sc-starter': 'smartChoice1',  // 레거시 호환
    'sc-main': 'smartChoice2',     // 레거시 호환

    // General English - Begin Again 시리즈
    'begin-again-1': 'beginAgainVol1',
    'begin-again-2': 'beginAgainVol2',

    // General English - Jazz English 시리즈
    'jazz-english-1': 'jazzEnglish1',
    'jazz-english-2': 'jazzEnglish2',

    // General English - American English File 시리즈
    'aef-1': 'americanEnglishFile1',
    'aef-4': 'americanEnglishFile4_3rdEdition',
    'aef-5': 'americanEnglishFile5',

    // General English - New Connection 시리즈
    'new-connection-1': 'newConnection1',
    'new-connection-2': 'newConnection2',
    'new-connection-3': 'newConnection3',

    // General English - PEP 900
    'pep-900': 'pep900',

    // Business English
    'business-email-233': 'businessEnglishEmailPattern233',

    // Test Preparation - OPIc
    'opic-god': 'opicGod',
    'opic-ihal': 'opicShortTermIhAl',
    'hackers-opic': 'hackersOpicAdvanced',

    // Test Preparation - TOEIC/TOEFL
    'toeic-speaking-10tests': 'siwonschoolToeicSpeaking10Tests',
    'hackers-toefl': 'hackersToeflSpeaking',
    'siwon-toefl': 'siwonschoolToeflSpeaking',

    // Test Preparation - IELTS
    'hackers-ielts-speaking': 'hackersIeltsSpeaking',
    'ielts-master': 'ieltsMasterComplete'
};

/**
 * 갤러리 ID로 교재 데이터 가져오기
 * @param {string} galleryId - 갤러리 카드의 data-book 값 (kebab-case)
 * @returns {object|null} 교재 데이터
 */
function getTextbookByGalleryId(galleryId) {
    // 먼저 매핑 테이블에서 찾기
    const mappedId = galleryIdMapping[galleryId];
    if (mappedId && textbookData.textbooks[mappedId]) {
        return textbookData.textbooks[mappedId];
    }

    // 매핑에 없으면 직접 ID로 찾기 (camelCase로 전달된 경우)
    if (textbookData.textbooks[galleryId]) {
        return textbookData.textbooks[galleryId];
    }

    return null;
}

// ============================================
// 아코디언 카테고리 데이터
// ============================================
// phone_english_demo.html의 아코디언 컴포넌트용

const accordionCategories = {
    general: {
        name: '일반영어 (General English)',
        textbooks: ['smartChoice1', 'smartChoice2', 'stretchStarter', 'stretch1', 'stretch2', 'stretch3']
    },
    business: {
        name: '비즈니스 영어 (Business English)',
        textbooks: ['businessEnglishEmailPattern233']
    },
    test: {
        name: '시험대비 (Test Preparation)',
        textbooks: ['opicGod', 'opicShortTermIhAl', 'hackersOpicAdvanced', 'siwonschoolToeicSpeaking10Tests', 'hackersToeflSpeaking', 'siwonschoolToeflSpeaking']
    },
    discussion: {
        name: '토론/디스커션 (Discussion & Debate)',
        textbooks: ['jazzEnglish2', 'pep900', 'newConnection1']
    }
};

/**
 * 아코디언용 교재 목록 가져오기 (아코디언 데이터 형식으로 변환)
 * @param {string} categoryKey - 카테고리 키 (general, business, test, discussion)
 * @returns {array} 아코디언용 교재 데이터 배열
 */
function getAccordionTextbooks(categoryKey) {
    const category = accordionCategories[categoryKey];
    if (!category) return [];

    return category.textbooks.map(id => {
        const book = textbookData.textbooks[id];
        if (!book) return null;

        return {
            title: book.name,
            level: book.levels,
            author: book.publisher,  // author 필드가 없으면 publisher 사용
            publisher: book.publisher,
            year: '2020',  // 기본값
            rating: 4.5,   // 기본값
            description: book.description,
            features: book.features
        };
    }).filter(Boolean);
}

/**
 * 갤러리 모달용 데이터 형식으로 변환
 * @param {string} textbookId - 교재 ID (camelCase 또는 kebab-case)
 * @returns {object|null} 갤러리 모달용 데이터
 */
function getGalleryModalData(textbookId) {
    const book = getTextbookByGalleryId(textbookId);
    if (!book) return null;

    return {
        title: book.name,
        level: book.levels,
        category: book.category,
        target: book.target,
        image: book.coverImage,
        samples: book.samples || [book.coverImage],
        description: book.description,
        features: book.features
    };
}
