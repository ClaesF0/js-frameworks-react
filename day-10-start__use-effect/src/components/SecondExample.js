import React, { useState, useEffect } from "react";

const ShowingMessage = () => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Timer is running");
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>hello i am show message component / ShowingMessage</div>;
};

const SecondExample = () => {
  const [showComponent, setShowComponent] = useState(true);
  function handleBtnClick() {
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent ? <ShowingMessage /> : null}
      <button onClick={handleBtnClick}>hide show component</button>
    </div>
  );
};

export default SecondExample;
