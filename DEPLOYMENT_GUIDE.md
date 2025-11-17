# Google App Engine 배포 가이드

ePlan Flask 프로젝트를 Google App Engine에 배포하는 방법입니다.

## 🎯 배포 전략

이 가이드는 **데모/프로토타입용 빠른 배포**를 위한 것입니다:
- SQLite 임시 사용 (/tmp/eplan.db)
- Cloud Storage로 대용량 정적 파일 분리
- 최소 설정으로 빠른 배포

⚠️ **주의**: 프로덕션 환경에서는 Cloud SQL 사용을 권장합니다.

---

## 📋 사전 요구사항

### 1. Google Cloud SDK 설치

**Windows:**
https://cloud.google.com/sdk/docs/install 에서 설치 프로그램 다운로드

**설치 확인:**
```bash
gcloud --version
```

### 2. GCP 프로젝트 설정

```bash
# 1. GCP 로그인
gcloud auth login

# 2. 프로젝트 생성 (또는 기존 프로젝트 사용)
gcloud projects create eplan-demo --name="ePlan Demo"

# 3. 프로젝트 설정
gcloud config set project eplan-demo

# 4. App Engine 활성화
gcloud app create --region=asia-northeast3

# 5. 필요한 API 활성화
gcloud services enable appengine.googleapis.com
gcloud services enable storage-component.googleapis.com
```

---

## 🚀 배포 단계

### Step 1: Cloud Storage 설정 (15분)

대용량 정적 파일(이미지 46MB, 비디오 54MB)을 Cloud Storage로 업로드합니다.

**Windows:**
```bash
scripts\upload_to_cloud_storage.bat
```

**Mac/Linux:**
```bash
chmod +x scripts/upload_to_cloud_storage.sh
./scripts/upload_to_cloud_storage.sh
```

**수동 업로드 (스크립트 실패 시):**
```bash
# 버킷 생성
gsutil mb -l asia-northeast3 gs://eplan-static-files

# 파일 업로드
gsutil -m cp -r app/static/videos gs://eplan-static-files/
gsutil -m cp -r app/static/images gs://eplan-static-files/

# 공개 접근 권한 설정
gsutil iam ch allUsers:objectViewer gs://eplan-static-files
```

**확인:**
https://storage.googleapis.com/eplan-static-files/images/company.jpg

---

### Step 2: 첫 번째 배포 (5분)

```bash
# 현재 디렉토리 확인 (프로젝트 루트여야 함)
cd D:\projects\eplan

# 배포 실행
gcloud app deploy

# 배포 확인
gcloud app browse
```

**배포 중 질문:**
- "Do you want to continue (Y/n)?" → `Y` 입력
- 약 3-5분 소요

---

### Step 3: 데이터베이스 초기화 (5분)

배포 후 데이터베이스를 초기화해야 합니다.

#### 옵션 A: SSH로 직접 초기화 (권장)

```bash
# 1. 실행 중인 인스턴스 확인
gcloud app instances list

# 2. SSH 접속
gcloud app instances ssh [INSTANCE_ID] --service default

# 3. 데이터베이스 초기화
python init_db.py

# 4. 접속 종료
exit
```

#### 옵션 B: 로컬에서 DB 파일 업로드

```bash
# 1. 로컬에서 DB 생성
python init_db.py

# 2. 임시로 저장
cp eplan.db eplan_backup.db

# 3. 나중에 필요 시 인스턴스에 업로드
# (복잡하므로 옵션 A 권장)
```

---

### Step 4: 배포 확인 (5분)

#### 1. 웹사이트 접속
```bash
gcloud app browse
```

또는 직접 접속: `https://eplan-demo.appspot.com`

#### 2. 기능 테스트 체크리스트
- [ ] 홈페이지 로딩 확인
- [ ] 이미지 로딩 확인 (Cloud Storage에서)
- [ ] CSS 스타일 정상 적용
- [ ] 관리자 로그인 (/auth/login)
  - 기본 계정: admin / admin123
- [ ] 게시판 목록 확인
- [ ] 모바일 반응형 확인

#### 3. 로그 확인
```bash
# 실시간 로그
gcloud app logs tail -s default

# 최근 로그
gcloud app logs read --limit=50
```

---

## 🔧 설정 파일 설명

### 1. app.yaml
```yaml
runtime: python312           # Python 버전
entrypoint: gunicorn -b :$PORT run:app  # 앱 실행 명령

env_variables:
  FLASK_ENV: 'production'
  SECRET_KEY: 'demo-secret-key-change-in-production'  # ⚠️ 변경 필수
  STATIC_URL_PREFIX: 'https://storage.googleapis.com/eplan-static-files'

automatic_scaling:
  min_instances: 0  # 비용 절감: 미사용 시 인스턴스 종료
  max_instances: 5
```

