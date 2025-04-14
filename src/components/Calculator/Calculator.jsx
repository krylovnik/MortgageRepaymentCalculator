import React from 'react';
import s  from './Calculator.module.css'
import CustomInput from "../../UI/CustomInput/CustomInput.jsx";
import CustomRadioInput from "../../UI/CustomRadioInput/CustomRadioInput.jsx";
import IconCalculator from '../../assets/icon-calculator.svg?react'
const Calculator = () => {
    return (
        <section className={s.calculatorContainer}>
            <div className={s.titleContainer}>
                <h1>Mortgage Calculator</h1>
                <button className={s.clearAll}>Clear all</button>
            </div>
            <form action="">
                <CustomInput inputSign={"£"} inputLabel={"Mortgage Amount"}/>
                <div className={s.inputsWrapper}>
                    <CustomInput inputSign={"years"} inputLabel={"Mortgage Term"} radioType={false} inputSignLocation={true}/>
                    <CustomInput inputSign={"%"} inputLabel={"Interest Rate"} radioType={false} inputSignLocation={true}/>
                </div>
                <span className={s.radioInputLabel}>Mortgage Type</span>
                <CustomRadioInput blockLabel={"Mortgage Type"} inputLabel={["Repayment","Interest Only"]}/>

                <button className={s.formButton}>
                    <IconCalculator className={s.buttonIcon}/>
                    <span className={s.buttonText}>Calculate Repayments</span>
                </button>
            </form>

        </section>
    );
};

export default Calculator;