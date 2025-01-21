import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice'

const Home = () => {
  const dispatch=useDispatch()
  const {count}=useSelector((state)=>state.counter)

  const handleIncrement=()=>{
    dispatch(increment())
  }

  const handleDecrement=()=>{
   dispatch(decrement())
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={handleIncrement}>increment</button>
    <button onClick={handleDecrement}>decrement</button>
    </>
  )
}

export default Home
