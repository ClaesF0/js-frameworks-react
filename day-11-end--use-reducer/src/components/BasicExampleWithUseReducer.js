import {useReducer} from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}


function reducer(state, action) { // state is our current state,  action is what we pass in the dispatch function
// return {count: state.count + 1}
  switch (action.type) { // types are the actions you can do on your state
    case "increment":
      return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
    default:
      return state
  }
}


const BasicExampleWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0}) // it takes two argument the reducer function and the initial state
  // the return will be the state which is this object {count: 0}
  // and dispatch and this is a function that we call to update our state, it will call for us the reducer function on top


  function increment() {
    dispatch({type: "increment"});
  }

  function decrement() {
    dispatch({type: "decrement"});
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default BasicExampleWithUseReducer;
