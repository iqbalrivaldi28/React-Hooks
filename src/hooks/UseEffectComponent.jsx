import React, { useEffect, useState } from 'react';

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(1);

  useEffect(() => {
    console.log('use Effect running');
  }, [countTwo]); //? use effect akan berkerja jika ada perubahan pada state countTwo saja

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCountTwo((countTwo) => countTwo - 1);
  };

  return (
    <div>
      <div className="hooks">useEffect</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement Count Two</button>
        <div>{count}</div>
        <div>{countTwo}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseEffectComponent;
