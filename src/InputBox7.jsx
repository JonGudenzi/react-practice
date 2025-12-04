import { useState } from "react";


export default function InputBox7() {
    const [inputText, setInputText] = useState("");
    const [listItems, setListItems] = useState([]);


    function addHandler() {
        const text = inputText.trim();
        if (text === "") {
            return;
        }
        setListItems(prev => ([...prev, text]));
        setInputText("");
    }

function deleteHandler(itemToDelete) {
    setListItems(listItems.filter((item, index) => (index !== itemToDelete )))
}

    return (
        <div>
            <input value={inputText}
                onChange={(e) => setInputText(e.target.value)}/>

            <button onClick={addHandler}
                disabled={!inputText.trim()}>Add</button>

            <ul>{listItems.map((item, index) => (
                <li key={index}>{item}
                <button>Edit</button>
                <button onClick={() => deleteHandler(index)}>Delete</button>
                </li>
            ))}</ul>
        </div>
    )
}