import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Microservices",
    description: "Enterprise Java & Spring architectures, reactive microservices, secure authentication, and high-concurrency APIs",
    skills: [
      { name: "Java (8/11/17/21)", level: "Advanced", tag: "Core & Enterprise", relatedProjects: ["Global Banking Fraud & AML", "Patient Management System", "Core Java Data Analytics"] },
      { name: "Spring Boot 3", level: "Advanced", tag: "Microservices & Distributed Systems", relatedProjects: ["Global Banking Fraud & AML", "Patient Management System"] },
      { name: "Spring Cloud Gateway", level: "Advanced", tag: "Reverse Proxy & Edge Routing", relatedProjects: ["Patient Management System"] },
      { name: "gRPC & Protocol Buffers", level: "Advanced", tag: "Low-Latency Synchronous RPC", relatedProjects: ["Patient Management System"] },
      { name: "Apache Kafka", level: "Advanced", tag: "Event-Driven Stream Ingestion", relatedProjects: ["Patient Management System"] },
      { name: "Spring Security (SSO/RBAC)", level: "Advanced", tag: "Enterprise Auth & JWT", relatedProjects: ["Global Banking Fraud & AML", "Patient Management System"] },
      { name: "RESTful APIs", level: "Advanced", tag: "Contract-First Architecture", relatedProjects: ["Patient Management System", "FinSight"] },
      { name: "Microservices Architecture", level: "Advanced", tag: "Decoupled Distributed Services", relatedProjects: ["Patient Management System"] },
      { name: "Hibernate / JPA", level: "Advanced", tag: "ORM & Data Persistence", relatedProjects: ["Patient Management System"] },
      { name: "JDBC", level: "Advanced", tag: "Direct SQL Binding", relatedProjects: ["Core Java Password Manager"] },
      { name: "Python (FastAPI, Pydantic v2)", level: "Advanced", tag: "Async Agent Gateways", relatedProjects: ["FinSight", "AI Health Coordinator"] },
      { name: "Go (Golang)", level: "Proficient", tag: "Microservices Interface" },
      { name: "C / C++", level: "Proficient", tag: "Legacy Architecture Migration", relatedProjects: ["Global Banking Fraud & AML"] }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Enterprise Angular Single Page Applications, reactive state with Signals, and robust client route guards",
    skills: [
      { name: "Angular (v14–17+)", level: "Advanced", tag: "Enterprise SPAs", relatedProjects: ["Global Banking Fraud & AML", "AI Health Coordinator"] },
      { name: "TypeScript", level: "Advanced", tag: "Strict Static Typing", relatedProjects: ["AI Health Coordinator", "Global Banking Fraud & AML"] },
      { name: "Angular Signals", level: "Advanced", tag: "Fine-Grained Reactive State", relatedProjects: ["AI Health Coordinator"] },
      { name: "RxJS", level: "Advanced", tag: "Reactive Event Streams", relatedProjects: ["AI Health Coordinator"] },
      { name: "Reactive Forms", level: "Advanced", tag: "Multi-Step Validation", relatedProjects: ["Global Banking Fraud & AML"] },
      { name: "Route Guards (CanActivate)", level: "Advanced", tag: "Broken Access Control Mitigation", relatedProjects: ["Global Banking Fraud & AML"] },
      { name: "HTML5 & CSS3", level: "Advanced", tag: "Modern Responsive Web", relatedProjects: ["AgriSmart"] },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core Foundations" },
      { name: "Component-Driven Architecture", level: "Advanced", tag: "Reusable Design Systems" }
    ]
  },
  {
    title: "AI, LLMs & Agentic Systems",
    description: "Multi-agent workflows in LangGraph, advanced hybrid RAG, zero-hallucination deterministic math, and Gemini APIs",
    skills: [
      { name: "LangGraph Multi-Agent Workflows", level: "Advanced", tag: "Supervisor Orchestration", relatedProjects: ["FinSight", "AI Health Coordinator"] },
      { name: "Advanced RAG", level: "Advanced", tag: "Grounded Clinical & Financial Retrieval", relatedProjects: ["FinSight", "AI Health Coordinator"] },
      { name: "Vector Databases (Qdrant, Chroma)", level: "Advanced", tag: "Dense Embeddings", relatedProjects: ["FinSight", "AI Health Coordinator"] },
      { name: "Hybrid Search (BM25 + Dense + RRF)", level: "Advanced", tag: "Reciprocal Rank Fusion", relatedProjects: ["FinSight"] },
      { name: "Google Gemini LLM API", level: "Advanced", tag: "Compliance & Diagnostics", relatedProjects: ["Global Banking Fraud & AML"] },
      { name: "Hallucination Mitigation", level: "Advanced", tag: "Ground-Truth Verification", relatedProjects: ["FinSight"] },
      { name: "AST Deterministic Math", level: "Advanced", tag: "Sandboxed Computation", relatedProjects: ["FinSight"] },
      { name: "Computer Vision (OpenCV)", level: "Advanced", tag: "Leaf Pathology & OCR", relatedProjects: ["AgriSmart", "AI Health Coordinator"] },
      { name: "Deep Learning & Scikit-learn", level: "Advanced", tag: "SMOTE & Gradient Boosting", relatedProjects: ["DDoS Attack Prediction"] }
    ]
  },
  {
    title: "Databases & Cloud Infrastructure",
    description: "Relational persistence, cloud banking integrations on AWS, containerized workflows, and OWASP security",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tag: "ACID & Relational Schemas", relatedProjects: ["Patient Management System", "Core Java Password Manager"] },
      { name: "Relational SQL", level: "Advanced", tag: "Complex Queries & Indexing" },
      { name: "AWS (Cloud Banking APIs)", level: "Proficient", tag: "Batch Processing & Audit", relatedProjects: ["Global Banking Fraud & AML"] },
      { name: "Docker", level: "Advanced", tag: "Containerization & Microservices", relatedProjects: ["FinSight"] },
      { name: "Redis", level: "Proficient", tag: "In-Memory Session Caching", relatedProjects: ["AI Health Coordinator"] },
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control & Collaboration" },
      { name: "CI/CD Pipelines", level: "Proficient", tag: "Automated Build & Deployment" },
      { name: "Agile / Scrum", level: "Advanced", tag: "Sprint Delivery at TCS" },
      { name: "OWASP Security Mitigation", level: "Advanced", tag: "Access Control & Injection Defense", relatedProjects: ["Global Banking Fraud & AML", "Core Java Password Manager"] }
    ]
  }
];
