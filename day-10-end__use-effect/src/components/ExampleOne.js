import React, { useEffect } from 'react';

const ExampleOne = () => {
  useEffect(() => {
    // Side effect code here
    console.log('useEffect ran'); // will only run once the component is mounted
  }, []);

  return (
    <div>
      <h1>useEffect Example One</h1>
    </div>
  );
};

export default ExampleOne;
