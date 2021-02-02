import React from 'react';

import Button from '../../../Elements/Button/Button';

import './MainFeatureItem.css';


const MainFeatureItem = props => {
    return (
        <div className='main-featuers__item'>
            <i className={props.iconClass} ></i>
            <h2 className={props.headingClass}>{props.heading}</h2>
            <p className={props.paragraphClass}>{props.paragraph}</p>
            <Button
                btnText={props.btnText}
                class={props.btnClass} />
        </div>
    );
}

export default MainFeatureItem;