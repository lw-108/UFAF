"use client";

import React from "react";
import Plasma from "@/components/Plasma";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";
import { Banner1 } from "@/components/Banner1";
import { Hero243 } from "@/components/Hero243";
import { ThirukkuralSection } from "@/components/Thirukkural";
import { About3 } from "@/components/About3";
import MissionVision from "@/components/MissionVision";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { Feature51 } from "@/components/Feature51";
import ClassesCarousel from "@/components/ClassesCarousel";
import Gallery from "@/components/Gallery";
import VideoCarouselSection from "@/components/VideoCarouselSection";
import Testimonials from "@/components/Testimonials";
import { FrequentAskedQuestions } from "@/components/FrequentAskedQuestions";
import { Footer7 } from "@/components/Footer7";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Plasma Effect */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Plasma
          color="#002eb8"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={1}
          mouseInteractive={true}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar - Fixed at top */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavbarWithMegaMenu />
        </div>

        {/* Banner - Below Navbar */}
        <div className="pt-20">
          <Banner1
            linkUrl="https://udyamregistration.gov.in"
            codes={["TNSLMAILMTRSE-6-25-00060", "UDYAM-TN-20-0154420"]}
          />
        </div>

        {/* Main Content Sections */}
        <main className="px-4 mx-auto space-y-20 max-w-7xl sm:px-6 lg:px-8">
          <div className="pt-6">
            <Hero243 />
          </div>
          <ThirukkuralSection />
          <About3 />
          <MissionVision />
          <FeatureCarousel />
          <Feature51 />
          <ClassesCarousel />
          <Gallery />
          <VideoCarouselSection />
          <Testimonials />
          <FrequentAskedQuestions />
          <Footer7 />
        </main>
      </div>
    </div>
  );
};

export default Page;