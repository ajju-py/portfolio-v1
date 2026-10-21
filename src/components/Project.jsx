import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  repoUrl,
  liveDemoUrl,
  image,
  tags,
  setPreview,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-8 space-y-6 sm:flex sm:space-y-0 group cursor-pointer transition hover:bg-white/[0.02] px-4 rounded-xl"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsOpen(true)}
      >
        <div className="max-w-2xl">
          <p className="text-2xl font-bold text-white group-hover:text-cyan-300 transition duration-200">
            {title}
          </p>
          <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-neutral-300"
              >
                {tag.path && (
                  <img src={tag.path} alt="" className="w-3.5 h-3.5 object-contain" />
                )}
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition duration-200 cursor-pointer"
          >
            <span>Lab Details</span>
            <img src="/assets/arrow-right.svg" className="w-4 h-4" alt="" />
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent h-[1px] w-full" />

      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          repoUrl={repoUrl}
          liveDemoUrl={liveDemoUrl}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
