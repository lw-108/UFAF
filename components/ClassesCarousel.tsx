"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { classesData } from "../data/classes-data";

// Type for each class
interface ClassData {
  title: string;
  category: string;
  description: string;
  sessions: string[];
  images: string[];
  link: string;
}

export default function ClassesCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [gridItems, setGridItems] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  // Shuffle images randomly in the grid
  const shuffleGrid = (images: string[]): (string | null)[] => {
    const newGrid: (string | null)[] = Array(9).fill(null);
    const shuffledIndexes = [...Array(9).keys()].sort(
      () => 0.5 - Math.random()
    );
    images.forEach((img: string, idx: number) => {
      newGrid[shuffledIndexes[idx]] = img;
    });
    return newGrid;
  };

  // Update grid when currentIndex changes
  useEffect(() => {
    setGridItems(shuffleGrid(classesData[currentIndex].images));
  }, [currentIndex]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % classesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + classesData.length) % classesData.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % classesData.length);
  };

  const currentClass: ClassData = classesData[currentIndex];

  // Compute XO-style border classes
  const getBorderClasses = (idx: number): string => {
    let classes = "border-0 "; // thin outer border
    if (idx < 3) classes += " border-b-0 border-dashed"; // top row bottom border
    if (idx > 3) classes += " border-t-0 border-dashed"; // bottom row top border
    if (idx % 3 === 0) classes += " border-r-0 border-dashed"; // left column right border
    if (idx % 3 === 2) classes += " border-l-0 border-dashed"; // right column left border
    return classes;
  };

  return (
    <section className="w-full border border-t-0 border-b border-l-0 border-r-0 border-dashed bg-background-t-0 rounded-4xl py-22 border-white/20">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-7xl md:leading-tight">
          Explore Our Courses & Programs
        </h2>
        <p className="max-w-xl mx-auto mb-20 text-muted-foreground">
          Learning made exciting — where curiosity leads to skills, skills lead
          to confidence, and confidence leads to future-ready possibilities.
        </p>
      </div>

      <div className="container flex flex-col items-center gap-8 px-4 mx-auto lg:px-8 lg:flex-row lg:gap-12">
        {/* Left: 3x3 Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-5 w-full lg:w-1/2 h-[300px] lg:h-[400px]">
          {gridItems.map((imgSrc: string | null, idx: number) => (
            <div
              key={idx}
              className={`relative w-full h-full overflow-hidden rounded-lg ${getBorderClasses(
                idx
              )}`}
            >
              {imgSrc && (
                <Image
                  src={imgSrc}
                  alt={currentClass.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              )}
            </div>
          ))}
        </div>

        {/* Right: Content */}
        <div className="flex flex-col w-full gap-4 lg:w-1/2">
          <h3 className="text-2xl font-bold lg:text-4xl text-foreground">
            {currentClass.title}
          </h3>
          <p className="leading-relaxed text-foreground/80">
            {currentClass.description}
          </p>

          {/* Explore Courses Link */}
          <a
            href={currentClass.link}
            className="inline-flex items-center gap-2 mt-2 font-medium transition text-primary hover:text-primary/80"
          >
            Explore Courses
            <ArrowUpRight className="w-4 h-4 animate-moveup" />
          </a>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="p-3 transition rounded-full bg-foreground/10 hover:bg-foreground/20"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 transition rounded-full bg-foreground/10 hover:bg-foreground/20"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
