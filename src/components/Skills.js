"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "@/data/portfolioData";
import {
  Code2,
  Terminal,
  Database,
  Cpu,
  Layout,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  Wind,
  Layers,
  Box,
  Triangle,
  Hexagon,
  Command,
  Cloud,
} from "lucide-react";

// 1. Icon Mapping - Matching logos with geometric shapes
const getIcon = (name) => {
  const n = name.toLowerCase();

  // Frontend
  if (n.includes("react")) return <Code2 className="w-6 h-6" />;
  if (n.includes("next")) return <Triangle className="w-6 h-6 rotate-180" />;
  if (n.includes("tailwind")) return <Wind className="w-6 h-6" />;
  if (n.includes("html") || n.includes("css"))
    return <Globe className="w-6 h-6" />;
  if (n.includes("javascript") || n.includes("js"))
    return <Box className="w-6 h-6" />;

  // Backend
  if (n.includes("node")) return <Hexagon className="w-6 h-6" />;
  if (n.includes("express")) return <Server className="w-6 h-6" />;
  if (n.includes("mongo")) return <Database className="w-6 h-6" />;
  if (n.includes("firebase")) return <Cloud className="w-6 h-6" />;
  if (n.includes("rest")) return <Layout className="w-6 h-6" />;

  // Tools
  if (n.includes("git")) return <GitBranch className="w-6 h-6" />;
  if (n.includes("figma")) return <Layers className="w-6 h-6" />;
  if (n.includes("vercel")) return <Triangle className="w-6 h-6" />;
  if (n.includes("vscode") || n.includes("code"))
    return <Terminal className="w-6 h-6" />;

  // Fallback
  return <Command className="w-6 h-6" />;
};

// 2. Data Chunking (Split into 3 Columns)
const allSkills = [...skills.frontend, ...skills.backend, ...skills.tools];
const col1 = allSkills.filter((_, i) => i % 3 === 0);
const col2 = allSkills.filter((_, i) => i % 3 === 1);
const col3 = allSkills.filter((_, i) => i % 3 === 2);

// 3. The Minimalist Titanium Card
const SkillCard = ({ skill }) => (
  <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 w-full cursor-default">
    {/* Icon Container with Metallic Gradient Background */}
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300 shadow-inner">
      {getIcon(skill.name)}
    </div>

    {/* Text Info */}
    <div className="flex flex-col">
      <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-600 group-hover:to-black dark:group-hover:from-white dark:group-hover:to-zinc-400 transition-all">
        {skill.name}
      </span>
    </div>
  </div>
);

export default function Skills() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Values
  const yNormal = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yInverse = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="py-32 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-900 overflow-hidden relative"
    >
      <div className="section-container">
        {/* Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-zinc-900 dark:text-white">
            Technical <span className="text-titanium">Arsenal</span>
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The precise tools and technologies I leverage to build scalable,
            production-ready applications.
          </p>
        </div>

        {/* --- DESKTOP: 3-COLUMN PARALLAX WATERFALL --- */}
        <div className="hidden md:grid grid-cols-3 gap-6 h-[600px] overflow-hidden mask-gradient-y relative">
          {/* Column 1: Moves UP */}
          <motion.div style={{ y: yNormal }} className="flex flex-col gap-5">
            {[...col1, ...col1].map((skill, i) => (
              <SkillCard key={`c1-${i}`} skill={skill} />
            ))}
          </motion.div>

          {/* Column 2: Moves DOWN (Reverse) */}
          <motion.div
            style={{ y: yInverse }}
            className="flex flex-col gap-5 -mt-24"
          >
            {[...col2, ...col2].map((skill, i) => (
              <SkillCard key={`c2-${i}`} skill={skill} />
            ))}
          </motion.div>

          {/* Column 3: Moves UP */}
          <motion.div style={{ y: yNormal }} className="flex flex-col gap-5">
            {[...col3, ...col3].map((skill, i) => (
              <SkillCard key={`c3-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* --- MOBILE: SIMPLE GRID --- */}
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4">
          {allSkills.map((skill, i) => (
            <SkillCard key={`mob-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Top/Bottom Fade Masks */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-50 dark:from-black to-transparent z-10 pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-50 dark:from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
