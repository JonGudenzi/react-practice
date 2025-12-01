// Goal: User can type text, click Add, see items in a list, and the input clears.

// 1. What state do I need?
// 2. What UI elements do I need?
// 3. Which parts of the UI read state?
// 4. Which parts of the UI change state?
// 5. What should the event handlers do?

import { useState } from "react";

export default function InputBox3() {

const [inputVal, setInputVal] = useState("");
const [listOfItems, setListItems] = useState([]);

function handler() {
setListItems(prev => [...prev, inputVal]);
setInputVal("");
}


    return (
        <div>
            <input value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}></input>
            <button onClick={handler}>Add</button>

            <ul>{listOfItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>

        </div>
    );
}