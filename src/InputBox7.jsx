import { useState, useRef, useEffect } from "react";

export default function InputBox7() {
    const [inputText, setInputText] = useState("");
    const [listItems, setListItems] = useState([]);
    const [editListItem, setEditListItem] = useState(null);
    const [newEditText, setNewEditText] = useState("");
    const mainInputRef = useRef(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        if (editListItem !== null && editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [editListItem])

    function addHandler() {
        const text = inputText.trim();
        if (text === "") {
            return;
        }
        setListItems(prev => ([...prev, text]));
        setInputText("");

        if (mainInputRef.current) {
            mainInputRef.current.focus();
        }
    }

    function deleteHandler(itemToDelete) {
        setListItems(prev => prev.filter((item, index) => (index !== itemToDelete)));
    }

    function saveHandler() {
        setListItems(prev => (prev.map((item, index) => index === editListItem ? newEditText : item)));
        setEditListItem(null);
        setNewEditText("");
    }

    function cancelHandler() {
        setEditListItem(null);
        setNewEditText("");
    }

    return (
        <div>
            <input
                ref={mainInputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} />

            <button onClick={addHandler}
                disabled={!inputText.trim()}>Add</button>

            <ul>{listItems.map((item, index) => (
                <li key={index}>{
                    editListItem === index ? (
                        <input
                            ref={editInputRef}
                            value={newEditText}
                            onChange={(e) => setNewEditText(e.target.value)} />
                    ) : (
                        item
                    )
                }

                    {editListItem === index ? (
                        <button onClick={saveHandler}>Save</button>
                    ) : (
                        <button
                            onClick={() => {
                                setEditListItem(index);
                                setNewEditText(item);
                            }}>Edit</button>
                    )}
                    {editListItem === index ? (
                        <button onClick={cancelHandler}>Cancel</button>
                    ) : (
                        <button onClick={() => deleteHandler(index)}>Delete</button>
                    )}

                </li>
            ))}</ul>
        </div>
    )
}