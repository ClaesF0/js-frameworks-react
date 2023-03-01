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
        <Form>hallå</Form>
        <p>heisann</p>
        <Input placeholder="Name" />
        <Input placeholder="City" bcolor="red" />
        <Button variant={"danger"} children={"hallo children"} />
        <Button variant={"confirm"} children={"hellå ther children"} />
        <button>random html knapp</button>
        <p>hallo, ja</p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
