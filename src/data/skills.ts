import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern, high-performance web applications and enterprise portals",
    skills: [
      { name: "Angular", level: "Advanced", tag: "Enterprise", relatedProjects: ["Quartz AML Compliance"] },
      { name: "TypeScript", level: "Advanced", tag: "Strict Type Safety" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Modern Core" },
      { name: "React", level: "Proficient", tag: "Interactive UI" },
      { name: "HTML5 / CSS3", level: "Advanced", tag: "Semantic & Responsive" },
      { name: "Tailwind CSS", level: "Proficient", tag: "Modern Styling" }
    ]
  },
  {
    title: "Backend & Microservices",
    description: "Scalable backend architecture, secure RESTful APIs, and transaction processing",
    skills: [
      { name: "Java", level: "Advanced", tag: "Core & Enterprise", relatedProjects: ["Quartz AML Compliance"] },
      { name: "Spring Boot", level: "Advanced", tag: "Microservices & APIs", relatedProjects: ["Quartz AML Compliance"] },
      { name: "Spring MVC", level: "Advanced", tag: "MVC Architecture" },
      { name: "REST APIs", level: "Advanced", tag: "Contract-First Design", relatedProjects: ["Quartz AML Compliance"] },
      { name: "Python", level: "Advanced", tag: "Data & Systems", relatedProjects: ["AgriSmart", "DDoS Detection"] },
      { name: "Django", level: "Proficient", tag: "Web Applications" },
      { name: "Flask", level: "Advanced", tag: "API & Model Serving", relatedProjects: ["AgriSmart"] },
      { name: "FastAPI", level: "Proficient", tag: "Async APIs" }
    ]
  },
  {
    title: "AI, ML & Generative AI",
    description: "Deep learning models, computer vision pipelines, and intelligent LLM workflows",
    skills: [
      { name: "LLMs & GenAI", level: "Advanced", tag: "Enterprise Assistance", relatedProjects: ["Quartz AML Compliance"] },
      { name: "RAG & Vector DBs", level: "Proficient", tag: "Semantic Retrieval" },
      { name: "Prompt Engineering", level: "Advanced", tag: "Optimization" },
      { name: "LangChain", level: "Proficient", tag: "Agent Workflows" },
      { name: "Computer Vision", level: "Advanced", tag: "Image Diagnosis", relatedProjects: ["AgriSmart"] },
      { name: "OpenCV", level: "Advanced", tag: "Image Processing", relatedProjects: ["AgriSmart"] },
      { name: "TensorFlow / Keras", level: "Advanced", tag: "Neural Networks", relatedProjects: ["AgriSmart"] },
      { name: "PyTorch", level: "Proficient", tag: "Deep Learning" },
      { name: "LSTM Networks", level: "Advanced", tag: "Sequential & Time-Series", relatedProjects: ["DDoS Detection"] },
      { name: "Random Forest", level: "Advanced", tag: "Risk Classification", relatedProjects: ["Quartz AML Compliance"] },
      { name: "Natural Language Processing (NLP)", level: "Proficient", tag: "Text Analytics" }
    ]
  },
  {
    title: "Database & Data Storage",
    description: "Relational persistence, optimized queries, and transaction integrity",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tag: "ACID & Relational", relatedProjects: ["Quartz AML Compliance"] },
      { name: "SQL", level: "Advanced", tag: "Query Tuning & Schemas" },
      { name: "Vector Databases", level: "Proficient", tag: "Embeddings Search" }
    ]
  },
  {
    title: "Cloud, DevOps & Tools",
    description: "Containerization, cloud infrastructure, version control, and development workflows",
    skills: [
      { name: "AWS (Certified)", level: "Proficient", tag: "DVA-C02 Associate" },
      { name: "Docker", level: "Proficient", tag: "Containerization" },
      { name: "Git & GitHub", level: "Advanced", tag: "VCS & Collaboration" },
      { name: "Linux / Shell", level: "Proficient", tag: "Command-Line & Scripting" }
    ]
  }
];
