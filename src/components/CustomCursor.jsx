import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(touch)
    if (touch) return

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const interactive = target.closest('a, button, .cursor-hover, input, textarea')
      setIsHovering(!!interactive)
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (isTouch) return null

  return (
    <div
      className={`pixel-cursor ${isHovering ? 'hovering' : ''}`}
      style={{ left: position.x, top: position.y }}
    >
      {isHovering ? '⚔️' : '🗡️'}
    </div>
  )
}

export default CustomCursor
