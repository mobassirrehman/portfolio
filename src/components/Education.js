"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="section-container max-w-4xl">
        <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>

        <div className="grid gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div className="flex gap-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl h-fit">
                    <GraduationCap
                      size={24}
                      className="text-zinc-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-zinc-500 font-medium">
                      {item.institution}
                    </p>
                  </div>
                </div>
                <span className="px-4 py-1.5 text-sm font-bold bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
                  {item.year}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 pl-[60px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
