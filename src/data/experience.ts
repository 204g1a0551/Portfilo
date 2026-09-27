import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: "tcs-app-developer",
    company: "Tata Consultancy Services (TCS)",
    role: "Application Developer (Angular / Java Full Stack)",
    location: "Bengaluru, Karnataka, India",
    period: "Feb 2025 — Present",
    type: "Enterprise Full-Time",
    summary: "Spearheading full-stack modernization of an enterprise Anti-Money Laundering (AML) and Fraud Detection platform, migrating legacy Spring, C++, and JSP monoliths into scalable Spring Boot microservices and reactive Angular SPAs.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular (v14-17+)",
      "Spring Security (SSO/RBAC)",
      "RESTful APIs",
      "C++",
      "AWS Cloud Banking",
      "Gemini LLM API",
      "OWASP Security"
    ],
    responsibilities: [
      "Spearheaded full-stack modernization of an enterprise Anti-Money Laundering (AML) platform, migrating legacy Spring, C++, and JSP architectures into scalable Spring Boot microservices and an Angular SPA.",
      "Engineered Single Sign-On (SSO) authentication using Spring Security and fortified application defenses against Broken Access Control (OWASP Top 10) through Angular Route Guards and backend authorization.",
      "Integrated an intelligent AI chatbot powered by LLM APIs to assist compliance analysts with real-time transaction lookups, anomaly queries, and automated alert triage.",
      "Developed Angular service layers consuming cloud banking APIs deployed on AWS for asynchronous transaction batch processing and secure audit reporting."
    ],
    achievements: [
      "Successfully decommissioned legacy JSP/C++ bottlenecks, delivering responsive Angular SPAs and modular Spring Boot REST endpoints",
      "Eliminated Broken Access Control risks with robust Spring Security RBAC and Angular route guards",
      "Empowered compliance investigators with an integrated LLM diagnostic assistant for rapid alert triage",
      "Architected reliable AWS cloud banking API integrations for large batch transaction processing"
    ],
    metrics: [
      { label: "Monolith Migration", value: "Spring Boot & Angular" },
      { label: "Security Hardening", value: "SSO & RBAC (OWASP)" },
      { label: "AI Integration", value: "LLM Compliance Chatbot" },
      { label: "Cloud Services", value: "AWS Banking APIs" }
    ]
  },
  {
    id: "freelance-software-consultant",
    company: "Independent Engineering",
    role: "Freelance Software Engineer & Technical Consultant",
    location: "Remote",
    period: "Apr 2026 — Present",
    type: "Consulting & Contract",
    summary: "Delivering modern frontend state architectures, Core Java enterprise analytics pipelines, and technical leadership across applied machine learning projects.",
    technologies: [
      "Angular Signals",
      "TypeScript",
      "Reactive Forms",
      "Go (Golang)",
      "Core Java",
      "Java TimeZone/NIO",
      "Python",
      "Machine Learning"
    ],
    responsibilities: [
      "Modernized frontend state architecture to Angular Signals and built dynamic multi-step Reactive Forms interfacing with Go (Golang) microservices.",
      "Developed a Core Java enterprise data analytics module utilizing Java System and TimeZone APIs to automate dynamic locale-specific reporting and file generation across German and Indian environments.",
      "Coordinated a 3-4 member developer team delivering applied machine learning systems, including crop disease detection and medical imaging classification."
    ],
    achievements: [
      "Refactored complex UI components to fine-grained Angular Signals, improving client rendering performance",
      "Engineered dynamic locale and timezone-aware Core Java reporting pipeline used across multi-region teams",
      "Mentored and guided cross-functional team delivery of healthcare and agritech deep learning systems"
    ],
    metrics: [
      { label: "State Architecture", value: "Angular Signals" },
      { label: "Backend Modules", value: "Core Java & Go" },
      { label: "Team Leadership", value: "3-4 Engineers" },
      { label: "Domain Scope", value: "Analytics & ML" }
    ]
  },
  {
    id: "srit-technical-mentor",
    company: "Srinivasa Ramanujan Institute of Technology",
    role: "Technical Mentor & Programming Instructor",
    location: "Anantapur, Andhra Pradesh, India",
    period: "2024",
    type: "Technical Mentorship",
    summary: "Conducted high-impact technical training, system design clinics, and competitive coding bootcamps for undergraduate engineers.",
    technologies: [
      "Core Java",
      "Python",
      "C++",
      "Django",
      "OOP & Design Patterns",
      "Data Structures & Algorithms",
      "SQL"
    ],
    responsibilities: [
      "Conducted interactive technical training sessions covering Core Java, Python, C++, Django, Object-Oriented Programming (OOP), and Data Structures for undergraduate engineers.",
      "Guided student cohorts through laboratory coding challenges, system design clinics, and end-to-end project implementations.",
      "Organized hackathons and mock technical interviews, directly contributing to students securing software engineering placements at firms including TCS and Infosys."
    ],
    achievements: [
      "Directly contributed to students securing tier-1 software engineering placements at TCS, Infosys, and startups",
      "Mentored hundreds of engineering students in algorithmic problem solving and web application architecture",
      "Organized college-wide hackathons and competitive programming challenges"
    ],
    metrics: [
      { label: "Students Trained", value: "500+" },
      { label: "Student Placements", value: "TCS, Infosys & More" },
      { label: "Core Topics", value: "Java, Python, C++, DSA" }
    ]
  }
];
