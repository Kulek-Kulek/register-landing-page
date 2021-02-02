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

    return (
        <div className='sliding-slogan-with-underline'>
            <div className='sliding-slogan-with-underline__heading-div'>
                <h1 className='sliding-slogan-with-underline__heading'>
                    <span className='sliding-slogan-with-underline__slogan-span'>send</span>
                    {slidinSlogans}
                    <span className='sliding-slogan-with-underline__slogan-span'>with confidence</span>
                </h1>
            </div>
            <h3 className='sliding-slogan-with-underline__minor-heading'>Labore cupidatat consectetur proident quis elit velit officia mollit exercitation. Nulla adipisicing.</h3>
            <div className='sliding-slogan-with-underline__btn-div'>
                <Button
                    btnText='Sprawdź cennik'
                    class='sliding-slogan-with-underline__btn sliding-slogan-with-underline__btn-left'
                />
                <Button
                    btnText='Zacznij korzystać'
                    class='sliding-slogan-with-underline__btn sliding-slogan-with-underline__btn-right'
                />
            </div>
        </div>
    );
}

export default SlidingSloganWithUnderline;