import React, { useRef } from 'react';

const UseRefComponentDua = () => {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
        <input ref={inputRef} type="text" />
        <button onClick={focus}>Focus to input</button>
    </>
  )
};

export default UseRefComponentDua;
