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
  x: "https://x.com/ImGrim_Reaper",
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
  {
    id: "the-book-haven",
    name: "The Book Haven",
    shortDescription:
      "A comprehensive digital library management system with modern UI and full CRUD operations.",
    fullDescription: `The Book Haven is a production-ready digital library management system that allows users to browse, borrow, and manage books efficiently. Built with the MERN stack, it features a clean, intuitive interface.`,
    image: "https://i.ibb.co.com/BRj7DMP/Welcome-to-The-Book-Haven.png",
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
      "Admin dashboard",
      "Responsive design",
    ],
    challenges: `Implementing a robust borrowing system that tracks book availability in real-time while ensuring multiple users couldn't borrow the same book simultaneously.`,
    improvements: `Future improvements include a recommendation engine, review system, email notifications, and a React Native mobile app.`,
  },
  {
    id: "contesthub",
    name: "ContestHub",
    shortDescription:
      "A contest management platform with multiple user roles and Stripe payment integration.",
    fullDescription: `ContestHub enables organizers to create competitions while participants can browse and join. Features three user roles with dedicated dashboards and Stripe integration.`,
    image: "https://i.ibb.co.com/JW39skHZ/Compete-Create.png",
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
    challenges: `Implementing role-based access control across three user types with proper functionality segregation and secure Stripe webhook handling.`,
    improvements: `Adding real-time notifications, chat system, analytics dashboards, and team-based competitions.`,
  },
  {
    id: "gamehub",
    name: "GameHub",
    shortDescription:
      "A gaming library platform with Firebase auth and personalized game collections.",
    fullDescription: `GameHub lets users discover, track, and manage game collections with Firebase authentication, protected routes, and personalized watchlists.`,
    image: "https://i.ibb.co.com/vC97qQjX/Counter-Strike-2.png",
    techStack: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "React Router",
      "Context API",
    ],
    liveLink: "https://gamehub-game-library.netlify.app",
    githubLink: "https://github.com/your-username/gamehub",
    features: [
      "Firebase authentication",
      "Protected routes",
      "Personal watchlist",
      "Game discovery with filters",
      "User profiles",
    ],
    challenges: `Implementing protected routes with proper authentication state handling across the application while maintaining smooth UX.`,
    improvements: `Integrating RAWG API, adding social features, reviews/ratings, and a recommendation system.`,
  },
];
