"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, socialLinks } from "@/data/portfolioData";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      ),
      label: "WhatsApp",
      value: personalInfo.whatsapp,
      href: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, "")}`,
    },
  ];

  return (
    <section
      id="contact"
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
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-container"
        style={{ position: "relative", zIndex: 1 }}
      >
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
            Contact
          </span>
          <h2
            style={{
              position: "relative",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Have a project in mind? Let&apos;s talk!
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
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
          className="lg:grid-cols-2"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              Contact Information
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}
            >
              Feel free to reach out through any of these channels. I typically
              respond within 24 hours.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.label === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    method.label === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="glass-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "12px",
                      background: "rgba(16, 185, 129, 0.1)",
                      color: "#10b981",
                    }}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {method.label}
                    </p>
                    <p
                      style={{
                        color: "var(--color-text)",
                        fontWeight: 500,
                      }}
                    >
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  padding: "0.75rem",
                  borderRadius: "12px",
                  background: "rgba(16, 185, 129, 0.1)",
                  color: "#10b981",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    color: "var(--color-text)",
                    fontWeight: 500,
                  }}
                >
                  {personalInfo.location}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              style={{ marginTop: "2rem" }}
            >
              <p
                style={{
                  color: "var(--color-text-muted)",
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                }}
              >
                Connect with me:
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  {
                    url: socialLinks.github,
                    icon: (
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    ),
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
                  },
                ]
                  .filter((s) => s.url)
                  .map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      style={{
                        padding: "0.75rem",
                        borderRadius: "12px",
                        background: "var(--color-bg-secondary)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-secondary)",
                        display: "flex",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        {social.icon}
                      </svg>
                    </motion.a>
                  ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card"
            style={{ padding: "2rem" }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "var(--color-text)",
              }}
            >
              Send a Message
            </h3>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  style={{
                    width: "100%",
                    padding: "0.875rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-secondary)",
                    color: "var(--color-text)",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  style={{
                    width: "100%",
                    padding: "0.875rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-secondary)",
                    color: "var(--color-text)",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{
                    width: "100%",
                    padding: "0.875rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-secondary)",
                    color: "var(--color-text)",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s ease",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="22" x2="11" y1="2" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
