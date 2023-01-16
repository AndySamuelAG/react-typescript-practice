import { useState } from 'react';
import CounterHijo from './CounterHijo';
import { ContadorRed } from './ContadorRed';

export const CounterPadre = () => {
    const [milliseconds, setMilliseconds] = useState(1000);

    return (
        <>
            <h1>useEffect - useRef</h1>
            <hr />
            <p>Milisegundos: { milliseconds }</p>
            <button className="btn btn-outline-success"
            onClick={() => setMilliseconds(1000)}>1000</button>
            <button className="btn btn-outline-success"
            onClick={() => setMilliseconds(2000)}>2000</button>
    
            <CounterHijo milliseconds={ milliseconds } />

            <h2>useReducer</h2>
            <hr />
            <ContadorRed />
        </>
    )
}
