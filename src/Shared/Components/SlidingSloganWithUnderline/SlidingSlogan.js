import React from 'react';


const SlidingSlogan = props => {
    return (
        <React.Fragment>
            <span className={props.class}>{props.slogan}</span>
        </React.Fragment>
    );
}

export default SlidingSlogan;