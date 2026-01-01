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
  Ticket,
  Video,
  Target,
  Trophy,
} from "lucide-react";

// Event Data - Using achievements as events
const events = [
  {
    id: 1,
    title: "Free Python Webinar for College Students",
    description:
      "Conducted an engaging hands-on Python programming webinar to enhance coding literacy among college students.",
    date: "Oct 15, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Online (Zoom)",
    type: "workshop",
    seats: "50/100",
    status: "completed",
    image: "/python-webminar.png",
  },
  {
    id: 2,
    title: "Free AI & Robotics Sessions",
    description:
      "Conducted free AI and Robotics workshops for school students, introducing the fundamentals of intelligent systems.",
    date: "Nov 5, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Meenakshi Academy",
    type: "demo",
    seats: "30/50",
    status: "completed",
    image: "/robotics.png",
  },
  {
    id: 3,
    title: "Free App Development Webinar",
    description:
      "Introduced young innovators to app development, nurturing creativity and problem-solving through practical learning.",
    date: "Sep 20, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Online",
    type: "bootcamp",
    seats: "Completed",
    status: "completed",
    image: "/app-dev.png",
  },
  {
    id: 4,
    title: "Tamil Orientation Event",
    description:
      "Hosted a Tamil orientation event promoting unity and peace through language and culture on International Peace Day.",
    date: "Sep 21, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "Community Hall",
    type: "cultural",
    seats: "80/150",
    status: "completed",
    image: "/tamil-contest.png",
  },
  // {
  //   id: 5,
  //   title: "Web Development Crash Course",
  //   description: "Learn HTML, CSS, JavaScript in one intensive weekend session for underprivileged students.",
  //   date: "Dec 10, 2024",
  //   time: "10:00 AM - 4:00 PM",
  //   location: "Online",
  //   type: "workshop",
  //   seats: "100/120",
  //   status: "upcoming",
  //   image: "/u-robo.png",
  // },
  //   {
  //     id: 6,
  //     title: "Career Guidance Seminar",
  //     description: "Expert advice on career paths in technology and engineering for rural students.",
  //     date: "Jan 25, 2025",
  //     time: "11:00 AM - 1:00 PM",
  //     location: "Online",
  //     type: "seminar",
  //     seats: "200/300",
  //     status: "upcoming",
  //     image: "/u-robo.png",
  //   },
];

