export const profileData = {
  name: "Pratham Vidhani",
  title: "Software Engineer",
  location: "Open for Software Engineer, Software Developer & Backend Developer Roles • India & Remote",
  email: "prathamvidhani239@gmail.com",
  phone: "+91-9325374197",
  bioHeadline: "Architecting high-throughput backend services, reactive gateways, and local-first RAG pipelines.",
  bioSub: "Specialized in Java distributed systems (Spring Cloud Gateway, Project Reactor, Redis, Netty), low-level C++ desktop compute engines, and cost-optimized RAG architectures (LangChain, pgvector, Ollama). Co-authored IEEE research and solved DSA & problem-solving challenges in C++.",
  links: {
    github: "https://github.com/PrathamV239",
    linkedin: "https://linkedin.com/in/prathamvidhani",
    leetcode: "https://leetcode.com/u/PrathamV239/",
    ieeePaper: "https://ieeexplore.ieee.org/document/11330381",
    resume: "/Pratham_Vidhani_Resume.pdf"
  },
  metrics: [
    { value: "DSA", label: "Problem Solving in C++", spec: "LeetCode & Codeforces" },
    { value: "IEEE", label: "Published Researcher", spec: "Deep Learning ML Paper" },
    { value: "20 req/s", label: "Reactive Rate Limiting", spec: "Spring Cloud + Redis" },
    { value: "60%+", label: "LLM Inference Saved", spec: "Redis Vector Semantic Cache" },
    { value: "<100ms", label: "Live Concurrency Sync", spec: "Spring WebSocket + Redis" }
  ]
};

