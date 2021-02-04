import React from 'react';

import Top from './Top/Top';
import Down from './Down/Down';
import Contact from '../../../Components/Contact/Contact';

import './Footer.css';


const Footer = props => {
    return (
        <React.Fragment>
            <div className='footer'>
                <Top />
                <Down />
            </div>
            <Contact />
        </React.Fragment>
    );
}

export default Footer;