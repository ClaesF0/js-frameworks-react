import React, { useState, useEffect } from 'react';

function Example() {
  // useEffect that starts a timer which runs every second
  useEffect(() => {
    setInterval(() => {
      console.log('Timer running');
    }, 1000);
  }, []);

  return <div>Example is showing</div>;
}

// Watching a variable
const ExampleFour = () => {
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

export default ExampleFour;
