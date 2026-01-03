// app/testimonials/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  User,
  Award,
  GraduationCap,
  Target,
  Users,
  Filter,
  QuoteIcon,
} from "lucide-react";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Tribal Student, Class 12",
    location: "Odisha",
    content:
      "U Fill Academy transformed my life. As a tribal student with limited resources, I never imagined I could compete for engineering entrance exams. The free coaching and personalized guidance helped me secure admission in IIT Bombay!",
    rating: 5,
    image: "/testimonial1.jpg",
    category: "students",
    videoUrl: "#",
    achievement: "IIT Bombay Admission",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Parent",
    location: "Jharkhand",
    content:
      "My daughter struggled with English for years. After joining U Fill Academy language program, her confidence skyrocketed. She is now the first in our family to attend college. We are forever grateful.",
    rating: 5,
    image: "/testimonial2.jpg",
    category: "parents",
    videoUrl: "#",
    achievement: "First Generation College Student",
  },
  {
    id: 3,
    name: "Dr. Anjali Mehta",
    role: "Volunteer Teacher",
    location: "Mumbai",
    content:
      "Teaching here has been the most rewarding experience of my career. Seeing these brilliant minds overcome socioeconomic barriers through education is truly inspiring. U Fill Academy is creating real change.",
    rating: 5,
    image: "/testimonial3.jpg",
    category: "volunteers",
    videoUrl: "#",
    achievement: "2+ Years Volunteering",
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Skill Development Graduate",
    location: "Gujarat",
    content:
      "The digital marketing course changed my life. Coming from a poor background, I now run my own small business and employ 3 other people from my community. Education truly is empowerment.",
    rating: 4,
    image: "/testimonial4.jpg",
    category: "graduates",
    videoUrl: "#",
    achievement: "Entrepreneur, 3 Employees",
  },
  {
    id: 5,
    name: "Sunita Devi",
    role: "Womens Education Program",
    location: "Rajasthan",
    content:
      "At 35, I learned to read and write for the first time. Now I help other women in my village. U Fill Academy gave me dignity and purpose. Education has no age limit.",
    rating: 5,
    image: "/testimonial5.jpg",
    category: "women",
    videoUrl: "#",
    achievement: "Literacy at 35",
  },
  {
    id: 6,
    name: "Karan Singh",
    role: "JEE Aspirant",
    location: "Uttar Pradesh",
    content:
      "The free test series and doubt sessions were game-changers. Without access to expensive coaching, I scored 98.5%ile in JEE. Thank you for making quality education accessible!",
    rating: 5,
    image: "/testimonial6.jpg",
    category: "students",
    videoUrl: "#",
    achievement: "JEE 98.5%ile",
  },
  {
    id: 7,
    name: "Meena Rani",
    role: "Scholarship Recipient",
    location: "Assam",
    content:
      "The scholarship program covered my entire engineering fees. Im now interning at a tech company and will be the first engineer in my family. This opportunity changed my familys future.",
    rating: 5,
    image: "/testimonial7.jpg",
    category: "scholarship",
    videoUrl: "#",
    achievement: "First Engineer in Family",
  },
  {
    id: 8,
    name: "Vikram Joshi",
    role: "Corporate Partner",
    location: "Bangalore",
    content:
      "Partnering with U Fill Academy has been incredibly impactful. The talent we have recruited from their programs is exceptional. Its proof that with opportunity, anyone can excel.",
    rating: 4,
    image: "/testimonial8.jpg",
    category: "partners",
    videoUrl: "#",
    achievement: "Corporate Partnership",
  },
];

