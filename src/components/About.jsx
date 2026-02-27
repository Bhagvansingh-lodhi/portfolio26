import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '5+', label: 'Tech Stacks' },
];

const traits = ['Problem Solver', 'Clean Code Advocate', 'Lifelong Learner', 'Team Player'];

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section {
          background: #0a0a0f;
          padding: 8rem 2rem;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .about-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 90% 20%, rgba(240,192,96,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 10% 80%, rgba(180,120,255,0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 1.2rem;
          font-weight: 500;
        }

        .about-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #f0c060;
        }

        .about-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 5rem;
        }

        .about-title em {
          font-style: italic;
          color: #f0c060;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* Left column */
        .about-text p {
          color: rgba(255,255,255,0.45);
          font-size: 0.975rem;
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 1.25rem;
        }

        .about-text p:first-child {
          color: rgba(255,255,255,0.65);
          font-size: 1.1rem;
          font-weight: 400;
        }

        .about-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, #f0c060, transparent);
          margin: 2rem 0;
        }

        .about-traits {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .trait-chip {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.35);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 5px 14px;
          border-radius: 3px;
          font-weight: 400;
          transition: all 0.2s;
        }

        .trait-chip:hover {
          color: #f0c060;
          border-color: rgba(240,192,96,0.3);
        }

        /* Right column */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          transition: border-color 0.3s ease, background 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #f0c060, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.1);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 900;
          color: #f0c060;
          line-height: 1;
          min-width: 90px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
          letter-spacing: 0.04em;
          line-height: 1.5;
        }

        .stat-label strong {
          display: block;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0;
          margin-bottom: 2px;
        }

        .about-quote {
          background: rgba(240,192,96,0.05);
          border: 1px solid rgba(240,192,96,0.15);
          border-radius: 6px;
          padding: 2rem 2.5rem;
          margin-top: 0.5rem;
        }

        .about-quote p {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin: 0;
        }

        .about-quote span {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-style: normal;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,192,96,0.6);
          margin-top: 1rem;
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-bg" />
        <div className="about-inner">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="about-eyebrow">
              <div className="about-eyebrow-line" />
              Who I Am
            </div>
            <h2 className="about-title">
              The Story<br />
              <em>Behind the Code</em>
            </h2>
          </motion.div>

          <div className="about-grid">
            {/* Left — Text */}
            <motion.div
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeRight}
            >
              <p>
                I'm an Engineering student and passionate MERN Stack Developer
                with a focus on building scalable, performant web applications.
              </p>
              <p>
                My journey in web development started with curiosity and has evolved
                into a deep passion for creating seamless digital experiences. I believe
                in writing clean, maintainable code and following best practices.
              </p>
              <p>
                Currently, I'm expanding my knowledge in cloud architecture and
                exploring new ways to optimize application performance. I'm always
                excited to work on challenging projects that push the boundaries
                of what's possible on the web.
              </p>

              <div className="about-divider" />

              <div className="about-traits">
                {traits.map((t) => (
                  <span key={t} className="trait-chip">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Right — Stats + Quote */}
            <motion.div
              className="about-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeLeft}
            >
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">
                    <strong>{s.label}</strong>
                    Building real-world projects
                  </div>
                </div>
              ))}

              <div className="about-quote">
                <p>
                  "Code is like humor. When you have to explain it,
                  it's bad."
                </p>
                <span>— A principle I live by</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;