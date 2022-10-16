import {useState} from "react";

const Button = (props) => {

    return(
        <button onClick={props.onClick}>{props.num}</button>
    )
}

export default Button;