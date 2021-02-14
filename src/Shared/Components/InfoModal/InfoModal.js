import React from 'react';

import Button from '../../Elements/Button/Button';

import './InfoModal.css';

const MessageSent = props => {

    const hideMessageSentModalHandler = () => {
        const messageSent = document.querySelector('.message-sent');
        const contacForm = document.querySelector('.contact');

        messageSent.classList.remove('message-sent--active');
        contacForm.classList.remove('contact--active');
        props.errorModalHide && props.errorModalHide();
    }


    return (
        <div className={`message-sent ${props.class}`}>
            <p className='message-sent__heading'>{props.messageHeading}
                <span className='message-sent__subheading'>{props.messageSubheading}</span>
            </p>
            <div className='message-sent__message'>
                <p>{props.mainMessage}</p>
                <p className='message-sent__thanks'>{props.minorMessage}</p>
            </div>
            <div className='message-sent__btn-div'>
                <Button
                    class='footer-down__btn sliding-slogan-with-underline__btn message-sent__btn'
                    btnText='zamknij'
                    click={hideMessageSentModalHandler}
                    id='message-sent__cancel-button'
                />
            </div>
        </div>
    );
}

export default MessageSent;