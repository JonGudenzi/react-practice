import { useState } from "react";

export default function TextInput() {

    const [inputText, setInputText] = useState("");

    return (
        <div>
        <input 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}/>
        <p>{inputText}</p>
        </div>
    )
}