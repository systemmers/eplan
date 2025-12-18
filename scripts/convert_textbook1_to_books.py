"""
textbook1 -> books 이미지 변환 스크립트
원본: _dev_docs/textbook1/
대상: app/static/images/books/

규칙:
- _0.png -> _cover.png (커버 이미지)
- _1.png -> _01.png (내부 이미지)
- _2.png -> _02.png 등

지원 패턴:
- 패턴 A: [파일명]_[숫자].png (예: Business Partner A2_0.png)
- 패턴 B: [파일명] [2자리숫자].png (예: 다락원 일본어 마스터 01.png)
"""

import os
import re
import shutil
from pathlib import Path

# 경로 설정
BASE_DIR = Path(__file__).parent.parent
SOURCE_DIR = BASE_DIR / "_dev_docs" / "textbook1"
TARGET_DIR = BASE_DIR / "app" / "static" / "images" / "books"

# 매핑 테이블: 원본 파일명 프리픽스 -> camelCase ID
MAPPING = {
    # 영어 - 비즈니스
    "Business Partner A2": "businessPartnerA2",
    "Business Partner B2+": "businessPartnerB2Plus",
    "Business Result_Upper-Intermediate": "businessResultUpperIntermediate",
    "Business Venture 1": "businessVenture1",
    "Business Venture 2": "businessVenture2",
    "English for Meetings": "englishForMeetings",
    "English for negotiation": "englishForNegotiation",
    "English for Presentations": "englishForPresentations",
    "English for Socializing": "englishForSocializing",
    "English for Telephoning": "englishForTelephoning",
    "Profile 1": "profile1",
    "Profile 2": "profile2",
    "Profile 3": "profile3",

    # 영어 - 시험대비
    "Hackers TOEIC SPEAKING Start": "hackersToeicSpeakingStart",
    "Hackers TOEIC SPEAKING Lv6": "hackersToeicSpeakingLv6",
    "ackers TOEIC SPEAKING Lv7,8": "hackersToeicSpeakingLv78",
    "해커스토익스피킹 실전모의고사": "hackersToeicSpeakingMock",
    "Exploring English 1": "exploringEnglish1",
    "Exploring English 2": "exploringEnglish2",
    "Exploring English 3": "exploringEnglish3",
    "Exploring English 4": "exploringEnglish4",
    "Exploring English 5": "exploringEnglish5",
    "Smart English Starter": "smartEnglishStarter",
    "Smart English 1": "smartEnglish1",
    "Smart English 2": "smartEnglish2",
    "Smart English 3": "smartEnglish3",
    "Smart English 4": "smartEnglish4",
    "Smart English 5": "smartEnglish5",
    "Smart English 6": "smartEnglish6",

    # 영어 - 주제토론/일반
    "영어회화 핵심패턴 233 중고급편": "englishCorePattern233Advanced",
    "바로 통하는 실전 토론 영어": "debateEnglish",
    "Harvard Business Review Daily": "hbrDaily",
    "Harvard Business Review Orange Book": "hbrOrange",
    "Harvard Business Review Orange Book2": "hbrOrange2",
    "World English 3 with My World English": "worldEnglish3",
    "만만하게 시작하는 왕초보 영어 첫걸음 완성편": "easyEnglishBeginner",
    "Jazz English1": "jazzEnglish1",
    "Jazz English2": "jazzEnglish2",

    # 중국어 - 일반회화
    "맛있는중국어1(첫걸음)": "deliciousChinese1",
    "맛있는중국어2(기초회화)": "deliciousChinese2",
    "맛있는중국어3(초급패턴1)": "deliciousChinese3",
    "맛있는중국어4(초급패턴2)": "deliciousChinese4",
    "맛있는중국어5(스피킹)": "deliciousChinese5",
    "맛있는중국어6(중국통)": "deliciousChinese6",
    "다락원중국어마스터1": "chineseMaster1",
    "다락원중국어마스터2": "chineseMaster2",
    "중국어마스터1": "chineseMasterOld1",
    "중국어마스터2": "chineseMaster2",
    "중국어마스터3": "chineseMaster3",
    "중국어마스터4": "chineseMaster4",
    "중국어마스터5": "chineseMaster5",
    "중국어마스터6": "chineseMaster6",
    "신공략중국어프리토킹": "freeTalkChinese",
    "해커스 여행 중국어 10분의 기적": "hackersTravelChinese",
    "끝장중국어 기초끝장내기": "finishChineseBasic",
    "끝장 중국어 생활회화 끝장내기": "finishChineseConversation",

    # 중국어 - 비즈니스
    "OK 비즈니스 중국어": "okBusinessChinese",
    "중국어비지니스 실무중고급": "businessChinesePractice",
    "나의 겁없는 중국출장 중국어": "fearlessBusinessTripChinese",

    # 중국어 - 시험대비
    "다락원 TSC 마스터": "tscMaster",
    "통쾌하게 통과하기 TSC START편": "tscStart",
    "통쾌하게 통과하기 TSC BASIC편": "tscBasic",
    "통쾌하게 통과하기 TSC Booster편": "tscBooster",
    "통쾌하게 통과하기 TSC Higher편": "tscHigher",
    "통쾌하게 통과하기 TSC Master편": "tscMasterLevel",
    "한달에끝내는TSC첫걸음4급공략": "tscLevel4",
    "초단기신BCT Speaking 공략": "bctSpeaking",
    "신HSK모의고사2급": "hsk2Mock",
    "신HSK모의고사4급": "hsk4Mock",
    "신HSK모의고사5급": "hsk5Mock",
    "중국어뱅크 신 HSK 6급 실전모의고사": "hsk6Mock",

    # 독일어
    "내게는 특별한 독일어를 부탁해 첫걸음": "germanBeginner",
    "독일어 중고급의 모든 것": "germanIntermediate",

    # 스페인어
    "내게는 특별한 스페인어를 부탁해 첫걸음": "spanishBeginner",
    "NUEVO ESPANOL1": "nuevoEspanol1",
    "NUEVO ESPANOL2": "nuevoEspanol2",
    "NUEVO ESPANOL3": "nuevoEspanol3",
    "NUEVO ESPANOL4": "nuevoEspanol4",
    "FLEX UP 스페인어": "flexSpanish",
    "Entorno laboral Nivel A1-B1": "entornoLaboralA1B1",
    "Entorno Empresarial Nivel B2": "entornoEmpresarialB2",
    "Preparacion al DELE. Nivel A2": "deleA2",

    # 프랑스어
    "festival1": "festival1",
    "festival2": "festival2",
    "festival3": "festival3",

    # 베트남어
    "가장 쉬운 독학 베트남어 첫걸음": "easiestVietnamese",
    "패턴의 법칙 베트남어 첫걸음": "patternVietnamese",
    "The 바른 베트남어 Step 2": "barunVietnamese2",
    "베트남어 중고급의 모든것": "vietnameseIntermediate",

    # 러시아어
    "내게는 특별한 러시아어를 부탁해 첫걸음": "russianBeginner",
    "중급 러시아어": "russianIntermediate",

    # 아랍어
    "The 바른 아랍어 Step 1": "barunArabic1",
    "The 바른 아랍어 Step 2": "barunArabic2",

    # 태국어
    "The 바른 태국어 첫걸음": "barunThai",
    "태국어 표준교재A0": "thaiStandardA0",
    "태국어 표준교재A1": "thaiStandardA1",
    "태국어 표준교재A2": "thaiStandardA2",
    "태국어 표준교재B1": "thaiStandardB1",
    "태국어 표준교재B2": "thaiStandardB2",

    # 인도네시아어
    "The 바른 인도네시아어 Step1": "barunIndonesian1",
    "The 바른 인도네시아어 Step2": "barunIndonesian2",

    # 체코어
    "The 바른 체코어": "barunCzech",
    "Say it in Czech": "sayItCzech",
    "Cestina-pro-cizince-a1-a-a2": "cestinaCizince",

    # 폴란드어
    "The 바른 폴란드어 Step1": "barunPolish1",

    # 이탈리아어
    "이탈리아어 첫걸음의 모든 것": "italianBeginner",

    # 일본어 (추가)
    "New다이나믹일본어4": "newDynamicJapanese4Extra",

    # === 추가 매핑 (2025-12-18) ===

    # 스피킹/발음 교재 (9종)
    "2주만에 정복 스파르타 SPA 초급": "spartaSpaBasic",
    "5일 만에 끝내는 토익스피킹 실전모의고사 15회": "toeicSpeaking15Tests",
    "ETS 토익스피킹 기출문제집 최신개정 12회": "etsToeicSpeaking12",
    "SPA 초단기트레이닝": "spaShortTermTraining",
    "SPA트레이너단기완성20일": "spaTrainer20Days",
    "OPIc 필수패턴": "opicEssentialPattern",
    "Smart Phonics 1": "smartPhonics1",
    "Smart Phonics 2": "smartPhonics2",
    "Smart Phonics 3": "smartPhonics3",

    # 일본어 교재 (11종) - Pattern B 형식 (공백+숫자)
    "JLPT 한 권으로 끝내기 N2": "jlptN2Complete",
    "JPT한권으로끝내기800": "jpt800Complete",
    "SJPT 기출문제집": "sjptPastExams",
    "SJPT 한권으로 합격하기": "sjptComplete",
    "SJPT실전모의고사": "sjptMockTest",
    "SJPT중고급 L.4-8": "sjptIntermediate",
    "theme study 일본어 중급점프 READING": "themeStudyJapaneseReading",
    "다락원 일본어 독해 초급": "darakwonJapaneseReadingBasic",
    # 다락원 일본어 마스터: 파일명에서 책 번호가 prefix에 포함됨
    "다락원 일본어 마스터": "darakwonJapaneseMaster1",
    "다락원 일본어 마스터 2": "darakwonJapaneseMaster2",
    "다락원 일본어 마스터 3": "darakwonJapaneseMaster3",
    "다락원 일본어 마스터 4": "darakwonJapaneseMaster4",
    "다락원 일본어 마스터 5": "darakwonJapaneseMaster5",
    "다락원일본어독해중급": "darakwonJapaneseReadingIntermediate",

    # 기타 교재 (6종)
    "Hot Topics1": "hotTopics1",
    "Hot Topics2": "hotTopics2",
    "News Media": "newsMedia",
    "The Power Of Storytelling": "powerOfStorytelling",
    "나미야잡화점의기적": "namiyaMiracle",
    "나의 겁없는 중국뉴스 중국어": "fearlessChineseNews",

    # 중국어 추가
    "신문화중국어": "newCultureChinese",

    # === 추가 매핑 (2025-12-18) - Pattern B 누락 교재 ===
    # 일본어 토론/프리토킹 (Pattern B: 01이 커버)
    "뉴스미디어": "newsMedia",
    "일본어 수다프리토킹360": "sudaFreetalkJp360",
    "즐거운프리토킹일본어40초중급": "funFreetalkJp40",
}


