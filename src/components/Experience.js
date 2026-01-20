"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolioData";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 0",
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
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "1px rgba(16, 185, 129, 0.08)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Experience
          </span>
          <h2
            style={{
              position: "relative",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Professional <span className="gradient-text">Experience</span>
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

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card"
              style={{ padding: "2rem" }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #10b981, #06b6d4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "#10b981", fontWeight: 500 }}>
                      {item.company}
                    </p>
                  </div>
                </div>

                <span
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    background: "var(--color-bg-tertiary)",
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  {item.period}
                </span>
              </div>

              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                {item.description}
              </p>

              <div>
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: "1rem",
                  }}
                >
                  Key Achievements:
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {item.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
