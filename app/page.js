import TextToSpeech from "../components/textToSpeech/textToSpeech"
import styles from "../styles/mainPage.module.css"

export default function Home() {

  return (
    <main>
      <h1 className={styles.headLine}>Labb 1</h1>
      <div className={styles.inputField}>
        <TextToSpeech />
      </div>
    </main>
  )
}
