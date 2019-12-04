import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))

"""the .env file contains all your config.py settings variable's values"""
load_dotenv(os.path.join(basedir, '.env'))


class Config(object):

    SERVICE = os.environ.get('SERVICE')
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URLd') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SHEET_ID=os.environ.get('SHEET_ID')
