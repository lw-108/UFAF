"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
  "u-robo.png",
];

// Duplicate for seamless loop
const allLogos = [...logos, ...logos];

export const Case1 = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Infinite auto-scroll with centered alignment
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // 3 seconds per slide for better visibility

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <h3 className="text-2xl lg:text-3xl tracking-tighter lg:max-w-xl font-serif text-left">
            Our Trusted Partners
          </h3>
          
          <div className="relative w-full col-span-1 lg:col-span-4">
            {/* Highlight area indicator - shows where images will center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%/6)] h-full  rounded-xl z-0 pointer-events-none"></div>
            
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/95 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/95 to-transparent z-10 pointer-events-none"></div>
            
            <Carousel 
              setApi={setApi} 
              className="w-full"
              opts={{
                loop: true,
                align: "center", // Changed from "start" to "center"
                dragFree: false, // Disable drag free for centered snapping
                duration: 50, // Smooth transition
                startIndex: 0, // Start at first image
              }}
            >
              <CarouselContent className="ml-0">
                {allLogos.map((logo, index) => (
                  <CarouselItem
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 px-4" // Added padding for gaps
                    key={index}
                  >
                    <div className="group flex rounded-2xl aspect-square bg-background/50 backdrop-blur-sm  items-center justify-center p-4 transition-all duration-500">
                      <img
                        src={logo}
                        alt={`Partner ${index % 10 + 1}`}
                        className="w-full h-full object-contain rounded-lg transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};