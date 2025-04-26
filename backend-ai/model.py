from sklearn.ensemble import RandomForestRegressor
import numpy as np

# Dummy dataset
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([27000, 27500, 28000, 28500, 29000])

model = RandomForestRegressor().fit(X, y)

def predict_price(hari_ke: int):
    return model.predict([[hari_ke]])[0]
