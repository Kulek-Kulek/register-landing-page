import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import SlidingSloganWithUnderline from '../../Shared/Components/SlidingSloganWithUnderline/SlidingSloganWithUnderline';
import Navigation from '../../Shared/Components/Navigation/NavHamburger';
import AsideMenu from '../../Shared/Components/AsideMenu/AsideMenu';

import './Header.css';

const slogans = [
    {
        id: uuidv4(),
        slogan: 'Cześć Anetka',
        class: 'sliding-slogan-with-underline__slogan-span sliding-slogan-with-underline__sliding-span sliding-slogan-with-underline__sliding-span--active'
    },
    {
        id: uuidv4(),
        slogan: 'slogan druuugi',
        class: 'sliding-slogan-with-underline__slogan-span sliding-slogan-with-underline__sliding-span'
    },
    {
        id: uuidv4(),
        slogan: 'slogan trzeeeeci',
        class: 'sliding-slogan-with-underline__slogan-span sliding-slogan-with-underline__sliding-span'
    }
];


const menuItems = [
    {
        id: uuidv4(),
        linkName: 'Oferta',
        iconClass: 'fa fa-handshake aside-menu__i',
        aClass: 'aside-menu__a',
        sectionName: 'one'
    },
    {
        id: uuidv4(),
        linkName: 'O firmie',
        iconClass: 'fab fa-affiliatetheme aside-menu__i',
        aClass: 'aside-menu__a',
        sectionName: 'two'
    },
    {
        id: uuidv4(),
        linkName: 'Promocje',
        iconClass: 'fab fa-buffer aside-menu__i',
        aClass: 'aside-menu__a',
        sectionName: 'three'
    },
    {
        id: uuidv4(),
        linkName: 'Promocje',
        iconClass: 'fa fa-pencil-alt aside-menu__i',
        aClass: 'aside-menu__a',
        sectionName: 'four'
    }
];

const Header = props => {
    return (
        <header className='header'>
            <AsideMenu menuItems={menuItems} />
            <SlidingSloganWithUnderline slogans={slogans} />
            <Navigation />
        </header>
    );
}

export default Header;