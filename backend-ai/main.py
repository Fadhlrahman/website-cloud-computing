from fastapi import FastAPI
from pydantic import BaseModel
from model import predict_price

app = FastAPI()

class PredictInput(BaseModel):
    hari_ke: int

@app.get("/")
def root():
    return {"message": "Crypto AI backend aktif 🚀"}

@app.post("/predict")
def predict(data: PredictInput):
    harga = predict_price(data.hari_ke)
    return {"predicted_price": round(harga, 2)}

@app.get("/predict-example")
def predict_example():
    # Hari ke berapa yang mau ditest? Misal: 6
    prediksi = predict_price(6)
    return {"predicted_price": round(prediksi, 2)}
