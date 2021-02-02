import React from 'react';

import './Input.css';

const Input = props => {

    let inputType;
    switch (props.input) {
        case 'input':
            inputType = <input
                id={props.id}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                accept={props.type === 'file' ? props.accept : null}
                className={props.classInput}
                disabled={props.disabled}
                onChange={props.change}
                onBlur={props.blur}
                required={props.required}
            />
            break;
        // case 'select':
        //     let options;
        //     if (props.options) {
        //         options = props.options;
        //         if (options.length > 1) {
        //             options = options.sort((a, b) => {
        //                 if (a.name < b.name) return -1;
        //                 if (a.name > b.name) return 1;
        //                 return 0;
        //             });
        //         }
        //     }
        //     inputType = <select onChange={inputChangeHandler} className={props.classSelect} >
        //         <option className={props.classOption} defaultValue>{props.selectDefaultValue}</option>
        //         {options ? options.map(option =>
        //             <option
        //                 key={option.id || option.name || option}
        //                 value={option.id || option}
        //                 className={props.classOption}>
        //                 {option.name || option.courseTitle || option}
        //             </option>) : <option>Brak danych</option>}
        //     </select>
        //     break;
        default: inputType = <textarea
            id={props.id}
            name={props.name}
            rows={props.rows || 4}
            // value={inputCurrentState.value}
            placeholder={props.placeholder}
            // onChange={inputChangeHandler}
            // onBlur={touchHandler}
            className={props.classInput}
            required={props.required}
        />
    }


    return (
        <div className={`contact-form__input-div ${props.inputWrapperClass}`}>
            <label className={props.classLabel} htmlFor={props.id}>{props.label}</label>
            {inputType}
            {props.errorText && <p className={`contact-form__message-error ${props.classError}`}>{props.errorText}</p>}
        </div>
    );
};

export default Input;