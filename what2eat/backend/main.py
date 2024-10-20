from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World"

# create new url instance
# required arguments
# num-participants: int
@app.route('/create-new-event', methods=["POST"])
def get_preferences():
    if request != None:
        print(request.json)

# submit preference data for one participant
@app.route('/submit-form', methods=["POST"])
def get_preferences():
    if request != None:
        print(request.json)

# return recommended restaurants
# if everyone has submitted the form -> return remaining
# else -> return recommended restaurants
@app.route('/restaurants', methods=["GET"])
def reccomend_restaurants():
    return jsonify({"message": "hello"}), 200

if __name__ == '__main__':
    app.run(debug=True)


