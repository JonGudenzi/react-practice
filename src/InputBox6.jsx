import { useState } from "react";

export default function InputBox6() {
    const [inputText, setInputText] = useState("");
    const [listItems, setListItems] = useState([]);

    function handler() {
        const text = inputText.trim();
        if (text === "") {
            return;
        }
        setListItems(prev => ([...prev, text]));
        setInputText("");
    }

    return (
        <div>
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)} />
            <button
                disabled={!inputText.trim()}
                onClick={handler}>Add</button>
            <ul>{listItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>
        </div>
    )
}