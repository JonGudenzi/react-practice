// src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToggleBox from "./ToggleBox";
import ClickBox from "./ClickBox";
import InputBox from "./InputBot";
import InputBox2 from "./InputBox2";
import InputBox3 from "./InputBox3";
import InputBox4 from "./InputBox4";
import InputBox5 from "./InputBox5";
import InputBox6 from "./InputBox6";
import InputBox7 from "./InputBox7";
import Message from "./Message";


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
      <Message text="hello Jon"/>
      <br></br>
      <br></br>
      <br></br>
      <InputBox7 />
      <br></br>
      <br></br>
      <br></br>
      <InputBox6 />
      <br></br>
      <br></br>
      <br></br>
      <InputBox5 />
      <br></br>
      <br></br>
      <br></br>
      <InputBox4 />
      <br></br>
      <br></br>
      <br></br>
      <InputBox3 />
      <br></br>
      <br></br>
      <br></br>
      <InputBox />
      <InputBox2 />
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

