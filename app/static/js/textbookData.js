// 교재 데이터
const textbookData = {
    'sc-starter': {
        id: 'sc-starter',
        name: 'Smart Choice Starter 1~5',
        publisher: 'Oxford University Press',
        levels: 'Level 1-5',
        coverImage: '/static/images/books_img/sc-starter.jpg',
        thumbnailImage: '/static/images/books_img/sc-starter.jpg',
        description: '초급 학습자를 위한 체계적인 영어 회화 교재입니다. 실생활에서 바로 사용할 수 있는 표현들을 중심으로 구성되어 있습니다.',
        objectives: [
            '기초 문법 패턴 습득',  
            '일상 회화 표현 학습',
            '듣기 및 말하기 능력 향상',
            '기본 어휘력 강화'
        ],
        samples: []
    },
    'sc-main': {
        id: 'sc-main',
        name: 'Smart Choice 1~5',
        publisher: 'Oxford University Press',
        levels: 'Level 6-10',
        coverImage: '/static/images/books_img/sc-main.jpg',
        thumbnailImage: '/static/images/books_img/sc-main.jpg',
        description: '중급 이상 학습자를 위한 심화 영어 회화 교재입니다. 다양한 주제와 상황을 다루며 실용적인 영어 실력을 키웁니다.',
        objectives: [
            '중급 문법 및 표현 마스터',
            '다양한 주제별 회화 연습',
            '실생활 영어 능력 향상',
            '고급 어휘 및 관용구 학습'
        ],
        samples: []
    },
    'sbs-1-3': {
        id: 'sbs-1-3',
        name: 'Side by Side 1~3',
        publisher: 'Pearson Education',
        levels: 'Level 1-3',
        coverImage: '/static/images/books_img/sbs-1-3.jpg',
        thumbnailImage: '/static/images/books_img/sbs-1-3.jpg',
        description: '전 세계적으로 검증된 영어 학습 교재입니다. 문법, 회화, 듣기, 읽기를 통합적으로 학습할 수 있습니다.',
        objectives: [
            '기초 영문법 체계적 학습',
            '4가지 영역 통합 학습',
            '반복 학습을 통한 패턴 습득',
            '실용적인 회화 능력 개발'
        ],
        samples: []
    },
    'sbs-4-7': {
        id: 'sbs-4-7',
        name: 'Side by Side 4~7',
        publisher: 'Pearson Education',
        levels: 'Level 4-7',
        coverImage: '/static/images/books_img/sbs-4-7.jpg',
        thumbnailImage: '/static/images/books_img/sbs-4-7.jpg',
        description: 'Side by Side 심화 과정으로 중급 이상의 영어 실력을 갖추게 됩니다.',
        objectives: [
            '중급 문법 심화 학습',
            '복잡한 문장 구조 이해',
            '고급 회화 표현 습득',
            '실전 영어 능력 강화'
        ],
        samples: []
    },
    'sbs-plus': {
        id: 'sbs-plus',
        name: 'Side by Side Plus',
        publisher: 'Pearson Education',
        levels: 'Level 8-10',
        coverImage: '/static/images/books_img/sbs-plus.jpg',
        thumbnailImage: '/static/images/books_img/sbs-plus.jpg',
        description: '고급 영어 학습자를 위한 완성 단계 교재입니다.',
        objectives: [
            '고급 영문법 완성',
            '유창한 회화 능력 개발',
            '다양한 상황 대처 능력',
            '원어민 수준의 표현력'
        ],
        samples: []
    },
    'touchstone-1-4': {
        id: 'touchstone-1-4',
        name: 'Touchstone 1~4',
        publisher: 'Cambridge University Press',
        levels: 'Level 2-7',
        coverImage: '/static/images/books_img/touchstone-1-4.jpg',
        thumbnailImage: '/static/images/books_img/touchstone-1-4.jpg',
        description: 'Cambridge 대학 출판부의 검증된 영어 교재로 미국식 영어를 체계적으로 학습합니다.',
        objectives: [
            '미국식 영어 표현 습득',
            '실제 대화 중심 학습',
            '문법과 회화의 조화',
            '자연스러운 영어 구사'
        ],
        samples: []
    },
    'touchstone-5-7': {
        id: 'touchstone-5-7',
        name: 'Touchstone 5~7',
        publisher: 'Cambridge University Press',
        levels: 'Level 5-8',
        coverImage: '/static/images/books_img/touchstone-5-7.jpg',
        thumbnailImage: '/static/images/books_img/touchstone-5-7.jpg',
        description: 'Touchstone 중급 과정으로 더욱 심화된 영어 능력을 개발합니다.',
        objectives: [
            '중급 회화 완성',
            '복잡한 주제 토론',
            '고급 어휘 확장',
            '자신감 있는 영어 구사'
        ],
        samples: []
    },
    'touchstone-8-10': {
        id: 'touchstone-8-10',
        name: 'Touchstone 8~10',
        publisher: 'Cambridge University Press',
        levels: 'Level 8-10',
        coverImage: '/static/images/books_img/touchstone-8-10.jpg',
        thumbnailImage: '/static/images/books_img/touchstone-8-10.jpg',
        description: '고급 영어 학습자를 위한 최상위 과정입니다.',
        objectives: [
            '전문적인 영어 구사',
            '학술적 토론 능력',
            '원어민 수준 달성',
            '비즈니스 영어 활용'
        ],
        samples: []
    },
    'interchange-intro': {
        id: 'interchange-intro',
        name: 'Interchange Intro~1',
        publisher: 'Cambridge University Press',
        levels: 'Level 1-3',
        coverImage: '/static/images/books_img/interchange-intro.jpg',
        thumbnailImage: '/static/images/books_img/interchange-intro.jpg',
        description: '초급 학습자를 위한 실용적인 커뮤니케이션 중심 교재입니다.',
        objectives: [
            '기초 회화 능력 개발',
            '실생활 커뮤니케이션 연습',
            '듣기 및 말하기 집중 학습',
            '문법과 어휘의 균형 잡힌 학습'
        ],
        samples: []
    },
    'interchange-2-3': {
        id: 'interchange-2-3',
        name: 'Interchange 2~3',
        publisher: 'Cambridge University Press',
        levels: 'Level 4-7',
        coverImage: '/static/images/books_img/interchange-2-3.jpg',
        thumbnailImage: '/static/images/books_img/interchange-2-3.jpg',
        description: '중급 학습자를 위한 종합 영어 교재입니다.',
        objectives: [
            '중급 회화 능력 강화',
            '다양한 주제 토론',
            '실용 문법 마스터',
            '유창성 향상'
        ],
        samples: []
    },
    'passages': {
        id: 'passages',
        name: 'Passages 1~2',
        publisher: 'Cambridge University Press',
        levels: 'Level 8-10',
        coverImage: '/static/images/books_img/passages.jpg',
        thumbnailImage: '/static/images/books_img/passages.jpg',
        description: '고급 학습자를 위한 심화 회화 및 독해 교재입니다.',
        objectives: [
            '고급 회화 및 독해 능력',
            '비판적 사고력 개발',
            '복잡한 주제 토론',
            '학술적 영어 실력 향상'
        ],
        samples: []
    },
    'american-headway': {
        id: 'american-headway',
        name: 'American Headway Starter~5',
        publisher: 'Oxford University Press',
        levels: 'Level 1-10',
        coverImage: '/static/images/books_img/american-headway.jpg',
        thumbnailImage: '/static/images/books_img/american-headway.jpg',
        description: '미국식 영어를 체계적으로 학습할 수 있는 종합 교재입니다.',
        objectives: [
            '미국식 영어 완전 습득',
            '4대 영역 통합 학습',
            '문법 및 어휘 체계적 학습',
            '실용적인 영어 능력 개발'
        ],
        samples: []
    },
    'speak-up-starter': {
        id: 'speak-up-starter',
        name: 'Speak Up Starter~3',
        publisher: 'Pearson Education',
        levels: 'Level 1-5',
        coverImage: '/static/images/books_img/speak-up-starter.jpg',
        thumbnailImage: '/static/images/books_img/speak-up-starter.jpg',
        description: '프리토킹 능력 개발을 위한 대화 중심 교재입니다.',
        objectives: [
            '자유로운 회화 능력',
            '주제별 토론 연습',
            '의견 표현 능력 향상',
            '자연스러운 대화 스킬'
        ],
        samples: []
    },
    'speak-up-main': {
        id: 'speak-up-main',
        name: 'Speak Up 1~5',
        publisher: 'Pearson Education',
        levels: 'Level 6-10',
        coverImage: '/static/images/books_img/speak-up-main.jpg',
        thumbnailImage: '/static/images/books_img/speak-up-main.jpg',
        description: '심화 프리토킹을 위한 토론 중심 교재입니다.',
        objectives: [
            '고급 회화 능력',
            '복잡한 주제 토론',
            '논리적 의견 전개',
            '설득력 있는 커뮤니케이션'
        ],
        samples: []
    },
    'lets-talk': {
        id: 'lets-talk',
        name: "Let's Talk 1~3",
        publisher: 'Cambridge University Press',
        levels: 'Level 1-5',
        coverImage: '/static/images/books_img/lets-talk.jpg',
        thumbnailImage: '/static/images/books_img/lets-talk.jpg',
        description: '실제 대화 상황을 통한 회화 연습 교재입니다.',
        objectives: [
            '실생활 대화 능력',
            '자연스러운 표현 학습',
            '토론 및 논의 기술',
            '유창성 향상'
        ],
        samples: []
    },
    'conversation-strategies': {
        id: 'conversation-strategies',
        name: 'Conversation Strategies',
        publisher: 'Cambridge University Press',
        levels: 'Level 7-10',
        coverImage: '/static/images/books_img/conversation-strategies.jpg',
        thumbnailImage: '/static/images/books_img/conversation-strategies.jpg',
        description: '효과적인 대화 전략을 배우는 고급 회화 교재입니다.',
        objectives: [
            '전략적 대화 능력',
            '상황별 대응 스킬',
            '효과적인 의사소통',
            '고급 회화 표현'
        ],
        samples: []
    },
    'real-english-1-4': {
        id: 'real-english-1-4',
        name: 'Real English Conversation 1~4',
        publisher: 'Pearson Education',
        levels: 'Level 2-7',
        coverImage: '/static/images/books_img/real-english-1-4.jpg',
        thumbnailImage: '/static/images/books_img/real-english-1-4.jpg',
        description: '실제 영어 회화 상황에 특화된 교재입니다.',
        objectives: [
            '실전 영어 회화',
            '상황별 표현 학습',
            '자연스러운 대화 연습',
            '실용 영어 마스터'
        ],
        samples: []
    },
    'real-english-5-7': {
        id: 'real-english-5-7',
        name: 'Real English Conversation 5~7',
        publisher: 'Pearson Education',
        levels: 'Level 5-8',
        coverImage: '/static/images/books_img/real-english-5-7.jpg',
        thumbnailImage: '/static/images/books_img/real-english-5-7.jpg',
        description: '심화 실전 영어 회화 교재입니다.',
        objectives: [
            '고급 회화 표현',
            '복잡한 상황 대응',
            '전문적인 영어 구사',
            '실전 영어 완성'
        ],
        samples: []
    },
    'advanced-discussion': {
        id: 'advanced-discussion',
        name: 'Advanced Discussion Topics',
        publisher: 'Cengage Learning',
        levels: 'Level 8-10',
        coverImage: '/static/images/books_img/advanced-discussion.jpg',
        thumbnailImage: '/static/images/books_img/advanced-discussion.jpg',
        description: '고급 주제에 대한 심도 있는 토론 교재입니다.',
        objectives: [
            '심화 토론 능력',
            '비판적 사고',
            '논리적 주장 전개',
            '학술적 토론 스킬'
        ],
        samples: []
    },
    'english-common-1-5': {
        id: 'english-common-1-5',
        name: 'English in Common 1~5',
        publisher: 'Pearson Education',
        levels: 'Level 1-5',
        coverImage: '/static/images/books_img/english-common-1-5.jpg',
        thumbnailImage: '/static/images/books_img/english-common-1-5.jpg',
        description: '일상 영어를 체계적으로 배우는 종합 교재입니다.',
        objectives: [
            '일상 영어 완성',
            '실용적인 회화',
            '기초부터 중급까지',
            '균형 잡힌 4대 영역'
        ],
        samples: []
    },
    'english-common-6-10': {
        id: 'english-common-6-10',
        name: 'English in Common 6~10',
        publisher: 'Pearson Education',
        levels: 'Level 6-10',
        coverImage: '/static/images/books_img/english-common-6-10.jpg',
        thumbnailImage: '/static/images/books_img/english-common-6-10.jpg',
        description: '중급부터 고급까지 영어 실력을 완성하는 교재입니다.',
        objectives: [
            '고급 영어 완성',
            '전문적인 회화',
            '학술 영어 능력',
            '원어민 수준 달성'
        ],
        samples: []
    },
    'impact-issues': {
        id: 'impact-issues',
        name: 'Impact Issues 1~3',
        publisher: 'Pearson Education',
        levels: 'Level 4-7',
        coverImage: '/static/images/books_img/impact-issues.jpg',
        thumbnailImage: '/static/images/books_img/impact-issues.jpg',
        description: '사회적 이슈를 다루는 토론 중심 교재입니다.',
        objectives: [
            '사회 이슈 토론',
            '비판적 사고 개발',
            '논리적 의견 제시',
            '설득력 있는 표현'
        ],
        samples: []
    },
    'toeic-speaking-basic': {
        id: 'toeic-speaking-basic',
        name: 'TOEIC Speaking Starter~Intermediate',
        publisher: 'ETS',
        levels: 'Level 1-4',
        coverImage: '/static/images/books_img/toeic-speaking-basic.jpg',
        thumbnailImage: '/static/images/books_img/toeic-speaking-basic.jpg',
        description: 'TOEIC Speaking 시험 대비 기초 과정입니다.',
        objectives: [
            'TOEIC Speaking 기초',
            '시험 유형 익히기',
            '기본 답변 전략',
            '점수 향상 기법'
        ],
        samples: []
    },
    'toeic-speaking-advanced': {
        id: 'toeic-speaking-advanced',
        name: 'TOEIC Speaking Advanced',
        publisher: 'ETS',
        levels: 'Level 5-8',
        coverImage: '/static/images/books_img/toeic-speaking-advanced.jpg',
        thumbnailImage: '/static/images/books_img/toeic-speaking-advanced.jpg',
        description: 'TOEIC Speaking 고급 과정입니다.',
        objectives: [
            '고득점 전략',
            '심화 답변 기법',
            '실전 모의고사',
            'Level 7-8 달성'
        ],
        samples: []
    },
    'toeic-speaking-expert': {
        id: 'toeic-speaking-expert',
        name: 'TOEIC Speaking Expert',
        publisher: 'ETS',
        levels: 'Level 8-10',
        coverImage: '/static/images/books_img/toeic-speaking-expert.jpg',
        thumbnailImage: '/static/images/books_img/toeic-speaking-expert.jpg',
        description: 'TOEIC Speaking 최고 득점을 위한 전문가 과정입니다.',
        objectives: [
            '만점 전략',
            '전문가 답변 기법',
            'Level 8 달성',
            '완벽한 시험 대비'
        ],
        samples: []
    },
    'opic-im': {
        id: 'opic-im',
        name: 'OPIc IM1~IM2',
        publisher: 'ACTFL',
        levels: 'Level 2-4',
        coverImage: '/static/images/books_img/opic-im.jpg',
        thumbnailImage: '/static/images/books_img/opic-im.jpg',
        description: 'OPIc IM 등급 달성을 위한 교재입니다.',
        objectives: [
            'OPIc 기초 학습',
            'IM 등급 전략',
            '주제별 답변 연습',
            '실전 대비'
        ],
        samples: []
    },
    'opic-ih': {
        id: 'opic-ih',
        name: 'OPIc IH',
        publisher: 'ACTFL',
        levels: 'Level 5-8',
        coverImage: '/static/images/books_img/opic-ih.jpg',
        thumbnailImage: '/static/images/books_img/opic-ih.jpg',
        description: 'OPIc IH 등급 달성을 위한 중급 교재입니다.',
        objectives: [
            'IH 등급 달성',
            '심화 답변 전략',
            '복잡한 주제 대응',
            '유창성 향상'
        ],
        samples: []
    },
    'opic-al': {
        id: 'opic-al',
        name: 'OPIc AL',
        publisher: 'ACTFL',
        levels: 'Level 8-10',
        coverImage: '/static/images/books_img/opic-al.jpg',
        thumbnailImage: '/static/images/books_img/opic-al.jpg',
        description: 'OPIc 최고 등급 AL 달성을 위한 고급 교재입니다.',
        objectives: [
            'AL 등급 달성',
            '전문가 수준 답변',
            '완벽한 유창성',
            '원어민 수준 대응'
        ],
        samples: []
    },
    'ielts-basic': {
        id: 'ielts-basic',
        name: 'IELTS Foundation~Intermediate',
        publisher: 'Cambridge University Press',
        levels: 'Level 1-5',
        coverImage: '/static/images/books_img/ielts-basic.jpg',
        thumbnailImage: '/static/images/books_img/ielts-basic.jpg',
        description: 'IELTS 기초부터 중급까지 대비하는 교재입니다.',
        objectives: [
            'IELTS 기초 다지기',
            '4대 영역 학습',
            'Band 5-6 달성',
            '시험 전략 수립'
        ],
        samples: []
    },
    'ielts-advanced': {
        id: 'ielts-advanced',
        name: 'IELTS Advanced~Expert',
        publisher: 'Cambridge University Press',
        levels: 'Level 7-10',
        coverImage: '/static/images/books_img/ielts-advanced.jpg',
        thumbnailImage: '/static/images/books_img/ielts-advanced.jpg',
        description: 'IELTS 고급 과정 및 고득점 달성 교재입니다.',
        objectives: [
            'Band 7-9 달성',
            '고급 전략 습득',
            '완벽한 시험 대비',
            '실전 모의고사'
        ],
        samples: []
    },
    'business-venture-1-2': {
        id: 'business-venture-1-2',
        name: 'Business Venture 1~2',
        publisher: 'Oxford University Press',
        levels: 'Level 1-4',
        coverImage: '/static/images/books_img/business-venture-1-2.jpg',
        thumbnailImage: '/static/images/books_img/business-venture-1-2.jpg',
        description: '비즈니스 영어 기초를 다지는 교재입니다.',
        objectives: [
            '비즈니스 영어 기초',
            '업무 회화 연습',
            '비즈니스 어휘 학습',
            '실무 영어 능력'
        ],
        samples: []
    },
    'business-venture-3': {
        id: 'business-venture-3',
        name: 'Business Venture 3',
        publisher: 'Oxford University Press',
        levels: 'Level 5-8',
        coverImage: '/static/images/books_img/business-venture-3.jpg',
        thumbnailImage: '/static/images/books_img/business-venture-3.jpg',
        description: '중급 비즈니스 영어 교재입니다.',
        objectives: [
            '실무 영어 심화',
            '비즈니스 커뮤니케이션',
            '회의 및 프레젠테이션',
            '협상 영어'
        ],
        samples: []
    },
    'business-venture-plus': {
        id: 'business-venture-plus',
        name: 'Business Venture Plus',
        publisher: 'Oxford University Press',
        levels: 'Level 8-10',
        coverImage: '/static/images/books_img/business-venture-plus.jpg',
        thumbnailImage: '/static/images/books_img/business-venture-plus.jpg',
        description: '고급 비즈니스 영어 완성 교재입니다.',
        objectives: [
            '전문 비즈니스 영어',
            '경영 영어',
            '국제 비즈니스',
            '리더십 커뮤니케이션'
        ],
        samples: []
    },
    'market-leader-basic': {
        id: 'market-leader-basic',
        name: 'Market Leader Elementary~Pre-Intermediate',
        publisher: 'Pearson Education',
        levels: 'Level 1-5',
        coverImage: '/static/images/books_img/market-leader-basic.jpg',
        thumbnailImage: '/static/images/books_img/market-leader-basic.jpg',
        description: '비즈니스 영어의 표준 교재, 기초 과정입니다.',
        objectives: [
            '비즈니스 영어 표준',
            '실제 비즈니스 사례',
            '업무 영어 능력',
            '국제 비즈니스 환경'
        ],
        samples: []
    },
    'market-leader-advanced': {
        id: 'market-leader-advanced',
        name: 'Market Leader Intermediate~Advanced',
        publisher: 'Pearson Education',
        levels: 'Level 7-10',
        coverImage: '/static/images/books_img/market-leader-advanced.jpg',
        thumbnailImage: '/static/images/books_img/market-leader-advanced.jpg',
        description: 'Market Leader 고급 과정으로 전문 비즈니스 영어를 완성합니다.',
        objectives: [
            '전문 비즈니스 영어',
            '경영 전략 토론',
            '글로벌 비즈니스',
            '리더십 영어'
        ],
        samples: []
    },
    'business-result': {
        id: 'business-result',
        name: 'Business Result Elementary~Advanced',
        publisher: 'Oxford University Press',
        levels: 'Level 1-10',
        coverImage: '/static/images/books_img/business-result.jpg',
        thumbnailImage: '/static/images/books_img/business-result.jpg',
        description: '실무 중심 비즈니스 영어 종합 교재입니다.',
        objectives: [
            '실무 영어 완성',
            '비즈니스 상황 대응',
            '효과적인 커뮤니케이션',
            '글로벌 업무 능력'
        ],
        samples: []
    },
    'kids-box-starter': {
        id: 'kids-box-starter',
        name: 'Kids Box Starter~2',
        publisher: 'Cambridge University Press',
        levels: 'Level 1-4',
        coverImage: '/static/images/books_img/kids-box-starter.jpg',
        thumbnailImage: '/static/images/books_img/kids-box-starter.jpg',
        description: '어린이를 위한 재미있는 영어 학습 교재입니다.',
        objectives: [
            '영어에 대한 흥미 유발',
            '기초 단어 및 표현',
            '파닉스 학습',
            '영어에 대한 자신감'
        ],
        samples: []
    },
    'kids-box-3-5': {
        id: 'kids-box-3-5',
        name: 'Kids Box 3~5',
        publisher: 'Cambridge University Press',
        levels: 'Level 4-7',
        coverImage: '/static/images/books_img/kids-box-3-5.jpg',
        thumbnailImage: '/static/images/books_img/kids-box-3-5.jpg',
        description: '어린이 중급 영어 학습 교재입니다.',
        objectives: [
            '영어 실력 향상',
            '독해 능력 개발',
            '작문 기초',
            '영어 사고력 향상'
        ],
        samples: []
    },
    'kids-box-6-8': {
        id: 'kids-box-6-8',
        name: 'Kids Box 6~8',
        publisher: 'Cambridge University Press',
        levels: 'Level 7-10',
        coverImage: '/static/images/books_img/kids-box-6-8.jpg',
        thumbnailImage: '/static/images/books_img/kids-box-6-8.jpg',
        description: '어린이 고급 영어 학습 교재입니다.',
        objectives: [
            '고급 영어 능력',
            '논리적 사고',
            '창의적 표현',
            '학술 영어 준비'
        ],
        samples: []
    },
    'big-english-starter': {
        id: 'big-english-starter',
        name: 'Big English Starter~3',
        publisher: 'Pearson Education',
        levels: 'Level 1-5',
        coverImage: '/static/images/books_img/big-english-starter.jpg',
        thumbnailImage: '/static/images/books_img/big-english-starter.jpg',
        description: '어린이를 위한 종합 영어 교재입니다.',
        objectives: [
            '영어 기초 완성',
            '4대 영역 통합',
            '재미있는 학습',
            '체계적인 학습'
        ],
        samples: []
    },
    'big-english-4-6': {
        id: 'big-english-4-6',
        name: 'Big English 4~6',
        publisher: 'Pearson Education',
        levels: 'Level 6-10',
        coverImage: '/static/images/books_img/big-english-4-6.jpg',
        thumbnailImage: '/static/images/books_img/big-english-4-6.jpg',
        description: '어린이 심화 영어 교재입니다.',
        objectives: [
            '영어 실력 완성',
            '독립적 학습 능력',
            '비판적 사고',
            '글로벌 마인드'
        ],
        samples: []
    }
};
