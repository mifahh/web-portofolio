import { motion } from 'framer-motion';
import { useState } from 'react';

const contacts = [
  {
    icon: '📧',
    title: 'Email',
    value: 'fahmirizkyanto3@gmail.com',
    href: 'mailto:fahmirizkyanto3@gmail.com',
  },
  {
    icon: '📱',
    title: 'Telepon',
    value: '+62 882 3087 6418',
    href: 'https://wa.me/6288230876418?text=Halo%20saya%20ingin%20bertanya%20tentang%20Anda',
    external: true,
  },
  {
    icon: '📍',
    title: 'Lokasi',
    value: 'Surabaya, Indonesia',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/fahmi-rizkyanto/',
    href: 'https://linkedin.com/in/fahmi-rizkyanto/',
    external: true,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="reveal"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Kontak</span>
        </motion.div>

        <motion.div
          className="contact-wrapper reveal"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="contact-info reveal"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="section-title">Mari berkolaborasi</h2>
            <p className="section-desc">
              Punya proyek menarik? Jangan ragu untuk menghubungi saya.
            </p>
            {contacts.map((c) => (
              <a
                key={c.title}
                href={c.href || '#'}
                className="contact-item"
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
          <motion.div
            className="reveal"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="section-title">Kirim Pesan</h2>
            <p className="section-desc">
              Jika ingin berkoneksi dengan saya, anda bisa menghubungi saya dan saya akan membalasnya dalam 24 jam.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input id="name" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea id="message" rows={5} required />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={sent}
              >
                {sent ? 'Terkirim!' : 'Kirim Pesan'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
