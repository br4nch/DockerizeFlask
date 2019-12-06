from flask_sqlalchemy import SQLAlchemy

from flask_migrate import Migrate
from datetime import datetime
from config import Config
from flask import Flask

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app, session_options={"expire_on_commit": False})


migrate = Migrate(app, db)

from app import routes

