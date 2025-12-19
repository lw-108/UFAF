import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const academicQuestions = [
  {
    q: "What curriculum does the institution follow?",
    a: "We follow a well-structured academic curriculum that blends foundational concepts with real-world application. Our program aligns with modern educational standards ensuring age-appropriate learning milestones.",
  },
  {
    q: "How are students assessed throughout the year?",
    a: "Assessment includes periodic evaluations, project-based work, skill-based testing, continuous observation, and term examinations to ensure holistic understanding.",
  },
  {
    q: "Are extracurricular activities a part of learning?",
    a: "Yes. Students participate in sports, arts, music, competitions, and hands-on learning experiences that support emotional, physical, and social development.",
  },
  {
    q: "Do teachers receive ongoing training?",
    a: "Our faculty undergo frequent professional development, ensuring teaching techniques are current, research-driven, and globally competitive.",
  },
  {
    q: "How does the institution support individual learning needs?",
    a: "We provide personalized learning guidance, academic support sessions, adaptive teaching methodologies, and mentoring programs.",
  },
  {
    q: "Is parental involvement encouraged?",
    a: "Absolutely. We frequently host parent-teacher meetings, workshops, and collaborative events to strengthen the academic partnership.",
  },
];

export const FrequentAskedQuestions = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* --- LEFT SIDE CONTENT --- */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Badge
              variant="outline"
              className="px-4 py-1 text-sm font-medium tracking-wide"
            >
              Academic FAQ
            </Badge>

            <h4 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-5xl md:leading-tight">
              Answers to the Most Common Academic Questions
            </h4>

            <p className="max-w-xl text-lg leading-relaxed text-left text-muted-foreground">
              {"Whether you're a parent, educator, or student — we’ve answered the most frequently asked academic and institutional questions to guide you through our educational experience."}
            </p>

            <Button className="gap-3 w-fit" variant="outline">
              Speak with our team <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* --- ACCORDION --- */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {academicQuestions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className={cn(
                "rounded-xl border border-border/50 px-4 transition-all duration-300",
                "hover:shadow-sm hover:border-foreground/30"
              )}
            >
              <AccordionTrigger className="py-4 text-lg font-medium leading-snug tracking-tight text-left">
                <div className="flex items-center gap-3">{item.q}</div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);
