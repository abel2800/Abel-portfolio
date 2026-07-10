import { motion } from 'framer-motion'
import PixelBox from './ui/PixelBox'
import {
  FaReact, FaNodeJs, FaJs, FaJava, FaPython,
  FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt,
  FaDocker, FaLinux,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiExpress, SiPostgresql, SiMongodb,
  SiNextdotjs, SiFlutter, SiTypescript, SiSharp, SiDart,
  SiUnity, SiAndroidstudio, SiFirebase, SiVite,
  SiVisualstudiocode, SiSocketdotio, SiPostman,
  SiFramer, SiNpm, SiVercel,
} from 'react-icons/si'

const Skills = () => {
  const inventory = [
    { name: 'React', icon: <FaReact />, rarity: 'legendary', color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript />, rarity: 'legendary', color: '#3178C6' },
    { name: 'Next.js', icon: <SiNextdotjs />, rarity: 'epic', color: '#ffffff' },
    { name: 'Tailwind', icon: <SiTailwindcss />, rarity: 'rare', color: '#06B6D4' },
    { name: 'HTML5', icon: <FaHtml5 />, rarity: 'common', color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, rarity: 'common', color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, rarity: 'legendary', color: '#F7DF1E' },
    { name: 'Node.js', icon: <FaNodeJs />, rarity: 'epic', color: '#339933' },
    { name: 'Express', icon: <SiExpress />, rarity: 'rare', color: '#ffffff' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, rarity: 'epic', color: '#4169E1' },
    { name: 'MongoDB', icon: <SiMongodb />, rarity: 'rare', color: '#47A248' },
    { name: 'Socket.io', icon: <SiSocketdotio />, rarity: 'rare', color: '#010101' },
    { name: 'Flutter', icon: <SiFlutter />, rarity: 'epic', color: '#02569B' },
    { name: 'Dart', icon: <SiDart />, rarity: 'epic', color: '#0175C2' },
    { name: 'Android Studio', icon: <SiAndroidstudio />, rarity: 'epic', color: '#3DDC84' },
    { name: 'Firebase', icon: <SiFirebase />, rarity: 'rare', color: '#FFCA28' },
    { name: 'C#', icon: <SiSharp />, rarity: 'epic', color: '#9B4F96' },
    { name: 'Unity', icon: <SiUnity />, rarity: 'legendary', color: '#ffffff' },
    { name: 'Java', icon: <FaJava />, rarity: 'rare', color: '#007396' },
    { name: 'Python', icon: <FaPython />, rarity: 'rare', color: '#3776AB' },
    { name: 'Vite', icon: <SiVite />, rarity: 'rare', color: '#646CFF' },
    { name: 'Framer Motion', icon: <SiFramer />, rarity: 'rare', color: '#0055FF' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, rarity: 'common', color: '#007ACC' },
    { name: 'Git', icon: <FaGitAlt />, rarity: 'common', color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, rarity: 'common', color: '#ffffff' },
    { name: 'Docker', icon: <FaDocker />, rarity: 'rare', color: '#2496ED' },
    { name: 'Postman', icon: <SiPostman />, rarity: 'common', color: '#FF6C37' },
    { name: 'Figma', icon: <FaFigma />, rarity: 'rare', color: '#F24E1E' },
    { name: 'Linux', icon: <FaLinux />, rarity: 'rare', color: '#FCC624' },
    { name: 'npm', icon: <SiNpm />, rarity: 'common', color: '#CB3837' },
    { name: 'Vercel', icon: <SiVercel />, rarity: 'rare', color: '#ffffff' },
  ]

  const rarityColors = {
    common: 'border-gray-500',
    rare: 'border-pixel-blue',
    epic: 'border-pixel-purple',
    legendary: 'border-pixel-gold',
  }

  const skillTrees = [
    {
      title: '⚔️ FRONTEND ARSENAL',
      color: 'blue',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5 / CSS3 / JS', level: 93 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: '🛡️ BACKEND FORTRESS',
      color: 'green',
      skills: [
        { name: 'Node.js / Express', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB / Socket.io', level: 78 },
      ],
    },
    {
      title: '📱 MOBILE & GAME DEV',
      color: 'purple',
      skills: [
        { name: 'Flutter / Dart', level: 85 },
        { name: 'Android Studio', level: 82 },
        { name: 'Unity / C#', level: 80 },
        { name: 'Firebase', level: 78 },
      ],
    },
    {
      title: '🔧 TOOLKIT',
      color: 'gold',
      skills: [
        { name: 'Git / GitHub', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker / Linux', level: 75 },
        { name: 'Figma / Postman', level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-tag">INVENTORY</span>
          <h2 className="section-title">SKILL TREE</h2>
          <div className="section-divider">━━━━━ ⚔️ ━━━━━</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <PixelBox title="EQUIPPED ITEMS" color="gold">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {inventory.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`inventory-slot cursor-hover border-3 ${rarityColors[item.rarity]}`}
                >
                  <div className="text-3xl mb-1" style={{ color: item.color }}>{item.icon}</div>
                  <p className="font-pixel text-[0.3rem] text-gray-300 leading-tight">{item.name}</p>
                  <p className={`text-[0.55rem] mt-1 ${
                    item.rarity === 'legendary' ? 'text-pixel-gold' :
                    item.rarity === 'epic' ? 'text-pixel-purple' :
                    item.rarity === 'rare' ? 'text-pixel-blue' : 'text-gray-500'
                  }`}>{item.rarity.toUpperCase()}</p>
                </motion.div>
              ))}
            </div>
          </PixelBox>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillTrees.map((tree, ti) => (
            <motion.div
              key={tree.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ti * 0.1 }}
              viewport={{ once: false }}
            >
              <PixelBox title={tree.title} color={tree.color}>
                <div className="space-y-4">
                  {tree.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-lg">{skill.name}</span>
                        <span className="font-pixel text-[0.4rem] text-pixel-green">LV.{skill.level}</span>
                      </div>
                      <div className="stat-bar-pixel">
                        <motion.div
                          className="stat-bar-pixel-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: si * 0.1 }}
                          viewport={{ once: false }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </PixelBox>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
