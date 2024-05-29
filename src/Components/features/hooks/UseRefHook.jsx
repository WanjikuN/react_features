// useRef hook creates a mutable reference that persists across component renders.
// Used to access and manipulate the DOM
// Stores mutable values that don't trigger re-renders
// Returns a mutable obj with  `current` property
import React, { useRef, useState, useEffect } from "react";

// export default function UseRefHook() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }

export default function PreviousStateExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    // Store the current count value in prevCountRef
    console.log(prevCountRef);
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount !== undefined ? prevCount : "N/A"}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
