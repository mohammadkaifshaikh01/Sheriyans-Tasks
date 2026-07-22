import  { useState } from "react";
import "../style/Counter.css"

const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button className="increment" onClick={increment}>Increment</button>
      <button className="decrement" onClick={decrement}>Decrement</button>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
