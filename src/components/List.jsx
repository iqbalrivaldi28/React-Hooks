import React, { memo, useEffect } from 'react';

const List = (props) => {
  const { handler } = props;

  const items = ['Ikan', 'Ayam', 'Sapi', 'Kambing']

  useEffect (() => {
    console.log('Child componentn rendered');
  }, [handler])


  return (
    <>
        {items.map((item, index) => {
            return (
                <div key={index} onClick={handler}>
                    {item}
                </div>
            )
        })}
    </>
  )
};

export default memo(List);
