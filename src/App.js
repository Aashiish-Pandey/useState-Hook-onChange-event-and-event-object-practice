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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, "ashish pandit")}>
          Switch Name
        </button>
        <Person
          click={() => this.switchNameHandler("Akhilesh Pandey")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed = {this.namechangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
