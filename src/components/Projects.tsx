import { motion } from 'framer-motion';

const projects = [
  {
    image: 'assets/project-rekam-medis.png',
    alt: 'Rekam Medis Digital',
    tags: ['vue.js', 'Node.js', 'Laravel', 'MySQL'],
    title: 'Rekam Medis dan Invoice Digital',
    desc: 'Rekam Medis dan Invoice digital klinik hewan, yang dapat mencatat mulai beberapa pemeriksaan (pemeriksaan disertai upload dan simpan dokumen/foto hasil pemeriksaan), tindakan/layanan, resep serta tagihan. Lalu sistem juga disertai manajemen data pemilik dan pasien, juga manajemen operasional klinik. Web ini responsive baik untuk mobile phone, tablet dan pc.',
    links: [
      { href: 'https://k-oneanimalcare.web.id', label: 'Live Demo', icon: 'external' },
    ],
  },
  {
    image: 'assets/project-sistem-manajemen-data-lppm.png',
    alt: 'Sistem Manajemen Data LPPM',
    tags: ['Laravel', 'MySQL'],
    title: 'Sistem Manajemen Data LPPM',
    desc: 'Website untuk manajemen data Lembaga Penelitian kampus Telkom University Surabaya, data yang dikelola meliputi data Abdimas (Pengabdian Masyarakat), Penelitian, Publikasi dan Kekayaan Intelektual.',
    links: [],
  },
  {
    image: 'assets/project-anime-prayer.png',
    alt: 'Anime Prayer',
    tags: ['React.js', 'Node.js', 'Rust', 'Tauri'],
    title: 'Anime Prayer',
    desc: 'Sebuah Desktop App yang dapat mengingatkan jadwal sholat, terdapat fitur yakni custom image, sound, text pengingat, lokasi serta timezone. Aplikasi juga dapat automatis bekerja saat startup atau komputer baru menyala serta tidak hilang atau tetap bekerja di background jika aplikasi ditutup.',
    links: [
      { href: 'https://github.com/mifahh/AnimePrayer', label: 'Source Code', icon: 'github' },
    ],
  },
  {
    image: 'assets/project-youtube.png',
    alt: 'Youtube TMDB API',
    tags: ['PHP', 'Django', 'Python'],
    title: 'Sistem Rekomendasi video youtube',
    desc: 'Sebuah website yang dapat merekomendasikan sebuah video menggunakan AI, data video yang diambil ialah berasal dari TMDB API atau dataset.',
    links: [
      { href: 'https://github.com/mifahh/youtube', label: 'Source Code', icon: 'github' },
    ],
  },
];

const icons: Record<string, React.ReactNode> = {
  external: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  github: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  ),
};

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="reveal"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Proyek</span>
          <h2 className="section-title">Karya terpilih</h2>
          <p className="section-desc">
            Beberapa proyek terbaik yang telah saya kerjakan.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card reveal"
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="project-thumb">
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} className="project-link" key={link.label} target="_blank" rel="noopener noreferrer">
                        {icons[link.icon]}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
