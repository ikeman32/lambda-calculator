import React from "react";

export const NumberButton = props => {
  function getNumbers(){
    if(props.display === 0){
      if(props.button !== '0'){
        props.setDisplay(props.button);
      }
      
      if(props.button === '.'){
        props.setDisplay(props.display + props.button)
      }
    }else{
      props.setDisplay(props.display + props.button);
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}{" "}
      <button onClick = {()=> getNumbers()
      }>
        {" "}
        <span> {props.button} </span>{" "}
      </button>
    </>
  );
};
