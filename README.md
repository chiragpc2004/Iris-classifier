
# 🌸 Iris Classifier - Full Stack ML Web App

A basic, responsive machine learning web app that predicts the species of an Iris flower based on petal and sepal measurements.

Built with **React + Vite + Tailwind CSS** (frontend) and **FastAPI + scikit-learn** (backend), and deployed using **Vercel** and **Render**.

---

## 🚀 Live Demo

- 🔗 **Iris Classifier:** [https://iris-classifier-one.vercel.app](https://iris-classifier-one.vercel.app)  

---

## 🧠 Model Info

This project uses a **Random Forest** model trained on the classic [Iris dataset](https://scikit-learn.org/stable/auto_examples/datasets/plot_iris_dataset.html) to classify iris flowers into:
- *Setosa*
- *Versicolor*
- *Virginica*

Model is trained using `scikit-learn` and saved with `joblib`.

---

## ✨ Features

- 🖼️ Clean and aesthetic UI designed for clarity
- 🔮 Real-time predictions with live model
- 🧠 Simple ML logic, great for beginners
- 📱 Responsive design
- 🌐 Deployed and usable by anyone

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- FastAPI
- scikit-learn
- joblib
- numpy

### Deployment
- Vercel (frontend)
- Render (backend)

---

## 📦 Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/chiragpc2004/Iris-classifier.git
cd Iris-classifier
```

### 2. Setup and run backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # use `source venv/bin/activate` on macOS/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Setup and run frontend

```bash
cd frontend
npm install
npm run dev
```

Then visit `http://localhost:5173` to use the app.

---

## 📸 Screenshots

> Add some UI screenshots here if you like — for example:

```
📷 Home Page | 📊 Prediction Page
```

---

## 🧾 License

MIT License. Feel free to fork, remix, and build your own flower apps 🌻

---

## 👨‍💻 Author

Made with 💖 by [**Chirag Poojarikodi**](https://github.com/chiragpc2004)
