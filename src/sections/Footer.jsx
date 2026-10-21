import { mySocials, personalInfo } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 pb-8 text-sm text-neutral-400 c-space mt-20">
      <div className="bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent h-[1px] w-full" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-bold text-white text-base">{personalInfo.displayName}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{personalInfo.headline}</p>
        </div>

        <div className="flex items-center gap-3">
          {mySocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition duration-200"
              aria-label={social.name}
            >
              <img src={social.icon} className="w-4 h-4 object-contain" alt={social.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 border-t border-white/5 pt-4">
        <p>© 2026 {personalInfo.displayName}. All rights reserved.</p>
        <p className="text-[11px] text-neutral-500">
          Portfolio engineered with React, Three.js &amp; Tailwind CSS. Built upon the original 3D portfolio architecture by Ali Sanati under MIT License.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
