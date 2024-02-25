import requests
import json
import pandas as pd

api_key = "58CCDF9D-24B1-396B-8A3A-D2C7D63F91B6"
url = "https://quickstats.nass.usda.gov/api/api_GET/"

crops = ["BARLEY", "BEANS", "BUCKWHEAT", "CANOLA", "CORN", "COTTON", "FLAXSEED", "HAY", "HERBS", "HOPS", 
         "LENTILS", "MAPLE SYRUP", "MILLET", "MINT", "OATS", "PEANUTS", "PEAS", "RICE", "RYE", "SAFFLOWER", 
         "SORGHUM", "SOYBEANS", "SUNFLOWER", "TOBACCO", "WHEAT"]
month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
commodities_csv = []

for crop in crops:
    response = requests.get(url, {
            'key': api_key,
        "source_desc": "Census",
        "sector_desc": "CROPS",
        "group_desc": "FIELD CROPS",
        "commodity_desc": crop,
        "statisticcat_desc": "PRODUCTION",
        "agg_level_desc": "NATIONAL",
        "year": "2022",
        "format": "JSON"
        })
        
    if response.status_code == 200:
        data = response.json()
    else:
        print(f"Error: {response.status_code}")
    

    # append to the commodities csv for everysingle crops
    for i in range(len(data['data'])):
        if (data['data'][i]['Value'].strip() != "(D)"):
            commodities_csv.append({
                "commodity": data['data'][i]["commodity_desc"],
                "production": int(data['data'][i]['Value'].replace(",", "")) / 12,
                'month': month[i % 12]
            })

df = pd.DataFrame(commodities_csv)

# Calculate the mean production for each commodity for each month
commodity_monthly_avg_production = df.groupby(['commodity', 'month']).agg({'production': 'mean'}).reset_index()

# Apply the correct month sorting
commodity_monthly_avg_production['month'] = pd.Categorical(commodity_monthly_avg_production['month'], categories=month, ordered=True)
commodity_monthly_avg_production = commodity_monthly_avg_production.sort_values(['commodity', 'month'])

# Save the results to a new CSV file
commodity_monthly_avg_production.to_csv('nass.csv', index=False)
