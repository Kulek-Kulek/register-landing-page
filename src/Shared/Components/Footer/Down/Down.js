import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactCard from '../ContactCard/ContactCard';


import './Down.css';

const contactList = [
    {
        id: uuidv4(),
        heading: 'Zadzwoń teraz',
        headingClass: 'footer-down__heading',
        iconClass: 'fas fa-phone-volume footer-down__i',
        aClass: 'footer-down__a',
        paragraph: 'Sprawdź godziny dostępności  naszych konsultantów',
        paragraphClass: 'footer-down__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'footer-down__btn sliding-slogan-with-underline__btn sliding-slogan-with-underline__btn-left footer__btn',
        btnId: 'footer-down__btn-phone'
    },
    {
        id: uuidv4(),
        heading: 'Email kontakt',
        headingClass: 'footer-down__heading',
        iconClass: 'far fa-envelope footer-down__i',
        aClass: 'footer-down__a',
        paragraph: 'Skontaktujemy się z Tobą mailowo lub telefonicznie',
        paragraphClass: 'footer-down__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'footer-down__btn sliding-slogan-with-underline__btn footer__btn',
        btnId: 'footer-down__btn-email'
    }
];


const Down = () => {

    const contactDetails = contactList.map(card => (
        <ContactCard
            key={card.id}
            iconClass={card.iconClass}
            headingClass={card.headingClass}
            heading={card.heading}
            paragraphClass={card.paragraphClass}
            paragraph={card.paragraph}
            btnText={card.btnText}
            btnClass={card.btnClass}
            cardClass='footer-down__contact-card'
            btnId={card.btnId}
        />

    ));

    return (
        <div className='footer-down'>
            <div className='footer-down__cards'>
                <div className='footer-down__card'>
                    {contactDetails}
                </div>
            </div>
            <div className='footer-down__media'>
                <h2 className='footer-down__slogan'>
                    <span className='footer-down__span'>Duis</span>
                    <span className='footer-down__span'>cupidatat</span>
                    <span className='footer-down__span'>voluptate.</span>
                </h2>
            </div>
        </div>
    );
}

export default Down;