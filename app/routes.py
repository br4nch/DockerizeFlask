from typing import List, Dict
import mysql.connector
import json
from flask import Flask, render_template, request
from app import db, app
from datetime import datetime
from app.sheets_api import GoogleAPI
from pprint import pprint

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


class Leads(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(200), index=True)
    phone_no = db.Column(db.BigInteger, index=True)
    product = db.Column(db.String(100))
    area = db.Column(db.Integer)
    location = db.Column(db.String(50))
    ref = db.Column(db.String(50))
    source = db.Column(db.String(50))
    channel = db.Column(db.String(50))
    source_type = db.Column(db.String(200))
    tracker_timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    first_captured = db.Column(db.DateTime, index=True)
    return_count = db.Column(db.Integer, default=0, nullable = False)

    deleted = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return '<User {0}>'.format(self.email)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def soft_delete(self):
        self.deleted = True
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()


@app.route('/')
def index():
    return render_template("home.htm")

@app.route('/api/add-lead/', methods=['POST'])
def add_lead():
    leads_data = request.json
    new_lead = Leads()
    new_lead.full_name = leads_data.get("name")
    r = new_lead.save()
    pprint(r)



    return {"json": leads_data}



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
