import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const badgeRoles = ['Available for freelance', 'Open to collaboration', 'Let\'s build together'];

export default function Hero() {
  const [badgeText, setBadgeText] = useState(badgeRoles[0]);
  const imageRef = useRef<HTMLDivElement>(null);

  // Typing effect for the hero badge
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeRole = () => {
      const current = badgeRoles[roleIndex];
      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setBadgeText(current.substring(0, charIndex));

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % badgeRoles.length;
        speed = 500;
      }

      const timer = setTimeout(typeRole, speed);
      return () => clearTimeout(timer);
    };

    const timer = setTimeout(typeRole, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Subtle parallax on mouse move (desktop only)
  useEffect(() => {
    if (window.matchMedia('(min-width: 901px)').matches && imageRef.current) {
      const onMove = (e: MouseEvent) => {
        const el = imageRef.current!;
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        el.style.transform = `translate(${x}px, ${y}px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg)`;
      };
      document.addEventListener('mousemove', onMove);
      return () => document.removeEventListener('mousemove', onMove);
    }
    return undefined;
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <span className="dot"></span>
            <span id="hero-badge-text">{badgeText}</span>
          </div>
          <h1 className="hero-title">
            Halo, saya<br />
            Fahmi Rizkyanto
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer yang passionate dalam membangun pengalaman digital yang modern, cepat, dan menyenangkan.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="7" height="7" rx={1} />
                <rect x="14" y="3" width="7" height="7" rx={1} />
                <rect x="3" y="14" width="7" height="7" rx={1} />
                <rect x="14" y="14" width="7" height="7" rx={1} />
              </svg>
              Lihat Proyek
            </a>
            <a href="storage/Curriculum Vitae.pdf" className="btn btn-outline">
              Unduh CV Saya
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Hubungi Saya
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-wrapper reveal" ref={imageRef}>
            <img
              src="assets/profile.png"
              alt="Fahmi Rizkyanto — Full-Stack Developer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
