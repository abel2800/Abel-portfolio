import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { FaRocket, FaDownload } from 'react-icons/fa'

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  )
}

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-purple-900/10 to-dark-bg"></div>
        
        {/* Particles */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                background: Math.random() > 0.5 ? '#8B5CF6' : '#00E5FF',
                boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() > 0.5 ? '#8B5CF6' : '#00E5FF'}`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-neon-cyan text-lg font-rajdhani">Hello, I'm</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-orbitron font-bold mb-6 text-glow-purple animate-glow"
            >
              ABEL<br />
              <span className="text-neon-cyan">SIRAK</span><br />
              KEBEDE
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-rajdhani text-gray-300 mb-4"
            >
              Crafting Digital Futures with<br />
              <span className="text-neon-purple">Code & Imagination</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8"
            >
              Computer Scientist • Builder • Innovator
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg font-rajdhani font-semibold text-lg flex items-center gap-2 cursor-hover neon-glow-purple hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <FaRocket />
              </motion.a>

              <motion.a
                href="/assets/abel-cv.pdf"
                download="Abel_Sirak_Kebede_CV.pdf"
                className="px-8 py-4 glass border-2 border-neon-cyan rounded-lg font-rajdhani font-semibold text-lg flex items-center gap-2 cursor-hover hover:bg-neon-cyan/10 hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Placeholder for Abel's image */}
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
                {/* 3D Canvas Background */}
                <div className="absolute inset-0 opacity-30">
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <AnimatedSphere />
                    <OrbitControls enableZoom={false} autoRotate />
                  </Canvas>
                </div>

                {/* Hero Image */}
                <img 
                  src="/assets/abel-hero.jpg" 
                  alt="Abel Sirak Kebede" 
                  className="w-full h-full object-cover glass-dark neon-glow-purple rounded-lg"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))',
                  }}
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 border-4 border-neon-purple rounded-lg"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-neon-cyan rounded-lg"
                animate={{
                  rotate: [360, 270, 180, 90, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

