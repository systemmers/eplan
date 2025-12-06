// 커리큘럼 시스템 - 통합 모달 버전
// ePlan 프로젝트 - textbook-modal 통합

/**
 * 커리큘럼 모달 네임스페이스
 * textbook-modal (이미지 슬라이더 포함)을 사용하는 통합 버전
 */
const CurriculumModal = {
    currentTextbooks: [],
    currentIndex: 0,

    /**
     * 모달 열기
     * @param {string|array} textbookIdsOrId - 교재 ID 또는 ID 배열
     * @param {string} initialId - 초기 표시할 교재 ID
     */
    open: function(textbookIdsOrId, initialId) {
        // 배열/단일 ID 모두 처리
        const ids = Array.isArray(textbookIdsOrId) ? textbookIdsOrId : [textbookIdsOrId];

        if (ids.length === 0) return;

        this.currentTextbooks = ids;
        const displayId = initialId || ids[0];
        this.currentIndex = ids.indexOf(displayId);
        if (this.currentIndex === -1) this.currentIndex = 0;

        // textbookData.textbooks에서 데이터 가져오기 (통합된 데이터 소스)
        const data = this.getTextbookData(displayId);
        if (!data) {
            console.warn('교재 데이터를 찾을 수 없습니다:', displayId);
            return;
        }

        const modal = document.getElementById('textbook-modal');
        if (!modal) {
            console.warn('textbook-modal 요소를 찾을 수 없습니다. curriculum_modal() 매크로가 포함되었는지 확인하세요.');
            return;
        }

        // 모달 콘텐츠 업데이트
        this.updateModalContent(data);

        // 다중 교재 네비게이션 렌더링
        this.renderTextbookNav(ids, displayId);

        // 이미지 슬라이더 초기화 보장 후 이미지 설정
        if (typeof ModalImageSlider !== 'undefined') {
            // 슬라이더 트랙이 없거나 DOM에 연결되지 않은 경우 재초기화
            if (!ModalImageSlider.track || !ModalImageSlider.track.parentElement) {
                ModalImageSlider.init();
            }
            // 초기화 완료 후 이미지 설정
            const images = this.getSliderImages(data);
            ModalImageSlider.setImages(images);
        }

        // 모달 표시
        modal.classList.add('is-active', 'textbook-modal--with-slider');
        document.body.style.overflow = 'hidden';
    },

    /**
     * 교재 데이터 가져오기 (다양한 데이터 소스 지원)
     * @param {string} textbookId - 교재 ID
     * @returns {object|null} 교재 데이터
     */
    getTextbookData: function(textbookId) {
        // 1. 통합된 textbookData.textbooks에서 찾기
        if (typeof textbookData !== 'undefined' && textbookData.textbooks && textbookData.textbooks[textbookId]) {
            return textbookData.textbooks[textbookId];
        }

        // 2. 레거시 curriculumTextbookData에서 찾기 (하위 호환성)
        if (typeof curriculumTextbookData !== 'undefined' && curriculumTextbookData[textbookId]) {
            return curriculumTextbookData[textbookId];
        }

        // 3. main.js의 textbookGalleryData에서 찾기 (하위 호환성)
        if (typeof textbookGalleryData !== 'undefined' && textbookGalleryData[textbookId]) {
            const galleryData = textbookGalleryData[textbookId];
            // 갤러리 데이터 포맷을 통합 포맷으로 변환
            return {
                id: textbookId,
                name: galleryData.title,
                publisher: galleryData.category || '출판사 미정',
                levels: galleryData.level,
                description: galleryData.description,
                objectives: galleryData.features || [],
                features: galleryData.features || [],
                coverImage: galleryData.image,
                samples: galleryData.samples || [],
                target: galleryData.target
            };
        }

        return null;
    },

    /**
     * 이미지 경로 정규화
     * 상대 경로를 절대 경로로 변환하고, 유효한 경로인지 확인
     * @param {string} imagePath - 원본 이미지 경로
     * @returns {string} 정규화된 이미지 경로
     */
    normalizeImagePath: function(imagePath) {
        // 빈 경로 또는 유효하지 않은 경로 처리
        if (!imagePath || typeof imagePath !== 'string') {
            return '/static/images/placeholder-book.png';
        }

        // 이미 절대 경로(/로 시작)이거나 URL인 경우 그대로 반환
        if (imagePath.startsWith('/') || imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }

        // 상대 경로인 경우 /static/images/books/ 기준으로 변환
        return '/static/images/books/' + imagePath;
    },

    /**
     * 슬라이더 이미지 배열 가져오기
     * @param {object} data - 교재 데이터
     * @returns {array} 이미지 URL 배열
     */
    getSliderImages: function(data) {
        const images = [];

        // 커버 이미지 추가 (경로 정규화 적용)
        if (data.coverImage) {
            images.push(this.normalizeImagePath(data.coverImage));
        }

        // 샘플 이미지 추가 (경로 정규화 및 중복 제거)
        if (data.samples && Array.isArray(data.samples)) {
            data.samples.forEach(sample => {
                const normalizedPath = this.normalizeImagePath(sample);
                // 이미 추가된 이미지와 중복되지 않으면 추가
                if (!images.includes(normalizedPath)) {
                    images.push(normalizedPath);
                }
            });
        }

        // 이미지가 없으면 기본 이미지 사용
        if (images.length === 0) {
            images.push('/static/images/placeholder-book.png');
        }

        return images;
    },

    /**
     * 모달 콘텐츠 업데이트
     * @param {object} data - 교재 데이터
     */
    updateModalContent: function(data) {
        // 제목
        const titleEl = document.getElementById('textbook-modal-title');
        if (titleEl) titleEl.textContent = data.name || data.title || '교재명';

        // 출판사
        const publisherEl = document.getElementById('textbook-modal-publisher');
        if (publisherEl) publisherEl.textContent = data.publisher || '출판사';

        // 레벨
        const levelEl = document.getElementById('textbook-modal-level');
        if (levelEl) levelEl.textContent = data.levels || data.level || '레벨';

        // 설명
        const descEl = document.getElementById('textbook-modal-description');
        if (descEl) descEl.textContent = data.description || '교재 설명이 없습니다.';

        // 학습 목표
        const objectivesEl = document.getElementById('textbook-modal-objectives');
        if (objectivesEl) {
            const objectives = data.objectives || [];
            objectivesEl.innerHTML = objectives.map(obj => `<li>${obj}</li>`).join('');
        }

        // 특징
        const featuresEl = document.getElementById('textbook-modal-features');
        if (featuresEl) {
            const features = data.features || [];
            featuresEl.innerHTML = features.map(f => `<li>${f}</li>`).join('');
        }
    },

    /**
     * 다중 교재 네비게이션 렌더링
     * @param {array} ids - 교재 ID 배열
     * @param {string} activeId - 현재 활성화된 교재 ID
     */
    renderTextbookNav: function(ids, activeId) {
        const navContainer = document.getElementById('textbook-modal-nav');
        if (!navContainer) return;

        // 단일 교재인 경우 네비게이션 숨김
        if (ids.length <= 1) {
            navContainer.style.display = 'none';
            navContainer.innerHTML = '';
            return;
        }

        navContainer.style.display = 'block';
        navContainer.innerHTML = `
            <div class="textbook-modal__nav-title">
                📚 이 셀에 포함된 교재 (${ids.length}개)
            </div>
            <div class="textbook-modal__nav-grid">
                ${ids.map(id => {
                    const tbData = this.getTextbookData(id);
                    if (!tbData) return '';
                    const isActive = id === activeId ? 'is-active' : '';
                    const coverImage = tbData.coverImage || tbData.image || '/static/images/placeholder-book.png';
                    return `
                        <button class="textbook-modal__nav-item ${isActive}"
                                data-textbook-id="${id}"
                                type="button"
                                aria-label="${tbData.name || tbData.title}">
                            <img src="${coverImage}" alt="${tbData.name || tbData.title}" onerror="this.style.display='none'">
                            <span>${tbData.name || tbData.title}</span>
                        </button>
                    `;
                }).join('')}
            </div>
        `;

        // 네비게이션 버튼 클릭 이벤트
        navContainer.querySelectorAll('.textbook-modal__nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const textbookId = btn.dataset.textbookId;
                this.switchContent(textbookId);
            });
        });
    },

    /**
     * 썸네일 클릭 시 해당 교재로 전환
     * @param {string} textbookId - 교재 ID
     */
    switchContent: function(textbookId) {
        if (this.currentTextbooks.length === 0) return;

        // 동일한 모달 재호출하여 내용 교체
        this.open(this.currentTextbooks, textbookId);
    },

    /**
     * 모달 닫기
     */
    close: function() {
        const modal = document.getElementById('textbook-modal');
        if (modal) {
            modal.classList.remove('is-active', 'textbook-modal--with-slider');
            document.body.style.overflow = '';
        }
    },

    /**
     * 모달 이벤트 리스너 초기화
     */
    initEvents: function() {
        const modal = document.getElementById('textbook-modal');
        if (!modal) return;

        // 이미 초기화되었으면 스킵 (중복 방지)
        if (modal.dataset.curriculumEventsInitialized) return;
        modal.dataset.curriculumEventsInitialized = 'true';

        // 모달 backdrop 클릭 시 닫기
        const backdrop = modal.querySelector('.modal__backdrop, .textbook-modal__backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', () => this.close());
        }

        // 닫기 버튼 클릭
        const closeBtn = modal.querySelector('.modal__close, .textbook-modal__close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // ESC 키로 모달 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                this.close();
            }
        });
    }
};

