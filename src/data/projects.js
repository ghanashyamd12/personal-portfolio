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
    title: "Next Project",
    description:
      "Currently building a system-focused project solving a real-world problem.",
    tech: [],
    github: "#",
    live: "#",
    status: "Coming Soon",
  },
]

export default projects