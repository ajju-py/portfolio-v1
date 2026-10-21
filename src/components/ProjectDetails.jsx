import { motion } from "motion/react";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  repoUrl,
  liveDemoUrl,
  closeModal,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const targetRepo = repoUrl || href;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto bg-black/80 backdrop-blur-md"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-2xl border shadow-2xl rounded-2xl bg-[#0a0d1d] border-white/15 my-8 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-4 right-4 bg-black/60 hover:bg-neutral-800 text-white transition duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          <img src="/assets/close.svg" className="w-5 h-5" alt="Close" />
        </button>

        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8 -mt-10 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-white/10 border border-white/10 text-neutral-200"
              >
                {tag.path && (
                  <img src={tag.path} alt="" className="w-3.5 h-3.5 object-contain" />
                )}
                {tag.name}
              </span>
            ))}
          </div>

          <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-white">
            {title}
          </h3>

          <p className="mb-4 text-sm sm:text-base font-normal text-neutral-300 leading-relaxed">
            {description}
          </p>

          <div className="space-y-2.5 mb-6 p-4 rounded-xl bg-white/5 border border-white/5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Technical Implementation Highlights:
            </h4>
            {subDescription &&
              subDescription.map((subDesc, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <span className="text-cyan-400 font-bold mt-0.5">•</span>
                  <span>{subDesc}</span>
                </div>
              ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              {targetRepo && (
                <a
                  href={targetRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-white text-black hover:bg-neutral-200 transition duration-200 shadow-md cursor-pointer"
                >
                  <img src="/assets/socials/github.svg" className="w-4 h-4 invert" alt="" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {liveDemoUrl && (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-cyan-600 hover:bg-cyan-500 text-white transition duration-200 shadow-md cursor-pointer"
                >
                  <span>Live Demo</span>
                  <img src="/assets/arrow-up.svg" className="w-3.5 h-3.5" alt="" />
                </a>
              )}
            </div>

            <button
              onClick={closeModal}
              className="text-sm text-neutral-400 hover:text-white transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
