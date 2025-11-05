import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "CampusHub",
      description: "E-learning and social media platform designed to connect students, facilitate learning, and build communities. Features include course management, social feeds, and real-time chat.",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      github: "https://github.com/abel2800/Campus-Hub",
      live: "https://github.com/abel2800/Campus-Hub",
      stars: 124,
      gradient: "from-neon-purple to-pink-500",
      image: "/assets/campushub.png"
    },
    {
      title: "Ethiopian Global Logistics",
      description: "Complete Ethiopian Global Logistics System - Full-stack logistics tracking and order management platform with real-time updates and analytics.",
      tags: ["JavaScript", "Full-Stack", "Logistics", "Tracking"],
      github: "https://github.com/abel2800/Ethiopian-global-logistics",
      live: "https://github.com/abel2800/Ethiopian-global-logistics",
      stars: 89,
      gradient: "from-neon-cyan to-blue-500",
      image: "/assets/logistics.png"
    },
    {
      title: "Bible Pulse - Amharic Bible",
      description: "Beautiful cross-platform Bible study app built with Flutter featuring multiple translations (KJV, ASV, Amharic), daily devotionals, reading plans, bookmarks, notes, and hymns library.",
      tags: ["Flutter", "Dart", "Mobile", "Cross-Platform"],
      github: "https://github.com/abel2800/Bible-Pulse-Amharic-Bible-",
      live: "https://github.com/abel2800/Bible-Pulse-Amharic-Bible-",
      stars: 156,
      gradient: "from-neon-cyan to-green-500",
      image: "/assets/bible.png"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="group relative"
            >
              <div className="glass-dark rounded-2xl overflow-hidden hover:neon-glow-purple transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient} p-[2px]">
                  <div className="w-full h-full bg-dark-card flex items-center justify-center">
                    {/* Placeholder - Replace with actual image */}
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
                      <div className="text-center p-6">
                        <div className="text-6xl mb-4">🚀</div>
                        <p className="text-white/60 text-sm">Project Preview</p>
                      </div>
                    </div>
                    {/* Uncomment when images are added */}
                    {/* <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    /> */}
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-neon-purple flex items-center justify-center cursor-hover neon-glow-purple"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-neon-cyan flex items-center justify-center cursor-hover neon-glow-cyan"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-orbitron font-bold text-glow-cyan group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <span className="font-semibold">{project.stars}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/30 rounded-full text-neon-cyan font-rajdhani"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 border-4 border-neon-cyan rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 90],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abel2800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass border-2 border-neon-purple rounded-lg font-rajdhani font-semibold text-lg cursor-hover hover:neon-glow-purple hover:scale-105 transition-all duration-300"
          >
            <FaGithub className="text-2xl" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

