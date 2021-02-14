import React from 'react';


import Section from '../../Shared/Components/Section/Section';
import FAQ from '../../Shared/Components/FAQ/FAQ';

import './QA.css';

const QA = props => {
    return (
        <Section
            sectionId='questions'
            classSection='qa'
            sectionMainHeading='Mamy odpowiedź na wszystko'
        >
            <FAQ />
        </Section>
    );
}

export default QA;