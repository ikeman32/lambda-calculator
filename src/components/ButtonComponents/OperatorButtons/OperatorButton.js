import React from "react";
let divide = false,
  add = false,
  multiply = false,
  subtract = false;
let num1 = 0;
export const OperatorButton = props => {
  function getOperator() {
    let value = props.button.value;
    let ans = 0;

    if (props.display !== 0) {
      if (value === "/") {
        num1 = props.display;
        divide = true;
        props.setDisplay(0);
      } else if (value === "*") {
        num1 = props.display;
        multiply = true;
        props.setDisplay(0);
      } else if (value === "+") {
        num1 = props.display;
        add = true;
        props.setDisplay(0);
      } else if (value === "-") {
        num1 = props.display;
        subtract = true;
        props.setDisplay(0);
      }
    }
    if (value === "=") {
      if (divide === true) {
        if (props.display !== 0) {
          ans = Number(num1) / Number(props.display);
          props.setDisplay(ans);
          divide = false;
        }
      }
      if (add === true) {
        ans = Number(num1) + Number(props.display);
        props.setDisplay(ans);
        add = false;
      }
      if (multiply === true) {
        ans = Number(num1) * Number(props.display);
        props.setDisplay(ans);
        multiply = false;
      }
      if (subtract === true) {
        ans = Number(num1) - Number(props.display);
        props.setDisplay(ans);
        subtract = false;
      }
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}{" "}
      <button onClick={() => getOperator()}>
        {" "}
        <span> {props.button.value} </span>{" "}
      </button>{" "}
    </>
  );
};
