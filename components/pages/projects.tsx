// app/projects/page.tsx
import { ExternalLink, Github, Star, Users, Calendar, ChevronRight, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "EduLearn Platform",
    description: "A comprehensive online learning management system with interactive courses, quizzes, and progress tracking.",
    image: "/project1.jpg",
    status: "Completed",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
    githubStars: 245,
    contributors: 12,
    lastUpdated: "Nov 2024",
    demoLink: "https://edulearn.demo",
    githubLink: "https://github.com/edulearn"
  },
  {
    id: 2,
    title: "AI Study Assistant",
    description: "Artificial intelligence-powered learning companion that adapts to individual learning styles and pace.",
    image: "/project2.jpg",
    status: "Active",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
    githubStars: 189,
    contributors: 8,
    lastUpdated: "Dec 2024",
    demoLink: "https://aistudy.demo",
    githubLink: "https://github.com/aistudy"
  },
  {
    id: 3,
    title: "Virtual Lab Simulator",
    description: "Interactive virtual laboratory for science experiments with real-time physics simulations.",
    image: "/project3.jpg",
    status: "Completed",
    tags: ["Three.js", "WebGL", "TypeScript", "WebRTC"],
    githubStars: 312,
    contributors: 15,
    lastUpdated: "Oct 2024",
    demoLink: "https://virtuallab.demo",
    githubLink: "https://github.com/virtuallab"
  },
  {
    id: 4,
    title: "Code Mentor Platform",
    description: "Real-time code review and mentorship platform for programming students and developers.",
    image: "/project4.jpg",
    status: "Active",
    tags: ["Vue.js", "WebSockets", "Docker", "PostgreSQL"],
    githubStars: 156,
    contributors: 6,
    lastUpdated: "Dec 2024",
    demoLink: "https://codementor.demo",
    githubLink: "https://github.com/codementor"
  },
  {
    id: 5,
    title: "Accessible Reader",
    description: "Web application that makes digital content accessible for learners with visual impairments.",
    image: "/project5.jpg",
    status: "Completed",
    tags: ["React", "Web Speech API", "Accessibility", "PWA"],
    githubStars: 278,
    contributors: 10,
    lastUpdated: "Sep 2024",
    demoLink: "https://accessiblereader.demo",
    githubLink: "https://github.com/accessiblereader"
  },
  {
    id: 6,
    title: "Classroom Analytics",
    description: "Dashboard for educators to track student performance and engagement metrics.",
    image: "/project6.jpg",
    status: "In Development",
    tags: ["React", "D3.js", "Express", "Redis", "Chart.js"],
    githubStars: 98,
    contributors: 4,
    lastUpdated: "Dec 2024",
    demoLink: "https://analytics.demo",
    githubLink: "https://github.com/classroom-analytics"
  },
]

const statusColors = {
  "Completed": "bg-green-500/20 text-green-400",
  "Active": "bg-primary/20 text-primary",
  "In Development": "bg-yellow-500/20 text-yellow-400"
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto text-center">
        <h1 className="mb-6 text-5xl font-bold text-transparent md:text-6xl bg-linear-to-r from-primary to-primary/70 bg-clip-text">
          Innovative Projects
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Explore our open-source projects that are transforming education through technology and innovation.
        </p>
        
        {/* Stats */}
        <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mb-12 md:grid-cols-4">
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-foreground">{projects.length}+</div>
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
              className="group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-card border-border"
            >
              {/* Image */}
              <div className="flex items-center justify-center h-48 bg-muted">
                <div className="flex items-center justify-center w-full h-full p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary text-foreground">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                    {project.status}
                  </span>
                </div>

                <p className="mb-6 text-sm text-muted-foreground">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4" />
                    <span>{project.githubStars}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{project.contributors}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.lastUpdated}</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 transition-colors rounded-lg bg-secondary hover:bg-secondary/80"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 transition-colors rounded-lg bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contribute Section */}
        <div className="p-8 mt-20 border rounded-3xl bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 border-border">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Want to Contribute?</h3>
              <p className="mb-6 text-muted-foreground">
                All our projects are open source and we welcome contributions from developers, designers, and educators worldwide.
              </p>
              <div className="flex gap-4">
                <Button>
                  View GitHub
                </Button>
                <Button variant="outline">
                  Read Contribution Guide
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card">
                <div className="mb-2 text-lg font-bold text-foreground">Good First Issues</div>
                <div className="text-3xl font-bold text-primary">24</div>
              </div>
              <div className="p-4 rounded-xl bg-card">
                <div className="mb-2 text-lg font-bold text-foreground">Open PRs</div>
                <div className="text-3xl font-bold text-primary">18</div>
              </div>
              <div className="p-4 rounded-xl bg-card">
                <div className="mb-2 text-lg font-bold text-foreground">Active Discussions</div>
                <div className="text-3xl font-bold text-primary">42</div>
              </div>
              <div className="p-4 rounded-xl bg-card">
                <div className="mb-2 text-lg font-bold text-foreground">Documentation</div>
                <div className="text-3xl font-bold text-primary">96%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="container px-4 mx-auto mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
            {/* SVG Pattern 1: Geometric Grid */}
            <div className="absolute inset-0">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)" />
                  </pattern>
                  <pattern id="pattern-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.15)" />
                  </pattern>
                  <pattern id="pattern-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M0,80 L80,0 M-80,80 L80,-80 M0,0 L80,80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </pattern>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                    <stop offset="100%" stopColor="rgba(37, 99, 235, 0.2)" />
                  </linearGradient>
                </defs>
                
                {/* Layered patterns for depth */}
                <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                <rect width="100%" height="100%" fill="url(#pattern-dots)" opacity="0.5" />
                <rect width="100%" height="100%" fill="url(#pattern-grid)" opacity="0.3" />
                
                {/* Animated floating elements */}
                <circle cx="10%" cy="20%" r="30" fill="rgba(255,255,255,0.05)" />
                <circle cx="90%" cy="80%" r="40" fill="rgba(255,255,255,0.05)" />
                <circle cx="70%" cy="30%" r="25" fill="rgba(255,255,255,0.05)" />
                
                {/* Geometric shapes */}
                <path d="M20%,20% L40%,10% L60%,30% Z" fill="rgba(255,255,255,0.08)" opacity="0.6" />
                <rect x="80%" y="10%" width="50" height="50" fill="rgba(255,255,255,0.08)" opacity="0.6" transform="rotate(45)" />
              </svg>
            </div>

            {/* SVG Pattern 2: Wave pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1000 300">
                <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
  )
}