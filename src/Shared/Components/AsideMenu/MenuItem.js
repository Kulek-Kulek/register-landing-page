import React from 'react';

// import Button from '../../Shared/Elements/Button/Button';

import './MenuItem.css';

const MenuItem = props => {

    const menuHandler = (e) => {
        const section = document.querySelector('#section' + e.target.id);
        console.log(section, console.log(e.target.id));

        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <li className={props.linkClass}>
            <div className='menu-item-back'>
                <div className='menu-item-front'>
                    <i className={props.iconClass} ></i>
                    <a className={props.aClass} href='###' alt='ggg' id={props.sectionId} onClick={menuHandler} >
                        {props.linkName}
                    </a>
                </div>
            </div>
        </li>
    );
}

export default MenuItem;