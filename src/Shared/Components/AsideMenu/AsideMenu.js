import React from 'react';


import MenuItem from './MenuItem';

import './AsideMenu.css';



const AsideMenu = props => {

    const menuLinks = props.menuItems.map(link => (
        <MenuItem
            key={link.id}
            linkName={link.linkName}
            iconClass={link.iconClass}
            linkClass='aside-menu__item'
            aClass={link.aClass}
            id={link.id}
            sectionId={link.sectionId}
        />
    ))

    return (
        <aside className='aside-menu'>
            <nav className='nav'>
                <ul className='aside-menu__list-items'>
                    {menuLinks}
                </ul >
            </nav>
        </aside >
    );
}

export default AsideMenu;