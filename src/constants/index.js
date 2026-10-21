export const personalInfo = {
  fullName: "Ajay Raju Tandale",
  displayName: "Ajay Tandale",
  headline: "Cloud Engineer | Linux | Containers | DevOps",
  heroHeadline: "Building Reliable Infrastructure with Linux, Cloud, and Automation.",
  summary:
    "I am a Computer Science Engineering student with hands-on experience in Linux administration, Red Hat technologies, containerization, cloud infrastructure fundamentals, and automation. My technical interests include Linux system administration, cloud engineering, DevOps practices, container technologies, infrastructure automation, networking, and cybersecurity.",
  interests:
    "I enjoy building practical labs, troubleshooting infrastructure problems, deploying containerized applications, and understanding how production systems operate. My goal is to develop secure, reliable, and scalable infrastructure solutions while continuously improving my practical engineering skills.",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    institution: "Maharashtra Institute of Technology",
    location: "Maharashtra, India",
  },
  location: "Maharashtra, India",
  email: "ajaytandale8983@gmail.com",
  secondaryEmail: "work.ajaytandale@gmail.com",
  github: "https://github.com/ajju-py",
  linkedin: "https://www.linkedin.com/in/ajay-tandale-8030b8231/",
  credly: "https://www.credly.com/users/ajay-tandale",
  resumeUrl: null, // Configurable: specify relative path to PDF when available (e.g. '/assets/Ajay_Tandale_Resume.pdf')
};

