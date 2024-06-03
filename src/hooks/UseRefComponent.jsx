import React, { useRef, useState } from 'react';

const UseRefComponent = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0)

  const handleIncrement = () => {
    setCount((count) => count + 1);
    countRef.current ++

    console.log('State: ', count);
    console.log('UseRef: ', countRef.current);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="container">
      <div className="hooks">UseRef</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{count}</div>
        {/* <div>{countRef.current}</div> */}
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseRefComponent;
