"use client"

import * as React from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Calendar, MapPin, ImageIcon, Camera, GraduationCap, Cpu, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

/* ---------------------------------------------
   IMAGE DATA (easy to manage)
--------------------------------------------- */

type GalleryImage = {
  src: string
  alt: string
  title: string
  description: string
  date: string
  venue: string
}

import type { ReactNode } from "react"

type GalleryTab = {
  label: string
  value: string
  icon: ReactNode
  images: GalleryImage[]
}


const GALLERY_TABS: GalleryTab[] = [
  {
    label: "Events",
    value: "events",
    icon: <Camera className="size-4" />,
    images: [
      {
        src: "/forest.png",
        alt: "Annual Day Celebration",
        title: "Annual Day Celebration",
        description: "A grand celebration showcasing student talents.",
        date: "12 Aug 2024",
        venue: "Main Auditorium",
      },
      {
        src: "/u-robo.png",
        alt: "Tech Expo",
        title: "Tech Expo 2024",
        description: "Innovative projects by engineering students.",
        date: "05 Sep 2024",
        venue: "Innovation Hall",
      },
    ],
  },
  {
    label: "Workshops",
    value: "workshops",
    icon: <Cpu className="size-4" />,
    images: [
      {
        src: "/forest.png",
        alt: "AI Workshop",
        title: "AI & Robotics Workshop",
        description: "Hands-on AI & robotics training.",
        date: "18 Jul 2024",
        venue: "Lab Block A",
      },
      {
        src: "/u-robo.png",
        alt: "Web Dev Bootcamp",
        title: "Web Dev Bootcamp",
        description: "Full-stack development crash course.",
        date: "22 Jul 2024",
        venue: "Computer Lab",
      },
    ],
  },
  {
    label: "Activities",
    value: "activities",
    icon: <Trophy className="size-4" />,
    images: [
      {
        src: "/forest.png",
        alt: "Tree Plantation",
        title: "Green Campus Drive",
        description: "Tree plantation & eco awareness.",
        date: "05 Jun 2024",
        venue: "Campus Ground",
      },
      {
        src: "/forest.png",
        alt: "Robotics Club",
        title: "Robotics Club Meetup",
        description: "Weekly innovation & learning session.",
        date: "Every Friday",
        venue: "Robotics Lab",
      },
       {
        src: "/forest.png",
        alt: "Robotics Club",
        title: "Robotics Club Meetup",
        description: "Weekly innovation & learning session.",
        date: "Every Friday",
        venue: "Robotics Lab",
      },
    ],
  },
]

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */

export default function GalleryWithTabs() {
  const [activeImage, setActiveImage] = React.useState<GalleryImage | null>(null)

  return (
    <section className="w-full py-24 border-dashed border-l-0 border-r-0 border-t-0 border-b border-white/20 rounded-4xl">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Campus Gallery
          </h2>
          <p className="text-muted-foreground">
            Explore our events, workshops, and student activities through moments
            captured across campus life.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="events" className="w-full">
          <TabsList className="mx-auto flex w-fit flex-wrap justify-center gap-2 mb-12">
          {GALLERY_TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="gap-2"
            >
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

          {GALLERY_TABS.map(tab => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mt-12"
            >
              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {tab.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative group break-inside-avoid cursor-pointer"
                    onClick={() => setActiveImage(image)}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div
                        className="
                          absolute inset-[5px]
                          rounded-lg
                          bg-primary/70
                          backdrop-blur-md
                          text-primary-foreground
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          flex flex-col justify-end
                          p-4
                        "
                      >
                        <h3 className="font-semibold text-lg">
                          {image.title}
                        </h3>

                        <p className="text-sm opacity-90 line-clamp-2">
                          {image.description}
                        </p>

                        <div className="mt-3 space-y-1 text-xs opacity-90">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {image.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {image.venue}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* ---------------------------------------------
          Focus Image Modal (NO CROP + ZOOM)
      --------------------------------------------- */}
      <Dialog open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
        <DialogContent className="max-w-6xl p-4 bg-black overflow-auto">
          <VisuallyHidden>
            <DialogTitle>Image preview</DialogTitle>
          </VisuallyHidden>

          {activeImage && (
            <div className="flex items-center justify-center max-h-[85vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1600}
                height={1200}
                priority
                className="
                  max-h-[85vh]
                  max-w-full
                  w-auto
                  h-auto
                  object-contain
                "
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
