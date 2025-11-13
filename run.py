import os
from app import create_app, db
from app.models import User, Category, Post

app = create_app(os.getenv('FLASK_ENV') or 'default')


@app.shell_context_processor
def make_shell_context():
    from app.models import ConsultingInquiry, InstructorApplication
    return dict(db=db, User=User, Category=Category, Post=Post, 
                ConsultingInquiry=ConsultingInquiry, InstructorApplication=InstructorApplication)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

