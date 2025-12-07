import { useState } from "react";
import MessageItem from "./MessageItem";

export default function MessageList() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello Jon!" },
    { id: 2, text: "React is starting to click" },
    { id: 3, text: "This time Ace is teaching correctly" },
  ]);

  const [selectedId, setSelectedId] = useState(null);

  function handleSelect(id) {
    setSelectedId(id);
  }

function handleDelete(id) {
  setMessages(prev => prev.filter(msg => msg.id !== id));
}

  return (
    <div>
      <h2>Message List</h2>

      {messages.map((msg) => (
        <div key={msg.id}
          onClick={() => handleSelect(msg.id)}
          style={{
            backgroundColor: msg.id === selectedId ? "blue" : "black",
            color: "white",
            padding: "4px"
          }}> <MessageItem
          key={msg.id}
          id={msg.id}
          text={msg.text}
          isSelected={msg.id === selectedId}
          onSelect={handleSelect}
          onDelete={handleDelete} />
          </div>
      ))}
    </div>
  );
}

