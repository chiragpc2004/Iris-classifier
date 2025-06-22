from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
import joblib

def train_and_save_model():
    iris = load_iris()
    X, y = iris.data, iris.target # type: ignore
    clf = RandomForestClassifier()
    clf.fit(X, y)
    joblib.dump(clf, "D:/Iris-classifier/backend/model/iris_model.pkl")

if __name__ == "__main__":
    train_and_save_model()
