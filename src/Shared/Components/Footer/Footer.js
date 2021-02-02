import React from 'react';

import Top from './Top/Top';
import Down from './Down/Down';

import './Footer.css';


const Footer = props => {
    return (
        <div className='footer'>
            <Top />
            <Down />
        </div>
    );
}

export default Footer;