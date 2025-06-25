"use client";

import { useState } from "react";
import { Flower2, Github, Linkedin, Globe, Loader2 } from "lucide-react";

export default function IrisForm() {
  const [form, setForm] = useState({
    sepal_length: "",
    sepal_width: "",
    petal_length: "",
    petal_width: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative max-w-lg mx-auto mt-12 p-6 rounded-3xl shadow-xl bg-gradient-to-br from-pink-100 to-indigo-100 text-gray-800 border border-indigo-200 font-[Poppins]">
      {/* GitHub Repo Button */}
      <a
        href="https://github.com/chiragpc2004/Iris-classifier"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-indigo-100 hover:text-indigo-700 transition-all"
        title="View Code on GitHub"
      >
        <Github size={18} />
      </a>

      <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6 tracking-tight">
        🌸 Iris Flower Classifier
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="number"
            step="any"
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key.replace("_", " ")}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white placeholder:text-gray-500 shadow-sm transition"
          />
        ))}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-xl font-semibold shadow-md transition-all ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={18} /> Predicting...
            </>
          ) : (
            <>
              <Flower2 size={18} /> Predict
            </>
          )}
        </button>
      </form>

      {/* Result or Error */}
      <div className="mt-6">
        {result && !isLoading && (
          <div className="text-center text-indigo-800 bg-indigo-50 border border-indigo-200 rounded-xl p-4 shadow-inner font-medium">
            🌷 It's likely a <span className="font-bold">{result}</span>.
          </div>
        )}
        {error && !isLoading && (
          <p className="text-center text-red-500 font-medium mt-2">{error}</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-600">
        <p>Made with 💖 by Chirag</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/chiragpc2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/chiragpc2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://chiragpc-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <Globe size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
