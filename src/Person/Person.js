import React from "react";
import "./Person.css";
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  boxs-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
`;


const Person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
      </StyledDiv>
  );
};

export default Person;
