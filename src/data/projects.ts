import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "finsight-agentic-finance",
    title: "FinSight — Agentic Financial Research Assistant",
    shortDescription: "High-trust agentic financial intelligence platform eliminating LLM numeric hallucinations in equity research via AST sandboxed execution and SEC EDGAR grounding.",
    fullDescription: "An agentic financial intelligence platform engineered to eliminate LLM numeric hallucination in equity research. Combines SEC EDGAR Company Facts API ground-truth extraction with an AST-sandboxed deterministic calculator and hybrid Qdrant vector retrieval. Achieved 96.2% numeric accuracy on a 40-question empirical benchmark (+31.2 percentage points over traditional RAG) and reduced hallucinated citations by 26.2 percentage points.",
    problem: "Traditional LLMs and naive RAG architectures suffer from severe numeric hallucinations and stale mathematical derivations when summarizing balance sheets, 10-K filings, and complex financial ratios.",
    solution: "Engineered an agentic workflow in LangGraph that intercepts numerical queries, delegates arithmetic to an AST-sandboxed deterministic Python calculator, retrieves filings directly from SEC EDGAR API, and validates context with hybrid Qdrant vector search (BM25 + Dense embeddings).",
    metrics: [
      "96.2% Numeric derivation accuracy",
      "+31.2 pp Accuracy uplift over naive RAG",
      "-26.2 pp Reduction in hallucinated citations",
      "SEC EDGAR ground-truth verified"
    ],
    technologies: [
      "Python 3.11",
      "FastAPI",
      "LangGraph",
      "Qdrant Vector DB",
      "BM25 Search",
      "Pydantic v2",
      "Streamlit",
      "Docker"
    ],
    category: "Agentic AI",
    githubUrl: "https://github.com/204g1a0551/fin-sight",
    featured: true,
    highlights: [
      "96.2% numeric accuracy on a 40-question empirical financial benchmark",
      "Ground-truth SEC EDGAR Company Facts API integration",
      "AST-sandboxed deterministic execution hierarchy preventing hallucinated math",
      "Hybrid Qdrant retrieval fusing BM25 lexical and dense semantic vectors with RRF"
    ],
    architecture: [
      "Supervisor Agent: LangGraph state machine orchestrating query classification and sub-agent routing",
      "SEC Ingestion Engine: Automated SEC EDGAR Company Facts fetcher with structured XBRL parser",
      "Deterministic Calculator: Sandboxed AST execution layer evaluating formulas without LLM mathematical speculation",
      "Hybrid Vector Store: Qdrant vector database indexed with dense embeddings and BM25 sparse keyword indices"
    ]
  },
  {
    id: "ai-health-coordinator",
    title: "AI Health Checkup & Clinical Appointment Coordinator",
    shortDescription: "Autonomous healthcare multi-agent system orchestrating symptom triage, Bengaluru doctor matching, prescription OCR, and event-driven Angular 17+ dashboard.",
    fullDescription: "An autonomous healthcare multi-agent system and grounded clinical intelligence platform. Features an 8-agent LangGraph supervisor orchestrating clinical symptom triage, emergency intercept, Bengaluru doctor matching, prescription OCR parsing, and biological reference range evaluations, coupled with an event-driven dynamic canvas dashboard in Angular 17+.",
    problem: "Patients face fragmented outpatient navigation, delayed emergency triage, and difficulty interpreting lab reports with reference ranges against clinical specialties.",
    solution: "Architected an 8-agent LangGraph supervisor coordinating symptom evaluation, automated emergency intercept protocol, real-time doctor matching in Bengaluru, and lab OCR parsing, visualized through a reactive Angular 17+ Signals canvas.",
    metrics: [
      "8-Agent Autonomous LangGraph Supervisor",
      "Sub-second Emergency Intercept Protocol",
      "Prescription OCR parsing & reference ranges",
      "Reactive Angular 17+ Signals canvas"
    ],
    technologies: [
      "Angular 17+",
      "TypeScript",
      "Angular Signals",
      "RxJS",
      "Python",
      "FastAPI",
      "LangGraph",
      "Redis",
      "Vector RAG"
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/204g1a0551/ai-health-coordinator",
    featured: true,
    highlights: [
      "8-agent LangGraph supervisor managing specialized clinical triage sub-agents",
      "Dynamic emergency intercept with localized Bengaluru medical provider matching",
      "Prescription OCR ingestion with automated biological reference range validation",
      "Angular 17+ frontend powered by fine-grained Angular Signals and RxJS streams"
    ],
    architecture: [
      "Angular 17+ Client: Dynamic consultation canvas with Signals, RxJS event streams, and reactive triage stepper",
      "FastAPI Agent Gateway: High-performance async gateway bridging WebSocket events to agent state graphs",
      "LangGraph Clinical Orchestrator: 8 specialized agents for triage, emergency routing, OCR, and doctor matchmaking",
      "Memory & Retrieval: Redis session memory paired with Chroma/Qdrant clinical guideline vector database"
    ]
  },
  {
    id: "global-banking-aml-platform",
    title: "Global Banking Fraud Detection & AML Platform",
    shortDescription: "High-throughput fraud detection platform modernizing legacy C++/JSP banking monoliths into Spring Boot microservices and Angular SPAs with Gemini LLM triage.",
    fullDescription: "A high-throughput fraud detection and transaction monitoring platform modernizing global banking compliance workflows. Refactored legacy Spring, C++, and JSP into a decoupled Spring Boot and Angular architecture, featuring Spring Security SSO, granular role-based UI permissions, cloud banking API integration on AWS, and an LLM-powered alert diagnostic chatbot.",
    problem: "Legacy banking monoliths built on C++, Spring MVC, and JSP experienced high maintenance overhead, sluggish transaction evaluation, security vulnerabilities (Broken Access Control), and manual compliance triage bottlenecks.",
    solution: "Spearheaded full-stack modernization migrating monoliths to Spring Boot REST APIs and reactive Angular SPAs. Implemented Spring Security Single Sign-On (SSO), fortified defenses against OWASP Top 10 vulnerabilities with route guards and backend RBAC, integrated AWS cloud banking batch APIs, and embedded an intelligent Gemini LLM assistant for real-time compliance investigation.",
    metrics: [
      "Enterprise Monolith to Microservices Migration",
      "Spring Security SSO & OWASP RBAC Defenses",
      "Integrated Gemini LLM Compliance Assistant",
      "AWS Cloud Banking Batch API Processing"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "Spring Security",
      "REST APIs",
      "C++",
      "AWS",
      "Gemini LLM API"
    ],
    category: "Full Stack",
    featured: true,
    highlights: [
      "Modernized legacy C++, Spring MVC, and JSP monoliths to Spring Boot microservices",
      "Engineered enterprise SSO and remediated Broken Access Control (OWASP Top 10)",
      "Integrated intelligent Gemini LLM chatbot for rapid transaction anomaly queries",
      "Built Angular service layers consuming AWS cloud banking batch endpoints"
    ],
    architecture: [
      "Angular Presentation Tier: Modular SPA with Route Guards, reactive forms, and real-time AML audit inspectors",
      "Spring Boot API Gateway: Microservices layer handling transaction validation, SSO token decoding, and RBAC",
      "Legacy Adapter Tier: High-performance C++ legacy bridge modernized into RESTful endpoints",
      "AI & Cloud Tier: Gemini LLM query assistant integrated with AWS cloud banking transaction pipelines"
    ]
  },
  {
    id: "patient-management-system",
    title: "Patient Management System (Microservices)",
    shortDescription: "Modular healthcare microservices backend built with Java 17 and Spring Boot featuring strict DTO validation, JPA persistence, and transactional integrity.",
    fullDescription: "A modular healthcare microservices backend platform built with Java 17 and Spring Boot. Isolates patient demographics, clinical records, and consultation schedules into decoupled services with strict DTO validation, custom exception hierarchies, and transactional database persistence.",
    problem: "Monolithic healthcare records systems suffer from cascading data corruption, high coupling between scheduling and medical records, and unstandardized API response structures.",
    solution: "Architected a decoupled microservices architecture in Java 17 and Spring Boot with Spring Data JPA. Enforced strict contract-first DTO validations, centralized GlobalExceptionHandler patterns, and transactional isolation across PostgreSQL schemas.",
    metrics: [
      "Java 17 & Spring Boot Microservices",
      "Strict DTO & Hibernate JPA Persistence",
      "Centralized Exception Handling & Validation",
      "Enterprise PostgreSQL Schema Isolation"
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "PostgreSQL",
      "Maven",
      "Hibernate"
    ],
    category: "Java & Spring Boot",
    githubUrl: "https://github.com/204g1a0551/PatientManagementSystem",
    highlights: [
      "Decoupled microservice architecture isolating patient demographics, records, and appointments",
      "Implemented strict request/response DTO validation using Jakarta validation annotations",
      "Built centralized GlobalExceptionHandler ensuring standard RFC 7807 problem details",
      "Optimized Hibernate JPA queries and relational indices on PostgreSQL"
    ],
    architecture: [
      "API Controller Layer: Versioned RESTful endpoints with OpenAPI/Swagger documentation",
      "Service & Business Logic: Domain-driven service interfaces with declarative `@Transactional` boundaries",
      "Data Access Layer: Spring Data JPA repositories with custom JPQL queries and pagination",
      "Database: Relational PostgreSQL schema with foreign key constraints and audit timestamps"
    ]
  },
  {
    id: "agrismart-farm-platform",
    title: "AgriSmart — Smart Farm Management Platform",
    shortDescription: "Agritech telemetry and decision support platform with OpenCV leaf disease detection, live weather sowing advisories, and soil N-P-K recommendation engines.",
    fullDescription: "A comprehensive agritech dashboard unifying crop telemetry and decision support. Integrates computer vision models for automated leaf disease detection, live weather API telemetry for optimal sowing schedules, N-P-K fertilizer recommendations, crop rotation planners, regional commodity market pricing, and farm financial management.",
    problem: "Small and medium agricultural producers lack accessible scientific diagnostic tools to identify early-stage plant pathology and make data-driven crop selection decisions.",
    solution: "Developed an integrated Python and Flask web platform coupling OpenCV computer vision preprocessing with convolutional neural networks trained on plant pathology datasets, providing real-time disease classification, fertilizer calculators, and market pricing.",
    metrics: [
      "95% Crop disease classification accuracy",
      "Live weather telemetry for sowing schedules",
      "Automated N-P-K fertilizer calculator",
      "Multi-variable crop rotation planner"
    ],
    technologies: [
      "Python",
      "Flask",
      "Computer Vision",
      "Machine Learning",
      "OpenCV",
      "REST APIs",
      "PostgreSQL"
    ],
    category: "AI/ML",
    highlights: [
      "High-accuracy deep learning computer vision model for plant disease identification",
      "Integrated real-time meteorological API for predictive sowing calendars",
      "Soil nutrient optimization algorithm calculating tailored N-P-K fertilizer ratios",
      "Modular Flask REST endpoints serving diagnostic inference in under 500ms"
    ],
    architecture: [
      "Vision Pipeline: OpenCV preprocessing, morphological filtering, and neural network inference",
      "Telemetry Engine: Weather API integration and agricultural advisory rule system",
      "Flask Web Backend: Lightweight RESTful endpoints serving diagnostics and crop planners",
      "Database Layer: PostgreSQL database storing farm logs, yield records, and disease diagnostic history"
    ]
  },
  {
    id: "core-java-data-analytics",
    title: "Core Java Enterprise Data Analytics & Localization",
    shortDescription: "Enterprise data processing module built in Core Java automating multi-region spreadsheet analytics, dynamic OS path resolution, and localized file generation.",
    fullDescription: "An enterprise data processing module engineered in Core Java to automate multi-region spreadsheet analytics. Uses Java System and TimeZone APIs to dynamically resolve user identities and local OS file paths, automating localized German and Indian file naming, temporal versioning, and batch Excel data transformation.",
    problem: "Global enterprise operations running spreadsheet analytics across Indian (IST) and German (CET/CEST) teams suffered from timezone discrepancies, hardcoded file path breakages, and manual versioning errors.",
    solution: "Engineered a robust Core Java analytics engine leveraging Java NIO, `System.getProperty()`, `ZoneId`, and Apache POI to dynamically resolve localized user file paths and temporal timestamps, standardizing batch Excel data generation.",
    metrics: [
      "Zero hardcoded paths via Java System APIs",
      "Dynamic German & Indian locale/timezone handling",
      "Automated batch Excel data transformation",
      "Temporal file versioning & audit logs"
    ],
    technologies: [
      "Core Java",
      "Java NIO/IO",
      "System APIs",
      "TimeZone & Locale",
      "Apache POI",
      "OOP"
    ],
    category: "Java & Spring Boot",
    highlights: [
      "Dynamic OS environment resolution using Java System properties for cross-platform execution",
      "Multi-timezone timestamp generation handling IST and CET/CEST operational windows",
      "High-throughput spreadsheet parsing and transformation using Apache POI and Java Streams",
      "Robust error handling and automated file backup generation during batch cycles"
    ],
    architecture: [
      "Environment Resolver: Dynamic OS identity and file system path provider",
      "Localization & Time Service: Multi-region timezone translator and locale date formatter",
      "Processing Core: Java NIO file streaming pipeline and Apache POI spreadsheet transformer",
      "Audit Module: Automated versioned artifact generator with execution logging"
    ]
  },
  {
    id: "ddos-prediction-cbit",
    title: "Prediction & Mitigation of DDoS Attacks (CBIT Conference)",
    shortDescription: "Network security research pipeline detecting DDoS flood attacks across network telemetry using SMOTE, Gradient Boosting, and deep neural architectures.",
    fullDescription: "An end-to-end network security research pipeline detecting and classifying Distributed Denial of Service (DDoS) flood attacks across network telemetry. Handled extreme telemetry class imbalance using SMOTE and RandomOverSampler, benchmarked Gradient Boosting classifiers, and presented findings in a conference research paper at CBIT.",
    problem: "Volumetric network traffic datasets suffer from severe class imbalance, causing machine learning classifiers to miss stealthy, low-rate Distributed Denial of Service (DDoS) attack vectors.",
    solution: "Developed an end-to-end ML security pipeline utilizing SMOTE (Synthetic Minority Over-sampling Technique) and RandomOverSampler to balance telemetry distributions, and benchmarked Gradient Boosting, Random Forest, and deep learning models to maximize detection accuracy.",
    metrics: [
      "Presented at CBIT Conference",
      "Synthetic Minority Over-sampling (SMOTE)",
      "High anomaly detection & classification",
      "Robust against extreme class imbalance"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "SMOTE",
      "Gradient Boosting",
      "Deep Learning",
      "Network Telemetry",
      "Pandas"
    ],
    category: "Security",
    githubUrl: "https://github.com/204g1a0546/CSE-2020-24-Batch-A6",
    highlights: [
      "Researched and published in a recognized conference paper at CBIT",
      "Engineered feature extraction pipeline for packet rate, entropy, and protocol distributions",
      "Resolved extreme class imbalance using SMOTE and comparative sampling algorithms",
      "Evaluated Gradient Boosting, Random Forest, and sequential neural classifiers"
    ],
    architecture: [
      "Telemetry Ingestion: Network packet capture parsing and feature standardizer",
      "Resampling Layer: SMOTE and RandomOverSampler balancing attack vs benign traffic classes",
      "Model Evaluation: Gradient Boosting and deep learning model benchmarking suite",
      "Alert Engine: Dynamic statistical anomaly scoring and classification thresholding"
    ]
  },
  {
    id: "core-java-password-manager",
    title: "Core Java & JDBC Secure Password Manager",
    shortDescription: "Open-source desktop credential management utility built with Core Java and PostgreSQL utilizing parameterized PreparedStatements against SQL injection.",
    fullDescription: "An open-source desktop credential management utility built with Core Java and PostgreSQL. Implements parameterized PreparedStatements for secure CRUD operations, preventing SQL injection vulnerabilities and maintaining persistent credential records under an MIT License.",
    problem: "Simple credential storage scripts frequently expose credentials through plaintext memory leaks and vulnerable SQL concatenation patterns.",
    solution: "Engineered a secure Core Java desktop application using JDBC and PostgreSQL with strictly parameterized PreparedStatements, defensive input sanitization, and structured transactional connection pooling.",
    metrics: [
      "Parameterized PreparedStatements (SQL Injection immune)",
      "Transactional JDBC connection management",
      "Clean CRUD architecture in Core Java",
      "Published open-source under MIT License"
    ],
    technologies: [
      "Core Java",
      "JDBC",
      "PostgreSQL",
      "SQL",
      "MIT License"
    ],
    category: "Java & Spring Boot",
    githubUrl: "https://github.com/204g1a0551/JDBCPasswordManager",
    highlights: [
      "Built with pure Core Java and JDBC communicating directly with PostgreSQL",
      "Complete elimination of SQL injection through strict PreparedStatement binding",
      "Clean separation of Concerns: CLI/View, DAO layer, and Database connection manager",
      "Published as open source on GitHub under the permissive MIT License"
    ],
    architecture: [
      "Presentation Layer: Console-driven interactive menu with input validation",
      "Data Access Object (DAO): Encapsulated CRUD database methods with try-with-resources",
      "Database Connector: Secure JDBC driver configuration and connection lifecycle manager",
      "Persistence Tier: PostgreSQL relational table with primary keys and audit columns"
    ]
  }
];
