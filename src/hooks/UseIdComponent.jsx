import React from 'react';
import Form from '../components/Form';

const UseIdComponent = () => {
  const name = 'Nama anda';
  const age = 'Umur anda';

  return (
    <>
      <div className="container">
        <Form text={name} />
        <Form text={age} />
      </div>
    </>
  );
};

export default UseIdComponent;
