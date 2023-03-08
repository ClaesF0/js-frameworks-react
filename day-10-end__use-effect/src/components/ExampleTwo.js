import React, { useState, useEffect } from 'react';

const ExampleTwo = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect has run');
  }); // No dependency array  // Run every time component is rendered

  // useEffect(() => {
  //   console.log('useEffect has run');
  // },[]);

// Have dependency array  // Run only when the component is mounted

  function onIncrementCounter() {
    setCounter(counter + 1);
  }

  function onDecrementCounter() {
    setCounter(counter - 1);
  }

  console.log('Component has rendered');

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
};

export default ExampleTwo;
