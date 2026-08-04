// ─── Identity ─────────────────────────────────────────────────────────────────

export const identity = {
  name: "Laeeq Ahmed",
  taglines: ["Software Engineer", "AI Engineer", "Full Stack Developer"],
  location: "India",
  bio: "Building AI-powered systems, cloud-native backends, and full-stack products that solve real problems.",
  profiles: [
    { label: "github", url: "https://github.com/laeeq-ahmd/", command: "Execute: github" },
    { label: "leetcode", url: "https://leetcode.com/u/Laeeq-Ahmed/", command: "Execute: leetcode" },
    { label: "codeforces", url: "https://codeforces.com/profile/laeeqahmed", command: "Execute: codeforces" },
  ],
  resumeUrl: "/resume.pdf",
};

// ─── Boot Sequence ─────────────────────────────────────────────────────────────

export const bootSequence = [
  { label: "Loading React", duration: 180 },
  { label: "Loading AI Modules", duration: 200 },
  { label: "Connecting GitHub", duration: 160 },
  { label: "Calibrating Systems", duration: 190 },
];

// ─── Mission Objectives ────────────────────────────────────────────────────────

export const missionObjectives = [
  { text: "Build scalable backend systems", completed: true },
  { text: "Ship AI-powered products", completed: true },
  { text: "Engineer cloud-native software", completed: true },
  { text: "Solve complex algorithmic problems", completed: true },
  { text: "Deploy production-grade applications", completed: true },
  { text: "Continue building", completed: false },
];

// ─── Skills ────────────────────────────────────────────────────────────────────

export const skillCategories = [
  {
    category: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "ChromaDB", "PostgreSQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    category: "AI / ML",
    skills: ["LangChain", "LangGraph", "RAG", "LLMs", "Gemini API"],
  },
];

export const techRadar = [
  { axis: "Backend", level: 90 },
  { axis: "AI / ML", level: 88 },
  { axis: "Frontend", level: 78 },
  { axis: "Cloud/DevOps", level: 72 },
  { axis: "Databases", level: 70 },
];

// ─── Projects ──────────────────────────────────────────────────────────────────

export type ArchNode = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
};

export type ArchEdge = {
  from: string;
  to: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  visualType: "neural-network" | "cctv-feed" | "websocket-lines" | "chart" | "calendar";
  architectureNodes: ArchNode[];
  architectureEdges: ArchEdge[];
  metrics: { label: string; value: string }[];
  github: string;
  live?: string;
  status: "OPERATIONAL" | "MONITORING" | "ONLINE";
};

