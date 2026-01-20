"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetailClient({ project }) {
  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}
          >
            Project Not Found
          </h1>
          <Link href="/#projects" style={{ color: "#10b981" }}>
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          background: "var(--color-bg)",
        }}
      >
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                marginBottom: "2rem",
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="19" x2="5" y1="12" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: "2rem" }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              {project.name}
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-text-secondary)",
                maxWidth: "800px",
                lineHeight: 1.7,
              }}
            >
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              position: "relative",
              height: "clamp(250px, 50vw, 500px)",
              borderRadius: "24px",
              overflow: "hidden",
              marginBottom: "3rem",
              background: "var(--color-bg-secondary)",
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="lg:grid-cols-3"
          >
            <div style={{ gridColumn: "span 1" }} className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card"
                style={{ padding: "2rem", marginBottom: "1.5rem" }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "var(--color-text)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Key Features
                </h2>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#10b981",
                          marginTop: "0.5rem",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card"
                style={{ padding: "2rem", marginBottom: "1.5rem" }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "var(--color-text)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" x2="12" y1="9" y2="13" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                  Challenges Faced
                </h2>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {project.challenges}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-card"
                style={{ padding: "2rem" }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "var(--color-text)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                  Future Improvements
                </h2>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {project.improvements}
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card"
                style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    color: "var(--color-text)",
                  }}
                >
                  Tech Stack
                </h3>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        background: "rgba(16, 185, 129, 0.1)",
                        fontSize: "0.85rem",
                        color: "#10b981",
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card"
                style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    color: "var(--color-text)",
                  }}
                >
                  Project Links
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ justifyContent: "center", textDecoration: "none" }}
                  >
                    <svg
                      width="18"
                      height="18"
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
                    style={{ justifyContent: "center", textDecoration: "none" }}
                  >
                    <svg
                      width="18"
                      height="18"
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  padding: "1.5rem",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    color: "var(--color-text)",
                  }}
                >
                  Interested in working together?
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    marginBottom: "1rem",
                  }}
                >
                  Let&apos;s discuss your project!
                </p>
                <Link
                  href="/#contact"
                  style={{
                    display: "inline-block",
                    padding: "0.625rem 1.25rem",
                    borderRadius: "10px",
                    background: "#10b981",
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
