import React from 'react';

import Button from '../../../../Shared/Elements/Button/Button';

import './Slogan.css';



const Slogan = props => {
    return (
        <div className='three-steps-slogans'>
            <div className='three-steps-slogans__slogans-div'>
                <h2 className='three-steps-slogan__main-slogan'>Sprawdź jakie to proste</h2>
                <h6 className='three-steps-slogan__minor-slogan'>Wypróbuj za darmo</h6>
            </div>
            <div className='three-steps-slogan__buttons'>
                <Button
                    btnText='Przetestuj'
                    class='sliding-slogan-with-underline__btn'
                />
                <Button
                    btnText='Zarejestruj się'
                    class='sliding-slogan-with-underline__btn sliding-slogan-with-underline__btn-left'
                />
            </div>
        </div>
    );
}

export default Slogan;