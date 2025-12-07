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
  if (selectedId === id) {
    setSelectedId(null);
  }
}


const selectedMessage = messages.find(msg => msg.id === selectedId);

  return (
    <div>
      <h2>Message List</h2>

      {messages.map((msg) => (
         <MessageItem
          key={msg.id}
          id={msg.id}
          text={msg.text}
          isSelected={msg.id === selectedId}
          onSelect={handleSelect}
          onDelete={handleDelete} />
      ))}
      {selectedId !== null && (
  <p style={{ marginTop: "12px" }}>
    You selected: {selectedMessage.text}
  </p>
)}

    </div>
  );
}

