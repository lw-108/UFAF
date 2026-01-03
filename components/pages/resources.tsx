// app/resources/page.tsx
import {
  Download,
  FileText,
  Video,
  BookOpen,
  Search,
  Filter,
  ArrowDown,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

const resources = [
  {
    id: 1,
    title: "Complete React Learning Guide",
    description:
      "A comprehensive guide covering React fundamentals, hooks, state management, and best practices.",
    type: "PDF Guide",
    fileSize: "4.2 MB",
    downloads: 1245,
    category: "Development",
    tags: ["React", "JavaScript", "Frontend"],
    downloadLink: "/resources/react-guide.pdf",
    previewLink: "/preview/react-guide",
    rating: 4.8,
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    description:
      "Learn essential design principles for creating user-friendly educational interfaces.",
    type: "Video Course",
    fileSize: "1.8 GB",
    downloads: 876,
    category: "Design",
    tags: ["UI/UX", "Figma", "Prototyping"],
    downloadLink: "/resources/design-course.zip",
    previewLink: "/preview/design-course",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    description:
      "Introduction to ML concepts with practical examples and Python implementations.",
    type: "Notebook",
    fileSize: "15.3 MB",
    downloads: 2103,
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "Data Science"],
    downloadLink: "/resources/ml-basics.ipynb",
    previewLink: "/preview/ml-basics",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Accessibility Checklist",
    description:
      "Comprehensive checklist for making educational websites accessible to all users.",
    type: "Checklist",
    fileSize: "0.8 MB",
    downloads: 987,
    category: "Accessibility",
    tags: ["WCAG", "ARIA", "Screen Readers"],
    downloadLink: "/resources/accessibility-checklist.pdf",
    previewLink: "/preview/accessibility",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Teaching Strategies eBook",
    description:
      "Modern teaching methodologies for digital classrooms and remote learning environments.",
    type: "eBook",
    fileSize: "3.5 MB",
    downloads: 1567,
    category: "Education",
    tags: ["Pedagogy", "Online Teaching", "Curriculum"],
    downloadLink: "/resources/teaching-strategies.epub",
    previewLink: "/preview/teaching-strategies",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Project Templates Bundle",
    description:
      "Starter templates for educational websites, LMS platforms, and learning apps.",
    type: "Code Templates",
    fileSize: "32.7 MB",
    downloads: 654,
    category: "Templates",
    tags: ["HTML/CSS", "React", "Next.js"],
    downloadLink: "/resources/templates-bundle.zip",
    previewLink: "/preview/templates",
    rating: 4.5,
  },
];

const resourceTypes = [
  { icon: FileText, label: "PDF Guides", count: 24 },
  { icon: Video, label: "Video Courses", count: 12 },
  { icon: BookOpen, label: "eBooks", count: 18 },
  { icon: Download, label: "Templates", count: 36 },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto mt-20 text-center">
        <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
              Free Educational <span className="text-primary">Resources</span>
            </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Download high-quality study materials, guides, templates, and learning
          resources completely free.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute w-5 h-5 left-4 top-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources by title, category, or keyword..."
              className="w-full py-4 pl-12 pr-4 border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-card border-border"
            />
            <Button className="absolute right-3 top-3">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Resource Types */}
        <div className="grid grid-cols-2 gap-6 mb-12 md:grid-cols-4">
          {resourceTypes.map((type) => (
            <div
              key={type.label}
              className="p-6 transition-colors border cursor-pointer rounded-2xl bg-card border-border hover:bg-card/80 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {type.count}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {type.label}
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground group-hover:text-foreground/70">
                Click to browse
              </div>
            </div>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-card border-border"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 mb-2 text-xs rounded-full bg-primary/20 text-primary">
                      {resource.type}
                    </span>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary text-foreground">
                      {resource.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-6 text-sm text-muted-foreground">
                  {resource.description}
                </p>

                {/* Tags & Rating */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {resource.category}
                    </span>
                    {resource.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-foreground">{resource.rating}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Download className="w-4 h-4" />
                    <span>{resource.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{resource.fileSize}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={resource.previewLink}
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 transition-colors rounded-lg bg-secondary hover:bg-secondary/80"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Preview</span>
                  </a>
                  <a
                    href={resource.downloadLink}
                    download
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 transition-colors rounded-lg bg-primary hover:bg-primary/90"
                  >
                    <ArrowDown className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Stats CTA with Pattern */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
          {/* Hexagon Pattern */}
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="hexagon-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M50,0 L100,25 L100,75 L50,100 L0,75 L0,25 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                </pattern>
                <pattern
                  id="circle-wave"
                  x="0"
                  y="0"
                  width="120"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="20"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
              <rect
                width="100%"
                height="100%"
                fill="url(#circle-wave)"
                opacity="0.6"
              />

              {/* Animated elements */}
              <circle
                cx="20%"
                cy="30%"
                r="15"
                fill="rgba(255,255,255,0.08)"
                className="animate-pulse"
              />
              <circle
                cx="80%"
                cy="70%"
                r="20"
                fill="rgba(255,255,255,0.08)"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </svg>
          </div>

          <div className="relative px-8 py-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Resource Usage Stats
                </h3>
                <p className="mb-6 text-white/90">
                  Our resources have been downloaded by educators, students, and
                  developers worldwide.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-bold text-white">8,756+</div>
                    <div className="text-white/70">Total Downloads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">124</div>
                    <div className="text-white/70">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">4.8★</div>
                    <div className="text-white/70">Average Rating</div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h4 className="mb-4 font-bold text-white">
                  Most Popular This Week
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-white/90">React Learning Guide</span>
                    <span className="text-primary-foreground">
                      342 downloads
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/90">
                      Teaching Strategies eBook
                    </span>
                    <span className="text-primary-foreground">
                      287 downloads
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/90">ML Basics Notebook</span>
                    <span className="text-primary-foreground">
                      234 downloads
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
