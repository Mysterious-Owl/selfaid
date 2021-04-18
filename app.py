from flask import Flask, render_template, request
import jsonify
import requests
import pickle
import numpy as np
import sklearn
from sklearn.preprocessing import StandardScaler

app = Flask(__name__, template_folder='templates')
model = pickle.load(open('finalized_model.pkl', 'rb'))
@app.route('/')
@app.route("/home")
def Home():
    return render_template('stress.html')

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        Age = request.form['Age']
        if(Age=='below 30'):
            Age=1
        elif(Age == 'Between 30 and 50'):
            Age=2
        else:
            Age=3

        Gender= request.form['Gender']
        if(Gender=='Male'):
            Gender=1
        else:
            Gender=2

        Sector= request.form['Sector']
        if(Sector=='Public'):
            Sector=1
        else:
            Sector=2

        Work_hours = request.form['Work_hours']
        if(Work_hours=='5hrs'):
            Work_hours=1
        elif(Work_hours == '10hrs'):
            Work_hours=2
        else:
            Work_hours=3

        Work_years_span = request.form['Work_years_span']
        if(Work_years_span=='Below 5 years'):
            Work_years_span=1
        elif(Work_years_span=='Between 5 to 10 years'):
            Work_years_span=2
        else:
            Work_years_span=3

        Stressed_during_work = request.form['Stressed_during_work']
        if(Stressed_during_work=='Sometimes'):
            Stressed_during_work=1
        elif(Stressed_during_work=='Very Often'):
            Stressed_during_work=2
        else:
            Stressed_during_work=3

        Feeling_on_job = request.form['Feeling_on_job']
        if(Feeling_on_job=='I am completely happy and enjoying the job'):
            Feeling_on_job=1
        elif(Feeling_on_job == 'I sometimes feel dissatisfied but generally enjoy my job'):
            Feeling_on_job=2
        elif(Feeling_on_job == 'Most of the time I do not enjoy my work'):
            Feeling_on_job=3
        else:
            Feeling_on_job=4

        Source_of_stress = request.form['Source_of_stress']
        if(Source_of_stress=='Over work'):
            Source_of_stress=1
        elif(Source_of_stress == 'Family Issues'):
            Source_of_stress=2
        elif(Source_of_stress == 'Out of Control Situation'):
            Source_of_stress=3
        elif(Source_of_stress == 'Colleague  Attitude'):
            Source_of_stress=4
        else:
            Source_of_stress=5

        Handling_stress = request.form['Handling_stress']
        if(Handling_stress=='Talking to an expert'):
            Handling_stress=1
        elif(Handling_stress == 'Taking a sleep'):
            Handling_stress=2
        elif(Handling_stress == 'Drugs / Alcohol / Smoking'):
            Handling_stress=3
        elif(Source_of_stress == 'Talking to your family members'):
            Handling_stress=4
        else:
            Source_of_stress=5

        Stress_affecting_concentration = request.form['Stress_affecting_concentration']
        if(Stress_affecting_concentration =='Very often'):
            Stress_affecting_concentration=1
        elif(Stress_affecting_concentration == 'Somewhat'):
            Stress_affecting_concentration=2
        else:
            Stress_affecting_concentration=3

        Effort_to_reduce_stress_to_improve_concentration = request.form['Effort_to_reduce_stress_to_improve_concentration']
        if(Effort_to_reduce_stress_to_improve_concentration=='No effort'):
            Effort_to_reduce_stress_to_improve_concentration=1
        elif(Effort_to_reduce_stress_to_improve_concentration=='Some effort'):
            Effort_to_reduce_stress_to_improve_concentration=2
        else:
            Effort_to_reduce_stress_to_improve_concentration=3
            
        Stress_due_to_too_many_duties = request.form['Stress_due_to_too_many_duties']
        if(Stress_due_to_too_many_duties=='Yes'):
            Stress_due_to_too_many_duties=1
        else:
            Stress_due_to_too_many_duties=2

        Stress_due_to_age = request.form['Stress_due_to_age']
        if(Stress_due_to_age=='Yes'):
            Stress_due_to_age=1
        else:
            Stress_due_to_age=2

        Stress_reason_family = request.form['Stress_reason_family']
        if(Stress_reason_family=='Yes'):
            Stress_reason_family=1
        else:
            Stress_reason_family=2
            
        Stress_due_to_competition = request.form['Stress_due_to_competition']
        if(Stress_due_to_competition=='Yes'):
            Stress_due_to_competition=1
        else:
            Stress_due_to_competition=2

        Prefer_to_stay_alone = request.form['Prefer_to_stay_alone']
        if(Prefer_to_stay_alone=='Yes'):
            Prefer_to_stay_alone=1
        else:
            Prefer_to_stay_alone=2

        Prefer_taking_responsibilities = request.form['Prefer_taking_responsibilities']
        if(Prefer_taking_responsibilities=='Yes'):
            Prefer_taking_responsibilities=1
        else:
            Prefer_taking_responsibilities=2

        Alcohol_usage = request.form['Alcohol_usage']
        if(Alcohol_usage=='Yes'):
            Alcohol_usage=1
        else:
            Alcohol_usage=2

        Stress_nervous_habits = request.form['Stress_nervous_habits']
        if(Stress_nervous_habits=='Daily'):
            Stress_nervous_habits=1
        elif(Stress_nervous_habits == 'Occasionally'):
            Stress_nervous_habits=2
        elif(Stress_nervous_habits == 'Sometimes'):
            Stress_nervous_habits=3
        else:
            Stress_nervous_habits=4

        Stress_makes_nervous = request.form['Stress_makes_nervous']
        if(Stress_makes_nervous=='Yes'):
            Stress_makes_nervous=1
        else:
            Stress_makes_nervous=2

        prediction = model.predict([[Age, Gender, Sector, Work_hours,
        Work_years_span, Stressed_during_work, Feeling_on_job,
        Source_of_stress, Handling_stress, Stress_affecting_concentration,
        Effort_to_reduce_stress_to_improve_concentration,
        Stress_due_to_too_many_duties, Stress_due_to_age,
        Stress_reason_family, Stress_due_to_competition,
        Prefer_to_stay_alone, Prefer_taking_responsibilities,
        Alcohol_usage, Stress_nervous_habits, Stress_makes_nervous]])

        output=prediction[0]
        if output == 1:
            return render_template('stress.html',prediction_text="Chronic Stress... No need to worry we will work together 😊😊 Move on to Task 3")
        elif output == 2:
            return render_template('stress.html',prediction_text="Episodic Acute Stress.. Lets resolve it together 😊😊 Move on to Task 2")
        elif output == 3:
            return render_template('stress.html',prediction_text="Acute Stress.. We will easily come out STRESS FREE 😊😊 Move on to Task 1")
    else:
        return render_template('stress.html')

if __name__=="__main__":
    app.run(debug=True)