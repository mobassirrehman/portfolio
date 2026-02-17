"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/data/portfolioData";
import { BookOpen, Code2, Gamepad2, Leaf } from "lucide-react";

const highlights = [
  { icon: BookOpen, label: "Literature" },
  { icon: Code2, label: "Full Stack" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Leaf, label: "Nature" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#080808]">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header - Titanium Style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              About <span className="text-titanium">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800 mx-auto rounded-full" />
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-[#0c0c0c] border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                {/* Icon gets the metallic sheen */}
                <div className="mb-3 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
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
                className="bg-zinc-50 dark:bg-[#0c0c0c] p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800"
              >
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
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
