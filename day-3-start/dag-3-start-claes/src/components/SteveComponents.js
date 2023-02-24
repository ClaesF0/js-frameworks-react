import React, { useState } from "react";

function SetSteveState() {
  const [count, setCount] = useState(0); //array , useState sets default value in this case zero.
  //1: value
  //2: function to use to update your value

  function handleIncrementCount() {
    console.log("you clicked plus+");
    setCount(count + 1);
  }

  //function handleDecrementCount() {
  //  console.log("you clicked minus-");
  //  setCount(count - 1);
  //}

  return (
    <>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZJjnnz-QX5ad0i5ZpSGR6sni21BLI9gH9fVzcA9RCg&s" />
        <button onClick={handleIncrementCount}>Vote for Steve</button>
      </div>
      <span>Steve has {count} votes</span>
    </>
  );
}

export default SetSteveState;
