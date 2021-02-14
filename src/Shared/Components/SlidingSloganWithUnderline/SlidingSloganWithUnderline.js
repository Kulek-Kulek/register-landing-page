import React, { useEffect } from 'react';


import { slidinSlogansScript } from './slidingSloganScripts';
import SlidingSlogan from './SlidingSlogan';
import Button from '../../Elements/Button/Button';

import './SlidingSloganWithUnderline.css';

const SlidingSloganWithUnderline = props => {

    useEffect(() => {
        const interval = setInterval(slidinSlogansScript, 5500)
        return () => clearInterval(interval);
    }, []);

    let slidinSlogans = [];
    slidinSlogans = props.slogans.map(slogan => (
        <SlidingSlogan
            key={slogan.id}
            class={slogan.class}
            slogan={slogan.slogan}
        />
    ));

    const moveToQaASectionHandler = () => {
        const qa = document.querySelector('.faq');
        qa.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='sliding-slogan-with-underline'>
            <div className='sliding-slogan-with-underline__heading-div'>
                <h1 className='sliding-slogan-with-underline__heading'>
                    <span className='sliding-slogan-with-underline__slogan-span'>Zarządzaj</span>
                    {slidinSlogans}
                    <span className='sliding-slogan-with-underline__slogan-span'>profesjonalnie</span>
                </h1>
            </div>
            <h3 className='sliding-slogan-with-underline__minor-heading'>Uniwersalny i elastyczny system wspomagający zarządzanie niepubliczną placówką oświatową</h3>
            <div className='sliding-slogan-with-underline__btn-div'>
                <Button
                    btnText='Zapytaj o cenę'
                    class='sliding-slogan-with-underline__btn sliding-slogan-with-underline__btn-left'
                    click={moveToQaASectionHandler}
                />
                <Button
                    id='sliding-slogan-with-underline__start-using'
                    btnText='Zacznij korzystać'
                    class='sliding-slogan-with-underline__btn sliding-slogan-with-underline__btn-right'
                />
            </div>
        </div>
    );
}

export default SlidingSloganWithUnderline;