/**
 * 커리큘럼 테이블 관리 네임스페이스
 */
const CurriculumTable = {
    /**
     * 랜덤 교재 배치 함수 (데모용)
     * 실제 프로젝트에서는 서버에서 데이터를 받아 사용
     */
    populateRandomTextbooks: function() {
        // 통합된 데이터 소스 사용
        const textbooks = (typeof textbookData !== 'undefined' && textbookData.textbooks)
            ? textbookData.textbooks
            : (typeof curriculumTextbookData !== 'undefined' ? curriculumTextbookData : {});

        const allTextbookIds = Object.keys(textbooks);
        const cells = document.querySelectorAll('.textbook-cell');

        cells.forEach(cell => {
            const content = cell.querySelector('.textbook-cell-content');
            if (!content) return;

            // 1-5개 랜덤 개수
            const count = Math.floor(Math.random() * 5) + 1;

            // 랜덤 교재 선택
            const shuffled = [...allTextbookIds].sort(() => Math.random() - 0.5);
            const selectedIds = shuffled.slice(0, count);

            // 셀에 교재 ID 배열 저장
            cell.setAttribute('data-textbook-ids', JSON.stringify(selectedIds));
            cell.setAttribute('data-first-textbook', selectedIds[0]);

            // 이미지 컨테이너 생성
            const imagesContainer = document.createElement('div');
            imagesContainer.className = 'textbook-images';

            // 이미지 추가
            selectedIds.forEach(id => {
                const data = textbooks[id];
                if (!data) return;

                const img = document.createElement('img');
                img.src = data.coverImage || data.image;
                img.alt = data.name || data.title;
                img.className = 'textbook-thumbnail';
                img.onerror = function() { this.style.display = 'none'; };

                // 이미지 클릭: 해당 교재만 모달 표시
                img.onclick = function(e) {
                    e.stopPropagation();
                    CurriculumModal.open([id], id);
                };
                imagesContainer.appendChild(img);
            });

            // 기존 이미지 제거하고 새로 추가
            const oldImages = content.querySelector('.textbook-images');
            if (oldImages) {
                oldImages.remove();
            }

            content.appendChild(imagesContainer);
        });

        // 셀 클릭 이벤트 등록
        this.attachCellClickEvents();
    },

    /**
     * 셀 클릭 이벤트 등록 함수
     */
    attachCellClickEvents: function() {
        // 중복 이벤트 바인딩 방지
        const cells = document.querySelectorAll('.textbook-cell:not([data-events-bound])');

        cells.forEach(cell => {
            // 기존 onclick 속성 제거
            cell.removeAttribute('onclick');

            const textbookIdsJson = cell.getAttribute('data-textbook-ids');
            if (!textbookIdsJson) return;

            let ids;
            try {
                ids = JSON.parse(textbookIdsJson);
            } catch (e) {
                console.error('교재 ID 파싱 오류:', e);
                return;
            }

            if (!ids || ids.length === 0) return;

            const firstTextbook = cell.getAttribute('data-first-textbook') || ids[0];

            // 셀 클릭 이벤트 등록
            cell.addEventListener('click', function(e) {
                // 이미지 클릭은 별도 처리하므로 무시
                if (e.target.classList.contains('textbook-thumbnail')) return;
                CurriculumModal.open(ids, firstTextbook);
            });

            // 썸네일 이미지 클릭 이벤트 등록
            const thumbnails = cell.querySelectorAll('.textbook-thumbnail');
            thumbnails.forEach((img, index) => {
                img.style.cursor = 'pointer';
                img.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // 해당 이미지의 교재 ID로 모달 열기
                    const targetId = ids[index] || ids[0];
                    CurriculumModal.open(ids, targetId);
                });
            });

            // 중복 바인딩 방지 마킹
            cell.setAttribute('data-events-bound', 'true');
        });
    }
};

/**
 * 커리큘럼 시스템 초기화
 * DOMContentLoaded 및 HTMX afterSwap 이벤트에서 호출
 */
function initCurriculumSystem() {
    // 모달 이벤트 초기화
    CurriculumModal.initEvents();

    // 셀 클릭 이벤트 등록
    CurriculumTable.attachCellClickEvents();

    // ModalImageSlider 초기화 (main.js에서 정의되어 있으면)
    if (typeof ModalImageSlider !== 'undefined' && typeof ModalImageSlider.init === 'function') {
        // main.js에서 이미 초기화되었을 수 있으므로 트랙 존재 확인
        if (!ModalImageSlider.track) {
            ModalImageSlider.init();
        }
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initCurriculumSystem);

// HTMX 호환성 - 동적 콘텐츠 로드 시에도 초기화
document.body.addEventListener('htmx:afterSwap', function(event) {
    // main-content가 업데이트되었을 때만 재초기화
    if (event.detail.target.id === 'main-content') {
        initCurriculumSystem();
    }
});
