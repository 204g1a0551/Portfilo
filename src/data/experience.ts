import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: "tcs-full-stack-ai",
    company: "Tata Consultancy Services (TCS)",
    role: "Full Stack AI Engineer",
    location: "Whitefield, Bengaluru, Karnataka",
    period: "Feb 2025 — Present",
    type: "Full-time Enterprise",
    summary: "Spearheading end-to-end development of enterprise Anti-Money Laundering (AML) and fraud detection banking platforms using Java, Spring Boot, Angular, and applied AI models.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "REST APIs",
      "LLMs & GenAI",
      "Random Forest",
      "PostgreSQL",
      "Docker",
      "Git"
    ],
    responsibilities: [
      "Developed and enhanced AML and fraud detection features using Java, Spring Boot, Angular, and REST APIs, shipping 12+ features/releases across 6 sprints.",
      "Implemented 12 AML risk scenarios to identify suspicious customer activities and potential fraud, reducing false-positive flags by 80%.",
      "Integrated an LLM-powered chatbot to assist compliance officers with AML workflows, cutting average query resolution time by 60%.",
      "Worked on Random Forest-based risk analysis for customer risk assessment, improving model precision/recall to 78%.",
      "Fixed 60+ defects and developed 18 APIs, handling frontend-backend integration and core application enhancements.",
      "Performed proactive debugging, testing, and issue analysis, boosting application reliability and reducing production incidents by 50%.",
      "Provided technical support and knowledge transfer to 10 new team members, accelerating their onboarding into enterprise delivery pipelines.",
      "Engineered and integrated high-throughput REST APIs across multiple banking screens with Angular and Spring Boot for reliable data flow."
    ],
    achievements: [
      "Reduced false-positive risk flags by 80% through tailored transaction risk scenarios",
      "Achieved 60% reduction in query turnaround time with LLM workflow assistance",
      "Cut production incidents by 50% through rigorous debugging and API stabilization",
      "Delivered 12+ enterprise features across 6 consecutive sprint releases"
    ],
    metrics: [
      { label: "False Positive Reduction", value: "80%" },
      { label: "Query Resolution Speedup", value: "60%" },
      { label: "Sprint Releases Shipped", value: "12+ Features" },
      { label: "Defects Resolved", value: "60+" }
    ]
  },
  {
    id: "srit-technical-trainer",
    company: "Srinivasa Ramanujan Institute of Technology",
    role: "Technical Trainer",
    location: "Anantapur, Andhra Pradesh",
    period: "Jun 2024 — Jan 2025",
    type: "Academic / Technical Mentorship",
    summary: "Led comprehensive hands-on programming bootcamps and project mentorship for engineering students, specializing in Python, Java, Data Structures, and Django web architecture.",
    technologies: [
      "Python",
      "Java",
      "Django",
      "REST APIs",
      "Data Structures & Algorithms",
      "SQL",
      "Git"
    ],
    responsibilities: [
      "Conducted technical training sessions on Python, Java, and programming fundamentals for 500+ engineering students.",
      "Guided students in problem-solving, algorithmic thinking, and fundamental data structures, with 90% reporting improved coding proficiency.",
      "Assisted students with hands-on coding exercises and project development, mentoring 200 student projects to successful completion.",
      "Trained students in Django for full-stack web application development, covering models, views, templates, and REST API basics, guiding them through end-to-end mini-project implementations."
    ],
    achievements: [
      "Mentored and guided 200 student software projects through complete delivery",
      "90% of 500+ students reported measurable gains in coding proficiency and interview readiness",
      "Designed real-world curriculum bridging algorithmic problem solving and web development"
    ],
    metrics: [
      { label: "Students Trained", value: "500+" },
      { label: "Projects Mentored", value: "200" },
      { label: "Proficiency Uplift", value: "90%" }
    ]
  }
];
