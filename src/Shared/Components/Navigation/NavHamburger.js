import React, { useEffect } from 'react';

import { navHamburgerScripts } from './navHamburgerScripts';

import './NavHamburger.css';

const NavHamburger = props => {

    useEffect(() => {
        navHamburgerScripts();
    }, []);

    return (
        <div className='nav__hamburger-wrapper'>
            <div className={'nav__hamburger-div nav__hamburger-span--form-active'}>
                <span className='nav__haburger-snail'></span>
            </div>
            <div className={'nav__hamburger-div nav__hamburger-span--form-active'}>
                <span className='nav__haburger-snail'></span>
            </div>
            <div className={'nav__hamburger-div nav__hamburger-span--form-active'}>
                <span className='nav__haburger-snail'></span>
            </div>
            <i className='fas fa-wave-square hamburger-close-menu'></i>
            {/* <i class="fas fa-exchange-alt"></i> */}
        </div>
    );
}

export default NavHamburger;