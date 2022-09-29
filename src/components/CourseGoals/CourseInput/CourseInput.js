import React, { useState, Fragment, useRef } from "react";

import styles from "./CourseInput.module.css";

import styled from "styled-components";

import Wrapper from "../../helper/Wrapper";
//-----------------------------------------------------CSS
const Button = styled.button`
  font: inherit;
  color: white;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &focus {
    outline: none;
  }

  &hover,
  &active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

//----------------------------------------------------

const CourseInput = (props) => {
  const [validty, setValidty] = useState(true);
  const goal = useRef();
//--------
  const goalInputChangeHandler = (event) => {

    if (goal.current.value.trim()) {
      setValidty(true);
    }
  };
//-----------------
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (goal.current.value.trim()) {
      setValidty(true);
      props.onAddGoal(goal.current.value);
      goal.current.value="";
        } else {
      setValidty(false);
    }
  };
//---------------
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["form-control"]} ${!validty && styles.invalid}`}
        >
          <label>Course Goal</label>
          <input
            type="text"
            onChange={goalInputChangeHandler}
            ref={goal}
          />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </>
  );
};

export default CourseInput;

//props.onAddGoal(enteredValue);
