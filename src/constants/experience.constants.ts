export const experience = [
  {
    id: "xenara-ai-lead",
    title: "Lead Full Stack Developer",
    company: "Xenara AI",
    type: "Contract",
    period: "Nov 2024 - Current",
    badges: [
      // Core Tech Stack
      "TypeScript",
      "Next.js",
      "React",
      "Nest.js",
      "MongoDB",
      "Mongoose",

      // Authentication & Security
      "JWT",
      "Cookies",
      "Passport.js",

      // API & Data Fetching
      "API Development",
      "TanStack Query",
      "Axios",

      // State Management & Forms
      "Redux Toolkit",
      "React-Hook-Form",
      "Zod",

      // Real-time & Cloud
      "WebSockets",
      "AWS S3",

      // Frontend Styling
      "Material UI",

      // Development Tools
      "Postman",
      "Git",
      "Yarn",

      // Collaboration Tools
      "Figma",
      "Slack",
      "Jira",
    ],
    responsibilities: [
      "Promoted from intern to Lead Developer in 6 months based on technical contributions and proactive support of teammates, later mentoring newer developers and conducting 5+ candidate interviews",
      "Advocated for adopting TanStack Query, Zod, and React-Hook-Form into the codebase, improving code structure, validation safety, and data-fetching consistency across the team",
      "Enforced separation-of-concerns architecture across the frontend, using a dedicated API client layer, custom TanStack Query hooks, Zod/React Hook Form validation, and Atomic Design component organization for cleaner, maintainable code",
      "Designed RESTful API endpoints and MongoDB schemas for new features, including DTOs for validation and auth/role guards for access control",
      "Coordinated with the PM and founder on task allocation, feature timelines, design review, and adjusting priorities around key deadlines like investor and client meetings",
      "Built a knowledge hub feature enabling users to submit business context in multiple formats (PDFs, JSON, websites, APIs, articles), including the frontend upload flow, backend ingestion endpoints, and ML server integration, working closely with the AI team to fix integration bugs and align on data format",
      "Owned the workspace invitation flow end to end, building backend endpoints with auth guards and validation, SendGrid email integration, and the frontend registration flow for invited users",
      "Built AWS S3 image upload functionality with drag-and-drop UI, frontend validation, and NestJS endpoints, reused across multiple pages",
    ],
  },
  {
    id: "kreativstorm-frontend",
    title: "Front-End Developer",
    company: "Kreativstorm",
    type: "Internship",
    period: "August 2023 - October 2023",
    badges: ["HTML", "CSS", "JavaScript", "Git"],
    responsibilities: [
      "Collaborated with international teams on group projects, using HTML, CSS, and JavaScript to develop responsive frontend websites.",
      "Worked remotely with an industry expert, focusing on the importance of communication, collaboration, and best practices in web development.",
      "Utilized Git and GitHub for version control, enhancing teamwork and code management in a remote, global environment.",
    ],
  },
] as const;
