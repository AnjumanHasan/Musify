from flask import Flask
from flask import request
from flask import render_template
import pickle 
import Recommenders as Recommenders

app = Flask(__name__)
# model =pickle.load("recommender.pickle","r")

with open ('recommender.pickle','rb') as f :
    model = pickle.load(f)

@app.route('/', methods=['GET'])
def hello() :
    return render_template('index.html')

@app.route('/register', methods=['GET'])
def home() :
    return render_template('home.html')


if __name__ == "__main__" :
    app.run()
    