def convert_index_to_suffix(index_str):
    """
    원본 인덱스를 대상 접미사로 변환
    _0 -> _cover
    _1 -> _01
    _2 -> _02
    등
    """
    try:
        idx = int(index_str)
        if idx == 0:
            return "_cover"
        else:
            return f"_{idx:02d}"
    except ValueError:
        return f"_{index_str}"


def find_source_prefix(filename):
    """
    파일명에서 원본 프리픽스 찾기
    예: "Business Partner A2_0.png" -> "Business Partner A2"
    """
    # _숫자.png 패턴 제거
    base = filename.rsplit("_", 1)[0] if "_" in filename else filename
    return base


def convert_file(source_file, mapping):
    """
    단일 파일 변환

    지원 패턴:
    - 패턴 A: [파일명]_[숫자].png (예: Business Partner A2_0.png)
      인덱스: 0=cover, 1=01, 2=02...
    - 패턴 B: [파일명] [2자리숫자].png (예: 다락원 일본어 마스터 01.png)
      인덱스: 01=cover, 02=01, 03=02... (1을 빼서 Pattern A와 동일하게 처리)
    """
    filename = source_file.name

    prefix = None
    index_str = None
    is_pattern_b = False

    # 패턴 A: 언더스코어 + 숫자 (예: Business Partner A2_0.png)
    pattern_a = re.match(r'^(.+)_(\d+)(?:\s+\d+)?\.png$', filename)
    if pattern_a:
        prefix = pattern_a.group(1)
        index_str = pattern_a.group(2)

    # 패턴 B: 공백 + 2자리 숫자 (예: 다락원 일본어 마스터 01.png)
    if not prefix:
        pattern_b = re.match(r'^(.+)\s+(\d{2})\.png$', filename)
        if pattern_b:
            prefix = pattern_b.group(1)
            index_str = pattern_b.group(2)
            is_pattern_b = True

    # 패턴 C: 단일 숫자 파일 (예: Smart Phonics 1.png)
    if not prefix:
        pattern_c = re.match(r'^(.+\s+\d+)\.png$', filename)
        if pattern_c:
            # 이 경우 전체를 prefix로 취급하고 커버로 처리
            prefix = pattern_c.group(1)
            index_str = "0"  # 커버로 처리

    if not prefix or index_str is None:
        return None

    # Pattern B는 인덱스를 1 감소 (01->0=cover, 02->1=01, ...)
    if is_pattern_b:
        index_str = str(int(index_str) - 1)

    # 매핑에서 camelCase ID 찾기
    if prefix not in mapping:
        return None

    camel_case_id = mapping[prefix]
    suffix = convert_index_to_suffix(index_str)

    target_filename = f"{camel_case_id}{suffix}.png"
    return target_filename


