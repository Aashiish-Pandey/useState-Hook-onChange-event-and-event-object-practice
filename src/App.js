import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyledButton = styled.button`

background-color: green,
      color: white,
      font: inherit,
      border: 1px solid blue,
      padding: 8px,
      cursor: pointer,
      &:hover {
        background-color: yellow,
        color: brown,


`;
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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "yellow",
    //     color: "brown",
    //   },
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.namechangeHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "lightred",
      //   color: "black",
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}> This is really working!</p>
        <StyledButton onClick={this.tooglePersonsHandler}>
          Switch Name
        </StyledButton>

        {[persons]}
      </div>
    );
  }
}

export default App;
