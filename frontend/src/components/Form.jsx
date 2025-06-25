"use client";

import { useState } from 'react';
import { Flower2, Github, Linkedin, Globe } from 'lucide-react';

export default function IrisForm() {
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
      const res = await fetch("https://iris-9c9f.onrender.com/predict", {
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
    <div className="max-w-lg mx-auto mt-12 p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-pink-50 to-indigo-50 dark:from-[#0d1117] dark:to-[#1f2937] text-gray-800 dark:text-white border border-indigo-200 dark:border-white/10">
      <h1 className="text-3xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-4 tracking-tight">
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-[#0d1117]"
          />
        ))}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition-all"
        >
          <Flower2 size={18} /> Predict
        </button>
      </form>

      {result && (
        <p className="text-center text-green-600 dark:text-green-400 text-lg font-medium mt-4 animate-pulse">
          🎉 It's likely a <span className="font-bold">{result}</span>!
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium mt-4">{error}</p>
      )}

      <div className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <p>Made with 💖 by Chirag</p>
        <div className="flex gap-4">
          <a href="https://github.com/chiragpc2004" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/chiragpc2004" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <Linkedin size={18} />
          </a>
          <a href="https://chiragpc-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            <Globe size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
