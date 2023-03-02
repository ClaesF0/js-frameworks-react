import "./App.css";
import { ThemeProvider } from "styled-components";
import PageHeading from "./components/headings/PageHeading";
import Container from "./components/layout/Container";
import Form from "./components/form/Form";
import Input from "./components/form/Input";
import Button from "./components/buttons/Button";

const theme = {
  primaryColor: "#dbc2cf",
  secondaryColor: "#2e4756",
  borderColor: "#666",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageHeading>Register</PageHeading>
        <Form>Form text</Form>
        <p>Hey there paragraph</p>
        <Input placeholder="Name" bcolor="blue" />
        <Input placeholder="City" bcolor="red" />
        <Button
          variant={"danger"}
          children={"hallo children i am danger btn"}
        />
        <Button
          variant={"confirm"}
          children={"hellå ther children i am green confirm btn"}
        />
        <Button
          variant={"warning"}
          children={"Hello i am hastily constructed warning btn"}
        />
        <Button children={"hey there i am just a default steelblue btn"} />
        <Button children={"so am i"} />
        <button>random html btn</button>
        <p>hallo,again </p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
