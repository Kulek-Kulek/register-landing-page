import React from 'react';

import './FAQItem.css';

const FAQItem = props => {

    const questionClikedHandler = () => {
        const icon = document.getElementById('icon ' + props.id);
        const question = document.getElementById('question-item ' + props.id);
        const answer = document.getElementById('answer ' + props.id);
        const leftArrowIcon = document.getElementById('arrow-left ' + props.id);

        icon.classList.toggle('faq-i--active');
        question.classList.toggle('faq__question-div--active');
        answer.classList.toggle('faq__answer--active');
        if (question.classList.contains('faq__question-div--active')) {
            leftArrowIcon.classList.add('arrow-left--hide');
        } else {
            leftArrowIcon.classList.remove('arrow-left--hide');
        }
    }


    return (
        <div className='faq__item'>
            <div className='faq__question-div' id={'question-item ' + props.id}>
                <h3 className='faq__question' id={'question ' + props.id} onClick={questionClikedHandler}>
                    <i className="fas fa-long-arrow-alt-right faq__arrow-left" id={'arrow-left ' + props.id}></i>
                    {props.question}
                </h3>
                <i className="fas fa-arrow-down faq-i" id={'icon ' + props.id} onClick={questionClikedHandler}></i>
            </div>
            <article className='faq__answer-wrapper' id={props.id}>
                <p className='faq__answer' id={'answer ' + props.id}>
                    <i className="far fa-thumbs-up faq__answer-i"></i>
                    {props.answer}</p>
            </article>
        </div>
    );
}

export default FAQItem;