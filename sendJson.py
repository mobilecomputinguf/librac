import json
import requests


url = "http://localhost:8182/register"
data = {'username':'raju4', 'password':'123'}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
r = requests.post(url, data=json.dumps(data), headers=headers)
