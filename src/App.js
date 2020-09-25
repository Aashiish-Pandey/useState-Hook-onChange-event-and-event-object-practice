import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "ashish", age: 28 },
      { name: "prince", age: 29 },
      { name: "shubahm", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "prince dubey", age: 29 },
        { name: "Shubham pandey", age: 27 },
      ],
    });
  };

  namechangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ashish accenture", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Shubham pandey", age: 27 },
      ],
    });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age}></Person>;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.tooglePersonsHandler}>
          Switch Name
        </button>

        {[persons]}
      </div>
    );
  }
}

export default App;
