import { useState } from 'react'
import construct from './assets/construct.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Welcome to EZ Shopping 🛍 </h2>
      <p>This website isn't available yet ! Stay tuned !</p>
      <img className="logo" src={construct} alt="" />
    </div>
  )
}

export default App
