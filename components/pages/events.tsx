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
} from "lucide-react";

// Event Data
const events = [
  {
    id: 1,
    title: "Free Python Webinar for College Students",
    description: "Conducted an engaging hands-on Python programming webinar to enhance coding literacy among college students.",
    date: "Oct 15, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Online (Zoom)",
    type: "workshop",
    seats: "50/100",
    status: "completed",
    image: "/python-webminar.png",
    highlight: "Featured",
    tags: ["Python", "Programming", "Beginner"],
  },
  {
    id: 2,
    title: "Free AI & Robotics Sessions",
    description: "Conducted free AI and Robotics workshops for school students, introducing the fundamentals of intelligent systems.",
    date: "Nov 5, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Meenakshi Academy",
    type: "demo",
    seats: "30/50",
    status: "completed",
    image: "/robotics.png",
    highlight: "Tech",
    tags: ["AI", "Robotics", "STEM"],
  },
  {
    id: 3,
    title: "Free App Development Webinar",
    description: "Introduced young innovators to app development, nurturing creativity and problem-solving through practical learning.",
    date: "Sep 20, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Online",
    type: "bootcamp",
    seats: "Completed",
    status: "completed",
    image: "/app-dev.png",
    highlight: "Popular",
    tags: ["App Dev", "Mobile", "Creative"],
  },
  {
    id: 4,
    title: "Tamil Orientation Event",
    description: "Hosted a Tamil orientation event promoting unity and peace through language and culture on International Peace Day.",
    date: "Sep 21, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "Community Hall",
    type: "cultural",
    seats: "80/150",
    status: "completed",
    image: "/tamil-contest.png",
    highlight: "Cultural",
    tags: ["Tamil", "Culture", "Community"],
  },
];

const eventTypes = [
  { id: "all", name: "All Events", icon: "", count: 4 },
  { id: "workshop", name: "Workshops", icon: "", count: 1 },
  { id: "cultural", name: "Cultural", icon: "", count: 1 },
  { id: "demo", name: "Demos", icon: "", count: 1 },
  { id: "bootcamp", name: "Bootcamps", icon: "", count: 1 },
];

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    return activeFilter === "all" || event.type === activeFilter;
  });

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavbarWithMegaMenu />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="container relative px-6 mx-auto sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-primary/10 text-primary border-primary/20">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Events Gallery</span>
            </div>

            <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
              Impactful <span className="text-primary">Events</span>
            </h1>

            <p className="mb-8 text-lg text-black dark:text-white md:text-xl">
              Explore our completed events that have transformed lives through education
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky z-10 py-4 mb-8 top-24 bg-background/80 backdrop-blur-sm">
        <div className="container px-6 mx-auto sm:px-8 lg:px-12">
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
                <span className="text-sm">{type.icon}</span>
                <span className="text-sm font-medium">{type.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded ${
                  activeFilter === type.id
                    ? "bg-white/20"
                    : "bg-primary/10 text-primary"
                }`}>
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Full Height Split Layout */}
      <section className="pb-20">
        <div className="container px-6 mx-auto sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl"
              >
                {/* FULL HEIGHT SPLIT LAYOUT */}
                <div className="flex flex-col md:flex-row h-125 md:h-100 lg:h-112.5 bg-background">
                  
                  {/* LEFT HALF: FULL SIZE IMAGE - NO PIXEL MISSING */}
                  <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                    {/* Image Container - Exact 50% of card */}
                    <div className="absolute inset-0">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                        unoptimized={true}
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      
                      {/* Overlay only for badges - not covering image */}
                      <div className="absolute z-10 top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-linear-to-r from-primary to-primary/80">
                          {event.highlight}
                        </span>
                      </div>
                      
                      <div className="absolute z-10 top-4 right-4">
                        <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-green-500/90">
                          Completed
                        </span>
                      </div>
                      
                      {/* Minimal gradient for text readability */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/30 to-transparent md:hidden"></div>
                    </div>
                  </div>

                  {/* RIGHT HALF: EVENT DETAILS */}
                  <div className="flex flex-col w-full p-6 overflow-auto md:w-1/2 h-1/2 md:h-full md:p-8">
                    {/* Title - Visible on mobile over gradient */}
                    <h3 className="mb-3 text-xl font-bold leading-tight text-black dark:text-white md:mb-4">
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-black dark:text-white grow">
                      {event.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs border rounded-full bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Details Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-black dark:text-white" />
                          <span className="text-sm font-medium text-black dark:text-white">Date</span>
                        </div>
                        <div className="text-sm text-black dark:text-white">{event.date}</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-black dark:text-white" />
                          <span className="text-sm font-medium text-black dark:text-white">Time</span>
                        </div>
                        <div className="text-sm text-black dark:text-white">{event.time}</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-black dark:text-white" />
                          <span className="text-sm font-medium text-black dark:text-white">Location</span>
                        </div>
                        <div className="text-sm text-black truncate dark:text-white">{event.location}</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-black dark:text-white" />
                          <span className="text-sm font-medium text-black dark:text-white">Participants</span>
                        </div>
                        <div className="text-sm text-black dark:text-white">{event.seats}</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <Button className="flex-1 gap-2 text-white bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                        <Video className="w-4 h-4" />
                        View Photos
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2 text-black border-gray-300 dark:text-white hover:border-primary hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Empty State */}
            {filteredEvents.length === 0 && (
              <div className="flex flex-col items-center justify-center col-span-2 p-12 text-center bg-black border border-gray-200 rounded-2xl">
                <Calendar className="w-20 h-20 mb-6 text-black dark:text-white" />
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                  No events found
                </h3>
                <p className="max-w-md mb-8 text-black dark:text-white">
                  Try selecting a different category or check back soon for upcoming events.
                </p>
                <Button
                  onClick={() => setActiveFilter("all")}
                  className="gap-3 px-8 py-6 text-lg text-white bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary rounded-xl"
                >
                  <ArrowRight className="w-5 h-5" />
                  View All Events
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <div className="pb-20">
        <div className="container px-6 mx-auto sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#wave)" />
              </svg>
            </div>

            <div className="relative p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/20">
                    <Heart className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">Join Our Mission</span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    Help Us Create More Impact
                  </h2>
                  <p className="mb-6 text-white/90">
                    Support our mission to provide free educational events and reach thousands of underprivileged students across communities.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" variant="secondary" className="gap-2 bg-primary/10">
                      <Zap className="w-4 h-4" />
                      Volunteer Today
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 text-white border-white hover:bg-white/10">
                      <Target className="w-4 h-4" />
                      Propose Event
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 text-center bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="mb-1 text-3xl font-bold text-white">2K+</div>
                    <div className="text-sm text-white/80">Students Impacted</div>
                  </div>
                  <div className="p-6 text-center bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="mb-1 text-3xl font-bold text-white">4</div>
                    <div className="text-sm text-white/80">Events Completed</div>
                  </div>
                  <div className="p-6 text-center bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="mb-1 text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-white/80">Free Access</div>
                  </div>
                  <div className="p-6 text-center bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="mb-1 text-3xl font-bold text-white">5★</div>
                    <div className="text-sm text-white/80">Satisfaction</div>
                  </div>
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