// app/projects/page.tsx
import {
  ExternalLink,
  Github,
  Star,
  Users,
  Calendar,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

const projects = [
  {
    id: 1,
    title: "EduLearn Platform",
    description:
      "A comprehensive online learning management system with interactive courses, quizzes, and progress tracking.",
    image: "/project1.jpg",
    status: "Completed",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
    githubStars: 245,
    contributors: 12,
    lastUpdated: "Nov 2024",
    demoLink: "https://edulearn.demo",
    githubLink: "https://github.com/edulearn",
  },
  {
    id: 2,
    title: "AI Study Assistant",
    description:
      "Artificial intelligence-powered learning companion that adapts to individual learning styles and pace.",
    image: "/project2.jpg",
    status: "Active",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
    githubStars: 189,
    contributors: 8,
    lastUpdated: "Dec 2024",
    demoLink: "https://aistudy.demo",
    githubLink: "https://github.com/aistudy",
  },
  {
    id: 3,
    title: "Virtual Lab Simulator",
    description:
      "Interactive virtual laboratory for science experiments with real-time physics simulations.",
    image: "/project3.jpg",
    status: "Completed",
    tags: ["Three.js", "WebGL", "TypeScript", "WebRTC"],
    githubStars: 312,
    contributors: 15,
    lastUpdated: "Oct 2024",
    demoLink: "https://virtuallab.demo",
    githubLink: "https://github.com/virtuallab",
  },
  {
    id: 4,
    title: "Code Mentor Platform",
    description:
      "Real-time code review and mentorship platform for programming students and developers.",
    image: "/project4.jpg",
    status: "Active",
    tags: ["Vue.js", "WebSockets", "Docker", "PostgreSQL"],
    githubStars: 156,
    contributors: 6,
    lastUpdated: "Dec 2024",
    demoLink: "https://codementor.demo",
    githubLink: "https://github.com/codementor",
  },
  {
    id: 5,
    title: "Accessible Reader",
    description:
      "Web application that makes digital content accessible for learners with visual impairments.",
    image: "/project5.jpg",
    status: "Completed",
    tags: ["React", "Web Speech API", "Accessibility", "PWA"],
    githubStars: 278,
    contributors: 10,
    lastUpdated: "Sep 2024",
    demoLink: "https://accessiblereader.demo",
    githubLink: "https://github.com/accessiblereader",
  },
  {
    id: 6,
    title: "Classroom Analytics",
    description:
      "Dashboard for educators to track student performance and engagement metrics.",
    image: "/project6.jpg",
    status: "In Development",
    tags: ["React", "D3.js", "Express", "Redis", "Chart.js"],
    githubStars: 98,
    contributors: 4,
    lastUpdated: "Dec 2024",
    demoLink: "https://analytics.demo",
    githubLink: "https://github.com/classroom-analytics",
  },
];

const statusColors = {
  Completed: "bg-green-500/20 text-green-400",
  Active: "bg-primary/20 text-primary",
  "In Development": "bg-yellow-500/20 text-yellow-400",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto mt-20 text-center">
        <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
          Our Student&apos;s <span className="text-primary">Innovative</span>{" "}
          Projects
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Explore our open-source projects that are transforming education
          through technology and innovation.
        </p>

        {/* Stats */}
        <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mb-12 md:grid-cols-4">
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-foreground">
              {projects.length}+
            </div>
            <div className="text-muted-foreground">Active Projects</div>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-foreground">1278</div>
            <div className="text-muted-foreground">GitHub Stars</div>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-foreground">55</div>
            <div className="text-muted-foreground">Contributors</div>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-foreground">42</div>
            <div className="text-muted-foreground">Forks</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button variant="default">All Projects</Button>
          <Button variant="outline">Web Development</Button>
          <Button variant="outline">Mobile Apps</Button>
          <Button variant="outline">AI/ML</Button>
          <Button variant="outline">Data Visualization</Button>
          <Button variant="outline">Accessibility</Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden transition-all duration-500 border border-gray-200 group rounded-2xl dark:border-gray-800 hover:border-primary/30"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Star className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/10 dark:from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>

                {/* Hover Reveal Tags */}
                <div className="flex flex-wrap gap-2 mb-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.githubStars}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Stars
                    </div>
                  </div>
                  <div className="w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.contributors}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Contributors
                    </div>
                  </div>
                  <div className="w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {project.lastUpdated}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Updated
                    </div>
                  </div>
                </div>

                {/* Bottom Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all duration-300 group/demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contribute Section */}
        <div className="container px-4 mx-auto mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0">
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Grid pattern */}
                  <pattern
                    id="contribute-grid"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0,0 L80,0 M0,80 L80,80 M0,0 L0,80 M80,0 L80,80"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1"
                      fill="none"
                    />
                  </pattern>

                  {/* Dots pattern */}
                  <pattern
                    id="contribute-dots"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="2"
                      fill="rgba(255,255,255,0.1)"
                    />
                  </pattern>

                  {/* Code brackets pattern */}
                  <pattern
                    id="code-pattern"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M30,20 L20,50 L30,80 M70,20 L80,50 L70,80"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="40"
                      y="35"
                      width="20"
                      height="30"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="2"
                    />
                  </pattern>

                  {/* Blur gradient */}
                  <radialGradient id="blur-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                </defs>

                {/* Background patterns */}
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#contribute-grid)"
                  opacity="0.4"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#contribute-dots)"
                  opacity="0.3"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#code-pattern)"
                  opacity="0.2"
                />

                {/* Floating elements */}
                <circle
                  cx="15%"
                  cy="25%"
                  r="40"
                  fill="rgba(255,255,255,0.06)"
                />
                <circle
                  cx="85%"
                  cy="75%"
                  r="50"
                  fill="rgba(255,255,255,0.06)"
                />
                <circle
                  cx="70%"
                  cy="20%"
                  r="30"
                  fill="rgba(255,255,255,0.06)"
                />

                {/* Animated floating elements */}
                <g className="animate-float-slow">
                  <rect
                    x="20%"
                    y="60%"
                    width="40"
                    height="40"
                    fill="rgba(255,255,255,0.05)"
                    transform="rotate(45)"
                  />
                </g>
                <g className="animate-float-medium">
                  <circle
                    cx="40%"
                    cy="80%"
                    r="25"
                    fill="rgba(255,255,255,0.05)"
                  />
                </g>
                <g className="animate-float-fast">
                  <rect
                    x="75%"
                    y="40%"
                    width="35"
                    height="35"
                    fill="rgba(255,255,255,0.05)"
                    transform="rotate(15)"
                  />
                </g>

                {/* Blur overlays */}
                <circle cx="0%" cy="100%" r="150" fill="url(#blur-gradient)" />
                <circle cx="100%" cy="0%" r="150" fill="url(#blur-gradient)" />
              </svg>
            </div>

            {/* Animated wave pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1200 400">
                <defs>
                  <linearGradient
                    id="code-wave"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,100 C300,50 500,150 800,100 C1100,50 1200,150 1200,100"
                  fill="none"
                  stroke="url(#code-wave)"
                  strokeWidth="3"
                  className="animate-wave"
                />
                <path
                  d="M0,300 C200,250 400,350 600,300 C800,250 1000,350 1200,300"
                  fill="none"
                  stroke="url(#code-wave)"
                  strokeWidth="2"
                  className="animate-wave-slow"
                />
              </svg>
            </div>

            <div className="relative px-8 py-12 md:px-12">
              <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                {/* Left Content */}
                <div className="max-w-xl text-white">
                  <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-medium">Open Source Community</span>
                  </div>

                  <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                    Contribute & Make a Difference
                  </h3>
                  <p className="mb-8 text-lg text-white/90">
                    All our projects are open source. Join developers,
                    designers, and educators worldwide in building educational
                    tools that transform lives.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" variant="secondary" className="group">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View GitHub
                      <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="text-white border-white hover:bg-white/10"
                    >
                      Read Contribution Guide
                    </Button>
                  </div>
                </div>

                {/* Right Content - Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative p-5 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm group hover:bg-white/10">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="mb-1 text-sm font-medium text-white/80">
                      Good First Issues
                    </div>
                    <div className="text-3xl font-bold text-white">24</div>
                    <div className="mt-2 text-xs text-white/60">
                      Perfect for beginners
                    </div>
                  </div>

                  <div className="relative p-5 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm group hover:bg-white/10">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="mb-1 text-sm font-medium text-white/80">
                      Open PRs
                    </div>
                    <div className="text-3xl font-bold text-white">18</div>
                    <div className="mt-2 text-xs text-white/60">
                      Active contributions
                    </div>
                  </div>

                  <div className="relative p-5 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm group hover:bg-white/10">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="mb-1 text-sm font-medium text-white/80">
                      Active Discussions
                    </div>
                    <div className="text-3xl font-bold text-white">42</div>
                    <div className="mt-2 text-xs text-white/60">
                      Join the conversation
                    </div>
                  </div>

                  <div className="relative p-5 transition-all duration-300 rounded-2xl bg-white/5 backdrop-blur-sm group hover:bg-white/10">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="mb-1 text-sm font-medium text-white/80">
                      Documentation
                    </div>
                    <div className="text-3xl font-bold text-white">96%</div>
                    <div className="mt-2 text-xs text-white/60">
                      Complete & maintained
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-white/40 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/70">
                    Join 500+ contributors making education accessible
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="container px-4 mx-auto mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
            {/* SVG Pattern 1: Geometric Grid */}
            <div className="absolute inset-0">
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="pattern-circles"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="1"
                      fill="rgba(255,255,255,0.1)"
                    />
                  </pattern>
                  <pattern
                    id="pattern-dots"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="2"
                      fill="rgba(255,255,255,0.15)"
                    />
                  </pattern>
                  <pattern
                    id="pattern-grid"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0,80 L80,0 M-80,80 L80,-80 M0,0 L80,80"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                    />
                  </pattern>
                  <linearGradient
                    id="blue-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                    <stop offset="100%" stopColor="rgba(37, 99, 235, 0.2)" />
                  </linearGradient>
                </defs>

                {/* Layered patterns for depth */}
                <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#pattern-dots)"
                  opacity="0.5"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#pattern-grid)"
                  opacity="0.3"
                />

                {/* Animated floating elements */}
                <circle
                  cx="10%"
                  cy="20%"
                  r="30"
                  fill="rgba(255,255,255,0.05)"
                />
                <circle
                  cx="90%"
                  cy="80%"
                  r="40"
                  fill="rgba(255,255,255,0.05)"
                />
                <circle
                  cx="70%"
                  cy="30%"
                  r="25"
                  fill="rgba(255,255,255,0.05)"
                />

                {/* Geometric shapes */}
                <path
                  d="M20%,20% L40%,10% L60%,30% Z"
                  fill="rgba(255,255,255,0.08)"
                  opacity="0.6"
                />
                <rect
                  x="80%"
                  y="10%"
                  width="50"
                  height="50"
                  fill="rgba(255,255,255,0.08)"
                  opacity="0.6"
                  transform="rotate(45)"
                />
              </svg>
            </div>

            {/* SVG Pattern 2: Wave pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1000 300">
                <defs>
                  <linearGradient
                    id="wave-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,150 Q250,100 500,150 T1000,150"
                  fill="none"
                  stroke="url(#wave-gradient)"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                />
                <path
                  d="M0,200 Q250,250 500,200 T1000,200"
                  fill="none"
                  stroke="url(#wave-gradient)"
                  strokeWidth="2"
                  strokeDasharray="15,10"
                />
              </svg>
            </div>

            <div className="relative px-8 py-12 md:px-12">
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="text-white">
                  <h3 className="mb-4 text-3xl font-bold">Join Our Mission</h3>
                  <p className="max-w-xl mb-6 text-white/90">
                    Passionate about education? We're always looking for
                    talented individuals to join our team.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" variant="secondary">
                      View Open Positions{" "}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="text-white border-white hover:bg-white/10"
                    >
                      Volunteer With Us
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute rounded-full -inset-4 bg-white/10 blur-xl" />
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-white" />
                    <p className="text-center text-white/90">
                      Make a difference in education
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
