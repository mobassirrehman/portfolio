"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 bg-white dark:bg-[#080808]">
      <div className="section-container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black mb-20 text-center tracking-tight">
          Professional <span className="text-titanium">Journey</span>
        </h2>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative pl-8 md:pl-12 border-l-2 border-zinc-200 dark:border-zinc-800"
            >
              {/* Timeline Dot - Metallic Halo */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-zinc-400 dark:border-zinc-600 group-hover:border-black dark:group-hover:border-white transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="w-fit px-4 py-1 text-xs font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {item.period}
                </span>
              </div>

              <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-6 flex items-center gap-2">
                <Briefcase size={18} /> {item.company}
              </p>

              <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              <ul className="grid gap-3">
                {item.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
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
