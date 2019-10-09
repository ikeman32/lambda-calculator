import React, { useState } from "react";
import { OperatorButton } from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
    // STEP 2 - add the imported data to state
    const [opButtons, setOpButtons] = useState(operators);
    return ( < div className = "calcButtons" >
        {
            opButtons.map((button, index) => ( <
                OperatorButton key = { index }
                button = { button }
                />
            ))
        } < /div >
    );
};