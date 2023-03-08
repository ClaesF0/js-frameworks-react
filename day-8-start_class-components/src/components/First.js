import { Component } from "react";

class First extends Component {
  //constructor is where we define our components
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      myVar: 0,
      name: "jake",
      age: "31",
      carsData: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    //we make API calls and we update the state
    //we make API call using Axios

    //this.setState({
    //  carsData: [], //here we put data from the API
    //});

    setTimeout(() => {
      this.setState({
        myVar: "10",
        name: "billy børre",
        age: "43",
      });
    }, 2000);
  }

  //(componentDidUpdate)
  //this is called immediately after updating occurs
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //componentWillUnmount
  //is called immediately before a component is unmounted and destroyed

  render() {
    console.log("render");
    //this is where we return our JSX
    return (
      <div>
        <h1>Hello this is my var value: {this.state.myVar}</h1>
        <h1>Hei this is this.state.name: {this.state.name}</h1>
        <h1>Hei this is this.state.age: {this.state.age}</h1>
        <h1>Hei this is this.state.myVar: {this.state.myVar}</h1>
      </div>
    );
  }
}

export default First;
