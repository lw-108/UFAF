"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  MoveUpRight,
} from "lucide-react";
// import { Case1 } from "@/components/ui/Case1";
import type { FC } from "react";
import Image from "next/image";

// Text content
const paragraphs = [
  {
    text: "U Fill Academy is an educational initiative built on the principle of 'Education for All.' Our core motive is to serve society by providing free and accessible education to tribal students and children from economically weaker sections.",
  },
  {
    text: "We believe that every child deserves quality learning opportunities, regardless of background or financial status. By offering free academic support, tuition classes, and career guidance, U Fill Academy ensures that underprivileged students get equal access to knowledge and skills.",
  },
  {
    text: "Along with core academics, we also provide Co-Curricular (CCA) and Extra-Curricular (ECA) programs that help students grow holistically. From foundation classes, JEE/NEET/GATE guidance, to sports, arts, personality development, and skill training, we create an environment where learning is not just about passing exams, but also about building confidence, creativity, and character.",
  },
];

// Achievements
const defaultAchievements = [
  { label: "Students Impacted", value: "2000+" },
  { label: "Free Classes", value: "500+" },
  { label: "Mentors & Volunteers", value: "60+" },
  { label: "Communities Served", value: "15+" },
];

// Simple Local Video Player with Mute/Unmute Only
const LocalVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black rounded-2xl">
      {/* Video Element - Auto-plays, loops, initially muted */}
      <video
        ref={videoRef}
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
      >
        <source src="/vids/aiaiai.mp4" type="video/mp4" />
        <source src="/vids/aiaiai.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute Button Only */}
      <button
        onClick={toggleMute}
        className="absolute p-3 transition-all rounded-full shadow-lg bg-white/90 backdrop-blur-sm bottom-4 left-4 hover:scale-110 hover:bg-white"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gray-700" />
        ) : (
          <Volume2 className="w-5 h-5 text-gray-700" />
        )}
      </button>
    </div>
  );
};

export const About3: FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full min-h-screen py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-primary/10 text-primary border-primary/20">
            <span className="text-sm font-semibold">Our Story</span>
          </div>
          
          <h1 className="mb-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            About <span className="text-primary">U Fill Academy</span>
          </h1>

          {/* About Text Box */}
          <div className={`max-w-3xl mx-auto mb-8 p-6 rounded-2xl bg-transparent border border-white/20 border-dashed shadow-sm transition-all duration-500 ${
            expanded ? "max-h-125" : "max-h-50"
          } overflow-hidden`}>
            <div className="space-y-4 leading-relaxed text-black dark:text-white">
              {paragraphs.map((p, i) => (
                <p key={i} className={i > 0 && !expanded ? "hidden" : ""}>
                  {p.text}
                </p>
              ))}
            </div>
          </div>

          {/* Show More Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-4 py-2 transition-colors text-primary hover:text-primary/80"
          >
            {expanded ? "Show Less" : "Read More"}
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Carousel */}
        {/* <div className="mb-20">
          <Case1 />
        </div> */}

        {/* Video + Image Section */}
        <div className="grid gap-8 mb-20 lg:grid-cols-3">
          {/* Video Section */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden shadow-xl rounded-2xl">
              <div className="relative aspect-video">
                {/* Use Local Video Player Component */}
                <LocalVideoPlayer />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col gap-8">
            {/* Logo Card */}
            <div className="p-6 border border-dashed rounded-2xl bg-background border-white/20">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image 
                  src="/u-robo.png" 
                  alt="U Fill Academy Logo" 
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-center text-black dark:text-white">
                Innovation That Matters
              </h3>
              <p className="mb-6 text-center text-gray-600">
                We build educational solutions that transform lives.
              </p>
              <Button variant="outline" className="w-full gap-2">
                Explore More <MoveUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Optional Image */}
            {/* <div className="relative flex-1 min-h-[200px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about-students.jpg"
                alt="Our students learning"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div> */}
          </div>
        </div>

        {/* Achievements */}
        {/* <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-primary/10 text-primary border-primary/20">
            <span className="text-sm font-semibold">Our Impact</span>
          </div>
          
          <h2 className="mb-6 font-serif text-3xl md:text-4xl lg:text-5xl">
            Transforming Education, Transforming Lives
          </h2>
          
          <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
            We are continuously working towards empowering underserved communities through education.
          </p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {defaultAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-6 transition-shadow duration-300 bg-transparent shadow-sm text-serif rounded-2xl hover:shadow-md"
              >
                <div className="mb-2 text-4xl font-bold text-serif text-primary">
                  {achievement.value}
                </div>
                <div className="font-medium text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};