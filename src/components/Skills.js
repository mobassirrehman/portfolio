"use client";

import { skills } from "@/data/portfolioData";

const row1 = [
  ...skills.frontend,
  ...skills.tools,
  ...skills.frontend,
  ...skills.tools,
];
const row2 = [
  ...skills.backend,
  ...skills.tools,
  ...skills.backend,
  ...skills.tools,
];

const SkillTag = ({ name }) => (
  <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm whitespace-nowrap transition-all hover:border-black dark:hover:border-white cursor-default">
    {/* Monochrome Dot */}
    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
    <span className="font-bold text-zinc-900 dark:text-white text-sm tracking-wide">
      {name}
    </span>
  </div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 overflow-hidden relative bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900"
    >
      <div className="section-container mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-zinc-900 dark:text-white">
          Technical Arsenal
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          The technologies I use to build scalable, high-performance
          applications.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1: Moves Left */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused] w-max">
            {row1.map((skill, i) => (
              <SkillTag key={`r1-${i}`} name={skill.name} />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-4 animate-scroll-right hover:[animation-play-state:paused] w-max">
            {row2.map((skill, i) => (
              <SkillTag key={`r2-${i}`} name={skill.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Edge Fading Masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
