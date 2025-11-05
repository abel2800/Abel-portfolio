import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaGlobe, FaHeart } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-purple-900/5 to-dark-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-glow-cyan mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-neon-cyan font-semibold">Abel Sirak Kebede</span> is a Computer Science graduate 
              who believes technology should <span className="text-neon-purple">connect people</span>, 
              <span className="text-neon-purple"> empower learning</span>, and 
              <span className="text-neon-purple"> shape communities</span>.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              His motivation to build platforms like <span className="text-neon-cyan font-semibold">CampusHub</span> comes 
              from personal experience navigating international education and bridging cultural communication barriers.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With a passion for creating innovative solutions, Abel combines technical expertise with 
              a deep understanding of user needs to build applications that make a real difference.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glass-dark p-4 rounded-lg hover:neon-glow-purple transition-all duration-300 cursor-hover">
                <FaCode className="text-3xl text-neon-purple mb-2" />
                <h4 className="font-orbitron font-semibold mb-1">Innovation</h4>
                <p className="text-sm text-gray-400">Building cutting-edge solutions</p>
              </div>
              
              <div className="glass-dark p-4 rounded-lg hover:neon-glow-cyan transition-all duration-300 cursor-hover">
                <FaGlobe className="text-3xl text-neon-cyan mb-2" />
                <h4 className="font-orbitron font-semibold mb-1">Connection</h4>
                <p className="text-sm text-gray-400">Connecting communities globally</p>
              </div>
              
              <div className="glass-dark p-4 rounded-lg hover:neon-glow-purple transition-all duration-300 cursor-hover">
                <FaGraduationCap className="text-3xl text-neon-purple mb-2" />
                <h4 className="font-orbitron font-semibold mb-1">Learning</h4>
                <p className="text-sm text-gray-400">Continuous growth mindset</p>
              </div>
              
              <div className="glass-dark p-4 rounded-lg hover:neon-glow-cyan transition-all duration-300 cursor-hover">
                <FaHeart className="text-3xl text-neon-cyan mb-2" />
                <h4 className="font-orbitron font-semibold mb-1">Impact</h4>
                <p className="text-sm text-gray-400">Making a difference</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="glass-dark p-8 rounded-2xl neon-glow-purple">
              <div className="grid grid-cols-2 gap-6">
                <StatCard number="5+" label="Years Experience" delay={0.1} />
                <StatCard number="10+" label="Projects Built" delay={0.2} />
                <StatCard number="3" label="Major Platforms" delay={0.3} />
                <StatCard number="1" label="Degree Achieved" delay={0.4} />
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-lg border border-neon-purple/30">
                <h4 className="font-orbitron font-bold text-xl mb-3 text-neon-cyan">Current Focus</h4>
                <p className="text-gray-300">
                  Pursuing a <span className="text-neon-purple font-semibold">Master's in Computer & Data Science</span> while 
                  building innovative platforms that empower communities through technology.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 border-4 border-neon-cyan rounded-full opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const StatCard = ({ number, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: false }}
      className="text-center p-4 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 rounded-lg border border-neon-purple/20 hover:border-neon-cyan/50 transition-all duration-300 cursor-hover"
    >
      <h3 className="text-4xl font-orbitron font-bold text-glow-cyan mb-2">{number}</h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  )
}

export default About

