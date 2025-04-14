import React, {useState} from 'react';
import s from "./CustomRadioInput.module.css"

const CustomRadioInput = ({blockLabel, inputLabel}) => {
    const [selectedValue, setSelectedValue] = useState(null);


    return (
        inputLabel.map((label,index) => {
            return (
                <label className={`${s.container} ${selectedValue === label ? s.activeStyle : ''}`}  htmlFor={label} key={index} >
                    <input
                        type="radio"
                        checked={selectedValue === label}
                        id={label}
                        name={blockLabel}
                        onChange={() => setSelectedValue(label)}
                        value={label}/>
                    {label}
                </label>
            )
        }))
};

export default CustomRadioInput;