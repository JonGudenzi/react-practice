export default function TextInput({ value, onChangeText }) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
}
