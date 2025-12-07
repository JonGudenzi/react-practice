

export default function CounterDisplay({ count }) {
 return (
    <p>{count === 0 ? "Nothing yet" : "Counting"} {count}</p>
 )
}