import React from 'react';
import s  from './Calculator.module.css'

const Calculator = () => {
    return (
        <section className={s.calculatorContainer}>
            <div className={s.titleContainer}>
                <h1 className={s.title}>Mortgage Calculator</h1>
                <button className={s.clearAll}>Clear all</button>
            </div>
            <form className={s.form} action="">
                <input className={s.input} type="text"/>  {/* Add input component*/}
            </form>

        </section>
    );
};

export default Calculator;