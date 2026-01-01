'use client'

import React from "react";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";
import { Banner1 } from "@/components/Banner1";
import { Hero243 } from "@/components/Hero243";
import { ThirukkuralSection } from "@/components/Thirukkural";
import { About3 } from "@/components/About3";
import MissionVision from "@/components/MissionVision";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { Feature51 } from "@/components/Feature51";
import ClassesCarousel from "@/components/ClassesCarousel";
import  Gallery  from "@/components/Gallery";
import VideoCarouselSection from "@/components/VideoCarouselSection";
import Testimonials from "@/components/Testimonials";
import { FrequentAskedQuestions } from "@/components/FrequentAskedQuestions";
import { Footer7 } from "@/components/Footer7";

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-visible border-t-0 border-b-0 border-white border-dashed">
      <NavbarWithMegaMenu />
      
      <div className="mt-25">
        <Banner1
          linkUrl="https://udyamregistration.gov.in"
          codes={["TNSLMAILMTRSE-6-25-00060", "UDYAM-TN-20-0154420"]}
        />
      </div>

      <main className="px-4 pt-10 mx-auto space-y-20 overflow-visible border-t-0 border-b-0 border-white border-dashed max-w-7xl sm:px-6 lg:px-8">
        <Hero243 />
        <ThirukkuralSection />
        <About3 />
        <MissionVision />
        <FeatureCarousel />
        <Feature51 />
        <ClassesCarousel />
        <Gallery/>
        <VideoCarouselSection />
        <Testimonials />
        <FrequentAskedQuestions />
        <Footer7 />
      </main>
    </div>
  );
};

export default Page;