"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpen, Users, Mic, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const stages = [
  {
    icon: BookOpen,
    title: "Children's Hut",
    subtitle: "The Rise",
    stage: "Stage 1",
    desc: "Foundational learning and discovery. Building the first blocks of knowledge and curiosity through play-based learning and sensory activities.",
    image: "/u-robo.png",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Primary School",
    subtitle: "The Connections",
    stage: "Stage 2",
    desc: "Building relationships and core skills. Learning to collaborate, communicate effectively, and develop social-emotional intelligence.",
    image: "/u-robo.png",
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Mic,
    title: "Secondary School",
    subtitle: "The Voice",
    stage: "Stage 3",
    desc: "Developing expression and identity. Finding and using one's unique voice through debate, public speaking, and creative expression.",
    image: "/u-robo.png",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Senior Secondary School",
    subtitle: "The Creation",
    stage: "Stage 4",
    desc: "Innovation and original thinking. Learning to create, innovate, and bring ideas to life through project-based learning.",
    image: "/u-robo.png",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Rocket,
    title: "Senior Secondary School",
    subtitle: "The Future",
    stage: "Stage 5",
    desc: "Preparing for what lies ahead. Developing skills and mindset for future success, leadership, and global impact.",
    image: "/u-robo.png",
    color: "from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
  },
];

export const FeatureCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-slide effect
  useEffect(() => {
    if (!api || !isPlaying) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Reset to first slide
      }
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  const handleNext = () => {
    if (api) {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }
  };

  const handlePrev = () => {
    if (api) {
      if (api.canScrollPrev()) {
        api.scrollPrev();
      } else {
        api.scrollTo(stages.length - 1);
      }
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="w-full py-24 border border-t-0 border-l-0 border-r-0 border-dashed rounded-4xl lg:py-40 bg-background border-white/20">
      <div className="container px-4 mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">
            Our Progressive
            <br />
            <span className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">Educational Pathway</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured journey from foundational discovery to future-ready skills,
            designed to nurture every child's potential.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="absolute z-10 flex items-center gap-3 -top-15 right-4">
            <Button
              variant="outline"
              size="icon"
              onClick={togglePlay}
              className="w-10 h-10 rounded-full"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full"
              >
                ←
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="w-10 h-10 rounded-full"
              >
                →
              </Button>
            </div>
          </div>

          {/* Carousel */}
          <Carousel 
            setApi={setApi} 
            className="w-full max-w-4xl mx-auto"
            opts={{ 
              align: "center",
              slidesToScroll: 1,
              duration: 30,
            }}
          >
            <CarouselContent>
              {stages.map((stage, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className={`p-1 rounded-3xl overflow-hidden bg-linear-to-br ${stage.color} border shadow-lg`}>
                    <div className="overflow-hidden bg-white dark:bg-gray-900 rounded-2xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
                        
                        {/* Left Content */}
                        <div className="flex flex-col justify-between p-10 lg:p-12">
                          <div className="space-y-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className={`inline-flex items-center justify-center p-3 rounded-xl ${stage.color.replace('from-', 'bg-').replace(' to-', '/20')} mb-4`}>
                                  <stage.icon className={`h-7 w-7 ${stage.iconColor}`} />
                                </div>
                                <span className="px-3 py-1 text-sm font-medium rounded-full text-primary bg-primary/10">
                                  {stage.stage}
                                </span>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-muted-foreground">Slideshow</div>
                                <div className="font-mono text-2xl">
                                  {String(index + 1).padStart(2, '0')}/05
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="text-3xl font-bold tracking-tight lg:text-4xl">
                                {stage.title}
                              </h3>
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

                            <div className="pt-4">
                              <Button variant="outline" className="gap-2">
                                Learn More
                                <span className="ml-2">→</span>
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                              {/* Placeholder for image - you can replace with actual Image component */}
                              <div className="absolute inset-0 border shadow-inner rounded-2xl bg-linear-to-br from-white to-gray-100" />
                              <div className="absolute inset-4 rounded-xl bg-linear-to-br from-gray-200 to-gray-300 animate-pulse" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <stage.icon className={`h-24 w-24 ${stage.iconColor} opacity-20`} />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-6 left-6">
                            <div className="text-xs text-muted-foreground">
                              U Fill Academy • Age Group: {index === 0 ? "3-5" : index === 1 ? "6-10" : index === 2 ? "11-14" : "15-18"} years
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Progress Indicators */}
          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="flex items-center gap-3">
              {stages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex flex-col items-center gap-2 transition-all ${
                    current === index ? "opacity-100" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        current === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                      }`}
                    />
                    {current === index && (
                      <span className="text-xs font-medium text-primary">
                        {stages[index].stage}
                      </span>
                    )}
                  </div>
                  {current === index && (
                    <span className="text-xs text-muted-foreground">
                      Auto-advance in {isPlaying ? "5s" : "Paused"}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Slide Counter & Timer */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                <span>{isPlaying ? 'Auto-playing' : 'Paused'}</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrev}
                  className="w-8 h-8"
                >
                  ←
                </Button>
                <span className="font-medium">
                  {current + 1} / {stages.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNext}
                  className="w-8 h-8"
                >
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Each stage builds upon the previous, ensuring a continuous learning journey
            that adapts to your child's growth and development needs.
          </p>
        </div>
      </div>
    </section>
  );
};