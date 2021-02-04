import React from 'react';

import Button from '../../../Elements/Button/Button';
import './SloganCarouselItem.css';


const SloganCarouselItem = props => {

    const moveToQaASectionHandler = (e) => {
        const qa = document.querySelector('.faq');
        if (e.target.id === 'sliding-carousel-banner__button-two') {
            qa.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='sliding-carousel-banner__slogan'>
            <h1 className={props.classHeading}>{props.heading}</h1>
            <p className={props.classParagraph}>{props.paragraph}</p>
            <div className={props.btnWrapper}>
                <Button
                    id={props.btnId}
                    class='sliding-slogan-with-underline__btn'
                    btnText={props.btnText}
                    click={moveToQaASectionHandler}
                />
            </div>
        </div>
    );
}

export default SloganCarouselItem;