import React, { useState } from "react";

//

function SetJackState() {
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
        <img src="https://d.newsweek.com/en/full/2042519/captain-jack-sparrow-run-viral-tiktok.jpg?w=1600&h=1200&q=88&f=600b670045f214f172807b570e075526" />
        <button onClick={handleIncrementCount}>Vote for Jack</button>
      </div>
      <span>Jack has {count} votes</span>
    </>
  );
}

export default SetJackState;
