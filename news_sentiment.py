import http.client
import urllib.parse
import json
from datetime import datetime

# Function to generate date ranges for each month of the year
def generate_monthly_ranges(year):
    ranges = []
    for month in range(1, 13):
        start_date = datetime(year, month, 1)
        end_date = datetime(year, month+1, 1) if month < 12 else datetime(year+1, 1, 1)
        ranges.append({
            'published_after': start_date.strftime('%Y-%m-%d'),
            'published_before': end_date.strftime('%Y-%m-%d')
        })
    return ranges

# List of crops
crops = ['Animal Products', 'Corn', 'Fish', 'Fruit', 'Nuts', 'Soybeans', 'Vegetables', 'Wheat']

# Set up the HTTPS connection
conn = http.client.HTTPSConnection('api.thenewsapi.com')

# API Token
api_token = 'Fqu0p8bEjmnVcdZrKALsKvSQrpUUVr3vAYCrC8QH'  # Replace with your actual API token

# Iterate over each crop and each month
for crop in crops:
    for date_range in generate_monthly_ranges(2023):  # Replace with the correct year
        # Set up the parameters
        params = urllib.parse.urlencode({
            'api_token': api_token,
            'search': 'Animal Products',
            'locale': 'us',
            'language': 'en',
            'published_before': date_range['published_before'],
            'published_after': date_range['published_after'],
            'sort': 'relevance_score',
        })

        # Make the API request
        conn.request('GET', '/v1/news/top?{}'.format(params))

        # Get the response
        res = conn.getresponse()
        data = res.read()

        # Decode the data and convert to JSON 
        json_data = json.loads(data.decode('utf-8'))

        # Define the filename
        filename = f"{crop}_{date_range['published_after']}_{date_range['published_before']}.json"

        # Write the JSON data to the file
        with open(filename, 'w') as file:
            json.dump(json_data, file, indent=4)

# Close the connection
conn.close()
