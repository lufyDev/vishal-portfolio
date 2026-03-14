export const personalInfo = {
  name: "Vishal",
  fullName: "Vishal Pundhir",
  title: "Full-Stack Software Engineer",
  tagline: "Crafting digital experiences from 0 → 1",
  description:
    "I'm a Full-Stack Software Engineer who thrives on building products from scratch — from interactive 3D Gaussian Splat viewers and AI-powered video pipelines to agentic trip planners. I turn ambitious ideas into clean, performant applications.",
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
  "I'm a Full-Stack Software Engineer with a B.E. from BITS Pilani and hands-on experience building production systems at scale. From crafting interactive 3D Gaussian Splat viewers with Three.js and WebGL to designing event-driven microservices with Kafka, SQS, and AWS Lambda — I genuinely enjoy every layer of the stack.",
  "Currently at Spyne (AI-Powered Automotive Solutions), I build products that blend AI with web — automated feature videos with ChatGPT-generated voiceover scripts and After Effects template injection, browser-based 3D car viewers from 360° video, and high-performance embeddable platforms. I've optimized data fetching by 300x and re-architected systems to cut CPU usage.",
  "Beyond work, I'm passionate about AI agents (LangGraph, RAG pipelines) and creative tooling. I also have a design background — After Effects, Premiere Pro, Illustrator, and Figma are in my toolkit. I love building things that sit at the intersection of engineering and creativity.",
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "frontend",
    items: ["React", "Next.js", "Three.js", "JavaScript", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    title: "Backend",
    icon: "backend",
    items: ["Node.js", "Express", "NestJS", "MongoDB", "Python", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    icon: "devops",
    items: ["AWS", "EC2", "Lambda", "Step Functions", "S3", "SQS", "Deadline Cloud", "Nginx"],
  },
  {
    title: "AI & Tools",
    icon: "ai",
    items: ["OpenAI", "LangGraph", "Tavily", "ChromaDB", "Kafka"],
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
    subtitle: "AI-Powered Automotive Solutions",
    role: "Full-Stack Software Engineer",
    period: "June 2024 — Present",
    current: true,
    highlights: [
      "Built Automated Feature Video product creating car videos from client inputs. Architected event-driven microservices using Kafka, SQS, Lambda for async processing across video lifecycle",
      "Developed service injecting car data into After Effects templates. Created extended script (JavaScript + AE scripting) via Windows PowerShell to replace template media with client assets",
      "Integrated ChatGPT for voiceover script generation and Google TTS for audio synthesis. Configured AWS Deadline Cloud as rendering farm for parallel processing, built pipeline from upload to S3 delivery",
      "Led 3D Gaussian Splat Viewer using Three.js WebGL, converting 360° videos into interactive browser 3D car models, significantly improving engagement and conversion",
      "Designed serverless AI pipeline using AWS Step Functions, Batch for frame extraction, stabilization, and point-cloud generation",
      "Enhanced SmartView embed platform. Optimized VIN-based fetching by 300x (3-4s → 2-10ms), improved DOM observation, reduced CPU usage",
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
      "Created UI designs, logos, ad creatives, videos, and product promos",
    ],
  },
];

export const projects = [
  {
    title: "ItineraryAI — Agentic Trip Planner",
    description:
      "AI trip planner using LangGraph with an agentic workflow — LLM accesses destination, accommodation, and transport research tools via Tavily web search. Features real-time SSE streaming and a RAG pipeline with ChromaDB to cache embeddings and reduce API costs. Deployed full-stack (Next.js, Express, FastAPI) on AWS EC2 with Nginx reverse proxy, PM2, systemd, and SSL via Let's Encrypt.",
    tech: ["LangGraph", "OpenAI", "Tavily", "ChromaDB", "Next.js", "Express", "FastAPI", "AWS EC2", "Nginx"],
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
    title: "3D Gaussian Splat Viewer",
    description:
      "Interactive browser-based 3D car experience using Three.js WebGL, converting 360° videos into explorable Gaussian Splat 3D models. Designed a serverless AI pipeline using AWS Step Functions and Batch for frame extraction, stabilization, and point-cloud generation.",
    tech: ["Three.js", "WebGL", "AWS", "Step Functions", "Batch", "TypeScript"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    title: "Automated Feature Videos",
    description:
      "AI-powered system generating car presentation videos from client inputs. Event-driven microservices using Kafka, SQS, Lambda across video lifecycle. Includes After Effects template injection, ChatGPT voiceover scripts, Google TTS audio synthesis, and AWS Deadline Cloud as rendering farm.",
    tech: ["Kafka", "SQS", "Lambda", "OpenAI", "After Effects", "AWS Deadline Cloud"],
    category: "ai",
    github: "#",
    live: "#",
  },
  {
    title: "SmartView Embed Platform",
    description:
      "Embeddable widget displaying images, videos, and 3D assets in a single window on client websites. Optimized VIN-based data fetching by 300x (3-4s to 2-10ms), improved DOM observation logic, and significantly reduced CPU usage.",
    tech: ["React", "TypeScript", "Node.js"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    title: "Design Portfolio",
    description:
      "Creative work spanning UI designs, logos, ad creatives, videos, and product promos. Built with After Effects, Premiere Pro, Illustrator, and Figma.",
    tech: ["After Effects", "Premiere Pro", "Illustrator", "Figma"],
    category: "creative",
    github: "#",
    live: "#",
  },
];
