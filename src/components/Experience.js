"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="section-container max-w-4xl">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800"
            >
              {/* Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-zinc-900 dark:border-zinc-100" />

              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="px-3 py-1 text-xs font-bold bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
                  {item.period}
                </span>
              </div>

              <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <Briefcase size={16} /> {item.company}
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
                    {ach}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
