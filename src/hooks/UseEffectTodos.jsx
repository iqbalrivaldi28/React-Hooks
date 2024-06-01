import React, { useEffect, useState } from 'react';
import Todos from '../components/Todos';

const UseEffectTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div>
        {todos.map (todo => {
            return <Todos  key={todo.id} todo={todo}/>
        })}
    </div>
  )
};

export default UseEffectTodos;
