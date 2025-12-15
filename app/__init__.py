"""
ePlan Application Factory
Flask 애플리케이션 생성 및 설정
"""
from flask import Flask
from flask_mail import Mail
from config import config

mail = Mail()


def create_app(config_name='default'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    mail.init_app(app)

    # Blueprints 등록
    from app.main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    # 템플릿 컨텍스트 프로세서
    @app.context_processor
    def utility_processor():
        def static_url(filename):
            """
            환경에 따라 정적 파일 URL 반환
            - 개발: Flask static 서버
            - 프로덕션 이미지/비디오: Cloud Storage
            - 프로덕션 CSS/JS: GAE static
            """
            from flask import url_for

            # 이미지와 비디오만 Cloud Storage 사용
            if filename.startswith('images/') or filename.startswith('videos/'):
                static_prefix = app.config.get('STATIC_URL_PREFIX', '')
                if static_prefix:
                    return f"{static_prefix}/{filename}"

            # CSS, JS, 기타 파일은 Flask 기본 static
            return url_for('static', filename=filename)

        return dict(static_url=static_url)

    return app
