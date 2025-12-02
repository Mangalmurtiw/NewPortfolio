import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me Container --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description Paragraphs --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Mangalmurti Wagh</strong> — a passionate{" "}
          <strong>software developer</strong> and{" "}
          <strong>technology enthusiast</strong> who loves turning ideas
          into practical and meaningful digital solutions. I’m deeply
          fascinated by how programming, logic, and modern technologies
          can shape smarter tools for daily life, automation, and
          creative expression.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1rem",
          }}
        >
          Beyond code, I enjoy exploring design, experimenting with motion
          and interaction, and finding ways to blend{" "}
          <strong>artistic creativity</strong> with{" "}
          <strong>technical precision</strong>. My goal is to build
          solutions that not only work smoothly — but also inspire through
          thoughtful execution.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginTop: "1rem",
          }}
        >
          Currently, I am a <strong>2nd-year MCA student</strong> with
          hands-on experience in <strong>Python, Java, C++, Web
          Development (HTML, CSS, JavaScript, PHP)</strong> and database
          systems like <strong>MySQL, DBMS, and MongoDB</strong>. I also
          have foundational knowledge in <strong>Generative AI, Azure AI,
          Cybersecurity, and Prompt Engineering</strong>. I am seeking
          opportunities to apply my skills in real-world{" "}
          <strong>software and AI-driven projects</strong> and contribute
          to impactful solutions.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card: MCA --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Master of Computer Applications (MCA)
                </h4>

                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  <strong>SVKM'S Institute Of Technology</strong> — Dhule,
                  Maharashtra
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  2nd Year (Pursuing)
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>2024 – 2026</p>
              </div>
            </motion.div>

            {/* --- Education Card: BCA --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  <strong>RCPET'S Institute of Management Research And Development</strong> — Shirpur,
                  Maharashtra
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  (2021 - 2024) | GPA: 8.83
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2024</p>
              </div>
            </motion.div>

            {/* --- Education Card: 12th --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  <strong>D.S.Jamadar Jr. science Collage</strong> — Thalner,
                  Maharashtra
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Maharashtra Board | Percentage: 85.83%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2021</p>
              </div>
            </motion.div>

            {/* --- Education Card: 10th --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  <strong> S.G.M. Vidyalaya</strong> — Thalner,
                  Maharashtra
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Maharashtra Board | Percentage: 80.80%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2019</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
