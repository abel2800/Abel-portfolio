import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import GameHUD from './components/ui/GameHUD'
import Scanlines from './components/ui/Scanlines'
import BootScreen from './components/ui/BootScreen'

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  const handleStart = () => {
    setGameStarted(true)
  }

  if (!gameStarted) {
    return (
      <>
        <CustomCursor />
        <BootScreen onStart={handleStart} />
      </>
    )
  }

  return (
    <div className="App">
      <CustomCursor />
      <Scanlines />
      <GameHUD />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
