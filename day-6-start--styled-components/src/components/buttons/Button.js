import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Button = (props) => {
  const [styles, setStyles] = useState({
    backgroundColor: "steelblue",
    color: "whitesmoke",
    padding: "20px",
    border: "2px solid black",
    margin: "0.5rem",
  });

  useEffect(() => {
    if (props.variant === "danger") {
      setStyles({
        ...styles,
        backgroundColor: "red",
      });
      console.log("props variant danger");
    } else if (props.variant === "confirm") {
      setStyles({
        ...styles,
        backgroundColor: "green",
      });
      console.log("props variant confirm");
    }
  }, []);
  return (
    <div>
      <button style={styles}>{props.children || "En eller annen knapp"}</button>
    </div>
  );
};

export default Button;
