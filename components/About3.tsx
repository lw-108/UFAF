"use client";

import { useState, useRef, FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  MoveUpRight,
  Play,
  Pause,
} from "lucide-react";

/* -------------------- Content -------------------- */

const paragraphs = [
  {
    text: "U Fill Academy is an educational initiative built on the principle of “Education for All.”Our core motive is to serve society by providing free and accessible education to tribalstudents and children from economically weaker sections.",
  },
  {
    text: "We believe that every child deserves quality learning opportunities, regardless ofbackground or financial status. By offering free academic support, tuition classes, and career guidance, U Fill Academy ensures that underprivileged students get equal access to knowledge and skills.",
  },
  {
    text: "Along with core academics, we also provide Co-Curricular (CCA) and Extra-Curricular (ECA) programs that help students grow holistically. From foundation classes, JEE/NEET/GATE guidance, to sports, arts, personality development, and skill training, we create an environment where learning is not just about passing exams, but also about building confidence, creativity, and character.",
  },
];

/* -------------------- Video Player Component -------------------- */

interface VideoPlayerProps {
  onTogglePlay?: (playing: boolean) => void;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ onTogglePlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    const newState = !isPlaying;
    setIsPlaying(newState);
    onTogglePlay?.(newState);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl group">
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
      </video>

      {/* linear Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent opacity-60" />

      {/* Controls Container */}
      <div className="absolute flex items-center gap-3 bottom-6 left-6">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 transition-all rounded-full shadow-lg bg-white/20 hover:scale-105 backdrop-blur-sm hover:bg-white/30"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-10 h-10 transition-all rounded-full shadow-lg bg-white/20 hover:scale-105 backdrop-blur-sm hover:bg-white/30"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>

        {/* Video Label */}
        <div className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm">
          Our Story Video
        </div>
      </div>
    </div>
  );
};

/* -------------------- Media Card Component -------------------- */

interface MediaCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

const MediaCard: FC<MediaCardProps> = ({
  src,
  alt,
  title,
  subtitle,
  aspectRatio = "square",
  className = "",
}) => {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl group ${className}`}>
      <div className={`relative ${aspectClasses[aspectRatio]}`}>
        {/* Image with proper object-contain */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-8 transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        {/* Subtle linear overlay */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-t from-white/5 to-transparent group-hover:opacity-100" />
      </div>

      {/* Text Overlay (only if title or subtitle provided) */}
      {(title || subtitle) && (
        <div className="absolute inset-x-0 bottom-0 p-6 text-white bg-linear-to-t from-[blue]/80 via-[blue]/40 to-transparent">
          {title && (
            <h3 className="text-xl font-semibold leading-tight text-black dark:text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-black opacity-90 dark:text-white">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

/* -------------------- Main About Section -------------------- */

export const About3: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h1 className="mb-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            About <span className="text-primary">U Fill Academy</span>
          </h1>

          {/* Expandable Text Card */}
          <div className="relative p-8 mb-8 border border-dashed border-white/20 rounded-3xl bg-background/backdrop-blur-sm">
            <div className="space-y-5 text-lg leading-relaxed text-foreground">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`transition-all duration-500 ${i > 0 && !expanded ? "max-h-0 overflow-hidden opacity-0" : "max-h-96 opacity-100"}`}
                >
                  {p.text}
                </p>
              ))}
            </div>

            {/* linear fade for read more */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-linear-to-t from-background to-transparent" />
            )}
          </div>

          {/* Read More Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-4 py-2 transition-all rounded-full hover:bg-primary/10"
          >
            <span className="font-medium text-primary">
              {expanded ? "Show Less" : "Read More"}
            </span>
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Bento Grid Section - Clean Layout */}
        <div className="mb-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Video - Full width */}
            <div className="lg:col-span-3 aspect-video">
              <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 to-primary/5">
                <VideoPlayer onTogglePlay={setVideoPlaying} />
              </div>
            </div>

            {/* Top Row - Two equal cards */}
            <div className="lg:col-span-1">
              <MediaCard
                src="/learningurobo.png"
                alt="Students learning with robot"
                title="Interactive Learning"
                subtitle="AI-powered education for all"
                aspectRatio="portrait"
                className="h-full bg-background"
              />
            </div>

            <div className="lg:col-span-1">
              <MediaCard
                src="/teachingurobo.png"
                alt="Teaching session with robot"
                title="Expert Guidance"
                subtitle="Personalized mentoring approach"
                aspectRatio="portrait"
                className="h-full bg-background"
              />
            </div>

            <div className="lg:col-span-1">
              <MediaCard
                src="/coupleurobo.png"
                alt="Community learning with robots"
                title="Community Building"
                subtitle="Education that uplifts families"
                aspectRatio="portrait"
                className="h-full bg-background"
              />
            </div>

            {/* Bottom Row - Stats and Mission */}
            <div className="lg:col-span-2">
              <div className="grid h-full grid-cols-2 gap-6">
                {/* Stats Card */}
                {/* <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-linear-to-br from-amber-50 to-amber-100">
                  <div className="text-5xl font-bold text-amber-600">1000+</div>
                  <div className="mt-2 text-lg font-semibold text-center text-amber-700">
                    Students Empowered
                  </div>
                  <div className="mt-2 text-sm text-center text-amber-600">
                    Since 2020
                  </div>
                </div> */}

                {/* Additional Stats */}
                {/* <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-linear-to-br from-indigo-50 to-indigo-100">
                  <div className="text-5xl font-bold text-indigo-600">50+</div>
                  <div className="mt-2 text-lg font-semibold text-center text-indigo-700">
                    Expert Educators
                  </div>
                  <div className="mt-2 text-sm text-center text-indigo-600">
                    Dedicated Faculty
                    </div>
                </div> */}
              </div>
            </div>

            {/* <div className="lg:col-span-1">
              <div className="flex flex-col justify-center h-full p-8 rounded-3xl bg-linear-to-br from-rose-50 to-rose-100">
                <h3 className="mb-4 text-2xl font-bold text-rose-700">
                  Education For All
                </h3>
                <p className="mb-6 text-rose-600">
                  Free quality education for tribal & underprivileged students
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 text-sm font-medium transition-all rounded-full bg-rose-600 text-rose-50 hover:bg-rose-700">
                    <MoveUpRight className="w-4 h-4" />
                    Join Our Mission
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-background">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="relative grid items-center gap-10 p-12 md:grid-cols-2">
              <div className="relative flex justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/u-robo.png"
                    alt="U Fill Academy Logo"
                    fill
                    className="z-20 object-contain drop-shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full animate-pulse bg-linear-to-br from-primary to-transparent" />
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-3xl font-bold">
                  Innovation That Empowers
                </h3>
                <p className="mb-6 text-lg text-muted-foreground">
                  We build inclusive educational ecosystems that uplift
                  underserved communities and unlock lifelong opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/missionandvision"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="gap-2">
                      Explore Our Mission <MoveUpRight className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href="/U-Fill-Academy-Brochure.pdf" download>
                    <Button size="lg" variant="outline" className="gap-2">
                      Download Brochure
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
