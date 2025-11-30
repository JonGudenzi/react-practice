// src/ToggleBox.jsx
import { useState } from "react";

export default function ToggleBox({ box, onBoxClick, isOpen, onToggle }) {
  return (
    <div className="box">
      <button onClick={onToggle}>
        {isOpen ? `Hide ${box.label}` : `Show ${box.label}`}
      </button>

      {isOpen && <p>{box.content}</p>}

      <button onClick={() => onBoxClick(box.label)}>
        Notify Parent
      </button>
    </div>
  );
}
