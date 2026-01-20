"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolioData";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
            Projects
          </span>
          <h2
            style={{
              position: "relative",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            A selection of projects showcasing my skills
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

        {/* Projects List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card"
              style={{ padding: "2rem", overflow: "hidden" }}
            >
              <div
                style={{
                  display: "grid",
                  gap: "2rem",
                  gridTemplateColumns: "1fr",
                }}
                className="lg:grid-cols-2"
              >
                {/* Left: Image */}
                <div
                  style={{
                    position: "relative",
                    height: "300px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: "var(--color-bg-tertiary)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>

                {/* Right: Details */}
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.fullDescription}
                  </p>

                  {/* Tech Stack */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Tech Stack
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: "0.375rem 0.875rem",
                            borderRadius: "20px",
                            background: "rgba(16, 185, 129, 0.1)",
                            fontSize: "0.8rem",
                            color: "#10b981",
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        padding: "0.625rem 1.25rem",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                      View Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        padding: "0.625rem 1.25rem",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      </svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div style={{ marginTop: "2rem" }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Key Features
                </h4>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "0.75rem",
                  }}
                >
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#10b981",
                          marginTop: "0.5rem",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Improvements */}
              {(project.challenges || project.improvements) && (
                <div
                  style={{
                    marginTop: "2rem",
                    display: "grid",
                    gap: "1.5rem",
                    gridTemplateColumns: "1fr",
                  }}
                  className="lg:grid-cols-2"
                >
                  {project.challenges && (
                    <div>
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Challenges Faced
                      </h4>
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {project.challenges}
                      </p>
                    </div>
                  )}

                  {project.improvements && (
                    <div>
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Future Improvements
                      </h4>
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {project.improvements}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
