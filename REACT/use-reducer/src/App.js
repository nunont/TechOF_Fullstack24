import logo from './logo.svg';
import './App.css';
import React, {useReducer} from 'react';



function App() {
  const initialCounterValue = {counter: 0, clicks: 0};
  const [counter, dispatchCounter] = useReducer(counterReducer, initialCounterValue);

  return <>
      <h1>Counter: {counter.counter}</h1>
      <h2>Clicks: {counter.clicks}</h2>
      <button onClick={() => dispatchCounter({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatchCounter({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatchCounter({type: 'reset'})}>Reset</button>
  </>;

  function counterReducer(state, action) {
    let newState = {...state};
    newState.clicks++;

    switch(action.type) {
      case 'increment':
        newState.counter++;
        break;
      case 'decrement':
        newState.counter--;
        break;
      case 'reset':
        newState.counter = 0;
        break;
      default:
        return state;
    }

    return newState;
  }
}

export default App;
