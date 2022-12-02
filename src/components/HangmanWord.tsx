interface HangmanWordProps {
    reveal?: boolean
    guessedLetters: string[]
    wordToGuess: string
}

const HangmanWord: React.FC<HangmanWordProps> = ({ reveal = false, guessedLetters, wordToGuess }) => {

    return (
        <div className="word-container">
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className="letter-wrapper">
                    <span className={`${guessedLetters.includes(letter) || reveal ? 'letter-visible' : 'letter-hidden'} ${!guessedLetters.includes(letter) && reveal ? 'red-button' : ''}`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default HangmanWord;