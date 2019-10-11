import React from "react";

export const SpecialButton = props => {
  function getSpecial(){
    if (props.button === 'C'){
      props.setDisplay(0);
    }
    if(props.button ==='+/-'){
      props.setDisplay(props.display * -1);
    }
    if(props.button === '%'){
      props.setDisplay(props.display /100);
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}{" "}
      <button onClick={()=> getSpecial()}>
        <span> {props.button} </span>{" "}
      </button>{" "}
    </>
  );
};
