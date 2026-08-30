import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "quartz-aml-compliance",
    title: "Quartz AML Compliance Platform",
    shortDescription: "Enterprise banking AML & fraud detection system utilizing risk analysis algorithms and LLM-assisted compliance workflows.",
    fullDescription: "An enterprise-grade anti-money laundering (AML) and financial crime detection platform built for high-throughput transaction monitoring. Engineered with Java, Spring Boot, and Angular, the system continuously evaluates simulated and live banking transactions against rigorous compliance rule engines and ML risk models, while empowering compliance analysts with an intelligent conversational LLM assistant.",
    problem: "Financial institutions process millions of daily transactions, where manual compliance review causes severe backlogs, critical delays, and high false-positive alert rates that burden analyst teams.",
    solution: "Architected a full-stack platform combining high-throughput Spring Boot REST microservices with a responsive Angular portal. Integrated Random Forest risk scoring alongside 12 tailored AML rule scenarios to curb false flags, and embedded an interactive LLM chatbot that accelerates regulatory triage.",
    metrics: [
      "1,000K+ Risk scenarios flagged",
      "1,200K+ Simulated transactions evaluated",
      "80% Reduction in false-positive alerts",
      "60% Faster query resolution with LLM assistant",
      "78% Risk model precision & recall"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "REST APIs",
      "LLMs & GenAI",
      "Random Forest",
      "PostgreSQL",
      "Docker"
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/204g1a0551",
    featured: true,
    highlights: [
      "End-to-end integration between Angular UI and Spring Boot REST microservices",
      "12 custom AML risk rule scenarios reducing false alarms by 80%",
      "Integrated generative AI chatbot cutting investigator query resolution by 60%",
      "Engineered 18 mission-critical APIs and fixed 60+ enterprise issues"
    ],
    architecture: [
      "Angular Frontend: State management, real-time alert tables, transaction inspector modal, and responsive compliance dashboards",
      "Spring Boot Core: Enterprise transactional services, business rule engine, and RESTful API gateway",
      "AI & Analytics Layer: Random Forest classification engine for anomaly risk scoring and LLM prompt orchestrator for automated SAR (Suspicious Activity Report) drafting assistance",
      "Persistence: PostgreSQL relational schema optimized with indexed audit trails and transaction logs"
    ]
  },
  {
    id: "agrismart-crop-management",
    title: "AgriSmart — AI Smart Agriculture System",
    shortDescription: "AI-powered agricultural platform featuring computer vision crop disease detection, weather insights, and smart farm recommendations.",
    fullDescription: "A comprehensive digital farming intelligence platform designed to maximize crop health and agricultural yield. Built with Python, Flask, OpenCV, and TensorFlow/Keras, AgriSmart performs real-time leaf disease classification from photos, generates soil-specific crop advice, and provides predictive weather analytics.",
    problem: "Farmers in diverse regions face severe harvest losses due to delayed identification of plant pathology, lack of accessible agronomist expertise, and erratic climate conditions.",
    solution: "Trained a convolutional deep learning architecture on a diverse dataset of 30,000+ agricultural images. Coupled the model with an OpenCV preprocessing pipeline and exposed it via lightweight Flask REST endpoints accessible from desktop and mobile web browsers.",
    metrics: [
      "95% Disease classification accuracy",
      "30,000+ Curated image dataset",
      "Real-time OpenCV leaf analysis pipeline",
      "Integrated multi-variable crop advisory"
    ],
    technologies: [
      "Python",
      "Flask",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "CNN",
      "REST APIs"
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/204g1a0551",
    featured: true,
    highlights: [
      "Achieved 95% multi-class plant disease classification accuracy",
      "Automated image segmentation and feature extraction with OpenCV",
      "Integrated real-time weather forecasts and personalized soil crop recommendations",
      "Lightweight Flask REST backend enabling fast client-side inference"
    ],
    architecture: [
      "Vision Pipeline: OpenCV image preprocessing, normalization, and color-space augmentation",
      "Deep Learning Model: Deep Convolutional Neural Network (CNN) built in TensorFlow/Keras trained on 30K+ images",
      "API Layer: Flask web server exposing inference endpoints with JSON error handling and latency optimization",
      "Client Dashboard: Intuitive web UI with instant image upload, diagnostic heatmap, and treatment suggestions"
    ]
  },
  {
    id: "ddos-attack-detection",
    title: "DDoS Attack Detection Using LSTM",
    shortDescription: "Time-series network traffic analysis and anomaly detection system using LSTM deep learning architectures.",
    fullDescription: "A proactive cybersecurity intelligence system developed to detect volumetric and protocol-based Distributed Denial of Service (DDoS) attacks. Built with Python and Long Short-Term Memory (LSTM) neural networks, the system identifies anomalous network flow sequences that bypass standard firewall rule sets.",
    problem: "Modern sophisticated DDoS attacks exhibit dynamic, distributed packet signatures that evade static threshold-based firewalls, resulting in server downtime and service disruption.",
    solution: "Formulated DDoS detection as a sequential time-series anomaly problem. Extracted statistical packet flow features and trained an LSTM recurrent neural network to capture temporal flow dependencies and identify malicious surges in real time.",
    metrics: [
      "89% Detection accuracy on organizational network traffic",
      "Sequential time-series temporal modeling",
      "Sub-second packet sequence anomaly classification",
      "Zero reliance on static IP blacklists"
    ],
    technologies: [
      "Python",
      "TensorFlow / PyTorch",
      "LSTM Networks",
      "Pandas",
      "NumPy",
      "Scikit-learn"
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/204g1a0551",
    featured: true,
    highlights: [
      "Reached 89% anomaly detection accuracy on benchmark enterprise network traffic",
      "Modeled multi-step temporal dependencies across consecutive network packet bursts",
      "Engineered feature extraction pipeline for packet rate, protocol distribution, and byte entropy",
      "Robust against spoofed IP vectors due to behavioral flow sequence modeling"
    ],
    architecture: [
      "Ingestion & Preprocessing: Parsing packet capture files, computing sliding window metrics, and standardizing features with Scikit-learn",
      "Model Architecture: Multi-layer Long Short-Term Memory (LSTM) network with dropout regularization to prevent overfitting",
      "Evaluation & Thresholding: Dynamic statistical thresholding based on sequence loss deviation to trigger automated alert flags"
    ]
  }
];
