import React, { useReducer } from 'react';
import { reducer } from '../reducer/Reducer';
import { ActionType } from '../reducer/ActionType';

const UseReducerComponents = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({type: ActionType.INCREMENT, payload: 1})
  };

  const handleDecrement = () => {
    dispatch({type: ActionType.DECREMENT})
  };

  return (
    <div>
      <div className="hooks">useReducer</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{state.count}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseReducerComponents;
