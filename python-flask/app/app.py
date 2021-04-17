from flask import Flask, request, jsonify, make_response
import requests
import json

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='/static')
@app.route('/')
def hello():
    return 'Welcome to My Watchlist!'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080,debug=True)
