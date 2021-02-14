import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from '../../Shared/Components/Section/Section';
import CarouselWithSlogans from '../../Shared/Components/CarouselWithSlogans/CarouselWithSlogans';
import MainFeatures from '../../Shared/Components/MainFeatures/MainFeatures';

import './Benefits.css';

const mainFeatuersListTop = [
    {
        id: uuidv4(),
        heading: 'Rozliczanie i ewidencjonowanie czasu pracy lektorów',
        headingClass: 'main-features__heading',
        iconClass: 'fas fa-briefcase main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Automatycznie oblicza i ewidencjonuje godziny pracy lektora, na podstawie których wyliczane jest wynagrodzenie.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    },
    {
        id: uuidv4(),
        heading: 'Rozliczanie i ewidencjonowanie godzin dydaktycznych',
        headingClass: 'main-features__heading',
        iconClass: 'fas fa-user-graduate main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Prowadzi ewidencję zrealizowanych godzin dydaktycznych poszczególnych uczniów i grup według ich umowy.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    },
    {
        id: uuidv4(),
        heading: 'Rozliczanie płatności online',
        headingClass: 'main-features__heading',
        iconClass: 'fab fa-cc-amazon-pay main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Umożliwia Klientom dokonywanie płatności online. Pozwala wystawiać dokumenty finansowe oraz prowadzić system płatności ratalnych. Monitoruje i monituje płatności przeterminowane.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    }
];

const mainFeatuersListBottom = [
    {
        id: uuidv4(),
        heading: 'Zautomatyzowanie przepływu informacji',
        headingClass: 'main-features__heading',
        iconClass: 'fa fa-handshake main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Pozwala komunikować się z Klientem poprzez zautomatyzowany e-mailing, wiadomości SMS oraz komunikatory Messinger i WhatsApp.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    },
    {
        id: uuidv4(),
        heading: 'Prowadzenie kampanii marketingowych',
        headingClass: 'main-features__heading',
        iconClass: 'fab fa-affiliatetheme main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Umożliwia sprzedaż i marketing kursów online oraz przeprowadzanie profesjonalnych kampanii marketingowych ze wsparciem zewnętrznego API.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    },
    {
        id: uuidv4(),
        heading: 'Generowanie raportów, sprawozdań i certyfikatów',
        headingClass: 'main-features__heading',
        iconClass: 'fas fa-file-pdf main-features__i',
        aClass: 'aside-menu__a',
        paragraph: 'Automatycznie generuje raporty i sprawozdania oraz certyfikaty dla kursantów, które przechowuje na ich kontach z możliwością pobrania.',
        paragraphClass: 'main-features__p',
        btnText: 'Dowiedz się więcej',
        btnClass: 'main-features__btn sliding-slogan-with-underline__btn'
    }
];

const Benefits = props => {
    return (
        <Section
            classSection='benefits'
            sectionMainHeading='Pakiet pełen korzyści'
            sectionId='benefits'
        >
            <CarouselWithSlogans />
            <MainFeatures mainFeatuersList={mainFeatuersListTop} />
            <MainFeatures mainFeatuersList={mainFeatuersListBottom} />
        </Section>
    );
}

export default Benefits;