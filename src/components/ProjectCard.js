"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white dark:bg-teal-900/20 border border-slate-200 dark:border-teal-800 rounded-3xl overflow-hidden hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 h-full"
    >
      {/* 1. Image Area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-black/40">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* 2. Content Area */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {project.name}
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] uppercase tracking-wider font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full border border-teal-100 dark:border-teal-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 3. Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-teal-600 dark:hover:bg-teal-300 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300"
          >
            View Details
            <ArrowUpRight size={16} />
          </Link>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-white bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 rounded-xl transition-all"
            title="View Source Code"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
