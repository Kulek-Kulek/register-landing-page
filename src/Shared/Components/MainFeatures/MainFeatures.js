import React from 'react';

import MainFeatureItem from './MainFeaturesItem/MainFeatureItem';
import './MainFeatures.css';




const MainFeatures = props => {

    const mainFeatures = props.mainFeatuersList.map(feature => (
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