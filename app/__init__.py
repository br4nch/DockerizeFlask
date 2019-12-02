from flask import Flask, Mail
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate

app = Flask(__name__)

db = SQLAlchemy(app, session_options={"expire_on_commit": False})

ma = Marshmallow(app)
migrate = Migrate(app, db)
mail = Mail(app)