export const myProjects = [
  {
    id: 1,
    title: "AWS Cloud Engineering Practice Lab",
    description:
      "A hands-on learning environment for practicing AWS infrastructure concepts, command-line operations, storage, identity and access management, and infrastructure automation using a local AWS-compatible emulator.",
    subDescription: [
      "Configured local AWS-compatible emulators (LocalStack) with Podman/Docker to test S3 bucket policies and IAM roles without incurring cloud costs.",
      "Automated provisioning of simulated cloud resources using Terraform scripts and AWS CLI commands.",
      "Structured reproducible infrastructure blueprints demonstrating infrastructure-as-code principles for student labs.",
      "Implemented security best practices: least-privilege IAM policies, encrypted storage configurations, and credential isolation.",
    ],
    href: "https://github.com/ajju-py",
    repoUrl: "https://github.com/ajju-py",
    liveDemoUrl: null,
    image: "/assets/projects/aws-cloud-lab.jpg",
    tags: [
      { id: 1, name: "AWS CLI", path: "/assets/logos/aws.svg" },
      { id: 2, name: "Terraform", path: "/assets/logos/terraform.svg" },
      { id: 3, name: "Podman", path: "/assets/logos/podman.svg" },
      { id: 4, name: "Linux", path: "/assets/logos/linux.svg" },
    ],
  },
  {
    id: 2,
    title: "Linux Infrastructure Administration Lab",
    description:
      "A practical Linux lab focused on system administration, service management, networking, permissions, logs, troubleshooting, and infrastructure automation.",
    subDescription: [
      "Built and managed Red Hat Enterprise Linux (RHEL 9) server environments with custom systemd service units and target files.",
      "Implemented SELinux policy enforcement, port labeling, and automated troubleshooting using audit2why and journalctl.",
      "Configured storage management with LVM (Logical Volume Manager), volume groups, logical volumes, and XFS file systems.",
      "Developed Bash scripts for automated system maintenance, log rotation checks, user auditing, and firewalld rule deployment.",
    ],
    href: "https://github.com/ajju-py/REDHAT-RHCSA-EX200",
    repoUrl: "https://github.com/ajju-py/REDHAT-RHCSA-EX200",
    liveDemoUrl: null,
    image: "/assets/projects/linux-admin-lab.jpg",
    tags: [
      { id: 1, name: "Red Hat RHEL", path: "/assets/logos/redhat.svg" },
      { id: 2, name: "Linux", path: "/assets/logos/linux.svg" },
      { id: 3, name: "Bash", path: "/assets/logos/linux.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 3,
    title: "Containerized Application Deployment & Telemetry",
    description:
      "A containerization and telemetry platform demonstrating multi-tier deployment, image creation, networking, storage volumes, and operational monitoring.",
    subDescription: [
      "Constructed multi-tier container architectures isolating frontend, backend API services, Redis cache, and PostgreSQL database.",
      "Configured rootless container workflows, persistent volume mounts, and custom bridge network definitions.",
      "Integrated Prometheus metrics exporter and container health checks for operational observability.",
      "Documented container security practices: non-root execution, minimal base images, and secret configuration via environment variables.",
    ],
    href: "https://github.com/ajju-py/carbon-intelligence-platform",
    repoUrl: "https://github.com/ajju-py/carbon-intelligence-platform",
    liveDemoUrl: null,
    image: "/assets/projects/container-deploy.jpg",
    tags: [
      { id: 1, name: "Podman / Docker", path: "/assets/logos/podman.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "Kubernetes", path: "/assets/logos/kubernetes.svg" },
      { id: 4, name: "OpenShift", path: "/assets/logos/openshift.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/ajju-py",
    icon: "/assets/socials/github.svg",
    label: "github.com/ajju-py",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-tandale-8030b8231/",
    icon: "/assets/socials/linkedIn.svg",
    label: "Ajay Tandale on LinkedIn",
  },
  {
    name: "Credly",
    href: "https://www.credly.com/users/ajay-tandale",
    icon: "/assets/socials/credly.svg",
    label: "Verified Badges on Credly",
  },
  {
    name: "Email",
    href: "mailto:ajaytandale8983@gmail.com",
    icon: "/assets/socials/email.svg",
    label: "ajaytandale8983@gmail.com",
  },
];

export const timelineJourney = [
  {
    date: "2026",
    title: "Red Hat Certified Developer in Cloud-native Applications",
    job: "EX188 Certification • Red Hat",
    contents: [
      "Earned official Red Hat certification demonstrating hands-on expertise in containerization and Podman.",
      "Tested on managing containerized services, deploying multi-container application stacks, container networking, and custom container images.",
      "Certification validity through August 2029 (Credential ID: ce5b4a3c-3f7e-4494-93aa-a2e4c380456e).",
    ],
  },
  {
    date: "2026",
    title: "Red Hat Certified System Administrator (RHCSA)",
    job: "EX200 Certification • Red Hat",
    contents: [
      "Achieved premier enterprise Linux system administration credential (EX200).",
      "Demonstrated core competencies across Red Hat Enterprise Linux: system configuration, systemd service management, storage administration (LVM), user security, and SELinux enforcement.",
      "Certification validity through August 2029 (Credential ID: 28f19df6-9298-4d3e-9577-1bd36601ead7).",
    ],
  },
  {
    date: "2025 - 2026",
    title: "Red Hat Academy System Administration & OpenShift",
    job: "Curriculum & Practical Labs • Red Hat Academy",
    contents: [
      "Completed Red Hat System Administration I (RH124) and II (RH134) Ver. 9.3 with practical lab examinations.",
      "Completed Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188) and Introduction to Red Hat OpenShift Applications (DO101).",
      "Constructed hands-on labs covering storage volumes, network diagnostics, user access controls, and container deployments.",
    ],
  },
  {
    date: "Current",
    title: "B.Tech in Computer Science and Engineering",
    job: "Student • Maharashtra Institute of Technology",
    contents: [
      "Pursuing Bachelor of Technology in Computer Science and Engineering in Maharashtra, India.",
      "Focusing on Operating Systems, Computer Networks, Distributed Systems, Cloud Infrastructure, and Information Security.",
      "Actively developing reproducible infrastructure labs and contributing to open-source systems practice.",
    ],
  },
];

export const engineeringPrinciples = [
  {
    title: "Infrastructure as Code",
    category: "Automation",
    body: "Declarative, version-controlled infrastructure definitions replace manual error-prone configurations, ensuring reproducible environments.",
  },
  {
    title: "Defense in Depth",
    category: "Security",
    body: "Enforcing least privilege, mandatory access controls via SELinux, firewall rules, and isolated rootless container namespaces.",
  },
  {
    title: "Container Portability",
    category: "Cloud-Native",
    body: "Decoupling workloads through OCI-compliant container standards with Podman and Docker for seamless host and cloud migration.",
  },
  {
    title: "Operational Observability",
    category: "Reliability",
    body: "Proactive log analysis with journalctl, systemd health monitoring, and metrics telemetry to detect issues before failures occur.",
  },
];
