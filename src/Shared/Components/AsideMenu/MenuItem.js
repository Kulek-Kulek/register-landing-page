import React from 'react';

// import Button from '../../Shared/Elements/Button/Button';

import './MenuItem.css';

const MenuItem = props => {

    const menuHandler = (e) => {
        const courses = [...document.getElementsByName('section ' + e.target.name)];
        courses[0].scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <li className={props.linkClass}>
            <div className='menu-item-back'>
                <div className='menu-item-front'>
                    <i className={props.iconClass} ></i>
                    <a className={props.aClass} href='###' alt='ggg' name={props.sectionName} onClick={menuHandler} >
                        {props.linkName}
                    </a>
                </div>
            </div>
        </li>
    );
}

export default MenuItem;