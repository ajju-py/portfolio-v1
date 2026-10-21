import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const outerSkills = [
    "linux",
    "redhat",
    "podman",
    "docker",
    "aws",
    "terraform",
  ];

  const innerSkills = [
    "ansible",
    "python",
    "git",
    "github",
    "kubernetes",
    "openshift",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={36} radius={125} duration={35}>
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} name={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={75} reverse speed={1.5} duration={25}>
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} name={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, name }) => (
  <div className="p-1.5 rounded-full bg-midnight/90 border border-white/10 shadow-md backdrop-blur-sm hover:scale-125 duration-200">
    <img src={src} alt={name} className="w-5 h-5 object-contain" />
  </div>
);
