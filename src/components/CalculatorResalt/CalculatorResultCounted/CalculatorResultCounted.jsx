import React from 'react';
import s from "./CalculatorResultCounted.module.css";

const CalculatorResultCounted = () => {
    return (
            <section className={s.container}>
                <h3 className={s.mainText}>Your results</h3>
                <span className={s.additionalText}>Your result are shown below based on the information you provided. To adjust the results, edit the form and
                click "calculate repayments" again</span>
                <div className={s.resultBox}>
                    <div className={s.repaymentResultContainer}>
                        <span className={s.additionalText}>Your monthly repayments</span>
                        <span className={s.monthlyRepaymentResult}>123123</span>
                    </div>
                    <div className={s.divider}></div>
                    <div className={s.repaymentResultContainer}>
                        <span className={s.additionalText}>Total you'll repay over the term</span>
                        <span className={s.totalRepaymentResult}>234234</span>
                    </div>
                </div>
            </section>
    );
};

export default CalculatorResultCounted;