"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="w-full px-6 pt-20 mb-4 border-b border-dashed rounded-4xl border-white/20">
      {/* Header */}
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">Mission & Vision</h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          The purpose behind what we build and the future we’re working toward —
          driven by innovation, accessibility, and impact.
        </p>
      </div>

      {/* 🔥 Single Full Width Image */}
      <div className="max-w-6xl mx-auto mt-16 rounded-xl overflow-hidden h-87.5 relative">
        <Image
          src="/forest.png"
          alt="Mission Vision Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mission & Vision Text */}
      <div className="grid max-w-6xl gap-12 mx-auto mt-20 md:grid-cols-2">
        {/* Mission */}
        <div className="space-y-4 ">
           <div className="inline-flex mb-6 transition-transform duration-300 bg-transparent rounded-2xl group-hover:scale-110">
                      <Image
                        src="/arrow.gif"
                        alt="Arrow GIF"
                        width={100}
                        height={100}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    </div>
          <h3 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">Our Mission</h3>
          <p className="leading-relaxed text-muted-foreground">
            To empower tribal and poor students through free, quality education
            and skill-based training, helping them achieve academic excellence
            and prepare for a brighter future.
          </p>
        </div>


        {/* Vision */}
        <div className="space-y-4">
          <div className="inline-flex mb-6 transition-transform duration-300 bg-transparent rounded-2xl group-hover:scale-110">
                      <Image
                        src="/vision.gif"
                        alt="Arrow GIF"
                        width={100}
                        height={100}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    </div>
          <h3 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">Our Vision</h3>
          <p className="leading-relaxed text-muted-foreground">
            A future where no child is left behind due to financial or social
            barriers – education that uplifts, empowers, and transforms lives.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center justify-between max-w-6xl gap-6 p-10 mx-auto mt-20 mb-20 border border-dashed rounded-xl sm:flex-row border-white/20">
        <div>
          <p className="text-muted-foreground">Join us in shaping the future</p>
          <h4 className="text-xl font-semibold">Be part of the movement</h4>
        </div>
        <Button size="lg" variant="default">
          Discover Opportunities
        </Button>
      </div>
    </section>
  );
}