export const projects: Project[] = [
  {
    id: "careerx",
    title: "CareerX AI",
    subtitle: "AI Career Platform",
    description:
      "A full-stack AI-powered career platform using RAG pipelines and LLM integration via OpenRouter. Users get personalized career guidance, resume analysis, and job matching powered by ChromaDB vector search and real-time LLM inference.",
    tech: ["React", "Node.js", "Express", "MongoDB", "ChromaDB", "Docker", "Kubernetes", "OpenRouter", "LangChain", "RAG"],
    visualType: "neural-network",
    architectureNodes: [
      { id: "user", label: "User", description: "End user interacting with the platform", x: 50, y: 10 },
      { id: "nextjs", label: "Next.js", description: "React-based frontend with SSR", x: 50, y: 25 },
      { id: "node", label: "Node API", description: "Express REST backend handling auth and requests", x: 50, y: 40 },
      { id: "mongo", label: "MongoDB", description: "Primary database for user data and sessions", x: 20, y: 55 },
      { id: "openrouter", label: "OpenRouter", description: "LLM gateway supporting multiple AI models", x: 50, y: 55 },
      { id: "chroma", label: "ChromaDB", description: "Vector database for RAG embedding search", x: 80, y: 55 },
      { id: "llm", label: "LLM", description: "Large Language Model for generation and reasoning", x: 50, y: 70 },
    ],
    architectureEdges: [
      { from: "user", to: "nextjs" },
      { from: "nextjs", to: "node" },
      { from: "node", to: "mongo" },
      { from: "node", to: "openrouter" },
      { from: "node", to: "chroma" },
      { from: "openrouter", to: "llm" },
      { from: "chroma", to: "llm" },
    ],
    metrics: [
      { label: "RAG Accuracy", value: "87%" },
      { label: "Response Latency", value: "< 1.2s" },
      { label: "Docker Containers", value: "3" },
      { label: "K8s Pods", value: "Deployed" },
    ],
    github: "https://github.com/laeeq-ahmd/",
    status: "OPERATIONAL",
  },
  {
    id: "smartfire",
    title: "SmartFirePredict",
    subtitle: "AI + IoT Fire Detection",
    description:
      "Real-time fire detection system using YOLOv8 computer vision over CCTV feeds, processed through a FastAPI backend. Alerts are dispatched via Twilio SMS and Telegram bot to ESP32 IoT sensors for physical alarm triggering.",
    tech: ["Python", "FastAPI", "YOLOv8", "OpenCV", "ESP32", "AWS", "Twilio", "Telegram Bot API"],
    visualType: "cctv-feed",
    architectureNodes: [
      { id: "cam", label: "Camera", description: "CCTV feed input source", x: 50, y: 10 },
      { id: "yolo", label: "YOLOv8", description: "Real-time object detection model", x: 50, y: 25 },
      { id: "fastapi", label: "FastAPI", description: "Python backend processing detection events", x: 50, y: 40 },
      { id: "esp32", label: "ESP32", description: "IoT microcontroller for physical alarm", x: 20, y: 55 },
      { id: "twilio", label: "Twilio", description: "SMS alert gateway", x: 50, y: 55 },
      { id: "telegram", label: "Telegram", description: "Bot notification channel", x: 80, y: 55 },
    ],
    architectureEdges: [
      { from: "cam", to: "yolo" },
      { from: "yolo", to: "fastapi" },
      { from: "fastapi", to: "esp32" },
      { from: "fastapi", to: "twilio" },
      { from: "fastapi", to: "telegram" },
    ],
    metrics: [
      { label: "Detection Accuracy", value: "94.2%" },
      { label: "Alert Latency", value: "< 3s" },
      { label: "IoT Sensors", value: "ESP32" },
      { label: "Infrastructure", value: "AWS" },
    ],
    github: "https://github.com/laeeq-ahmd/",
    status: "MONITORING",
  },
  {
    id: "tictactoe",
    title: "Tic-Tac-Toe Plus",
    subtitle: "Real-time Multiplayer",
    description:
      "A real-time multiplayer Tic-Tac-Toe game with persistent WebSocket connections via Socket.io. Features room-based matchmaking, live game state synchronization, and a spectator mode.",
    tech: ["Node.js", "Socket.io", "Express", "CSS3"],
    visualType: "websocket-lines",
    architectureNodes: [
      { id: "p1", label: "Player 1", description: "Browser client — game initiator", x: 20, y: 20 },
      { id: "p2", label: "Player 2", description: "Browser client — game joiner", x: 80, y: 20 },
      { id: "server", label: "Node Server", description: "Express + Socket.io game server", x: 50, y: 55 },
    ],
    architectureEdges: [
      { from: "p1", to: "server" },
      { from: "p2", to: "server" },
    ],
    metrics: [
      { label: "Protocol", value: "WebSocket" },
      { label: "Sync Latency", value: "< 50ms" },
      { label: "Rooms", value: "Dynamic" },
      { label: "Spectator Mode", value: "Live" },
    ],
    github: "https://github.com/laeeq-ahmd/",
    status: "ONLINE",
  },
  {
    id: "finance",
    title: "Finance Dashboard",
    subtitle: "Data Visualization UI",
    description:
      "A clean, data-rich finance dashboard with animated charts, portfolio tracking, and real-time market data visualization. Built with a focus on UI/UX excellence and performant data rendering.",
    tech: ["React", "CSS3", "Chart.js", "JavaScript"],
    visualType: "chart",
    architectureNodes: [
      { id: "ui", label: "React UI", description: "Component-based dashboard interface", x: 50, y: 20 },
      { id: "charts", label: "Chart.js", description: "Data visualization layer", x: 30, y: 50 },
      { id: "api", label: "Market API", description: "External financial data source", x: 70, y: 50 },
    ],
    architectureEdges: [
      { from: "ui", to: "charts" },
      { from: "ui", to: "api" },
    ],
    metrics: [
      { label: "Chart Types", value: "6+" },
      { label: "Data Points", value: "1000+" },
      { label: "Load Time", value: "< 0.8s" },
      { label: "UI Components", value: "20+" },
    ],
    github: "https://github.com/laeeq-ahmd/",
    status: "ONLINE",
  },
  {
    id: "recallhub",
    title: "RecallHub",
    subtitle: "DSA Problem Tracker",
    description:
      "A full-stack DSA problem tracker that lets you log problems you solve each day and revisit them for revision. Features a calendar view where each date shows the problems solved that day — click any date to review your solutions. Powered by Gemini API + RAG + LangGraph for AI-assisted revision chat, with Redis for persistent chat history.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "RAG", "LangGraph", "Redis"],
    visualType: "calendar",
    architectureNodes: [
      { id: "ui", label: "React UI", description: "Calendar + problem log interface", x: 50, y: 15 },
      { id: "api", label: "Node API", description: "Express REST backend", x: 50, y: 40 },
      { id: "db", label: "MongoDB", description: "Problem storage", x: 20, y: 65 },
      { id: "redis", label: "Redis", description: "Chat history", x: 50, y: 65 },
      { id: "gemini", label: "Gemini API", description: "RAG + LangGraph revision chat", x: 80, y: 65 },
    ],
    architectureEdges: [
      { from: "ui", to: "api" },
      { from: "api", to: "db" },
      { from: "api", to: "redis" },
      { from: "api", to: "gemini" },
    ],
    metrics: [
      { label: "AI", value: "Gemini" },
      { label: "Memory", value: "Redis" },
      { label: "Pipeline", value: "RAG" },
      { label: "Agents", value: "LangGraph" },
    ],
    github: "https://github.com/laeeq-ahmd/RecallHub",
    status: "ONLINE",
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────

export const experience = [
  {
    id: "viswam",
    role: "AI Developer Intern",
    company: "VisWAM AI",
    period: "June 2025 — Present",
    type: "Internship",
    description:
      "AI Developer intern as part of the Summer of AI 2025 (SoAI) program organized by VisWAM AI (Swetha.IT). Built and evaluated AI models, worked on LangChain and LangGraph pipelines, fine-tuned LLMs, and developed real-world AI applications.",
    tags: ["Python", "LangChain", "LangGraph", "LLMs", "Fine-tuning", "AI Engineering"],
    certLink: "https://drive.google.com/file/d/13nWf3zYjxB01nV1RIVbpg-pgETimon_0/view?usp=drive_link",
    certLabel: "Offer Letter",
  },
  {
    id: "infosys",
    role: "AI/ML Intern",
    company: "Infosys Springboard",
    period: "2024",
    type: "Internship",
    description:
      "Built a Python data pipeline for exoplanet habitability classification. Applied PCA for dimensionality reduction, SMOTE for class imbalance handling, and XGBoost ensemble models. Achieved production-ready accuracy on imbalanced astronomical datasets.",
    tags: ["Python", "PCA", "SMOTE", "XGBoost", "Data Pipeline", "ML"],
    certLink: "https://drive.google.com/file/d/1XZDuXxoaFIAWBUeTY-yug-t14VxE5vwH/view?usp=drive_link",
    certLabel: "Certificate",
  },
];

// ─── Achievements ──────────────────────────────────────────────────────────────

export const achievements = [
  {
    label: "Global Rank 1130",
    context: "TCS CodeVita Season 13",
    description: "Ranked 1130 globally out of hundreds of thousands of participants in one of Asia's largest competitive programming contests.",
    certLink: "https://drive.google.com/file/d/17UidantMy7WmqBDIwY0CAgx1Oblep2ZA/view?usp=sharing",
  },
  {
    label: "First Runner-Up",
    context: "Sprint Hackathon",
    description: "Secured first runner-up position at the Sprint Hackathon, competing against teams across multiple institutions.",
    certLink: "https://drive.google.com/file/d/1LS_oYYtRDWcpAVx_zEhhfNoa5Dkt1Lmy/view?usp=drive_link",
  },
  {
    label: "Best Project Poster",
    context: "Inter-Dept Major Project Presentation",
    description: "Presented a major interdepartmental project poster, recognized for technical depth and innovation.",
    certLink: "https://drive.google.com/file/d/1ULUg-jlEPds7P6HX-RhArRQvR1imBV5K/view?usp=sharing",
  },
];

// ─── Certifications ────────────────────────────────────────────────────────────

export const certifications = [
  {
    label: "Oracle Developer Professional",
    context: "Oracle Certification",
    description: "Earned the Oracle Developer Professional certification demonstrating proficiency in Oracle development.",
    certLink: "https://drive.google.com/file/d/1EQHO-i1DxxN1o47x0x_HEjYwT9OT8Vj4/view?usp=sharing",
  },
  {
    label: "Oracle Generative AI Professional",
    context: "Oracle Certification",
    description: "Certified in Oracle Generative AI, covering LLM fundamentals, prompt engineering, and AI application development.",
    certLink: "https://drive.google.com/file/d/12StWrgHuQvH8hFpbxwXZuYLrr1fMMM2q/view?usp=sharing",
  },
  {
    label: "Oracle Data Science Professional",
    context: "Oracle Certification",
    description: "Certified in Oracle Data Science, covering machine learning pipelines, model training, and data analysis workflows.",
    certLink: "https://drive.google.com/file/d/1qfKosWkVZmyURC30S8Uf3N4X79JdND49/view?usp=sharing",
  },
];

// ─── Education ─────────────────────────────────────────────────────────────────

export const education = [
  {
    id: "be",
    degree: "B.E. Computer Science",
    institution: "Matrushri Engineering College",
    period: "2022 — 2026",
    grade: "8.23 CGPA",
    gradeLabel: "CGPA",
    current: true,
  },
  {
    id: "xii",
    degree: "Class XII",
    institution: "MS Junior College",
    period: "2022",
    grade: "96.6%",
    gradeLabel: "Score",
    current: false,
  },
  {
    id: "x",
    degree: "Class X",
    institution: "MS Creative School",
    period: "2020",
    grade: "10 / 10",
    gradeLabel: "CGPA",
    current: false,
  },
];

// ─── Metrics ───────────────────────────────────────────────────────────────────

export const metrics = [
  { label: "REST APIs", value: 15, suffix: "+" },
  { label: "CI/CD Pipelines", value: 2, suffix: "" },
  { label: "Deployments", value: 20, suffix: "+" },
  { label: "Projects", value: 8, suffix: "" },
  { label: "GitHub Repos", value: 25, suffix: "+" },
  { label: "Tech Stack", value: 20, suffix: "+" },
];

// ─── Terminal Commands ──────────────────────────────────────────────────────────

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  help           - list all commands
  about          - print identity
  skills         - list technical skills
  projects       - list all projects
  experience     - view experience timeline
  education      - view education
  achievements   - view achievements
  certifications - view certifications
  resume         - download resume PDF
  github         - open GitHub profile
  leetcode       - open LeetCode profile
  contact        - jump to contact section
  theme default  - reset terminal theme
  theme matrix   - matrix green theme
  theme cyberpunk- neon pink + yellow theme
  clear          - clear terminal history
  neofetch       - print system info
  sudo hire laeeq- [hidden] ...`,

  about: `guest@laeeq:~$ whoami

Name:     Laeeq Ahmed
Role:     Software Engineer | AI Engineer | Full Stack Developer
Location: India
Focus:    Building AI Systems`,

  skills: `{
  "languages":   ["C++", "Java", "Python", "JavaScript"],
  "frontend":    ["React.js", "HTML5", "CSS3"],
  "backend":     ["FastAPI", "Node.js", "Express.js"],
  "databases":   ["MongoDB", "MySQL", "ChromaDB", "Redis"],
  "cloud":       ["AWS", "Kubernetes", "Docker"],
  "ai_ml":       ["LangChain", "LangGraph", "RAG", "LLMs", "Gemini API"]
}`,

  projects: `Active repos:
  [1] Tic-Tac-Toe Plus  - Real-time Multiplayer    [ONLINE]
  [2] Finance Dashboard - Data Visualization UI    [ONLINE]
  [3] RecallHub         - DSA Problem Tracker      [ONLINE]
  → github.com/laeeq-ahmd`,

  experience: `Experience Timeline:
  [2025] AI Developer Intern — VisWAM AI (SoAI 2025)
  [2024] AI/ML Intern — Infosys Springboard`,

  education: `Education:
  [2022-2026] B.E. Computer Science — Matrushri Engineering College  CGPA: 8.23
  [2022]      Class XII — MS Junior College                          Score: 96.6%
  [2020]      Class X  — MS Creative School                         CGPA: 10/10`,

  achievements: "Navigating to achievements...",
  certifications: "Navigating to certifications...",

  resume: `Initiating download: resume.pdf
  [##########] 100%
  Done.`,

  github: "Opening: https://github.com/laeeq-ahmd/",
  leetcode: "Opening: https://leetcode.com/u/Laeeq-Ahmed/",
  contact: "Navigating to contact — closing terminal...",

  neofetch: `
         ██████████        guest@laeeq
        ████      ████     -----------
       ████  ████  ████    OS:       Mission Control v3.0
       ████  ████  ████    Kernel:   React 19
       ████        ████    Uptime:   Building since 2022
        ████      ████     Shell:    JavaScript
         ██████████        DE:       React App Router
                           Terminal: JetBrains Mono
                           CPU:      Software Engineer
                           AI:       LangChain + LangGraph
                           Memory:   Too many side projects`,

  "sudo hire laeeq": `[sudo] password for recruiter: ********
Verifying credentials...
Permission granted.
Welcome aboard.`,

  clear: "__CLEAR__",
};

// ─── Command Palette Items ─────────────────────────────────────────────────────

export const commandPaletteItems = [
  { label: "resume", description: "Download PDF resume", action: "download-resume" },
  { label: "projects", description: "Jump to Projects section", action: "navigate-projects" },
  { label: "experience", description: "Jump to Experience section", action: "navigate-experience" },
  { label: "education", description: "Jump to Education section", action: "navigate-education" },
  { label: "achievements", description: "Jump to Achievements section", action: "navigate-achievements" },
  { label: "certifications", description: "Jump to Certifications section", action: "navigate-certifications" },
  { label: "contact", description: "Jump to Contact section", action: "navigate-contact" },
  { label: "github", description: "Open GitHub profile", action: "open-github" },
  { label: "leetcode", description: "Open LeetCode profile", action: "open-leetcode" },
];
