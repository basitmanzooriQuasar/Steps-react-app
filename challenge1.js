import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  //hooks
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  //functions for event handlers
  const stepLess = () => {
    setStep((prev) => prev - 1);
  };
  const stepMore = () => {
    setStep((prev) => prev + 1);
  };

  const countLess = () => {
    setCount((prev) => prev - step);
  };
  const countMore = () => {
    setCount((prev) => prev + step);
  };

  //Date function
  const date = new Date("Aug 15 2023");
  date.setDate(date.getDate() + count);
  return (
    <div className="App">
      <div>
        <button onClick={stepLess}>-</button>
        <span>Step: {step}</span> <button onClick={stepMore}>+</button>
      </div>
      <div>
        <button onClick={countLess}>-</button>
        <span>Count: {count}</span> <button onClick={countMore}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from now is `
          : `${-count} days ago is `}
        {date.toDateString()}
      </p>
    </div>
  );
}
