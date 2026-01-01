// components/Hero243.tsx
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";
import HeroSplineClient from "./HeroSplineClient";

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

        {/* CLIENT-ONLY */}
        <HeroSplineClient />

      </div>
    </section>
  );
};

export { Hero243 };
