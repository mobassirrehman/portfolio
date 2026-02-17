"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/portfolioData";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-[#050505]">
      <div className="section-container">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
          Selected <span className="text-gradient">Works</span>
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* 1. The Showcase Image (Big & Clean) */}
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-teal-500/10 dark:bg-teal-500/5 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-white/10 aspect-[16/10] bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* 2. The Details (Minimalist) */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold transition-transform hover:-translate-y-1"
                  >
                    Visit Site <ArrowUpRight size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
