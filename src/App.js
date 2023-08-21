import { useState } from "react";

const message = [
  "Learn React 👨‍🏫",
  "Apply for jobs 👱‍♂️",
  "Invest your new income 🤙",
];

export default function App() {
  const [step, setStep] = useState(1); //hooks
  const [close, setClose] = useState(true); //hooks
  // const [count, setCount] = useState(0);

  function handlePrevious() {
    if (step > 1) setStep((prev) => prev - 1);
  }
  function handleNext() {
    if (step < 3) setStep((prev) => prev + 1);
  }

  function handleClose() {
    setClose((prev) => !prev);
  }

  // const increase = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const increaseAsync = () => {
  //   setTimeout(() => {
  //     setCount((prev) => prev + 1);
  //   }, 3000);
  // };
  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {/* {count}
      <button onClick={increaseAsync}>IncreaseAscync</button>
      <button onClick={increase}>Increase</button> */}
      {close && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {message[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
