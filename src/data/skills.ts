import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Microservices",
    description: "Enterprise Java & Spring architectures, reactive microservices, secure authentication, and high-concurrency APIs",
    skills: [
      { name: "Java (8/11/17/21)", level: "Advanced", tag: "Core & Enterprise", relatedProjects: ["AML Policy Guardian", "Global Banking Fraud & AML", "Patient Management System", "Core Java Data Analytics"] },
      { name: "Spring Boot 3.4", level: "Advanced", tag: "Microservices & Distributed Systems", relatedProjects: ["AML Policy Guardian", "Global Banking Fraud & AML", "Patient Management System"] },
      { name: "Spring AI 1.0", level: "Advanced", tag: "Enterprise RAG & Embeddings", relatedProjects: ["AML Policy Guardian"] },
      { name: "Spring Cloud Gateway", level: "Advanced", tag: "Reverse Proxy & Edge Routing", relatedProjects: ["Patient Management System"] },
      { name: "gRPC & Protocol Buffers", level: "Advanced", tag: "Low-Latency Synchronous RPC", relatedProjects: ["Patient Management System"] },
      { name: "Apache Kafka", level: "Advanced", tag: "Event-Driven Stream Ingestion", relatedProjects: ["Patient Management System"] },
      { name: "Spring Security (SSO/RBAC)", level: "Advanced", tag: "Enterprise Auth & JWT", relatedProjects: ["AML Policy Guardian", "Global Banking Fraud & AML", "Patient Management System"] },
      { name: "RESTful APIs & SSE Streaming", level: "Advanced", tag: "Sub-Word Token Streams & Contract Design", relatedProjects: ["AML Policy Guardian", "Patient Management System", "FinSight"] },
      { name: "Microservices Architecture", level: "Advanced", tag: "Decoupled Distributed Services", relatedProjects: ["Patient Management System"] },
      { name: "Hibernate / JPA & Flyway", level: "Advanced", tag: "ORM & Migration Pipelines", relatedProjects: ["AML Policy Guardian", "Patient Management System"] },
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
      { name: "Angular (v14–22+)", level: "Advanced", tag: "Enterprise SPAs & SSE Clients", relatedProjects: ["AML Policy Guardian", "Global Banking Fraud & AML", "AI Health Coordinator"] },
      { name: "TypeScript", level: "Advanced", tag: "Strict Static Typing", relatedProjects: ["AML Policy Guardian", "AI Health Coordinator", "Global Banking Fraud & AML"] },
      { name: "Angular Signals", level: "Advanced", tag: "Fine-Grained Reactive State", relatedProjects: ["AI Health Coordinator"] },
      { name: "RxJS", level: "Advanced", tag: "Reactive Event Streams & SSE", relatedProjects: ["AML Policy Guardian", "AI Health Coordinator"] },
      { name: "Reactive Forms", level: "Advanced", tag: "Multi-Step Validation", relatedProjects: ["Global Banking Fraud & AML"] },
      { name: "Route Guards (CanActivate)", level: "Advanced", tag: "Broken Access Control Mitigation", relatedProjects: ["Global Banking Fraud & AML"] },
      { name: "HTML5 & CSS3 Tokens", level: "Advanced", tag: "Modern Responsive Web", relatedProjects: ["AML Policy Guardian", "AgriSmart"] },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core Foundations" },
      { name: "Component-Driven Architecture", level: "Advanced", tag: "Reusable Design Systems" }
    ]
  },
  {
    title: "AI, LLMs & Agentic Systems",
    description: "Multi-agent workflows in LangGraph, advanced hybrid RAG, zero-hallucination deterministic math, and pgvector",
    skills: [
      { name: "Enterprise RAG & Guardrails", level: "Advanced", tag: "0.70 Cosine Floor & Zero Hallucination", relatedProjects: ["AML Policy Guardian", "FinSight"] },
      { name: "LangGraph Multi-Agent Workflows", level: "Advanced", tag: "Supervisor Orchestration", relatedProjects: ["FinSight", "AI Health Coordinator"] },
      { name: "Vector Databases (pgvector, Qdrant, Chroma)", level: "Advanced", tag: "Dense & Hybrid Embeddings", relatedProjects: ["AML Policy Guardian", "FinSight", "AI Health Coordinator"] },
      { name: "Hybrid Search (BM25 + Dense + RRF)", level: "Advanced", tag: "Reciprocal Rank Fusion", relatedProjects: ["FinSight"] },
      { name: "Apache Tika Ingestion Pipeline", level: "Advanced", tag: "OCR & Section (§) Preservation", relatedProjects: ["AML Policy Guardian"] },
      { name: "Google Gemini & OpenAI GPT-4o", level: "Advanced", tag: "Compliance & Diagnostics", relatedProjects: ["AML Policy Guardian", "Global Banking Fraud & AML"] },
      { name: "Hallucination Mitigation & PII Redaction", level: "Advanced", tag: "SSN/PAN Masking & Guardrails", relatedProjects: ["AML Policy Guardian", "FinSight"] },
      { name: "AST Deterministic Math", level: "Advanced", tag: "Sandboxed Computation", relatedProjects: ["FinSight"] },
      { name: "Computer Vision (OpenCV)", level: "Advanced", tag: "Leaf Pathology & OCR", relatedProjects: ["AgriSmart", "AI Health Coordinator"] },
      { name: "Deep Learning & Scikit-learn", level: "Advanced", tag: "SMOTE & Gradient Boosting", relatedProjects: ["DDoS Attack Prediction"] }
    ]
  },
  {
    title: "Databases & Cloud Infrastructure",
    description: "Relational persistence, pgvector, cloud banking on AWS, containerized workflows, and OWASP security",
    skills: [
      { name: "PostgreSQL 16 & pgvector", level: "Advanced", tag: "HNSW Vector Indices & ACID", relatedProjects: ["AML Policy Guardian", "Patient Management System"] },
      { name: "Relational SQL", level: "Advanced", tag: "Complex Queries & Indexing" },
      { name: "AWS (EC2, RDS, S3 VPC Endpoint)", level: "Proficient", tag: "Enterprise Cloud Architecture", relatedProjects: ["AML Policy Guardian", "Global Banking Fraud & AML"] },
      { name: "Docker & Docker Compose", level: "Advanced", tag: "Multi-Stage Non-Root Containers", relatedProjects: ["AML Policy Guardian", "FinSight", "Patient Management System"] },
      { name: "Redis", level: "Proficient", tag: "In-Memory Session Caching", relatedProjects: ["AI Health Coordinator"] },
      { name: "Git & GitHub Actions CI/CD", level: "Advanced", tag: "Automated Testing & Security Scanning", relatedProjects: ["AML Policy Guardian"] },
      { name: "Agile / Scrum", level: "Advanced", tag: "Sprint Delivery at TCS" },
      { name: "OWASP Security Mitigation", level: "Advanced", tag: "Access Control & Injection Defense", relatedProjects: ["AML Policy Guardian", "Global Banking Fraud & AML", "Core Java Password Manager"] }
    ]
  }
];
