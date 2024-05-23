// useReducer() hook is an alternative to useState
// Used when state transitions depend on the previous state
// counter using useState
import React, {useState} from "react";
const Counter = () =>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>{count}</button>
        </div>
    )
}
export default Counter;