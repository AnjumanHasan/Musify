from flask import Flask
from flask import request
from flask import render_template
import pickle 

app = Flask(__name__)
model = pickle.load(open(('recommender.pickle','rb')))

@app.route('/', methods=['GET'])
def hello() :
    return render_template('index.html')

@app.route('/home', methods=['GET'])
def home() :
    return render_template('home.html')


if __name__ == "__main__" :
    app.run()
    