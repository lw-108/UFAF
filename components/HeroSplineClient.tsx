// components/HeroSplineClient.tsx
"use client";

export default function HeroSplineClient() {
  return (
    <div className="relative w-full mx-auto mt-10 overflow-hidden rounded-2xl">
      <div className="relative w-full aspect-4/3 md:aspect-video">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-quLQRzZpCb8v4Js4e5ISLgoE/"
          className="absolute inset-0 w-full h-full mt-17 rounded-2xl"
          title="AI Robot Assistant"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}