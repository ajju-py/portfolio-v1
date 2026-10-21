import { useState } from "react";
import { motion } from "motion/react";
import { verifiedCertifications, credlyProfileUrl } from "../data/certifications";

const Certifications = () => {
  const [filter, setFilter] = useState("all");

  const filteredCerts =
    filter === "featured"
      ? verifiedCertifications.filter((c) => c.featured)
      : filter === "redhat"
      ? verifiedCertifications.filter((c) => c.issuer === "Red Hat")
      : verifiedCertifications;

  return (
    <section className="c-space section-spacing relative" id="certifications">
      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-red-500/10 text-red-400 border border-red-500/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Verified Digital Credentials
          </div>
          <h2 className="text-heading">Professional Certifications</h2>
          <p className="subtext mt-2 max-w-2xl">
            Official Red Hat certifications and technical credentials earned through practical examinations and intensive hands-on lab training, verified via Credly.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={credlyProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg hover:shadow-orange-600/20 hover-animation transition duration-200"
          >
            <img src="/assets/socials/credly.svg" className="w-4 h-4" alt="Credly" />
            View All on Credly
            <svg
              className="w-4 h-4 ml-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition cursor-pointer ${
            filter === "all"
              ? "bg-white/15 text-white shadow-sm"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          All Badges ({verifiedCertifications.length})
        </button>
        <button
          onClick={() => setFilter("featured")}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition cursor-pointer ${
            filter === "featured"
              ? "bg-white/15 text-white shadow-sm"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Primary Exams (EX200 / EX188)
        </button>
        <button
          onClick={() => setFilter("redhat")}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition cursor-pointer ${
            filter === "redhat"
              ? "bg-white/15 text-white shadow-sm"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Red Hat ({verifiedCertifications.filter((c) => c.issuer === "Red Hat").length})
        </button>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};

const CertificationCard = ({ cert }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`relative flex flex-col justify-between p-6 rounded-2xl border transition duration-300 ${
        cert.featured
          ? "bg-gradient-to-b from-[#181229] via-[#0e1124] to-[#0a0d1d] border-red-500/40 shadow-xl shadow-red-950/20"
          : "bg-gradient-to-b from-storm/40 to-indigo/40 border-white/10 hover:border-white/20"
      }`}
    >
      {cert.featured && (
        <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/30">
          Official Credential
        </span>
      )}

      <div>
        <div className="flex items-start gap-4 mb-5">
          <div className="relative shrink-0 w-20 h-20 rounded-xl bg-black/40 border border-white/10 p-2 flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img
                src={cert.badgeImage}
                alt={cert.name}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-red-400 font-bold text-xs">{cert.code}</span>
                <span className="text-[10px] text-neutral-400">Verified</span>
              </div>
            )}
          </div>

          <div className="flex-1 pr-6">
            <span className="text-xs font-medium text-red-400 tracking-wider uppercase">
              {cert.issuer} • {cert.code}
            </span>
            <h3 className="text-lg font-semibold text-white leading-snug mt-1 line-clamp-2">
              {cert.name}
            </h3>
          </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {cert.description}
        </p>

        {/* Validity & Dates */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-black/30 border border-white/5 text-xs text-neutral-300 mb-4">
          <div>
            <span className="text-neutral-500 block text-[11px]">Issued</span>
            <span className="font-medium text-neutral-200">{cert.issued}</span>
          </div>
          <div>
            <span className="text-neutral-500 block text-[11px]">Validity</span>
            <span className="font-medium text-neutral-200">
              {cert.expires ? `Expires ${cert.expires}` : "Verified Completion"}
            </span>
          </div>
        </div>

        {/* Skills */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {cert.skills.slice(0, 4).map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-neutral-300"
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 4 && (
              <span className="px-1.5 py-0.5 text-[11px] text-neutral-500">
                +{cert.skills.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Verification CTA */}
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/30 transition duration-200 cursor-pointer"
      >
        <span>Verify Credential</span>
        <svg
          className="w-4 h-4 text-neutral-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </motion.div>
  );
};

export default Certifications;
