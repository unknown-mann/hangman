const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

interface KeyboardProps {
    disabled?: boolean
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

const Keyboard: React.FC<KeyboardProps> = ({ disabled = false, activeLetter, inactiveLetters, addGuessedLetter }) => {
    return (
        <div className="keyboard">
            {KEYS.map(key => {
                const isActive = activeLetter.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        key={key}
                        className={`button ${isActive ? 'button-active' : ''} ${isInactive ? 'button-inactive' : ''}`}
                        disabled={isInactive || isActive || disabled}
                        onClick={() => addGuessedLetter(key)}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    );
};

export default Keyboard;