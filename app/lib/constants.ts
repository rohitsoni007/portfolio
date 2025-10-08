// Site metadata
export const SITE_METADATA = {
  title: "MERN & React Native Developer | Portfolio",
  description: "Full-stack MERN developer specializing in React Native mobile apps, Node.js backends, and modern web development. View my portfolio and projects.",
  keywords: "MERN developer, React Native, Node.js, MongoDB, Express, React, JavaScript, TypeScript, mobile development",
  author: "MERN & React Native Developer",
  og: {
    type: "website",
    title: "MERN & React Native Developer | Portfolio",
    description: "Full-stack MERN developer specializing in React Native mobile apps and modern web development."
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN & React Native Developer | Portfolio",
    description: "Full-stack MERN developer specializing in React Native mobile apps and modern web development."
  }
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/resume' },
];

// Hero section content
export const HERO_CONTENT = {
  siteName: "RohitSoni.dev",
  greeting: "Hi, I'm",
  name: "Rohit",
  subtitle: "Full-Stack Developer specializing in",
  specializations: ["MERN Stack", "MEAN Stack","React Native"],
  description: "I build modern web applications and mobile apps that deliver exceptional user experiences",
  ctaButtons: [
    { text: "View My Work", target: "#projects" },
    { text: "Get In Touch", target: "#contact", variant: "outline" as const }
  ]
};

// Social media links
export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/rohitsoni007", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/rohitsoni007", icon: "Linkedin" },
//   { name: "Email", url: "mailto:alex@example.com", icon: "Mail" }
];

// About section content
export const ABOUT_CONTENT = {
  title: "About",
  description: "I'm a passionate full-stack developer with 4+ years of experience building modern web and mobile applications. I specialize in the MERN stack, MEAN stack and React Native, creating solutions that are both technically robust and user-friendly.",
  journey: "Started as a frontend developer and evolved into full-stack development. I've worked with startups and enterprises, building everything from e-commerce platforms to social media apps. Always learning and adapting to new technologies to deliver the best solutions.",
  features: [
    {
      icon: "Globe",
      title: "Frontend Development",
      description: "Building responsive, interactive web applications with React, Angular, TypeScript, and modern CSS frameworks."
    },
    {
      icon: "Database",
      title: "Backend Development", 
      description: "Creating robust APIs and server-side logic with Node.js, Express, and MongoDB for scalable applications."
    },
    {
      icon: "Smartphone",
      title: "Mobile Development",
      description: "Developing cross-platform mobile apps with React Native for iOS and Android platforms."
    },
    {
      icon: "Code",
      title: "Full-Stack Solutions",
      description: "End-to-end development from database design to user interface, ensuring seamless integration."
    }
  ]
};

// Projects data
export const PROJECTS_DATA = [
  {
    title: "CV Builder",
    description: "Full-stack CV builder with user authentication, template selection, and download options. Built with React, Node.js, and MongoDB.",
    image: "cv-builder.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    githubUrl: "https://github.com/rohitsoni007/cvbuilder-assessment"
  },
  {
    title: "Task Management Dashboard | Jira Like",
    description: "Productivity app with drag-and-drop kanban boards, team collaboration, and progress tracking. Built with Next.js and PostgreSQL.",
    image: "jira.jpg",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/rohitsoni007/jira"
  }
];

// Projects section content
export const PROJECTS_CONTENT = {
  title: "Featured",
  subtitle: "A showcase of my recent work in web and mobile development"
};

