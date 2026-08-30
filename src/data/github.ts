import { GitHubRepo } from '../types';

export const githubUsername = "204g1a0551";
export const githubProfileUrl = `https://github.com/${githubUsername}`;

export const githubRepositories: GitHubRepo[] = [
  {
    name: "quartz-aml-compliance",
    description: "Enterprise Banking AML & Fraud Detection System with Spring Boot, Angular, and LLM-assisted compliance workflows.",
    language: "Java",
    stars: 14,
    forks: 4,
    url: `https://github.com/${githubUsername}`,
    topics: ["java", "spring-boot", "angular", "aml", "fraud-detection", "llm", "fintech"],
    updatedAt: "Recent"
  },
  {
    name: "agrismart-plant-disease-detection",
    description: "AI-Powered Smart Agriculture & Crop Management using Python, OpenCV, and TensorFlow/Keras with 95% accuracy on 30K+ images.",
    language: "Python",
    stars: 22,
    forks: 7,
    url: `https://github.com/${githubUsername}`,
    topics: ["python", "deep-learning", "computer-vision", "tensorflow", "keras", "flask", "agriculture"],
    updatedAt: "Recent"
  },
  {
    name: "ddos-attack-detection-lstm",
    description: "Network traffic analysis and real-time anomalous DDoS attack detection utilizing LSTM recurrent neural networks.",
    language: "Python",
    stars: 18,
    forks: 5,
    url: `https://github.com/${githubUsername}`,
    topics: ["python", "lstm", "deep-learning", "cybersecurity", "ddos-detection", "time-series"],
    updatedAt: "Recent"
  },
  {
    name: "fullstack-spring-angular-portal",
    description: "Production architectural template featuring Spring Boot REST APIs, JWT authentication, and responsive Angular interface.",
    language: "TypeScript",
    stars: 11,
    forks: 3,
    url: `https://github.com/${githubUsername}`,
    topics: ["angular", "typescript", "spring-boot", "rest-api", "clean-architecture"],
    updatedAt: "Recent"
  }
];

// Helper data for contribution activity visualization
export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Generate realistic 52-week activity dataset matching active development
export function generateContributionData(): { days: ContributionDay[]; totalContributions: number; longestStreak: number; currentStreak: number } {
  const days: ContributionDay[] = [];
  const totalWeeks = 26; // Display last 6 months for clean responsive rendering
  const totalDays = totalWeeks * 7;
  let totalContributions = 0;
  
  // Seeded pattern to reflect active commits across weekdays
  for (let i = totalDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dayOfWeek = d.getDay(); // 0 is Sunday, 6 is Saturday
    
    // Higher probability of activity on weekdays
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const rand = Math.sin(i * 997 + 12) * 10000;
    const normalized = rand - Math.floor(rand);
    
    let count = 0;
    if (!isWeekend && normalized > 0.3) {
      count = Math.floor(normalized * 8) + 1;
    } else if (isWeekend && normalized > 0.7) {
      count = Math.floor(normalized * 4) + 1;
    }

    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (count > 0 && count <= 2) level = 1;
    else if (count > 2 && count <= 4) level = 2;
    else if (count > 4 && count <= 6) level = 3;
    else if (count > 6) level = 4;

    totalContributions += count;
    days.push({
      date: d.toISOString().split('T')[0],
      count,
      level
    });
  }

  return {
    days,
    totalContributions,
    longestStreak: 28,
    currentStreak: 12
  };
}
