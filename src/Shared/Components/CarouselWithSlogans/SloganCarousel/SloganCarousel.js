import React from 'react';

import SloganCarouselItem from '../SloganCarousel/SloganCarouselItem';
import './SloganCarousel.css';


const sloganCarouselData = [
    {
        id: Math.random(),
        heading: 'Zarządzaj kursami i kadrą',
        paragraph: 'Twórz kartoteki poszczególnych lektorów, Klientów oraz całych grup. Zarządzaj danymi uczniów, monitoruj realizację kursów oraz pracę Twojego zespołu. Zarządzaj przepływem informacji.',
        btnText: 'Dowiedz się więcej',
        btn: 'sliding-carousel-banner__button',
        classHeading: 'sliding-carousel-banner__heading',
        classParagraph: 'sliding-carousel-banner__paragraph',
        btnWrapper: 'sliding-carousel-banner__button-wrapper fff',
        btnId: 'sliding-carousel-banner__button-one'
    },
    {
        id: Math.random(),
        heading: 'zarządzaj płatnościami online',
        paragraph: 'Przyjmuj płatności online. Twórz spersonalizowane harmonogramy płatności ratalnych. Twórz dokumentację online - faktury i raporty. Wystawiaj certyfikaty online.',
        btnText: 'Zadaj pytanie',
        btn: 'sliding-carousel-banner__button',
        classHeading: 'sliding-carousel-banner__heading',
        classParagraph: 'sliding-carousel-banner__paragraph',
        btnWrapper: 'sliding-carousel-banner__button-wrapper',
        btnId: 'sliding-carousel-banner__button-three'
    },
    {
        id: Math.random(),
        heading: 'Prowadź aktywny marketing',
        paragraph: 'Prowadź kampanie mailowe adresowane do Twoich Klientów. Kontaktuj się z Klientem wieloma kanałami - SMS, Messinger, WhatsApp. Sprzedawaj w internecie.',
        btnText: 'Zapytaj o cennę',
        btn: 'sliding-carousel-banner__button',
        classHeading: 'sliding-carousel-banner__heading',
        classParagraph: 'sliding-carousel-banner__paragraph',
        btnWrapper: 'sliding-carousel-banner__button-wrapper',
        btnId: 'sliding-carousel-banner__button-two'
    }
];

const SloganCarousel = props => {

    const carouselSlogans = sloganCarouselData.map(slogan => (
        <SloganCarouselItem
            key={slogan.id}
            heading={slogan.heading}
            paragraph={slogan.paragraph}
            btnText={slogan.btnText}
            btn={slogan.btn}
            classHeading={slogan.classHeading}
            classParagraph={slogan.classParagraph}
            btnWrapper={slogan.btnWrapper}
            arrowClassName='sliding-carousel-banner__button-arrow btn-arrow-right--active'
            btnId={slogan.btnId}
        />
    ))

    return (
        <div className='sliding-carousel-banner__slogan-wrapper'>
            {carouselSlogans}
        </div>
    );
}

export default SloganCarousel;