export const projectsData = [
  {
    id: "reactive-api-gateway",
    number: "01",
    title: "Reactive API Gateway",
    subtitle: "High-Throughput Non-Blocking Edge Router",
    category: "Distributed Systems & Backend",
    summary: "Architected a non-blocking API Gateway using Spring Cloud Gateway and Netty, enforcing per-route rate limits via Redis sliding window scripts and fault-tolerant Resilience4J circuit breakers.",
    architectureHighlight: "Enforces 20 req/sec per-route rate limits using Lua-backed Redis sliding windows and exports observability telemetry across 5 endpoints with sub-15s failure detection.",
    techStack: ["Java 17", "Spring Boot 3", "Spring Cloud Gateway", "Project Reactor", "Redis", "Resilience4j", "Netty", "Docker"],
    highlights: [
      "Per-route sliding window rate limiting capped at 20 req/sec using Redis-backed policies.",
      "Non-blocking observability pipeline capturing 7 telemetry metadata fields per request.",
      "Resilience4j circuit breakers providing sub-15-second failure detection across 5 endpoints."
    ],
    github: "https://github.com/PrathamV239/Reactive-API-Gateway",
    demoAvailable: true,
    diagramType: "gateway"
  },
  {
    id: "document-intelligence-api",
    number: "02",
    title: "Document Intelligence RAG API",
    subtitle: "Local-First RAG Engine with Semantic Caching",
    category: "AI / ML Pipelines & Vector Search",
    summary: "A production-grade Retrieval-Augmented Generation (RAG) system with LangChain and pgvector, featuring a Redis semantic cache that cuts LLM inference costs by 60%+.",
    architectureHighlight: "Queries check a vector semantic cache before hitting the LLM model. Local execution via Ollama (Llama 3.1 & nomic-embed-text) ensures 100% data privacy and zero API costs.",
    techStack: ["FastAPI", "LangChain", "pgvector", "PostgreSQL", "Redis", "Ollama", "Docker", "OpenAI API", "AWS EC2"],
    highlights: [
      "Semantic vector search with exact source citations across 500+ indexed PDF documents.",
      "Cut LLM inference costs by 60%+ using a Redis vector semantic cache for repeated queries.",
      "Chain-of-thought prompting for high accuracy on calculation-heavy date ranges and durations.",
      "Deployed 3-service FastAPI architecture on AWS EC2 with JWT authentication."
    ],
    github: "https://github.com/PrathamV239/Document-Intelligence-API",
    demoAvailable: true,
    diagramType: "rag"
  },
  {
    id: "collaborative-task-board",
    number: "03",
    title: "Real-Time Collaborative Task Board",
    subtitle: "Distributed Microservices Kanban Engine",
    category: "Real-Time Distributed Systems",
    summary: "Real-time Kanban board syncing card and column state live across 10 concurrent users with sub-100ms latency, resolved using a 3-node Redis Pub/Sub cluster.",
    architectureHighlight: "Resolves concurrent drag-and-drop race conditions by broadcasting state changes across 3 containerized Spring Boot backend instances using Redis Pub/Sub.",
    techStack: ["Java 17", "Spring Boot", "WebSocket", "Redis Pub/Sub", "PostgreSQL", "React", "Docker", "JWT"],
    highlights: [
      "Live WebSocket state synchronization supporting 10 concurrent active users with sub-100ms latency.",
      "Redis Pub/Sub layer broadcasting state across 3 containerized backend instances.",
      "Persisted state across 15+ boards with PostgreSQL and drag-and-drop React frontend."
    ],
    github: "https://github.com/PrathamV239/Real-Time-Collaborative-Task-Board",
    demoAvailable: true,
    diagramType: "websocket"
  },
  {
    id: "interview-ai",
    number: "04",
    title: "Interview AI — Job Prep Platform",
    subtitle: "Schema-Validated Full-Stack Gen-AI Web App",
    category: "Full-Stack AI Engineering",
    summary: "Full-stack application analyzing resumes against job descriptions to generate 0-100 match scores, technical/behavioral prep reports, and ATS-friendly PDF resumes.",
    architectureHighlight: "Uses Google Gemini with Zod schema validation for strict JSON type safety, alongside server-side Puppeteer rendering for PDF generation.",
    techStack: ["React 19", "Vite", "Node.js", "Express 5", "MongoDB", "Gemini API", "Zod", "Puppeteer", "JWT"],
    highlights: [
      "Skill-gap severity rating (Low/Med/High) and structured day-by-day prep roadmap.",
      "Automated ATS-friendly resume generation rendered to PDF via Puppeteer headless browser.",
      "JWT session security with token blacklisting on logout and cookie handling."
    ],
    github: "https://github.com/PrathamV239/MERN-Gen-AI-Job-Preparation-Web-App",
    demoAvailable: true,
    diagramType: "fullstack"
  },
  {
    id: "ai-code-reviewer",
    number: "05",
    title: "AI Code Reviewer Engine",
    subtitle: "Intelligent Static Analysis & Code Quality Inspector",
    category: "Developer Tools & AI",
    summary: "Web application offering instant AI code reviews on syntax, logic bugs, security vulnerabilities, and maintainability using Google Gemini 2.0 Flash.",
    architectureHighlight: "Structured Express backend routing incoming code submissions to Gemini AI with real-time markdown and Prism.js syntax highlighting.",
    techStack: ["React", "Express.js", "Gemini 2.0 Flash", "Prism.js", "Rehype", "Markdown"],
    highlights: [
      "Real-time code editing with syntax highlighting and instant AI diagnostic feedback.",
      "Senior reviewer persona analysis focusing on async execution, security, and refactoring."
    ],
    github: "https://github.com/PrathamV239/AI-CodeReviewer-MERN",
    demoAvailable: true,
    diagramType: "codereview"
  }
];

