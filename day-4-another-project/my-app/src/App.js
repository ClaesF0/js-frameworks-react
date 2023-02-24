/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";

function App() {
  let isLoggedIn = true;

  let content;

  if (isLoggedIn) {
    content = (
      <div>
        <h1>Profile</h1>
        <ul>
          <li>Name: Jack</li>
          <li>age: 32</li>
          <li>Phone Number: 81549300</li>
        </ul>
      </div>
    );
  } else {
    <div>login form</div>;
  }

  return (
    <div className="App">
      {content}
      {/*Ternary operator*/}
      <div>
        {isLoggedIn ? (
          <div>profile component</div>
        ) : (
          <div>Sign in component</div>
        )}
        <div>{isLoggedIn && <div>profile component</div>}</div>
        <div>{!isLoggedIn && <div>Sign In component</div>}</div>
      </div>
    </div>
  );
}

export default App;
