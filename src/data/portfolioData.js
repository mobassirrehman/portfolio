export const personalInfo = {
  name: "Mobassir Rehman",
  firstName: "Mobassir",
  lastName: "Rehman",
  designation: "MERN Stack Developer",
  tagline: "Building digital experiences with clean code & creative solutions",
  email: "mobassir.rehman@icloud.com",
  phone: "+880 1601700902",
  whatsapp: "+880 1601700902",
  location: "Chattagram, Bangladesh",
  resumeLink:
    "https://drive.google.com/file/d/1FrCq3vNm4CtuYbbJUWjFQxTgG3sqh5bE/view?usp=sharing",
  photo: "https://i.ibb.co.com/RTMkzWQ2/Profile-Photo.jpg",
};

export const socialLinks = {
  github: "https://github.com/mobassirrehman",
  linkedin: "https://www.linkedin.com/in/mobassir-rehman",
  twitter: "https://x.com/ImGrim_Reaper",
  facebook: "https://www.facebook.com/TheGrim36",
};

export const aboutMe = {
  intro: `I'm a MERN Stack Developer based in Chattagram, Bangladesh, with a unique journey that bridges the humanities and technology. My background in English Literature from the University of Brahmanbaria has shaped me into a developer who thinks differently—bringing critical analysis, creative problem-solving, and a deep appreciation for clear communication to every project I build.`,
  journey: `My transition from literature to programming wasn't just a career change—it was an evolution of how I approach problems. Years of studying philosophy, psychology, psychoanalysis, and literary criticism taught me to see patterns, question assumptions, and think systematically. These skills translate remarkably well to debugging complex code and architecting elegant solutions.`,
  workStyle: `I thrive on building full-stack applications that solve real problems. There's a particular satisfaction in taking an idea from concept to deployment—designing intuitive user interfaces with React, building robust APIs with Node.js and Express, and structuring data efficiently with MongoDB.`,
  hobbies: `Beyond coding, I enjoy listening to audio stories, reading books across genres, playing badminton and cricket (semifinalist in university tournaments), online gaming, and spending time in nature. Summer is my favorite season, and winding down with a good TV show is my preferred way to relax.`,
  philosophy: `Great software, like great writing, should be clear, purposeful, and human-centered.`,
};

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML & CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "Firebase", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 70 },
    { name: "Vercel", level: 85 },
  ],
};

export const education = [
  {
    degree: "Honours in English Literature",
    institution: "University of Brahmanbaria",
    year: "2020 - 2024",
    description:
      "Studied literary theory, critical analysis, philosophy, and creative writing.",
  },
  {
    degree: "Web Development Program",
    institution: "Self-taught & Online Bootcamp",
    year: "2025 - Present",
    description:
      "MERN stack development through structured courses and hands-on projects.",
  },
];

export const experience = [
  {
    title: "MERN Stack Developer",
    company: "Personal Projects",
    period: "2024 - Present",
    description:
      "Building full-stack web applications using React, Next.js, Node.js, Express, and MongoDB.",
    achievements: [
      "Developed production-ready applications including digital library systems",
      "Implemented secure authentication with JWT and Firebase",
      "Created responsive designs for all devices",
      "Integrated Stripe payment systems",
    ],
  },
];

export const projects = [
  // 1. HatBari (Top Priority)
  {
    id: "hatbari",
    name: "HatBari",
    shortDescription:
      "A full-stack Bengali grocery platform with Next.js 16, bilingual support, and persistent cart.",
    fullDescription:
      "HatBari is a robust e-commerce platform designed for the Bangladeshi market, bridging the gap between local farmers and consumers. Built with the latest Next.js 16 App Router, it features a completely bilingual interface (English + Bengali) and a persistent cart system using Zustand. The application prioritizes security with NextAuth v5, Zod server-side validation, and regex injection protection.",
    image:
      "https://res.cloudinary.com/dgo7un75z/image/upload/v1771371314/Screenshot_2026-02-18_at_5.33.07_AM_bbyje2.png",
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "NextAuth v5",
      "MongoDB",
    ],
    liveLink: "https://hat-bari.vercel.app",
    githubLink: "https://github.com/mobassirrehman/hat-bari",
    features: [
      "Bilingual Support (English/Bengali)",
      "Real-time Debounced Search",
      "Persistent Cart with Zustand",
      "Secure Auth with NextAuth v5",
      "Order Tracking & History",
    ],
    challenges:
      "Implementing a seamless bilingual experience while maintaining SEO performance was a key challenge. Additionally, migrating to NextAuth v5 required handling complex edge cases for session persistence across the new App Router architecture.",
    improvements:
      "Future plans include integrating local payment gateways like bKash/Nagad, adding an AI-powered recommendation engine, and developing a dedicated mobile app for delivery riders.",
  },

  // 2. ContestHub
  {
    id: "contesthub",
    name: "ContestHub",
    shortDescription:
      "A contest management platform with multiple user roles and Stripe payment integration.",
    fullDescription:
      "ContestHub enables organizers to create competitions while participants can browse and join. Features three user roles with dedicated dashboards and Stripe integration for seamless payment processing.",
    image: "https://i.ibb.co/JW39skHZ/Compete-Create.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    liveLink: "https://contesthub-contest-platform.netlify.app",
    githubLink: "https://github.com/mobassirrehman/contestHub-client.git",
    features: [
      "Three user roles: Admin, Creator, Participant",
      "Role-based dashboards",
      "Stripe payment integration",
      "Contest management tools",
      "Real-time leaderboards",
    ],
    challenges:
      "Implementing role-based access control across three user types with proper functionality segregation and secure Stripe webhook handling to ensure payment verification.",
    improvements:
      "Adding real-time notifications, a chat system for participants, analytics dashboards for organizers, and team-based competitions.",
  },

  // 3. The Book Haven (Moved to 3rd)
  {
    id: "the-book-haven",
    name: "The Book Haven",
    shortDescription:
      "A comprehensive digital library management system with modern UI and full CRUD operations.",
    fullDescription:
      "The Book Haven is a production-ready digital library management system that allows users to browse, borrow, and manage books efficiently. Built with the MERN stack, it features a clean, intuitive interface and robust backend logic.",
    image: "https://i.ibb.co/BRj7DMP/Welcome-to-The-Book-Haven.png",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    liveLink: "https://the-book-haven-001.netlify.app",
    githubLink: "https://github.com/mobassirrehman/The-Book-Haven-Client.git",
    features: [
      "User authentication with Firebase",
      "Book browsing with category filters",
      "Borrowing system with due dates",
      "Admin dashboard for inventory",
      "Responsive design",
    ],
    challenges:
      "Implementing a robust borrowing system that tracks book availability in real-time while ensuring multiple users couldn't borrow the same book simultaneously.",
    improvements:
      "Future improvements include a recommendation engine, review system, email notifications for overdue books, and a React Native mobile app.",
  },
];
