import './App.css'
import Calculator from "./components/Calculator/Calculator.jsx";
import CalculatorResult from "./components/CalculatorResalt/CalculatorResult.jsx";
import {useState} from "react";


function App() {

    const [isResult, setIsResult] = useState(false);


    return (
        <div className="wrapper">
            <Calculator setIsResult={setIsResult}/>
            <CalculatorResult isResult={isResult} />
        </div>
    )
}

export default App
