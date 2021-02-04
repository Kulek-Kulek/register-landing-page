import React, { useEffect } from 'react';

import { contactModalActivator } from './contactModalActivator';
import ContactForm from '../../Shared/Components/ContactForm/ContactForm';

import './Contact.css';

const Contact = props => {

    useEffect(() => {
        contactModalActivator();
    }, []);

    return (
        <div className='contact'>
            <ContactForm />
        </div>
    );
}

export default Contact;