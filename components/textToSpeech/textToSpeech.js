'use client'

import { useState } from 'react'

const TextToSpeech = () => {
  const [userInput, setUserInput] = useState("")

  const handleSpeak = () => {
      const message = `Hello ${userInput}`
      const speech = new SpeechSynthesisUtterance(message)
      speechSynthesis.speak(speech)
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange} placeholder="Enter your name"  />
      <button onClick={handleSpeak}>Play greeting</button>
    </div>
  )
}

export default TextToSpeech