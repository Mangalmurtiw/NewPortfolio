import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// GitHub Pages FIX — public folder path use karo
const BASE = "/NewPortfolio/";

const INTERNSHIPS = [
  {
    title: "Web Development Internship",
    org: "ABC Company",
    date: "2023",
    img: `${BASE}internships/webdev.jpg`,
    link: `${BASE}internships/webdev.jpg`,
  },
  {
    title: "Python Development Internship",
    org: "XYZ Organization",
    date: "2022",
    img: `${BASE}internships/python.jpg`,
    link: `${BASE}internships/python.jpg`,
  },
  {
    title: "Machine Learning Internship",
    org: "Tech Labs",
    date: "2024",
    img: `${BASE}internships/ml.jpg`,
    link: `${BASE}internships/ml.jpg`,
  },
];

function Internship() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="certificates-page">
      <h1 className="page-title">Internship Certificates</h1>

      <div className="cert-grid">
        {INTERNSHIPS.map((c, i) => (
          <motion.div
            key={i}
            className="cert-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(c)}
          >
            <img src={c.img} alt={c.title} className="cert-img" />
            <h2>{c.title}</h2>
            <p>{c.org}</p>
            <span>{c.date}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="popup-content"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <button className="close-btn" onClick={() => setSelected(null)}>
                ✖
              </button>

              <img src={selected.img} alt="certificate" className="popup-img" />

              <a href={selected.link} download className="download-btn">
                Download
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Internship;
