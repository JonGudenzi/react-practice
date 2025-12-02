import { useState } from "react"

export default function InputBox4() {
const [inputState, setInputState] = useState("");
const [listItems, setListItems] = useState([]);

function submitHandler() {
    const inputval = inputState.trim();
    if (inputval === ""){
        return;
    }
   setListItems(prev => [...prev, inputState]);
   setInputState("");
}
return (
    <div>
        <input
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}></input>
        <button
        disabled={!inputState.trim()}
         onClick={submitHandler}>Add</button>
        <ul>{listItems.map((item, index) => (
            <li key={index}>{item}</li>
        ))}</ul>
    </div>
)
}