from flask import Flask, request, jsonify, render_template
import pickle
import json
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder

app  = Flask(__name__)
""" elmodelo  = 'Logistic Regression'
d  = {\
    'to_user_distance':[3.7],
    'total_earning':[1100],
    'hour':[3],
    'day':[5],
    'earn/dist':[2000],
    'slope':[0.23],
    'store_score':[1]
} """


""" @app.route('/<string:modeltype>/')
def hello(modeltype):
    a = pd.DataFrame(request.args,index = [0])
    return  jsonify({'model':modeltype,'request':request.args}) 
 """

@app.route('/<string:modeltype>/query')
def params(modeltype):
    print(request.args)
    modelo = loadModel(modeltype)
    dataframe =  buildDataframe(modeltype, request)
    print(dataframe)
    prediction =  predict(modelo, dataframe)
    result = '{}'.format(prediction[0][1])
    return jsonify({'modeltype':modeltype,'prediction':result})

@app.route('/')
def hello():
    # return jsonify({"message":"Restful API For Rappi-model workig!"})
    return render_template('index.html')



def loadModel(filename):
    file = '{}.sav'.format(filename)
    loaded_model= pickle.load(open(file,'rb'))
    return loaded_model


def predict(loaded_model, df):
    prediction = loaded_model.predict_proba(df)
    return prediction


def standarize(df):
    """
    Esta funcion tiene como objetivo escalar y centralizar los inputs de la request
    """

    for column in df.columns:
        if df[column].dtype == type(object):
            le = LabelEncoder()
            df[column] = le.fit_transform(df[column])
    scaler = StandardScaler()
    df_scaled = pd.DataFrame(scaler.fit_transform(df), columns = df.columns)
    return df_scaled


def buildDataframe(modeltype, request):
    """
    Esta funcion tiene como objetivo construir dataframe para el modelo.
    """
    # print(request.args)
    df = pd.DataFrame(request.args, index = [0])
   
    return df



if __name__ == "__main__":
    app.run(threaded=True)


