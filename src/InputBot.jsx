import { useState } from "react";

export default function InputBox() {

    const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} />
      <p>You typed: {inputValue}</p>
    </div>
  );
}