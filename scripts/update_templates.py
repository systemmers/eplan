#!/usr/bin/env python3
"""
템플릿 파일에서 이미지/비디오 URL을 static_url()로 변경
"""
import os
import re

def update_template_file(filepath):
    """단일 템플릿 파일 업데이트"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # url_for('static', filename='images/...')  → static_url('images/...')
    content = re.sub(
        r"url_for\('static',\s*filename='(images/[^']+)'\)",
        r"static_url('\1')",
        content
    )

    # url_for('static', filename='videos/...')  → static_url('videos/...')
    content = re.sub(
        r"url_for\('static',\s*filename='(videos/[^']+)'\)",
        r"static_url('\1')",
        content
    )

    # 변경사항이 있으면 파일 업데이트
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """모든 템플릿 파일 처리"""
    templates_dir = 'app/templates'
    updated_files = []

    # 모든 .html 파일 찾기
    for root, dirs, files in os.walk(templates_dir):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                if update_template_file(filepath):
                    updated_files.append(filepath)

    # 결과 출력
    if updated_files:
        print(f"Updated {len(updated_files)} files:")
        for filepath in updated_files:
            print(f"  - {filepath}")
    else:
        print("No files to update.")

if __name__ == '__main__':
    main()
