import React from 'react';

import './StepItem.css';



const StepItem = props => {
    return (
        <div className={props.stepClass}>
            <span className={props.stepNumberClass}>{props.number}</span>
            <p className={props.stepDescClass}>{props.stepDesc}</p>
        </div>
    );
}

export default StepItem;