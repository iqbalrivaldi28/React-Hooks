import React from 'react';

const Todos = (props) => {
  const { todo } = props;

  return (
    <div
      style={{
        backgroundColor: `${todo.completed ? 'green' : 'red'}`,
        margin: 10,
      }}
    >
      {todo.title} //? Title dari field data jsonPlacholdernya
    </div>
  );
};

export default Todos;
