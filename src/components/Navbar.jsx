import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navItems.map(i => document.getElementById(i.toLowerCase()));
      const scrollPos = window.scrollY + 100;
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.4s ease;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 70px;
        }

        /* Desktop nav */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .navbar-links { display: none; }
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          padding: 8px 16px;
          border-radius: 6px;
          transition: color 0.2s;
        }

        .nav-link:hover { 
          color: rgba(255,255,255,0.95); 
        }

        .nav-link.active { 
          color: #f0c060; 
          font-weight: 600;
        }

        .nav-link-underline {
          position: absolute;
          bottom: 4px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: #f0c060;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.25s ease;
          border-radius: 2px;
        }

        .nav-link:hover .nav-link-underline,
        .nav-link.active .nav-link-underline {
          transform: scaleX(1);
        }

        /* CTA */
        .navbar-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0a0a0f;
          background: #f0c060;
          padding: 8px 20px;
          border-radius: 6px;
          margin-left: 1.5rem;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }

        .navbar-cta:hover {
          background: #ffd780;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(240, 192, 96, 0.3);
        }

        @media (max-width: 768px) {
          .navbar-cta { display: none; }
        }

        /* Mobile button */
        .mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          color: rgba(255,255,255,0.7);
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
          line-height: 0;
        }

        .mobile-toggle:hover {
          color: #f0c060;
          border-color: rgba(240,192,96,0.3);
          background: rgba(240,192,96,0.05);
        }

        @media (max-width: 768px) {
          .mobile-toggle { display: flex; align-items: center; justify-content: center; }
        }

        /* Mobile menu */
        .mobile-menu {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(10,10,15,0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-link {
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color 0.2s;
        }

        .mobile-link:last-of-type { border-bottom: none; }
        
        .mobile-link:hover, .mobile-link.active { 
          color: #f0c060; 
        }

        .mobile-link-arrow {
          font-size: 0.9rem;
          opacity: 0.3;
          transition: opacity 0.2s, transform 0.2s;
        }

        .mobile-link:hover .mobile-link-arrow {
          opacity: 1;
          transform: translateX(5px);
        }

        .mobile-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          color: #0a0a0f;
          background: #f0c060;
          padding: 14px;
          border-radius: 6px;
          margin-top: 1rem;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .mobile-cta:hover { 
          background: #ffd780;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(240, 192, 96, 0.3);
        }
      `}</style>

      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner">

          {/* Desktop links */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${active === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
                <span className="nav-link-underline" />
              </a>
            ))}
            <a href="#contact" className="navbar-cta">Hire Me →</a>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`mobile-link ${active === item.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="mobile-link-arrow">→</span>
                </a>
              ))}
              <a href="#contact" className="mobile-cta" onClick={() => setIsOpen(false)}>
                Hire Me →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;