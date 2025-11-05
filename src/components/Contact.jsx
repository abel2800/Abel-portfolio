import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "absir28@gmail.com",
      link: "mailto:absir28@gmail.com",
      color: "neon-purple"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/abel2800",
      link: "https://github.com/abel2800",
      color: "neon-cyan"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Abel Sirak Kebede",
      link: "https://www.linkedin.com/in/abel-sirak/",
      color: "neon-purple"
    }
  ]

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/abel2800", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abel-sirak/", label: "LinkedIn" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/abel_sirak_/", label: "Instagram" },
    { icon: <FaEnvelope />, link: "mailto:absir28@gmail.com", label: "Email" }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-cyan-900/5 to-dark-bg"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-glow-purple mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-orbitron font-bold mb-6 text-glow-cyan">
                Let's Connect!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-dark rounded-lg cursor-hover hover:neon-glow-purple transition-all duration-300 group"
                >
                  <div className={`text-3xl text-${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-rajdhani text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 flex items-center justify-center glass rounded-lg text-2xl text-neon-cyan hover:text-neon-purple hover:neon-glow-cyan transition-all duration-300 cursor-hover"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <a
                href="/assets/abel-cv.pdf"
                download="Abel_Sirak_Kebede_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg font-rajdhani font-semibold text-lg cursor-hover neon-glow-purple hover:scale-105 transition-transform duration-300"
              >
                <span>Download My CV</span>
                <FaPaperPlane />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <form onSubmit={handleSubmit} className="glass-dark p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-glow-cyan">
                Send a Message
              </h3>

              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-3 bg-dark-card border-2 rounded-lg outline-none transition-all duration-300 font-rajdhani ${
                    focusedField === 'name' 
                      ? 'border-neon-cyan neon-glow-cyan' 
                      : 'border-gray-700 hover:border-neon-purple'
                  }`}
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-3 bg-dark-card border-2 rounded-lg outline-none transition-all duration-300 font-rajdhani ${
                    focusedField === 'email' 
                      ? 'border-neon-cyan neon-glow-cyan' 
                      : 'border-gray-700 hover:border-neon-purple'
                  }`}
                  placeholder="Your Email"
                />
              </div>

              {/* Subject Input */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-3 bg-dark-card border-2 rounded-lg outline-none transition-all duration-300 font-rajdhani ${
                    focusedField === 'subject' 
                      ? 'border-neon-cyan neon-glow-cyan' 
                      : 'border-gray-700 hover:border-neon-purple'
                  }`}
                  placeholder="Subject"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 bg-dark-card border-2 rounded-lg outline-none transition-all duration-300 font-rajdhani resize-none ${
                    focusedField === 'message' 
                      ? 'border-neon-cyan neon-glow-cyan' 
                      : 'border-gray-700 hover:border-neon-purple'
                  }`}
                  placeholder="Your Message"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg font-rajdhani font-semibold text-lg cursor-hover neon-glow-purple transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

