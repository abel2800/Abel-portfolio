import { motion } from 'framer-motion'
import { FaGraduationCap, FaChalkboardTeacher, FaCode, FaRocket } from 'react-icons/fa'

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2024 - Present",
      title: "Future Goal: Master's Degree",
      subtitle: "Computer & Data Science",
      description: "Pursuing advanced studies in Computer Science and Data Science to deepen expertise in AI, machine learning, and data analytics.",
      icon: <FaRocket />,
      color: "neon-cyan"
    },
    {
      year: "2023 - 2024",
      title: "CampusHub Capstone Project",
      subtitle: "Full Stack Development",
      description: "Developed a comprehensive e-learning and social media platform as a graduation project, combining technical skills with real-world problem-solving.",
      icon: <FaCode />,
      color: "neon-purple"
    },
    {
      year: "2019 - 2024",
      title: "Bachelor's in Computer Science",
      subtitle: "Ankang University, China",
      description: "Completed Bachelor's degree in Computer Science with focus on software development, algorithms, system design, and international collaboration.",
      icon: <FaGraduationCap />,
      color: "neon-cyan"
    },
    {
      year: "2019 - 2024",
      title: "Full Stack Development Journey",
      subtitle: "Building Real-World Solutions",
      description: "Developed multiple production-ready applications including CampusHub, Ethiopian Global Logistics system, and Bible Pulse mobile app.",
      icon: <FaCode />,
      color: "neon-purple"
    }
  ]

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-cyan-900/5 to-dark-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(0, 229, 255, 0.1)'} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i,
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
            Journey Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My academic and professional journey through technology and education
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'
              }`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-dark p-6 rounded-2xl hover:neon-glow-purple transition-all duration-300 group cursor-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`text-4xl text-${event.color} flex-shrink-0`}>
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm font-rajdhani text-${event.color} font-semibold mb-2 block`}>
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-orbitron font-bold mb-1 group-hover:text-glow-cyan transition-all duration-300">
                          {event.title}
                        </h3>
                        <h4 className="text-lg text-neon-purple mb-3">{event.subtitle}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <motion.div
                  className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-${event.color} border-4 border-dark-bg z-10`}
                  whileInView={{ 
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      `0 0 0 0 rgba(139, 92, 246, 0.4)`,
                      `0 0 0 20px rgba(139, 92, 246, 0)`,
                      `0 0 0 0 rgba(139, 92, 246, 0)`
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3 
                  }}
                  viewport={{ once: false }}
                  style={{
                    boxShadow: `0 0 20px ${event.color === 'neon-cyan' ? '#00E5FF' : '#8B5CF6'}`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <div className="inline-block glass-dark px-8 py-4 rounded-full">
            <p className="text-neon-cyan font-orbitron font-bold text-lg">
              The Journey Continues...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline

