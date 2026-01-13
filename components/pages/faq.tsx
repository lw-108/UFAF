"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  HelpCircle,
  BookOpen,
  Users,
  GraduationCap,
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

// FAQ Categories
const faqCategories = [
  { id: "all", name: "All Questions", icon: HelpCircle, count: 20 },
  { id: "admission", name: "Admissions", icon: BookOpen, count: 6 },
  { id: "courses", name: "Courses", icon: GraduationCap, count: 8 },
  { id: "support", name: "Student Support", icon: Users, count: 4 },
  { id: "general", name: "General", icon: HelpCircle, count: 2 },
];

// FAQ Data
const faqData = [
  // Admissions
  {
    id: 1,
    question: "Who can apply for free education at U Fill Academy?",
    answer:
      "We provide free education to tribal students, children from economically weaker sections, and underprivileged communities. Our focus is on serving those who cannot afford quality education.",
    category: "admission",
  },
  {
    id: 2,
    question: "What documents are required for admission?",
    answer:
      "Basic documents include proof of identity, income certificate, previous academic records, and residence proof. We guide applicants through a simple documentation process.",
    category: "admission",
  },
  {
    id: 3,
    question: "Is there an admission test or interview?",
    answer:
      "No entrance tests. We conduct a simple interaction to understand the students background and learning needs to provide personalized support.",
    category: "admission",
  },
  {
    id: 4,
    question: "What age groups do you serve?",
    answer:
      "We cater to students from Grade 3 to Grade 12, along with special preparation programs for JEE, NEET, and GATE aspirants.",
    category: "admission",
  },
  {
    id: 5,
    question: "Do you provide transportation for students?",
    answer:
      "We arrange community-based transportation solutions and coordinate with local volunteers to ensure safe travel for our students.",
    category: "admission",
  },
  {
    id: 6,
    question: "Is there any registration fee?",
    answer:
      "Absolutely no fees. Education at U Fill Academy is completely free for all eligible students.",
    category: "admission",
  },

  // Courses
  {
    id: 7,
    question: "What courses are offered?",
    answer:
      "We offer academic support (Grade 3-12), JEE/NEET/GATE preparation, foundation classes, co-curricular activities, skill development programs, and career guidance.",
    category: "courses",
  },
  {
    id: 8,
    question: "Are the courses recognized?",
    answer:
      "Our academic programs follow standard curriculum guidelines. Skill development programs are designed in collaboration with industry partners for practical relevance.",
    category: "courses",
  },
  {
    id: 9,
    question: "What is the duration of courses?",
    answer:
      "Academic support is ongoing. Special programs range from 3 months (crash courses) to 1 year (comprehensive preparation). Co-curricular activities are conducted throughout the year.",
    category: "courses",
  },
  {
    id: 10,
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide free textbooks, workbooks, and digital learning resources to all enrolled students.",
    category: "courses",
  },
  {
    id: 11,
    question: "Are there online classes available?",
    answer:
      "We offer blended learning - offline classes for core subjects and online support for additional resources and doubt clearing sessions.",
    category: "courses",
  },
  {
    id: 12,
    question: "What about practical sessions and labs?",
    answer:
      "We have well-equipped learning spaces for practical demonstrations, science experiments, and computer literacy programs.",
    category: "courses",
  },
  {
    id: 13,
    question: "How do you track student progress?",
    answer:
      "Regular assessments, parent-teacher meetings, and personalized feedback sessions ensure continuous monitoring and improvement.",
    category: "courses",
  },
  {
    id: 14,
    question: "Are there any extracurricular activities?",
    answer:
      "Yes, we offer sports, arts, music, personality development workshops, and community service programs for holistic development.",
    category: "courses",
  },

  // Student Support
  {
    id: 15,
    question: "Do you provide meals for students?",
    answer:
      "We collaborate with local NGOs to provide nutritious meals during study hours for students who need them.",
    category: "support",
  },
  {
    id: 16,
    question: "Is there career counseling available?",
    answer:
      "Yes, regular career guidance sessions, mentorship programs, and industry interactions are organized for senior students.",
    category: "support",
  },
  {
    id: 17,
    question: "What about mental health support?",
    answer:
      "We have trained counselors and conduct regular wellness workshops focusing on mental health and emotional well-being.",
    category: "support",
  },
  {
    id: 18,
    question: "How do you ensure student safety?",
    answer:
      "Our centers follow strict safety protocols with trained staff, secure premises, and regular safety awareness programs.",
    category: "support",
  },

  // General
  {
    id: 19,
    question: "How is U Fill Academy funded?",
    answer:
      "We operate through donations, corporate partnerships, and volunteer support. Our mission is supported by individuals and organizations who believe in education for all.",
    category: "general",
  },
  {
    id: 20,
    question: "How can I volunteer or donate?",
    answer:
      "Visit our Get Involved section or contact us directly. We welcome volunteers, mentors, and donors who want to support our mission.",
    category: "general",
  },
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const popularQuestions = [1, 7, 15, 19]; // IDs of popular questions

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden bg-linear-to-br from-primary/5 via-transparent to-transparent">
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mt-15">
            <Badge className="px-4 py-2 mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <HelpCircle className="w-18 h-18" /> {/* Custom size */}
              Frequently Asked Questions
            </Badge>

            <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
              How Can We <span className="text-primary">Help</span> You?
            </h1>

            <p className="mb-8 text-lg text-gray-600">
              Find answers to common questions about admissions, courses,
              support, and more.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-4 top-1/2" />
              <input
                type="search"
                placeholder="Search for questions..."
                className="w-full py-3 pl-12 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { value: "20+", label: "Questions Answered" },
                { value: "2000+", label: "Students Helped" },
                { value: "100%", label: "Free Support" },
                { value: "24/7", label: "Community Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="sticky space-y-4 top-24">
              <div className="p-4 border rounded-lg shadow-sm bg-background">
                <h3 className="mb-4 font-semibold">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-all ${
                          activeCategory === category.id
                            ? "bg-primary text-white"
                            : "hover:bg-primary-100 text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span>{category.name}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            activeCategory === category.id
                              ? "bg-background/20"
                              : "bg-primary/10 text-white"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Popular Questions */}
              <div className="p-4 border rounded-lg shadow-sm bg-background">
                <h3 className="flex items-center gap-2 mb-3 font-semibold">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  Popular Questions
                </h3>
                <div className="space-y-2">
                  {faqData
                    .filter((faq) => popularQuestions.includes(faq.id))
                    .map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => {
                          setActiveCategory("all");
                          setSearchQuery(
                            faq.question.split(" ").slice(0, 3).join(" ")
                          );
                        }}
                        className="flex items-start w-full gap-2 p-2 text-sm text-left rounded hover:bg-primary-50"
                      >
                        <ChevronRight className="h-3 w-3 mt-0.5 text-primary shrink-0" />
                        <span className="flex-1">{faq.question}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {activeCategory === "all"
                    ? "All Questions"
                    : faqCategories.find((c) => c.id === activeCategory)?.name}
                </h2>
                <p className="text-gray-500">
                  {filteredFAQs.length} questions found
                </p>
              </div>
              {searchQuery && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              )}
            </div>

            {/* FAQ Accordion */}
            {filteredFAQs.length === 0 ? (
              <div className="p-8 text-center border rounded-lg bg-background">
                <HelpCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="mb-2 text-xl font-bold">No questions found</h3>
                <p className="mb-4 text-gray-500">
                  Try a different search term or category
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  View All Questions
                </Button>
              </div>
            ) : (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="overflow-hidden border rounded-lg shadow-sm bg-background"
                  >
                    <AccordionItem
                      value={faq.id.toString()}
                      className="border-0"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:text-black dark:text-white hover:no-underline hover:bg-primary">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-primary/10">
                            <HelpCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="font-semibold hover:text-white">
                              {faq.question}
                            </h3>
                            <Badge variant="outline" className="mt-2">
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pl-12">
                          <div className="p-4 rounded-lg bg-background">
                            <p className="leading-relaxed text-black dark:text-white">
                              {faq.answer}
                            </p>
                          </div>
                          {popularQuestions.includes(faq.id) && (
                            <div className="flex items-center gap-2 mt-4">
                              <Sparkles className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm text-gray-500">
                                Popular question
                              </span>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            )}

            {/* Still Have Questions */}
            <div className="container px-4 py-12 mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  <svg
                    className="w-full h-full opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="questionsPattern"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0,50 L50,0 L100,50 L50,100 Z"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#questionsPattern)"
                    />
                  </svg>
                </div>

                <div className="relative px-8 py-12 md:px-12">
                  <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-white">
                      <h3 className="mb-4 text-3xl font-bold">
                        Still Have Questions?
                      </h3>
                      <p className="max-w-xl mb-6 text-white/90">
                        Can &apos;t find the answer you&apos;re looking for? Our
                        team is here to help.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button size="lg" variant="secondary">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat With Us
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-white border-white hover:bg-white/10"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Us Now
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-white border-white hover:bg-white/10"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Send Email
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute rounded-full -inset-4 bg-white/10 blur-xl" />
                      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <Calendar className="w-12 h-12 mx-auto mb-4 text-white" />
                        <p className="text-center text-white/90">
                          Quick Response
                          <br />
                          <span className="text-sm">
                            Typically within 24 hours
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="container px-4 py-12 mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  <svg
                    className="w-full h-full opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="missionPattern"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M50,0 L100,50 L50,100 L0,50 Z"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#missionPattern)"
                    />
                  </svg>
                </div>

                <div className="relative px-8 py-12 md:px-12">
                  <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-white">
                      <h3 className="mb-4 text-3xl font-bold">
                        Ready to Join Our Mission?
                      </h3>
                      <p className="max-w-xl mb-6 text-white/90">
                        Whether you&apos;re a student seeking education or a
                        volunteer wanting to help, we&apos;re here to support
                        your journey.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button size="lg" variant="secondary">
                          Apply for Admission
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-white border-white hover:bg-white/10"
                        >
                          Become a Volunteer
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-white border-white hover:bg-white/10"
                        >
                          Schedule a Visit
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute rounded-full -inset-4 bg-white/10 blur-xl" />
                      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <GraduationCap className="w-12 h-12 mx-auto mb-4 text-white" />
                        <p className="text-center text-white/90">
                          Make a difference
                          <br />
                          <span className="text-sm">in education</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end FAQ Content column */}
        </div>{" "}
        {/* end grid */}
      </div>{" "}
      {/* end main container */}
    </div>
  );
};

export default FAQPage;
