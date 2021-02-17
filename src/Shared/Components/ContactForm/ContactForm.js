import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '../../Elements/Button/Button';
import Spinner from '../../Components/Spinner/Spinner';
import Input from '../../Elements/Input/Input';
import InfoModal from '../InfoModal/InfoModal';


import './ContactForm.css';


const inputList = [
    {
        id: 'name',
        name: 'name',
        type: 'text',
        input: 'input',
        placeholder: '* Wpisz swoje imię',
        classInput: 'conatct-form__input',
        classLabel: 'conatct-form__label',
        label: '',
        inputWrapperClass: '',
        required: true
    },
    {
        id: 'surname',
        name: 'surname',
        type: 'text',
        input: 'input',
        placeholder: 'Wpisz swoje nazwisko - to pole nie jest obowiązkowe.',
        classInput: 'conatct-form__input',
        classLabel: 'conatct-form__label',
        label: '',
        inputWrapperClass: ''
    },
    {
        id: 'email',
        name: 'email',
        type: 'email',
        input: 'input',
        placeholder: '* Wpisz swój email',
        classInput: 'conatct-form__input',
        classLabel: 'conatct-form__label',
        label: '',
        inputWrapperClass: '',
        required: true
    },
    {
        id: 'mobile',
        name: 'mobile',
        type: 'number',
        input: 'input',
        placeholder: '* Telefon kontaktowy',
        classInput: 'conatct-form__input',
        classLabel: 'conatct-form__label',
        label: '',
        inputWrapperClass: '',
        required: true
    },
    {
        id: 'textarea',
        name: 'textarea',
        type: 'textarea',
        input: 'textarea',
        placeholder: 'Twoje uwagi',
        classInput: 'conatct-form__textarea',
        classLabel: '',
        label: '',
        inputWrapperClass: ''
    }
];

const ContactForm = props => {

    const [messageSent, setMessageSent] = useState(false);

    const [submitError, setSubmitError] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (messageSent) {
            const contacForm = document.querySelector('.contact');
            const messageSent = document.querySelector('.message-sent');
            contacForm.classList.remove('contact--active');
            setTimeout(() => {
                messageSent.classList.add('message-sent--active');
            }, 200);
            setMessageSent(false);
        }
    }, [messageSent]);




    const validationSchema = () => yup.object().shape({
        email: yup
            .string()
            .required('Podaj swój email.')
            .email('Niepoprawny adres email.'),
        name: yup
            .string()
            .required('Podaj swoje imię.')
            .min(3, 'Imię musi mieć co najmniej trzy znaki.'),
        surname: yup
            .string()
            .min(3, 'Nazwisko musi mieć co najmniej trzy znaki.'),
        mobile: yup
            .string()
            .required('Podaj swój telefon.')
            .min(6, 'Numer telefonu musi mieć 6 cyfr.'),
        // .max(6, 'Numer telefonu musi mieć 6 cyfr.'),
        textarea: yup
            .string().min(3, 'Wpisz co najmniej 3 znaki.')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            mobile: '',
            textarea: ''
        },
        validationSchema,
        // onSubmit: async values => {

        // }
    });

    const sendRequestHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://maria-register.herokuapp.com/api/contact/maria-lp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formik.values.email,
                    name: formik.values.name,
                    surname: formik.values.surname,
                    comment: formik.values.textarea,
                    mobile: formik.values.mobile
                })
            });
            const responseData = await response.json();

            responseData.message === 'Wiadomość wysłana' && setMessageSent(true);
            responseData.message === 'Wiadomość wysłana' && setLoading(false);
        }
        catch (err) {
            setSubmitError(true);
            setLoading(false);
        }
    }

    const errorModalHideHandler = () => {
        setSubmitError(false);
    }

    const cancelSendFormHandler = (e) => {
        e.preventDefault();
        const contacForm = document.querySelector('.contact');
        contacForm.classList.remove('contact--active');
        setMessageSent(false);
    }

    const inputs = inputList.map(input => (
        <Input
            key={input.id}
            name={input.name}
            id={input.id}
            input={input.input}
            type={input.type}
            placeholder={input.placeholder}
            classInput={`${input.classInput} ${formik.errors[input.name] ? 'contact-form__input-error' : ''}`}
            classLabel={input.classLabel}
            label={input.label}
            // rows={5}
            value={formik.values[input.name]}
            inputWrapperClass={input.inputWrapperClass}
            change={formik.handleChange}
            required={input.required}
            errorText={formik.errors[input.name]}
            blur={formik.handleBlur}
        />
    ));


    return (
        <form className='conatct-form' >
            {loading ? <Spinner /> :
                <React.Fragment>
                    <aside className='conatct-form__aside'></aside>
                    <div className='conatct-form__inputs-div'>
                        {inputs}
                        < div className='contact-form__btn-div'>
                            <Button
                                btnText='Anuluj'
                                type='text'
                                id='contact-form-cancel-btn'
                                class='sliding-slogan-with-underline__btn contact-form__btn btn-danger conatct-form__btn'
                                click={cancelSendFormHandler}
                            />
                            <Button
                                btnText='Wyślij'
                                type='submit'
                                class='sliding-slogan-with-underline__btn contact-form__btn conatct-form__btn'
                                disabled={formik.errors.name || formik.errors.email || formik.errors.mobile || formik.values.name.length === 0 || formik.values.email.length === 0 || formik.values.mobile === 0}
                                click={sendRequestHandler}
                            />
                        </div>
                    </div>

                    {
                        submitError && <InfoModal
                            class='message-sent--active'
                            messageHeading='Uppps - coś poszło nie tak.'
                            mainMessage='Spróbuj za chwilę.'
                            errorModalHide={errorModalHideHandler}
                        />
                    }
                </React.Fragment>
            }
        </form >
    );
}

export default ContactForm;