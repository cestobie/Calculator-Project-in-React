import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    console.log("Add: imputValue =", inputValue);
    setResult((result) => result + inputValue); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    console.log("Subtract: inputValue =", inputValue);
    setResult((result) => result - inputValue);
  };
 
  function times(e) { 
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => result * inputValue);
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue === 0) {
      alert("Cannot divide by zero");
    } else {
      setResult((result) => result / inputValue);
    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = '';
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p> 
          {/* Display the value of the current total */}
          Result: {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button type="button" onClick={plus}>Add</button> 
        <button type="button" onClick={minus}>Subtract</button> 
        <button type="button" onClick={times}>Multiply</button> 
        <button type="button" onClick={divide}>Divide</button> 
        <button type="button" onClick={resetInput}>Clear Input</button> 
        <button type="button" onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 

