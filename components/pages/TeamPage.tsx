"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavbarWithMegaMenu } from "../NavbarWithMegaMenu";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Star,
  Award,
  Heart,
  Shield,
  Sparkles,
  Target,
  Globe,
  Zap,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ChevronRight,
  Filter,
} from "lucide-react";

// SVG Decorations Components
const FloatingCircles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="absolute w-64 h-64 -top-20 -right-20 text-primary/5"
      fill="currentColor"
      viewBox="0 0 200 200"
    >
      <circle cx="100" cy="100" r="80" />
    </svg>
    <svg
      className="absolute w-48 h-48 -bottom-10 -left-10 text-primary/5"
      fill="currentColor"
      viewBox="0 0 200 200"
    >
      <circle cx="100" cy="100" r="60" />
    </svg>
    <svg
      className="absolute w-32 h-32 top-1/3 left-1/4 text-primary/5"
      fill="currentColor"
      viewBox="0 0 200 200"
    >
      <circle cx="100" cy="100" r="40" />
    </svg>
  </div>
);

const ConnectionLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ zIndex: -1 }}
  >
    <defs>
      <linearGradient id="linelinear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M50,100 Q250,50 450,150 T850,100"
      stroke="url(#linelinear)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="5,5"
    />
  </svg>
);

const GridPattern = () => (
  <div className="absolute inset-0 pointer-events-none">
    <svg
      className="w-full h-full opacity-[0.02]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Muthubalaji",
    role: "Founder & CEO",
    department: "Leadership",
    description: "Visionary leader with 15+ years in educational reform",
    image: "/u-robo.png",
    skills: ["Strategic Planning", "Educational Policy", "Community Outreach"],
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    name: "Hari Krishnan",
    role: "Deputy Managing Director",
    department: "Academics",
    description: "Curriculum expert with passion for inclusive education",
    image: "/u-robo.png",
    skills: ["Curriculum Design", "Teacher Training", "Pedagogy"],
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#",
    },
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    name: "Dhivya Dharshini",
    role: "Financial & Executive Director",
    department: "Technology",
    description: "EdTech innovator creating accessible learning platforms",
    image: "/u-robo.png",
    skills: ["EdTech", "Software Development", "Digital Learning"],
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "#",
    },
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 4,
    name: "Vignesh Kumar",
    role: "Marketing Director",
    department: "Student Support",
    description: "Dedicated to student well-being and holistic development",
    image: "/u-robo.png",
    skills: ["Counseling", "Mentoring", "Career Guidance"],
    social: {
      linkedin: "#",
      instagram: "#",
      email: "#",
    },
    color: "from-orange-500 to-yellow-400",
  },
  {
    id: 5,
    name: "Lingesh Warma",
    role: "FGeneral Manager",
    department: "Operations",
    description: "Ensuring sustainable growth through strategic management",
    image: "/u-robo.png",
    skills: ["Financial Planning", "Fund Management", "Operations"],
    social: {
      linkedin: "#",
      email: "#",
    },
    color: "from-red-500 to-rose-400",
  },
];

const departments = [
  { id: "all", name: "All Team", icon: Users, count: teamMembers.length },
  { id: "leadership", name: "Leadership", icon: Award, count: 1 },
  { id: "academics", name: "Academics", icon: BookOpen, count: 1 },
  { id: "technology", name: "Technology", icon: Zap, count: 1 },
];

const TeamPage = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const filteredMembers = teamMembers.filter(
    (member) =>
      activeDepartment === "all" ||
      member.department.toLowerCase().includes(activeDepartment)
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      
      {/* Background Decorations */}
      <FloatingCircles />
      <GridPattern />

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <ConnectionLines />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="px-4 py-2 mt-10 mb-6 text-sm font-semibold bg-primary/10 text-primary">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Family
            </Badge>

            <h1 className="mt-6 mb-6 font-serif text-5xl tracking-tight md:text-7xl">
              The Minds Behind
              <span className="block text-primary">The Mission</span>
            </h1>

            <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
              Passionate educators, innovators, and changemakers dedicated to
              making quality education accessible to all.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: "10+", label: "Team Members" },
                { value: "2+", label: "Years Experience" },
                { value: "500+", label: "Students Impacted" },
                { value: "100%", label: "Passionate" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="px-6 py-3 border rounded-full bg-background/50 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Department Filter */}
      <div className="container px-4 mx-auto mb-12">
        <div className="p-6 rounded-2xl bg-linear-to-r from-primary/5 via-background to-primary/5 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Browse by Department</h2>
            </div>
            <Badge variant="outline" className="text-sm">
              {filteredMembers.length} Members
            </Badge>
          </div>

          <div className="flex flex-wrap gap-3">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDepartment(dept.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeDepartment === dept.id
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-background border hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{dept.name}</span>
                  <Badge
                    variant="secondary"
                    className={`ml-2 ${
                      activeDepartment === dept.id
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {dept.count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container px-4 mx-auto mb-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Glow Effect
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${member.color} blur-xl`}
              /> */}

              <Card className="relative overflow-hidden border-none bg-background">
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-6">
                    <div className="relative mx-auto overflow-hidden h-52 w-52 rounded-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Role Badge */}
                    <div className="absolute transform -translate-x-1/2 -bottom-3 left-1/2">
                      <Badge>{member.role}</Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                    <div className="mb-4">
                      <Badge variant="outline">{member.department}</Badge>
                    </div>
                    <p className="mb-6 text-sm text-muted-foreground">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      {member.social.twitter && (
                        <Button size="icon" variant="ghost">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button size="icon" variant="ghost">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button size="icon" variant="ghost">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.instagram && (
                        <Button size="icon" variant="ghost">
                          <Instagram className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.email && (
                        <Button size="icon" variant="ghost">
                          <Mail className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="py-20 text-center col-span-full">
            <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="mb-2 text-2xl font-bold">No team members found</h3>
            <p className="text-muted-foreground">
              Try selecting a different department
            </p>
          </div>
        )}
      </div>

      {/* Join Team CTA */}
      <div className="container px-4 mx-auto mb-20">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="joinPattern"
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
              <rect width="100%" height="100%" fill="url(#joinPattern)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 md:px-12">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-white">
                <h3 className="mb-4 text-3xl font-bold">Join Our Mission</h3>
                <p className="max-w-xl mb-6 text-white/90">
                  Passionate about education? We're always looking for talented
                  individuals to join our team.
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
  );
};

export default TeamPage;
