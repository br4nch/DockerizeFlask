from typing import List, Dict
from flask import Flask
import mysql.connector
import json

app = Flask(__name__)


def leads() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'userdb'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM leads')
    results = [{name: mobile} for (name, mobile) in cursor]
    cursor.close()
    connection.close()

    return results


@app.route('/')
def index() -> str:
    return json.dumps({'Leads': leads()})


if __name__ == '__main__':
    app.run(host='0.0.0.0')
