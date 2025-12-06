
export default function Message({ id, text, onButtonClick }) {
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onButtonClick(id)}>Click Me</button>
    </div>
  );
}
