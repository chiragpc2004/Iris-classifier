import { useState } from 'react';

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
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setResult(data.species);
      setError(null);
    } catch (err) {
      setError("Error connecting to backend");
      setResult(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center text-indigo-700">🌸 Iris Flower Classifier</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.keys(form).map((field) => (
          <input
            key={field}
            type="number"
            step="any"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.replace('_', ' ')}
            required
            className="w-full p-2 border rounded"
          />
        ))}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Predict
        </button>
      </form>

      {result && (
        <p className="text-center text-green-600 font-semibold">
          Predicted Species: {result}
        </p>
      )}
      {error && (
        <p className="text-center text-red-600 font-semibold">
          {error}
        </p>
      )}
    </div>
  );
}
