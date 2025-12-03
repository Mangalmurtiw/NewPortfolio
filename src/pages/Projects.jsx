import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const BASE = import.meta.env.BASE_URL;

const PROJECTS = [
  {
    title: '🩺 Mammogram Malignancy Detector',
    desc: 'Hybrid CNN + YOLOv8 ensemble for full-image breast cancer detection with ROI preprocessing and sliding-window inference.',
    ss: BASE + 'mamo.png',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'YOLOv8'],
    live: '#',
    code: 'https://github.com/kunjdesai/mammo-detector'
  },
  {
    title: '🧠 Mental Health Analyzer',
    desc: 'NLP-based system that analyzes user text to detect anxiety, stress, and depression using sentiment analysis and transformer models.',
    ss: BASE + 'mentalhealth.jpg',
    tech: ['Python', 'Transformers', 'NLTK', 'scikit-learn'],
    live: 'https://mental-health-analyzer.streamlit.app/',
    code: 'https://github.com/kunj2803/Mental-Health-Analyzer'
  },
  {
    title: '🤖 Indian Sign Language Interpreter',
    desc: 'Real-time gesture recognition and translation using Mediapipe + TensorFlow, enabling live sign-to-text interpretation.',
    ss: BASE + 'ISL.png',
    tech: ['Mediapipe', 'TensorFlow', 'React', 'Flask'],
    live: '#',
    code: 'https://github.com/kunjdesai/ISL-Interpreter'
  },
  {
    title: '💼 Portfolio Website',
    desc: 'Modern portfolio built with React + Framer Motion showcasing projects with animations and clean UI.',
    ss: BASE + 'portfolio.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: '#',
    code: 'https://github.com/kunj2803/Kunj-Portfolio'
  },
  {
    title: '💬 DocuChat – Gemini AI Chatbot',
    desc: 'AI-powered document interaction chatbot using Gemini API — understands and answers queries from uploaded PDFs.',
    ss: BASE + 'Docuchat.png',
    tech: ['Gemini API', 'LangChain', 'Python', 'Streamlit'],
    live: 'https://docuchat-chatbot.streamlit.app/',
    code: 'https://github.com/kunj2803/Docuchat-Chatbot'
  },
  {
    title: '📊 ProfileX – Data Profiler',
    desc: 'Smart data profiling tool for CSV datasets with preprocessing, feature summary & visualization.',
    ss: BASE + 'ProfileX.png',
    tech: ['Streamlit', 'Pandas', 'Plotly'],
    live: 'https://profilex.streamlit.app/',
    code: 'https://github.com/kunjdesai/ProfileX'
  },
  {
    title: '🧬 Breast Cancer Prediction',
    desc: 'ML classification pipeline with SVC, RF, and XGBoost using SMOTE for imbalanced data.',
    ss: BASE + 'breastpred.jpg',
    tech: ['scikit-learn', 'XGBoost', 'Pandas'],
    live: '#',
    code: 'https://github.com/kunjdesai/BreastCancerPrediction'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research and AI innovation.
        </p>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
