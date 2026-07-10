import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GameHUD = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="game-hud">
      <div className="hud-left">
        <div className="hud-avatar">
          <img
            src="/assets/abel-face.png"
            alt="Abel"
            className="hud-avatar-face"
          />
        </div>
        <div className="hud-stats">
          <p className="hud-name">ABEL</p>
          <p className="hud-class">LV.42 CODE WARRIOR</p>
          <div className="hud-bar-group">
            <div className="hud-bar-label">
              <span>HP</span>
              <span>████████░░</span>
            </div>
            <div className="hud-bar hp-bar">
              <motion.div
                className="hud-bar-fill hp-fill"
                animate={{ width: `${85 + scrollProgress * 0.1}%` }}
              />
            </div>
          </div>
          <div className="hud-bar-group">
            <div className="hud-bar-label">
              <span>MP</span>
              <span>██████████</span>
            </div>
            <div className="hud-bar mp-bar">
              <motion.div
                className="hud-bar-fill mp-fill"
                animate={{ width: `${70 + scrollProgress * 0.15}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hud-right">
        <div className="hud-coins">
          <span>🪙</span>
          <span>13+</span>
        </div>
        <div className="hud-xp">
          <span>XP</span>
          <div className="hud-xp-bar">
            <motion.div
              className="hud-xp-fill"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameHUD
