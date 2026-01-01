"use client"

import React, { useRef, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  PictureInPicture,
  Maximize,
  Loader,
  ExternalLink,
} from "lucide-react"

/* ---------------- VIDEO DATA - EASY TO UPDATE ----------------- */

// ⚡ EASY UPDATE: Just add/remove YouTube video IDs here
const videos = [
  {
    id: "ttglTcKgwF4",
    title: "U-Fill Academy Promo",
    poster: "/u-robo.png",
  },
  {
    id: "O-BdMhNGvQw",
    title: "U-Fill Academy Introduction",
    poster: "/u-robo.png",
  },
  // Add more videos here:
  // {
  //   id: "NEW_YOUTUBE_ID",
  //   title: "New Video Title",
  //   poster: "/u-robo.png",
  // },
]

/* ---------------- YOUTUBE VIDEO CARD WITH ALL CONTROLS ----------------- */

function YouTubeVideoCard({
  id,
  title,
  poster,
}: {
  id: string
  title: string
  poster: string
}) {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const playPause = () => {
    if (!playing) {
      // To "play" we need to reload iframe with autoplay=1
      const iframe = document.getElementById(`yt-${id}`) as HTMLIFrameElement
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&modestbranding=1&rel=0`
        setPlaying(true)
      }
    } else {
      // To "pause" we need to reload iframe without autoplay
      const iframe = document.getElementById(`yt-${id}`) as HTMLIFrameElement
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${id}?autoplay=0&mute=${muted ? 1 : 0}&controls=0&modestbranding=1&rel=0`
        setPlaying(false)
      }
    }
  }

  const toggleMute = () => {
    setMuted(!muted)
    // Update iframe with new mute setting
    const iframe = document.getElementById(`yt-${id}`) as HTMLIFrameElement
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=${playing ? 1 : 0}&mute=${!muted ? 0 : 1}&controls=0&modestbranding=1&rel=0`
    }
  }

  const enterPip = async () => {
    try {
      const iframe = iframeRef.current
      if (iframe && !document.pictureInPictureElement) {
        // For YouTube, we open in new tab as PIP workaround
        window.open(`https://www.youtube.com/embed/${id}`, '_blank', 'popup')
      }
    } catch {}
  }

  const enterFullscreen = async () => {
    try {
      const iframe = iframeRef.current
      if (iframe && iframe.requestFullscreen) {
        await iframe.requestFullscreen()
      } else {
        // Fallback to new tab
        window.open(`https://www.youtube.com/embed/${id}?autoplay=1`, '_blank')
      }
    } catch {}
  }

  const openYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank')
  }

  return (
    <div className="p-3 transition border rounded-xl bg-card hover:shadow-md">
      {/* Video Container */}
      <div className="relative overflow-hidden rounded-lg aspect-video bg-muted">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50">
            <span className="text-sm text-red-600">Video failed to load</span>
          </div>
        )}

        {/* YouTube Iframe */}
        <iframe
          id={`yt-${id}`}
          ref={iframeRef}
          className="object-cover w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => {
            setLoading(false)
            setVideoLoaded(true)
          }}
          onError={() => {
            setError(true)
            setLoading(false)
          }}
        />

        {/* Play/Pause Overlay */}
        {!loading && !error && videoLoaded && (
          <button
            onClick={playPause}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute inset-0 flex items-center justify-center transition opacity-0 bg-black/20 hover:opacity-100"
          >
            <div className="p-3 rounded-full bg-black/50">
              {playing ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="text-white h-6 w-6 ml-0.5" />
              )}
            </div>
          </button>
        )}
      </div>

      {/* Controls - Same as before */}
      <div className="flex items-center justify-between mt-3">
        <h4 className="text-sm font-semibold truncate">{title}</h4>

        <div className="flex gap-1">
          <Button size="icon" variant="ghost" onClick={playPause}>
            {playing ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>

          <Button size="icon" variant="ghost" onClick={toggleMute}>
            {muted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </Button>

          <Button size="icon" variant="ghost" onClick={enterPip}>
            <PictureInPicture className="w-4 h-4" />
          </Button>

          <Button size="icon" variant="ghost" onClick={enterFullscreen}>
            <Maximize className="w-4 h-4" />
          </Button>

          <Button size="icon" variant="ghost" onClick={openYouTube}>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ---------------- SECTION - SAME LAYOUT AS BEFORE ----------------- */

export default function VideoCarouselSection() {
  // Responsive basis calculation
  const getBasisClass = () => {
    if (videos.length === 1) return "basis-full" // Single video
    if (videos.length === 2) return "md:basis-1/2" // Two videos
    if (videos.length === 3) return "md:basis-1/2 lg:basis-1/3" // Three videos
    return "md:basis-1/2 lg:basis-1/3" // Default for 4+ videos
  }

  return (
    <section
      id="videos"
      className="relative px-4 border-b border-dashed py-14 bg-background border-white/20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header - Same as before */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bowlby md:text-4xl lg:text-5xl">
            Campus Life
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Choose and watch any video you like — playback starts only when you
            click.
          </p>
        </div>

        {/* Carousel - Same layout as before */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={`${video.id}-${index}`}
                className={`pl-4 ${getBasisClass()}`}
              >
                <YouTubeVideoCard {...video} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static border" />
            <CarouselNext className="static border" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}