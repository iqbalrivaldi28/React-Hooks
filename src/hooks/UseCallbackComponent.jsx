import React, { useCallback, useState } from 'react';
import List from '../components/List';

const UseCallbackComponent = () => {
  const [state, setState] = useState(false);
  const [dep, setDep] = useState(false);
  console.log('Parent Component redered');

  const handler = useCallback (
    (event) => {
        console.log('You clicked', event.currentTarget);
    }, [dep]
  )

  const stateHandler = () => {
    setState(!state)
  }

  return (
    <>
        <button onClick={stateHandler}>Change State Of Parent Component</button>
        <List handler={handler} />
        <button onClick={() => setDep(!dep)} >Ganti Depedency</button>
    </>
  )
};

export default UseCallbackComponent;
