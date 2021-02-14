import React from 'react';

import Top from './Top/Top';
import Down from './Down/Down';
import Contact from '../../../Components/Contact/Contact';
import InfoModal from '../InfoModal/InfoModal';

import './Footer.css';


const Footer = props => {
    return (
        <React.Fragment>
            <div className='footer'>
                <Top />
                <Down />
            </div>
            <Contact />
            <InfoModal
                messageHeading='Raz, dwa, trzy'
                messageSubheading='- poszło.'
                mainMessage='Wysłaliśmy do Ciebie potwierdzenie otrzymania zapytania. Skontaktujemy się z Tobą nie później niż w ciągu jednego dnia roboczego.'
                minorMessage='Dziękujemy - już bierzemy się do pracy.'
            />
        </React.Fragment>
    );
}

export default Footer;