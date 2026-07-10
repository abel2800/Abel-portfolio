import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PixelBox from './ui/PixelBox'

const quests = [
  {
    id: 'Q-001',
    title: 'GUZO',
    subtitle: 'MAIN QUEST',
    difficulty: '★★★★★',
    reward: '+1000 XP',
    status: 'COMPLETED',
    description:
      'Flagship Ethiopian logistics ecosystem — Cainiao-inspired platform with customer app, driver app, merchant dashboard, admin panel, warehouse management, live tracking, route optimization, and Ethiopian payment integration.',
    tags: ['TypeScript', 'Logistics', 'Full-Stack', 'Mobile'],
    github: 'https://github.com/abel2800/Guzo',
    icon: '🚚',
    color: 'gold',
  },
  {
    id: 'Q-002',
    title: 'Ethiopian Global Logistics',
    subtitle: 'EPIC QUEST',
    difficulty: '★★★★☆',
    reward: '+500 XP',
    status: 'COMPLETED',
    description:
      'Complete logistics tracking and order management system with real-time updates, analytics dashboards, and end-to-end supply chain tools built for Ethiopian operations.',
    tags: ['JavaScript', 'Full-Stack', 'Logistics', 'Tracking'],
    github: 'https://github.com/abel2800/Ethiopian-global-logistics',
    icon: '🌍',
    color: 'blue',
  },
  {
    id: 'Q-003',
    title: 'Bible Pulse',
    subtitle: 'EPIC QUEST',
    difficulty: '★★★★★',
    reward: '+600 XP',
    status: 'COMPLETED',
    description:
      'Cross-platform Flutter Bible study app with KJV, ASV, and Amharic translations. Daily devotionals, reading plans, bookmarks, notes, highlights, and a hymns library.',
    tags: ['Flutter', 'Dart', 'Mobile', 'Amharic'],
    github: 'https://github.com/abel2800/Bible-Pulse-Amharic-Bible-',
    icon: '📖',
    color: 'green',
  },
  {
    id: 'Q-004',
    title: 'Campus Hub',
    subtitle: 'MAIN QUEST',
    difficulty: '★★★★☆',
    reward: '+500 XP',
    status: 'COMPLETED',
    description:
      'Learning Management System built as a graduation capstone — course management, student tools, and a platform designed to replace complaining about the school LMS with actually shipping one.',
    tags: ['JavaScript', 'LMS', 'Education', 'Full-Stack'],
    github: 'https://github.com/abel2800/Campus-Hub',
    icon: '🏫',
    color: 'purple',
  },
  {
    id: 'Q-005',
    title: 'Rust-Town',
    subtitle: 'SIDE QUEST',
    difficulty: '★★★☆☆',
    reward: '+400 XP',
    status: 'COMPLETED',
    description:
      'A shooting game built in C# — because sometimes you need to blow off steam in code, not in real life. Yes, it is C# not Rust. Naming things is hard.',
    tags: ['C#', 'Game Dev', 'Unity', 'Shooting'],
    github: 'https://github.com/abel2800/Rust-Town',
    icon: '🎮',
    color: 'red',
  },
  {
    id: 'Q-006',
    title: 'Abel Quest Portfolio',
    subtitle: 'CURRENT BUILD',
    difficulty: '★★★☆☆',
    reward: '+300 XP',
    status: 'ACTIVE',
    description:
      'This very site — an 8-bit RPG adventure portfolio with boot screen, quest board, skill tree, and character stats. Built with React, Vite, and Framer Motion.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    github: null,
    icon: '⚔️',
    color: 'blue',
  },
]

const Projects = () => {
  const [selectedQuest, setSelectedQuest] = useState(null)

  const handleQuestClick = (quest) => {
    if (quest.github) {
      window.open(quest.github, '_blank', 'noopener,noreferrer')
      return
    }
    setSelectedQuest(quest)
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-tag">QUEST BOARD</span>
          <h2 className="section-title">ACTIVE QUESTS</h2>
          <div className="section-divider">━━━━━ 📜 ━━━━━</div>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Click any quest to open its GitHub repository. Local-only builds open a detail scroll.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest, i) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              onClick={() => handleQuestClick(quest)}
              className="quest-card cursor-hover p-6"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleQuestClick(quest)}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-pixel text-[0.4rem] text-pixel-blue">{quest.id}</span>
                <span
                  className={`font-pixel text-[0.35rem] px-2 py-1 border-2 ${
                    quest.status === 'COMPLETED'
                      ? 'border-pixel-green text-pixel-green'
                      : 'border-pixel-gold text-pixel-gold'
                  }`}
                >
                  {quest.status}
                </span>
              </div>

              <div className="text-5xl mb-4 text-center">{quest.icon}</div>

              <p className="font-pixel text-[0.35rem] text-pixel-purple mb-1">{quest.subtitle}</p>
              <h3 className="font-pixel text-[0.6rem] text-pixel-gold mb-2 leading-relaxed">{quest.title}</h3>

              <div className="flex justify-between items-center mb-4">
                <span className="quest-difficulty text-pixel-gold">{quest.difficulty}</span>
                <span className="text-lg text-pixel-green">{quest.reward}</span>
              </div>

              <p className="text-lg text-gray-400 line-clamp-3">{quest.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {quest.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-sm px-2 py-0.5 bg-pixel-dark border border-gray-600 text-pixel-blue">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-pixel text-[0.35rem] text-gray-500 mt-4 animate-blink">
                {quest.github ? '▶ CLICK → OPEN GITHUB REPO' : '▶ CLICK FOR DETAILS'}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abel2800"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn pixel-btn-green cursor-hover"
          >
            🗃️ VIEW ALL REPOS ON GITHUB
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedQuest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedQuest(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full"
            >
              <PixelBox title={`QUEST: ${selectedQuest.id}`} color={selectedQuest.color}>
                <div className="text-6xl text-center mb-4">{selectedQuest.icon}</div>
                <h3 className="font-pixel text-[0.7rem] text-pixel-gold mb-2 text-center leading-relaxed">
                  {selectedQuest.title}
                </h3>
                <p className="text-xl text-gray-300 mb-4 leading-relaxed">{selectedQuest.description}</p>

                <div className="flex justify-between mb-4 text-lg">
                  <span className="text-pixel-gold">{selectedQuest.difficulty}</span>
                  <span className="text-pixel-green">{selectedQuest.reward}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedQuest.tags.map((tag) => (
                    <span key={tag} className="text-sm px-2 py-1 bg-pixel-dark border border-pixel-blue text-pixel-blue">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setSelectedQuest(null)}
                    className="pixel-btn pixel-btn-gold cursor-hover text-[0.5rem]"
                  >
                    ✕ CLOSE
                  </button>
                </div>
              </PixelBox>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
