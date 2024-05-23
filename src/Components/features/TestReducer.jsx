// useReducer() hook is an alternative to useState
// Used when state transitions depend on the previous state

import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useReducer } from "react";
// counter using useState
// const Counter = () =>{
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <button onClick={()=>setCount(count + 1)}>{count}</button>
//         </div>
//     )
// }
// using useReducer
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// };
// const Counter = () => {
//   // Initializing the state using useReducer
//   // Pass in the reducer function and the initial state
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// };
// Loading
const reducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { load: true };
    case "Error":
      return { load: false };
    default:
      return state;
  }
};

const Counter = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, { load: false });

  return (
    <>
      <button onClick={() => dispatch({ type: "Loading" })}>
        IsLoading...
      </button>
      <button onClick={() => dispatch({ type: "Error" })}>Ooops!!...</button>
      <div>{state.load ? "Loading..." : "Not Loading"}</div>
    </>
  );
};

export default Counter;
