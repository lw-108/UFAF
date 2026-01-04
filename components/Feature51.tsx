"use client";

import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface Feature {
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  image: string;
  url: string;
  isDefault: boolean;
}

interface Feature51Props {
  features?: Feature[];
}

export const Feature51 = ({
  features = [
    {
      id: "feature-1",
      heading: "Comprehensive Courses",
      icon: <BookOpen className="size-4" />,
      description:
        "Explore a wide range of accredited courses crafted for future-ready professionals. From engineering to arts — everything starts here.",
      image: "/forest.png",
      url: "/courses",
      isDefault: true,
    },
    {
      id: "feature-2",
      icon: <GraduationCap className="size-4" />,
      heading: "Research & Innovation",
      description:
        "Work alongside top faculty and industry experts to solve real-world problems and develop breakthrough solutions.",
      image: "/forest.png",
      url: "/research",
      isDefault: false,
    },
    {
      id: "feature-3",
      icon: <Users className="size-4" />,
      heading: "Campus Life",
      description:
        "Experience a diverse and vibrant student community with events, clubs, and personal growth opportunities.",
      image: "/forest.png",
      url: "/campus-life",
      isDefault: false,
    },
  ],
}: Feature51Props) => {
  const defaultTab =
    features.find((tab) => tab.isDefault)?.id || features[0].id;

  const [activeTab, setActiveTab] = useState(defaultTab);

  // Auto rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const index = features.findIndex((f) => f.id === prev);
        return features[(index + 1) % features.length].id;
      });
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [features]);

  return (
    <section className="w-full px-5 border border-t-0 border-l-0 border-r-0 border-dashed py-22 rounded-4xl bg-background border-white/20">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">
          Explore Our Academic Excellence
        </h2>
        <p className="max-w-xl mx-auto mb-20 text-muted-foreground">
          A learning journey designed to inspire curiosity, foster innovation,
          and shape futures with confidence and purpose.
        </p>
      </div>

      <div className="container">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="p-0">
          {/* TAB LIST */}
          <TabsList className="flex flex-col w-full h-auto gap-2 p-0 mb-10 bg-background md:flex-row">
            {features.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="hover:border-muted data-[state=active]:bg-muted group flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left shadow-none transition-opacity duration-200 hover:opacity-70"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <span className="bg-muted text-muted-foreground group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground flex size-8 items-center justify-center rounded-full lg:size-10">
                    {tab.icon}
                  </span>

                  <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                    {tab.heading}
                  </p>
                </div>

                <p className="font-normal text-muted-foreground">
                  {tab.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* TAB CONTENT */}
          {features.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="relative w-full h-112.5 md:h-137.5 lg:h-162.5 rounded-md overflow-hidden shadow-xl transition-opacity duration-500">
                <Image
                  src={tab.image}
                  alt={tab.heading}
                  fill
                  priority={tab.isDefault}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute max-w-xl space-y-3 bottom-10 left-10">
                  <h3 className="text-2xl font-bold text-white md:text-4xl">
                    {tab.heading}
                  </h3>
                  <p className="text-base text-white/80 md:text-lg">
                    {tab.description}
                  </p>

                  <a
                    href={tab.url}
                    className="inline-flex items-center gap-2 pb-1 text-white transition border-b border-white/60 hover:border-white"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
