function Heading({ color, fontSize, name, age }) {
  //add a color inline
  const headingStyle = {
    color: color ? color : "red",
    fontSize: fontSize + "px",
  };
  return (
    <h1 style={headingStyle}>
      Name from heading.js {name} age from heading {age} using fontSize{" "}
      {fontSize}
    </h1>
  );
}

export default Heading;
