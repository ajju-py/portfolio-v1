import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { personalInfo } from "../constants";

const HeroText = () => {
  const words = ["Reliable", "Automated", "Cloud-Native", "Scalable", "Hardened"];
  const variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-32 md:text-left rounded-3xl bg-clip-text max-w-4xl">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 w-fit mb-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {personalInfo.headline}
        </motion.div>

        <motion.h1
          className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m <span className="text-white font-extrabold">{personalInfo.displayName}</span>
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-3xl lg:text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Engineering <br className="hidden lg:block" /> Infrastructure that is
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
            className="my-1"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl lg:text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-xl lg:text-2xl font-normal text-neutral-400 mt-2 max-w-xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            {personalInfo.heroHeadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="flex flex-wrap items-center gap-3 mt-8 z-30 relative"
          >
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition duration-200 shadow-md cursor-pointer"
            >
              Explore My Work
            </a>
            <a
              href="#certifications"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-red-600/90 text-white hover:bg-red-500 transition duration-200 border border-red-500/40 shadow-md cursor-pointer"
            >
              View Certifications
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition duration-200 border border-white/15 cursor-pointer flex items-center gap-1.5"
            >
              <img src="/assets/socials/linkedIn.svg" className="w-4 h-4" alt="LinkedIn" />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white transition duration-200 hover:underline cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden px-4">
        <motion.div
          className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mx-auto"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {personalInfo.headline}
        </motion.div>

        <motion.h1
          className="text-3xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m <span className="font-extrabold">{personalInfo.displayName}</span>
        </motion.h1>

        <div>
          <motion.p
            className="text-2xl font-semibold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Engineering
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-sm font-normal text-neutral-400 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            {personalInfo.heroHeadline}
          </motion.p>
        </div>

        {/* Mobile Action CTAs */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
          className="flex flex-col gap-2.5 pt-4 z-30 relative"
        >
          <a
            href="#work"
            className="w-full py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition text-center shadow-md cursor-pointer"
          >
            Explore My Work
          </a>
          <a
            href="#certifications"
            className="w-full py-2.5 rounded-full text-sm font-medium bg-red-600/90 text-white hover:bg-red-500 transition text-center border border-red-500/40 shadow-md cursor-pointer"
          >
            View Certifications
          </a>
          <div className="flex gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-full text-xs font-medium bg-white/10 text-white border border-white/15 text-center flex items-center justify-center gap-1.5"
            >
              <img src="/assets/socials/linkedIn.svg" className="w-3.5 h-3.5" alt="LinkedIn" />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="flex-1 py-2 rounded-full text-xs font-medium bg-white/10 text-white border border-white/15 text-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
