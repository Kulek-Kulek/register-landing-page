import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import MainFeatureItem from './MainFeaturesItem/MainFeatureItem';
import './MainFeatures.css';


const mainFeatuersList = [
    {
        id: uuidv4(),
        heading: 'heading one',
        headingClass: 'main-features__heading',
        iconClass: 'fa fa-handshake main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Ipsum aute nostrud in est laborum laboris dolore cupidatat ullamco.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    },
    {
        id: uuidv4(),
        heading: 'heading oneie',
        headingClass: 'main-features__heading',
        iconClass: 'fab fa-affiliatetheme main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'In cupidatat sunt Lorem dolor pariatur tempor amet laboris est sint officia eiusmod.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    },
    {
        id: uuidv4(),
        heading: 'heading oneje',
        headingClass: 'main-features__heading',
        iconClass: 'fab fa-buffer main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Eiusmod dolor ea Lorem minim cupidatat adipisicing ut nisi ullamco enim id occaecat.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    }
]

const MainFeatures = props => {

    const mainFeatures = mainFeatuersList.map(feature => (
        <MainFeatureItem
            key={feature.id}
            iconClass={feature.iconClass}
            headingClass={feature.headingClass}
            heading={feature.heading}
            paragraphClass={feature.paragraphClass}
            paragraph={feature.paragraph}
            btnText={feature.btnText}
            btnClass={feature.btnClass}
        />
    ));

    return (
        <div className='main-featuers'>
            {mainFeatures}
        </div >
    );
}

export default MainFeatures;