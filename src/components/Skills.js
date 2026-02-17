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
  <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm whitespace-nowrap transition-all hover:border-zinc-400 dark:hover:border-zinc-500 cursor-default group">
    {/* Metallic Dot */}
    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors" />
    <span className="font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white text-sm tracking-wide transition-colors">
      {name}
    </span>
  </div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 overflow-hidden relative bg-zinc-50 dark:bg-black border-y border-zinc-100 dark:border-zinc-900"
    >
      <div className="section-container mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          Technical <span className="text-titanium">Arsenal</span>
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          The technologies I use to build scalable, high-performance
          applications.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full opacity-90">
        <div className="flex w-full overflow-hidden mask-gradient">
          <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused] w-max">
            {row1.map((skill, i) => (
              <SkillTag key={`r1-${i}`} name={skill.name} />
            ))}
          </div>
        </div>
        <div className="flex w-full overflow-hidden mask-gradient">
          <div className="flex gap-4 animate-scroll-right hover:[animation-play-state:paused] w-max">
            {row2.map((skill, i) => (
              <SkillTag key={`r2-${i}`} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
