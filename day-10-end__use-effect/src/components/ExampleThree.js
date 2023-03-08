import React, { useState, useEffect } from 'react';

// Watching a variable
const ExampleThree = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect code here
    document.title = `Count: ${count}`;
  }, [count]); // By including [count] in the dependencies array
  // we ensure that the effect only runs when the count value changes, rather than on every render

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleThree;
