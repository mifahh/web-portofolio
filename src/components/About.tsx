import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const statTargets = ['1', '3', '1'];

export default function About() {
  const [stats, setStats] = useState(statTargets.map(() => '0'));

  // Stat counter animation (runs once on mount)
  useEffect(() => {
    statTargets.forEach((target, i) => {
      let current = 0;
      const duration = 1500;
      const step = parseInt(target, 10) / (duration / 16);
      const timer = setInterval(() => {
        current += step;
        if (current >= parseInt(target, 10)) {
          current = parseInt(target, 10);
          clearInterval(timer);
        }
        setStats((prev: string[]) => {
          const next = [...prev];
          next[i] = Math.floor(current).toString();
          return next;
        });
      }, 16);
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="reveal"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Tentang Saya</span>
          <h2 className="section-title">Mengubah ide menjadi<br />pengalaman digital</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text reveal"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              Saya adalah seorang Full-Stack Developer dengan lebih dari 1 tahun pengalaman dalam membangun aplikasi web modern. Saya memiliki passion yang kuat dalam menciptakan solusi teknologi yang elegan dan efisien.
            </p>
            <p>
              Fokus utama saya adalah membangun antarmuka yang intuitif dengan performa tinggi, menggunakan teknologi terkini seperti React, Vue.js, dan Laravel. Saya percaya bahwa kode yang baik adalah kode yang bersih, terstruktur, dan mudah dipelihara.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">{stats[0]}</div>
                <div className="stat-label">Tahun</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats[1]}</div>
                <div className="stat-label">Proyek</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{stats[2]}</div>
                <div className="stat-label">Klien</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-info reveal"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="info-card">
              <div className="info-card-icon">🎨</div>
              <h4>Frontend Development</h4>
              <p>Membangun UI/UX yang menarik dan responsif dengan React, Vue.js, dan modern CSS.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">⚙️</div>
              <h4>Fullstack Development</h4>
              <p>Merancang API dan arsitektur server yang robust menggunakan Laravel, Node.js, dan MySQL.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
