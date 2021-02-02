import React from 'react';

import Button from '../../../Elements/Button/Button';
import './SloganCarouselItem.css';


const SloganCarouselItem = props => {

    const chooseCourseButtonHandler = () => {
        const courses = document.querySelector('.faq');
        courses.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='sliding-carousel-banner__slogan'>
            <h1 className={props.classHeading}>{props.heading}</h1>
            <p className={props.classParagraph}>{props.paragraph}</p>
            <div className={props.btnWrapper}>
                <Button
                    class='sliding-slogan-with-underline__btn'
                    btnText={props.btnText}
                    click={chooseCourseButtonHandler}
                />
            </div>
        </div>
    );
}

export default SloganCarouselItem;