import { motion } from 'framer-motion';

const groups = [
  {
    icon: '🖥️',
    title: 'Frontend',
    desc: 'Antarmuka modern & responsif',
    tags: ['HTML5', 'CSS3 / Sass', 'JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    icon: '🔧',
    title: 'Fullstack',
    desc: 'Arsitektur server & API',
    tags: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'REST API'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="reveal"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Keahlian</span>
          <h2 className="section-title">Tech stack yang saya gunakan</h2>
          <p className="section-desc">
            Teknologi dan tools yang saya kuasai untuk membangun produk digital berkualitas tinggi.
          </p>
        </motion.div>

        <div className="skills-grid">
          {groups.map((group) => (
            <motion.div
              className="skill-group reveal"
              key={group.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="skill-group-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
