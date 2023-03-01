import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem;
  height: 40px;
  border: 3px solid ${(props) => props.theme.borderColor};
  margin: 0.5rem;
  background-color: ${(props) => props};
  border-color: ${(props) => props.bcolor};
`;

const Input = (props) => {
  console.log("props", props);
  return <StyledInput placeholder={props.placeholder} bcolor={props.bcolor} />;
};

export default Input;
