"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sun, Moon, Hexagon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo - Pure Monochrome */}
        <Link
          href="#home"
          className="text-2xl font-extrabold tracking-tight flex items-center gap-2 text-zinc-900 dark:text-white group"
        >
          <Hexagon
            className="text-zinc-900 dark:text-white group-hover:fill-zinc-900 dark:group-hover:fill-white transition-colors"
            size={28}
            strokeWidth={2.5}
          />
          Mobassir
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:scale-110 transition-transform cursor-pointer"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="#contact" className="btn-primary text-sm py-2.5 px-6">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-zinc-900 dark:text-white"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-900 dark:text-white p-1"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-zinc-900 dark:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full max-w-xs"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
