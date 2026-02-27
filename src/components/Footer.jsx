import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/Bhagvansingh-lodhi', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/bhagvan-singh-lodhi-0ba7a7313/', label: 'LinkedIn' },
    { icon: <FiMail size={18} />, href: 'mailto:bhagvansinghhere@example.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .footer {
          background: #07070b;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-family: 'DM Sans', sans-serif;
          padding: 5rem 2rem 3rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f0c060, transparent);
          opacity: 0.2;
        }

        .footer-inner {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Top section */
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          flex-wrap: wrap;
          gap: 3rem;
        }

        .footer-info {
          max-width: 300px;
        }

        .footer-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .footer-title span {
          color: #f0c060;
          display: block;
          font-size: 1.2rem;
          font-weight: 400;
          margin-top: 0.3rem;
          letter-spacing: 0.02em;
        }

        .footer-description {
          font-size: 1rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 1px solid rgba(240,192,96,0.3);
          color: #f0c060;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-cta:hover {
          background: #f0c060;
          color: #0a0a0f;
          border-color: #f0c060;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(240,192,96,0.2);
        }

        .footer-cta:hover .arrow-icon {
          transform: translateX(5px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        /* Navigation columns */
        .footer-nav-grid {
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }

        .footer-nav-col h4 {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }

        .footer-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-nav-links a {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-block;
          position: relative;
          width: fit-content;
        }

        .footer-nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f0c060;
          transition: width 0.25s ease;
        }

        .footer-nav-links a:hover {
          color: #f0c060;
          transform: translateX(5px);
        }

        .footer-nav-links a:hover::after {
          width: 100%;
        }

        /* Social links */
        .footer-socials {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .footer-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .footer-social-btn:hover {
          color: #f0c060;
          border-color: #f0c060;
          background: rgba(240,192,96,0.1);
          transform: translateY(-3px);
        }

        /* Bottom section */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-copy {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.02em;
          font-weight: 300;
        }

        .footer-copy span {
          color: #f0c060;
          font-weight: 500;
        }

        .footer-made {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.15);
          letter-spacing: 0.02em;
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .heart-icon {
          color: #f0c060;
          animation: heartbeat 1.5s ease infinite;
          display: inline-block;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .back-to-top {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.07);
          padding: 10px 18px;
          border-radius: 8px;
        }

        .back-to-top:hover {
          color: #f0c060;
          border-color: #f0c060;
          transform: translateY(-2px);
        }

        /* Background decoration */
        .footer-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(240,192,96,0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 0%, transparent 40%);
          pointer-events: none;
        }

        .footer-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .footer { padding: 3rem 1.5rem 2rem; }
          .footer-top { flex-direction: column; gap: 2rem; }
          .footer-nav-grid { gap: 2rem; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-bg" />
        <div className="footer-dots" />
        
        <div className="footer-inner">

          {/* Top Section */}
          <div className="footer-top">
            {/* Left - Info */}
            <div className="footer-info">
              <h3 className="footer-title">
                Let's Work<br />Together
                
              </h3>
              <p className="footer-description">
                Available for freelance projects, full-time opportunities, 
                and interesting collaborations.
              </p>
              <a href="#contact" className="footer-cta">
                Start a Conversation 
                <span className="arrow-icon">→</span>
              </a>
            </div>

            {/* Right - Navigation */}
            <div className="footer-nav-grid">
              <div className="footer-nav-col">
                <h4>Navigation</h4>
                <div className="footer-nav-links">
                  {navLinks.map((link) => (
                    <a key={link.label} href={link.href}>{link.label}</a>
                  ))}
                </div>
              </div>

              <div className="footer-nav-col">
                <h4>Connect</h4>
                <div className="footer-socials">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="footer-social-btn"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h4>Contact</h4>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                    bhagvansinghhere@example.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {currentYear} <span>Bhagvan Singh Lodhi</span>. All rights reserved.
            </p>
            
            <p className="footer-made">
              Crafted with <span className="heart-icon">♥</span> by Bhagvan
            </p>

            <button onClick={scrollToTop} className="back-to-top">
              Back to Top <FiArrowUp />
            </button>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;