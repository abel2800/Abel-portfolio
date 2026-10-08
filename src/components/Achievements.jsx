import { motion } from 'framer-motion'
import PixelBox from './ui/PixelBox'

const Achievements = () => {
  const trophies = [
    {
      icon: '🚚',
      title: 'GUZO Logistics Empire',
      desc: 'Shipped full Ethiopian logistics ecosystem — customer, driver, merchant, admin, and warehouse apps',
      rarity: 'legendary',
      year: '2024-25',
      link: 'https://github.com/abel2800/Guzo',
    },
    {
      icon: '🎓',
      title: 'Campus Hub Capstone',
      desc: 'Built a complete LMS as graduation project instead of just complaining about the school system',
      rarity: 'legendary',
      year: '2024',
      link: 'https://github.com/abel2800/Campus-Hub',
    },
    {
      icon: '📖',
      title: 'Bible Pulse Builder',
      desc: 'Cross-platform Amharic + English Bible app with devotionals, reading plans, and hymns',
      rarity: 'epic',
      year: '2024',
      link: 'https://github.com/abel2800/Bible-Plus',
    },
    {
      icon: '🎮',
      title: 'Rust-Town Shooter',
      desc: 'Built a C# shooting game — Rust-Town (written in C#, not Rust, because naming is hard)',
      rarity: 'epic',
      year: '2024',
      link: 'https://github.com/abel2800/Rust-Town',
    },
    {
      icon: '🌍',
      title: 'Global Logistics System',
      desc: 'End-to-end Ethiopian logistics tracking with real-time updates and analytics',
      rarity: 'rare',
      year: '2024',
      link: 'https://github.com/abel2800/Ethiopian-global-logistics',
    },
    {
      icon: '⭐',
      title: 'Open Source Grinder',
      desc: '14 public repos on GitHub — logistics, ride-hailing, campus, creators, mobile, and games',
      rarity: 'rare',
      year: '2024',
      link: 'https://github.com/abel2800',
    },
  ]

  const rarityStyle = {
    legendary: 'border-pixel-gold text-pixel-gold',
    epic: 'border-pixel-purple text-pixel-purple',
    rare: 'border-pixel-blue text-pixel-blue',
  }

  const stats = [
    { icon: '📚', value: '2+', label: 'Years Active' },
    { icon: '🚀', value: '6+', label: 'Epic Builds' },
    { icon: '💻', value: '14', label: 'GitHub Repos' },
    { icon: '🛠️', value: '8+', label: 'Tech Stacks' },
  ]

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-tag">TROPHY ROOM</span>
          <h2 className="section-title">EPIC BUILDS</h2>
          <div className="section-divider">━━━━━ 🏆 ━━━━━</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false }}
              className="text-center p-4 bg-pixel-card border-4 border-pixel-gold cursor-hover"
              style={{ boxShadow: '4px 4px 0 #b8860b' }}
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="font-pixel text-lg text-pixel-gold">{s.value}</p>
              <p className="text-lg text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trophies.map((trophy, i) => (
            <motion.a
              key={trophy.title}
              href={trophy.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -6 }}
              className={`trophy-card cursor-hover border-4 block no-underline ${rarityStyle[trophy.rarity].split(' ')[0]}`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-4xl">{trophy.icon}</span>
                <span className={`font-pixel text-[0.3rem] px-2 py-1 border ${rarityStyle[trophy.rarity]}`}>
                  {trophy.rarity.toUpperCase()}
                </span>
              </div>
              <h3 className="font-pixel text-[0.5rem] text-pixel-gold mb-2 leading-relaxed">{trophy.title}</h3>
              <p className="text-lg text-gray-400 mb-3">{trophy.desc}</p>
              <p className="font-pixel text-[0.35rem] text-pixel-blue">▶ VIEW ON GITHUB</p>
              <p className="font-pixel text-[0.35rem] text-gray-500 mt-1">UNLOCKED: {trophy.year}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mt-12"
        >
          <PixelBox title="NEW QUEST AVAILABLE" color="green">
            <p className="text-xl text-gray-300 mb-4 text-center">
              Scaling GUZO across Ethiopian cities. Always open to new adventures and collaborations!
            </p>
            <div className="text-center">
              <a href="#contact" className="pixel-btn pixel-btn-gold cursor-hover">
                💾 SAVE & CONTACT
              </a>
            </div>
          </PixelBox>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
