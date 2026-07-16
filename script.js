// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========================================
// Mobile Navigation Toggle
// ========================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Animate hamburger
  const spans = navToggle.querySelectorAll('span');
  navToggle.classList.toggle('open');
  if (navToggle.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// ========================================
// Scroll Reveal Animation
// ========================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========================================
// Smooth Active Nav Link Highlight
// ========================================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
  const scrollPos = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.style.color = 'var(--text-primary)';
      } else {
        link.style.color = '';
      }
    }
  });
};

window.addEventListener('scroll', highlightNav);

// ========================================
// Stat Number Counter Animation
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');
let statAnimated = false;

const animateStats = () => {
  if (statAnimated) return;
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    statAnimated = true;
    statNumbers.forEach(stat => {
      const text = stat.textContent;
      const match = text.match(/(\d+)/);
      if (match) {
        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          stat.textContent = Math.floor(current) + suffix;
        }, 16);
      }
    });
  }
};

window.addEventListener('scroll', animateStats);

// ========================================
// Contact Form (Demo Handling)
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const originalText = btn.innerHTML;

  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    Terkirim!
  `;
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    contactForm.reset();
  }, 2500);
});

// ========================================
// Typing Effect for Hero Badge
// ========================================
const heroBadge = document.querySelector('.hero-badge');
if (heroBadge) {
  const roles = ['Available for freelance', 'Open to collaboration', 'Let\'s build together'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const badgeDot = heroBadge.querySelector('.dot');

  const typeRole = () => {
    const current = roles[roleIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    heroBadge.innerHTML = '';
    heroBadge.appendChild(badgeDot);
    heroBadge.appendChild(document.createTextNode(' ' + current.substring(0, charIndex)));

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 500;
    }

    setTimeout(typeRole, speed);
  };

  setTimeout(typeRole, 3000);
}

// ========================================
// Parallax on Mouse Move (Subtle)
// ========================================
const heroImage = document.querySelector('.hero-image-wrapper');

if (heroImage && window.innerWidth > 900) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroImage.style.transform = `translate(${x}px, ${y}px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg)`;
  });
}

// ========================================
// Skill Tags Hover Glow
// ========================================
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.transform = 'scale(1.05)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = 'scale(1)';
  });
});
