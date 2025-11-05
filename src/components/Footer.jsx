import { motion } from 'framer-motion'
import { FaHeart, FaRocket, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-neon-purple/30">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-purple-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-glow-cyan mb-3">
              Abel Sirak Kebede
            </h3>
            <p className="text-gray-400 font-rajdhani">
              Crafting Digital Futures with Code & Imagination
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <h4 className="text-lg font-orbitron font-bold mb-4 text-neon-purple">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-rajdhani cursor-hover"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-orbitron font-bold mb-4 text-neon-purple">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href="https://github.com/abel2800"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-10 h-10 flex items-center justify-center glass rounded-lg text-xl text-neon-cyan hover:text-neon-purple hover:neon-glow-cyan transition-all duration-300 cursor-hover"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abel-sirak/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-10 h-10 flex items-center justify-center glass rounded-lg text-xl text-neon-cyan hover:text-neon-purple hover:neon-glow-cyan transition-all duration-300 cursor-hover"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="pt-8 border-t border-neon-purple/20 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 font-rajdhani flex items-center gap-2">
              © {currentYear} Abel Sirak Kebede. Designed & Built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-neon-purple" />
              </motion.span>
            </p>

            <motion.a
              href="#home"
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors duration-300 font-rajdhani cursor-hover"
            >
              <span>Back to Top</span>
              <FaRocket className="transform rotate-[-45deg]" />
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      </div>
    </footer>
  )
}

export default Footer

