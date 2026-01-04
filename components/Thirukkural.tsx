"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const THIRUKKURALS = [
  {
    number: 1,
    line1: "அகர முதல எழுத்பதல்லாம் ஆதி",
    line2: "பகவன் முதற்றே உலகு",
    meaning:
      "அகர ஒலியே எல்லா எழுத்துகளுக்கும் முதல்; அதுபோல், ஆதிபகவன் உலகிலுள்ள உயிர்கள் எல்லாவற்றிற்கும் முதல்வனாக இருக்கின்றான்.",
  },
  {
    number: 391,
    line1: "கற்க கசடறக் கற்பவை கற்றபின்",
    line2: "நிற்க அதற்குத் தக",
    meaning:
      "கற்க வேண்டிய நூல்களைப் பழுதின்றி கற்க வேண்டும்; அப்படி கற்ற பிறகு, கற்ற கல்விக்கு ஏற்றபடி நடத்தை இருக்க வேண்டும் என்பதாகும்.",
  },
  {
    number: 400,
    line1: "உவப்பத் தலைக்கூடி உள்ளப் பிரிதல்",
    line2: "அனைத்தே புலவர் தொழில்",
    meaning:
      "மற்றவர்கள் கூடி வரும்போது, மனம் மகிழ அவர்களுடன் கலந்து பேசி, இனி இவரை எப்போது, எவ்வாறு சந்திக்கப் போகிறோம் என்று அவர்கள் எண்ணுமாறு பிரிவது கற்று அறிந்தவரின் செயல்.",
  },
  {
    number: 399,
    line1: "தாமின் புறுவது உலகின் புறக்கண்டு",
    line2: "காமுறுவர் கற்றறிந் தார்",
    meaning:
      "தாம் இன்பம் அடைவதாகிய கல்வியினாலே உலகத்தாரும் இன்பம் அடைவதைக் கண்டு, கற்றறிந்தவர், மேன்மேலும் தாம் கற்பதையே விரும்புவார்கள்",
  },
];

export function ThirukkuralSection() {
  const [kural, setKural] = useState(THIRUKKURALS[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setKural(THIRUKKURALS[Math.floor(Math.random() * THIRUKKURALS.length)]);
  }, []);

  if (!mounted) return null;

  const refreshKural = () => {
    setKural(THIRUKKURALS[Math.floor(Math.random() * THIRUKKURALS.length)]);
  };

  return (
    <section className="flex items-center justify-center w-full pb-32 border-b border-dashed rounded-4xl">
      <div className="flex flex-col items-center w-full gap-10">
        {/* Title Bar */}
        <div className="relative flex flex-col justify-center w-full max-w-5xl px-5 py-10 text-center">
          <h1 className="mt-20 font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-5xl md:leading-tight">
            திருக்குறள்
          </h1>
        </div>

        {/* Main Content Box */}
        <div className="container flex flex-col items-center max-w-4xl gap-10 px-10 py-16 border border-dashed shadow-sm md:flex-row">
          {/* Image */}
          <div className="flex justify-center w-full md:justify-start md:w-auto">
            <Image
              src="/thiruvalluvar.png"
              alt="Thiruvalluvar"
              width={100}
              height={100}
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="space-y-2">
              <div className="space-y-2 text-center">
                <div className="space-y-1 text-center">
                  <div className="w-full px-2 py-3 space-y-1 underline-offset-8 text-start">
                    <p className="text-xs italic font-semibold leading-snug tracking-wide sm:text-sm md:text-base lg:text-lg">
                      {kural.line1}
                    </p>
                    <p className="text-xs italic font-semibold leading-snug tracking-wide sm:text-sm md:text-base lg:text-lg">
                      {kural.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm tracking-widest text-muted-foreground">
              குறள் எண்: {kural.number} — திருவள்ளுவர்
            </p>

            <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
              {kural.meaning}
            </p>

            <Button onClick={refreshKural} variant="outline" className="mt-4">
              அடுத்த குறள் பார்க்க
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
