"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { projects } from "@/data/portfolioData";
import { ArrowUpRight, Github, Code2, ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-zinc-50 dark:bg-black overflow-hidden border-t border-zinc-200 dark:border-zinc-900"
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
              {/* 1. Project Showcase (Image) */}
              <div className="flex-1 w-full relative group cursor-pointer">
                <Link href={`/projects/${project.id}`}>
                  {/* Metallic Offset Shadow / Border */}
                  <div className="absolute inset-0 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                  {/* Main Image Container */}
                  <div className="relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col">
                    {/* Fake Browser Top Bar (Adds the "Stunning" factor) */}
                    <div className="w-full h-8 bg-zinc-200/50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 gap-1.5 backdrop-blur-sm z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                    </div>

                    {/* Image Wrapper */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0} // Loads the first image instantly
                      />

                      {/* Subtle inner gradient to make the image blend better */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-b-3xl pointer-events-none" />

                      {/* Hover Overlay Text */}
                      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <span className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Case Study
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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

                {/* Title - NOW CLICKABLE */}
                <Link href={`/projects/${project.id}`} className="block w-fit">
                  <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                    {project.name}
                  </h3>
                </Link>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Case Study Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white mb-8 hover:underline underline-offset-4"
                >
                  Read Case Study <ArrowRight size={16} />
                </Link>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
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
