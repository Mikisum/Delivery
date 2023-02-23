import React, { useState } from 'react'
import style from './Count.module.css'

export const Count = ({ count }) => {

  const [counter, setCounter] = useState(count)

  const addCount = () => {
    setCounter(counter + 1)
  }

  const removeCount = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount} disabled={count === 1}>-</button>
      <p className={style.amount}>{counter}</p>
      <button
        className={style.plus}
        onClick={addCount}
      >
        +
      </button>
    </div>
  )
}
