"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/data/portfolioData";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      style={{
        padding: "6rem 0",
        background: "var(--color-bg)",
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
            Education
          </span>
          <h2
            style={{
              position: "relative",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            <span className="gradient-text">Education</span> & Learning
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            From humanities to code—my educational journey
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
          style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "0",
              bottom: "0",
              width: "2px",
              background: "linear-gradient(180deg, #10b981, #06b6d4)",
              opacity: 0.3,
            }}
            className="hidden md:block"
          />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                position: "relative",
                marginBottom: index === education.length - 1 ? 0 : "2rem",
                paddingLeft: "0",
              }}
              className="md:pl-16"
            >
              <div
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "1.5rem",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  border: "4px solid var(--color-bg)",
                }}
                className="hidden md:block"
              />

              <motion.div
                whileHover={{ y: -3 }}
                className="glass-card card-hover"
                style={{ padding: "2rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.625rem",
                        borderRadius: "10px",
                        background: "rgba(16, 185, 129, 0.1)",
                      }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "var(--color-text)",
                        }}
                      >
                        {item.degree}
                      </h3>
                      <p
                        style={{
                          color: "#10b981",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <span
                    style={{
                      padding: "0.375rem 0.875rem",
                      borderRadius: "20px",
                      background: "var(--color-bg-tertiary)",
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
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
                    {item.year}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
