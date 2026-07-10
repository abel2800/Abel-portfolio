import { motion } from 'framer-motion'

const DialogueBox = ({ speaker, text, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: false }}
      className={`dialogue-box ${className}`}
    >
      {speaker && <p className="dialogue-speaker">{speaker}</p>}
      <p className="dialogue-text">{text}</p>
      <span className="dialogue-arrow">▼</span>
    </motion.div>
  )
}

export default DialogueBox
