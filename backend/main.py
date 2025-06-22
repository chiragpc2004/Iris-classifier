from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

# 🎯 Initialize the FastAPI app
app = FastAPI()

# 🔓 Allow CORS for frontend (e.g., React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to your frontend URL in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🧾 Request body schema
class IrisFeatures(BaseModel):
    sepal_length: float
    sepal_width: float
    petal_length: float
    petal_width: float

# 🧠 Load the pretrained model
model = joblib.load("D:/Iris-classifier/backend/model/iris_model.pkl")
target_names = ['setosa', 'versicolor', 'virginica']

# 🔮 Predict endpoint
@app.post("/predict")
def predict(data: IrisFeatures):
    features = np.array([[data.sepal_length, data.sepal_width, data.petal_length, data.petal_width]])
    prediction = model.predict(features)
    predicted_class = target_names[prediction[0]]
    return {"species": predicted_class}
