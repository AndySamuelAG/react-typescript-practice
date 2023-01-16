import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milliseconds: number
}

export const CounterHijo = ({ milliseconds }: TimerArgs) => {
    const [seconds, setSeconds] = useState(0)
    const ref = useRef<NodeJS.Timer>();
    useEffect( () => {
        ref.current && clearInterval( ref.current );
        ref.current = setInterval( () => setSeconds(s => s + 1) , milliseconds )
    }, [milliseconds])

    return (
        <>
            <h5 className="mt-3">Timer: { seconds }</h5>
        </>
    )
}

export default CounterHijo;