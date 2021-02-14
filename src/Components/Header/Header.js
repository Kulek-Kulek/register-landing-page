import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import SlidingSloganWithUnderline from '../../Shared/Components/SlidingSloganWithUnderline/SlidingSloganWithUnderline';
import Navigation from '../../Shared/Components/Navigation/NavHamburger';
import AsideMenu from '../../Shared/Components/AsideMenu/AsideMenu';
// import MessageSent from '../MessageSent';

import './Header.css';

const slogans = [
    {
        id: uuidv4(),
        slogan: 'kursami i kadrą',
        class: 'sliding-slogan-with-underline__slogan-span sliding-slogan-with-underline__sliding-span sliding-slogan-with-underline__sliding-span--active'
    },
    {
        id: uuidv4(),
        slogan: 'płatnościami',
        class: 'sliding-slogan-with-underline__slogan-span sliding-slogan-with-underline__sliding-span'
    },
    {
        id: uuidv4(),
        slogan: 'przepływem informacji',
        class: 'sliding-slogan-with-underline__slogan-span sliding-slogan-with-underline__sliding-span'
    },
    {
        id: uuidv4(),
        slogan: 'dokumentacją',
        class: 'sliding-slogan-with-underline__slogan-span sliding-slogan-with-underline__sliding-span'
    }
];


const menuItems = [
    {
        id: uuidv4(),
        linkName: 'korzyści',
        iconClass: 'fa fa-handshake aside-menu__i',
        aClass: 'aside-menu__a',
        sectionId: 'benefits'
    },
    {
        id: uuidv4(),
        linkName: 'zamów',
        iconClass: 'fab fa-affiliatetheme aside-menu__i',
        aClass: 'aside-menu__a',
        sectionId: 'order'
    },
    {
        id: uuidv4(),
        linkName: 'pytania',
        iconClass: 'fab fa-buffer aside-menu__i',
        aClass: 'aside-menu__a',
        sectionId: 'questions'
    },
    {
        id: uuidv4(),
        linkName: 'kontakt',
        iconClass: 'fa fa-pencil-alt aside-menu__i',
        aClass: 'aside-menu__a',
        sectionId: 'contact'
    }
];

const Header = props => {
    return (
        <header className='header'>
            <AsideMenu menuItems={menuItems} />
            <SlidingSloganWithUnderline slogans={slogans} />
            <Navigation />
            {/* <MessageSent /> */}
        </header>
    );
}

export default Header;