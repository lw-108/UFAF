import { TrendingUp, Users, Zap } from "lucide-react";
import React from "react";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";

const Hero243 = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center pt-32 pb-20 px-5 -mt-50 -mb-40">
      <div className="container mt-10">
        {/* ---------------- HEADER + TEXT ---------------- */}
        <div className="relative flex w-full max-w-5xl flex-col justify-start px-5 py-12 md:items-center md:justify-center lg:mx-auto text-center">
          <div className="mb-7 mt-3 w-full max-w-xl font-semibold tracking-tighter md:mb-10 lg:mb-0">
            {/* Logo + Academy Text */}
            <div className="flex flex-col items-center md:items-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Transform Your Learning
              </h1>
            </div>

            {/* Flipping words animation */}
            <ContainerTextFlip
              className="block text-4xl md:text-6xl lg:text-7xl mt-6 font-garet bg-primary"
              words={["Knowledge", "Skills", "Career", "Future", "Ideas"]}
            />
          </div>
        </div>

        {/* ---------------- SUBTEXT + BUTTON ---------------- */}
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center pb-10 text-center">
          <div className="w-full max-w-2xl space-y-5">
            <p className="text-muted-foreground px-5 lg:text-lg">
              Join U Fill Academy and gain access to world-class courses, expert
              instructors, and a community dedicated to helping you achieve
              academic and career excellence.
            </p>

            <Button className="mx-5 h-12 rounded-lg text-lg">Enroll Now</Button>
          </div>
        </div>


        {/* ---------------- IMAGE ---------------- */}
        <div className="pb-25 flex justify-center">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="U Fill Academy Showcase"
            className="mx-auto aspect-video max-h-[700px] w-full max-w-7xl rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero243 };
