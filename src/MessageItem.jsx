
export default function MessageItem({ id, text, isSelected, onSelect, onDelete }) {
  return (
    <div
    onClick={() => onSelect(id)}
    style={{
      padding: "8px",
        margin: "4px 0",
        border: "1px solid black",
        backgroundColor: isSelected ? "blue" : "black",
        color: "white",
        cursor: "pointer",
    }}>

<p>{text}</p>
<button 
onClick={(e) => {
  e.stopPropagation();
  onDelete(id);
}}>Delete</button>
    </div>
    
  )
}
