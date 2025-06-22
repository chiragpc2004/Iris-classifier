from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import os

# 🎯 Initialize the FastAPI app
app = FastAPI()

# 🔓 Allow CORS for frontend (e.g., React on Vercel)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔐 In production, replace with your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🧾 Request body schema
class IrisFeatures(BaseModel):
    sepal_length: float
    sepal_width: float
    petal_length: float
    petal_width: float

# 🧠 Load the pretrained model (cross-platform path)
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model", "iris_model.pkl")
model = joblib.load(MODEL_PATH)
target_names = ['setosa', 'versicolor', 'virginica']

# 🔮 Predict endpoint
@app.post("/predict")
def predict(data: IrisFeatures):
    features = np.array([[data.sepal_length, data.sepal_width, data.petal_length, data.petal_width]])
    prediction = model.predict(features)
    predicted_class = target_names[prediction[0]]
    return {"species": predicted_class}
