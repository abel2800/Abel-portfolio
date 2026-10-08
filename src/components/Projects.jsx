import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PixelBox from './ui/PixelBox'
import { categories, quests } from '../data/projects'

const Projects = () => {
  const [selectedQuest, setSelectedQuest] = useState(null)
  const [filter, setFilter] = useState('all')

  const visibleQuests = useMemo(
    () => (filter === 'all' ? quests : quests.filter((q) => q.category === filter)),
    [filter]
  )

  const handleQuestClick = (quest) => {
    setSelectedQuest(quest)
  }

  const openLink = (url) => {
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-tag">QUEST BOARD</span>
          <h2 className="section-title">ALL FOLDER QUESTS</h2>
          <div className="section-divider">━━━━━ 📜 ━━━━━</div>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Public GitHub repos plus workspace builds. Filter by class, then open a scroll for the repo, live demo, and local folder name.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`pixel-btn cursor-hover text-[0.4rem] ${
                filter === cat.id ? 'pixel-btn-gold' : 'pixel-btn-green'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="text-center text-lg text-pixel-gold mb-8">
          {visibleQuests.length} QUESTS · FOLDER MAP LOADED
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleQuests.map((quest, i) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.4) }}
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
              <p className="text-sm text-gray-500 mb-3">
                {quest.repo ? `🐙 ${quest.repo}` : `📁 ${quest.folder}`}
              </p>

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

              <p className="font-pixel text-[0.35rem] text-gray-500 mt-4 animate-blink">▶ CLICK FOR DETAILS</p>
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
                <p className={`text-center text-lg text-pixel-blue ${selectedQuest.repo && selectedQuest.folder ? 'mb-1' : 'mb-4'}`}>
                  {selectedQuest.repo ? `🐙 ${selectedQuest.repo}` : `📁 ${selectedQuest.folder}`}
                </p>
                {selectedQuest.repo && selectedQuest.folder && (
                  <p className="text-center text-sm text-gray-500 mb-4">📁 {selectedQuest.folder}</p>
                )}
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

                <div className="flex flex-wrap gap-3 justify-center">
                  {selectedQuest.github && (
                    <button
                      type="button"
                      onClick={() => openLink(selectedQuest.github)}
                      className="pixel-btn pixel-btn-green cursor-hover text-[0.45rem]"
                    >
                      GITHUB
                    </button>
                  )}
                  {selectedQuest.live && (
                    <button
                      type="button"
                      onClick={() => openLink(selectedQuest.live)}
                      className="pixel-btn pixel-btn-gold cursor-hover text-[0.45rem]"
                    >
                      LIVE
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedQuest(null)}
                    className="pixel-btn pixel-btn-gold cursor-hover text-[0.45rem]"
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
