import requests
import json
import pandas as pd

api_key = "58CCDF9D-24B1-396B-8A3A-D2C7D63F91B6"
url = "https://quickstats.nass.usda.gov/api/api_GET/"



field_crops = ["CORN", "SOYBEANS", "WHEAT"]

commodities_animals = ["ANIMALS TOTALS", "AQUACULTURE TOTAL"]

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
commodities_csv = []

def getResponse(group, commodity, sector="CROPS"):
    params = {
        'key': api_key,
        "source_desc": "Census",
        "sector_desc": sector,
        "group_desc": group,
        "commodity_desc": commodity,
        "statisticcat_desc": "PRODUCTION",
        "agg_level_desc": "NATIONAL",
        "year": "2022",
        "format": "JSON"
    }
    response = requests.get(url, params=params)
    return response

for crop in field_crops:
    response = getResponse("FIELD CROPS", crop)
    
    if response.status_code == 200:
        data = response.json()
    
    else:
        print(f"Error: {response.status_code}")
    
    # append to the commodities csv for everysingle field_crops
    for i in range(len(data['data'])):
        if (data['data'][i]['Value'].strip() != "(D)"):
            commodities_csv.append({
                "commodity": data['data'][i]["commodity_desc"],
                "production": int(data['data'][i]['Value'].replace(",", "")) / 12,
                'month': months[i % 12]
            })

df = pd.DataFrame(commodities_csv)

# Calculate the mean production for each commodity for each month
commodity_monthly_avg_production = df.groupby(['commodity', 'month']).agg({'production': 'mean'}).reset_index()

# Apply the correct month sorting
commodity_monthly_avg_production['month'] = pd.Categorical(commodity_monthly_avg_production['month'], categories=months, ordered=True)
commodity_monthly_avg_production = commodity_monthly_avg_production.sort_values(['commodity', 'month'])

# Save the results to a new CSV file
commodity_monthly_avg_production.to_csv('nass.csv', index=False)



total_commodities = ['tree_nuts', 'fruit', 'vegetable', 'fish', 'animal']

for commodity in total_commodities:
    df = pd.read_csv(f"./{commodity}.csv")
    df = df[df['Value'] != ' (D)']
    
    df['Value'] = df['Value'].str.replace(',', '').astype(float)
    
    monthly_rows = []
    
    for index, row in df.iterrows():
        monthly_value = row['Value'] / 12.0
        for month in months:
            monthly_rows.append({
                'commodity': row['Commodity'], 
                'month': month, 
                'production': monthly_value
            })
    
    final_df = pd.DataFrame(monthly_rows).groupby(['commodity', 'month'])['production'].mean().reset_index()
    final_df.to_csv(f"{commodity}.csv", index=False)
        