@echo off
REM Cloud Storage 정적 파일 업로드 스크립트 (Windows)
REM 사용법: scripts\upload_to_cloud_storage.bat

setlocal

set BUCKET_NAME=eplan-static-files
set REGION=asia-northeast3

echo ================================
echo Cloud Storage 업로드 시작
echo ================================

REM 1. 버킷 생성 (이미 존재하면 에러 무시)
echo.
echo [1/4] Cloud Storage 버킷 생성 중...
gsutil mb -l %REGION% gs://%BUCKET_NAME% 2>nul || echo 버킷이 이미 존재합니다.

REM 2. 비디오 파일 업로드
echo.
echo [2/4] 비디오 파일 업로드 중... (54MB, 시간이 걸릴 수 있습니다)
if exist "app\static\videos" (
    gsutil -m cp -r app\static\videos gs://%BUCKET_NAME%/
    echo ✓ 비디오 파일 업로드 완료
) else (
    echo ⚠ app\static\videos 디렉토리가 없습니다.
)

REM 3. 이미지 파일 업로드
echo.
echo [3/4] 이미지 파일 업로드 중... (46MB)
if exist "app\static\images" (
    gsutil -m cp -r app\static\images gs://%BUCKET_NAME%/
    echo ✓ 이미지 파일 업로드 완료
) else (
    echo ⚠ app\static\images 디렉토리가 없습니다.
)

REM 4. 공개 접근 권한 설정
echo.
echo [4/4] 공개 접근 권한 설정 중...
gsutil iam ch allUsers:objectViewer gs://%BUCKET_NAME%
echo ✓ 공개 접근 권한 설정 완료

echo.
echo ================================
echo 업로드 완료!
echo ================================
echo.
echo 정적 파일 URL: https://storage.googleapis.com/%BUCKET_NAME%
echo.
echo 예시:
echo   - 이미지: https://storage.googleapis.com/%BUCKET_NAME%/images/company.jpg
echo   - 비디오: https://storage.googleapis.com/%BUCKET_NAME%/videos/video1.mp4
echo.

pause
