"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";
import {
  Users,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Target,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Trophy,
  Globe,
  ChevronRight,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const [expanded, setExpanded] = useState(false);

  const missionPoints = [
    {
      icon: BookOpen,
      title: "Free Education",
      description:
        "Providing completely free education to tribal and underprivileged students",
    },
    {
      icon: HeartHandshake,
      title: "Community Focus",
      description:
        "Serving economically weaker sections with personalized attention",
    },
    {
      icon: GraduationCap,
      title: "Holistic Growth",
      description:
        "Academic support combined with co-curricular and extra-curricular activities",
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "JEE/NEET/GATE preparation and career counseling",
    },
  ];

  const impactStats = [
    { value: "2000+", label: "Students Impacted", icon: Users },
    { value: "500+", label: "Free Classes", icon: BookOpen },
    { value: "60+", label: "Mentors", icon: GraduationCap },
    { value: "15+", label: "Communities", icon: Globe },
  ];

  const programs = [
    {
      category: "Academic Support",
      items: [
        "Free Tuition (Grade 3-12)",
        "JEE/NEET Preparation",
        "GATE Guidance",
        "Foundation Classes",
      ],
    },
    {
      category: "Co-Curricular",
      items: [
        "Sports & Fitness",
        "Arts & Crafts",
        "Music & Dance",
        "Personality Development",
      ],
    },
    {
      category: "Skill Development",
      items: [
        "Computer Literacy",
        "Communication Skills",
        "Life Skills",
        "Vocational Training",
      ],
    },
  ];

  const paragraphs = [
    "U Fill Academy is an educational initiative built on the principle of 'Education for All.' Our core motive is to serve society by providing free and accessible education to tribal students and children from economically weaker sections.",
    "We believe that every child deserves quality learning opportunities, regardless of background or financial status. By offering free academic support, tuition classes, and career guidance, U Fill Academy ensures that underprivileged students get equal access to knowledge and skills.",
    "Along with core academics, we also provide Co-Curricular (CCA) and Extra-Curricular (ECA) programs that help students grow holistically. From foundation classes, JEE/NEET/GATE guidance, to sports, arts, personality development, and skill training, we create an environment where learning is not just about passing exams, but also about building confidence, creativity, and character.",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-primary/5">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Hero Section */}
      <div className="relative mt-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container relative px-4 py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="px-4 py-2 mb-6 text-sm font-semibold bg-primary/10 text-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              Education For All
            </Badge>

            <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
              Empowering Through
              <span className="block text-primary">Education</span>
            </h1>

            <p className="text-xl leading-relaxed text-muted-foreground">
              Transforming lives through free, quality education for tribal and
              underprivileged communities
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container px-4 mx-auto -mt-10">
        <Card className="overflow-hidden border-2 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row">
              {/* Left Side - Image */}
              <div className="md:w-2/5">
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src="/logo.jpg"
                    alt="Students learning at U Fill Academy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    {/* <div className="flex items-center gap-2">
                      <Shield className="w-8 h-8 text-white" />
                      <span className="text-2xl font-bold text-white">Since 2020</span>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Right Side - Text */}
              <div className="md:w-3/5">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-15 h-15">
                      <Image
                        src="/u-robo.png"
                        alt="U Fill Academy Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-3xl font-bold">Our Story & Mission</h2>
                  </div>
                  <div className="w-20 h-1 rounded-full bg-primary" />
                </div>

                <div
                  className={`space-y-4 text-lg leading-relaxed text-muted-foreground ${
                    expanded ? "" : "max-h-96 overflow-hidden"
                  }`}
                >
                  {paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 text-primary"
                >
                  {expanded ? "Read Less" : "Read More"}
                  <ArrowRight
                    className={`ml-2 w-4 h-4 transition-transform ${
                      expanded ? "rotate-90" : ""
                    }`}
                  />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

       {/* Mission Points - Minimal Bento Grid */}
<div className="my-24">
  <div className="mb-16 text-center">
    <h2 className="font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl">
      Our Core Values
    </h2>
    <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
      Building a foundation for lifelong learning and empowerment
    </p>
  </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {missionPoints.map((point, index) => (
      <div
        key={index}
        className="relative group"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-linear-to-br from-background via-background to-primary/5 group-hover:opacity-100" />
        
        <Card className="relative h-full transition-all duration-300 border-2 bg-linear-to-b from-background via-background to-primary/5 hover:shadow-2xl hover:-translate-y-2">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              {/* Icon circle */}
              <div className="shrink-0">
                <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 border rounded-full bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 group-hover:scale-110">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="w-full h-px mt-6 bg-linear-to-r from-transparent via-primary/20 to-transparent" />
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
</div>

        {/* Impact Stats */}
        <div className="my-20">
          {/* <div className="p-8 rounded-2xl bg-linear-to-r from-primary/10 to-primary/5">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl lg:text-5xl">
                Our Impact
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Making a real difference in the lives of thousands
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Programs Section */}
        <div className="my-20">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl lg:text-5xl">
              Comprehensive Programs
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Holistic development through diverse learning opportunities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((program, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      {index === 0 && (
                        <BookOpen className="w-5 h-5 text-primary" />
                      )}
                      {index === 1 && (
                        <Trophy className="w-5 h-5 text-primary" />
                      )}
                      {index === 2 && (
                        <Lightbulb className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{program.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {program.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
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
};

export default AboutPage;
