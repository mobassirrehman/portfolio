"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden bg-white dark:bg-[#080808]"
    >
      {/* Background Text - Metallic Ghost */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
        <span className="text-[20vw] leading-none text-outline opacity-40 dark:opacity-20">
          HELLO
        </span>
      </div>

      <div className="section-container w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-500 dark:text-zinc-400 mb-4 tracking-wide uppercase">
              Mern Stack Developer
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-[0.9]">
              {personalInfo.firstName} <br />
              {/* THE LIQUID TITANIUM EFFECT */}
              <span className="text-titanium">{personalInfo.lastName}</span>
            </h1>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {personalInfo.tagline}. Focused on building clean, high-performance
            web applications.
          </p>

          {/* Buttons (Uses titanium style from globals) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText size={18} /> Resume
            </a>
            <a href="#projects" className="btn-secondary">
              Projects <ArrowRight size={18} />
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            {[
              { icon: Github, url: socialLinks.github },
              { icon: Linkedin, url: socialLinks.linkedin },
              { icon: Twitter, url: socialLinks.twitter },
              { icon: Facebook, url: socialLinks.facebook },
            ].map(
              (item, i) =>
                item.url && (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <item.icon size={22} />
                  </a>
                )
            )}
          </div>
        </motion.div>

        {/* Image Section - The "Hypelron" Metal Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[500px] group">
            {/* 1. Metallic Gradient Border (The key "Titanium" feature) */}
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-zinc-300 via-white to-zinc-400 dark:from-zinc-700 dark:via-zinc-500 dark:to-zinc-800 opacity-80 blur-sm group-hover:opacity-100 transition-opacity duration-700" />

            {/* 2. Image Container */}
            <div className="relative w-full h-full rounded-[2rem] bg-zinc-100 dark:bg-[#121212] overflow-hidden border border-white/50 dark:border-white/10 shadow-2xl">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority
                unoptimized
              />

              {/* 3. Subtle Glass Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
