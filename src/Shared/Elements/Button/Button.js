import React from 'react';

import './Button.css';

const Button = props => {
    return (
        <button
            onClick={props.click}
            type={props.type}
            className={`button ${props.class}`}
            disabled={props.disabled}
            id={props.id}
            name={props.name}>
            {props.btnText}
            <i className={props.arrowClassName}></i>
        </button>
    );
}

export default Button;