// components/sections/ScrollStackSection.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

// Project data organized by categories
const projects = [
  {
    title: "TECH BASED CLASSES",
    category: "01",
    description:
      "Cutting-edge technology courses to prepare students for the digital future. Hands-on learning with modern tools and platforms.",
    sessions: [
      "IOT - INTERNET OF THINGS",
      "AI & ROBOTICS",
      "PYTHON",
      "JAVA",
      "HTML, C, C++",
      "APP DEVELOPMENT",
      "EMBEDDED SYSTEM",
      "ANIMATION",
    ],
    images: [
      "/iot.png",
      "/ai.png",
      "/python.png",
      "/java.png",
      "/web.png",
      "/app.png",
      "/embbed.png",
      "/ani.png",
    ],

    link: "#tech-courses",
    className: "font-frijole",
  },
  {
    title: "MATH BASED CLASSES",
    category: "02",
    description:
      "Develop strong mathematical foundations and problem-solving skills through innovative teaching methods.",
    sessions: ["ABACUS", "VEDIC MATHS", "GEOMETRY IN ARTS"],
    images: ["/abbacus.png", "/vedic-math.png", "/geometry.png"],
    link: "#math-courses",
    className: "font-frijole",
  },
  {
    title: "INDOOR & FITNESS CLASSES",
    category: "03",
    description:
      "Promote mental and physical well-being through strategic games and mindfulness practices.",
    sessions: ["CHESS", "CARROM", "YOGA & MEDITATION"],
    images: ["/chess.png", "/carrom.png", "/yoga.jpg"],
    link: "#fitness-courses",
    className: "font-frijole",
  },
  {
    title: "HOBBIES & LIFESTYLE CLASSES",
    category: "04",
    description:
      "Explore creative passions and develop artistic skills for personal growth and enjoyment.",
    sessions: [
      "DRAWING",
      "HAND WRITING & CALLIGRAPHY",
      "PHOTOGRAPHY",
      "MUSIC",
      "PAINTING",
      "FILM MAKING",
      "ART & CRAFT",
    ],
    images: [
      "/drawing.png",
      "/calli.png",
      "/photography.jpg",
      "/music.png",
      "/painting.png",
      "art-craft.png",
      "filming.png",
    ],
    link: "#hobby-courses",
    className: "font-frijole",
  },
  {
    title: "STUDY BASED CLASSES",
    category: "05",
    description:
      "Academic excellence through comprehensive tutoring and competitive exam preparation.",
    sessions: [
      "TUITIONS - GRADE 3 TO 12",
      "NEET",
      "JEE",
      "GATE",
      "PHONICS",
      "SPOKEN ENGLISH",
    ],
    images: [
      "/tution.png",
      "/neet.png",
      "/jee.png",
      "/gate.png",
      "/phonics1.png",
      "/spkenglish.png",
    ],
    link: "#study-courses",
    className: "font-frijole",
  },
];

// Card Component
interface ScrollCardProps {
  i: number;
  title: string;
  category: string;
  description: string;
  sessions: string[];
  images: string[];
  src: string;
  link: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}

function ScrollCard({
  i,
  title,
  category,
  description,
  sessions,
  images,
  link,
  progress,
  range,
  targetScale,
}: ScrollCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col relative rounded-xl w-[95vw] max-w-6xl mx-auto p-6 lg:p-12 border-2 border-foreground/20 bg-background shadow-2xl"
        style={{
          scale,
          // Reduced top spacing to prevent hiding under header
          top: `calc(10vh + ${i * 15}px)`,
        }}
      >
        {/* Accent Elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-foreground rounded-full" />
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-foreground rounded-full" />

        {/* Header with Category */}
        <div className="text-center mb-8">
          <div className="inline-block bg-foreground text-background px-4 py-1 rounded-full text-sm font-bold mb-2">
            CATEGORY {category}
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground font-frijole">
            {title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-12 mt-4">
          {/* Left Side - Content */}
          <div className="w-full lg:w-2/5">
            {/* Description */}
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-6">
              <span className="text-3xl lg:text-4xl font-serif float-left mr-3 leading-none font-bold text-foreground">
                {description.charAt(0)}
              </span>
              {description.slice(1)}
            </p>

            {/* Sessions List */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Available Sessions:
              </h3>
              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                {sessions.map((session, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer ${
                      index === currentImageIndex
                        ? "bg-foreground/10 border border-foreground/30"
                        : "hover:bg-foreground/5"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex
                          ? "bg-foreground"
                          : "bg-foreground/30"
                      }`}
                    />
                    <span className="text-sm text-foreground/80">
                      {session}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation and Link */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full border border-foreground/30 hover:bg-foreground/10 transition-colors"
                >
                  ←
                </button>
                <span className="text-sm text-foreground/60">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full border border-foreground/30 hover:bg-foreground/10 transition-colors"
                >
                  →
                </button>
              </div>

              <a
                href={link}
                className="text-sm lg:text-base font-medium transition-all cursor-pointer flex items-center gap-2 group text-foreground hover:text-foreground/70"
              >
                Explore Courses
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="currentColor"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Dynamic Image */}
          <div className="w-full lg:w-3/5 h-64 lg:h-96 relative rounded-lg overflow-hidden border border-foreground/20">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src={
                  images[currentImageIndex]?.startsWith("/")
                    ? images[currentImageIndex]
                    : "/fallback.jpg"
                }
                alt={sessions[currentImageIndex]}
                fill
                className="object-cover transition-opacity duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/fallback.jpg";
                }}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Session title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-4">
                <h4 className="text-white font-semibold text-lg">
                  {sessions[currentImageIndex]}
                </h4>
              </div>

              {/* Image navigation dots */}
              <div className="absolute bottom-4 right-4 flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* Black and white overlay */}
              <div className="absolute inset-0 " />
            </motion.div>
          </div>
        </div>

        {/* Project Number */}
        <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center bg-foreground text-background font-bold text-lg shadow-lg border-2 border-background">
          {i + 1}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-foreground/50 rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-foreground/50 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-foreground/50 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-foreground/50 rounded-br-xl" />
      </motion.div>
    </div>
  );
}

// Main Section Component
export default function ScrollStackSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Smooth scrolling with Lenis
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <section id="courses" className="w-full bg-background mt-64">
      {/* Reduced overall padding */}
      <div className="container mx-auto px-2">
        {/* Section Header with reduced margins */}
        <div className="text-center mb-4">
          {" "}
          {/* Reduced from mb-16 to mb-4 */}
          <h2 className="font-bowlby text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mt-12 ">
            {" "}
            {/* Reduced from mb-4 to mb-2 */}
            U-Fill Academy Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto -mb-64">
            Discover our comprehensive range of courses designed to nurture
            talent and build skills for the future
          </p>
        </div>

        {/* Scroll Cards Container with minimal gap */}
        <div ref={container} className="my-[10vh] mb-[20vh]">
          {" "}
          {/* Drastically reduced from my-[30vh] to my-[10vh] */}
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <ScrollCard
                key={`project_${i}`}
                i={i}
                {...project}
                src={project.images[0]} // Default first image
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
