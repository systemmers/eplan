# 🚀 Google App Engine 배포 체크리스트

ePlan 프로젝트를 GAE에 배포하기 전/후 확인사항입니다.

---

## ✅ 배포 전 체크리스트

### 1. 사전 요구사항

- [ ] **Google Cloud SDK 설치 완료**
  ```bash
  gcloud --version
  ```
  > 설치 안 됨: https://cloud.google.com/sdk/docs/install

- [ ] **GCP 계정 로그인**
  ```bash
  gcloud auth login
  ```

- [ ] **GCP 프로젝트 생성 또는 선택**
  ```bash
  # 새 프로젝트 생성
  gcloud projects create eplan-demo --name="ePlan Demo"

  # 또는 기존 프로젝트 선택
  gcloud projects list
  gcloud config set project [PROJECT_ID]
  ```

- [ ] **App Engine 활성화**
  ```bash
  gcloud app create --region=asia-northeast3
  ```
  > 리전은 한 번만 설정 가능합니다. 한국은 asia-northeast3 권장.

### 2. 프로젝트 파일 확인

- [ ] **필수 파일 존재 확인**
  ```bash
  ls -la app.yaml
  ls -la requirements.txt
  ls -la run.py
  ls -la config.py
  ls -la .gcloudignore
  ```

- [ ] **app.yaml 검증**
  - [ ] `runtime: python312` 확인
  - [ ] `entrypoint: gunicorn -b :$PORT run:app` 확인
  - [ ] `SECRET_KEY` 변경 (⚠️ 필수!)
    ```python
    # 새 SECRET_KEY 생성
    python -c "import secrets; print(secrets.token_hex(32))"
    ```
  - [ ] `STATIC_URL_PREFIX` 버킷 이름 확인

- [ ] **requirements.txt 검증**
  - [ ] `gunicorn==21.2.0` 포함 확인
  - [ ] 로컬에서 설치 테스트
    ```bash
    pip install -r requirements.txt
    ```

### 3. Cloud Storage 설정

- [ ] **버킷 생성 및 파일 업로드**

  **Windows:**
  ```bash
  scripts\upload_to_cloud_storage.bat
  ```

  **Mac/Linux:**
  ```bash
  chmod +x scripts/upload_to_cloud_storage.sh
  ./scripts/upload_to_cloud_storage.sh
  ```

- [ ] **업로드 확인**
  - 브라우저에서 접속 테스트:
    - https://storage.googleapis.com/eplan-static-files/images/company.jpg
    - https://storage.googleapis.com/eplan-static-files/videos/video1.mp4

- [ ] **공개 접근 권한 확인**
  ```bash
  gsutil iam get gs://eplan-static-files
  ```
  > `allUsers: roles/storage.objectViewer` 확인

### 4. 로컬 테스트 (선택사항)

- [ ] **로컬에서 프로덕션 모드 테스트**
  ```bash
  # Windows
  set FLASK_ENV=production
  set STATIC_URL_PREFIX=https://storage.googleapis.com/eplan-static-files
  python run.py

  # Mac/Linux
  export FLASK_ENV=production
  export STATIC_URL_PREFIX=https://storage.googleapis.com/eplan-static-files
  python run.py
  ```

- [ ] **http://localhost:5000 접속 확인**
  - [ ] 홈페이지 로딩
  - [ ] CSS 스타일 적용
  - [ ] 이미지 로딩 (Cloud Storage에서)

### 5. Git 커밋 확인

- [ ] **모든 변경사항 커밋됨**
  ```bash
  git status
  ```
  > "nothing to commit, working tree clean" 확인

- [ ] **원격 저장소 동기화**
  ```bash
  git push origin master
  ```

---

## 🚀 배포 실행

### Step 1: 배포 명령 실행

```bash
cd D:\projects\eplan  # 프로젝트 루트 디렉토리로 이동
gcloud app deploy
```

**예상 질문:**
- "Do you want to continue (Y/n)?" → **Y** 입력

**예상 시간:** 3-5분

**배포 로그 확인:**
- 빌드 진행 상황 출력됨
- "Deployed service [default] to [https://PROJECT_ID.appspot.com]" 메시지 확인

### Step 2: 배포 확인

- [ ] **웹사이트 자동 오픈**
  ```bash
  gcloud app browse
  ```

- [ ] **또는 직접 접속**
  - URL: `https://[PROJECT_ID].appspot.com`

---

## ✅ 배포 후 체크리스트

### 1. 기본 동작 확인

- [ ] **홈페이지 접속**
  - [ ] 페이지 로딩 성공
  - [ ] CSS 스타일 정상 적용
  - [ ] 레이아웃 정상 표시

- [ ] **정적 파일 로딩**
  - [ ] 이미지 표시 (Cloud Storage에서)
  - [ ] 비디오 재생 가능
  - [ ] CSS/JS 정상 로드

- [ ] **반응형 디자인**
  - [ ] 모바일 브라우저에서 확인
  - [ ] 태블릿 레이아웃 확인
  - [ ] 데스크톱 레이아웃 확인

### 2. 데이터베이스 초기화

⚠️ **중요: 배포 직후 데이터베이스가 비어있습니다!**

- [ ] **인스턴스 목록 확인**
  ```bash
  gcloud app instances list
  ```

- [ ] **SSH로 접속**
  ```bash
  gcloud app instances ssh [INSTANCE_ID] --service default
  ```
  > INSTANCE_ID는 위 명령에서 확인

