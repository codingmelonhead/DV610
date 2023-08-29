'use client'

import { useState } from 'react'

const TextToSpeech = () => {
  const [message, setMessage] = useState("Hello name")
  const [speaking, setSpeaking] = useState(false)

  const handleSpeak = () => {
    if (!speaking) {
      const speech = new SpeechSynthesisUtterance(message)
      speechSynthesis.speak(speech)
      speech.onstart = () => setSpeaking(true)
      speech.onend = () => setSpeaking(false)
    }
  }

  return (
    <div>
      <button onClick={handleSpeak}>Play greeting</button>
    </div>
  )
}

export default TextToSpeech