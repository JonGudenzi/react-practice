import { useState } from "react";

export default function InputBox5() {
const [inputText, setInputtext] = useState("");
const [listItem, setListItem] = useState([]);

function handler() {
    const inputvalue = inputText.trim();
    if (inputvalue === "") {
        return;
    }
    setListItem(prev => [...prev, inputText]);
    setInputtext("");
}

return(
<div>
    <input
    value={inputText}
    onChange={((e) => setInputtext(e.target.value))}></input>
    <button
    disabled={!inputText.trim()}
     onClick={handler}>Add</button>
    <ul>{listItem.map((item, index) => (
        <li key={index}>{item}</li>
    ))}</ul>
</div>
)
}