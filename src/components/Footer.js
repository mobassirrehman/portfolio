"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "2rem 0",
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "center",
          }}
          className="md:flex-row md:justify-between md:text-left"
        >
          <div>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.875rem",
              }}
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                justifyContent: "center",
              }}
              className="md:justify-start"
            >
              Built with
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#ef4444"
                stroke="#ef4444"
                strokeWidth="2"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              using Next.js & Tailwind
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <nav
              style={{
                display: "flex",
                gap: "1.5rem",
                fontSize: "0.875rem",
              }}
              className="hidden md:flex"
            >
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#10b981")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--color-text-muted)")
                  }
                >
                  {item}
                </a>
              ))}
            </nav>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.625rem",
                borderRadius: "10px",
                background: "rgba(16, 185, 129, 0.1)",
                border: "none",
                color: "#10b981",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              aria-label="Scroll to top"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" x2="12" y1="19" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
