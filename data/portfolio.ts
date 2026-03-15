export const personalInfo = {
  name: "Vishal",
  fullName: "Vishal Pundhir",
  title: "Full-Stack Software Engineer",
  tagline: "Building AI, 3D, and full-stack products",
  description:
    "I'm a Full-Stack Software Engineer building AI-powered products, interactive 3D experiences, and high-performance web apps. From event-driven video pipelines to browser-based car viewers and agentic trip planners, I turn complex ideas into polished, scalable systems.",
  email: "vishalpundhirofficial@gmail.com",
  phone: "+91 8193809760",
  location: "India",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1yyBaMewscmhBwuHNPbSI6cQEskwDvTAB",
  socials: {
    github: "https://github.com/lufyDev",
    linkedin: "https://www.linkedin.com/in/vishal-pundhir-31059b197",
    twitter: "https://x.com/VishalP1226",
  },
};

export const aboutParagraphs = [
  "I'm a Full-Stack Software Engineer with a B.E. from BITS Pilani, building production systems across frontend, backend, cloud, and creative tooling. I enjoy taking products from 0 to 1 and owning the details from user experience to infrastructure.",
  "At Spyne, I build AI-powered automotive products including automated feature videos, After Effects data-injection workflows, browser-based 3D car viewers, and serverless processing pipelines on AWS. My work has helped ship systems handling 1000+ videos monthly, processing 500+ videos daily, and improving embed performance from seconds to milliseconds.",
  "I also enjoy building agentic AI products such as ItineraryAI using LangGraph, OpenAI, Tavily, and ChromaDB. Alongside engineering, I bring a strong creative edge with After Effects, Premiere Pro, Illustrator, and Figma, which helps me build products that feel polished end to end.",
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
      "Built the Automated Feature Video product for generating car videos from client inputs and architected event-driven microservices with Kafka, SQS, and AWS Lambda, processing 1000+ videos monthly with 99.9% uptime.",
      "Developed a data-injection service for After Effects templates using JavaScript, AE scripting, and Windows PowerShell, reducing manual video creation time from 2 hours to 5 minutes.",
      "Integrated ChatGPT for script generation, Google TTS for voiceover synthesis, and AWS Deadline Cloud for rendering, building the pipeline from upload to S3 delivery.",
      "Led the interactive 3D car viewer using Three.js and WebGL, transforming 360 degree videos into browser-based 3D models that increased engagement by 45% and conversion by 30%.",
      "Designed a serverless AI processing pipeline with AWS Step Functions and Batch to handle 500+ videos daily for frame extraction, stabilization, and 3D point-cloud generation.",
      "Optimized the SmartView embed solution, reducing load time by 99.9% (3-4s to 2-10ms), improving DOM rendering, and cutting CPU usage by 60% across 200+ dealer websites.",
    ],
  },
];

export const education = [
  {
    institution: "BITS Pilani",
    degree: "Bachelor of Engineering",
    period: "2020 — 2024",
    highlights: [
      "Birla Institute of Technology and Science, Pilani, Rajasthan, India",
      "Graduated in May 2024",
    ],
  },
];

export const projects = [
  {
    title: "ItineraryAI — Agentic Trip Planner",
    description:
      "AI trip planner built with LangGraph, OpenAI, Tavily, and ChromaDB. Designed an agentic workflow with real-time SSE progress streaming, added a RAG layer for cached embeddings to reduce API cost, and deployed the full-stack system on AWS EC2 with Nginx, PM2, systemd, and SSL.",
    tech: ["LangGraph", "OpenAI", "Tavily", "ChromaDB", "Next.js", "Express", "FastAPI", "AWS EC2", "Nginx"],
    category: "ai",
    github: "#",
    live: "#",
  },
  {
    title: "Urban Update — CMS & News Platform",
    description:
      "Production-grade news publishing platform with a role-based CMS for admin, editor, and reporter workflows. Includes analytics, user management, article approvals, and category-based content organization with hierarchical permissions.",
    tech: ["Next.js", "Tailwind", "NestJS", "MongoDB"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    title: "3D Gaussian Splat Viewer",
    description:
      "Interactive browser-based 3D car experience using Three.js and WebGL, converting 360 degree videos into explorable 3D vehicle models. Supported by a serverless AI pipeline using AWS Step Functions and Batch for frame extraction, stabilization, and point-cloud generation.",
    tech: ["Three.js", "WebGL", "AWS", "Step Functions", "Batch", "TypeScript"],
    category: "web",
    github: "#",
    live: "#",
  },
  {
    title: "Automated Feature Videos",
    description:
      "AI-powered system for generating car presentation videos from client inputs. Built on event-driven microservices with Kafka, SQS, and Lambda, plus After Effects template injection, ChatGPT script generation, Google TTS voiceovers, and AWS Deadline Cloud rendering.",
    tech: ["Kafka", "SQS", "Lambda", "OpenAI", "After Effects", "AWS Deadline Cloud"],
    category: "ai",
    github: "#",
    live: "#",
  },
  {
    title: "SmartView Embed Platform",
    description:
      "Embeddable widget for images, videos, and 3D assets on dealer websites. Reduced load time from 3-4 seconds to 2-10 milliseconds, improved DOM rendering logic, and significantly lowered CPU usage across 200+ client sites.",
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
