"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/portfolioData";
import { ArrowUpRight, Github, Code2 } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#050505] overflow-hidden border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="section-container">
        {/* Header */}
        <div className="mb-24 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Selected <span className="text-titanium">Works</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg text-lg leading-relaxed">
            Crafting digital experiences with a focus on performance,
            architecture, and premium design.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* 1. Project Showcase */}
              <div className="flex-1 w-full relative group">
                {/* Metallic Offset Border */}
                <div className="absolute inset-0 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />

                <div className="relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-[16/10] border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* 2. Project Details */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
                    <Code2 size={20} />
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                  {project.name}
                </h3>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - Using the new metallic buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Live <ArrowUpRight size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github size={18} /> Source
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
