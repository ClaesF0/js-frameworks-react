import React, { useState } from "react";

//

function SomeComponentForLearningState() {
  const [count, setCount] = useState(0); //array , useState sets default value in this case 4
  //1: value
  //2: function to use to update your value

  function handleIncrementCount() {
    console.log("you clicked plus+");
    setCount(count + 1);
  }

  function handleDecrementCount() {
    console.log("you clicked minus-");
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={handleIncrementCount}>plus +</button>
      <span>value of "count" {count}</span>
      <button onClick={handleDecrementCount}>minus -</button>
    </>
  );
}

export default SomeComponentForLearningState;
