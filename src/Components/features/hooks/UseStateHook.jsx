// Designed for managing state
// Triggers re-renders when the state updates
import React, { useState } from "react";

export default function UseStateHook() {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count => count + 1);
  //   };

  //   return (
  //     <div>
  //       <p>Count: {count}</p>
  //       <button onClick={increment}>Increment</button>
  //     </div>
  //   );
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    // Submit the form
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    // Display success message
    setInputValue(""); // Clear the input field
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
