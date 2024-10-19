from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World"

# get preference data
@app.route('/preferences', methods=["POST"])
def get_preferences():
    if request != None:
        print(request.json)

# return recommended restaurants
@app.route('/restaurants', methods=["GET"])
def reccomend_restaurants():
    return jsonify({"message": "hello"}), 200

if __name__ == '__main__':
    app.run(debug=True)


