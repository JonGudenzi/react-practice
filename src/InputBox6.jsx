import { useState } from "react";

export default function InputBox6() {
    const [inputText, setInputText] = useState("");
    const [listItems, setListItems] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");

    function addHandler() {
        const text = inputText.trim();
        if (text === "") {
            return;
        }
        setListItems(prev => ([...prev, text]));
        setInputText("");
    }

    function deleteHandler(indexToRemove) {
        setListItems(prev => prev.filter((item, index) => index !== indexToRemove));
    }

    function saveHandler() {
        setListItems(prev =>
            prev.map((item, index) => 
            index === editingIndex ? editingText : item)
        );
        setEditingIndex(null);
        setEditingText("");
    }

    return (
        <div>
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)} />
            <button
                disabled={!inputText.trim()}
                onClick={addHandler}>Add</button>
            <ul>{listItems.map((item, index) => (
                <li key={index}>
                    {editingIndex === index ? (
                        <input
                            value={editingText}
                            onChange={e => setEditingText(e.target.value)} />
                    ) : (
                        item
                    )}

                    {editingIndex === index ? (
                        <button onClick={saveHandler}>Save</button>
                    ) : (
                        <>
                            <button onClick={() => {
                                setEditingIndex(index);
                                setEditingText(item);
                            }}>
                                Edit
                            </button>
                            <button onClick={() => deleteHandler(index)}>Delete</button>
                        </>
                    )}

                </li>


            ))}</ul>
        </div>
    )
}