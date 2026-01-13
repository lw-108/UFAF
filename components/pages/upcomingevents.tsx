// app/events/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  Sparkles,
  Filter,
  ExternalLink,
  Video,
  Target,
  Trophy,
  Eye,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Award,
  Heart,
  Cpu,
  Brain,
  Users as UsersIcon,
  School,
  Globe,
  Code,
  BotIcon,
  PartyPopper,
  Megaphone,
  GraduationCap,
  Briefcase,
  Lightbulb,
  BookOpen,
  TrendingUp,
  Home,
  Book,
  MessageCircle,
  Coffee,
  Shield,
  Rocket,
  Flag,
} from "lucide-react";

// Event Data EXACTLY from your calendar
const upcomingEvents = [
  {
    id: 1,
    title: "U FILL IGNITE 2026",
    description:
      "Foundation event showcasing vision, roadmap, and demo classes for parents, students, and schools.",
    date: "April 2026",
    time: "Full Month Program",
    location: "Office (Offline + Live Stream)",
    type: "foundation",
    seats: "Open Registration",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    highlight: "FOUNDATION",
    tags: [
      "Vision",
      "Roadmap",
      "Demo Classes",
      "Parents",
      "Students",
      "Schools",
    ],
    icon: Sparkles,
    month: "APRIL",
    monthColor: "bg-purple-500",
    audience: "Parents, students, schools",
    focus: "Vision, roadmap, demo classes",
    mode: "Office",
    eventType: "Offline + Live Stream",
  },
  {
    id: 2,
    title: "ROBO-SPARK SUMMER BOOTCAMP",
    description:
      "Summer skills program for school students (6-10) focusing on robotics basics with hands-on kits.",
    date: "May 2026",
    time: "Summer Program",
    location: "Office",
    type: "summer",
    seats: "School students (6-10)",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
    highlight: "SUMMER SKILLS",
    tags: ["Robotics", "Summer", "Hands-on", "Kids", "Basics"],
    icon: BotIcon,
    month: "MAY",
    monthColor: "bg-yellow-500",
    audience: "School students (6-10)",
    focus: "Robotics basics, hands-on kits",
    mode: "Office",
    eventType: "Offline",
  },
  {
    id: 3,
    title: "AI ZERO → HERO",
    description:
      "AI awareness webinar series for school students (8-12) and beginners covering AI basics and future scope.",
    date: "June 2026",
    time: "Webinar Series",
    location: "Online",
    type: "ai",
    seats: "School (8-12), beginners",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    highlight: "AI AWARENESS",
    tags: ["AI", "Webinar", "Basics", "Future", "Education"],
    icon: Brain,
    month: "JUNE",
    monthColor: "bg-blue-500",
    audience: "School (8-12), beginners",
    focus: "AI basics, future scope",
    mode: "Online",
    eventType: "Online Webinar Series",
  },
  {
    id: 4,
    title: "PROJECT KARUNAI",
    description:
      "Social impact initiative providing free AI and robotics education to orphanage and underprivileged students.",
    date: "July 2026",
    time: "Outreach Program",
    location: "Orphanages & Community Centers",
    type: "social",
    seats: "Free for All",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&q=80",
    highlight: "SOCIAL IMPACT",
    tags: [
      "Free Education",
      "Orphanage",
      "Underprivileged",
      "Charity",
      "Community",
    ],
    icon: Heart,
    month: "JULY",
    monthColor: "bg-red-500",
    audience: "Orphanage & underprivileged students",
    focus: "Free AI & robotics education",
    mode: "Offline Outreach",
    eventType: "Offline Outreach",
  },
  {
    id: 5,
    title: "SMART INDIA YOUNG MAKERS",
    description:
      "Innovation program for school & college students focusing on India-based problem solving.",
    date: "August 2026",
    time: "Hybrid Program",
    location: "Hybrid (Online + Office)",
    type: "innovation",
    seats: "School & college students",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    highlight: "INNOVATION",
    tags: ["India", "Problem Solving", "Innovation", "Hybrid", "Makers"],
    icon: Lightbulb,
    month: "AUGUST",
    monthColor: "bg-orange-500",
    audience: "School & college students",
    focus: "India-based problem solving",
    mode: "Hybrid",
    eventType: "Hybrid",
  },
  {
    id: 6,
    title: "EDU-TECH COUNCIL MEET",
    description:
      "Partnership meeting for school principals, teachers, and parents for council formation & school tie-ups.",
    date: "September 2026",
    time: "Council Meeting",
    location: "Office",
    type: "partnership",
    seats: "By Invitation",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    highlight: "PARTNERSHIP",
    tags: ["Council", "Schools", "Teachers", "Parents", "Tie-ups"],
    icon: UsersIcon,
    month: "SEPTEMBER",
    monthColor: "bg-green-500",
    audience: "School principals, teachers, parents",
    focus: "Council formation & school tie-ups",
    mode: "Office",
    eventType: "Offline",
  },
  {
    id: 7,
    title: "AI-MINDS PRO TRACK",
    description:
      "Advanced track for college students specializing in Artificial Intelligence, Machine Learning & IoT.",
    date: "October 2026",
    time: "Advanced Program",
    location: "Hybrid",
    type: "advanced",
    seats: "College students",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    highlight: "ADVANCED TRACK",
    tags: [
      "Artificial Intelligence",
      "ML",
      "IoT",
      "Advanced",
      "Specialization",
    ],
    icon: Cpu,
    month: "OCTOBER",
    monthColor: "bg-indigo-500",
    audience: "College students",
    focus:
      "Artificial Intelligence, Machine Learning & Internet of Things specialization",
    mode: "Hybrid",
    eventType: "Hybrid",
  },
  {
    id: 8,
    title: "ROBO-GAMES LEAGUE",
    description:
      "Fun robotics games for school students including line follower, robo race, and sumo bot competitions.",
    date: "November 2026",
    time: "Games Competition",
    location: "Office Arena",
    type: "games",
    seats: "School students",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1560415755-bd80d0eda9c6?w=800&q=80",
    highlight: "FUN + GAMES",
    tags: ["Robo Games", "Competition", "Fun", "Line Follower", "Sumo Bot"],
    icon: Trophy,
    month: "NOVEMBER",
    monthColor: "bg-pink-500",
    audience: "School students",
    focus: "Line follower, Robo race, Sumo bot",
    mode: "Office",
    eventType: "Offline",
  },
  {
    id: 9,
    title: "WINTER CODE FEST",
    description:
      "Hackathon for school & college students focusing on coding and AI projects.",
    date: "December 2026",
    time: "48 Hours Hackathon",
    location: "Online",
    type: "hackathon",
    seats: "School & college students",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    highlight: "HACK & CODE",
    tags: ["Hackathon", "Coding", "AI", "Winter", "Online"],
    icon: Code,
    month: "DECEMBER",
    monthColor: "bg-blue-600",
    audience: "School & college students",
    focus: "Coding + AI mini hackathon",
    mode: "Online",
    eventType: "Online",
  },
  {
    id: 10,
    title: "FUTURE TECH CAREER WEEK",
    description:
      "Career guidance week for students & parents focusing on AI, Robotics & Startup careers.",
    date: "January 2027",
    time: "Week-long Program",
    location: "Online",
    type: "career",
    seats: "Students & parents",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    highlight: "CAREER",
    tags: ["Career", "Future Tech", "Startups", "Guidance", "Online"],
    icon: Briefcase,
    month: "JANUARY",
    monthColor: "bg-teal-500",
    audience: "Students & parents",
    focus: "AI, Robotics & Startup careers",
    mode: "Online",
    eventType: "Online",
  },
  {
    id: 11,
    title: "BUILD-A-THON",
    description:
      "Creation event for college students to build prototypes and transform them into products.",
    date: "February 2027",
    time: "Product Building",
    location: "Maker Space",
    type: "creation",
    seats: "College students",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    highlight: "CREATION",
    tags: ["Prototype", "Product", "Building", "Maker", "College"],
    icon: GraduationCap,
    month: "FEBRUARY",
    monthColor: "bg-rose-500",
    audience: "College students",
    focus: "Prototype to product",
    mode: "Maker Space",
    eventType: "Offline",
  },
  {
    id: 12,
    title: "U FILL TECH PREVIEW",
    description:
      "Showcase event for selected students to demo projects, rehearse, and prepare for media coverage.",
    date: "March 2027",
    time: "Preview Event",
    location: "Hybrid",
    type: "showcase",
    seats: "Selected students",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    highlight: "SHOWCASE",
    tags: ["Demo", "Rehearsal", "Media", "Showcase", "Selected"],
    icon: Megaphone,
    month: "MARCH",
    monthColor: "bg-amber-500",
    audience: "Selected students",
    focus: "Demo, rehearsal, media prep",
    mode: "Hybrid",
    eventType: "Hybrid",
  },
  {
    id: 13,
    title: "INTELLIGENCE INDIA I² – 2027",
    description:
      "National mega event featuring AI & Robotics Expo, national competitions, student innovations, and industry talks.",
    date: "April 2027",
    time: "3 Days Mega Event",
    location: "National Venue",
    type: "national",
    seats: "Open to Public",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80",
    highlight: "NATIONAL MEGA EVENT",
    tags: ["National", "Expo", "Competitions", "Industry", "Startups"],
    icon: Globe,
    month: "APRIL",
    monthColor: "bg-gradient-to-r from-purple-600 to-pink-600",
    audience:
      "Schools, Colleges, Students, Parents, Educators, Industry, Startups",
    focus: "National AI & Robotics Expo",
    mode: "National Venue",
    eventType: "Mega Offline Event",
  },
];

