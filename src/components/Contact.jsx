import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    {
      icon: <FiMail size={16} />,
      label: 'Email',
      value: 'bhagvansinghhere@example.com',
      href: 'mailto:bhagvansinghhere@example.com',
    },
    {
      icon: <FiGithub size={16} />,
      label: 'GitHub',
      value: 'github.com/bhagvansinghlodhi',
      href: 'https://github.com/Bhagvansingh-lodhi',
    },
    {
      icon: <FiLinkedin size={16} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bhagvansinghlodhi',
      href: 'https://www.linkedin.com/in/bhagvan-singh-lodhi-0ba7a7313/',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section {
          background: #0a0a0f;
          padding: 8rem 2rem;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .contact-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 50% at 10% 30%, rgba(240,192,96,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 45% 55% at 90% 70%, rgba(118,228,247,0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .contact-eyebrow {
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

        .contact-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #f0c060;
        }

        .contact-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 5rem;
        }

        .contact-title em {
          font-style: italic;
          color: #f0c060;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* Left */
        .contact-left {}

        .contact-tagline {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 3rem;
          max-width: 360px;
        }

        .contact-tagline strong {
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }

        .social-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          overflow: hidden;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.5rem;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.2s;
          position: relative;
          overflow: hidden;
        }

        .social-item:last-child { border-bottom: none; }

        .social-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #f0c060;
          transform: scaleY(0);
          transition: transform 0.25s ease;
        }

        .social-item:hover { background: rgba(255,255,255,0.03); }
        .social-item:hover::before { transform: scaleY(1); }

        .social-icon {
          color: rgba(255,255,255,0.25);
          flex-shrink: 0;
          transition: color 0.2s;
        }

        .social-item:hover .social-icon { color: #f0c060; }

        .social-info {}

        .social-label {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 2px;
          font-weight: 500;
        }

        .social-value {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          font-weight: 300;
          transition: color 0.2s;
        }

        .social-item:hover .social-value { color: rgba(255,255,255,0.7); }

        .social-arrow {
          margin-left: auto;
          color: rgba(255,255,255,0.1);
          font-size: 0.8rem;
          transition: color 0.2s, transform 0.2s;
        }

        .social-item:hover .social-arrow {
          color: rgba(255,255,255,0.3);
          transform: translateX(3px);
        }

        /* Right — Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          font-weight: 500;
          transition: color 0.2s;
        }

        .form-field.focused .form-label { color: #f0c060; }

        .form-input,
        .form-textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 5px;
          padding: 0.875rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          outline: none;
          transition: border-color 0.25s, background 0.25s;
          width: 100%;
          box-sizing: border-box;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255,255,255,0.15);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(240,192,96,0.4);
          background: rgba(255,255,255,0.05);
        }

        .form-textarea {
          resize: none;
          min-height: 130px;
          line-height: 1.7;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #f0c060;
          color: #0a0a0f;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 15px 32px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 0.25rem;
          width: 100%;
        }

        .submit-btn:hover {
          background: #ffd780;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(240,192,96,0.2);
        }

        .submit-btn:active { transform: translateY(0); }

        .submit-btn.sent {
          background: rgba(104,211,145,0.15);
          color: #68d391;
          border: 1px solid rgba(104,211,145,0.3);
        }

        .send-icon {
          transition: transform 0.2s;
        }

        .submit-btn:hover .send-icon { transform: translateX(3px) translateY(-2px); }

        /* Divider line */
        .contact-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, #f0c060, transparent);
          margin: 2.5rem 0;
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-bg" />
        <div className="contact-inner">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="contact-eyebrow">
              <div className="contact-eyebrow-line" />
              Let's Talk
            </div>
            <h2 className="contact-title">
              Get In<br />
              <em>Touch</em>
            </h2>
          </motion.div>

          <div className="contact-grid">

            {/* Left */}
            <motion.div
              className="contact-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="contact-tagline">
                I'm always open to <strong>new opportunities</strong>, interesting projects,
                or just having a conversation about technology and ideas.
              </p>

              <div className="social-list">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="social-icon">{s.icon}</span>
                    <div className="social-info">
                      <div className="social-label">{s.label}</div>
                      <div className="social-value">{s.value}</div>
                    </div>
                    <span className="social-arrow">→</span>
                  </a>
                ))}
              </div>

              <div className="contact-divider" />
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                {['name', 'email'].map((field) => (
                  <div
                    key={field}
                    className={`form-field ${focused === field ? 'focused' : ''}`}
                  >
                    <label className="form-label" htmlFor={field}>
                      {field === 'name' ? 'Your Name' : 'Email Address'}
                    </label>
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      placeholder={field === 'name' ? 'Bhagvan Singh Lodhi' : 'you@example.com'}
                      required
                      className="form-input"
                    />
                  </div>
                ))}

                <div className={`form-field ${focused === 'message' ? 'focused' : ''}`}>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    className="form-textarea"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className={`submit-btn ${sent ? 'sent' : ''}`}
                >
                  {sent ? (
                    <>Message Sent ✓</>
                  ) : (
                    <>
                      Send Message
                      <FiSend size={14} className="send-icon" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;