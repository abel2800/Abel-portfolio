import { useState } from 'react'
import { motion } from 'framer-motion'
import PixelBox from './ui/PixelBox'
import DialogueBox from './ui/DialogueBox'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const contacts = [
    { icon: '📧', label: 'SEND PIGEON', value: 'absir28@gmail.com', link: 'mailto:absir28@gmail.com' },
    { icon: '🐙', label: 'GITHUB GUILD', value: 'github.com/abel2800', link: 'https://github.com/abel2800' },
    { icon: '💼', label: 'LINKEDIN HALL', value: 'Abel Sirak Kebede', link: 'https://www.linkedin.com/in/abel-sirak/' },
    { icon: '📸', label: 'INSTAGRAM SCROLL', value: '@abel_sirak_', link: 'https://www.instagram.com/abel_sirak_/' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-tag">SAVE POINT</span>
          <h2 className="section-title">TAVERN CONTACT</h2>
          <div className="section-divider">━━━━━ 💾 ━━━━━</div>
        </div>

        <DialogueBox
          speaker="INNKEEPER says:"
          text="Welcome to the Tavern of Connections! Leave a message scroll, or visit me on one of the guild channels below."
          className="max-w-2xl mx-auto mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <PixelBox title="GUILD CHANNELS" color="blue">
              <div className="space-y-3">
                {contacts.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: false }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-3 bg-pixel-dark border-3 border-gray-600 hover:border-pixel-gold transition-all cursor-hover"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="font-pixel text-[0.35rem] text-pixel-blue">{c.label}</p>
                      <p className="text-lg text-gray-300">{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/assets/abel-cv.pdf"
                  download="Abel_Sirak_Kebede_CV.pdf"
                  className="pixel-btn pixel-btn-green cursor-hover w-full justify-center"
                >
                  📄 EQUIP: CV SCROLL
                </a>
              </div>
            </PixelBox>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <PixelBox title="MESSAGE SCROLL" color="gold">
              <form onSubmit={handleSubmit} className="space-y-4">
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field}>
                    <label className="font-pixel text-[0.35rem] text-pixel-gold mb-1 block uppercase">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-pixel-dark border-3 border-gray-600 focus:border-pixel-gold outline-none text-xl text-gray-200 transition-colors"
                      placeholder={`Enter your ${field}...`}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-pixel text-[0.35rem] text-pixel-gold mb-1 block">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-pixel-dark border-3 border-gray-600 focus:border-pixel-gold outline-none text-xl text-gray-200 resize-none transition-colors"
                    placeholder="Write your message scroll..."
                  />
                </div>

                <button type="submit" className="pixel-btn pixel-btn-gold cursor-hover w-full justify-center">
                  📨 SEND SCROLL
                </button>

                {saved && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-pixel text-[0.45rem] text-pixel-green"
                  >
                    ✓ GAME SAVED! Message received.
                  </motion.p>
                )}
              </form>
            </PixelBox>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
