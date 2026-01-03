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
  HelpCircle,
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
];

const eventTypes = [
  { id: "all", name: "All Events", count: 4 },
  { id: "completed", name: "Completed", count: 4 },
  { id: "workshop", name: "Workshops", count: 1 },
  { id: "cultural", name: "Cultural", count: 1 },
  { id: "demo", name: "Demos", count: 1 },
  { id: "bootcamp", name: "Bootcamps", count: 1 },
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
    <div className="w-full min-h-screen bg-background">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full">
        <NavbarWithMegaMenu />
      </div>

      {/* Hero Section */}
      <section className="container px-6 pt-32 mx-auto pb-14 sm:px-8 lg:px-12">
        <div className="relative py-12 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <div className="max-w-3xl mx-auto text-center">
            {/* Enhanced FAQ Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 transition-all duration-300 border rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border-primary/20 hover:bg-primary/20">
              <div className="p-2 rounded-full bg-primary/20">
                <HelpCircle className="w-16 h-16 text-primary" />
              </div>
              <span className="text-xl font-bold text-primary">Events & Achievements</span>
            </div>

            <h1 className="mb-4 font-serif text-5xl font-bold md:text-7xl">
              Our <span className="text-primary">Impactful</span> Events
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Discover our completed workshops, seminars, and cultural events that have transformed lives through education.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events by title or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                />
                <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
                  <Sparkles className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Event Filters */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">Filter by:</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredEvents.length} events found
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveFilter(type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activeFilter === type.id
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <span>{type.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        activeFilter === type.id
                          ? "bg-white/30"
                          : "bg-primary/10 text-primary dark:bg-primary/20"
                      }`}
                    >
                      {type.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container px-6 pb-20 mx-auto sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Event Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <div className="relative flex items-center justify-center w-full h-full p-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={192}
                    className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                    unoptimized={true}
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    event.status === "completed" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                  }`}>
                    {event.status === "completed" ? "Completed" : "Upcoming"}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
                  {event.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="mb-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{event.date}</span>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4 shrink-0" />
                    <span>Participants: {event.seats}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button className="flex-1 transition-colors bg-primary hover:bg-primary/90">
                    <Video className="w-4 h-4 mr-2" />
                    <span className="truncate">View Photos</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 shrink-0 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="py-16 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-700" />
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              No events found
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
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