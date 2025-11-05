import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward, FaGraduationCap } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "Graduation Project Excellence",
      description: "Successfully completed CampusHub as capstone project with distinction",
      category: "Academic",
      color: "neon-purple",
      year: "2024"
    },
    {
      icon: <FaTrophy />,
      title: "Academic Excellence",
      description: "Recognized for outstanding performance in Computer Science program",
      category: "Award",
      color: "neon-cyan",
      year: "2023"
    },
    {
      icon: <FaMedal />,
      title: "International Study Experience",
      description: "Completed degree program in China, gaining valuable cross-cultural experience and global perspective",
      category: "Achievement",
      color: "neon-purple",
      year: "2019-2024"
    },
    {
      icon: <FaCertificate />,
      title: "Full Stack Development Mastery",
      description: "Mastered modern web technologies, frameworks, and cloud platforms",
      category: "Technical",
      color: "neon-cyan",
      year: "2024"
    },
    {
      icon: <FaAward />,
      title: "Community Platform Builder",
      description: "Created platforms to connect and empower communities through technology",
      category: "Impact",
      color: "neon-purple",
      year: "2024"
    },
    {
      icon: <FaStar />,
      title: "Open Source Contributor",
      description: "Active contributor to multiple open-source projects and repositories",
      category: "Professional",
      color: "neon-cyan",
      year: "2024"
    }
  ]

  const stats = [
    { label: "Years of Experience", value: "5+", icon: "📚" },
    { label: "Projects Completed", value: "10+", icon: "🚀" },
    { label: "Technologies Mastered", value: "15+", icon: "💻" },
    { label: "GitHub Repositories", value: "3+", icon: "🔧" }
  ]

  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-purple-900/5 to-dark-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-glow-cyan mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones that mark my journey in technology and education
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="glass-dark p-6 rounded-2xl text-center hover:neon-glow-purple transition-all duration-300 cursor-hover group"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: false }}
                className="text-4xl font-orbitron font-bold text-glow-cyan mb-2 group-hover:text-glow-purple transition-all duration-300"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="glass-dark p-6 rounded-2xl h-full hover:neon-glow-cyan transition-all duration-300 cursor-hover">
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs bg-gradient-to-r from-${achievement.color}/20 to-${achievement.color}/40 border border-${achievement.color}/30 rounded-full text-${achievement.color} font-rajdhani`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`text-5xl text-${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-orbitron font-bold group-hover:text-glow-cyan transition-all duration-300 flex-1">
                    {achievement.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Year */}
                <div className="flex items-center justify-between text-sm">
                  <span className={`text-${achievement.color} font-semibold`}>{achievement.year}</span>
                  <div className={`w-8 h-1 bg-gradient-to-r from-${achievement.color} to-transparent`}></div>
                </div>

                {/* Decorative corner */}
                <motion.div
                  className={`absolute bottom-2 right-2 w-3 h-3 bg-${achievement.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  style={{
                    boxShadow: `0 0 20px ${achievement.color === 'neon-cyan' ? '#00E5FF' : '#8B5CF6'}`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <div className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-orbitron font-bold mb-4 text-glow-purple">
              Ready to Create More Success Stories
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate on the next big thing. I'm always looking for new challenges and opportunities to grow.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg font-rajdhani font-semibold text-lg cursor-hover neon-glow-purple hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

