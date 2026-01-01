"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function HeroSplineClient() {
  return (
    <div className="relative overflow-hidden border-dashed w-fullmx-auto rounded-2xl">
      <div className="relative w-full border-dashed aspect-9/16 max-w-100 md:aspect-video md:max-w-none ">
        <Spline
          scene="https://prod.spline.design/54laZrznS91G7a2d/scene.splinecode"
          className="absolute inset-0 w-full h-full mt-19 "
        />
      </div>
    </div>
  );
}