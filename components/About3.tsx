"use client";

import { useRef, useState } from "react";
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
  `U Fill Academy is an educational initiative built on the principle of “Education for All.” Our core motive is to serve society by providing free and accessible education to tribal students and children from economically weaker sections.`,

  `We believe that every child deserves quality learning opportunities, regardless of background or financial status. By offering free academic support, tuition classes, and career guidance, U Fill Academy ensures that underprivileged students get equal access to knowledge and skills.`,

  `Along with core academics, we also provide Co-Curricular (CCA) and Extra-Curricular (ECA) programs that help students grow holistically. From foundation classes, JEE/NEET/GATE guidance, to sports, arts, personality development, and skill training, we create an environment where learning is not just about passing exams, but also about building confidence, creativity, and character.`,
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen px-5">
      <div className="container pt-10 border border-l-0 border-r-0 border-dashed backdrop-blur-sm">
        {/* ---------------- HEADER ---------------- */}
        <div className="mt-16 space-y-4 text-center">
          <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">
            About Us
          </h1>

          {/* ABOUT TEXT BOX */}
          <div
            className={`max-w-3xl mx-auto mt-8 rounded-2xl  bg-background/50 backdrop-blur p-6 sm:p-8 text-muted-foreground overflow-hidden transition-all duration-500 ease-in-out 
  ${expanded ? "max-h-[1000px]" : "max-h-[280px]"}`}
          >
            <div className="space-y-4 text-left leading-relaxed text-lg md:text-xl pt-1 pr-5 pl-5 overflow-y-auto max-h-[350px] no-scrollbar">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
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
        <div className="grid gap-10 pb-20 border border-t-0 border-b-0 border-l-0 border-r-0 border-dashed lg:grid-cols-3 rounded-4xl">
          {/* VIDEO */}
          <div className="relative overflow-hidden shadow-lg lg:col-span-2 rounded-4xl md:rounded-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1529101091764-c3526daf38f"
              className="object-cover w-full h-full"
            >
              <source
                src="https://skiper-ui.com/showreel/skiper-ui-showreel.mp4"
                type="video/mp4"
              />
            </video>

            {/* MUTE BUTTON */}
            <button
              onClick={toggleMute}
              className="absolute p-3 transition border rounded-full bottom-5 left-5 bg-background/60 backdrop-blur border-white/40 hover:scale-110"
            >
              {muted ? <VolumeX /> : <Volume2 />}
            </button>
          </div>

          {/* RIGHT SIDE CARD + IMAGE */}
          <div className="flex flex-col justify-between gap-7">
            <div className="p-6 mr-2 space-y-4 bg-transparent shadow-sm rounded-4xl">
              <img src="/u-robo.png" alt="logo" className="h-25" />
              <h3 className="text-lg font-semibold text-white">
                Innovation That Matters
              </h3>
              <p className="text-muted-foreground">
                We build software products used worldwide.
              </p>

              <Button variant="ghost" className="text-white">
                Explore More <MoveUpRight />
              </Button>
            </div>

            <div className="relative max-h-[300px] w-auto overflow-hidden rounded-4xl mr-2">
              <Image
                src="https://i.redd.it/s59mnjg6wvqa1.gif"
                alt="placeholder"
                width={500}
                height={300}
                className="object-cover w-auto h-auto max-h-[300px]"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* ---------------- ACHIEVEMENTS ---------------- */}
        <div className="p-10 mt-20 text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">
            Our Journey & Impact
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground">
            We are continuously working towards empowering underserved
            communities through education.
          </p>

          <div className="grid grid-cols-2 gap-10 mt-10 lg:grid-cols-4">
            {defaultAchievements.map((a, i) => (
              <div key={i} className="space-y-1">
                <h3 className="text-4xl font-bold">{a.value}</h3>
                <p className="text-muted-foreground">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