def main():
    """
    메인 변환 로직
    """
    if not SOURCE_DIR.exists():
        print(f"소스 디렉토리가 존재하지 않습니다: {SOURCE_DIR}")
        return

    if not TARGET_DIR.exists():
        TARGET_DIR.mkdir(parents=True, exist_ok=True)

    converted = 0
    skipped = 0
    errors = []

    # 소스 디렉토리의 모든 PNG 파일 처리
    for source_file in sorted(SOURCE_DIR.glob("*.png")):
        target_filename = convert_file(source_file, MAPPING)

        if target_filename is None:
            skipped += 1
            continue

        target_file = TARGET_DIR / target_filename

        # 이미 존재하는 파일은 건너뛰기
        if target_file.exists():
            print(f"[SKIP] 이미 존재: {target_filename}")
            skipped += 1
            continue

        try:
            shutil.copy2(source_file, target_file)
            print(f"[OK] {source_file.name} -> {target_filename}")
            converted += 1
        except Exception as e:
            errors.append((source_file.name, str(e)))
            print(f"[ERROR] {source_file.name}: {e}")

    print(f"\n=== 변환 완료 ===")
    print(f"변환: {converted}개")
    print(f"건너뜀: {skipped}개")
    print(f"오류: {len(errors)}개")

    if errors:
        print("\n오류 목록:")
        for filename, error in errors:
            print(f"  - {filename}: {error}")


if __name__ == "__main__":
    main()