export const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Tektutor",
    period: "Feb 2026 – Jul 2026",
    location: "Remote",
    type: "Internship",
    description: "Engineered desktop computing solutions and normalized data workflows in C++ and Qt6.",
    bulletPoints: [
      "Built a cross-platform desktop invoicing application in C++ and Qt6, replacing a manual spreadsheet workflow and cutting invoice processing time by 40%.",
      "Engineered an event-driven tax and computation system across 6 normalized SQLite tables, enabling instant invoice recalculation and cutting generation time by 60%.",
      "Built a PDF generation pipeline supporting 1–50+ line items per invoice, delivering a fully offline-capable billing solution."
    ],
    skills: ["C++", "Qt6", "SQLite", "Desktop Architecture", "Event-Driven Systems", "Offline Computing"]
  },
  {
    role: "Software Engineer",
    company: "Amari AI",
    period: "Sep 2025 – Jan 2026",
    location: "Remote",
    type: "Full-time",
    description: "Maintained production AI document extraction pipelines, resolving incidents and standardizing team SOPs.",
    bulletPoints: [
      "Debugged and resolved 80–100 daily pipeline errors in a production AI document-extraction system, sustaining 99%+ data accuracy across 1,000+ documents weekly.",
      "Cut recurring pipeline failures by 90%+ through root-cause analysis, directly reducing manual rework and downstream data-quality escalations.",
      "Standardized error-resolution workflows across the SDLC by authoring 15+ SOPs and leading GitHub PR reviews, cutting onboarding time for new team members."
    ],
    skills: ["AI Operations", "Pipeline Debugging", "Root-Cause Analysis", "Data Accuracy", "SOP Authoring", "GitHub Code Reviews"]
  }
];

export const publicationData = {
  title: "Machine Learning Approaches for Precision Crop Water Estimation: A Comparative Analysis",
  publisher: "IEEE — 2025 4th International Conference on Communication & Computing",
  link: "https://ieeexplore.ieee.org/document/11330381",
  authors: ["Vetriselvi T", "Nikita Prashant Singh", "Nitesh Jeganathan", "Pratham Harish Vidhani", "Deepa K"],
  abstract: "This research presents a scalable smart irrigation framework utilizing the Penman-Monteith equation (ETo) combined with crop-specific coefficients (Kc) and LSTM deep learning models. Synthetic data augmentation via Genetic Algorithms (GA: population 50, 100 generations, 0.8 crossover) preserved seasonal autocorrelation, producing substantial improvements in prediction accuracy over traditional baseline models.",
  keyTech: ["LSTM Networks", "Penman-Monteith Equation", "Genetic Algorithms (GA)", "Evapotranspiration Modeling", "Time Series Forecasting"]
};

export const certificatesData = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    accreditation: "ANSI Accredited ISO/IEC 17024 Personnel Certification",
    certId: "ECC2758019463",
    date: "Jan 07, 2024 — Expiry Jan 06, 2027",
    category: "Cybersecurity & Security Audit",
    verified: true
  },
  {
    title: "Wildlife Ecology (Elite Certified — 97%)",
    issuer: "NPTEL / IIT Kanpur (SWAYAM - Govt. of India)",
    accreditation: "Scored 97% (Top Ranker out of 13,415 certified candidates)",
    certId: "NPTEL23BT55S545400086",
    date: "Jul – Oct 2023",
    category: "Academic & Environmental Analytics",
    verified: true
  },
  {
    title: "AI for Cyber Security with IBM QRadar",
    issuer: "SmartBridge / SmartInternz / IBM NEAT",
    accreditation: "National Educational Alliance for Technology",
    certId: "Ext-AICS-2024-77026",
    date: "Jan 09, 2024",
    category: "AI & Threat Intelligence",
    verified: true
  },
  {
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn Learning",
    accreditation: "Professional Course Completion",
    certId: "78220bf0f357f753bab20158dd8a9a58060283d973fcae84769f998cda1c4bc5",
    date: "Aug 24, 2025",
    category: "Data Analytics",
    verified: true
  }
];

export const educationData = {
  degree: "B.Tech – Computer Science and Engineering",
  institution: "Vellore Institute of Technology (VIT), Vellore",
  period: "Sep 2021 – Aug 2025",
  coursework: ["Data Structures & Algorithms", "Operating Systems", "Object-Oriented Programming (OOP)", "Computer Networks", "Database Management Systems"]
};

