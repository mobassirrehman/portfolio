"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/data/portfolioData";
import { BookOpen, Code2, Gamepad2, Leaf } from "lucide-react";

const highlights = [
  { icon: BookOpen, label: "Literature" },
  { icon: Code2, label: "Mern Stack" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Leaf, label: "Nature" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-zinc-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-zinc-200 dark:bg-zinc-800 mx-auto rounded-full" />
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm"
              >
                <item.icon
                  size={32}
                  className="text-zinc-800 dark:text-zinc-200 mb-3"
                />
                <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            {[
              { title: "Introduction", content: aboutMe.intro },
              { title: "My Journey", content: aboutMe.journey },
              { title: "What I Build", content: aboutMe.workStyle },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800"
              >
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
