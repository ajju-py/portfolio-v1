import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 60 });
  const springY = useSpring(y, { damping: 15, stiffness: 60 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 24);
    y.set(e.clientY + 24);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Practical Engineering Work
        </div>
        <h2 className="text-heading">Featured Technical Projects</h2>
        <p className="subtext mt-2 max-w-2xl">
          Curated infrastructure and systems engineering labs demonstrating practical Linux administration, container deployment, and cloud automation.
        </p>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent mt-6 h-[1px] w-full" />

      <div className="space-y-1">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>

      {preview && (
        <motion.div
          className="fixed top-0 left-0 z-40 hidden md:block pointer-events-none rounded-xl overflow-hidden border border-white/20 shadow-2xl w-80 h-48 bg-black/60"
          style={{ x: springX, y: springY }}
        >
          <img
            className="object-cover w-full h-full"
            src={preview}
            alt="Project Preview"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
