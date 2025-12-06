// ============================================
// 통합 교재 데이터 (Unified Textbook Data)
// ============================================
// curriculum-roadmap.html 및 textbook gallery 모두 사용
// 단일 데이터 소스 (Single Source of Truth)

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
            name: 'Stretch Starter',
            publisher: 'Oxford University Press',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'General English',
            target: '영어 입문 학습자',
            coverImage: '/static/images/books/stretchStarter_cover.png',
            description: '초보자를 위한 체계적인 기초 영어 교재입니다. 기본 문법과 일상 표현을 자연스럽게 학습합니다.',
            objectives: ['기초 문법 패턴 습득', '일상 회화 표현 학습', '듣기 및 말하기 능력 향상', '기본 어휘력 강화'],
            features: ['기초 문법 체계적 학습', '일상 회화 표현 중심', '발음 교정 자료 포함', 'MP3 음성 파일 제공'],
            samples: ['/static/images/books/stretchStarter_01.png', '/static/images/books/stretchStarter_02.png']
        },
        'stretch1': {
            id: 'stretch1',
            name: 'Stretch 1',
            publisher: 'Oxford University Press',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'General English',
            target: '초급 학습자',
            coverImage: '/static/images/books/stretch1_cover.png',
            description: '21세기 스킬 기반의 영어 학습 교재입니다. 비판적 사고와 커뮤니케이션 능력을 함께 개발합니다.',
            objectives: ['기초 문법 심화', '실생활 표현 확장', '리스닝 스킬 향상', '기본 토론 능력 개발'],
            features: ['21세기 스킬 기반', '비판적 사고력 개발', '협업 활동 포함', '온라인 자료 제공'],
            samples: ['/static/images/books/stretch1_01.png', '/static/images/books/stretch1_02.png']
        },
        'stretch2': {
            id: 'stretch2',
            name: 'Stretch 2',
            publisher: 'Oxford University Press',
            levels: 'Level 3-4',
            levelRange: [3, 4],
            category: 'General English',
            target: '초중급 학습자',
            coverImage: '/static/images/books/stretch2_cover.png',
            description: '협업과 창의성 중심의 영어 학습 교재입니다. 다양한 주제로 영어 실력을 확장합니다.',
            objectives: ['중급 문법 구조 이해', '다양한 주제 토론', '프레젠테이션 기초', '어휘력 확장'],
            features: ['창의성 중심 학습', '팀 프로젝트 활동', '멀티미디어 자료', '자기 평가 도구'],
            samples: ['/static/images/books/stretch2_01.png', '/static/images/books/stretch2_02.png']
        },
        'stretch3': {
            id: 'stretch3',
            name: 'Stretch 3',
            publisher: 'Oxford University Press',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'General English',
            target: '중급 학습자',
            coverImage: '/static/images/books/stretch3_cover.png',
            description: '중급 커뮤니케이션 역량을 강화하는 교재입니다. 복잡한 주제에 대한 토론 능력을 개발합니다.',
            objectives: ['고급 문법 활용', '복잡한 주제 토론', '설득력 있는 표현', '학술적 어휘 습득'],
            features: ['고급 사고력 개발', '토론 및 디베이트', '학술적 글쓰기 입문', '실전 영어 능력'],
            samples: ['/static/images/books/stretch3_01.png', '/static/images/books/stretch3_02.png']
        },

        // ----------------------------------------
        // General English - Smart Choice 시리즈
        // ----------------------------------------
        'smartChoice1': {
            id: 'smartChoice1',
            name: 'Smart Choice 1',
            publisher: 'Oxford University Press',
            levels: 'Level 1-3',
            levelRange: [1, 3],
            category: 'General English',
            target: '영어 입문 ~ 초급 학습자',
            coverImage: '/static/images/books/smartChoice1_cover.png',
            description: '성인 학습자를 위한 실용적 회화 교재입니다. 일상생활에서 바로 활용할 수 있는 표현들을 중심으로 기초 문법과 어휘를 자연스럽게 학습합니다.',
            objectives: ['기초 문법 체계적 학습', '일상 회화 표현 습득', '발음 및 억양 교정', '기본 어휘력 강화'],
            features: ['기초 문법 체계적 학습', '일상 회화 표현 중심', '발음 교정 자료 포함', 'MP3 음성 파일 제공'],
            samples: ['/static/images/books/smartChoice1_01.png', '/static/images/books/smartChoice1_02.png', '/static/images/books/smartChoice1_03.png', '/static/images/books/smartChoice1_04.png']
        },
        'smartChoice2': {
            id: 'smartChoice2',
            name: 'Smart Choice 2',
            publisher: 'Oxford University Press',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'General English',
            target: '초중급 학습자',
            coverImage: '/static/images/books/smartChoice2_cover.png',
            description: '중급 학습자를 위한 체계적 회화 교재입니다. 다양한 상황별 대화와 토론 주제를 통해 실용적인 영어 능력을 향상시킵니다.',
            objectives: ['중급 문법 마스터', '상황별 회화 능력', '리스닝 스킬 강화', '실전 대화 연습'],
            features: ['상황별 실전 대화', '토론 및 발표 연습', '리스닝 스킬 강화', '문화적 표현 학습'],
            samples: ['/static/images/books/smartChoice2_01.png', '/static/images/books/smartChoice2_02.png', '/static/images/books/smartChoice2_03.png', '/static/images/books/smartChoice2_04.png']
        },

        // ----------------------------------------
        // General English - Begin Again 시리즈
        // ----------------------------------------
        'beginAgainVol1': {
            id: 'beginAgainVol1',
            name: 'Begin Again Vol.1',
            publisher: '길벗이지톡',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'General English',
            target: '영어 재학습 성인 학습자',
            coverImage: '/static/images/books/beginAgainVol1_cover.png',
            description: '영어를 다시 시작하는 성인을 위한 교재입니다. 기초부터 차근차근 영어 실력을 쌓아갑니다.',
            objectives: ['영어 기초 재정립', '기본 문법 복습', '일상 표현 학습', '학습 자신감 회복'],
            features: ['성인 학습자 맞춤', '기초부터 체계적', '실생활 표현 중심', '자기 학습 가이드'],
            samples: ['/static/images/books/beginAgainVol1_01.png', '/static/images/books/beginAgainVol1_02.png', '/static/images/books/beginAgainVol1_03.png', '/static/images/books/beginAgainVol1_04.png']
        },
        'beginAgainVol2': {
            id: 'beginAgainVol2',
            name: 'Begin Again Vol.2',
            publisher: '길벗이지톡',
            levels: 'Level 2-3',
            levelRange: [2, 3],
            category: 'General English',
            target: '기초 완성 학습자',
            coverImage: '/static/images/books/beginAgainVol2_cover.png',
            description: 'Begin Again 시리즈의 두 번째 교재입니다. 기초를 다진 후 초급 회화로 나아갑니다.',
            objectives: ['초급 문법 완성', '회화 표현 확장', '리스닝 능력 향상', '기본 독해력 개발'],
            features: ['Vol.1 연계 학습', '실전 회화 연습', '다양한 주제 학습', '복습 시스템 포함'],
            samples: ['/static/images/books/beginAgainVol2_01.png', '/static/images/books/beginAgainVol2_02.png', '/static/images/books/beginAgainVol2_03.png', '/static/images/books/beginAgainVol2_04.png']
        },

        // ----------------------------------------
        // General English - Jazz English 시리즈
        // ----------------------------------------
        'jazzEnglish1': {
            id: 'jazzEnglish1',
            name: 'Jazz English 1',
            publisher: 'Compass Publishing',
            levels: 'Level 4-5',
            levelRange: [4, 5],
            category: 'General English',
            target: '초중급 학습자',
            coverImage: '/static/images/books/jazzEnglish1_cover.png',
            description: '재즈 리듬으로 배우는 영어 교재입니다. 자연스러운 영어 리듬감을 익힙니다.',
            objectives: ['영어 리듬 습득', '자연스러운 발화', '일상 대화 연습', '억양 교정'],
            features: ['리듬 기반 학습', '자연스러운 발음', '실생활 대화', '음성 자료 풍부'],
            samples: ['/static/images/books/jazzEnglish1_01.png', '/static/images/books/jazzEnglish1_02.png', '/static/images/books/jazzEnglish1_03.png']
        },
        'jazzEnglish2': {
            id: 'jazzEnglish2',
            name: 'Jazz English 2',
            publisher: 'Compass Publishing',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'General English',
            target: '중급 학습자',
            coverImage: '/static/images/books/jazzEnglish2_cover.png',
            description: 'Jazz English 시리즈의 심화 과정입니다. 더욱 자연스러운 영어 구사력을 개발합니다.',
            objectives: ['고급 리듬 패턴', '토론 능력 개발', '복잡한 표현 학습', '유창성 향상'],
            features: ['심화 리듬 학습', '토론 및 디베이트', '고급 표현 학습', '실전 대화 연습'],
            samples: ['/static/images/books/jazzEnglish2_01.png', '/static/images/books/jazzEnglish2_02.png', '/static/images/books/jazzEnglish2_03.png']
        },

        // ----------------------------------------
        // General English - American English File 시리즈
        // ----------------------------------------
        'americanEnglishFile1': {
            id: 'americanEnglishFile1',
            name: 'American English File 1',
            publisher: 'Oxford University Press',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'General English',
            target: '중급 학습자',
            coverImage: '/static/images/books/americanEnglishFile1_cover.png',
            description: '미국식 영어를 체계적으로 학습하는 교재입니다. 4가지 스킬을 균형있게 발전시킵니다.',
            objectives: ['미국식 영어 습득', '4대 영역 균형 학습', '실용적 문법 마스터', '어휘력 확장'],
            features: ['미국식 발음 학습', '통합 스킬 접근', '다양한 액티비티', '온라인 자료 연동'],
            samples: ['/static/images/books/americanEnglishFile1_01.png', '/static/images/books/americanEnglishFile1_02.png', '/static/images/books/americanEnglishFile1_03.png', '/static/images/books/americanEnglishFile1_04.png']
        },
        'americanEnglishFile4_3rdEdition': {
            id: 'americanEnglishFile4_3rdEdition',
            name: 'American English File 4',
            publisher: 'Oxford University Press',
            levels: 'Level 8-9',
            levelRange: [8, 9],
            category: 'General English',
            target: '상급 학습자',
            coverImage: '/static/images/books/americanEnglishFile4_3rdEdition_cover.png',
            description: '고급 미국식 영어 교재입니다. 복잡한 주제에 대한 토론과 학술적 영어를 학습합니다.',
            objectives: ['고급 문법 마스터', '학술적 영어 습득', '복잡한 토론 참여', '원어민 수준 목표'],
            features: ['고급 어휘 학습', '학술적 글쓰기', '심화 토론 연습', '문화적 뉘앙스'],
            samples: ['/static/images/books/americanEnglishFile4_3rdEdition_01.png', '/static/images/books/americanEnglishFile4_3rdEdition_02.png']
        },
        'americanEnglishFile5': {
            id: 'americanEnglishFile5',
            name: 'American English File 5',
            publisher: 'Oxford University Press',
            levels: 'Level 9-10',
            levelRange: [9, 10],
            category: 'General English',
            target: '최상급 학습자',
            coverImage: '/static/images/books/americanEnglishFile5_cover.png',
            description: 'American English File 시리즈의 최고급 과정입니다. 원어민 수준의 영어 구사력을 목표로 합니다.',
            objectives: ['원어민 수준 영어', '전문적 토론 능력', '학술적 글쓰기', '문화적 이해'],
            features: ['최고급 어휘', '전문 분야 영어', '학술적 토론', '원어민 자료 활용'],
            samples: ['/static/images/books/americanEnglishFile5_01.png', '/static/images/books/americanEnglishFile5_02.png', '/static/images/books/americanEnglishFile5_03.png', '/static/images/books/americanEnglishFile5_04.png']
        },

        // ----------------------------------------
        // General English - New Connection 시리즈
        // ----------------------------------------
        'newConnection1': {
            id: 'newConnection1',
            name: 'New Connection 1',
            publisher: 'Compass Publishing',
            levels: 'Level 1-2',
            levelRange: [1, 2],
            category: 'General English',
            target: '영어 입문 학습자',
            coverImage: '/static/images/books/newConnection1_cover.png',
            description: '커뮤니케이션 스킬 개발을 위한 기초 교재입니다. 실생활 대화 중심으로 학습합니다.',
            objectives: ['기초 대화 능력', '실생활 표현 학습', '듣기 능력 향상', '기본 문법 습득'],
            features: ['대화 중심 학습', '실생활 상황', '듣기 자료 풍부', '단계별 학습'],
            samples: ['/static/images/books/newConnection1_01.png', '/static/images/books/newConnection1_02.png']
        },
        'newConnection2': {
            id: 'newConnection2',
            name: 'New Connection 2',
            publisher: 'Compass Publishing',
            levels: 'Level 2-4',
            levelRange: [2, 4],
            category: 'General English',
            target: '초급 학습자',
            coverImage: '/static/images/books/newConnection2_cover.png',
            description: 'New Connection 시리즈의 두 번째 교재입니다. 대화 능력을 한 단계 높여줍니다.',
            objectives: ['초급 대화 완성', '다양한 상황 대응', '어휘력 확장', '문법 활용 능력'],
            features: ['상황별 대화', '다양한 주제', '실전 연습', '복습 시스템'],
            samples: ['/static/images/books/newConnection2_01.png', '/static/images/books/newConnection2_02.png']
        },
        'newConnection3': {
            id: 'newConnection3',
            name: 'New Connection 3',
            publisher: 'Compass Publishing',
            levels: 'Level 5-6',
            levelRange: [5, 6],
            category: 'General English',
            target: '중급 학습자',
            coverImage: '/static/images/books/newConnection3_cover.png',
            description: 'New Connection 시리즈의 심화 과정입니다. 더욱 자연스러운 대화 능력을 개발합니다.',
            objectives: ['중급 대화 마스터', '복잡한 주제 토론', '유창성 향상', '자연스러운 표현'],
            features: ['심화 대화 학습', '토론 연습', '고급 어휘', '실전 커뮤니케이션'],
            samples: ['/static/images/books/newConnection3_01.png', '/static/images/books/newConnection3_02.png', '/static/images/books/newConnection3_03.png']
        },

        // ----------------------------------------
        // General English - PEP 900
        // ----------------------------------------
        'pep900': {
            id: 'pep900',
            name: 'PEP 900',
            publisher: 'PEP Learning',
            levels: 'Level 8-10',
            levelRange: [8, 10],
            category: 'General English',
            target: '상급 ~ 최상급 학습자',
            coverImage: '/static/images/books/pep900_cover.png',
            description: '실전 영어 표현 900 패턴을 마스터하는 고급 교재입니다. 원어민 수준의 표현력을 목표로 합니다.',
            objectives: ['고급 패턴 900개 습득', '원어민 표현 학습', '유창성 극대화', '고급 토론 능력'],
            features: ['900개 핵심 패턴', '원어민 표현', '실전 활용 연습', '고급 어휘 포함'],
            samples: ['/static/images/books/pep900_01.png', '/static/images/books/pep900_02.png']
        },

        // ----------------------------------------
        // General English - 여행 영어
        // ----------------------------------------
        'ilbbangbbangTravelEnglish': {
            id: 'ilbbangbbangTravelEnglish',
            name: '일빵빵 여행영어',
            publisher: '일빵빵',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'General English',
            target: '여행 영어 학습자',
            coverImage: '/static/images/books/ilbbangbbangTravelEnglish_cover.png',
            description: '해외 여행에 필요한 영어 표현을 집중적으로 학습하는 교재입니다.',
            objectives: ['여행 필수 표현', '공항/호텔 영어', '쇼핑/식당 영어', '긴급 상황 대응'],
            features: ['상황별 여행 영어', '실용적 표현 중심', '음성 자료 제공', '핵심 패턴 정리'],
            samples: ['/static/images/books/ilbbangbbangTravelEnglish_01.png', '/static/images/books/ilbbangbbangTravelEnglish_02.png', '/static/images/books/ilbbangbbangTravelEnglish_03.png', '/static/images/books/ilbbangbbangTravelEnglish_04.png']
        },
        'travelEnglish100DaysMiracle': {
            id: 'travelEnglish100DaysMiracle',
            name: '여행영어 100일의 기적',
            publisher: '넥서스',
            levels: 'Level 3-5',
            levelRange: [3, 5],
            category: 'General English',
            target: '여행 영어 학습자',
            coverImage: '/static/images/books/travelEnglish100DaysMiracle_cover.png',
            description: '100일 완성 여행 영어 프로그램입니다. 체계적인 학습으로 여행 영어를 마스터합니다.',
            objectives: ['100일 완성 프로그램', '여행 상황별 영어', '실전 대화 연습', '자신감 향상'],
            features: ['100일 커리큘럼', '일일 학습 분량', '복습 시스템', 'MP3 자료'],
            samples: ['/static/images/books/travelEnglish100DaysMiracle_01.png', '/static/images/books/travelEnglish100DaysMiracle_02.png', '/static/images/books/travelEnglish100DaysMiracle_03.png', '/static/images/books/travelEnglish100DaysMiracle_04.png']
        },

        // ----------------------------------------
        // Test Preparation - OPIc 시리즈
        // ----------------------------------------
        'opicAllInOnePackage': {
            id: 'opicAllInOnePackage',
            name: 'OPIc 올인원 패키지',
            publisher: '해커스',
            levels: 'Level 4-6',
            levelRange: [4, 6],
            category: 'Test Preparation',
            target: 'OPIc IM 목표 수험생',
            coverImage: '/static/images/books/opicAllInOnePackage_cover.png',
            description: 'OPIc 시험 대비 올인원 패키지입니다. 체계적인 학습으로 IM 등급을 목표로 합니다.',
            objectives: ['OPIc IM 등급 달성', '주제별 답변 전략', '롤플레이 대비', '실전 모의고사'],
            features: ['올인원 패키지', '주제별 완벽 대비', '실전 모의고사', '답변 템플릿'],
            samples: ['/static/images/books/opicAllInOnePackage_01.png', '/static/images/books/opicAllInOnePackage_02.png', '/static/images/books/opicAllInOnePackage_03.png', '/static/images/books/opicAllInOnePackage_04.png', '/static/images/books/opicAllInOnePackage_05.png', '/static/images/books/opicAllInOnePackage_06.png']
        },
        'opicShortTermIhAl': {
            id: 'opicShortTermIhAl',
            name: 'OPIc 단기공략 IH/AL',
            publisher: '시원스쿨',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'Test Preparation',
            target: 'OPIc IH/AL 목표 수험생',
            coverImage: '/static/images/books/opicShortTermIhAl_cover.png',
            description: 'OPIc IH/AL 등급 단기 공략 교재입니다. 고급 답변 전략을 집중적으로 학습합니다.',
            objectives: ['IH/AL 등급 달성', '고급 답변 전략', '돌발 상황 대응', '실전 감각 향상'],
            features: ['단기 집중 학습', '고급 답변 템플릿', '실전 문제 풍부', '합격 전략 제공'],
            samples: ['/static/images/books/opicShortTermIhAl_01.png', '/static/images/books/opicShortTermIhAl_02.png', '/static/images/books/opicShortTermIhAl_03.png', '/static/images/books/opicShortTermIhAl_04.png']
        },
        'opicGod': {
            id: 'opicGod',
            name: '오픽의 신',
            publisher: '넥서스',
            levels: 'Level 5-7',
            levelRange: [5, 7],
            category: 'Test Preparation',
            target: 'OPIc 고득점 목표 수험생',
            coverImage: '/static/images/books/opicGod_cover.png',
            description: 'OPIc 고득점을 위한 전략 교재입니다. 신의 한 수로 등급을 올려드립니다.',
            objectives: ['고득점 전략 습득', '답변 퀄리티 향상', '시간 관리 능력', '자신감 향상'],
            features: ['고득점 비법 공개', '실전 답변 예시', '빈출 주제 정리', '등급별 전략'],
            samples: ['/static/images/books/opicGod_01.png', '/static/images/books/opicGod_02.png', '/static/images/books/opicGod_03.png', '/static/images/books/opicGod_04.png', '/static/images/books/opicGod_05.png', '/static/images/books/opicGod_06.png']
        },
        'hackersOpicAdvanced': {
            id: 'hackersOpicAdvanced',
            name: '해커스 OPIc Advanced',
            publisher: '해커스',
            levels: 'Level 7-9',
            levelRange: [7, 9],
            category: 'Test Preparation',
            target: 'OPIc AL 목표 수험생',
            coverImage: '/static/images/books/hackersOpicAdvanced_cover.png',
            description: '해커스 OPIc 고급 과정입니다. AL 등급 달성을 위한 심화 전략을 학습합니다.',
            objectives: ['AL 등급 달성', '고급 답변 구조', '복잡한 주제 대응', '원어민 수준 표현'],
            features: ['AL 전문 교재', '심화 답변 전략', '고급 표현 학습', '실전 모의고사'],
            samples: ['/static/images/books/hackersOpicAdvanced_01.png', '/static/images/books/hackersOpicAdvanced_02.png', '/static/images/books/hackersOpicAdvanced_03.png', '/static/images/books/hackersOpicAdvanced_04.png']
        },
        'opicChineseIhStrategy': {
            id: 'opicChineseIhStrategy',
            name: 'OPIc 중국어 IH 공략',
            publisher: '다락원',
            levels: 'Level 5-8',
            levelRange: [5, 8],
            category: 'Test Preparation',
            target: 'OPIc 중국어 수험생',
            coverImage: '/static/images/books/opicChineseIhStrategy_cover.png',
            description: 'OPIc 중국어 IH 등급 공략 교재입니다. 중국어 OPIc 시험을 체계적으로 대비합니다.',
            objectives: ['중국어 OPIc IH 달성', '주제별 답변 전략', '중국어 표현 학습', '실전 대비'],
            features: ['중국어 OPIc 전문', 'IH 등급 전략', '주제별 학습', '모의고사 포함'],
            samples: ['/static/images/books/opicChineseIhStrategy_01.png', '/static/images/books/opicChineseIhStrategy_02.png', '/static/images/books/opicChineseIhStrategy_03.png', '/static/images/books/opicChineseIhStrategy_04.png']
        },

        // ----------------------------------------
        // Test Preparation - TOEIC Speaking
        // ----------------------------------------
        'siwonschoolToeicSpeaking10Tests': {
            id: 'siwonschoolToeicSpeaking10Tests',
            name: '시원스쿨 토익스피킹 실전 10회',
            publisher: '시원스쿨',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'Test Preparation',
            target: 'TOEIC Speaking 수험생',
            coverImage: '/static/images/books/siwonschoolToeicSpeaking10Tests_cover.png',
            description: 'TOEIC Speaking 실전 대비 10회분 모의고사 교재입니다.',
            objectives: ['TOEIC Speaking 고득점', '실전 감각 향상', '시간 관리 능력', '파트별 전략'],
            features: ['실전 모의고사 10회', '파트별 전략', '모범 답안 제공', '해설 포함'],
            samples: ['/static/images/books/siwonschoolToeicSpeaking10Tests_01.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_02.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_03.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_04.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_05.png', '/static/images/books/siwonschoolToeicSpeaking10Tests_06.png']
        },

        // ----------------------------------------
        // Test Preparation - TOEFL Speaking
        // ----------------------------------------
        'hackersToeflSpeaking': {
            id: 'hackersToeflSpeaking',
            name: '해커스 토플 스피킹',
            publisher: '해커스',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'Test Preparation',
            target: 'TOEFL Speaking 수험생',
            coverImage: '/static/images/books/hackersToeflSpeaking_cover.png',
            description: 'TOEFL Speaking 완벽 대비 교재입니다. 체계적인 학습으로 고득점을 목표로 합니다.',
            objectives: ['TOEFL Speaking 고득점', 'Integrated Task 전략', 'Independent Task 전략', '실전 대비'],
            features: ['파트별 완벽 대비', '고득점 전략', '실전 문제', '모범 답안'],
            samples: ['/static/images/books/hackersToeflSpeaking_01.png', '/static/images/books/hackersToeflSpeaking_02.png', '/static/images/books/hackersToeflSpeaking_03.png', '/static/images/books/hackersToeflSpeaking_04.png']
        },
        'siwonschoolToeflSpeaking': {
            id: 'siwonschoolToeflSpeaking',
            name: '시원스쿨 토플 스피킹',
            publisher: '시원스쿨',
            levels: 'Level 6-8',
            levelRange: [6, 8],
            category: 'Test Preparation',
            target: 'TOEFL Speaking 수험생',
            coverImage: '/static/images/books/siwonschoolToeflSpeaking_cover.png',
            description: '시원스쿨 TOEFL Speaking 교재입니다. 기초부터 고득점까지 체계적으로 학습합니다.',
            objectives: ['TOEFL Speaking 기초', '답변 구조 학습', '표현력 향상', '실전 연습'],
            features: ['기초부터 고득점', '체계적 커리큘럼', '풍부한 연습', '온라인 자료'],
            samples: ['/static/images/books/siwonschoolToeflSpeaking_01.png', '/static/images/books/siwonschoolToeflSpeaking_02.png', '/static/images/books/siwonschoolToeflSpeaking_03.png', '/static/images/books/siwonschoolToeflSpeaking_04.png', '/static/images/books/siwonschoolToeflSpeaking_05.png']
        },

        // ----------------------------------------
        // Test Preparation - IELTS Speaking
        // ----------------------------------------
        'hackersIeltsSpeaking': {
            id: 'hackersIeltsSpeaking',
            name: '해커스 IELTS Speaking',
            publisher: '해커스',
            levels: 'Level 7-9',
            levelRange: [7, 9],
            category: 'Test Preparation',
            target: 'IELTS Speaking 수험생',
            coverImage: '/static/images/books/hackersIeltsSpeaking_cover.png',
            description: 'IELTS Speaking 완벽 대비 교재입니다. Band 7 이상을 목표로 합니다.',
            objectives: ['IELTS Band 7+ 달성', '파트별 전략 습득', '고급 표현 학습', '실전 대비'],
            features: ['파트별 완벽 대비', 'Band 7+ 전략', '풍부한 어휘', '실전 모의고사'],
            samples: ['/static/images/books/hackersIeltsSpeaking_01.png', '/static/images/books/hackersIeltsSpeaking_02.png', '/static/images/books/hackersIeltsSpeaking_03.png', '/static/images/books/hackersIeltsSpeaking_04.png', '/static/images/books/hackersIeltsSpeaking_05.png']
        },
        'ieltsMasterComplete': {
            id: 'ieltsMasterComplete',
            name: 'IELTS Master Complete',
            publisher: 'Cambridge',
            levels: 'Level 7-9',
            levelRange: [7, 9],
            category: 'Test Preparation',
            target: 'IELTS 고득점 목표 수험생',
            coverImage: '/static/images/books/ieltsMasterComplete_cover.png',
            description: 'IELTS 마스터를 위한 완벽 가이드입니다. 4가지 영역을 통합적으로 학습합니다.',
            objectives: ['IELTS 4대 영역 마스터', 'Band 7-8 달성', '실전 감각 향상', '시험 전략 완성'],
            features: ['통합 학습 교재', '실전 문제 풍부', '전략 가이드', '모범 답안'],
            samples: ['/static/images/books/ieltsMasterComplete_01.png', '/static/images/books/ieltsMasterComplete_02.png', '/static/images/books/ieltsMasterComplete_03.png', '/static/images/books/ieltsMasterComplete_04.png', '/static/images/books/ieltsMasterComplete_05.png']
        },
        'ielts18GeneralTraining': {
            id: 'ielts18GeneralTraining',
            name: 'IELTS 18 General Training',
            publisher: 'Cambridge',
            levels: 'Level 7-10',
            levelRange: [7, 10],
            category: 'Test Preparation',
            target: 'IELTS General 수험생',
            coverImage: '/static/images/books/ielts18GeneralTraining_cover.png',
            description: 'Cambridge IELTS 18 General Training 공식 문제집입니다.',
            objectives: ['최신 기출 유형 파악', '실전 문제 연습', '점수 향상', '시험 감각 향상'],
            features: ['공식 기출 문제', '최신 유형 반영', '답안 및 해설', '음성 자료'],
            samples: ['/static/images/books/ielts18GeneralTraining_01.png', '/static/images/books/ielts18GeneralTraining_02.png', '/static/images/books/ielts18GeneralTraining_03.png', '/static/images/books/ielts18GeneralTraining_04.png']
        },

        // ----------------------------------------
        // Business English
        // ----------------------------------------
        'businessEnglishEmailPattern233': {
            id: 'businessEnglishEmailPattern233',
            name: '비즈니스 영어 이메일 패턴 233',
            publisher: '길벗이지톡',
            levels: 'Level 4-8',
            levelRange: [4, 8],
            category: 'Business English',
            target: '비즈니스 영어 학습자',
            coverImage: '/static/images/books/businessEnglishEmailPattern233_cover.png',
            description: '비즈니스 이메일에 필요한 233개 핵심 패턴을 학습하는 교재입니다.',
            objectives: ['비즈니스 이메일 마스터', '233개 패턴 습득', '상황별 이메일 작성', '전문적인 표현'],
            features: ['233개 핵심 패턴', '상황별 예시', '실전 연습', '표현 사전'],
            samples: ['/static/images/books/businessEnglishEmailPattern233_01.png', '/static/images/books/businessEnglishEmailPattern233_02.png', '/static/images/books/businessEnglishEmailPattern233_03.png', '/static/images/books/businessEnglishEmailPattern233_04.png', '/static/images/books/businessEnglishEmailPattern233_05.png', '/static/images/books/businessEnglishEmailPattern233_06.png', '/static/images/books/businessEnglishEmailPattern233_07.png', '/static/images/books/businessEnglishEmailPattern233_08.png']
        },
        'businessJapaneseEmailPattern200': {
            id: 'businessJapaneseEmailPattern200',
            name: '비즈니스 일본어 이메일 패턴 200',
            publisher: '다락원',
            levels: 'Level 4-8',
            levelRange: [4, 8],
            category: 'Business English',
            target: '비즈니스 일본어 학습자',
            coverImage: '/static/images/books/businessJapaneseEmailPattern200_cover.png',
            description: '비즈니스 일본어 이메일 작성을 위한 200개 패턴 교재입니다.',
            objectives: ['일본어 이메일 마스터', '200개 패턴 습득', '비즈니스 매너 학습', '실전 이메일 작성'],
            features: ['200개 핵심 패턴', '일본 비즈니스 문화', '상황별 예시', '경어 표현'],
            samples: ['/static/images/books/businessJapaneseEmailPattern200_01.png', '/static/images/books/businessJapaneseEmailPattern200_02.png', '/static/images/books/businessJapaneseEmailPattern200_03.png', '/static/images/books/businessJapaneseEmailPattern200_04.png', '/static/images/books/businessJapaneseEmailPattern200_05.png', '/static/images/books/businessJapaneseEmailPattern200_06.png', '/static/images/books/businessJapaneseEmailPattern200_07.png']
        },
        'businessJapaneseEmailPattern233': {
            id: 'businessJapaneseEmailPattern233',
            name: '비즈니스 일본어 이메일 패턴 233',
            publisher: '다락원',
            levels: 'Level 4-8',
            levelRange: [4, 8],
            category: 'Business English',
            target: '비즈니스 일본어 학습자',
            coverImage: '/static/images/books/businessJapaneseEmailPattern233_cover.png',
            description: '비즈니스 일본어 이메일 심화 과정입니다. 233개 패턴으로 완벽 대비합니다.',
            objectives: ['일본어 이메일 심화', '233개 패턴 마스터', '고급 비즈니스 표현', '전문적인 이메일'],
            features: ['233개 심화 패턴', '고급 경어 표현', '업종별 예시', '실전 연습'],
            samples: ['/static/images/books/businessJapaneseEmailPattern233_01.png', '/static/images/books/businessJapaneseEmailPattern233_02.png', '/static/images/books/businessJapaneseEmailPattern233_03.png', '/static/images/books/businessJapaneseEmailPattern233_04.png', '/static/images/books/businessJapaneseEmailPattern233_05.png', '/static/images/books/businessJapaneseEmailPattern233_06.png']
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
