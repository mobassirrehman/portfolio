"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutMe } from "@/data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const highlights = [
  { icon: "📚", label: "Literature Background" },
  { icon: "💻", label: "MERN Developer" },
  { icon: "🎮", label: "Gaming Enthusiast" },
  { icon: "🌿", label: "Nature Lover" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "6rem 0",
        position: "relative",
        background: "var(--color-bg-secondary)",
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "1px rgba(16, 185, 129, 0.08)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            About
          </span>
          <h2
            style={{
              position: "relative",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, #10b981, #06b6d4)",
              borderRadius: "2px",
              margin: "0 auto",
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
            maxWidth: "700px",
            margin: "0 auto 3rem",
          }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card"
              style={{
                padding: "1.25rem",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <span
                style={{
                  fontSize: "1.75rem",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {item.icon}
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gap: "1.5rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[
            { title: "Introduction", content: aboutMe.intro },
            { title: "My Programming Journey", content: aboutMe.journey },
            { title: "What I Enjoy Building", content: aboutMe.workStyle },
            { title: "Beyond Code", content: aboutMe.hobbies },
          ].map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="glass-card card-hover"
              style={{ padding: "2rem" }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  color: "#10b981",
                }}
              >
                {section.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {section.content}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            style={{
              textAlign: "center",
              padding: "2rem",
              borderLeft: "4px solid #10b981",
              background: "rgba(16, 185, 129, 0.05)",
              borderRadius: "0 16px 16px 0",
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                fontStyle: "italic",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
              }}
            >
              &ldquo;{aboutMe.philosophy}&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
