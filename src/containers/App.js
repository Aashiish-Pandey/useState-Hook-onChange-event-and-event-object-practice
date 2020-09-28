import React, { Component } from "react";
import "./App.css";
import Person from "../Components/Persons/Person/Person";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Persons/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "ashish", age: 28 },
      { id: "2", name: "prince", age: 29 },
      { id: "3", name: "shubahm", age: 26 },
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

  namechangeHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(
      (person) => id === person.id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (index) => {
    // do'nt mutate the orginal array, instead create a copy of it
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.namechangeHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          click={this.tooglePersonsHandler}
          appTitle = {this.props.appTitle}
        />

        {[persons]}
      </div>
    );
  }
}

export default App;
