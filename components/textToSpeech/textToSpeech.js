'use client'

import { useState } from 'react'
import styles from '../../styles/inputStyle.module.css'

const TextToSpeech = () => {
  const [userInput, setUserInput] = useState("")

  const handleSpeak = () => {
      let message = ""
      switch (userInput[0].toLowerCase()) {
        case 'a':
        case 'b':
        case 'j':
          message = `Live long and prosper ${userInput}`
          break
        case 'c': 
        case 'o':
        case 'p':
          message = `Greetings ${userInput}`
          break
        case 'd':
        case 'g':
        case 't':
          message = `Hello there ${userInput}`
          break
        case 'f':
        case 'e':
        case 'm':
          message = `Pleased to meet you ${userInput}`
          break
        case 'k':
        case 'v':
        case 'i':
          message = `Glad to see you here ${userInput}`
          break
        case 'h':
        case 'r':
        case 'å':
          message = `What a pleasent to surprise to find you here ${userInput}`
          break
        case 's':
        case 'l':
        case 'q':
          message = `Good day ${userInput}`
          break
        case 'n':
        case 'w':
        case 'ö':
          message = `Meeting you here ${userInput} have made this day a little bit better`
          break
        case 'u':
        case 'y':
        case 'z':
          message = `Woooohoooooooo a wild ${userInput} appeared`
          break
        case 'x':
        case 'ä':
          message = `Hi ${userInput}, what a unique name you have`
          break
        default:
          message = `That doesnt seem to be a Swedish name, check your spelling and try again.`
      }
      const speech = new SpeechSynthesisUtterance(message)
      speechSynthesis.speak(speech)
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div>
      <input type="text" value={userInput} className={styles.inputField} onChange={handleInputChange} placeholder="Enter your name"  />
      <button onClick={handleSpeak} className={styles.buttonStyle}>Play greeting</button>
    </div>
  )
}

export default TextToSpeech