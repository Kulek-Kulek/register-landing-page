import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import FAQItem from './FAQItems/FAQItem';

import './FAQ.css';

const questionsAndAnswersList = [
    {
        id: uuidv4(),
        question: 'question 1',
        answer: 'answer 2 Aliquip laboris ullamco culpa nulla velit tempor sint aliquip culpa proident. Ipsum dolor do mollit Lorem magna reprehenderit dolor quis laboris.Laborum amet dolor reprehenderit velit mollit esse.'
    },
    {
        id: uuidv4(),
        question: 'question 2',
        answer: 'answer 2 Do magna laboris esse ad Lorem culpa et magna. Id aliqua mollit tempor culpa ut occaecat reprehenderit culpa.Sunt voluptate amet nisi consectetur cupidatat consectetur duis eiusmod qui minim deserunt officia elit excepteur.'
    },
    {
        id: uuidv4(),
        question: 'question 3',
        answer: 'answer 2 Ut quis aliqua ipsum do do ex ex mollit incididunt nisi dolore pariatur nostrud. Culpa occaecat irure aute culpa nostrud.Irure incididunt eu voluptate proident consectetur.'
    },
    {
        id: 'faq',
        question: 'question 4',
        answer: 'answer 2 Veniam qui anim non velit id. Commodo adipisicing ipsum nostrud veniam sit ipsum elit dolor consectetur amet.Excepteur consectetur eiusmod anim consectetur et do nulla proident proident Lorem id.'
    },
    {
        id: uuidv4(),
        question: 'question 5',
        answer: 'answer 2 Ullamco est nostrud ut aute Lorem. Pariatur ipsum cillum et ea cupidatat commodo ad.Excepteur sunt in sint reprehenderit culpa ea sit ut.'
    },
    {
        id: uuidv4(),
        question: 'question 6',
        answer: 'answer 2 Duis occaecat occaecat nisi officia ex ullamco laboris cupidatat sit ullamco. Deserunt ullamco dolor ad minim mollit eu Lorem veniam ex irure exercitation.Et velit reprehenderit esse proident pariatur consectetur laborum elit duis ut deserunt id.'
    }
]

const FAQ = props => {



    const questionsAndAnswers = questionsAndAnswersList.map(faq => (
        <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            id={faq.id}
        />
    ));

    return (
        <div className='faq' name='section two'>
            {questionsAndAnswers}
        </div>
    );
}

export default FAQ;