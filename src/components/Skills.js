"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolioData";

const categories = [
  { key: "frontend", title: "Frontend", icon: "🎨", color: "#10b981" },
  { key: "backend", title: "Backend", icon: "⚙️", color: "#14b8a6" },
  { key: "tools", title: "Tools", icon: "🛠️", color: "#06b6d4" },
];

function SkillBar({ name, level, delay, isInView }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--color-text)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
          }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: "easeOut" }}
          className="skill-bar-fill"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const additionalSkills = [
    "React Hook Form",
    "TanStack Query",
    "Axios",
    "JWT",
    "Recharts",
    "SweetAlert2",
    "React Router",
    "Context API",
  ];

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "6rem 0",
        background: "var(--color-bg)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

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
            }}
          >
            Skills
          </span>
          <h2
            style={{
              position: "relative",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Technologies and tools I work with
          </p>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, #10b981, #06b6d4)",
              borderRadius: "2px",
              margin: "1rem auto 0",
            }}
          />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass-card card-hover"
              style={{ padding: "2rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.75rem",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: `${category.color}15`,
                  }}
                >
                  {category.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {skills[category.key].map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIndex * 0.15 + index * 0.1}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
              marginBottom: "1.25rem",
            }}
          >
            Also familiar with:
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  background: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  cursor: "default",
                  transition: "all 0.3s ease",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
