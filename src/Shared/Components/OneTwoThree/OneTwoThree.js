import React from 'react';

import Steps from './Steps/Steps';
import Slogan from './Slogan/Slogan';

import './OneTwoThree.css';


const OneTwoThree = props => {
    return (
        <div className='three-steps'>
            <Steps />
            <Slogan />
        </div>
    );
}

export default OneTwoThree;