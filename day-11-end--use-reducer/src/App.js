import './App.css';
import BasicExample from "./components/BasicExample";
import BasicExampleWithUseReducer from "./components/BasicExampleWithUseReducer";
import ProductExample from "./components/ProductExample";

function App() {

  return (
    <div className="App">
      <BasicExample/>
      <BasicExampleWithUseReducer/>
      <ProductExample/>
    </div>
  );
}

export default App;