const categories = [
  { id: "all", label: "All Stories", icon: Users, count: testimonials.length },
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    count: testimonials.filter((t) => t.category === "students").length,
  },
  {
    id: "parents",
    label: "Parents",
    icon: User,
    count: testimonials.filter((t) => t.category === "parents").length,
  },
  {
    id: "graduates",
    label: "Graduates",
    icon: Award,
    count: testimonials.filter((t) => t.category === "graduates").length,
  },
  {
    id: "women",
    label: "Women Empowerment",
    icon: Users,
    count: testimonials.filter((t) => t.category === "women").length,
  },
  {
    id: "volunteers",
    label: "Volunteers",
    icon: Target,
    count: testimonials.filter((t) => t.category === "volunteers").length,
  },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const featuredTestimonials = testimonials.slice(0, 3);
  const successStories = testimonials.filter((t) => t.rating === 5).slice(0, 4);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto mt-20 text-center">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-primary bg-blue-500/10">
          <QuoteIcon className="w-8 h-8" />
        </div> */}
        <h2 className="mb-6 font-serif text-5xl tracking-tighter md:text-7xl">
          <QuoteIcon className="inline-block w-8 h-8 mr-3 -mt-20 text-primary/70" />
          Stories That <span className="text-primary">Inspired</span> Us
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Real experiences from students, parents, and volunteers whose lives
          have been transformed through education.
        </p>

        {/* Stats */}
        {/* <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mb-12 md:grid-cols-4">
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-primary">5000+</div>
            <div className="text-muted-foreground">Lives Changed</div>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-primary">100+</div>
            <div className="text-muted-foreground">Communities Reached</div>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <div className="mb-2 text-3xl font-bold text-primary">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Featured Video Testimonials */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Featured Stories
            </h2>
            <Button variant="outline">
              <Play className="w-4 h-4 mr-2" />
              View All Videos
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="overflow-hidden transition-all duration-300 border group rounded-2xl bg-card border-border hover:shadow-2xl"
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm"></div>
                      <Play className="absolute w-8 h-8 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-xs text-white rounded-full bg-white/20 backdrop-blur-sm">
                      Video Testimonial
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/70"></div>
                      <Quote className="absolute w-4 h-4 text-white -bottom-1 -right-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {testimonial.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground">
              Filter by Category
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="relative"
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentIndex(0);
                }}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
                <span className="absolute px-2 py-1 text-xs text-white rounded-full -top-2 -right-2 bg-primary">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative p-6 transition-all duration-300 border rounded-2xl bg-card border-border group hover:shadow-2xl"
              >
                {/* Quote Icon */}
                <Quote className="absolute w-8 h-8 text-primary/20 top-4 right-4" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 italic text-foreground">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/70"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 rounded-full border-card"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-primary">
                        {testimonial.location}
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {testimonial.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel for Mobile */}
        <div className="mb-20 md:hidden">
          <div className="relative p-6 overflow-hidden border rounded-2xl bg-card border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                Success Stories
              </h3>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" onClick={prevSlide}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={nextSlide}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full shrink-0">
                    <div className="px-4">
                      <p className="mb-6 italic text-foreground">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/70"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories Highlight */}
        <div className="mb-20">
          <h3 className="mb-8 text-3xl font-bold text-center text-foreground">
            Notable Achievements
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="p-6 transition-all duration-300 border rounded-2xl bg-linear-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 group hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      {story.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {story.role} • {story.location}
                    </p>
                  </div>
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="my-4 text-foreground">{story.content}</p>
                <div className="px-4 py-2 rounded-lg bg-primary/20">
                  <span className="font-semibold text-primary">
                    Achievement:
                  </span>{" "}
                  {story.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Story CTA with Pattern */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
          {/* Heart Pattern */}
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="heart-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M50,20 C60,10 80,15 85,30 C90,45 70,60 50,80 C30,60 10,45 15,30 C20,15 40,10 50,20 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                </pattern>
                <pattern
                  id="star-pattern"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M30,0 L36,20 L56,20 L40,32 L46,52 L30,40 L14,52 L20,32 L4,20 L24,20 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heart-pattern)" />
              <rect
                width="100%"
                height="100%"
                fill="url(#star-pattern)"
                opacity="0.5"
              />

              {/* Floating Elements */}
              <circle cx="20%" cy="30%" r="25" fill="rgba(255,255,255,0.08)" />
              <circle cx="80%" cy="70%" r="30" fill="rgba(255,255,255,0.08)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Share Your Story
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Has U Fill Academy impacted your life? Share your journey and
              inspire others to pursue their dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Submit Your Testimonial
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white border-white hover:bg-white/10"
              >
                Record Video Story
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white border-white hover:bg-white/10"
              >
                Share on Social Media
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20">
          <h3 className="mb-8 text-3xl font-bold text-center text-foreground">
            Impact by Numbers
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">
                Students Continue Education
              </div>
            </div>
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">80%</div>
              <div className="text-sm text-muted-foreground">
                First Generation Learners
              </div>
            </div>
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">65%</div>
              <div className="text-sm text-muted-foreground">Women & Girls</div>
            </div>
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">
                Tribal Communities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
