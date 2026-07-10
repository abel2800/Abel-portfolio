import { motion } from 'framer-motion'
import DialogueBox from './ui/DialogueBox'

const Hero = () => {
  const floatingItems = ['⭐', '🪙', '💎', '⚡', '🔮']

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="stars-bg">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: Math.random() > 0.7 ? '6px' : '3px',
              height: Math.random() > 0.7 ? '6px' : '3px',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-tag">★ PLAYER SELECT ★</p>
            <h1 className="text-3xl md:text-5xl font-pixel text-pixel-gold mb-4 leading-relaxed"
              style={{ textShadow: '4px 4px 0 #b8860b' }}>
              ABEL<br />SIRAK<br />KEBEDE
            </h1>
            <p className="text-2xl text-pixel-blue mb-2 tracking-widest">THE CODE WARRIOR</p>
            <p className="text-xl text-gray-400 mb-8">
              Class: Full-Stack Developer &nbsp;|&nbsp; Guild: Solo Codes
            </p>

            <DialogueBox
              speaker="ABEL says:"
              text="Greetings, traveler! I craft digital worlds where code meets imagination. Ready to begin your quest?"
              className="mb-8"
            />

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="pixel-btn pixel-btn-gold cursor-hover">
                ▶ START QUEST
              </a>
              <a href="/assets/abel-cv.pdf" download="Abel_Sirak_Kebede_CV.pdf" className="pixel-btn pixel-btn-blue cursor-hover">
                📄 ITEM: CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.img
                src="/assets/abel-sorcerer.png"
                alt="Abel Sirak Kebede — The Code Sorcerer"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="hero-sorcerer"
              />

              {floatingItems.map((item, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: i % 2 === 0 ? '-20%' : '90%',
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {item}
                </motion.span>
              ))}

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-pixel-card border-4 border-pixel-gold px-4 py-2 whitespace-nowrap"
                style={{ boxShadow: '4px 4px 0 #b8860b' }}>
                <p className="font-pixel text-[0.45rem] text-pixel-gold">LV. 42</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="font-pixel text-[0.5rem] text-pixel-green">▼ SCROLL TO EXPLORE THE WORLD ▼</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
