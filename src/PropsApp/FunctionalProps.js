import React from "react";
import Props from "./ClassProps";

function FuncProp(Props){
    return <div>
        <h3>Hello Learner ! {Props.name} , thank you for coming from {Props.city}</h3>
    </div>
}

export default FuncProp;