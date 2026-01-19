"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SPLINE_URL =
  "https://my.spline.design/nexbotrobotcharacterconcept-quLQRzZpCb8v4Js4e5ISLgoE/";

const Hero243 = () => {
  return (
    <section className="relative flex min-h-screen px-5 overflow-hidden sm:pt-12 lg:pt-22">
      <div className="container relative z-10">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Transform Your Learning
          </h1>

          <ContainerTextFlip
            className="mt-6 text-4xl font-bold text-center md:text-5xl lg:text-6xl text-primary"
            words={["Knowledge", "Skills", "Career", "Future", "Ideas"]}
          />

          <p className="max-w-2xl mx-auto mt-6 text-lg text-center text-gray-600 dark:text-gray-300">
            Join U Fill Academy&apos;s innovative programs and unlock your
            potential with cutting-edge education technology and expert
            guidance.
          </p>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold text-white rounded-lg bg-primary hover:bg-primary/90"
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLScG3nDXAdVCfPN0fZbw_i72XbvapbCYzYSBtxlm6o2IHPQygg/viewform")
              }
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* 🔒 HIDDEN ON MOBILE | VISIBLE FROM TABLET UP */}
          <div className="hidden w-full max-w-5xl mx-auto mt-12 md:block lg:mt-16">
            <div
              className="relative overflow-hidden border border-gray-200 shadow-2xl rounded-2xl md:rounded-3xl dark:border-gray-800"
              style={{
                contentVisibility: "auto",
                containIntrinsicSize: "720px",
              }}
            >
              <div className="relative w-full overflow-hidden aspect-video bg-black/5">
                {/* ⬇️ MODEL MOVED DOWN TO HIDE SPLINE BADGE */}
                <iframe
                  src={SPLINE_URL}
                  title="AI Learning Assistant - Interactive 3D Model"
                  className="absolute w-full h-[120%] top-0 left-0"
                  style={{ border: "none" }}
                  loading="lazy"
                  allow="accelerometer; gyroscope"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
              Interactive 3D experience available on larger screens
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero243 };
