import React from 'react';
import s from "./CalculatorResultEmpty.module.css"
import IconEmpty from "../../../assets/illustration-empty.svg?react"

const CalculatorResultEmpty = () => {
    return (
            <section className={s.container}>
                <IconEmpty className={s.imageEmpty}/>
                <h3 className={s.mainText}>Results shown here</h3>
                <span className={s.additionalText}>Complete the form and click "calculate repayments" to see what your monthly repayments would be</span>
            </section>
    );
};

export default CalculatorResultEmpty;