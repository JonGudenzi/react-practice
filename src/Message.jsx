
export default function Message({ id, text, onButtonClick, isSelected }) {
  return (
    <div style={{ 
      padding: "8px",
      margin: "4px 0",
      border: "1px solid black",
      backgroundColor: isSelected ? "green" : "#420fc5ff"
    }}>
      <p>{text}</p>
      <button onClick={() => onButtonClick(id)}>Click Me</button>
    </div>
  );
}
