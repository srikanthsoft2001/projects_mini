import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./Counter.css";

function Counter() {
  let [counter, setCounter] = useState(0);

  const incHandler = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  const decHandler = () => {
    if (counter <= 0) {
      alert("counter is already zero and cannot furthur go down!");
    } else {
      setCounter((previousCounter) => previousCounter - 1);
    }
  };

  const resetHandler = () =>{
    setCounter(0);
  }

  return (
    <div className="container">
      <div className="container_counter">{counter}</div>
      <div className="container_change">
        <button className="container_button" onClick={incHandler}>
          +
        </button>
        {/* disabled will make button disabled.... */}
        <button
          className="container_button"
          onClick={decHandler}
          disabled={counter === 0}
        >
          -
        </button>
        <button className="container_button" onClick={resetHandler}>reset</button>
      </div>
    </div>
  );
}

export default Counter;

// learning - state and use state containarization...
