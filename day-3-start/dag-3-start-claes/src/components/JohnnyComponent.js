import React, { useState } from "react";

//

function SetJohnnyState() {
  const [count, setCount] = useState(0); //array , useState sets default value in this case 4
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
        <img src="https://64.media.tumblr.com/d86f2b440f89e3599c3590ce8c59f5c2/tumblr_ovra77cskH1rs3cx4o1_400.gif" />
        <button onClick={handleIncrementCount}>Vote for Johnny</button>
      </div>
      <span>Johnny has {count} votes</span>
    </>
  );
}

export default SetJohnnyState;
