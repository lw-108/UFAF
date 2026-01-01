"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  MoveUpRight,
} from "lucide-react";
import { Case1 } from "@/components/ui/Case1"; // import the carousel
import type { FC } from "react";
import Image from "next/image";

// --------------- TEXT CONTENT (3 PARAGRAPHS) ----------------

const paragraphs = [
  {
    text: "U Fill Academy is an educational initiative built on the principle of \"Education for All.\" Our core motive is to serve society by providing free and accessible education to tribal students and children from economically weaker sections.",
  },
  {
    text: "We believe that every child deserves quality learning opportunities, regardless of background or financial status. By offering free academic support, tuition classes, and career guidance, U Fill Academy ensures that underprivileged students get equal access to knowledge and skills.",
  },
  {
    text: "Along with core academics, we also provide Co-Curricular (CCA) and Extra-Curricular (ECA) programs that help students grow holistically. From foundation classes, JEE/NEET/GATE guidance, to sports, arts, personality development, and skill training, we create an environment where learning is not just about passing exams, but also about building confidence, creativity, and character.",
  },
];

// ------------------ Achievements ------------------

const defaultAchievements = [
  { label: "Students Impacted", value: "2000+" },
  { label: "Free Classes Conducted", value: "500+" },
  { label: "Mentors & Volunteers", value: "60+" },
  { label: "Communities Served", value: "15+" },
];

// ------------------ COMPONENT ------------------

export const About3: FC = () => {
  const [muted, setMuted] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen">
      <div className="container pt-10 border border-t-0 border-l-0 border-r-0 border-dashed backdrop-blur-sm">
        {/* ---------------- HEADER ---------------- */}
        <div className="mt-16 space-y-4 text-center">
          <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">
            About Us
          </h1>

          {/* ABOUT TEXT BOX */}
          <div
            className={`max-w-3xl mx-auto mt-8 rounded-2xl bg-background/50 backdrop-blur p-6 sm:p-8 text-muted-foreground overflow-hidden transition-all duration-500 ease-in-out 
  ${expanded ? "max-h-62.5" : "max-h-70"}`}
          >
            <div className="pt-1 pl-5 pr-5 space-y-4 overflow-y-auto text-lg leading-relaxed text-left md:text-xl max-h-54.5 no-scrollbar">
              {paragraphs.map((p, i) => (
                <p key={i}>{p.text}</p>
              ))}
            </div>
          </div>

          {/* SHOW MORE BUTTON */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 mx-auto mt-4 text-sm font-medium transition text-primary hover:opacity-70"
          >
            {expanded ? "Show Less" : "Read More"}
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* ---------------- CAROUSEL (REPLACES LOGOS3) ---------------- */}
        <div className="py-20">
          <Case1 />
        </div>

        {/* ---------------- VIDEO + IMAGE / CARD ---------------- */}
        <div className="grid gap-10 pb-10 border border-t-0 border-b-0 border-l-0 border-r-0 border-dashed lg:grid-cols-3 rounded-2xl">
          {/* VIDEO */}
          <div className="relative overflow-hidden shadow-lg rounded-2xl lg:col-span-2">
            {/* YouTube Embed */}
            <div className="relative pt-[36.25%]">
              <iframe
                src={`https://www.youtube.com/embed/O-BdMhNGvQw?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=O-BdMhNGvQw&controls=0&modestbranding=1&rel=0`}
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                title="U-Fill Academy Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="absolute p-3 transition-all border rounded-full bottom-4 left-4 bg-background/60 backdrop-blur-sm border-white/40 hover:scale-110 hover:bg-background/80"
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* RIGHT SIDE CARD + IMAGE */}
          <div className="flex flex-col justify-between gap-7">
            <div className="p-6 space-y-4 bg-transparent border shadow-sm rounded-2xl">
              <div className="relative w-40 h-40 mx-auto">
                <Image 
                  src="/u-robo.png" 
                  alt="U Fill Academy Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                Innovation That Matters
              </h3>
              <p className="text-center text-muted-foreground">
                We build educational solutions that transform lives.
              </p>

              <Button variant="outline" className="w-full gap-2">
                Explore More <MoveUpRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative w-full h-64 overflow-hidden border rounded-2xl">
              <Image
                src="/placeholder-image.jpg" // Replace with your actual image
                alt="Our students learning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* ---------------- ACHIEVEMENTS ---------------- */}
        <div className="p-10 mt-20 text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl md:leading-tight">
            Our Journey & Impact
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-muted-foreground">
            We are continuously working towards empowering underserved
            communities through education.
          </p>

          <div className="grid grid-cols-2 gap-10 mt-10 lg:grid-cols-4">
            {defaultAchievements.map((a, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-4xl font-bold text-primary">{a.value}</h3>
                <p className="text-muted-foreground">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};