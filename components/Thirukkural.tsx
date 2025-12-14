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
    line1: "கேடில் விழுச்செல்வம் கல்வி யொருவற்கு",
    line2: "மாடல்ல மற்றை யவை",
    meaning:
      "அழிவில்லாத சிறந்த செல்வம்’ என்பது கல்விச் செல்வமே; மற்றைய பொன் பொருள் மண் என்னும் செல்வங்கள் ஒருவனுக்குச் சிறந்த செல்வம் ஆகா",
  },
  {
    number: 390,
    line1: "யாதானும் நாடாமால் ஊராமால் என்னொருவன்",
    line2: "சாந்துணையுங் கல்லாத வாறு",
    meaning:
      "கற்றவனுக்கு எந்த நாடும் நாடாகும்; எந்த ஊரும் ஊராகும்; இதுவே உண்மையாக இருந்தும் ஒருவன் சாகும் வரைக்கும் கல்லாமலிருப்பது எதனால்? ",
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
    <section className="w-full flex justify-center items-center">
      <div className="flex flex-col w-full items-center gap-10">
        {/* Title Bar */}
        <div className="relative flex w-full max-w-5xl flex-col justify-center px-5 py-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-tight md:leading-tight mt-20">
            Thirukkural
          </h1>
        </div>

        {/* Main Content Box */}
        <div className="container border border-dashed border-b-0 px-10 py-16 flex flex-col md:flex-row items-center gap-10 max-w-4xl shadow-sm">
          {/* Image */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src="/thiruvalluvar.png"
              alt="Thiruvalluvar"
              width={160}
              height={160}
              className="drop-shadow-lg object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="space-y-2">
              <div className="space-y-2 text-center">
                <div className="space-y-1 text-center">
                  <div className="space-y-1 text-start border border-dashed px-2 py-3 rounded-lg w">
                    <p className="text-base sm:text-1xl md:text-2xl lg:text-2.5xl font-semibold leading-snug tracking-wide italic">
                      {kural.line1}
                    </p>
                    <p className="text-base sm:text-lg md:text-2xl lg:text-2.5xl font-semibold leading-snug tracking-wide italic">
                      {kural.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground tracking-widest">
              குறள் எண்: {kural.number} — திருவள்ளுவர்
            </p>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
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
