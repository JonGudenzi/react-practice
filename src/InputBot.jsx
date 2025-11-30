import { useState } from "react";

export default function InputBox() {

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div>
      <input value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => {
        if (inputValue.trim() === "") return;
        setItems(prevItems => [...prevItems, inputValue]);
        setInputValue("");
      }
      }>Add</button>
      <p>You typed: {inputValue}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>You have {items.length}</p>
    </div>
  );
}