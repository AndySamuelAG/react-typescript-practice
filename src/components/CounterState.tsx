import { useState } from "react";

export const CounterState = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = (qty: number = 1) => {
        setCounter(counter + qty);
    }

    return (
        <>
            <h3>useState</h3>
            <h3>Counter:</h3>
            <h4>Valor: { counter }</h4>

            <button className="btn btn-outline-primary mr-5"
            onClick={ () => handleClick() }>
                +1
            </button>

            <button className="btn btn-outline-primary mr-5"
            onClick={ () => handleClick(2) }>
                +2
            </button>

            <button className="btn btn-outline-danger mr-5"
            onClick={ () => setCounter(0) }>
                Reset
            </button>
        </>
    )
}

export default CounterState;