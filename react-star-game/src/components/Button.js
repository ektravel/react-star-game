import React from "react";

const Button = props => {
    let button;
    switch (props.answerIsCorrect){
        case true: 
        button = 
        <button className = "btn btn-success" onClick={props.acceptAnswer}>
        <i className = "fas fa-check"></i>
        </button>;
        break;

        case false:
        button = 
        <button className = "btn btn-danger">
        <i className = "fas fa-times"></i>
        </button>;
        break;

        default: 
        button = 
        <button className = "btn" onClick={props.checkAnswer}
        disabled = {props.selectedNumbers.length === 0}> = </button>;
        break;
    }
    return (
    <div className = "col-2 text-center">
        {button}
        <br/><br/>
        <button className = "btn btn-warning btn-sm" onClick={props.redraw} disabled = {props.redraws === 0}>
        <i className = "fas fa-sync-alt"></i>
        {props.redraws}
        </button>
    </div>
    );
}

export default Button;