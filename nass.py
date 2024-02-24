import requests
import json
import matplotlib.pyplot as plt

api_key = "58CCDF9D-24B1-396B-8A3A-D2C7D63F91B6"
url = "https://quickstats.nass.usda.gov/api/api_GET/"

parems = {
    'key': api_key,
    "commodity_desc": "CORN",
    "statisticcat_desc": "YIELD",
    "year": "2020",
    "format": "JSON"
}

response = requests.get(url, parems)

if response.status_code == 200:
    data = response.json()
else:
    print(f"Error: {response.status_code}")
    

corn_yield = []
for i in range(len(data['data'])):
    corn_yield.append(data['data'][i]['Value'])


