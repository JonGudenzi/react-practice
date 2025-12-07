export default function ResetButton({ onClick, disabled}) {
    return (
        <div>
            <button
                onClick={onClick}
                disabled={disabled}>
                Reset
            </button>
        </div>
    )
}