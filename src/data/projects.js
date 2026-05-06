const projects = [
  {
    title: "FraudGuard",

    description:
      "A real-time transaction monitoring system that detects fraudulent activity using a machine learning model, built with a microservices architecture and deployed on AWS.",

    tech: ["React", "Node.js", "PostgreSQL", "Python", "Docker", "AWS"],

    problem: [
      "Financial systems process thousands of transactions in real time.",
      "Manual fraud detection is not scalable.",
      "Rule-based systems fail to adapt to evolving fraud patterns.",
      "Need for an intelligent, real-time detection system.",
    ],

    approach: [
      "Designed a microservices-based architecture.",
      "Separated frontend, backend, ML service, and database.",
      "Backend sends transactions to ML service for classification.",
      "Frontend polls backend for real-time updates.",
      "Supports both real and simulated transaction data.",
    ],

    architecture: [
      "React frontend communicates with Node.js backend via REST APIs.",
      "Backend interacts with Python ML service for predictions.",
      "PostgreSQL stores transactions and results.",
      "Dockerized services using Docker Compose.",
      "Deployed on AWS EC2 with auto-restart for reliability.",
    ],

    challenges: [
      "Maintaining low latency across multiple services.",
      "Ensuring reliable communication between backend and ML service.",
      "Managing consistent data flow across distributed components.",
      "Handling container orchestration and environment configs on AWS.",
    ],

    impact:
      "Demonstrates a scalable approach to real-time fraud detection, similar to systems used in financial platforms, with live monitoring, ML-based classification, and production-style deployment on AWS.",

    video: "/fraudguard-demo.mp4",

    github:
      "https://github.com/ghanashyamd12/FraudGuard---Transaction-Monitoring-System",

    live: "http://65.1.114.40:5173",

    images: [
      {
        src: "/fraudguard/login.png",
        title: "Admin Authentication",
        desc: "Secure login interface with demo credentials for testing.",
      },
      {
        src: "/fraudguard/dashboard.png",
        title: "Dashboard Overview",
        desc: "Displays key metrics with fraud vs safe visualization using a pie chart.",
      },
      {
        src: "/fraudguard/recent.png",
        title: "Recent Transactions",
        desc: "Live feed showing recent transactions with fraud classification.",
      },
      {
        src: "/fraudguard/transactions.png",
        title: "Transactions Monitoring",
        desc: "Detailed transaction table with filtering, fraud status, and scoring.",
      },
      {
        src: "/fraudguard/alerts.png",
        title: "Fraud Alerts",
        desc: "Highlights high-risk transactions with reasons and fraud scores.",
      },
    ],
  },

  {
    title: "Intelligent Learning Path Generator",
    description:
      "Full-stack system that generates personalized learning roadmaps and tracks user progress dynamically.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    status: "In Progress",
  },

  {
    
  title: "API Rate Limiter",

  description:
    "A scalable backend traffic control system built using Spring Boot and Redis that implements the Token Bucket algorithm for dynamic API request throttling and real-time rate limit enforcement.",

  tech: [
    "Java",
    "Spring Boot",
    "Redis",
    "React",
    "REST APIs",
    "Vercel",
    "Render",
  ],

  problem: [
  "Modern APIs need protection against spam requests and traffic abuse.",
  "Without rate limiting, excessive requests can overload backend services.",
  "Different users often require different request limits based on usage plans.",
  "The system needed to handle burst traffic smoothly instead of blocking requests abruptly.",
  "The goal was to simulate how real-world API gateways manage request throttling.",
],

approach: [
  "Implemented the Token Bucket algorithm for smooth and flexible rate limiting.",
  "Used Spring Boot interceptors to validate requests before reaching controller logic.",
  "Integrated Redis for fast token storage and real-time request tracking.",
  "Created separate request limits for FREE and PREMIUM users.",
  "Built a frontend dashboard to visualize token usage and rate limit behavior in real time.",
],

architecture: [
  "React frontend sends requests using API keys through custom headers.",
  "Spring Boot interceptor checks request limits before processing API calls.",
  "Rate limiter service handles token refill calculations and request validation.",
  "Redis stores remaining tokens and refill timestamps for each user.",
  "Frontend displays request status, remaining tokens, and plan details dynamically.",
],

challenges: [
  "Designing accurate token refill logic based on elapsed time.",
  "Managing token state efficiently using Redis.",
  "Handling rapid consecutive requests without incorrect token deductions.",
  "Keeping rate limiting logic cleanly separated from business logic.",
  "Visualizing backend rate limiting behavior clearly through the frontend.",
],

  impact:
    "Demonstrates a production-style backend system similar to API gateway traffic control mechanisms used in scalable distributed systems, showcasing backend architecture, request throttling, Redis-based state management, and real-time observability.",

  github:
    "https://github.com/ghanashyamd12/API-RATE-LIMITER",

  live: "https://api-rate-limiter-ui.vercel.app",

  images: [
    {
      src: "/rate-limiter/p2.png",
      title: "PREMIUM User Request Success",
      desc: "Demonstrates successful request handling for PREMIUM users with higher throughput and real-time token tracking.",
    },

    {
      src: "/rate-limiter/p3.png",
      title: "Rate Limit Enforcement",
      desc: "Shows interceptor-based request blocking with HTTP 429 responses once available tokens are exhausted.",
    },

    {
      src: "/rate-limiter/p4.png",
      title: "Automatic Token Refill",
      desc: "Visualizes dynamic token refill behavior over time using the Token Bucket algorithm.",
    },

    {
      src: "/rate-limiter/p1.png",
      title: "FREE vs PREMIUM Plans",
      desc: "Demonstrates configurable request limits for different user plans managed through backend configuration.",
    },

    {
      src: "/rate-limiter/p5.png",
      title: "Backend API Service",
      desc: "Live Spring Boot backend deployed independently on Render, exposing REST endpoints for request throttling and rate limit enforcement."
    }
  ],
  
  },
]

export default projects