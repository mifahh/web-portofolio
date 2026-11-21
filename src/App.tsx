import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Active nav-link highlight on scroll (same behaviour as the original script.js)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`) as HTMLAnchorElement | null;
        if (link) {
          if (scrollPos >= top && scrollPos < top + height) {
            link.style.color = 'var(--ink)';
          } else {
            link.style.color = '';
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, []);

  // Reveal: add `active` to each `.reveal` element as it scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