### 2. config.py
```python
class ProductionConfig(Config):
    DEBUG = False
    # GAE에서는 /tmp만 쓰기 가능
    SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/eplan.db'
    # Cloud Storage URL
    STATIC_URL_PREFIX = os.environ.get('STATIC_URL_PREFIX', '')
```

---

## ⚠️ 중요 제약사항

### 1. SQLite 데이터 손실 위험
- **문제**: 인스턴스 재시작 시 `/tmp/eplan.db` 삭제됨
- **영향**: 모든 데이터 손실 (게시글, 문의 등)
- **대응**:
  - 정기적으로 DB 백업
  - 프로덕션에서는 Cloud SQL 사용

### 2. 데이터베이스 백업
```bash
# 백업
gcloud app instances ssh [INSTANCE_ID] --service default
cat /tmp/eplan.db > /tmp/backup.db
exit

# 복원
gcloud app instances ssh [INSTANCE_ID] --service default
python init_db.py
exit
```

### 3. 세션 관리
- **현재**: Flask 기본 세션 (쿠키)
- **제약**: 여러 인스턴스에서 세션 공유 안 됨
- **해결**: min_instances: 0으로 단일 인스턴스 유지 (데모용)

---

## 💰 예상 비용 (월간)

| 항목 | 사양 | 예상 비용 |
|------|------|-----------|
| App Engine | F1 (min_instances: 0) | $5-15 |
| Cloud Storage | 100GB 저장 | $3-5 |
| **총 예상 비용** | | **$8-20/월** |

**비용 절감 팁:**
- `min_instances: 0`: 미사용 시 인스턴스 자동 종료
- 개발/테스트 시에만 사용
- 장기 미사용 시 앱 삭제

---

## 🐛 문제 해결

### 문제 1: 배포 실패 - "No module named 'gunicorn'"
**해결:**
```bash
pip install -r requirements.txt
gcloud app deploy
```

### 문제 2: 이미지가 로드되지 않음
**해결:**
1. Cloud Storage 버킷 공개 확인:
```bash
gsutil iam get gs://eplan-static-files
```

2. 브라우저에서 직접 접속 테스트:
https://storage.googleapis.com/eplan-static-files/images/company.jpg

### 문제 3: 500 Internal Server Error
**해결:**
1. 로그 확인:
```bash
gcloud app logs tail -s default
```

2. 일반적인 원인:
   - 데이터베이스 미초기화 → `python init_db.py` 실행
   - SECRET_KEY 누락 → app.yaml 확인
   - 경로 오류 → 절대 경로 사용

### 문제 4: 데이터베이스가 비어있음
**해결:**
SSH로 접속하여 init_db.py 다시 실행

---

## 📝 업데이트 배포

코드 변경 후 재배포:
```bash
# 변경사항 커밋
git add .
git commit -m "update: 기능 개선"

# 재배포
gcloud app deploy

# 배포 버전 확인
gcloud app versions list
```

---

## 🗑️ 리소스 정리 (배포 중단)

### 앱 삭제 (비용 중단)
```bash
# 앱 버전 삭제
gcloud app versions delete [VERSION_ID]

# Cloud Storage 삭제
gsutil -m rm -r gs://eplan-static-files

# 프로젝트 전체 삭제 (주의!)
gcloud projects delete eplan-demo
```

---

## 🔐 보안 권장사항

### 1. SECRET_KEY 변경
**app.yaml** 수정:
```yaml
env_variables:
  SECRET_KEY: 'your-strong-random-secret-key-here'  # ⚠️ 필수 변경
```

SECRET_KEY 생성:
```python
import secrets
print(secrets.token_hex(32))
```

### 2. 관리자 비밀번호 변경
첫 배포 후 즉시 변경:
1. `/auth/login` 접속
2. admin / admin123 로그인
3. 관리자 패널에서 비밀번호 변경

---

## 📚 추가 리소스

- [Google App Engine 문서](https://cloud.google.com/appengine/docs)
- [Cloud Storage 문서](https://cloud.google.com/storage/docs)
- [Flask 프로덕션 모범 사례](https://flask.palletsprojects.com/en/3.0.x/deploying/)
- [GAE 가격 계산기](https://cloud.google.com/products/calculator)

---

## 🎓 다음 단계 (프로덕션 전환)

데모가 성공적이면 프로덕션 환경으로 업그레이드:

1. **Cloud SQL 마이그레이션**
   - SQLite → MySQL/PostgreSQL
   - 데이터 영구 저장

2. **Secret Manager 통합**
   - 환경 변수를 Secret Manager로 이동
   - 보안 강화

3. **성능 최적화**
   - CDN 활성화
   - min_instances 조정
   - 캐싱 추가

4. **모니터링 설정**
   - Cloud Logging
   - Cloud Monitoring
   - Error Reporting

5. **백업 자동화**
   - 데이터베이스 자동 백업
   - 재해 복구 계획

---

**작성일**: 2025-11-17
**버전**: 1.0 (데모/프로토타입용)
