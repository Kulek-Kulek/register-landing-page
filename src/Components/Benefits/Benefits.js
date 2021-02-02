import React from 'react';

import Section from '../../Shared/Components/Section/Section';
import CarouselWithSlogans from '../../Shared/Components/CarouselWithSlogans/CarouselWithSlogans';
import MainFeatures from '../../Shared/Components/MainFeatures/MainFeatures';

import './Benefits.css';



const Benefits = props => {
    return (
        <Section
            classSection='benefits'
            sectionMainHeading='Pakiet pełen korzyści'
        >
            <CarouselWithSlogans />
            <MainFeatures />
        </Section>
    );
}

export default Benefits;