import "./App.css";
import First from "./components/First";
import Input from "./components/Input";
import Button from "./components/Button";
import CounterExample from "./components/CounterExample";

function App() {
  return (
    <div className="App">
      <First />
      <Input placeholder={"Name"} />
      <Input placeholder={"Age"} />
      <Button placeholder={"Buttontext"} />
      <CounterExample />
      <p>Hello </p>
    </div>
  );
}

export default App;