const eventTypes = [
  { id: "all", name: "All Events", count: 6 },
  { id: "upcoming", name: "Upcoming", count: 2 },
  { id: "completed", name: "Completed", count: 4 },
  { id: "workshop", name: "Workshops", count: 2 },
  { id: "seminar", name: "Seminars", count: 1 },
  { id: "cultural", name: "Cultural", count: 1 },
  { id: "demo", name: "Demos", count: 1 },
];

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesFilter =
      activeFilter === "all" ||
      event.type === activeFilter ||
      event.status === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-background ">
      {/* Navbar */}
     <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>

      {/* Hero Section */}
      <section className="container px-6 py-24 mx-auto sm:px-8 lg:px-12 lg:py-32">
        <div className="mt-20 mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-serif text-3xl font-normal md:text-4xl lg:text-6xl text-foreground"
          >
            Our Events & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl lg:text-xl text-muted-foreground"
          >
            Empowering learners through free workshops, seminars, and hands-on
            learning experiences.
          </motion.p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mt-8">
            <input
              type="search"
              placeholder="Search events..."
              className="w-full py-3 pl-12 pr-4 text-white border rounded-lg bg-white/5 border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Sparkles className="absolute w-5 h-5 -translate-y-1/2 left-4 top-1/2 text-white/40" />
          </div>

          {/* Quick Stats */}
          {/* <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: "50+", label: "Events Conducted" },
              { value: "2000+", label: "Students Impacted" },
              { value: "100%", label: "Free Education" },
              { value: "15+", label: "Communities Served" },
            ].map((stat, index) => (
              <div key={index} className="p-4 text-center border rounded-xl bg-white/5 border-white/10">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Event Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-white/60" />
              <span className="font-medium text-white/90">Filter by:</span>
            </div>
            <span className="text-sm text-white/60">
              {filteredEvents.length} events found
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeFilter === type.id
                    ? "bg-primary text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/90 border border-white/10"
                }`}
              >
                <span>{type.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    activeFilter === type.id
                      ? "bg-white/20"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>

{/* Events Grid */}
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {filteredEvents.map((event) => (
    <div
      key={event.id}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Event Image Container - Shows full image without cropping */}
     {/* Event Image Container */}
      <div className="relative w-full bg-gray-900 min-h-[200px]">
        <div className="relative flex items-center justify-center w-full h-full p-0">
          <Image
            src={event.image}
            alt={event.title}
            width={0}
            height={0}
            sizes="100vw"
            className="object-scale-down w-full h-auto max-h-100"
            style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
            unoptimized={true} // If images are from external sources
          />
        </div>
      </div>

      {/* Event Content */}
      <div className="flex flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-white line-clamp-1">
          {event.title}
        </h3>
        
        <p className="mb-4 text-sm leading-relaxed text-white/70 line-clamp-3">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <Calendar className="flex-shrink-0 w-4 h-4" />
            <span>{event.date}</span>
            <span className="text-white/40">•</span>
            <Clock className="flex-shrink-0 w-4 h-4" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-white/60">
            <MapPin className="flex-shrink-0 w-4 h-4" />
            <span className="truncate">{event.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Users className="flex-shrink-0 w-4 h-4" />
            <span>Participants: {event.seats}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t border-white/10">
          {event.status === "upcoming" ? (
            <>
              <Button className="flex-1 transition-colors bg-primary hover:bg-primary/90">
                <Ticket className="w-4 h-4 mr-2" />
                <span className="truncate">Register Now</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="flex-shrink-0 border-white/20 hover:bg-white/10"
              >
                <Calendar className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <Button className="flex-1 text-white transition-colors bg-white/10 hover:bg-white/20 border-white/20">
                <Video className="w-4 h-4 mr-2" />
                <span className="truncate">View Photos</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="flex-shrink-0 border-white/20 hover:bg-white/10"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="py-16 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-white/30" />
            <h3 className="mb-2 text-xl font-bold text-white/90">
              No events found
            </h3>
            <p className="mb-6 text-white/60">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="bg-primary hover:bg-primary/90"
            >
              View All Events
            </Button>
          </div>
        )}
      </section>

      {/* === CTA Section - Grid Style === */}
      <div className="container px-4 py-12 mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="eventsPattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0,50 Q25,0 50,50 T100,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,50 Q25,100 50,50 T100,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#eventsPattern)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 md:px-12">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/20">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Future Events</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold">
                  Help Us Organize More Events
                </h3>
                <p className="max-w-xl mb-6 text-white/90">
                  Your support helps us conduct more free workshops and reach
                  more underprivileged students with quality education.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Propose an Event
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white/10"
                  >
                    <Users className="w-4 h-4" />
                    Volunteer
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute rounded-full -inset-4 bg-white/10 blur-xl" />
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-white" />
                  <p className="text-center text-white/90">
                    2000+ Students
                    <br />
                    <span className="text-sm">Impacted</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Volunteer CTA === */}
      <div className="container px-4 py-12 mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="volunteerPattern"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="15"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#volunteerPattern)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 md:px-12">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">Get Involved</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold">
                  Join Our Education Mission
                </h3>
                <p className="max-w-xl mb-6 text-white/90">
                  Whether you want to attend our events, volunteer, or support
                  our mission, there's a place for you in our community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" className="gap-2">
                    View All Events
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white/10"
                  >
                    Donate Resources
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-white border-white hover:bg-white/10"
                  >
                    Partner With Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute rounded-full -inset-4 bg-white/10 blur-xl" />
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-4xl font-bold">300+</div>
                    <p className="text-sm text-center text-white/90">
                      Active Volunteers
                      <br />
                      <span className="text-xs">Making a Difference</span>
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
};

export default EventsPage;
