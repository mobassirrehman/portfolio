"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-bg)",
      }}
    >
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-container"
        style={{ position: "relative", zIndex: 10, width: "100%" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ gridColumn: "span 12", order: 2 }}
            className="lg:col-span-7 lg:order-1"
          >
            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  transform: "translateY(-50%)",
                  fontSize: "clamp(4rem, 15vw, 12rem)",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(16, 185, 129, 0.1)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  userSelect: "none",
                  lineHeight: 1,
                }}
              >
                Hello!
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                  position: "relative",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 800,
                  color: "var(--color-text)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                Hello!
              </motion.h1>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontSize: "clamp(1.25rem, 3vw, 2rem)",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "0.5rem",
              }}
            >
              I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontSize: "1.125rem",
                color: "var(--color-text-muted)",
                fontStyle: "italic",
                marginBottom: "1rem",
              }}
            >
              {personalInfo.designation}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
                maxWidth: "540px",
                marginBottom: "1.5rem",
              }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="hero-buttons"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <motion.a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{
                  textDecoration: "none",
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
                style={{
                  textDecoration: "none",
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ display: "flex", gap: "0.75rem" }}
            >
              {[
                {
                  url: socialLinks.github,
                  icon: (
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  ),
                  label: "GitHub",
                },
                {
                  url: socialLinks.linkedin,
                  icon: (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  ),
                  label: "LinkedIn",
                },
                {
                  url: socialLinks.twitter,
                  icon: (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  ),
                  label: "Twitter",
                },
                {
                  url: socialLinks.facebook,
                  icon: (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ),
                  label: "Facebook",
                },
              ]
                .filter((s) => s.url)
                .map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    style={{
                      padding: "0.75rem",
                      borderRadius: "12px",
                      background: "var(--color-bg-secondary)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#10b981";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "#10b981";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "var(--color-bg-secondary)";
                      e.currentTarget.style.color =
                        "var(--color-text-secondary)";
                      e.currentTarget.style.borderColor = "var(--color-border)";
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {social.icon}
                    </svg>
                  </motion.a>
                ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              gridColumn: "span 12",
              order: 1,
              display: "flex",
              justifyContent: "center",
            }}
            className="lg:col-span-5 lg:order-2"
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  background:
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3))",
                  borderRadius: "30px",
                  filter: "blur(40px)",
                  opacity: 0.6,
                }}
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  position: "relative",
                  width: "clamp(280px, 35vw, 380px)",
                  height: "clamp(320px, 40vw, 450px)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "2px solid rgba(16, 185, 129, 0.3)",
                  background: "var(--color-bg-secondary)",
                }}
              >
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                  unoptimized
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="animate-float"
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  right: "-15px",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "12px",
                  background: "rgba(16, 185, 129, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  color: "#10b981",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontWeight: 700 }}>10+</span> Months Experience
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
