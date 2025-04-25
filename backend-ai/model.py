import pandas as pd
from sklearn.linear_model import LinearRegression

# Contoh dataset dummy
df = pd.DataFrame({
    "hari": [1, 2, 3, 4, 5],
    "harga": [27000, 27500, 28000, 28500, 29000],
})

X = df[["hari"]]
y = df["harga"]

model = LinearRegression().fit(X, y)

def predict_price(hari_ke: int) -> float:
    return model.predict([[hari_ke]])[0]
