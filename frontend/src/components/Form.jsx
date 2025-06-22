import { useState } from 'react';
import { Flower2 } from 'lucide-react';

export default function Form() {
  const [form, setForm] = useState({
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data.species);
      setError(null);
    } catch (err) {
      setError("🌧️ Oops! Backend not responding.");
      setResult(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl space-y-4 border border-indigo-100">
      <h1 className="text-3xl font-extrabold text-center text-indigo-700 tracking-tight">
        🌸 Iris Flower Classifier
      </h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="number"
            step="any"
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key.replace('_', ' ')}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        ))}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
        >
          <Flower2 size={18} /> Predict
        </button>
      </form>

      {result && (
        <p className="text-center text-green-600 text-lg font-medium mt-4 animate-pulse">
          🎉 It's likely a <span className="font-bold">{result}</span>!
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium mt-4">{error}</p>
      )}

      <p className="text-center text-xs text-gray-400 mt-6">Made with 💖 by Chirag</p>
    </div>
  );
}
