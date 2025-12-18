"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-5">
          <h3 className="font-serif text-2xl tracking-tighter text-left lg:text-3xl lg:max-w-xl">
            Our Trusted Partners
          </h3>

          <div className="relative w-full col-span-1 lg:col-span-4">
            {/* Highlight area indicator - shows where images will center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%/6)] h-full  rounded-xl z-0 pointer-events-none"></div>

            {/* Left gradient fade */}
            <div className="absolute top-0 bottom-0 left-0 z-10 w-32 pointer-events-none bg-linear-to-r from-background via-background/95 to-transparent"></div>

            {/* Right gradient fade */}
            <div className="absolute top-0 bottom-0 right-0 z-10 w-32 pointer-events-none bg-linear-to-l from-background via-background/95 to-transparent"></div>

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
                    className="px-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6" // Added padding for gaps
                    key={index}
                  >
                    <div className="flex items-center justify-center p-4 transition-all duration-500 group rounded-2xl aspect-square bg-background/50 backdrop-blur-sm">
                      <Image
                        src={logo}
                        alt={`Partner ${(index % 10) + 1}`}
                        width={240}
                        height={120}
                        className="object-contain w-full h-full transition-all duration-500 rounded-lg group-hover:scale-110"
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
