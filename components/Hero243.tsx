// components/Hero243.tsx
"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";

const Hero243 = () => {
  return (
    <section className="flex min-h-screen px-5 sm:pt-12 lg:pt-32">
      <div className="container">
        <h1 className="text-5xl font-bold text-center">
          Transform Your Learning
        </h1>

        <ContainerTextFlip
          className="mt-6 text-6xl text-center bg-primary"
          words={["Knowledge", "Skills", "Career", "Future", "Ideas"]}
        />

        <div className="mt-6 text-center">
          <Button 
            className="text-white bg-primary hover:bg-primary/90" 
            onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScG3nDXAdVCfPN0fZbw_i72XbvapbCYzYSBtxlm6o2IHPQygg/viewform"}
          >
            Enroll Now
          </Button>
        </div>

        {/* REPLACED: Direct iframe instead of HeroSplineClient */}
        <div className="w-full max-w-5xl mx-auto mt-12">
          <div className="relative overflow-hidden ">
            <div className="relative w-full aspect-4/3 md:aspect-video">
              <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-quLQRzZpCb8v4Js4e5ISLgoE/"
                className="absolute inset-0 w-full h-full mt-15"
                title="AI Learning Assistant - Interactive 3D Model"
                style={{ border: 'none' }}
                allow="accelerometer; gyroscope"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export { Hero243 };