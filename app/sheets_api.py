from __future__ import print_function
import pickle
import os.path
from pprint import pprint
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from app import app
from app import Config

# If modifying these scopes, delete the file token.pickle.

class GoogleAPI(object):

    def __init__(self):
        super().__init__()
        self.SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
        self.SAMPLE_SPREADSHEET_ID = Config.SHEET_ID
        self.SAMPLE_RANGE_NAME = 'A:G'
        self.value_input_option = 'RAW'
        self.insert_data_option = 'INSERT_ROWS'
        self.value_range_body={"values":[]}
        """Shows basic usage of the Sheets API.
        Prints values from a sample spreadsheet.
        """
        creds = None
        # The file token.pickle stores the user's access and refresh tokens, and is
        # created automatically when the authorization flow completes for the first
        # time.
        if os.path.exists('token.pickle'):
            with open('token.pickle', 'rb') as token:
                creds = pickle.load(token)
        # If there are no (valid) credentials available, let the user log in.
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    'app/credentials.json', self.SCOPES)
                creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open('token.pickle', 'wb') as token:
                pickle.dump(creds, token)

        self.service = build('sheets', 'v4', credentials=creds)
    def update_sheet(self, list_of_values):

        self.value_range_body.get("values").append(list_of_values)

        
        request = self.service.spreadsheets().values().append(spreadsheetId=self.SAMPLE_SPREADSHEET_ID, range=self.SAMPLE_RANGE_NAME, valueInputOption=self.value_input_option, insertDataOption=self.insert_data_option, body=self.value_range_body)
        response = request.execute()
        pprint(response)

        return response
   

if __name__ == '__main__':
    sheet_object = GoogleAPI()
    r = sheet_object.update_sheet(
        [
      "1",
      "Venkatesh",
      "venky8283@hotmail.com",
      "8390188283",
      "Delhi",
      "Residential",
      "1200"
    ]

    )
    pprint(r)