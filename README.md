# 🚀 3D Developer Portfolio — Mahesh Kumar Godela

A modern, high-performance, dark-themed **3D Developer Portfolio Website** for **Mahesh Kumar Godela** (Full Stack AI Engineer — Java, Spring Boot, Angular, Applied AI/ML).

Built strictly **frontend-only** with React, TypeScript, Vite, Tailwind CSS, Three.js / React Three Fiber, and Framer Motion. Zero backend required, 100% ready for deployment to **Vercel, Netlify, or GitHub Pages**.

---

## 🌟 Highlights & Key Features

* **Interactive 3D Hero Scene**: Custom Three.js / React Three Fiber scene featuring a dual-orbiting cybernetic core, dynamic light sources, responsive particle cloud, and pointer parallax with performance throttling (capped DPR, Suspense, and mobile fallback).
* **Animated Role Cycling**: Typewriter headline cycling through Full Stack AI Engineer, Java & Spring Boot Developer, Angular Specialist, and AI/ML Systems Engineer.
* **Filterable Projects Showcase**: Categorized by `ALL`, `FULL STACK`, `JAVA & SPRING BOOT`, `ANGULAR`, and `AI/ML` with interactive 3D perspective cards.
* **Architectural Deep-Dive Modals**: Click "View Architecture & Details" on any project to view comprehensive problem statements, solutions, system architecture breakdowns, and metrics.
* **Interactive Skill Matrix**: Categorized across Frontend, Backend, AI/ML & Generative AI, Databases, and Cloud/DevOps with an instant real-time search filter.
* **Experience Timeline**: Enterprise delivery history at **TCS** (12+ AML features, -80% false positives, 60% query speedup, 18 APIs) and mentorship history at **SRIT** (500+ students, 200 projects) with expandable achievement cards.
* **GitHub "Built in Public" & Heatmap**: Live repo showcases and an interactive 26-week contribution heatmap visualizer with streak analytics and cell inspection.
* **Verified Credentials**: Claude Certified Developer & AWS Certified Developer – Associate (DVA-C02) badges.
* **Seamless Contact & Resume**: Native mailto composer, 1-click clipboard copy for email & phone, and direct PDF download from `/public/resume.pdf`.
* **Clean Centralized Architecture**: All portfolio data is abstracted into TypeScript data files (`src/data/`) so you never have to modify component code to update your info.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework & Build** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Glassmorphism, Custom Neon/Glow utilities |
| **3D Graphics** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **Animations** | Framer Motion, CSS Keyframes |
| **Icons** | Lucide React |

---

## 📁 Clean Scalable Project Structure

```text
mahesh-portfolio/
│
├── public/
│   ├── favicon.svg                  # Glowing monogram SVG favicon
│   └── resume.pdf                   # Your downloadable PDF resume
│
├── src/
│   ├── assets/                      # Static media assets
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── HeroScene.tsx        # Three.js / R3F interactive geometric canvas
│   │   │   └── SceneFallback.tsx    # Lightweight animated fallback for mobile/reduced-motion
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx           # Glassmorphic sticky navbar with section spy & drawer
│   │   ├── Hero/
│   │   │   ├── Hero.tsx             # Hero section with headline, stats, CTAs & 3D canvas
│   │   │   └── RoleCycler.tsx       # Animated role cycling text component
│   │   ├── About/
│   │   │   ├── About.tsx            # Philosophy, credentials, education & leadership
│   │   │   └── JourneyTimeline.tsx  # Career milestone visualizer
│   │   ├── Skills/
│   │   │   ├── Skills.tsx           # Filterable technical skills grid with search
│   │   │   └── SkillCard.tsx        # Interactive skill card with project links
│   │   ├── Experience/
│   │   │   ├── Experience.tsx       # TCS & SRIT interactive enterprise timeline
│   │   │   └── ExperienceCard.tsx   # Expandable sprint metrics & responsibility card
│   │   ├── Projects/
│   │   │   ├── Projects.tsx         # Category filters and project grid
│   │   │   ├── ProjectCard.tsx      # 3D tilt card with metrics & code links
│   │   │   └── ProjectModal.tsx     # In-depth architectural modal
│   │   ├── GitHub/
│   │   │   ├── GitHubSection.tsx    # "Built in Public" repo showcase
│   │   │   └── ContributionHeatmap.tsx # Interactive commit activity heatmap
│   │   ├── Resume/
│   │   │   └── ResumeSection.tsx    # CV preview card & direct download
│   │   ├── Contact/
│   │   │   └── Contact.tsx          # Direct communication cards & mail composer
│   │   ├── Footer/
│   │   │   └── Footer.tsx           # Minimal copyright & back-to-top button
│   │   └── UI/
│   │       ├── SectionHeading.tsx   # Consistent section titles with badge
│   │       ├── Badge.tsx            # Glowing variant pills
│   │       └── CustomCursor.tsx     # Ethereal desktop pointer glow (touch-safe)
│   │
│   ├── data/
│   │   ├── profile.ts               # Personal info, contact, education, certifications
│   │   ├── skills.ts                # Categorized skill sets & project tags
│   │   ├── experience.ts            # TCS & SRIT verified milestones and metrics
│   │   ├── projects.ts              # Quartz AML, AgriSmart, DDoS Detection details
│   │   └── github.ts                # GitHub username, repos, and activity dataset
│   │
│   ├── hooks/
│   │   ├── useScrollSpy.ts          # Active section observer
│   │   └── usePrefersReducedMotion.ts # A11y motion preference detection
│   │
│   ├── types/
│   │   └── index.ts                 # Strict TypeScript models
│   │
│   ├── utils/
│   │   └── cn.ts                    # Classnames merger
│   │
│   ├── styles/
│   │   └── index.css                # Tailwind directives & glass classes
│   │
│   ├── App.tsx                      # Root application layout
│   └── main.tsx                     # Vite mounting entrypoint
│
├── index.html                       # SEO, meta tags, and font preconnects
├── package.json                     # Dependencies & scripts
├── tailwind.config.js               # Dark theme palette & animations
├── tsconfig.json                    # Strict TypeScript configuration
└── vite.config.ts                   # Chunk splitting & build optimizations
```

