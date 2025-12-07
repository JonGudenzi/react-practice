import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import ResetButton from "./ResetButton";

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

            <ResetButton
                onClick={clickReset}
                disabled={clickCount === 0} />



            <CounterDisplay
                count={clickCount} />
        </div>
    )
}