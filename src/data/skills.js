export const skillCategories = [
  {
    id: "linux-os",
    title: "Linux & Operating Systems",
    icon: "terminal",
    accent: "from-red-500/20 to-orange-500/20",
    badgeColor: "border-red-500/30 text-red-300",
    description: "Hands-on Red Hat Enterprise Linux system administration, storage management, security policies, and service orchestration.",
    skills: [
      { name: "Red Hat Enterprise Linux (RHEL)", level: "Certified (RHCSA)" },
      { name: "Fedora Linux", level: "Hands-on" },
      { name: "Linux CLI Administration", level: "Proficient" },
      { name: "systemd & Service Management", level: "Proficient" },
      { name: "Users, Groups & Permissions", level: "Proficient" },
      { name: "SELinux Policy Fundamentals", level: "Hands-on" },
      { name: "Journalctl & Log Troubleshooting", level: "Hands-on" },
      { name: "LVM & Storage Management", level: "Hands-on" }
    ]
  },
  {
    id: "containers",
    title: "Containers & Cloud-Native",
    icon: "box",
    accent: "from-cyan-500/20 to-blue-500/20",
    badgeColor: "border-cyan-500/30 text-cyan-300",
    description: "Containerized application workflows, image builds, networking, and multi-container orchestration with Podman and Docker.",
    skills: [
      { name: "Podman (Rootless Containers)", level: "Certified (EX188)" },
      { name: "Docker & Container Workflows", level: "Hands-on" },
      { name: "Container Images & Registries", level: "Hands-on" },
      { name: "Container Networking & Ports", level: "Hands-on" },
      { name: "Persistent Storage & Volumes", level: "Hands-on" },
      { name: "Multi-Container Application Stacks", level: "Hands-on" },
      { name: "Red Hat OpenShift Fundamentals", level: "Curriculum Complete" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    icon: "cloud",
    accent: "from-amber-500/20 to-yellow-500/20",
    badgeColor: "border-amber-500/30 text-amber-300",
    description: "Cloud computing fundamentals, AWS CLI operations, local cloud emulators for reproducible infrastructure experimentation.",
    skills: [
      { name: "AWS Core Fundamentals", level: "Foundational" },
      { name: "Amazon S3 & Storage Policies", level: "Hands-on" },
      { name: "AWS IAM (Users, Roles, Policies)", level: "Foundational" },
      { name: "Amazon EC2 Fundamentals", level: "Foundational" },
      { name: "AWS CLI Scripting", level: "Hands-on" },
      { name: "Terraform Infrastructure as Code", level: "Foundational" },
      { name: "Local AWS Service Emulation", level: "Hands-on Lab" }
    ]
  },
  {
    id: "devops-automation",
    title: "DevOps & Automation",
    icon: "git-branch",
    accent: "from-purple-500/20 to-indigo-500/20",
    badgeColor: "border-purple-500/30 text-purple-300",
    description: "Automating repetitive sysadmin tasks, version-controlled infrastructure configurations, and reproducible environments.",
    skills: [
      { name: "Ansible Playbooks & Automation", level: "Foundational" },
      { name: "Bash Shell Scripting", level: "Proficient" },
      { name: "Git & Version Control", level: "Proficient" },
      { name: "GitHub Workflows", level: "Hands-on" },
      { name: "Python for Automation", level: "Hands-on" },
      { name: "CI/CD Pipeline Concepts", level: "Foundational" }
    ]
  },
  {
    id: "networking-security",
    title: "Networking & Security",
    icon: "shield",
    accent: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "border-emerald-500/30 text-emerald-300",
    description: "Network stack troubleshooting, firewall administration, SSH key management, and defensive systems security.",
    skills: [
      { name: "TCP/IP & Subnetting Basics", level: "Foundational" },
      { name: "DNS & Name Resolution", level: "Hands-on" },
      { name: "HTTP / HTTPS Protocol Analysis", level: "Hands-on" },
      { name: "Linux Firewall (firewalld / iptables)", level: "Hands-on" },
      { name: "SSH Hardening & Key Pair Auth", level: "Hands-on" },
      { name: "POSIX Access Control Lists (ACLs)", level: "Hands-on" },
      { name: "Infrastructure Security Troubleshooting", level: "Hands-on" }
    ]
  }
];

export const techStackLogos = [
  { name: "Red Hat", path: "/assets/logos/redhat.svg" },
  { name: "Linux", path: "/assets/logos/linux.svg" },
  { name: "Podman", path: "/assets/logos/podman.svg" },
  { name: "Docker", path: "/assets/logos/docker.svg" },
  { name: "AWS", path: "/assets/logos/aws.svg" },
  { name: "Terraform", path: "/assets/logos/terraform.svg" },
  { name: "Ansible", path: "/assets/logos/ansible.svg" },
  { name: "Python", path: "/assets/logos/python.svg" },
  { name: "Git", path: "/assets/logos/git.svg" },
  { name: "GitHub", path: "/assets/logos/github.svg" },
  { name: "OpenShift", path: "/assets/logos/openshift.svg" },
  { name: "Kubernetes", path: "/assets/logos/kubernetes.svg" }
];
