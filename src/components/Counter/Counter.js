import { useSelector , useDispatch} from 'react-redux';
import React, { useState } from 'react';
import './Counter.css';
import {counterActions} from '../../store/index';

const Counter = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice

  const [inputVal, setInputVal] = useState(0);

  const dispatch = useDispatch();
  // useSelector is used for getting data out of the store
  const counter = useSelector(state => state.counter.counter); // this will make a subscription
  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(parseInt(inputVal, 10)));
  }
  
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    
    <main className="Counter">
      {isAuthenticated? null : props.history.push("/login")}
      <h1>Redux Counter</h1>
      {show?<div className="value">{counter}</div>:null}
      {/* {show && <div className="value">{counter}</div>} */}
      <div>

      <input type="text" onChange={(event) => setInputVal(event.target.value)}/> 
      <button onClick={increaseHandler}>Increase by </button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
