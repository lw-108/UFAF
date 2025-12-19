import React from "react";
import Image from "next/image";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";

const Hero243 = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen px-5 pt-32 pb-20 -mb-40 -mt-50">
      <div className="container mt-10">
        {/* ---------------- HEADER + TEXT ---------------- */}
        <div className="relative flex flex-col justify-start w-full max-w-5xl px-5 py-12 text-center md:items-center md:justify-center lg:mx-auto">
          <div className="w-full max-w-xl mt-3 font-semibold tracking-tighter mb-7 md:mb-10 lg:mb-0">
            {/* Logo + Academy Text */}
            <div className="flex flex-col items-center md:items-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Transform Your Learning
              </h1>
            </div>

            {/* Flipping words animation */}
            <ContainerTextFlip
              className="block mt-6 text-4xl md:text-6xl lg:text-7xl font-garet bg-primary"
              words={["Knowledge", "Skills", "Career", "Future", "Ideas"]}
            />
          </div>
        </div>

        {/* ---------------- SUBTEXT + BUTTON ---------------- */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl pb-10 mx-auto text-center">
          <div className="w-full max-w-2xl space-y-5">
            <p className="px-5 text-muted-foreground lg:text-lg">
              Join U Fill Academy and gain access to world-class courses, expert
              instructors, and a community dedicated to helping you achieve
              academic and career excellence.
            </p>

            <Button className="h-12 mx-5 text-lg rounded-lg">Enroll Now</Button>
          </div>
        </div>

        {/* ---------------- IMAGE ---------------- */}
        <div className="flex justify-center pb-25">
          <Image
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="U Fill Academy Showcase"
            width={1280}
            height={720}
            className="object-cover w-full mx-auto shadow-xl aspect-video max-h-175 max-w-7xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero243 };
