// app/blog/page.tsx
import { Calendar, User, ArrowRight, Clock, Tag, Search, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Online Education in 2026",
    excerpt: "Explore how AI and machine learning are revolutionizing the way we learn online and what trends to watch out for.",
    image: "https://media1.giphy.com/media/GSoFOqB2EIjDy/giphy.gif",
    author: "Dr. Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Education", "Future Trends"]
  },
  {
    id: 2,
    title: "Building Accessible Learning Platforms",
    excerpt: "Best practices for creating educational websites that are accessible to all learners, including those with disabilities.",
    image: "/blog2.jpg",
    author: "Michael Chen",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Development",
    tags: ["Accessibility", "Web Development", "Inclusive Design"]
  },
  {
    id: 3,
    title: "The Psychology of Effective Learning",
    excerpt: "How cognitive science can help us design better learning experiences and improve knowledge retention.",
    image: "/blog3.jpg",
    author: "Dr. Emily Rodriguez",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Psychology",
    tags: ["Learning Science", "Cognitive Psychology", "Education"]
  },
  {
    id: 4,
    title: "Open Source Tools for Educators",
    excerpt: "A comprehensive guide to free and open-source tools that can enhance teaching and learning experiences.",
    image: "/blog4.jpg",
    author: "Alex Thompson",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    category: "Resources",
    tags: ["Open Source", "Tools", "EdTech"]
  },
  {
    id: 5,
    title: "Gamification in Education",
    excerpt: "How game mechanics can increase student engagement and improve learning outcomes in digital classrooms.",
    image: "/blog5.jpg",
    author: "James Wilson",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    category: "Methodology",
    tags: ["Gamification", "Engagement", "Teaching Methods"]
  },
  {
    id: 6,
    title: "Data Privacy in EdTech",
    excerpt: "Understanding data protection regulations and best practices for handling student information.",
    image: "/blog6.jpg",
    author: "Lisa Park",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "Legal",
    tags: ["Privacy", "GDPR", "Security"]
  },
]

const categories = [
  "All Topics",
  "Technology",
  "Development",
  "Psychology",
  "Resources",
  "Methodology",
  "Legal",
  "Case Studies"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
              <NavbarWithMegaMenu />
            </div>
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto mt-20 text-center">
        <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
              Educational Insights & <span className="text-primary">Learning</span> Tips
            </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Stay updated with the latest trends, research, and best practices in education technology and learning methodologies.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute w-5 h-5 left-4 top-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              className="w-full py-4 pl-12 pr-4 border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-card border-border"
            />
            <Button className="absolute right-3 top-3">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All Topics" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="overflow-hidden border rounded-3xl bg-card border-border">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">
                    Featured
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">{blogPosts[0].title}</h2>
                <p className="mb-6 text-muted-foreground">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center gap-2 transition-colors text-primary hover:text-primary/80"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center justify-center object-coverr min-h-75 bg-muted">
                <div className="flex items-center justify-center w-full h-full p-4">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-card border-border"
            >
              {/* Image */}
              <div className="flex items-center justify-center h-48 bg-muted">
                <div className="flex items-center justify-center w-full h-full p-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary text-foreground">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA with Pattern */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
          {/* Diamond Grid Pattern */}
          <div className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diamond-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M0,40 L40,0 L80,40 L40,80 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                </pattern>
                <pattern id="triangle-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,0 60,60 0,60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
              <rect width="100%" height="100%" fill="url(#triangle-pattern)" opacity="0.5" />
              
              {/* Floating Elements */}
              <circle cx="15%" cy="25%" r="20" fill="rgba(255,255,255,0.08)" />
              <circle cx="85%" cy="75%" r="25" fill="rgba(255,255,255,0.08)" />
              <rect x="75%" y="15%" width="30" height="30" fill="rgba(255,255,255,0.08)" transform="rotate(45)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white">Subscribe to Our Newsletter</h3>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Get weekly updates on educational research, teaching strategies, and EdTech innovations.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-white border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}