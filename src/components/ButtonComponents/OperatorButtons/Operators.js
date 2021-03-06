import React, { useState } from "react";
import { OperatorButton } from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

export const Operators = props => {
  // STEP 2 - add the imported data to state
  const [opButtons, setOpButtons] = useState(operators);
  return (
    <>
      {opButtons.map((button, index) => (
        <OperatorButton key={index} 
          button={button} 
          display={props.display} 
          setDisplay={props.setDisplay}/>
      ))}{" "}
    </>
  );
};
