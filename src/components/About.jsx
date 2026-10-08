import { motion } from 'framer-motion'
import PixelBox from './ui/PixelBox'

const About = () => {
  const stats = [
    { label: 'STR', name: 'Strength', value: 100, desc: 'Problem Solving' },
    { label: 'INT', name: 'Intelligence', value: 95, desc: 'Algorithms & Logic' },
    { label: 'DEX', name: 'Dexterity', value: 92, desc: 'Code Speed' },
    { label: 'WIS', name: 'Wisdom', value: 90, desc: 'Architecture' },
    { label: 'CHA', name: 'Charisma', value: 100, desc: 'Communication' },
    { label: 'LCK', name: 'Luck', value: 99, desc: 'Debugging' },
  ]

  const badges = [
    { icon: '💡', title: 'Innovation', desc: 'Cutting-edge solutions' },
    { icon: '🌍', title: 'Connection', desc: 'Global communities' },
    { icon: '📚', title: 'Learning', desc: 'Always leveling up' },
    { icon: '❤️', title: 'Impact', desc: 'Making a difference' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-tag">CHARACTER SHEET</span>
          <h2 className="section-title">PLAYER STATS</h2>
          <div className="section-divider">━━━━━ ◆ ━━━━━</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <PixelBox title="BIO LOG" color="blue">
              <p className="text-xl leading-relaxed mb-4">
                <span className="text-pixel-gold">Abel Sirak Kebede</span> is a Computer Science graduate
                who believes technology should <span className="text-pixel-green">connect people</span>,
                empower learning, and shape communities.
              </p>
              <p className="text-xl leading-relaxed mb-4">
                His flagship build <span className="text-pixel-gold">GUZO</span> is a full Ethiopian logistics
                ecosystem — customer app, driver app, merchant dashboard, admin panel, and warehouse management.
              </p>
              <p className="text-xl leading-relaxed mb-4">
                From <span className="text-pixel-blue">Campus Hub</span> to{' '}
                <span className="text-pixel-green">Bible Pulse</span> and the{' '}
                <span className="text-pixel-red">Rust-Town</span> shooting game in C# — he ships products
                people actually use, not just tutorials.
              </p>
              <p className="text-xl leading-relaxed">
                Based in <span className="text-pixel-purple">Addis Ababa, Ethiopia</span>, currently scaling
                GUZO and grinding toward a Master's in Computer & Data Science.
              </p>
            </PixelBox>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <PixelBox title="ATTRIBUTES" color="gold">
              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <div className="flex justify-between mb-1">
                      <span className="font-pixel text-[0.45rem] text-pixel-gold">{stat.label}</span>
                      <span className="text-lg text-gray-400">{stat.desc}</span>
                      <span className="font-pixel text-[0.45rem] text-pixel-green">{stat.value}</span>
                    </div>
                    <div className="stat-bar-pixel">
                      <motion.div
                        className="stat-bar-pixel-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: false }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </PixelBox>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false }}
              className="inventory-slot cursor-hover"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="font-pixel text-[0.4rem] text-pixel-gold mb-1">{badge.title}</p>
              <p className="text-sm text-gray-400">{badge.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { num: '2+', label: 'Years Active' },
            { num: '13+', label: 'GitHub Repos' },
            { num: '6', label: 'Epic Builds' },
            { num: '1', label: 'Degree Earned' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false }}
              className="text-center p-4 bg-pixel-card border-4 border-pixel-purple"
              style={{ boxShadow: '4px 4px 0 #5b21b6' }}
            >
              <p className="font-pixel text-xl text-pixel-gold mb-1">{s.num}</p>
              <p className="text-lg text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
