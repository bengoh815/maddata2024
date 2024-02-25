import requests
import pandas as pd
from datetime import datetime

API_KEY = 'kWelKbzApdVVMZhSAfZCaEXLcUCEevuh'  # Consider using environment variables for security
BASE_URL = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/'


stations = {
                'Fish': 'USW00053917',
                'Animal Products': 'USC00419916',
                'Fruit': 'USW00014751',
                'Corn': 'USC00253652',
                'Nuts': 'USC00040673',
                'Vegetables': 'USC00040673',
                'Soybeans': 'USC00253652',
                'Wheat': 'USW00053974',

                
                }

def download_noaa_data(station_name, crop_name):
    def fetch_noaa_data(endpoint, params):
        headers = {'token': API_KEY}
        response = requests.get(BASE_URL + endpoint, headers=headers, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch data: {response.status_code}")
            return None

   
        
    params = {
        'datasetid': 'GHCND',  # Global Historical Climatology Network - Daily dataset
        'stationid': f'GHCND:{station_name}',  # Example station ID for New York Central Park
        'startdate': '2022-01-01',
        'enddate': '2023-01-31',
        'limit': 1000,  # Adjust based on your needs
        'units': 'metric',
        'datatypeid': ['TMAX', 'TMIN'],  # Max and Min temperatures
    }

    data = fetch_noaa_data('data', params)

    # Convert to DataFrame for analysis
    if data:
        df = pd.DataFrame(data['results'])
        #print(df.head())
        #print(df.iloc[-1])
    else:
        print("No data fetched.")

    print(df.dtypes)
    # # Assuming 'data' is a list of daily records fetched by your original script
    # df = pd.DataFrame(data['results'])

    # # Convert the 'date' column to datetime format
    # df['date'] = pd.to_datetime(df['date'])

    # # Set 'date' as the DataFrame index
    # df.set_index('date', inplace=True)

    # # Resample the data to monthly frequency, aggregating the values by mean
    # monthly_data = df.resample('M').mean()

    # print(monthly_data.head())

    # Convert the 'date' column to datetime
    df['date'] = pd.to_datetime(df['date'])

    # Set the 'date' column as the index
    df.set_index('date', inplace=True)

    # Resample to monthly frequency and calculate the mean of 'value' column
    monthly_data = df['value'].resample('M').mean()

    # Reset index to turn the date index back to a column
    monthly_data = monthly_data.reset_index()

    #print(monthly_data.head())

    monthly_data.to_csv(f'{crop_name}.csv', index=False)  

    import matplotlib.pyplot as plt


    # # Plotting
    # plt.figure(figsize=(10, 6))
    # plt.plot(monthly_data.index, monthly_data['value'], label='Average Monthly Temperature')
    # plt.title('Average Monthly Temperatures')
    # plt.xlabel('Month')
    # plt.ylabel('Temperature (°C)')
    # plt.legend()
    # plt.show()


for crop, station in stations.items():
    print(f"Downloading data for {crop}...")
    download_noaa_data(station, crop)
    print(f"Data for {crop} downloaded.")

    