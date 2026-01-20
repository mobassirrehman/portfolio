"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
      style={{
        backgroundColor: scrolled
          ? theme === "dark"
            ? "rgba(10, 10, 10, 0.95)"
            : "rgba(250, 250, 250, 0.95)"
          : theme === "dark"
          ? "rgba(10, 10, 10, 0.5)"
          : "rgba(250, 250, 250, 0.5)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
      }}
    >
      <div className="section-container">
        <div
          className="grid items-center"
          style={{ gridTemplateColumns: "auto 1fr auto" }}
        >
          <div className="flex justify-start">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                background:
                  "linear-gradient(135deg, #10b981, #14b8a6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
              }}
            >
              Mobassir.
            </motion.a>
          </div>

          <div className="hidden md:flex justify-center items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#10b981")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--color-text-secondary)")
                }
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex justify-end items-center gap-4 ml-auto">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="hidden md:flex"
              style={{
                padding: "0.625rem",
                borderRadius: "50%",
                background: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {theme === "dark" ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </motion.button>

            <div className="flex items-center gap-4 md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                style={{
                  padding: "0.5rem",
                  borderRadius: "50%",
                  background: "var(--color-bg-secondary)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {theme === "dark" ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  padding: "0.5rem",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text)",
                }}
              >
                {!isOpen ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 12h16M4 6h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 right-0 z-40"
            style={{
              background:
                theme === "dark"
                  ? "rgba(10,10,10,0.97)"
                  : "rgba(250,250,250,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    textDecoration: "none",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
