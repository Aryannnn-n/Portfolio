import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export const DATA = {
  name: 'Aryan Chavan',
  initials: 'AC',
  url: 'https://github.com/Aryannnn-n',
  location: 'Nashik, India',
  description:
    'Full-Stack Developer building scalable real-time systems and AI-powered applications.I turn complex ideas into performant, production-ready products.',
  summary:
    'Full-stack developer specializing in MERN and PostgreSQL, building scalable real-time applications and RESTful systems. Experienced in API optimization, system design, and deploying production-ready solutions.',
  avatarUrl: '/OG.png',
  skills: [
    'JavaScript',
    'TypeScript',
    'SQL',
    'Java',
    'Next.js',
    'React.js',
    'Vite',
    'Tailwind CSS',
    'Bootstrap',
    'MUI',
    'Node.js',
    'Express.js',
    'REST APIs',
    'JWT Authentication',
    'MongoDB',
    'Mongoose',
    'PostgreSQL',
    'MySQL',
    'Git',
    'GitHub',
    'Postman',
    'ORMs',
    'VS Code',
    'Cloudinary',
    'Multer',
    'Real-Time Systems',
    'DSA',
    'Database Design',
    'MVC Architecture',
    'RBAC',
    'API Optimization',
  ],
  navbar: [
    { href: '/', icon: MailIcon, label: 'Email' },
    { href: '/', icon: GithubIcon, label: 'GitHub' },
  ],
  contact: {
    email: 'chavanaryan58@gmail.com',
    tel: '+91 8275870477',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Aryannnn-n',
        icon: GithubIcon,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/aryan-chavan-',
        icon: LinkedinIcon,
      },
    },
  },
  work: [
    {
      company: 'Infosys Springboard',
      href: '#',
      badges: ['Intern'],
      location: 'Remote',
      title: 'Full-Stack Intern',
      logoUrl: '/infosys.png', // Need generic logo
      start: 'Sep 2025',
      end: 'Nov 2025',
      description:
        'Developed PawMitra, a scalable full-stack platform enabling pet adoption workflows and real-time communication between users.\nDesigned and implemented 35+ RESTful APIs and a PostgreSQL schema (8+ models) using Prisma, improving data integrity and system scalability.\nBuilt real-time messaging using WebSockets and implemented JWT-based RBAC to secure role-based access across the platform.',
    },
    {
      company: 'Zoro Innovations',
      href: '#',
      badges: ['Intern'],
      location: 'Remote',
      title: 'Backend Intern',
      logoUrl: '/zoro.png', // Need generic logo
      start: 'Jul 2025',
      end: 'Sep 2025',
      description:
        'Optimized backend APIs and database queries, reducing response time by 60%.\nRefactored backend modules into scalable, maintainable components and implemented RESTful communication pipelines.',
    },
  ],
  education: [
    {
      school: 'MET Institute of Technology, Nashik',
      href: '#',
      degree:
        'Bachelor of Computer Science and Design Engineering (CGPA: 7.4 / 10)',
      logoUrl: '',
      start: 'Nov 2022',
      end: 'June 2026',
    },
  ],
  projects: [
    {
      title: 'PawMitra',
      href: '#',
      dates: 'Nov 2025',
      active: true,
      description:
        'Architected a full-stack real-time platform with WebSockets and Implemented client-side image uploads using Cloudinary signed URLs, offloading media processing from the Node server and reducing backend load. Optimized browsing performance using server-side pagination and React route-level lazy loading. Designed scalable PostgreSQL architecture using Prisma ORM and deployed across Vercel, Render, and Neon cloud infrastructure.',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Prisma',
        'WebSockets',
        'JWT Auth',
        'Cloudinary',
        'Nodemailer',
      ],
      links: [
        {
          type: 'GitHub',
          href: 'https://github.com/Aryannnn-n/PawMitra',
          icon: GithubIcon,
        },
        { type: 'Live', href: 'https://paw-mitra-frontend.vercel.app' }, // Icon provided below in UI implementation
      ],
      image: '/pawmitra.png', // Placeholder image
      video: '',
    },
    {
      title: 'Quick AI',
      href: '#',
      dates: 'Dec 2025',
      active: true,
      description:
        'Engineered a SaaS-based AI content generation platform with secure authentication and plan-based access control. Integrated AI-powered text generation, image generation/editing, resume analysis, and PDF parsing. Built protected dashboards using JWT-based authorization and Clerk authentication.',
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Clerk',
        'Google Gemini API',
        'ClipDrop API',
        'Cloudinary API',
      ],
      links: [
        {
          type: 'GitHub',
          href: 'https://github.com/Aryannnn-n/Quick-AI',
          icon: GithubIcon,
        },
        { type: 'Live', href: 'https://quick-ai-frontend-lovat.vercel.app' },
      ],
      image: '/quickai.png',
      video: '',
    },
    {
      title: 'Full-Stack Stock Monitoring Platform',
      href: '#',
      dates: 'June 2025',
      active: true,
      description:
        'Developed a full-stack Zerodha-inspired application with modular frontend, dashboard, and backend architecture. Implemented simulated stock buy and sell operations with persistent storage. Built REST APIs with Express and managed data using MongoDB and Mongoose.',
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'MUI',
        'Chart.js',
        'Recharts.js',
        'Passport.js',
      ],
      links: [
        {
          type: 'GitHub',
          href: 'https://github.com/Aryannnn-n/A-Full-Stack-Stock-Monitoring-Platform',
          icon: GithubIcon,
        },
      ],
      image: '/zerodha.png',
      video: '',
    },
  ],
};
