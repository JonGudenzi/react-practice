import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function ClickCounter() {

    const [clickCount, setClickCount] = useState(0);

    function clickHandler() {
        setClickCount(prev => (prev + 1))
    }

    function clickReset() {
        setClickCount(0);
    }

    return (
        <div>

            <button onClick={clickHandler}>Add</button>

            <button
                onClick={clickReset}
                disabled={clickCount === 0}>Reset
            </button>
            <CounterDisplay 
            count={clickCount}/>
        </div>
    )
}