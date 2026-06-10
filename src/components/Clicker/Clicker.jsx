import { useState } from 'react'
import styles from './Clicker.module.css'

export default function Clicker() {
  const [count, setCount] = useState(0)

  const displayCount = String(count).padStart(4, '0')

  function handleClick() {
    setCount((current) => (current + 1) % 10000)
  }

  return (
    <div className={styles.container}>
      <p className={styles.counter} aria-live="polite">
        {displayCount}
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
      >
        click
      </button>
    </div>
  )
}
