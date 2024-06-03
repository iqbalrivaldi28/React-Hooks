import React, { useRef } from 'react';
import LoginImperative from '../components/LoginImperative';

const UseImperativeHandle = () => {
  const loginRef = useRef();
  console.log('render dari parent');

  return (
    <main>
      <LoginImperative ref={loginRef} />
      <div className="imperative">
        <p>Parent component</p>
        <button onClick={() => loginRef.current.setLogin()}>Login dari Parent</button>
      </div>
    </main>
  );
};

export default UseImperativeHandle;
