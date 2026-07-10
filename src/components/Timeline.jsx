import { motion } from 'framer-motion'
import PixelBox from './ui/PixelBox'

const Timeline = () => {
  const checkpoints = [
    {
      year: '2024 — NOW',
      title: 'MAIN QUEST: GUZO',
      location: 'Ethiopian Logistics Ecosystem',
      description: 'Building and scaling GUZO — customer app, driver app, merchant dashboard, admin panel, warehouse management, live tracking, and payment integration.',
      icon: '🚚',
      unlocked: true,
    },
    {
      year: '2023 — 2024',
      title: 'BOSS BATTLE: Campus Hub',
      location: 'Graduation Capstone',
      description: 'Defeated the final boss — shipped a full LMS as capstone project with course management and student tools.',
      icon: '⚔️',
      unlocked: true,
    },
    {
      year: '2019 — 2024',
      title: 'TRAINING GROUNDS: CS Degree',
      location: 'Ankang University, China',
      description: 'Five-year quest through algorithms, system design, and international collaboration. B.Sc. Computer Science earned.',
      icon: '🎓',
      unlocked: true,
    },
    {
      year: '2019 — 2025',
      title: 'SIDE QUESTS: Full Stack & Games',
      location: 'The Open World',
      description: 'Forged GUZO, Ethiopian Global Logistics, Bible Pulse, Campus Hub, Rust-Town shooter (C#), and this ABEL QUEST portfolio.',
      icon: '🗺️',
      unlocked: true,
    },
  ]

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-tag">WORLD MAP</span>
          <h2 className="section-title">ADVENTURE LOG</h2>
          <div className="section-divider">━━━━━ 🗺️ ━━━━━</div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-pixel-gold md:-translate-x-1/2"
            style={{ boxShadow: '0 0 10px #f7d51d' }} />

          {checkpoints.map((cp, i) => (
            <motion.div
              key={cp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false }}
              className={`relative mb-12 pl-16 md:pl-0 ${
                i % 2 === 0 ? 'md:pr-[55%] md:text-right' : 'md:pl-[55%]'
              }`}
            >
              <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-pixel-card border-4 border-pixel-gold flex items-center justify-center z-10 text-lg">
                {cp.icon}
              </div>

              <PixelBox color={i % 2 === 0 ? 'blue' : 'purple'} className="cursor-hover">
                <p className="font-pixel text-[0.4rem] text-pixel-blue mb-2">{cp.year}</p>
                <h3 className="font-pixel text-[0.55rem] text-pixel-gold mb-1 leading-relaxed">{cp.title}</h3>
                <p className="text-lg text-pixel-purple mb-2">{cp.location}</p>
                <p className="text-xl text-gray-300 leading-relaxed">{cp.description}</p>
                {cp.unlocked && (
                  <p className="font-pixel text-[0.35rem] text-pixel-green mt-3">✓ AREA UNLOCKED</p>
                )}
              </PixelBox>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mt-8"
        >
          <div className="inline-block px-6 py-3 bg-pixel-card border-4 border-pixel-green"
            style={{ boxShadow: '4px 4px 0 #2d7a30' }}>
            <p className="font-pixel text-[0.5rem] text-pixel-green animate-blink">
              ▶ NEW AREAS LOADING...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
