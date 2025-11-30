// src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToggleBox from "./ToggleBox";
import ClickBox from "./ClickBox";

function App() {
  const boxes = [
    { id: 1, label: "Box One", content: "This is box one content." },
    { id: 2, label: "Box Two", content: "This is box two content." },
    { id: 3, label: "Box Three", content: "This is box three content." },
    { id: 4, label: "Box Four", content: "This is box four content." },
    { id: 5, label: "Box Five", content: "This is box five content." },
    { id: 6, label: "Box Six", content: "This is box six content." }
  ];

  const [lastClicked, setLastClicked] = useState(null);
  const [openBoxId, setOpenBoxId] = useState(null);

  function handleBoxClick(label) {
    console.log("Box clicked:", label);
    setLastClicked(label);
  }

  function handleToggle(boxId) {
    setOpenBoxId(prevId => (prevId === boxId ? null : boxId));
  }

  return (
    <div className="App">
      <ClickBox />
      <h1>🔥🔥 JON TEST HEADER 🔥🔥</h1>

      {lastClicked && (
        <p>Last clicked: {lastClicked}</p>
      )}

      {boxes.map((box) => (
        <ToggleBox
          key={box.id}
          box={box}
          onBoxClick={handleBoxClick}
          isOpen={openBoxId === box.id}
          onToggle={() => handleToggle(box.id)}
        />
      ))}
    </div>
  );
}

export default App;

