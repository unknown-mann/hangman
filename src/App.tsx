import { useCallback, useEffect, useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from './wordList.json'

const App: React.FC = () => {

  const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)])

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const refreshWordToGuess = () => {
    setGuessedLetters([])
    setWordToGuess(words[Math.floor(Math.random() * words.length)])
  }

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(prev => [...prev, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (evt: KeyboardEvent) => {
      const key = evt.key
      if (!key.match(/^[a-z]$/)) return
      evt.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  return (
    <div className='container'>
      <div className='wrapper'>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      </div>
      <div className='keyboard-wrapper'>
        <div className='text'>
          {isWinner && 'Winner! - Refresh to try again'}
          {isLoser && 'Nice try - Refresh to try again'}
        </div>
        <button
          className='refresh-button'
          onClick={refreshWordToGuess}
        >
          Refresh word
        </button>
        <Keyboard disabled={isWinner || isLoser} activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} />
      </div>
    </div>
  )
}

export default App
