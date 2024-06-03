import React, { useId } from 'react';

const Form = (props) => {
const {text} = props

  const id = useId();

  return (
    <>
        <label htmlFor={`${id}-1`}>{text}</label>
        <input id={`${id}-1`} type="text" />

        <label htmlFor={id}>{text} 2</label>
        <input id={id} type="text" />
    </>
  )

}
export default Form;
