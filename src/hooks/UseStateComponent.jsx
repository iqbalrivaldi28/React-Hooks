import React, { useState } from 'react'

const UseStateComponent = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count => count + 1) //? Cara ini kita amil nilai statenya baru di tambah
  }

  const handleDecrement = () => {
    setCount(count => count - 1)
  }

  return (
    <div>
      <div className="hooks">useState</div>
      <div className="content">
        <button onClick={handleDecrement} >decrement</button>
        <div>{count}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  )
}

export default UseStateComponent