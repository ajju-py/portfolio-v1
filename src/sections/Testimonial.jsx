import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { engineeringPrinciples } from "../constants";

const PrincipleCard = ({ title, category, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-5 border-white/10 bg-gradient-to-br from-midnight via-storm/40 to-indigo/40 hover:border-cyan-400/40 hover-animation transition duration-300"
      )}
    >
      <div className="flex flex-row items-center justify-between gap-2 mb-3">
        <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
          {category}
        </span>
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>
      <h4 className="text-base font-bold text-white mb-2">{title}</h4>
      <blockquote className="text-xs text-neutral-300 leading-relaxed">
        {body}
      </blockquote>
    </figure>
  );
};

export default function Testimonial() {
  const firstRow = engineeringPrinciples.slice(0, 2);
  const secondRow = engineeringPrinciples.slice(2);

  return (
    <section className="items-start mt-24 md:mt-32 c-space" id="principles">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          Philosophy &amp; Discipline
        </div>
        <h2 className="text-heading">Engineering Principles</h2>
        <p className="subtext mt-2 max-w-2xl">
          Core operational tenets guiding my practical work in Linux administration, container architecture, and cloud automation.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden py-4">
        <Marquee pauseOnHover className="[--duration:25s] mb-4">
          {firstRow.map((principle, idx) => (
            <PrincipleCard key={idx} {...principle} />
          ))}
          {/* duplicate to ensure continuous loop */}
          {firstRow.map((principle, idx) => (
            <PrincipleCard key={`dup-${idx}`} {...principle} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((principle, idx) => (
            <PrincipleCard key={idx} {...principle} />
          ))}
          {/* duplicate to ensure continuous loop */}
          {secondRow.map((principle, idx) => (
            <PrincipleCard key={`dup-${idx}`} {...principle} />
          ))}
        </Marquee>

        <div className="absolute inset-y-0 left-0 w-16 md:w-32 pointer-events-none bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 pointer-events-none bg-gradient-to-l from-primary to-transparent" />
      </div>
    </section>
  );
}