---

## ⚡ Quick Start (Local Development)

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
Creates an optimized, chunk-split production bundle inside `dist/`.

---

## 🔧 Where to Update Your Information

All information is strictly decoupled from UI components. To update any details:

### 1. Personal Details, Bio & Social Links
* File: `src/data/profile.ts`
* Update:
  * `name`, `titles` (roles cycled in hero)
  * `email`, `phone`, `location`
  * `about` and `objective`
  * `social` (GitHub, LinkedIn, LeetCode, email)
  * `education` and `certifications` (AWS, Claude)

### 2. Replace the Resume PDF
* File: `public/resume.pdf`
* Simply overwrite `public/resume.pdf` with your updated resume PDF file. Both the navbar button, hero button, and resume section will automatically download your new file!

### 3. Add or Edit Projects
* File: `src/data/projects.ts`
* Add new projects following the `Project` interface:
```typescript
{
  id: "your-project-id",
  title: "Project Name",
  shortDescription: "...",
  fullDescription: "...",
  problem: "...",
  solution: "...",
  metrics: ["Metric 1", "Metric 2"],
  technologies: ["Java", "Spring Boot", "Angular"],
  category: "Full Stack", // 'Full Stack' | 'Java & Spring Boot' | 'Angular' | 'AI/ML' | 'Security'
  githubUrl: "https://github.com/...",
  highlights: ["..."],
  architecture: ["Layer 1: ...", "Layer 2: ..."]
}
```

### 4. Technical Skills
* File: `src/data/skills.ts`
* Add or adjust skills under the corresponding category: Frontend, Backend, AI/ML, Database, or Cloud/Tools.

### 5. Work Experience
* File: `src/data/experience.ts`
* Add new positions, sprint achievements, or update TCS responsibilities.

### 6. GitHub Repositories
* File: `src/data/github.ts`
* Update `githubUsername = "204g1a0551"` or add new pinned repositories to `githubRepositories`.

---

## 🎨 Customizing the 3D Experience

The 3D Hero Scene is located in `src/components/3D/HeroScene.tsx`.
* **Geometry**: `CentralTechCore` uses a wireframe icosahedron and an inner crystalline octahedron. You can swap these with any Three.js geometry (`torusKnotGeometry`, `dodecahedronGeometry`, etc.).
* **Particle Count**: The `ParticleCloud` component accepts a `count` prop (default: `350`). Increase for denser stars or decrease for lower-end machines.
* **Colors**: Easily change the palette in `ParticleCloud` and `CentralTechCore` materials (e.g. `#06b6d4` cyan, `#6366f1` indigo, `#8b5cf6` violet).

---

## 🚀 Deployment Instructions

### Option A: Deploy to Vercel (Recommended — 2 Minutes)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of 3D portfolio"
   git branch -M main
   git remote add origin https://github.com/204g1a0551/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Done!

---

### Option B: Deploy to Netlify
1. Push your repository to GitHub.
2. Log into [Netlify](https://netlify.com) and select **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **"Deploy site"**.

---

### Option C: Deploy to GitHub Pages
1. In `vite.config.ts`, set the base path to match your repo name if needed:
   ```typescript
   export default defineConfig({
     base: '/portfolio/', // If deploying to https://204g1a0551.github.io/portfolio/
     plugins: [react()],
     // ...
   });
   ```
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 📄 License
MIT &copy; 2026 Mahesh Kumar Godela.
