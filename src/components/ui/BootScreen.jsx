import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const BootScreen = ({ onStart }) => {
  const [lines, setLines] = useState([])
  const [ready, setReady] = useState(false)

  const bootLines = [
    '> INITIALIZING ABEL QUEST v2.0...',
    '> LOADING CHARACTER DATA... OK',
    '> MOUNTING SKILL TREE... OK',
    '> FETCHING QUEST LOG... 3 QUESTS FOUND',
    '> WELCOME, TRAVELER.',
  ]

  const startGame = useCallback(() => {
    onStart()
  }, [onStart])

  useEffect(() => {
    document.body.classList.add('boot-active')
    return () => document.body.classList.remove('boot-active')
  }, [])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines(prev => [...prev, bootLines[i]])
        i++
      } else {
        clearInterval(interval)
        setReady(true)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!ready) return

    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        startGame()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [ready, startGame])

  return (
    <motion.div
      className="boot-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="boot-screen-inner">
        <div className="boot-logo">
          <span className="text-pixel-gold">★</span>
          <h1>ABEL QUEST</h1>
          <span className="text-pixel-gold">★</span>
        </div>
        <p className="boot-subtitle">THE CODE WARRIOR</p>

        <p className="boot-hint">
          {ready
            ? '👇 Click the button below to enter the portfolio'
            : '⏳ Loading your adventure...'}
        </p>

        <div className="boot-terminal">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="boot-line"
            >
              {line}
            </motion.p>
          ))}
          {!ready && <span className="boot-cursor-blink">_</span>}
        </div>

        {ready ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="boot-actions"
          >
            <button
              onClick={startGame}
              className="pixel-btn pixel-btn-gold boot-start-btn"
            >
              ▶ ENTER PORTFOLIO
            </button>
            <p className="boot-key-hint">or press Enter / Space</p>
          </motion.div>
        ) : (
          <div className="boot-loading">
            <div className="boot-loading-bar">
              <motion.div
                className="boot-loading-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: bootLines.length * 0.4, ease: 'linear' }}
              />
            </div>
          </div>
        )}

        {ready && (
          <button onClick={startGame} className="boot-skip">
            Skip intro →
          </button>
        )}

        <p className="boot-credit">© 2026 ABEL SIRAK KEBEDE</p>
      </div>
    </motion.div>
  )
}

export default BootScreen
