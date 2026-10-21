import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { personalInfo } from "../constants";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-lavender/10 text-lavender border border-lavender/20 mb-3">
          <span className="w-2 h-2 rounded-full bg-lavender" />
          Background & Engineering Focus
        </div>
        <h2 className="text-heading">About Me</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-6">
        {/* Grid 1: Personal Profile */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="/assets/coding-pov.png"
            alt="Engineering Workspace"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-40 mix-blend-luminosity"
          />
          <div className="z-10 p-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {personalInfo.education.degree} • CSE
            </span>
            <p className="headtext font-bold text-2xl text-white mt-1">
              Hi, I&apos;m {personalInfo.displayName}
            </p>
            <p className="subtext text-neutral-300 leading-relaxed text-sm">
              Computer Science Engineering student at {personalInfo.education.institution} with verified Red Hat credentials (RHCSA &amp; EX188). Focused on Linux systems administration, rootless containers with Podman, cloud fundamentals, and resilient automation.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo via-indigo/60 to-transparent" />
        </div>

        {/* Grid 2: Interactive Systems Principles & Cards */}
        <div className="grid-default-color grid-2 overflow-hidden">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-3xl md:text-4xl font-mono font-bold text-white/10 select-none tracking-widest">
              INFRA AS CODE
            </p>
            <Card
              style={{ rotate: "15deg", top: "20%", left: "12%" }}
              text="RHCSA"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "55%", left: "45%" }}
              text="SELinux"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", bottom: "25%", left: "68%" }}
              text="systemd"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "50%", left: "2%" }}
              text="Podman"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "10%", left: "55%" }}
              text="LVM Storage"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "65%", left: "20%" }}
              image="/assets/logos/redhat.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "25%", left: "75%" }}
              image="/assets/logos/linux.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "25%" }}
              image="/assets/logos/podman.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Location Hub with 3D Interactive Globe */}
        <div className="grid-black-color grid-3 relative overflow-hidden">
          <div className="z-10 w-[55%]">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Location &amp; Work
            </span>
            <p className="headtext font-bold text-xl text-white mt-1">Maharashtra, India</p>
            <p className="subtext text-neutral-300 text-sm mt-2 leading-relaxed">
              Available for cloud engineering &amp; DevOps internships, practical infrastructure projects, and remote collaboration worldwide.
            </p>
          </div>
          <figure className="absolute -right-[15%] top-0 md:left-[35%] md:top-[5%] w-[320px] h-[320px]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Direct Collaboration & Email Copy */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full text-center">
            <span className="text-xs font-mono text-white/80 uppercase tracking-wider">
              Get In Touch
            </span>
            <p className="text-center font-bold text-xl text-white">
              Interested in collaborating or discussing infrastructure roles?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Core Orbiting Infrastructure Stack */}
        <div className="grid-default-color grid-5 relative overflow-hidden">
          <div className="z-10 w-[50%]">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Tooling Ecosystem
            </span>
            <p className="headtext font-bold text-xl text-white mt-1">Core Tech Stack</p>
            <p className="subtext text-neutral-300 text-sm mt-2 leading-relaxed">
              Red Hat Enterprise Linux, Podman containers, Docker, AWS CLI, Terraform, Ansible, and Python for reliable systems engineering.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-6 w-full h-full start-[45%] md:scale-110">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
