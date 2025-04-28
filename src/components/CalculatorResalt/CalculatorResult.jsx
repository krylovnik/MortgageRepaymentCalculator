import React from 'react';
import CalculatorResultEmpty from "./CalculatorResultEmpty/CalculatorResultEmpty.jsx";
import CalculatorResultCounted from "./CalculatorResultCounted/CalculatorResultCounted.jsx";

const CalculatorResult = ({isResult}) => {
    return (
        isResult ?
            <CalculatorResultCounted />
            :
            <CalculatorResultEmpty />

    );
};

export default CalculatorResult;