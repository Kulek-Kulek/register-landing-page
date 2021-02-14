import React from 'react';



import './Section.css';


const Section = props => {
    return (
        <section className={`section ${props.classSection}`} id={'section' + props.sectionId}>
            <h3 className='section__main-heading'>{props.sectionMainHeading}</h3>
            {props.children}
        </section>
    );
}

export default Section;