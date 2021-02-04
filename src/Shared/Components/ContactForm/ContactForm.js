import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '../../Elements/Button/Button';

import Input from '../../Elements/Input/Input';


import './ContactForm.css';


const inputList = [
    {
        id: 'name',
        name: 'name',
        type: 'text',
        input: 'input',
        placeholder: 'Wpisz swoje imię',
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
        placeholder: 'Wpisz swój email',
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
        placeholder: 'Telefon kontaktowy',
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
            .min(6, 'Numer telefonu musi mieć 6 cyfr.')
            .max(6, 'Numer telefonu musi mieć 6 cyfr.'),
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
        onSubmit: values => {
            console.log(values);
        }
    });

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
        <form className='conatct-form' onSubmit={formik.handleSubmit}>
            {inputs}
            <div className='contact-form__btn-div'>
                <Button
                    btnText='Anuluj'
                    id='contact-form-cancel-btn'
                    class='sliding-slogan-with-underline__btn contact-form__btn btn-danger conatct-form__btn'
                />
                <Button
                    btnText='Wyślij'
                    type='submit'
                    class='sliding-slogan-with-underline__btn contact-form__btn conatct-form__btn'
                />
            </div>
        </form>
    );
}

export default ContactForm;