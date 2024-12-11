import React, { useState } from 'react'
import './App.css'

const App = () => {
 const [count,setCount] = useState(0);
  return (
    <div className="counter">
      <div className="title">
        <h1>Counter App</h1>
      </div>
      <div className="counter-sec">
        <button className="sub" onClick={() => setCount(count - 1)}>
          -
        </button>
        <h1 className="num">{count}</h1>
        <button className="add" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div className="reset">
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App
