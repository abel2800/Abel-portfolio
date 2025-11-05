import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, 
  FaGitAlt, FaGithub, FaFigma, FaDatabase 
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiExpress, SiPostgresql, SiMongodb, 
  SiVisualstudiocode, SiNextdotjs 
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      color: "neon-cyan",
      skills: [
        { name: "React", level: 90, icon: <FaReact /> },
        { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss /> },
        { name: "HTML5", level: 95, icon: <FaHtml5 /> },
        { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
        { name: "JavaScript", level: 88, icon: <FaJs /> },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs />,
      color: "neon-purple",
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs /> },
        { name: "Express", level: 82, icon: <SiExpress /> },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql /> },
        { name: "MongoDB", level: 78, icon: <SiMongodb /> },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaGitAlt />,
      color: "neon-cyan",
      skills: [
        { name: "Git", level: 92, icon: <FaGitAlt /> },
        { name: "GitHub", level: 90, icon: <FaGithub /> },
        { name: "Figma", level: 85, icon: <FaFigma /> },
        { name: "VS Code", level: 95, icon: <SiVisualstudiocode /> },
      ]
    },
    {
      title: "Soft Skills",
      icon: <FaPython />,
      color: "neon-purple",
      skills: [
        { name: "Fast Learner", level: 95 },
        { name: "Leadership", level: 88 },
        { name: "Cross-Cultural Communication", level: 92 },
        { name: "Problem Solving", level: 90 },
      ]
    }
  ]

  const techIcons = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-cyan-900/5 to-dark-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-glow-purple mb-4">
            Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="glass-dark p-8 rounded-2xl hover:neon-glow-purple transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-4xl text-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-orbitron font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <span className="text-xl text-neon-cyan">{skill.icon}</span>}
                        <span className="font-rajdhani text-lg">{skill.name}</span>
                      </div>
                      <span className="text-neon-purple font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: false }}
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                        style={{
                          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="glass-dark p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-orbitron font-bold text-center mb-8 text-glow-cyan">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col items-center justify-center p-4 glass rounded-lg cursor-hover group relative"
              >
                <div 
                  className="text-4xl mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-400 text-center">{tech.name}</span>
                
                {/* Hover tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neon-purple px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

