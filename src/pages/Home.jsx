import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css'

// 🔥 Correct image paths for Vite + GitHub Pages
const photo = import.meta.env.BASE_URL + "photo.jpg";
const githubLogo = import.meta.env.BASE_URL + "github.png";
const linkedinLogo = import.meta.env.BASE_URL + "linkedin.png";
const gmailLogo = import.meta.env.BASE_URL + "gmail.png";
const whatsappLogo = import.meta.env.BASE_URL + "whatsapp.png";
const instagramLogo = import.meta.env.BASE_URL + "insta.png";
const facebookLogo = import.meta.env.BASE_URL + "facebook.png";

export default function Home() {
  const professions = [
    'AI Enthusiast',
    'Machine Learning Engineer',
    'Deep Learning Expert',
    'Computer Vision Researcher',
    'Developer',
  ];

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Mangalmurtiw' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/mangalmurtiwagh/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:mdwagh4@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917709918901' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/ms_web.i/' },
    { img: facebookLogo, title: 'Facebook', link: 'https://www.facebook.com/Mangalmurti Wagh' },
  ];

  return (
    <section className="home-section">
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section */}
      <div className="home-top">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Mangalmurti Wagh"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Mangalmurti Wagh
            </motion.span>
          </h1>

          <p className="typing-effect">
            Python Developer | Java Developer | Frontend Developer | Tech Explorer
          </p>

          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-2))'
                }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Shirpur, Maharashtra, India' },
              { label: '💼 Expertise', value: 'Python, Java, Web Development' },
              { label: '📧 Contact', value: 'mdwagh4@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>

        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)'
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