- [ ] **데이터베이스 초기화**
  ```bash
  python init_db.py
  ```

- [ ] **초기화 성공 확인**
  - 출력 메시지에 "Database initialized successfully" 확인

- [ ] **SSH 종료**
  ```bash
  exit
  ```

### 3. 관리자 기능 테스트

- [ ] **관리자 로그인**
  - URL: `https://[PROJECT_ID].appspot.com/auth/login`
  - 기본 계정: `admin` / `admin123`

- [ ] **관리자 패널 접속**
  - URL: `https://[PROJECT_ID].appspot.com/admin`
  - 대시보드 로딩 확인

- [ ] **비밀번호 즉시 변경** (⚠️ 보안 필수)
  - 관리자 패널에서 비밀번호 변경

### 4. 게시판 기능 테스트

- [ ] **게시판 목록 확인**
  - 공지사항, 뉴스, 영어, 일본어, 중국어 카테고리 확인

- [ ] **게시글 작성 테스트**
  - 관리자 패널에서 새 게시글 작성
  - 게시글 발행 상태 설정
  - 공개 페이지에서 확인

- [ ] **게시글 조회**
  - 게시글 상세 페이지 접속
  - 조회수 증가 확인

### 5. 페이지 네비게이션 테스트

- [ ] **메인 메뉴**
  - [ ] 회사소개 페이지
  - [ ] 전화영어 페이지 및 하위 메뉴
  - [ ] 기업출강 페이지 및 하위 메뉴
  - [ ] Writing 첨삭 페이지
  - [ ] 게시판 카테고리

- [ ] **폼 제출 테스트**
  - [ ] 컨설팅 문의 폼
  - [ ] 강사 지원 폼

### 6. 로그 및 모니터링

- [ ] **실시간 로그 확인**
  ```bash
  gcloud app logs tail -s default
  ```
  - 에러 메시지 없는지 확인
  - 정상 요청 로그 확인

- [ ] **최근 로그 확인**
  ```bash
  gcloud app logs read --limit=50
  ```

- [ ] **GCP Console에서 모니터링**
  - https://console.cloud.google.com/appengine
  - 대시보드에서 트래픽, 에러율 확인

---

## 🐛 문제 해결

### 문제 1: 500 Internal Server Error

**원인:**
- 데이터베이스 미초기화
- 환경 변수 오류
- 코드 오류

**해결:**
```bash
# 로그 확인
gcloud app logs tail -s default

# 일반적인 해결책
gcloud app instances ssh [INSTANCE_ID] --service default
python init_db.py
exit
```

### 문제 2: 이미지가 표시되지 않음

**원인:**
- Cloud Storage 버킷 미생성
- 공개 권한 미설정
- URL 오타

**해결:**
```bash
# 버킷 확인
gsutil ls gs://eplan-static-files

# 공개 권한 재설정
gsutil iam ch allUsers:objectViewer gs://eplan-static-files

# 브라우저에서 직접 접속 테스트
# https://storage.googleapis.com/eplan-static-files/images/company.jpg
```

### 문제 3: 배포 실패 - "No module named 'gunicorn'"

**원인:**
- requirements.txt에 gunicorn 누락

**해결:**
```bash
# requirements.txt 확인
cat requirements.txt | grep gunicorn

# 없으면 추가
echo "gunicorn==21.2.0" >> requirements.txt
git add requirements.txt
git commit -m "fix: add gunicorn to requirements"
gcloud app deploy
```

### 문제 4: CSS/JS가 로드되지 않음

**원인:**
- app.yaml의 static handlers 오류
- 파일 경로 문제

**해결:**
- app.yaml에서 handlers 설정 확인
- 로그에서 404 에러 확인
- 파일 경로가 `app/static/css/`, `app/static/js/`인지 확인

---

## 📊 배포 성공 확인

모든 항목이 체크되면 배포 성공입니다! ✅

### 최종 확인 항목

- [x] 웹사이트 접속 가능
- [x] 정적 파일 정상 로딩
- [x] 데이터베이스 초기화 완료
- [x] 관리자 로그인 성공
- [x] 게시판 기능 정상
- [x] 로그에 에러 없음

### 배포 정보 기록

```
배포 일시: _______________
프로젝트 ID: _______________
URL: https://_________________.appspot.com
관리자 비밀번호 변경 완료: [ ]
```

---

## 🔄 업데이트 배포

코드 변경 후 재배포:

```bash
# 1. 변경사항 커밋
git add .
git commit -m "update: 변경 내용"
git push origin master

# 2. 재배포
gcloud app deploy

# 3. 배포 확인
gcloud app browse
gcloud app logs tail -s default
```

---

## 💰 비용 모니터링

- [ ] **GCP Console에서 비용 확인**
  - https://console.cloud.google.com/billing

- [ ] **예산 알림 설정** (권장)
  - 월 $20 초과 시 이메일 알림 설정

---

## 📝 다음 작업 (선택사항)

프로덕션 환경으로 전환하려면:

- [ ] SQLite → Cloud SQL 마이그레이션
- [ ] Secret Manager 통합
- [ ] CDN 활성화
- [ ] 자동 백업 설정
- [ ] 커스텀 도메인 연결

---

**작성일**: 2025-11-17
**버전**: 1.0
**대상**: 데모/프로토타입 배포
