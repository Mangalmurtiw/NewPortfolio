import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

// ✅ Correct Vite + GitHub Pages Image Paths
const photo = "/photo.jpg";
const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const whatsappLogo = "/whatsapp.png";
const instagramLogo = "/insta.png";
const facebookLogo = "/facebook.png";

export default function Home() {
  const professions = [
    "AI Enthusiast",
    "Machine Learning Engineer",
    "Deep Learning Expert",
    "Computer Vision Researcher",
    "Developer",
  ];

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/Mangalmurtiw" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/mangalmurtiwagh/" },
    { img: gmailLogo, title: "Email", link: "mailto:mdwagh4@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+917709918901" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/ms_web.i/" },
    { img: facebookLogo, title: "Facebook", link: "https://www.facebook.com/Mangalmurti Wagh" },
  ];

  return (
    <section className="home-section">
      {/* Photo Section */}
      <div className="home-top">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.img
            src={photo}
            alt="Profile"
            className="profile-photo"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1>Hi, I’m Mangalmurti Wagh</h1>
          <p>Python Developer | Java Developer | Web Developer</p>
        </motion.div>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h2>Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <img src={item.img} alt={item.title} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
