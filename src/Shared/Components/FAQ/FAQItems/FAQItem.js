import React from 'react';

import './FAQItem.css';

const FAQItem = props => {

    const questionClikedHandler = () => {
        // const answerItem = document.getElementById(props.id);
        const icon = document.getElementById('icon ' + props.id);
        const question = document.getElementById('question-item ' + props.id);
        const answer = document.getElementById('answer ' + props.id);
        // answerItem.classList.toggle('faq__answer-wrapper--active');
        icon.classList.toggle('faq-i--active');
        question.classList.toggle('faq__question-div--active');
        answer.classList.toggle('faq__answer--active');
    }


    return (
        <div className='faq__item'>
            <div className='faq__question-div' id={'question-item ' + props.id}>
                <h3 className='faq__question' id={'question ' + props.id} onClick={questionClikedHandler}>{props.question}</h3>
                <i className="fas fa-arrow-down faq-i" id={'icon ' + props.id} onClick={questionClikedHandler}></i>
            </div>
            <article className='faq__answer-wrapper' id={props.id}>
                <p className='faq__answer' id={'answer ' + props.id}>{props.answer}</p>
            </article>
        </div>
    );
}

export default FAQItem;