import { GraduationCap } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Hero67() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center px-4 lg:px-0">
          {/* Heading */}
          <h1 className="text-4xl font-semibold tracking-tight lg:text-6xl">
            Empowering the Future Through Knowledge
          </h1>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed lg:text-lg">
            <strong className="font-medium text-foreground">
              U-Fill Academy
            </strong>{" "}
            {`is committed to shaping tomorrow's leaders. Fill your knowledge — fill your future with practical learning programs, expert instructors, and industry-ready skills.`}
          </p>

          {/* CTA */}
          <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row">
            <Button
              size="lg"
              className="shadow-md hover:scale-[1.03] transition-transform"
            >
              <GraduationCap className="mr-2 h-5" />
              Enroll & Start Learning
            </Button>

            {/* Avatar Group */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 6, 3, 4].map((num) => (
                  <Avatar key={num} className="size-9 border shadow-sm">
                    <AvatarImage
                      src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${num}.webp`}
                    />
                  </Avatar>
                ))}
              </div>
              <p className="text-muted-foreground text-xs">
                1,000+ learners already joined
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full grid place-items-center">
          <img
            src="https://media.tenor.com/vEnId7DFFDUAAAAM/regular-show-rigby.gif"
            alt="Students Learning"
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
