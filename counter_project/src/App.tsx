import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("0");
  return (
    <div>
      <h1>Counter</h1>
      <p>Counter value: {count}</p>

      <div style={{marginTop: "20px", gap: "10px", display: "flex", justifyContent: "center" }}>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(Math.max(0, count - 1))}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div style={{marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px"}}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => (
          setCount(parseInt(inputValue)),
          setInputValue("0")
        )}>Set to {inputValue}</button>
      </div>
    </div>
  )
}

export default App
