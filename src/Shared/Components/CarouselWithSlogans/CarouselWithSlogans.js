import React, { useEffect } from 'react';

import SloganCarousel from './SloganCarousel/SloganCarousel';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import img1 from '../../../Assetss/Images/pic1.jpg';
import img2 from '../../../Assetss/Images/pic2.jpg';
import img3 from '../../../Assetss/Images/pic3.jpg';
import { changeSlides } from './carouselWithSlogansScripts';
import './CarouselWithSlogans.css';


const sliderData = [
    {
        src: img1,
        alt: 'slide-picture-one',
        wrapperClass: 'sliding-carousel-banner__card',
        wrapperActiveClass: '--front',
        imageClass: 'sliding-carousel-banner__img',
        imageActiveClass: '--active',
        innerDivClass: 'sliding-carousel-banner__innerDiv',
        innerHeadingClass: 'sliding-carousel-banner__innerHeading',
        innerSpanClass: 'sliding-carousel-banner__innerSpan',
        innerHeadingText: 'Zarządzaj kursami',
        innerSpanText: 'Zautomatyzowane zarządzanie bazą danych Klientów i pracowników online.'
    },
    {
        src: img2,
        alt: 'slide-picture-two',
        wrapperClass: 'sliding-carousel-banner__card sliding-carousel-banner__card-background--right',
        imageClass: 'sliding-carousel-banner__img',
        innerDivClass: 'sliding-carousel-banner__innerDiv',
        innerHeadingClass: 'sliding-carousel-banner__innerHeading',
        innerSpanClass: 'sliding-carousel-banner__innerSpan',
        innerHeadingText: 'Zarządzaj płatnościami',
        innerSpanText: 'Zautomatyzowane zarządzanie finansami i dokumentami finansowymi.'
    },
    {
        src: img3,
        alt: 'slide-picture-three',
        wrapperClass: 'sliding-carousel-banner__card sliding-carousel-banner__card-background--left',
        imageClass: 'sliding-carousel-banner__img',
        innerDivClass: 'sliding-carousel-banner__innerDiv',
        innerHeadingClass: 'sliding-carousel-banner__innerHeading',
        innerSpanClass: 'sliding-carousel-banner__innerSpan',
        innerHeadingText: 'Prowadź aktywny marketing',
        innerSpanText: 'Zautomatyzowane zarządzanie przepływem informacji poprzez nowoczesne kanały online.'
    }
];

const CarouselWithSlogans = props => {
    useEffect(() => {
        const interval = setInterval(changeSlides, 6000)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='sliding-carousel-banner' name='section one'>
            <SloganCarousel />
            <ImageCarousel sliderData={sliderData} />
        </div>
    );
}

export default CarouselWithSlogans;