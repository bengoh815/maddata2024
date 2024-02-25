# The provided image seems to show the desired format for the DataFrame.
# To achieve this, we'll sort the DataFrame by 'commodity' and then by 'month' to get the commodities grouped together.
# Re-importing pandas as the execution state was reset
import pandas as pd

# Load the agricultural_prices.csv data again
ag_prices_data = pd.read_csv('/Users/arjun/Documents/maddata/maddata/data/agricultural_prices.csv')

# Transpose the DataFrame to have commodities as rows and months as columns
ag_prices_data = ag_prices_data.set_index('Month').transpose().reset_index()
ag_prices_data.rename(columns={'index': 'commodity'}, inplace=True)

# Now, let's melt this DataFrame to get a 'commodity', 'month', and 'price' structure
# Assuming the 'Month' column in the original DataFrame is named after the months' abbreviations
formatted_ag_prices = pd.melt(ag_prices_data, id_vars=['commodity'], var_name='month', value_name='price')

# Check the first few rows of the formatted data
formatted_ag_prices.head()

# Let's first create a mapping for the 'month' column to ensure they are sorted by calendar order
month_order = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
}

# Add a new column 'month_num' to the DataFrame for sorting purposes
formatted_ag_prices['month_num'] = formatted_ag_prices['month'].map(month_order)

# Now sort by 'commodity' and 'month_num'
formatted_ag_prices_sorted = formatted_ag_prices.sort_values(by=['commodity', 'month_num'])

# Drop the 'month_num' column as it is no longer needed after sorting
formatted_ag_prices_sorted.drop('month_num', axis=1, inplace=True)

# Reset the index of the DataFrame
formatted_ag_prices_sorted.reset_index(drop=True, inplace=True)

# Display the sorted DataFrame
print(formatted_ag_prices_sorted.head(24)) # Show the first 24 entries to see multiple commodities


output_csv_path = '/Users/arjun/Documents/maddata/maddata/data/sorted_agricultural_prices.csv'
formatted_ag_prices_sorted.to_csv(output_csv_path, index=False)