import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef} id="journey">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          Education &amp; Credentials Timeline
        </div>
        <h2 className="text-heading">Technical Journey &amp; Milestones</h2>
        <p className="subtext mt-2 max-w-2xl">
          Academic progression in Computer Science Engineering, Red Hat professional examinations, and hands-on systems development.
        </p>
      </div>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight border border-white/20">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
              </div>
              <div className="flex-col hidden gap-1.5 md:flex md:pl-20">
                <span className="text-sm font-mono text-cyan-400 font-semibold">{item.date}</span>
                <h3 className="text-2xl font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.job}</p>
              </div>
            </div>

            <div className="relative w-full pl-16 pr-4 md:pl-4">
              <div className="block mb-4 md:hidden">
                <span className="text-xs font-mono text-cyan-400 font-semibold">{item.date}</span>
                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.job}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                {item.contents.map((content, idx) => (
                  <p className="text-sm font-normal text-neutral-300 leading-relaxed" key={idx}>
                    • {content}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-[5px] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
