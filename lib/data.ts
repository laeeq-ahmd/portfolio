// ─── Identity ─────────────────────────────────────────────────────────────────

export const identity = {
  name: "Laeeq Ahmed",
  taglines: ["Software Engineer", "AI Engineer", "Full Stack Developer"],
  location: "Pakistan",
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
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "ChromaDB", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    category: "AI / ML",
    skills: ["LangChain", "LangGraph", "RAG", "LLMs", "YOLOv8", "OpenCV", "XGBoost", "SMOTE", "PCA", "OpenRouter", "Fine-tuning"],
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
  visualType: "neural-network" | "cctv-feed" | "websocket-lines" | "chart" | "agent-graph";
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
    id: "viswam-ai",
    title: "Summer of AI — VisWAM",
    subtitle: "AI Model Development",
    description:
      "AI Developer role during the Summer of AI 2025 program at VisWAM AI (Swetha.IT). Built and fine-tuned AI models for accuracy and real-world effectiveness using structured workflows. Gained hands-on experience with Python, collaborative software development, and advanced AI engineering practices.",
    tech: ["Python", "LangChain", "LangGraph", "LLMs", "Fine-tuning", "DevOps", "Collaborative Dev"],
    visualType: "agent-graph",
    architectureNodes: [
      { id: "input", label: "Input", description: "Structured data and prompts", x: 50, y: 10 },
      { id: "langchain", label: "LangChain", description: "LLM orchestration framework", x: 50, y: 30 },
      { id: "langgraph", label: "LangGraph", description: "Stateful multi-agent graph", x: 50, y: 50 },
      { id: "llm", label: "LLM", description: "Fine-tuned language model", x: 30, y: 70 },
      { id: "output", label: "Output", description: "Evaluated model results", x: 70, y: 70 },
    ],
    architectureEdges: [
      { from: "input", to: "langchain" },
      { from: "langchain", to: "langgraph" },
      { from: "langgraph", to: "llm" },
      { from: "langgraph", to: "output" },
    ],
    metrics: [
      { label: "Framework", value: "LangChain" },
      { label: "Agents", value: "LangGraph" },
      { label: "Mode", value: "In-Person" },
      { label: "Program", value: "SoAI 2025" },
    ],
    github: "https://github.com/laeeq-ahmd/",
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
  {
    label: "Oracle Developer Professional",
    context: "Certification",
    description: "Earned the Oracle Developer Professional certification demonstrating proficiency in Oracle technologies.",
    certLink: "",
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
  careerx        - open CareerX AI details
  smartfire      - open SmartFirePredict details
  experience     - view experience timeline
  resume         - download resume PDF
  github         - open GitHub profile
  leetcode       - open LeetCode profile
  contact        - jump to contact section
  theme default  - reset terminal theme
  theme matrix   - matrix green theme
  theme cyberpunk- neon pink + yellow theme
  clear          - clear terminal history
  neofetch       - print system info
  cat hobbies.txt- [hidden] personal interests
  sudo hire laeeq- [hidden] ...`,

  about: `guest@laeeq:~$ whoami

Name:     Laeeq Ahmed
Role:     Software Engineer | AI Engineer | Full Stack Developer
Location: Pakistan
Focus:    Building AI Systems`,

  skills: `{
  "languages":   ["C++", "Java", "Python", "JavaScript"],
  "frontend":    ["React.js", "Next.js", "HTML5", "CSS3"],
  "backend":     ["FastAPI", "Node.js", "Express.js"],
  "databases":   ["MongoDB", "MySQL", "ChromaDB"],
  "cloud":       ["AWS", "Kubernetes", "Docker"],
  "ai_ml":       ["LangChain", "LangGraph", "RAG", "LLMs", "YOLOv8", "XGBoost"]
}`,

  projects: `Active mission modules:
  [1] CareerX AI        - AI Career Platform       [OPERATIONAL]
  [2] SmartFirePredict  - AI + IoT Fire Detection  [MONITORING]
  [3] Tic-Tac-Toe Plus  - Real-time Multiplayer    [ONLINE]
  [4] Finance Dashboard - Data Visualization UI    [ONLINE]
  [5] Summer of AI      - VisWAM AI Internship     [ONLINE]`,

  careerx: `MISSION MODULE: CareerX AI
  Stack: React, Node.js, MongoDB, ChromaDB, Docker, Kubernetes, LangChain
  RAG Accuracy:  87%
  Response Time: < 1.2s
  GitHub: https://github.com/laeeq-ahmd/`,

  smartfire: `MISSION MODULE: SmartFirePredict
  Stack: Python, FastAPI, YOLOv8, OpenCV, ESP32, AWS
  Detection:   94.2% accuracy
  Alert Time:  < 3s
  GitHub: https://github.com/laeeq-ahmd/`,

  experience: `Experience Timeline:
  [2025] AI Developer Intern — VisWAM AI (Summer of AI)
  [2024] AI/ML Intern — Infosys Springboard
  [2024] Global Rank 1130 — TCS CodeVita Season 13
  [2024] First Runner-Up — Sprint Hackathon
  [2024] Oracle Developer Professional — Certification`,

  resume: `Initiating download: resume.pdf
  [##########] 100%
  Done.`,

  github: "Opening: https://github.com/laeeq-ahmd/",
  leetcode: "Opening: https://leetcode.com/u/Laeeq-Ahmed/",
  contact: "Jumping to: #contact",

  neofetch: `
         ██████████        guest@laeeq
        ████      ████     -----------
       ████  ████  ████    OS:       Mission Control v3.0
       ████  ████  ████    Kernel:   React 19
       ████        ████    Uptime:   Building since 2022
        ████      ████     Shell:    TypeScript 5.x
         ██████████        DE:       Next.js App Router
                           Terminal: JetBrains Mono
                           CPU:      Software Engineer
                           AI:       LangChain + LangGraph
                           Memory:   Too many side projects`,

  "cat hobbies.txt": `Writing One Piece inspired light novels
and reading Urdu literature.`,

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
  { label: "careerx", description: "Open CareerX AI details", action: "open-careerx" },
  { label: "smartfire", description: "Open SmartFirePredict details", action: "open-smartfire" },
  { label: "github", description: "Open GitHub profile", action: "open-github" },
  { label: "leetcode", description: "Open LeetCode profile", action: "open-leetcode" },
  { label: "contact", description: "Jump to Contact section", action: "navigate-contact" },
  { label: "experience", description: "Jump to Experience section", action: "navigate-experience" },
];
