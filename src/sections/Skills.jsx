import { useState } from "react";
import { motion } from "motion/react";
import { skillCategories } from "../data/skills";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const displayedCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section className="c-space section-spacing relative" id="skills">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Core Competencies & Stack
          </div>
          <h2 className="text-heading">Technical Skills & Tooling</h2>
          <p className="subtext mt-2 max-w-2xl">
            Structured into practical domains: Linux system administration, container architectures, cloud infrastructure, automation scripting, and defensive network security.
          </p>
        </div>
      </div>

      {/* Domain Navigation Pills */}
      <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl bg-white/5 border border-white/10 w-fit">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition cursor-pointer ${
            activeTab === "all"
              ? "bg-white/15 text-white shadow-sm"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition cursor-pointer ${
              activeTab === cat.id
                ? "bg-white/15 text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayedCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-storm/40 to-midnight/80 hover:border-white/20 transition duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  {category.title}
                </h3>
                <span className="text-xs text-neutral-500 font-mono">
                  {category.skills.length} skills
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Skills list with accurate proficiency levels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition text-xs"
                  >
                    <span className="font-medium text-neutral-200">
                      {skill.name}
                    </span>
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-md text-[10px] font-medium border shrink-0 ${
                        skill.level.includes("Certified")
                          ? "bg-red-500/10 text-red-300 border-red-500/30"
                          : skill.level === "Proficient"
                          ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                          : skill.level === "Hands-on"
                          ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                          : "bg-white/5 text-neutral-400 border-white/10"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
