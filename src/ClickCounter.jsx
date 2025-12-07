import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import ResetButton from "./ResetButton";
import IncrementButton from "./IncrementButton";

export default function ClickCounter() {

    const [clickCount, setClickCount] = useState(0);

    function clickHandler() {
        setClickCount(prev => (prev + 1))
    }

    function clickReset() {
        setClickCount(0);
    }

   function clickIncrement(amount) {
    setClickCount(prev => (prev + amount));
   }

    return (
        <div>

            <button onClick={clickHandler}>Add</button>

            <ResetButton
                onClick={clickReset}
                disabled={clickCount === 0} />

            <IncrementButton
            amount={5}
            onIncrement={clickIncrement} />

            <CounterDisplay
                count={clickCount} />
        </div>
    )
}