"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Target,
  Eye,
  Users,
  Heart,
  ChevronRight,
  Globe,
  Award,
  TargetIcon,
  EyeIcon,
} from "lucide-react";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

export default function MissionVision() {
  return (
    <section className="w-full px-4 py-20 border-b border-dashed rounded-4xl border-border">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Header */}
      <div className="max-w-4xl mx-auto mt-10 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-primary bg-blue-500/10">
          <Target className="w-5 h-5" />
          <span className="font-serif">|</span>
          <EyeIcon className="w-6 h-6" />
        </div>
        <h2 className="mb-6 font-serif text-5xl tracking-tighter md:text-7xl">
          Our <span className="text-primary">Mission</span> &{" "}
          <span className="text-primary">Vision</span>
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground">
          The purpose behind what we build and the future we're working toward —
          driven by innovation, accessibility, and impact.
        </p>
      </div>

      {/* 🔥 Single Full Width Image with Overlay */}
      <div className="relative max-w-6xl mx-auto mt-16 overflow-hidden rounded-2xl h-100 group">
        <Image
          src="/forest.png"
          alt="Mission Vision Background"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="mission-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="50" cy="50" r="2" fill="white" opacity="0.3" />
                <path
                  d="M0,0 L100,100 M100,0 L0,100"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mission-pattern)" />
          </svg>
        </div>
      </div>

      {/* Mission & Vision Cards with Icons */}
      <div className="grid max-w-6xl gap-8 mx-auto mt-20 lg:grid-cols-2">
        {/* Mission Card */}
        <div className="p-8 transition-all duration-300 border rounded-3xl bg-card border-border group hover:shadow-2xl">
          <div className="inline-flex mb-6 transition-transform duration-300 bg-transparent rounded-2xl group-hover:scale-110">
            <Image
              src="/arrow.gif"
              alt="Arrow GIF"
              width={100}
              height={100}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <h3 className="mb-4 font-serif text-3xl font-bold text-foreground">
            Our Mission
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            To empower tribal and poor students through free, quality education
            and skill-based training, helping them achieve academic excellence
            and prepare for a brighter future.
          </p>

          {/* Mission Values */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Community Empowerment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Quality Education</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">Accessibility for All</span>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="p-8 transition-all duration-300 border rounded-3xl bg-card border-border group hover:shadow-2xl">
          <div className="inline-flex mb-6 transition-transform duration-300 bg-transparent rounded-2xl group-hover:scale-110">
            <Image
              src="/vision.gif"
              alt="Arrow GIF"
              width={100}
              height={100}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <h3 className="mb-4 font-serif text-3xl font-bold text-foreground">
            Our Vision
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            A future where no child is left behind due to financial or social
            barriers – education that uplifts, empowers, and transforms lives.
          </p>

          {/* Vision Goals */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">
                Global Reach, Local Impact
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">
                Zero Barriers to Education
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">
                Sustainable Transformation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA with Pattern */}
      <div className="relative max-w-6xl mx-auto mt-20 mb-10 overflow-hidden border rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80 border-border">
        {/* Geometric Pattern */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="cta-geometric"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,40 L40,0 L80,40 L40,80 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="cta-dots"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-geometric)" />
            <rect
              width="100%"
              height="100%"
              fill="url(#cta-dots)"
              opacity="0.5"
            />

            {/* Floating Elements */}
            <circle cx="15%" cy="25%" r="25" fill="rgba(255,255,255,0.08)" />
            <circle cx="85%" cy="75%" r="30" fill="rgba(255,255,255,0.08)" />
            <rect
              x="70%"
              y="20%"
              width="40"
              height="40"
              fill="rgba(255,255,255,0.08)"
              transform="rotate(45)"
            />
          </svg>
        </div>

        <div className="relative px-8 py-12 md:px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-white">
              <h3 className="mb-2 font-serif text-3xl font-bold">
                Join Our Educational Revolution
              </h3>
              <p className="max-w-xl mb-6 text-white/90">
                Passionate about education? We're always looking for talented
                individuals to join our mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Discover Opportunities
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
                <Users className="w-12 h-12 mx-auto mb-4 text-white" />
                <p className="text-center text-white/90">
                  Make a difference in education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      {/* <div className="max-w-6xl mx-auto mt-16">
        <h3 className="mb-8 font-serif text-3xl font-bold text-center text-foreground">
          Our Impact So Far
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="p-6 text-center transition-transform duration-300 border rounded-2xl bg-card border-border hover:scale-105">
            <div className="text-3xl font-bold text-primary">5000+</div>
            <div className="text-sm text-muted-foreground">
              Students Empowered
            </div>
          </div>
          <div className="p-6 text-center transition-transform duration-300 border rounded-2xl bg-card border-border hover:scale-105">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">
              Tribal Communities
            </div>
          </div>
          <div className="p-6 text-center transition-transform duration-300 border rounded-2xl bg-card border-border hover:scale-105">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Free Programs</div>
          </div>
          <div className="p-6 text-center transition-transform duration-300 border rounded-2xl bg-card border-border hover:scale-105">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
