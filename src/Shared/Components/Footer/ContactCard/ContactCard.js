import React from 'react';

import Button from '../../../../Shared/Elements/Button/Button';

import './ContactCard.css';


const ContactCard = props => {
    return (
        <div className={props.cardClass}>
            <i className={props.iconClass} ></i>
            <h2 className={props.headingClass}>{props.heading}</h2>
            <p className={props.paragraphClass}>{props.paragraph}</p>
            <Button
                id={props.btnId}
                btnText={props.btnText}
                class={props.btnClass} />
        </div>
    );
}

export default ContactCard;