import React from 'react';

import OneTwoThree from '../../Shared/Components/OneTwoThree/OneTwoThree';

import Section from '../../Shared/Components/Section/Section';
import './HowToOrder.css';

const HowToOrder = props => {
    return (
        <Section
            sectionId='order'
            classSection='how-to-order'
            sectionMainHeading='Trzy kroki do sukcesu'
        >
            <OneTwoThree />
        </Section>
    );
}

export default HowToOrder;