import BODY_PARTS from '../const'

interface HangmanDrawingProps {
    numberOfGuesses: number
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
    return (
        <div className='hangman-container'>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className='vertical-right-bar' />
            <div className='horizontal-top-bar' />
            <div className='vertical-left-bar' />
            <div className='horizontal-bottom-bar' />
        </div>
    );
};

export default HangmanDrawing;