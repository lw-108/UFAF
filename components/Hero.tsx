import { GraduationCap } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero67() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col items-center max-w-4xl gap-10 px-4 mx-auto text-center lg:px-0">
          {/* Heading */}
          <h1 className="text-4xl font-semibold tracking-tight lg:text-6xl">
            Empowering the Future Through Knowledge
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            <strong className="font-medium text-foreground">
              U-Fill Academy
            </strong>{" "}
            {`is committed to shaping tomorrows leaders. Fill your knowledge — fill your future with practical learning programs, expert instructors, and industry-ready skills.`}
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center w-full gap-5 sm:flex-row">
            <Button
              size="lg"
              className="shadow-md hover:scale-[1.03] transition-transform"
            >
              <GraduationCap className="h-5 mr-2" />
              Enroll & Start Learning
            </Button>

            {/* Avatar Group */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 6, 3, 4].map((num) => (
                  <Avatar key={num} className="border shadow-sm size-9">
                    <AvatarImage
                      src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${num}.webp`}
                    />
                  </Avatar>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                1,000+ learners already joined
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="grid w-full place-items-center">
          <Image
            src="https://media.tenor.com/vEnId7DFFDUAAAAM/regular-show-rigby.gif"
            alt="Students Learning"
            width={1024}
            height={480}
            className="
    mt-14
    ml-auto
    block 
    rounded-xl 
    shadow-xl 
    w-full 
    max-w-5xl 
    max-h-[480px]
    object-cover 
    transition-all 
    duration-500 
    hover:scale-[1.02]
  "
          />
        </div>
      </div>
    </section>
  );
}
