import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaDocker, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiJavascript,
  SiNextdotjs, SiFramer, SiPostman, SiVite, SiFigma, SiVercel, SiGithub, SiVscodium
} from 'react-icons/si';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    tag: '01',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, level: 88, color: '#f7df1e' },
      { name: 'HTML5', icon: <FaHtml5 />, level: 92, color: '#e34f26' },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 88, color: '#264de4' },
      { name: 'React', icon: <FaReact />, level: 90, color: '#61dafb' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 82, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: '#38bdf8' },
      { name: 'Framer Motion', icon: <SiFramer />, level: 78, color: '#ff4d88' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    tag: '02',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#68a063' },
      { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47a248' },
      { name: 'REST APIs', icon: <SiPostman />, level: 90, color: '#ff6c37' },
    ],
  },
  {
    id: 'cs',
    label: 'CS & DSA',
    tag: '03',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 82, color: '#ea2d2e' },
      { name: 'DSA', icon: <FaJava />, level: 75, color: '#f0c060' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    tag: '04',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 88, color: '#f1502f' },
      { name: 'GitHub', icon: <SiGithub />, level: 88, color: '#ffffff' },
      { name: 'VS Code', icon: <SiVscodium />, level: 92, color: '#007acc' },
      { name: 'Postman', icon: <SiPostman />, level: 85, color: '#ff6c37' },
      { name: 'Vite', icon: <SiVite />, level: 80, color: '#646cff' },
      { name: 'Figma', icon: <SiFigma />, level: 70, color: '#f24e1e' },
      { name: 'Vercel', icon: <SiVercel />, level: 82, color: '#ffffff' },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState('frontend');

  const activeCategory = skillCategories.find(c => c.id === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .skills-section {
          background: #0a0a0f;
          padding: 8rem 2rem;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .skills-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 50% at 15% 50%, rgba(240,192,96,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 85% 30%, rgba(100,108,255,0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .skills-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .skills-header {
          margin-bottom: 4rem;
        }

        .skills-eyebrow {
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

        .skills-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #f0c060;
        }

        .skills-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .skills-title em {
          font-style: italic;
          color: #f0c060;
        }

        /* Tab switcher */
        .tab-row {
          display: flex;
          gap: 0;
          margin-bottom: 3.5rem;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 6px;
          overflow: hidden;
          width: fit-content;
        }

        .tab-btn {
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 12px 28px;
          color: rgba(255,255,255,0.3);
          position: relative;
          transition: color 0.25s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tab-btn:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .tab-btn.active {
          color: #f0c060;
          background: rgba(240,192,96,0.06);
        }

        .tab-tag {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.15);
          font-weight: 400;
        }

        .tab-btn.active .tab-tag {
          color: rgba(240,192,96,0.4);
        }

        /* Skills grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
        }

        .skill-row {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 1.25rem 1.5rem;
          transition: border-color 0.25s, background 0.25s;
        }

        .skill-row:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
        }

        .skill-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .skill-name-group {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          font-weight: 400;
        }

        .skill-icon {
          font-size: 1.05rem;
          flex-shrink: 0;
        }

        .skill-pct {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
          font-weight: 500;
          letter-spacing: 0.05em;
          font-variant-numeric: tabular-nums;
        }

        .skill-bar-track {
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 2px;
        }

        /* Bottom strip */
        .skills-strip {
          margin-top: 4rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .strip-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .strip-dots {
          display: flex;
          gap: 6px;
        }

        .strip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        .strip-dot.gold { background: #f0c060; }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="skills-bg" />
        <div className="skills-inner">

          {/* Header */}
          <motion.div
            className="skills-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="skills-eyebrow">
              <div className="skills-eyebrow-line" />
              What I Work With
            </div>
            <h2 className="skills-title">
              Skills &amp;<br />
              <em>Expertise</em>
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="tab-row">
              {skillCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`tab-btn ${active === cat.id ? 'active' : ''}`}
                  onClick={() => setActive(cat.id)}
                >
                  <span className="tab-tag">{cat.tag}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills grid — re-mounts on tab change for animation */}
          <motion.div
            key={active}
            className="skills-grid"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skill-row"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="skill-top">
                  <div className="skill-name-group">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom strip */}
          <div className="skills-strip">
            <span className="strip-text">Continuously learning &amp; expanding</span>
            <div className="strip-dots">
              {skillCategories.map(c => (
                <div
                  key={c.id}
                  className={`strip-dot ${active === c.id ? 'gold' : ''}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;