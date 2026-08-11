export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const PERSONAL_INFO = {
  name: "M. Nouman Hashir",
  title: "Flutter Mobile App Developer",
  shortTitle: "Flutter Developer",
  location: "Lahore, Pakistan",
  email: "hashirnouman56@gmail.com",
  phone: "+92 31-44119646",
  whatsappNumber: "923144119646",
  birthday: "Nov 27, 2002",
  avatar: "./img/my-avatar.png",
  bio: "Hello 👋 I'm Nouman Hashir, a Flutter Developer from Lahore, Pakistan, building scalable, user-focused mobile apps for iOS and Android. I create seamless UIs and solve complex challenges, delivering impactful solutions in telemedicine, e-commerce, and logistics. Passionate about blending Flutter with AI for smarter apps, I'm ready to bring your vision to life. Let's connect!",
  github: "https://github.com/Nouman-hashir",
  linkedin: "https://www.linkedin.com/in/nouman-hashir-0515a8264/",
};

export const SKILLS = [
  "FLUTTER & DART",
  "REST APIS",
  "BLOC & GETX",
  "PROVIDER",
  "FIREBASE & HIVE",
  "SOCKET.IO & WEBSOCKETS",
  "STRIPE & ALFALAH",
  "TENSORFLOW LITE & AI",
  "GIT & APP DEPLOYMENT",
  "CLEAN ARCHITECTURE",
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Mobile App Development",
    description: "Building scalable, high-performance iOS and Android apps using Flutter, with a focus on seamless UI and real-time features.",
    icon: "./img/icon-app.svg",
  },
  {
    number: "02",
    title: "AI Integration",
    description: "Enhancing apps with AI-driven features like chatbots and voice-input systems for smarter, user-centric solutions.",
    icon: "./img/icon-ai.png",
  },
  {
    number: "03",
    title: "API & Payment Integration",
    description: "Seamlessly integrating REST APIs, Stripe, and Alfalah payment gateways for robust, secure app functionality.",
    icon: "./img/icon-api.png",
  },
  {
    number: "04",
    title: "Real-Time Systems",
    description: "Developing live tracking, messaging, and logistics solutions using WebSockets and Google Maps API.",
    icon: "./img/icon-realtime.png",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "cluck-coop",
    title: "Cluck Coop",
    category: "Applications / Smart Farming",
    description: "Smart poultry & farm management platform with real-time analytics, order management, and tracking.",
    image: "./img/project-4.png",
    tech: ["Flutter", "Dart", "REST API", "Firebase"],
  },
  {
    id: "ghoomo-phiroo",
    title: "Ghoomo Phiroo Pakistan",
    category: "Applications / Travel & Navigation",
    description: "Comprehensive travel and tourism mobile app for discovering Pakistan's top destinations with interactive guides.",
    image: "./img/project-5.png",
    liveUrl: "https://play.google.com/store/apps/details?id=co.codeminer.gpp&hl=en",
    tech: ["Flutter", "Google Maps API", "GetX", "REST API"],
  },
  {
    id: "task-ai",
    title: "TaskAi",
    category: "Applications / AI Productivity",
    description: "AI-driven task management application featuring voice command parsing and automated schedule reminders.",
    image: "./img/project-8.png",
    tech: ["Flutter", "TensorFlow Lite", "Voice Input", "Clean Architecture"],
  },
  {
    id: "helper-log",
    title: "Helper log",
    category: "Applications / Utility & Operations",
    description: "Efficient activity logger and service manager utility app built for high reliability and offline synchronization.",
    image: "./img/project-9.png",
    liveUrl: "https://play.google.com/store/apps/details?id=co.codeminer.helperlog&hl=en",
    tech: ["Flutter", "Hive", "REST API", "BLoC"],
  },
  {
    id: "med360",
    title: "Med360",
    category: "Applications / Telemedicine",
    description: "Real-time healthcare and telemedicine platform linking patients with doctors, complete with live video/chat & payment gateways.",
    image: "./img/project-1.png",
    liveUrl: "https://play.google.com/store/apps/details?id=co.codeminer.med360&hl=en",
    tech: ["Flutter", "WebSockets", "Stripe", "BLoC"],
  },
  {
    id: "tradetoday",
    title: "TradeToday",
    category: "Applications / Finance & Trading",
    description: "Real-time stock updates and trading platform interface engineered for ultra-fast updates and high UI responsiveness.",
    image: "./img/project3.png",
    tech: ["Flutter", "WebSockets", "REST API", "Provider"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Mobile App Developer",
    company: "NeuroOceans AI",
    period: "April 2025 — Present",
    highlights: [
      "Developing cutting-edge AI-driven mobile applications for iOS and Android using Flutter.",
      "Integrating intelligent neural features, voice-command processing, and real-time APIs.",
      "Architecting clean, scalable codebases with advanced state management and offline sync.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "CodeMiners IT & Consultancy",
    period: "Oct 2024 — April 2025",
    highlights: [
      "Developed real-time telemedicine and logistics apps, improving user engagement by 20%.",
      "Integrated AI chatbots and payment gateways, boosting transaction success by 15%.",
      "Optimized app performance with clean architecture and efficient state management.",
      "Collaborated with cross-functional teams to deliver projects on time.",
    ],
  },
  {
    role: "Flutter Intern",
    company: "CodeMiners IT & Consultancy",
    period: "Oct 2024 — Nov 2024",
    highlights: [
      "Developed utility apps with 50K+ downloads, including a TensorFlow Lite-powered feature.",
      "Contributed to UI design and API integration for real-world projects.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Virtual University of Pakistan",
    period: "2020 — 2024",
  },
];
