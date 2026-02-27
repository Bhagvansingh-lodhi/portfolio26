import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0f;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 8rem 0;
        }

        .hero-bg-gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255, 200, 100, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 30%, rgba(180, 120, 255, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 80%, rgba(100, 200, 255, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          width: 100%;
          padding: 0 2rem;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 6px 18px;
          margin-bottom: 2rem;
          font-size: 0.78rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
        }

        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f0c060;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 7vw, 6rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 0.4em;
        }

        .hero-name .italic-part {
          font-style: italic;
          color: #f0c060;
        }

        .hero-role {
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          color: rgba(255,255,255,0.35);
          font-weight: 300;
          letter-spacing: 0.01em;
          margin-bottom: 2rem;
        }

        .hero-divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, #f0c060, transparent);
          margin-bottom: 2rem;
        }

        .hero-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          max-width: 480px;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0c060;
          color: #0a0a0f;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 14px 28px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1px solid #f0c060;
        }

        .btn-gold:hover {
          background: #ffd780;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(240, 192, 96, 0.25);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(255,255,255,0.55);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          padding: 14px 28px;
          border-radius: 4px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.25s ease;
        }

        .btn-ghost:hover {
          color: rgba(255,255,255,0.9);
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.2);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.15), transparent);
          animation: scroll-drop 2s ease-in-out infinite;
        }

        @keyframes scroll-drop {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          60% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }

        .hero-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .tech-tag {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 4px 12px;
          border-radius: 3px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
        }

        .arrow-icon {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .btn-gold:hover .arrow-icon { transform: translateX(3px); }

        .corner-decoration {
          position: absolute;
          top: 2.5rem;
          right: 2.5rem;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.1);
          letter-spacing: 0.1em;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-bg-gradient" />
        <div className="hero-grid" />
        <div className="corner-decoration">Portfolio — 2026</div>

        <div className="hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <div className="eyebrow">
                <div className="eyebrow-dot" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-name">
              Bhagvan<br />
              <span className="italic-part">Singh</span> Lodhi
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-role">
              Full Stack MERN Developer
            </motion.p>

            <motion.div variants={fadeUp}>
              <div className="hero-divider" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="hero-tags">
                {['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="hero-desc">
              Building scalable web applications with modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </motion.p>

            <motion.div variants={fadeUp}>
              <div className="hero-cta-group">
                <a href="#projects" className="btn-gold">
                  View Projects <span className="arrow-icon">→</span>
                </a>
               <a 
  href="/Bhagvan_Singh_Lodhi_Resume.pdf" 
  download 
  className="btn-ghost"
>
  Download Resume ↓
</a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
};

export default Hero;