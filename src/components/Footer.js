"use client";

import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-zinc-500 text-sm">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-zinc-400 text-sm">Designed & Built with Next.js</p>
      </div>
    </footer>
  );
}