// Contact section content
export const CONTACT_CONTENT = {
  title: "Get In",
  subtitle: "Ready to work together? Let's discuss your next project and bring your ideas to life.",
  description: "I'm always interested in hearing about new opportunities and exciting projects. Whether you're a startup looking to build your MVP or an established company needing to scale your application, I'd love to help.",
  contactInfo: [
    // {
    //   icon: "Mail",
    //   title: "Email",
    //   value: "alex.developer@email.com",
    //   link: "mailto:alex.developer@email.com"
    // },
    // {
    //   icon: "Phone",
    //   title: "Phone",
    //   value: "+1 (555) 123-4567",
    //   link: "tel:+15551234567"
    // },
    {
      icon: "MapPin",
      title: "Location",
      value: "Chandigarh, India",
    //   link: "#"
    }
  ] as Array<{ icon: string; title: string; value: string; link?: string }>,
  form: {
    name: { label: "Name", placeholder: "Your full name", required: true },
    email: { label: "Email", placeholder: "your.email@example.com", required: true },
    message: { label: "Message", placeholder: "Tell me about your project...", required: true }
  },
  submitButton: "Send Message"
};

// Google Forms configuration
export const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScTG55i1tie_Uzq9RGSRFfBqyPvFsov2Hc17x7G_HwG0kSEdA/formResponse";

export const FORM_FIELDS = {
  NAME: "entry.526449419",
  EMAIL: "entry.586427154",
  MESSAGE: "entry.892892895"
};

// Footer content
export const FOOTER_CONTENT = {
  copyright: "© 2023 Alex.dev. All rights reserved.",
  links: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ]
};

export const SKILL_CATEGORIES = [
    {
      title: "Frontend",
      skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux", "React Query"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "JWT", "Socket.io"]
    },
    {
      title: "Mobile",
      skills: ["React Native", "Expo", "iOS Development", "Android Development", "React Navigation", "AsyncStorage"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Postman", "Jest", "ESLint", "Webpack", "Vite"]
    }
  ];

// Resume data
export const RESUME_DATA = {
  personalInfo: {
    name: "Rohit Soni",
    title: "Full-Stack MERN Developer, MEAN Developer & React Native Specialist",
    email: "test@gmail.com",
    github: "https://github.com/rohitsoni007",
    linkedin: "https://linkedin.com/in/rohitsoni007",
    location: "Ludhiana, India"
  },
  professionalSummary: "Passionate full-stack developer with 4+ years of experience building modern web and mobile applications. Specialized in MERN stack, MEAN stack and React Native, creating solutions that are both technically robust and user-friendly. Proven track record of delivering end-to-end applications from concept to deployment.",
  experience: [
    {
      position: "Senior MERN Stack Developer",
      company: "Matrix Marketers",
      period: "Sep 2022 - Nov 2023",
      responsibilities: [
        "Led development of full-stack web applications using MERN stack",
        "Built cross-platform mobile apps with MERN & React Native serving 10K+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      position: "Software Engineer",
      company: "75Way Technologies",
      period: "Aug 2021 - Sep 2022",
      responsibilities: [
        "Developed e-commerce platform with payment integration",
        "Created RESTful APIs handling 1M+ requests daily",
        "Optimized database queries improving performance by 40%",
        "Collaborated with design team to implement responsive UIs"
      ]
    },
     {
      position: "Software Developer",
      company: "Promatics Technologies",
      period: "Jul 2019 - Aug 2020",
      responsibilities: [
        "Led development of full-stack web applications using MERN, MEAN stack & serving 10K+ users",
        "Created RESTful APIs handling 1M+ requests daily",
        "Optimized database queries improving performance by 40%",
        "Collaborated with design team to implement responsive UIs"
      ]
    }
  ],
  projects: [
    {
      name: "CV Builder Platform",
      technologies: "React, Node.js, MongoDB, Stripe, JWT",
      description: "Full-stack CV builder with user authentication, template selection, and PDF download options. Features real-time preview and payment integration.",
      sourceCode: "https://github.com/rohitsoni007/cvbuilder-assessment"
    },
    {
      name: "Task Management Dashboard (Jira-like)",
      technologies: "Next.js, PostgreSQL, TypeScript, Tailwind",
      description: "Productivity app with drag-and-drop kanban boards, team collaboration, and progress tracking features.",
      sourceCode: "https://github.com/rohitsoni007/jira"
    }
  ],
  education: {
    degree: "Master of Computer Applications",
    institution: "Lovely Professional University",
    period: "2014 - 2016"
  }
};
