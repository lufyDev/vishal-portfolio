export const personalInfo = {
  name: "Vishal",
  fullName: "Vishal Pundhir",
  title: "Full-Stack Software Engineer",
  tagline: "Crafting digital experiences from 0 → 1",
  description:
    "I'm a Full-Stack Software Engineer who thrives on building products from scratch — from interactive 3D car viewers and AI-powered video pipelines to agentic trip planners. I turn ambitious ideas into clean, performant applications.",
  email: "vishalpundhirofficial@gmail.com",
  phone: "+91 8193809760",
  location: "India",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/lufyDev",
    linkedin: "https://www.linkedin.com/in/vishal-pundhir-31059b197",
    twitter: "https://x.com/VishalP1226",
  },
};

export const aboutParagraphs = [
  "I'm a Full-Stack Software Engineer with a B.E. from BITS Pilani and hands-on experience building production systems at scale. From crafting interactive 3D experiences with Three.js and WebGL to designing event-driven architectures with Kafka and AWS Lambda — I genuinely enjoy every layer of the stack.",
  "Currently at Spyne, I build products that blend AI with web — automated feature videos powered by OpenAI and Google TTS, browser-based 3D car viewers from 360° video, and high-performance client-facing tools. I've optimized data fetching by 300x and re-architected systems to slash CPU usage.",
  "Beyond work, I'm passionate about AI agents (LangGraph, RAG pipelines) and creative tooling. I also have a design background — After Effects, Premiere Pro, Illustrator, and Figma are in my toolkit. I love building things that sit at the intersection of engineering and creativity.",
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "frontend",
    items: ["React", "Next.js", "Three.js", "TypeScript", "JavaScript", "Tailwind CSS", "WebGL", "PlayCanvas"],
  },
  {
    title: "Backend",
    icon: "backend",
    items: ["Node.js", "Express", "Python", "C++", "NestJS"],
  },
  {
    title: "Mobile",
    icon: "mobile",
    items: ["React Native", "Redux"],
  },
  {
    title: "AI & ML",
    icon: "ai",
    items: ["OpenAI", "LangGraph", "Tavily", "ChromaDB", "RAG"],
  },
  {
    title: "Cloud & Infra",
    icon: "devops",
    items: ["AWS", "Lambda", "SQS", "Kafka", "Step Functions", "MongoDB"],
  },
  {
    title: "Creative",
    icon: "creative",
    items: ["After Effects", "Premiere Pro", "Illustrator", "Figma"],
  },
];

export const experiences = [
  {
    company: "Spyne",
    role: "Full-Stack Software Engineer",
    period: "June 2024 — Present",
    current: true,
    highlights: [
      "Built Automated Feature Video product creating car presentation videos from client inputs — designed event-driven system using Kafka, Lambda for async processing with OpenAI GPT for descriptions and Google TTS for voiceovers",
      "Developed 3D Car Viewer using Three.js converting 360° videos into interactive browser 3D experiences, improving sales. Built serverless video-to-3D pipeline using AWS Step Functions and Lambda",
      "Enhanced SmartView product (images, videos, 3D in a single window on client websites). Optimized VIN-based data fetching by 300x (3-4s → 2-10ms) and re-architected DOM observation to reduce CPU usage",
    ],
  },
  {
    company: "ScaleUp",
    role: "Full Stack Development Intern",
    period: "April 2024 — June 2024",
    current: false,
    highlights: [
      "Developed mobile app features for Android/iOS using React Native, Redux, and Node.js",
      "Implemented system design improvements for performance and scalability",
      "Debugged native code and delivered features in an Agile environment",
    ],
  },
];

export const education = [
  {
    institution: "BITS Pilani",
    degree: "Bachelor of Engineering",
    period: "2020 — 2024",
    highlights: [
      "Birla Institute of Technology and Science, Pilani, Rajasthan",
      "Hands-on experience with creative tools — After Effects, Premiere Pro, Illustrator, Figma",
      "Created professional UI designs, logo designs, ad creatives, trailer videos, and product promos",
    ],
  },
];

export const projects = [
  {
    title: "ItineraryAI — Agentic Trip Planner",
    description:
      "AI trip planner using LangGraph with an agentic workflow — LLM accesses destination, accommodation, and transport research tools via Tavily. Features real-time SSE streaming showing live progress at each graph node and a RAG pipeline with ChromaDB to cache destination embeddings, reducing API costs.",
    tech: ["LangGraph", "OpenAI", "Tavily", "ChromaDB", "Python", "SSE"],
    category: "ai",
    github: "#",
    live: "#",
  },
  {
    title: "Urban Update — CMS & News Platform",
    description:
      "Full-stack news platform with role-based CMS supporting admin, editor, and reporter workflows. Features an admin dashboard with analytics, user management, and article assignment with category-based CRUD and editor-only publishing rights.",
    tech: ["Next.js", "Tailwind", "NestJS", "MongoDB"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    title: "3D Car Viewer",
    description:
      "Interactive browser-based 3D car experience converting 360° videos into explorable 3D views using Three.js. Built a serverless video-to-3D pipeline using AWS Step Functions and Lambda to automate processing at scale.",
    tech: ["Three.js", "AWS", "Step Functions", "Lambda", "TypeScript"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    title: "Automated Feature Videos",
    description:
      "AI-powered system that generates car presentation videos from client inputs. Event-driven architecture using Kafka and Lambda for async processing, with OpenAI GPT for feature descriptions and Google TTS for voiceovers. AWS Deadline Cloud as rendering farm.",
    tech: ["Kafka", "Lambda", "OpenAI", "Node.js", "AWS"],
    category: "ai",
    github: "#",
    live: "#",
  },
  {
    title: "SmartView Product",
    description:
      "Embeddable widget displaying images, videos, and 3D assets in a single window on client websites. Optimized VIN-based data fetching by 300x (3-4s to 2-10ms) and re-architected DOM observation to significantly reduce CPU usage.",
    tech: ["React", "TypeScript", "WebGL", "Node.js"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    title: "Design Portfolio",
    description:
      "Creative work spanning professional UI designs, logo designs, ad creatives, trailer videos, and product promos. Built with After Effects, Premiere Pro, Illustrator, and Figma.",
    tech: ["After Effects", "Premiere Pro", "Illustrator", "Figma"],
    category: "creative",
    github: "#",
    live: "#",
  },
];
