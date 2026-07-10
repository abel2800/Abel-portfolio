import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'HOME', href: '#home', icon: '🏠' },
    { name: 'STATS', href: '#about', icon: '📊' },
    { name: 'SKILLS', href: '#skills', icon: '⚔️' },
    { name: 'QUESTS', href: '#projects', icon: '📜' },
    { name: 'MAP', href: '#timeline', icon: '🗺️' },
    { name: 'TROPHIES', href: '#achievements', icon: '🏆' },
    { name: 'SAVE', href: '#contact', icon: '💾' },
  ]

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="game-nav">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`game-nav-item cursor-hover ${activeSection === link.href.slice(1) ? 'active' : ''}`}
        >
          <span className="mr-1">{link.icon}</span>
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
