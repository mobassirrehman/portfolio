"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Layers,
  Code2,
} from "lucide-react";

export default function ProjectDetailClient({ project }) {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-zinc-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/#projects"
            className="text-zinc-500 hover:text-black dark:hover:text-white underline underline-offset-4"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-black">
        <div className="section-container max-w-5xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6">
              {project.name}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl mb-16 group"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              priority
              unoptimized
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Main Content (Left Column) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <Layers className="text-zinc-400" size={24} />
                  Key Features
                </h2>
                <ul className="grid gap-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-[#0c0c0c] border border-zinc-200 dark:border-zinc-800"
                    >
                      <CheckCircle2
                        className="text-zinc-900 dark:text-white shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-zinc-400" size={24} />
                  Challenges Faced
                </h2>
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0c0c0c] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.challenges}
                </div>
              </motion.div>

              {/* Improvements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <Zap className="text-zinc-400" size={24} />
                  Future Improvements
                </h2>
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0c0c0c] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.improvements}
                </div>
              </motion.div>
            </div>

            {/* Sidebar (Right Column) */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                  <Code2 size={16} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  View Live <ExternalLink size={18} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  Source Code <Github size={18} />
                </a>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black overflow-hidden relative"
              >
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2">
                    Build something like this?
                  </h3>
                  <p className="text-zinc-400 dark:text-zinc-600 text-sm mb-6">
                    I&apos;m available for freelance projects and full-time roles.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block w-full py-3 rounded-xl bg-white dark:bg-black text-black dark:text-white font-bold text-center hover:opacity-90 transition-opacity"
                  >
                    Contact Me
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