const eventTypes = [
  {
    id: "all",
    name: "All Events",
    icon: Calendar,
    count: upcomingEvents.length,
  },
  {
    id: "foundation",
    name: "Foundation",
    icon: Sparkles,
    count: upcomingEvents.filter((e) => e.type === "foundation").length,
  },
  {
    id: "summer",
    name: "Summer Skills",
    icon: BotIcon,
    count: upcomingEvents.filter((e) => e.type === "summer").length,
  },
  {
    id: "ai",
    name: "AI Awareness",
    icon: Brain,
    count: upcomingEvents.filter((e) => e.type === "ai").length,
  },
  {
    id: "social",
    name: "Social Impact",
    icon: Heart,
    count: upcomingEvents.filter((e) => e.type === "social").length,
  },
  {
    id: "innovation",
    name: "Innovation",
    icon: Lightbulb,
    count: upcomingEvents.filter((e) => e.type === "innovation").length,
  },
  {
    id: "national",
    name: "National",
    icon: Flag,
    count: upcomingEvents.filter((e) => e.type === "national").length,
  },
];

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = upcomingEvents.filter((event) => {
    return activeFilter === "all" || event.type === activeFilter;
  });

  const scrollToEvent = (eventId: number) => {
    const element = document.getElementById(`event-${eventId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Add highlight effect
      element.classList.add(
        "ring-4",
        "ring-primary/30",
        "transition-all",
        "duration-500"
      );
      setTimeout(() => {
        element.classList.remove("ring-4", "ring-primary/30");
      }, 2000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavbarWithMegaMenu />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-linear-to-b from-primary/5 via-transparent to-transparent">
        <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-primary bg-blue-500/10">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">Our Events Calendar</span>
            </div>

            <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
              April 2026 – <span className="text-primary">April 2027</span>
            </h1>

            <p className="mb-8 text-lg text-black dark:text-white md:text-xl">
              13 transformative events designed to empower students through
              technology and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs - Sticky */}
      <div className="z-10 py-4 mb-8 top-24 bg-background/80 backdrop-blur-sm">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                  activeFilter === type.id
                    ? "bg-linear-to-r from-primary to-primary/80 text-white shadow-lg"
                    : "bg-background text-black dark:text-white border border-gray-200 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {type.icon && <type.icon className="w-4 h-4" />}
                <span className="text-sm font-medium">{type.name}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded ${
                    activeFilter === type.id
                      ? "bg-white/20"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - BIG CARDS (2 per row) */}
      <section className="pb-20">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          {/* Calendar Timeline - Only show on desktop */}
          <div className="hidden mb-12 lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 h-1 transform -translate-y-1/2 top-5 "></div>

              <div className="grid gap-1 grid-cols-13">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className="relative z-10">
                    <button
                      onClick={() => scrollToEvent(event.id)}
                      className="flex flex-col items-center w-full p-2 text-center transition-all group hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-2xl"
                      aria-label={`Scroll to ${event.title}`}
                    >
                      {/* Month Circle */}
                      <div className="flex items-center justify-center w-10 h-10 mb-2 transition-all duration-300 rounded-full shadow-lg group-hover:shadow-xl bg-primary group-hover:w-11 group-hover:h-11">
                        <span className="text-sm font-bold text-white">
                          {index + 1}
                        </span>
                      </div>

                      {/* Tooltip on hover */}
                      <div className="absolute z-20 invisible px-3 py-2 mb-2 text-xs font-medium text-white transition-opacity -translate-x-1/2 border border-white rounded-lg opacity-0 bg-background group-hover:visible group-hover:opacity-100 bottom-full left-1/2 whitespace-nowrap">
                        {event.title}
                        <div className="absolute w-2 h-2 transform rotate-45 -translate-x-1/2 border border-white -z-110 bg-background left-1/2 top-full"></div>
                      </div>

                      {/* Connector Line */}
                      {index < 12 && (
                        <div className="absolute right-0 w-full h-0.5 transform translate-x-1/2 bg-black dark:bg-white top-7 -z-10"></div>
                      )}

                      {/* Event Title */}
                      <div className="mt-2">
                        {/* <div className="text-xs font-semibold text-black transition-colors group-hover:text-primary dark:text-white line-clamp-2">
                          {event.title.split(" ")[6]}
                        </div> */}
                        <div className="mt-1 text-xs transition-colors group-hover:text-primary/80 text-muted-foreground">
                          {event.month.substring(0, 3)}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BIG EVENT CARDS - 2 per row */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                id={`event-${event.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden transition-all duration-300 border border-gray-100 shadow-xl bg-background group rounded-3xl hover:shadow-3xl hover:-translate-y-2"
              >
                {/* Event Card - BIG SIZE */}
                <div className="h-full flex flex-col min-h-150 lg:min-h-162.5">
                  {/* BIG Image Section */}
                  <div className="relative h-64 overflow-hidden lg:h-72">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 "
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index < 4}
                    />

                    {/* Month Badge - BIG */}
                    <div className="absolute top-6 left-6">
                      <div
                        className={`${event.monthColor} px-4 py-2 rounded-full shadow-xl`}
                      >
                        <span className="text-sm font-bold text-white">
                          {event.month} 202{event.id < 13 ? "6" : "7"}
                        </span>
                      </div>
                    </div>

                    {/* Highlight Badge - BIG */}
                    <div className="absolute top-6 right-6">
                      <div className="px-4 py-2 rounded-full shadow-xl bg-linear-to-r from-primary to-primary/80">
                        <span className="text-sm font-bold text-white">
                          {event.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* BIG Content Section */}
                  <div className="flex-1 p-8">
                    {/* BIG Title */}
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-black lg:text-3xl dark:text-white">
                      {event.title}
                    </h3>

                    {/* BIG Description */}
                    <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>

                    {/* Event Details Grid - 2 columns */}
                    <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Target className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                          <div>
                            <div className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              FOCUS
                            </div>
                            <div className="text-sm text-black lg:text-base dark:text-white">
                              {event.focus}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                          <div>
                            <div className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              AUDIENCE
                            </div>
                            <div className="text-sm text-black lg:text-base dark:text-white">
                              {event.audience}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Home className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                          <div>
                            <div className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              MODE
                            </div>
                            <div className="text-sm text-black lg:text-base dark:text-white">
                              {event.mode}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                          <div>
                            <div className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                              TYPE
                            </div>
                            <div className="text-sm text-black lg:text-base dark:text-white">
                              {event.eventType}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tags - BIG */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 text-sm border rounded-full bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* BIG Action Buttons */}
                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                      <Button className="flex-1 gap-3 py-6 text-base text-white bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary rounded-xl">
                        <Calendar className="w-5 h-5" />
                        Register Interest
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-3 py-6 text-base text-black border-gray-300 dark:text-white hover:border-primary hover:text-primary rounded-xl"
                      >
                        <Eye className="w-5 h-5" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Empty State */}
            {filteredEvents.length === 0 && (
              <div className="flex flex-col items-center justify-center col-span-2 p-16 text-center border-2 border-gray-200 rounded-3xl">
                <Calendar className="w-24 h-24 mb-8 text-gray-400" />
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  No events found in this category
                </h3>
                <p className="max-w-md mb-10 text-lg text-gray-600 dark:text-gray-400">
                  Try selecting "All Events" or check back for updates.
                </p>
                <Button
                  onClick={() => setActiveFilter("all")}
                  className="gap-4 px-10 text-xl text-white py-7 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary rounded-2xl"
                >
                  <ArrowRight className="w-6 h-6" />
                  View All 13 Events
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* National Mega Event Highlight - BIG */}
      <div className="pb-20">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-purple-600 via-pink-600 to-blue-600">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                                radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                  backgroundSize: "100px 100px",
                }}
              ></div>
            </div>

            <div className="relative p-10 md:p-16">
              <div className="grid items-center w-full gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <div className="inline-flex items-center gap-3 px-5 py-3 mb-6 rounded-full bg-white/20">
                    <Flag className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium text-white">
                      National Mega Event
                    </span>
                  </div>
                  <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                    🚀 APRIL 2027 | NATIONAL MEGA EVENT
                  </h2>
                  <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                    🇮🇳 INTELLIGENCE INDIA I² – 2027
                  </h3>
                  <p className="mb-8 text-lg text-white/90">
                    National AI & Robotics Expo to position U Fill Academy as a
                    national tech education brand.
                  </p>

                  <div className="mb-10 space-y-4">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span className="text-white">
                        <strong>Type:</strong> Mega Offline Event
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span className="text-white">
                        <strong>Level:</strong> National
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span className="text-white">
                        <strong>For:</strong> Schools, Colleges, Students,
                        Parents, Educators, Industry, Startups
                      </span>
                    </div>
                  </div>

                  <h4 className="mb-4 text-xl font-semibold text-white">
                    Includes:
                  </h4>
                  <div className="mb-10 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-white/90">AI & Robotics Expo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-white/90">
                        National-level Competitions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-white/90">
                        Student Innovation Pavilion
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-white/90">Industry Talks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-white/90">
                        I² CARE – Free participation for orphan students
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="gap-3 px-8 py-6 text-base text-purple-600 bg-white hover:bg-white/90 rounded-xl"
                    >
                      <BookOpen className="w-5 h-5" />
                      Learn More
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="gap-3 px-8 py-6 text-base text-white border-white hover:bg-white/10 hover:text-white rounded-xl"
                    >
                      <Target className="w-5 h-5" />
                      Partner with Us
                    </Button>
                  </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="mb-2 text-4xl font-bold text-white">3</div>
                    <div className="text-base text-white/80">Days Expo</div>
                  </div>
                  <div className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="mb-2 text-4xl font-bold text-white">
                      All
                    </div>
                    <div className="text-base text-white/80">Stakeholders</div>
                  </div>
                  <div className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="mb-2 text-4xl font-bold text-white">
                      Free
                    </div>
                    <div className="text-base text-white/80">For Orphans</div>
                  </div>
                  <div className="p-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="mb-2 text-4xl font-bold text-white">
                      National
                    </div>
                    <div className="text-base text-white/80">Brand Goal</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA - BIG */}
      <div className="pb-20">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 gradient(circle_at_30px_30px,rgba(255,255,255,0.15)_2px,transparent_0)] bg-size-[60px_60px] animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.08)_20px,rgba(255,255,255,0.08)_40px)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 -translate-x-32 -translate-y-32 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-48 translate-y-48 rounded-full w-96 h-96 bg-white/5 blur-3xl"></div>

            {/* Grid Pattern Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 70px)`,
                backgroundSize: "40px 40px",
                maskImage:
                  "radial-gradient(circle at center, black, transparent 80%)",
              }}
            ></div>

            {/* Animated Dots Pattern */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white/20 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Tech Icons Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="absolute top-20 right-20">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 3v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3H9z" />
                </svg>
              </div>
              <div className="absolute bottom-20 left-20">
                <svg
                  className="w-14 h-14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              </div>
              <div className="absolute bottom-10 right-10">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
            </div>

            {/* Main Content */}
            <div className="relative p-10 md:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-3 px-5 py-3 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
                  <Rocket className="w-5 h-5 text-white animate-bounce" />
                  <span className="text-sm font-medium text-white">
                    Join Our Mission
                  </span>
                </div>
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Help Us Build India's Tech Future
                </h2>
                <p className="mb-10 text-xl text-white/90">
                  Partner with U Fill Academy to create impactful events that
                  transform lives through technology education. Together, we can
                  build a smarter, more innovative India.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="gap-4 px-10 text-base transition-all duration-300 bg-white shadow-lg py-7 text-primary hover:bg-white/90 rounded-xl hover:shadow-xl"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Express Interest
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="gap-4 px-10 text-base text-white transition-all duration-300 border-2 border-white py-7 hover:bg-white/10 hover:text-white rounded-xl backdrop-blur-sm"
                  >
                    <Shield className="w-6 h-6" />
                    Become a Partner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
