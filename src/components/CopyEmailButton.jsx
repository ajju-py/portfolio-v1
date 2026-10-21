import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { personalInfo } from "../constants";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = personalInfo.email;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.button
        onClick={copyToClipboard}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="relative px-5 py-3 text-sm text-center rounded-full font-medium bg-white/10 hover:bg-white/20 border border-white/20 text-white cursor-pointer overflow-hidden transition"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.p
              className="flex items-center justify-center gap-2 text-emerald-400"
              key="copied"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <img src="/assets/copy-done.svg" className="w-4 h-4" alt="Copied" />
              Email Copied to Clipboard!
            </motion.p>
          ) : (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <img src="/assets/copy.svg" className="w-4 h-4" alt="Copy icon" />
              Copy Email Address
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
      <span className="text-xs text-neutral-400 font-mono select-all">
        {email}
      </span>
    </div>
  );
};

export default CopyEmailButton;
