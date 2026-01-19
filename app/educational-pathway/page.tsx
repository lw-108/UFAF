"use client";

import { BookOpen, Users, Mic, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

const stages = [
  {
    icon: BookOpen,
    title: "Children Hut",
    subtitle: "The Rise",
    stage: "Stage 1",
    desc: "Foundational learning and discovery. Building the first blocks of knowledge and curiosity through play-based learning and sensory activities.",
    image: "/1.webp",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    bgColor: "bg-blue-50",
    details: {
      ageGroup: "3-5 years",
      duration: "2 years",
      keyFocus: [
        "Play-based learning",
        "Sensory development",
        "Basic literacy & numeracy",
        "Social skills",
      ],
      outcomes: [
        "Develop basic motor skills and coordination",
        "Foster curiosity and love for learning",
        "Build foundational language skills",
        "Learn through play and exploration",
      ],
      activities: [
        "Storytelling sessions",
        "Art & craft",
        "Music & movement",
        "Outdoor play",
        "Basic counting & alphabet games",
      ],
    },
  },
  {
    icon: Users,
    title: "Primary School",
    subtitle: "The Connections",
    stage: "Stage 2",
    desc: "Building relationships and core skills. Learning to collaborate, communicate effectively, and develop social-emotional intelligence.",
    image: "/2.png",
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    gradient: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    bgColor: "bg-emerald-50",
    details: {
      ageGroup: "6-10 years",
      duration: "5 years",
      keyFocus: [
        "Core academic skills",
        "Collaboration",
        "Communication",
        "Problem-solving",
      ],
      outcomes: [
        "Master basic literacy and numeracy",
        "Develop teamwork and collaboration skills",
        "Build emotional intelligence",
        "Establish strong learning habits",
      ],
      activities: [
        "Group projects",
        "Science experiments",
        "Reading clubs",
        "Math puzzles",
        "Sports & team games",
      ],
    },
  },
  {
    icon: Mic,
    title: "Secondary School",
    subtitle: "The Voice",
    stage: "Stage 3",
    desc: "Developing expression and identity. Finding and using ones unique voice through debate, public speaking, and creative expression.",
    image: "/3.png",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    bgColor: "bg-purple-50",
    details: {
      ageGroup: "11-14 years",
      duration: "4 years",
      keyFocus: [
        "Self-expression",
        "Critical thinking",
        "Creative arts",
        "Leadership",
      ],
      outcomes: [
        "Develop confidence in public speaking",
        "Explore personal interests and talents",
        "Build critical thinking skills",
        "Learn digital literacy",
      ],
      activities: [
        "Debate competitions",
        "Creative writing",
        "Drama & theater",
        "Science fairs",
        "Technology clubs",
      ],
    },
  },
  {
    icon: Lightbulb,
    title: "Senior Secondary School",
    subtitle: "The Creation",
    stage: "Stage 4",
    desc: "Innovation and original thinking. Learning to create, innovate, and bring ideas to life through project-based learning.",
    image: "/4.png",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    bgColor: "bg-amber-50",
    details: {
      ageGroup: "15-16 years",
      duration: "2 years",
      keyFocus: [
        "Innovation",
        "Project-based learning",
        "Research skills",
        "Entrepreneurship",
      ],
      outcomes: [
        "Develop innovation and design thinking",
        "Create original projects and solutions",
        "Build research and analytical skills",
        "Explore career pathways",
      ],
      activities: [
        "Capstone projects",
        "Innovation labs",
        "Startup simulations",
        "Research papers",
        "Industry visits",
      ],
    },
  },
  {
    icon: Rocket,
    title: "Senior Secondary School",
    subtitle: "The Future",
    stage: "Stage 5",
    desc: "Preparing for what lies ahead. Developing skills and mindset for future success, leadership, and global impact.",
    image: "/5.png",
    color: "from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
    gradient: "bg-gradient-to-br from-rose-50 to-rose-100",
    bgColor: "bg-rose-50",
    details: {
      ageGroup: "17-18 years",
      duration: "2 years",
      keyFocus: [
        "Future readiness",
        "Leadership",
        "Global citizenship",
        "Career preparation",
      ],
      outcomes: [
        "Develop leadership and management skills",
        "Prepare for higher education and careers",
        "Build global awareness and citizenship",
        "Create personal development plans",
      ],
      activities: [
        "Leadership workshops",
        "Career counseling",
        "Global exchange programs",
        "Community service",
        "Portfolio development",
      ],
    },
  },
];

export default function EducationalPathwayPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-white/20">
        <div className="fixed top-0 left-0 z-50 w-full mb-50">
          <NavbarWithMegaMenu />
        </div>
        <div className="container px-4 mx-auto mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm rounded-full bg-primary/10 text-primary">
              <BookOpen className="w-4 h-4" />
              Educational Pathway
            </div>
            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl lg:text-7xl md:leading-tight">
              Our Progressive
              <br />
              <span className="text-primary">Educational Pathway</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-xl text-muted-foreground">
              A structured journey from foundational discovery to future-ready
              skills, designed to nurture every child&apos;s potential across
              five developmental stages.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button asChild>
                <Link href="#explore-pathway">Explore All Stages</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admissions">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway Overview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* <div className="grid grid-cols-1 gap-8 mb-20 lg:grid-cols-3">
              <div className="p-6 border rounded-3xl">
                <div className="text-4xl font-bold text-primary">05</div>
                <h3 className="mt-4 text-xl font-semibold">
                  Developmental Stages
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Each stage builds upon previous learning milestones
                </p>
              </div>
              <div className="p-6 border rounded-3xl">
                <div className="text-4xl font-bold text-primary">15+</div>
                <h3 className="mt-4 text-xl font-semibold">Years of Journey</h3>
                <p className="mt-2 text-muted-foreground">
                  From early childhood to college readiness
                </p>
              </div>
              <div className="p-6 border rounded-3xl">
                <div className="text-4xl font-bold text-primary">360°</div>
                <h3 className="mt-4 text-xl font-semibold">Holistic Growth</h3>
                <p className="mt-2 text-muted-foreground">
                  Academic, social, emotional, and creative development
                </p>
              </div>
            </div> */}

            {/* Stages Grid */}
            <div id="explore-pathway" className="space-y-8">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className={`p-1 rounded-3xl overflow-hidden ${stage.gradient} border shadow-lg`}
                >
                  <div className="overflow-hidden bg-background rounded-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Content */}
                      <div className="p-8 lg:p-10">
                        <div className="space-y-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <div
                                className={`inline-flex items-center justify-center p-3 rounded-xl ${stage.bgColor} mb-4`}
                              >
                                <stage.icon
                                  className={`h-7 w-7 ${stage.iconColor}`}
                                />
                              </div>
                              <span className="px-3 py-1 text-sm font-medium rounded-full text-primary bg-primary/10">
                                {stage.stage}
                              </span>
                            </div>
                            <div className="font-mono text-2xl">
                              {String(index + 1).padStart(2, "0")}/05
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                              {stage.title}
                            </h2>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-px bg-primary"></div>
                              <p className="text-xl italic font-semibold text-primary">
                                {stage.subtitle}
                              </p>
                            </div>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                              {stage.desc}
                            </p>
                          </div>

                          {/* Details Grid */}
                          <div className="grid grid-cols-1 gap-6 pt-6 border-t md:grid-cols-2">
                            <div>
                              <h4 className="mb-3 font-semibold">
                                Key Focus Areas
                              </h4>
                              <ul className="space-y-2">
                                {stage.details.keyFocus.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2"
                                  >
                                    <div
                                      className={`w-1.5 h-1.5 rounded-full ${stage.bgColor.replace(
                                        "bg-",
                                        "bg-",
                                      )}`}
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="mb-3 font-semibold">
                                Learning Outcomes
                              </h4>
                              <ul className="space-y-2">
                                {stage.details.outcomes
                                  .slice(0, 3)
                                  .map((item, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center gap-2"
                                    >
                                      <div
                                        className={`w-1.5 h-1.5 rounded-full ${stage.bgColor.replace(
                                          "bg-",
                                          "bg-",
                                        )}`}
                                      />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>

                          {/* Age & Duration */}
                          <div className="flex gap-6 pt-6 border-t">
                            <div>
                              <div className="text-sm text-muted-foreground">
                                Age Group
                              </div>
                              <div className="text-lg font-semibold">
                                {stage.details.ageGroup}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">
                                Duration
                              </div>
                              <div className="text-lg font-semibold">
                                {stage.details.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image & Activities */}
                      <div className="relative p-8 lg:p-10 bg-gradient-to-b from-background to-background/50">
                        <div className="relative h-64 mb-8 overflow-hidden rounded-2xl">
                          <Image
                            src={stage.image}
                            alt={stage.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        <div>
                          <h4 className="mb-4 font-semibold">
                            Sample Activities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.details.activities.map((activity, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-sm rounded-full border bg-background/50"
                              >
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* <div className="absolute bottom-8 left-8">
                          <div className="text-sm text-muted-foreground">
                            U Fill Academy • Stage {index + 1}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Journey Section */}
            <div className="p-8 mt-12 border rounded-3xl bg-background">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold">
                  Continuous Learning Journey
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Each stage seamlessly transitions to the next, ensuring a
                  cohesive educational experience that adapts to your
                  child&apos;s evolving needs and prepares them for lifelong
                  success.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Button
                    size="lg"
                    className="px-8 py-6 text-lg font-semibold text-white rounded-lg bg-primary hover:bg-primary/90"
                    onClick={() =>
                      (window.location.href =
                        "https://docs.google.com/forms/d/e/1FAIpQLScG3nDXAdVCfPN0fZbw_i72XbvapbCYzYSBtxlm6o2IHPQygg/viewform")
                    }
                  >
                    Begin Your Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className="font-semibold">Ready to explore more?</h4>
              <p className="text-sm text-muted-foreground">
                Discover how our pathway can benefit your child
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href="/">← Back to Home</Link>
              </Button>
              <Button asChild>
                <Link href="/admissions">Admissions Process →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
