import vpslensImage from "../assets/vpslens.png";
import tracevaultImage from "../assets/tracevault.png";
import mindtestImage from "../assets/mindtest.png";
import seahorseImage from "../assets/seahorse.png";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
}

export const projects: Project[] = [
  {
    name: "MindTest",
    description:
      "MindTest is a decision-assessment platform designed to reveal how people make decisions under ambiguity, pressure, and real-world constraints. It combines problem-based learning, applied cognitive assessment, structured corporate storytelling, and decision governance into a unified methodology that transforms behavioral evidence into structured, auditable, and longitudinal data.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
      "OpenAI API",
      "API Integration",
      "Terraform"
    ],
    image: mindtestImage,
  },
  {
    name: "Seahorse",
    description:
      "Seahorse is a clinical research platform designed to support healthcare workflows, patient data collection, and study operations through a centralized web application. It integrates structured clinical data, customizable intake forms, document processing, and operational tooling to streamline research and patient management workflows.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "API Integration",
      "Terraform",
    ],
    image: seahorseImage,
  },
  {
    name: "Tracevault",
    description:
      "Tracevault is a secure, decentralized platform for managing and auditing digital assets, providing transparent ownership tracking, structured data management, and API-driven access through a modern web interface.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "Docker",
      "PostgreSQL",
      "React",
      "SSR",
    ],
    image: tracevaultImage,
  },
  {
    name: "VPSLens",
    description:
      "VPSLens is an operational dashboard for securely monitoring and managing Linux VPS infrastructure through SSH. It provides centralized visibility into remote servers, Docker containers, runtime information, and operational controls from a single desktop interface.",
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "Docker",
      "SSH",
      "Electron",
    ],
    image: vpslensImage,
  },
];