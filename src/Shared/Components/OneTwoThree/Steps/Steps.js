import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import StepItem from './StepItem/StepItem';

import './Steps.css';

const stepList = [
    {
        id: uuidv4(),
        number: 1,
        stepClass: 'three-steps-steps__item',
        stepNumberClass: 'three-steps-steps__number',
        stepDesc: 'Incididunt do laboris',
        stepDescClass: 'three-steps-steps__p'
    },
    {
        id: uuidv4(),
        number: 2,
        stepClass: 'three-steps-steps__item',
        stepNumberClass: 'three-steps-steps__number',
        stepDesc: 'Id incididunt nisi anim esse eiusmod ex amet except',
        stepDescClass: 'three-steps-steps__p'
    },
    {
        id: uuidv4(),
        number: 3,
        stepClass: 'three-steps-steps__item',
        stepNumberClass: 'three-steps-steps__number',
        stepDesc: 'Minim nulla quis ullamco fugiat commodo esse',
        stepDescClass: 'three-steps-steps__p'
    }
]

const Steps = props => {

    const stepItems = stepList.map(step => (
        <React.Fragment key={step.id}>
            <StepItem
                stepClass={step.stepClass}
                number={step.number}
                stepDesc={step.stepDesc}
                stepDescClass={step.stepDescClass}
                stepNumberClass={step.stepNumberClass}
            />
            <span className='three-steps-steps__next'>{'>'}</span>
        </React.Fragment>
    ));

    return (
        <div className='three-steps-steps'>
            {stepItems}
        </div>
    );
}

export default Steps;