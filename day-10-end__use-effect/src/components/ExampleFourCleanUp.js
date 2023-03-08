import React, { useState, useEffect } from 'react';

function Example() {
  // useEffect that starts a timer which runs every second
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('Timer running');
    }, 1000);

    // This is the cleanup function
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Example is showing</div>;
}

// Watching a variable
const ExampleFourCleanUp = () => {
  const [showComponent, setShowComponent] = useState(true);

  function onButtonClick() {
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent ? <Example /> : null}
      <button onClick={onButtonClick}>Hide component</button>
    </div>
  );
};

export default ExampleFourCleanUp;
