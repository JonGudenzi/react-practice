export default function IncrementButton({ amount, onIncrement }) {
    return (
        <div>
            <button 
            onClick={() => (onIncrement(amount))}>
                Increment
            </button>
        </div>
    )
}