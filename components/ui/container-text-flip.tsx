"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef<HTMLDivElement>(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <div className="flex justify-center w-full">
<motion.div
  layout
  layoutId={`words-here-${id}`}
  animate={{ width }}
  transition={{ duration: animationDuration / 1000, ease: "anticipate" }}
  className={cn(
    "relative inline-flex items-center justify-center rounded-lg px-4 py-3 text-center",
    "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold",
    "text-white dark:text-white",
    "bg-[violet]-700 dark:bg-primary",
    "shadow-lg dark:shadow-xl",
    className
  )}
>

        <motion.span
          ref={textRef}
          layoutId={`word-div-${words[currentWordIndex]}-${id}`}
          transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
          className={cn("inline-block", textClassName)}
        >
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: index * 0.02 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
    </div>
  );
}
