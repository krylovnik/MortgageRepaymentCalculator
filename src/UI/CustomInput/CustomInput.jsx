import React from 'react';
import s from './CustomInput.module.css'

const CustomInput = ({inputSign, inputLabel, inputSignLocation = false}) => {
    return (
            <div className={s.fullWidthWrapper}>
                <label className={s.inputLabel} htmlFor={inputLabel}>{inputLabel}</label>
                <div className={s.inputContainer}>

                    {inputSignLocation === false && (
                        <span className={s.inputSign}>{inputSign}</span>
                    )}

                    <input className={s.input} type="number" id={inputLabel}/>

                    {inputSignLocation === true && (
                        <span className={s.inputSign}>{inputSign}</span>
                    )}
                </div>
            </div>
    );
};

export default CustomInput;