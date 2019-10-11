import React, { useState } from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export const Specials = props => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials);

  return (
    <>
      {" "}
      {special.map((button, index) => (
        <SpecialButton key={index} 
          button={button} 
          display={props.display} 
          setDisplay={props.setDisplay}/>
      ))}{" "}
    </>
  );
};
