import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
  <div className="min-h-screen bg-blue-500 flex items-center justify-center">
    <h1 className="text-3xl font-bold text-white">Tailwind v4 is working 🎉</h1>
  </div>
);

  
}

export default App
