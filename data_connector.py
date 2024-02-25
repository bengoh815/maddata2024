import os
import pandas as pd
# Get a list of all CSV filenames in the directory, excluding Wheat.csv and nass.csv
data_directory = '/Users/arjun/Documents/maddata/maddata/data'
commodity_files = [file for file in os.listdir(data_directory) if file.endswith('.csv') and file not in ['out.csv', 'nass.csv']]

# Function to merge nass production data with commodity data
def merge_production(commodity_file, nass_data):
    # Load commodity data
    commodity_data = pd.read_csv(os.path.join(data_directory, commodity_file))
    
    # Extract month and year from 'date'
    commodity_data['month'] = pd.to_datetime(commodity_data['date']).dt.strftime('%b')
    
    # Get the commodity name from the filename (assuming filename is like 'Commodity.csv')
    commodity_name = commodity_file.split('.')[0].upper()
    
    # Filter nass_data for the specific commodity
    nass_commodity_data = nass_data[nass_data['commodity'].str.upper() == commodity_name]
    
    # Merge the commodity data with the filtered nass production data on 'month'
    merged_data = pd.merge(commodity_data, nass_commodity_data, how='left', left_on='month', right_on='month')
    
    # Drop unnecessary columns and return the merged dataframe
    merged_data.drop(['month', 'commodity'], axis=1, inplace=True)
    
    # Save the merged data back to CSV
    merged_data.to_csv(os.path.join(data_directory, commodity_file), index=False)
    
    return merged_data.head()  # Return the head of the dataframe for checking

# Apply the merge_production function to each commodity file
merged_data_samples = {}
nass_data = pd.read_csv(os.path.join(data_directory, 'nass.csv'))
for commodity_file in commodity_files:
    merged_data_samples[commodity_file] = merge_production(commodity_file, nass_data)

# Show the head of the merged data for the first few commodity files for verification
merged_data_samples[next(iter(merged_data_samples))]  # Show an example of one merged file