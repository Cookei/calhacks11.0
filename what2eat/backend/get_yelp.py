import requests
from keys import YELP_API_KEY

url = "https://api.yelp.com/v3/businesses/search"

querystring = {"location":"Irvine"}

payload = ""
headers = {
    "User-Agent": "insomnia/10.1.0",
    "Authorization": "Bearer " + YELP_API_KEY
}

response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

print(response.json())