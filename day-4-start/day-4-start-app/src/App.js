import logo from "./logo.svg";
import "./App.css";

const products = [
  { id: 0, name: "Samuel L Jacksons beer", price: "300" },
  { id: 1, name: "Player haters ball", price: "666" },
  { id: 2, name: "Modern problems modern solutions", price: "543" },
  { id: 3, name: "Rick James", price: "123" },
];

function App() {
  return (
    <div className="App">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
