import { useState } from "react";

export default function CleanMessageList() {

  const [messageList, setMessageList] = useState([
    { id: 1, text: "Hello Jon!" },
    { id: 2, text: "React is a lot of pieces" },
    { id: 3, text: "But I'm actually learning it" },
  ]);

  const [messageId, setMessageId] = useState(null);

  function handleSelect(id) {
    setMessageId(id);
  }

  function handleDelete(id) {
    setMessageList(prev =>
      prev.filter(msg => msg.id !== id)
    );
    if (messageId === id) {
      setMessageId(null);
    }
  }

  return (
    <div>
      <h2>Message List</h2>

      {messageList.map((msg) => (
        <div
          key={msg.id}
          onClick={() => handleSelect(msg.id)}
          style={{
            backgroundColor: msg.id === messageId ? "blue" : "black",
            color: "white",
            padding: "8px",
            marginBottom: "6px",
            cursor: "pointer",
          }}
        >
          <p>{msg.text}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevents click from selecting when deleting
              handleDelete(msg.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
