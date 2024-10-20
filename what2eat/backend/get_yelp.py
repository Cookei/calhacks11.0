import requests
from keys import YELP_API_KEY

def average_distance(dist_array): 
    """returns the average distnace of user inputted distances"""
    return sum(dist_array)/dist_array.length

def average_price(dist_array): 
    """returns the average distnace of user inputted distances"""
    return round(sum(dist_array)/dist_array.length)


def get_details(lat, long, radius_distance, fields, price_pref):
    """
    inputs: latitude, longitude, result of average_distance(dist_array), preferred_cuisine
    output: json of places with details

    result = name, rating, price, cuisine_type, url
    """
    url = "https://api.yelp.com/v3/businesses/search"
    querystring = {"latitude" : lat, "longitude" : long, "radius" : radius_distance, "categories" : fields, "price": price_pref}
    payload = ""
    headers = {
    "User-Agent": "insomnia/10.1.0",
    "Authorization": "Bearer " + YELP_API_KEY
}
    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)
    return response.json()

