import React from "react";
import { StaggerTestimonials } from "./ui/stagger-testimonials";

const Testimonials = () => {
  return (
    <section className="w-full border border-t-0 border-b border-l-0 border-r-0 border-dashed bg-background bg-background-t-0 rounded-4xl py-22 border-white/20">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">
          Voices That Inspired Us
        </h2>
        <p className="max-w-xl mx-auto mb-20 text-muted-foreground">
          Real experiences from students and parents who’ve grown with us — their journey reflects the impact, quality, and commitment behind our academy.
        </p>
      </div>

      <StaggerTestimonials />
    </section>
  );
};

export default Testimonials;
