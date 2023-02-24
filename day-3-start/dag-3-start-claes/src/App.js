import "./App.css";

import SetJackState from "./components/JackComponent";
import SetJohnnyState from "./components/JohnnyComponent";
import SetSteveState from "./components/SteveComponents";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="holdingDiv">
          <SetJackState />
        </div>
        <div className="holdingDiv">
          <SetSteveState />
        </div>
        <div className="holdingDiv">
          <SetJohnnyState />
        </div>
      </div>
    </div>
  );
}

export default App;
