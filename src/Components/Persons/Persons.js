import React from "react";
import Person from "./Person/Person";

const Persons = (props) => (
  <div>
    {props.persons.map((person, index) => {
      return (
        <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => props.changed(event, person.id)}
        ></Person>
      );
    })}
  </div>
);

export default Persons;
