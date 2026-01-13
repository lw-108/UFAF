// app/projects/page.tsx
"use client";

import {
  ExternalLink,
  Github,
  Star,
  Users,
  ChevronRight,
  GraduationCap,
  Play,
  Code,
  Video,
  Globe,
  Eye,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";
import { useState, useEffect } from "react";

const studentProjects = [
  {
    id: 1,
    title: "Smart Classroom Dashboard",
    studentName: "Priya Sharma",
    studentRole: "Final Year CS Student",
    description:
      "A real-time dashboard for teachers to monitor student engagement and performance with AI-powered analytics.",
    videoId: "ywwbBBZ583U",
    githubUrl: "https://github.com/ufill/smart-classroom",
    liveDemo: "https://smartclassroom.ufill.org",
    techStack: ["React", "Node.js", "Socket.io", "Chart.js", "MongoDB"],
    duration: "4 months",
    views: "2.5k",
    stars: 142,
    forks: 32,
    contributors: 5,
    featured: true,
    achievement: "",
  },
  {
    id: 2,
    title: "AI Language Tutor",
    studentName: "Raj Kumar",
    studentRole: "AI/ML Student",
    description:
      "An intelligent language learning app that adapts to individual learning patterns using speech recognition.",
    videoId: "9KPWMNUQTEg",
    githubUrl: "https://github.com/ufill/ai-language-tutor",
    liveDemo: "https://ailanguagetutor.ufill.org",
    techStack: ["Python", "TensorFlow", "FastAPI", "React Native", "Redis"],
    duration: "6 months",
    views: "1.8k",
    stars: 89,
    forks: 21,
    contributors: 3,
    featured: true,
    achievement: "",
  },
  {
    id: 3,
    title: "Virtual Science Lab",
    studentName: "Anjali Mehta",
    studentRole: "Physics Major",
    description:
      "Interactive virtual laboratory with 3D simulations for conducting physics and chemistry experiments.",
    videoId: "GaLESAgU_Sw",
    githubUrl: "https://github.com/ufill/virtual-science-lab",
    liveDemo: "https://virtuallab.ufill.org",
    techStack: ["Three.js", "WebGL", "TypeScript", "WebRTC", "Node.js"],
    duration: "8 months",
    views: "3.2k",
    stars: 215,
    forks: 45,
    contributors: 7,
    featured: true,
    achievement: "",
  },
  {
    id: 4,
    title: "Accessible Exam Platform",
    studentName: "Suresh Patel",
    studentRole: "Accessibility Advocate",
    description:
      "An exam platform designed with accessibility features for students with visual and hearing impairments.",
    videoId: "zFS7GHPQD_o",
    githubUrl: "https://github.com/ufill/accessible-exam",
    liveDemo: "https://accessibleexam.ufill.org",
    techStack: ["Vue.js", "Web Speech API", "PWA", "PostgreSQL", "Docker"],
    duration: "5 months",
    views: "1.4k",
    stars: 76,
    forks: 18,
    contributors: 4,
    featured: true,
    achievement: "",
  },
  {
    id: 5,
    title: "Peer Learning Network",
    studentName: "Meena Das",
    studentRole: "Education Technology",
    description:
      "A collaborative platform where students can learn from each other through video sessions and shared notes.",
    videoId: "yvaWO5ZDdDs",
    githubUrl: "https://github.com/ufill/peer-learning",
    liveDemo: "https://peerlearning.ufill.org",
    techStack: ["Next.js", "WebRTC", "Firebase", "Tailwind", "Stripe"],
    duration: "7 months",
    views: "2.1k",
    stars: 124,
    forks: 29,
    contributors: 6,
    featured: true,
    achievement: "",
  },
  {
    id: 6,
    title: "Code Mentor AI",
    studentName: "Karan Singh",
    studentRole: "CS Graduate",
    description:
      "AI-powered code review system that provides instant feedback and suggestions for programming assignments.",
    videoId: "IBpEjh-GX8Q",
    githubUrl: "https://github.com/ufill/code-mentor-ai",
    liveDemo: "https://codementorai.ufill.org",
    techStack: ["Python", "OpenAI API", "React", "MongoDB", "Docker"],
    duration: "9 months",
    views: "2.8k",
    stars: 187,
    forks: 41,
    contributors: 8,
    featured: true,
    achievement: "",
  },
  {
    id: 7,
    title: "Rural Education Portal",
    studentName: "Sunita Devi",
    studentRole: "Social Entrepreneur",
    description:
      "Offline-first educational portal designed for low-connectivity areas with localized content.",
    videoId: "b6Y8zLTx73w",
    githubUrl: "https://github.com/ufill/rural-edu-portal",
    liveDemo: "https://ruraledu.ufill.org",
    techStack: ["React", "PWA", "IndexedDB", "Service Workers", "Express"],
    duration: "6 months",
    views: "1.6k",
    stars: 92,
    forks: 23,
    contributors: 5,
    featured: true,
    achievement: "",
  },
  {
    id: 8,
    title: "Math Visualizer",
    studentName: "Arun Verma",
    studentRole: "Mathematics Student",
    description:
      "Interactive tool that visualizes complex mathematical concepts through animations and simulations.",
    videoId: "eh7_ZsAWph4",
    githubUrl: "https://github.com/ufill/math-visualizer",
    liveDemo: "https://mathvisualizer.ufill.org",
    techStack: ["D3.js", "Canvas API", "React", "MathJax", "Node.js"],
    duration: "4 months",
    views: "2.3k",
    stars: 135,
    forks: 31,
    contributors: 4,
    featured: true,
    achievement: "",
  },
];

const projectCategories = [
  "All Projects",
  "AI/ML",
  "Web Development",
  "Mobile Apps",
  "Accessibility",
  "Education Tools",
  "Open Source",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get YouTube thumbnail URL
  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  const openVideoModal = (videoId: string, project: any) => {
    setSelectedVideo(videoId);
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideoModal();
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isModalOpen &&
        (e.target as HTMLElement).classList.contains("modal-overlay")
      ) {
        closeVideoModal();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm">
          {/* Scroll Container */}
          <div className="absolute inset-0 overflow-y-auto">
            <div className="flex justify-center min-h-screen px-4 py-12">
              {/* Modal Card */}
              <div className="relative w-full max-w-4xl">
                {/* Close Button */}
                <button
                  onClick={closeVideoModal}
                  className="sticky top-0 z-20 float-right p-2 mb-4 text-white transition hover:text-gray-300"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Video */}
                <div className="relative pt-[56.25%] bg-black rounded-2xl overflow-hidden">
                  <iframe
                    src={getEmbedUrl(selectedVideo)}
                    className="absolute inset-0 w-full h-full"
                    title={selectedProject?.title || "Project Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
                {selectedProject && (
                  <div className="p-6 mt-6 rounded-2xl bg-background">
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {selectedProject.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      By {selectedProject.studentName} •{" "}
                      {selectedProject.studentRole}
                    </p>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-white transition bg-gray-800 rounded-lg hover:bg-gray-900"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>

                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-white transition rounded-lg bg-primary hover:bg-primary/90"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto mt-20 text-center">
        <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
          Student <span className="text-primary">Project</span> Showcase
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Watch our students' innovative projects in action. From concept to
          deployment, see how they're solving real-world problems through
          technology.
        </p>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div> */}

        {/* Featured Projects Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Featured Project Videos
            </h2>
             <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-transparent border border-black rounded-full dark:border-white ">
              <span className="font-medium">Click to watch</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {studentProjects
              .filter((project) => project.featured)
              .slice(0, 2)
              .map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden transition-all duration-300 border rounded-2xl bg-card border-border hover:shadow-xl"
                >
                  {/* Video Player */}
                  <div
                    className="relative pt-[56.25%] bg-black cursor-pointer"
                    onClick={() => openVideoModal(project.videoId, project)}
                  >
                    <img
                      src={getThumbnailUrl(project.videoId)}
                      alt={`${project.title} video thumbnail`}
                      className="absolute inset-0 object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full"></div>
                        <Play className="absolute w-10 h-10 text-transparent transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                      </div>
                    </div>
                    {/* <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 text-xs text-white rounded-full bg-black/70">
                        Click to Play
                      </span>
                    </div> */}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          By {project.studentName} • {project.studentRole}
                        </p>
                      </div>
                      {project.achievement && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {project.achievement}
                        </span>
                      )}
                    </div>

                    <p className="mb-6 text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats and Links */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">
                            {project.contributors}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{project.views}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm transition-colors rounded-lg hover:bg-muted"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
                        >
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-bold text-center text-foreground">
            All Student Projects
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {studentProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden transition-all duration-300 border cursor-pointer rounded-2xl bg-card border-border group hover:shadow-xl hover:-translate-y-1"
                onClick={() => openVideoModal(project.videoId, project)}
              >
                {/* Video Thumbnail */}
                <div className="relative pt-[56.25%] bg-black overflow-hidden">
                  {/* YouTube Thumbnail */}
                  <img
                    src={getThumbnailUrl(project.videoId)}
                    alt={`${project.title} video thumbnail`}
                    className="absolute inset-0 object-cover w-full h-full "
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-linear-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative ">
                      <div className="w-16 h-16 rounded-full"></div>
                      <Play className="absolute w-8 h-8 text-transparent transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {/* <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 text-xs text-white rounded-full bg-black/70">
                      {project.duration}
                    </span>
                  </div> */}

                  {/* Play Overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className="px-3 py-1 text-sm font-medium text-white rounded-full bg-black/50">
                      Click to Play
                    </div>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate text-foreground">
                        {project.title}
                      </h4>
                      <p className="text-xs truncate text-muted-foreground">
                        By {project.studentName}
                      </p>
                    </div>
                    {project.featured && (
                      <Star className="flex-shrink-0 w-4 h-4 ml-2 text-yellow-500" />
                    )}
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-yellow-500" />
                        <span className="text-xs font-medium">
                          {project.stars}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-blue-500" />
                        <span className="text-xs font-medium">
                          {project.forks}
                        </span>
                      </div>
                    </div>

                    {/* <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors rounded-lg hover:bg-muted"
                        title="View on GitHub"
                        onClick={(e) => e.stopPropagation()} // Prevent card click
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors rounded-lg hover:bg-muted"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()} // Prevent card click
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contribute Section */}
        <div className="container px-4 mx-auto mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
            <div className="relative px-8 py-12 md:px-12">
              <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
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
