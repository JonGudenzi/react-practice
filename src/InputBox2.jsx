import { useState } from "react";

export default function InputBox2() {

const [inputText, setInputText] = useState("");
const [listItems, setListItems] = useState([]);

    return (
        <div>
            <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}></input>
            <p>{inputText}</p>
            <button onClick={() => {setListItems(prev => [inputText, ...prev]);
           setInputText(""); }}>Add</button>
           <ul>
            {listItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
           </ul>
        </div>
    )
}