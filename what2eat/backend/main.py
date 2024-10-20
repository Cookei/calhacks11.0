from flask import Flask, jsonify, request
from get_yelp import get_details, average_distance, average_price
import json
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World"

# return recommended restaurants
# if everyone has submitted the form -> return remaining
# else -> return recommended restaurants
@app.route('/restaurants', methods=["GET"])
def recommend_restaurants():
    if request != None:
        data = request.json
        lon = data["location"][0]
        lat = data["location"][1]
        dist = average_distance(data["preferredDistance"])
        price  = average_price(data["price"])
        cuisines = data["preferredCuisines"]
        yelp_response = get_details(lon, lat, dist, cuisines, price)
        return jsonify(format_restaurant_details(yelp_response))
    else:
        return jsonify({"message": "no request found"}), 400

def format_restaurant_details(yelp_details):
    max = 3
    restaurants = []

    for i, bus in enumerate(yelp_details.get("businesses")):
        if i >= 3:
            break
        restaurants.append(restaurant(
            name=bus["name"],
            distance=bus["distance"],
            rating=bus["rating"],
            price=bus["price"],
            webpage=bus["menu_url"],
            icon=bus["image_url"],
            cuisines=bus["categories"][0]["title"]
        ))
    return restaurants
    
def restaurant(name, distance, rating, price, webpage, icon, cuisines):
    data = {
        "name": name,
        "icon": icon,
        "price": price, 
        "website": "https://" + webpage,
        "distance": distance,
        "rating": rating,
        "cuisines": cuisines
    }
    return json.dumps(data, indent=4)
    
if __name__ == '__main__':
    app.run(debug=True)


# firebase stuff

# import modules
import firebase_admin
from firebase_admin import db, credentials

# authenticate to firebase
cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(cred, {"databaseURL": "https://what2eat-joha888-default-rtdb.firebaseio.com/"})

# create ref to root node
ref = db.reference("/")

# store an event as a firebase node upon "create event" action
@app.route('/create', methods = ['POST'])
def create_event():
    # store eventObj
    event_ref = ref.child('create')
    new_event_ref = event_ref.push(request.json)
    
    postID = new_event_ref.key
    print("key", postID)
    
    return str(postID)

# store a preference object as a child under create/prefs 
@app.route('/setprefs', methods = ['POST'])
def set_prefs():
    
    # locate the specific key
    data = request.json
    key = data["key"]
    prefs = data["preferences"]
    pref_ref = ref.child('create/' + str(key) + '/prefs') # access the specific event
    
    pref_ref = ref.push(prefs) # push preferences as a new node under /prefs
    
    postID = pref_ref.key
    print("key", postID)
    
    return str(postID)

# retrieve data given a specific event
@app.route('/retrieve', methods = ['POST'])
def retrieve_event():
    
    key = request.json

    event_ref = ref.child('create/' + str(key) + '/prefs')
    
    data = event_ref.get() 
    
    print("data", data)
    
    return str(data)
