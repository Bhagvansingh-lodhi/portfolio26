import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: '01',
    title: 'FitGenie',
    subtitle: 'AI Fitness & Meal Planner',
    description: 'AI-powered platform generating personalized 7-day workout and meal plans in under 3 seconds. Features structured prompt engineering for clean JSON responses and secure JWT authentication.',
    highlights: [
      'OpenAI API integration for personalized plans',
      'Prompt engineering for structured JSON output',
      'JWT auth with bcrypt password hashing',
      'Protected routing & RESTful APIs',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'JWT', 'bcrypt'],
    github: 'https://github.com/Bhagvansingh-lodhi/fitgenie',
    live: 'https://fitgenie-one.vercel.app',
    accent: '#68d391',
  },
  {
    id: '02',
    title: 'StudyArchitect',
    subtitle: 'AI Learning Generator',
    description: 'Full-stack AI application that converts any topic into structured notes, MCQs, subjective questions, and revision plans using the Gemini API with optimized response formatting.',
    highlights: [
      'Gemini API for dynamic content generation',
      'Generates notes, MCQs & revision plans',
      'JWT-secured authentication system',
      'Optimized API response formatting',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'JWT', 'Express'],
    github: 'https://github.com/Bhagvansingh-lodhi/studyfrontend',
    live: 'https://studyarchitect.vercel.app',
    accent: '#76e4f7',
  },
  {
    id: '03',
    title: 'CodeSensei',
    subtitle: 'AI Code Reviewer',
    description: 'AI-based code review tool that detects bugs, logic errors, and poor coding practices with actionable improvement suggestions. Designed for a fast, no-login developer workflow.',
    highlights: [
      'Detects bugs, logic errors & bad practices',
      'Real-time AI feedback via API',
      'No-login workflow for fast access',
      'Clean UI optimized for productivity',
    ],
    tech: ['React', 'Node.js', 'Express', 'AI API', 'Tailwind CSS'],
    github: 'https://github.com/Bhagvansingh-lodhi/sensie',
    live: 'https://codesenseiai.vercel.app',
    accent: '#f0c060',
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .projects-section {
          background: #0a0a0f;
          padding: 8rem 2rem;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .projects-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 80% 20%, rgba(240,192,96,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 10% 70%, rgba(118,228,247,0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .projects-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .projects-eyebrow {
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

        .projects-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #f0c060;
        }

        .projects-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 5rem;
        }

        .projects-title em {
          font-style: italic;
          color: #f0c060;
        }

        /* Project card */
        .project-card {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s, background 0.3s;
          cursor: default;
        }

        .project-card.hovered {
          background: rgba(255,255,255,0.04);
        }

        /* Left accent column */
        .project-accent-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 2.5rem 0 2.5rem;
          border-right: 1px solid rgba(255,255,255,0.06);
          gap: 1rem;
          position: relative;
        }

        .project-num {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.15);
          writing-mode: vertical-rl;
          letter-spacing: 0.1em;
        }

        .project-accent-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.3s;
          flex-shrink: 0;
        }

        .project-card.hovered .project-accent-dot {
          border-color: var(--accent);
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
        }

        /* Main content */
        .project-body {
          padding: 2.5rem;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .project-title-group {}

        .project-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .project-subtitle {
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          font-weight: 400;
        }

        .project-links {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .proj-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 7px 14px;
          border-radius: 4px;
          transition: all 0.2s;
          font-weight: 500;
        }

        .proj-link:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
        }

        .proj-link.live:hover {
          color: var(--accent);
          border-color: var(--accent-dim);
        }

        .project-desc {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          font-weight: 300;
          margin: 1.25rem 0 1.5rem;
          max-width: 620px;
        }

        .project-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem 1.5rem;
          margin-bottom: 1.75rem;
        }

        @media (max-width: 600px) {
          .project-highlights { grid-template-columns: 1fr; }
          .project-card { grid-template-columns: 50px 1fr; }
          .project-body { padding: 1.5rem; }
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
        }

        .highlight-dash {
          width: 12px;
          height: 1px;
          flex-shrink: 0;
          background: var(--accent);
          opacity: 0.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .tech-chip {
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 4px 10px;
          border-radius: 3px;
          font-weight: 400;
          transition: all 0.2s;
        }

        .project-card.hovered .tech-chip {
          color: rgba(255,255,255,0.4);
          border-color: rgba(255,255,255,0.1);
        }

        /* Bottom strip */
        .projects-footer {
          margin-top: 3.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-text {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .footer-github-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }

        .footer-github-link:hover { color: #f0c060; }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-bg" />
        <div className="projects-inner">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="projects-eyebrow">
              <div className="projects-eyebrow-line" />
              Selected Work
            </div>
            <h2 className="projects-title">
              What I've<br />
              <em>Built</em>
            </h2>
          </motion.div>

          {/* Cards */}
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <div
                className={`project-card ${hovered === project.id ? 'hovered' : ''}`}
                style={{
                  '--accent': project.accent,
                  '--accent-dim': `${project.accent}44`,
                  borderColor: hovered === project.id ? `${project.accent}30` : undefined,
                }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Left column */}
                <div className="project-accent-col">
                  <span className="project-num">{project.id}</span>
                  <div className="project-accent-dot" style={{ '--accent': project.accent }} />
                </div>

                {/* Body */}
                <div className="project-body">
                  <div className="project-header">
                    <div className="project-title-group">
                      <div className="project-name">{project.title}</div>
                      <div className="project-subtitle">{project.subtitle}</div>
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                        <FiGithub size={13} /> Code
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link live" style={{ '--accent': project.accent, '--accent-dim': `${project.accent}44` }}>
                        <FiExternalLink size={13} /> Live
                      </a>
                    </div>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights.map((h, j) => (
                      <div key={j} className="highlight-item">
                        <div className="highlight-dash" />
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Footer */}
          <div className="projects-footer">
            <span className="footer-text">3 projects — more on GitHub</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-github-link">
              <FiGithub size={14} /> View all repositories →
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;