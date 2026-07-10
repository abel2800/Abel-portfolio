import { motion } from 'framer-motion'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-10 border-t-4 border-pixel-blue bg-pixel-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <p className="font-pixel text-[0.5rem] text-pixel-gold mb-2">★ ABEL QUEST ★</p>
          <p className="text-xl text-gray-400">The Code Warrior — Crafting Digital Worlds</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { label: 'HOME', href: '#home' },
            { label: 'QUESTS', href: '#projects' },
            { label: 'SAVE', href: '#contact' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="font-pixel text-[0.4rem] text-gray-500 hover:text-pixel-gold transition-colors cursor-hover"
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center border-t-2 border-gray-800 pt-6"
        >
          <p className="text-lg text-gray-500 mb-2">
            © {year} Abel Sirak Kebede — Press START to continue
          </p>
          <a
            href="#home"
            className="font-pixel text-[0.4rem] text-pixel-blue hover:text-pixel-gold transition-colors cursor-hover"
          >
            ▲ RETURN TO TITLE SCREEN
          </a>
        </motion.div>

        <div className="flex justify-center gap-2 mt-4 text-pixel-gold text-xs">
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
