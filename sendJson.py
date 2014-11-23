import json
import requests


#url = "http://localhost:9181/register"
url = "http://localhost:9181/changePassword"
data = {'username':'raju84', 'oldPassword':'4567','newPassword':'567'}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
r = requests.post(url, data=json.dumps(data), headers=headers)
