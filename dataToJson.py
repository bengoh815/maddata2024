import pandas as pd
import json
import os

# Directory path
directory = './data'
destination = './client/src/data'

json_data = []

# Iterate over files in the directory
for filename in os.listdir(directory):
    # Check if the file is a regular file
    if os.path.isfile(os.path.join(directory, filename)):
        name = filename.split(".")[0]
        # print(name)
        
        # Read the CSV file into a DataFrame
        df = pd.read_csv(os.path.join(directory, filename))

        # Convert the DataFrame to a dictionary
        data = {
            'name': name,  
            'rank': 123,       # Assuming the rank is constant for all rows
            'dates': df['date'].tolist(),
            'temps': df['value'].tolist(),
            'productions': df['production'].tolist(),
            'prices': df['price'].tolist()
        }
        json_data.append(data)

# Save the dictionary to a JSON file
with open('output.json', 'w') as f:
    json.dump(json_data, f, indent=4)

print('JSON data saved to output.json')