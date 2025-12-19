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
} from "lucide-react"

/* ---------------- VIDEO DATA ---------------- */

const videos = [
  {
    title: "Photon Rider",
    poster: "/photon-rider.png",
    src: "https://dcs99ww84zr4t.cloudfront.net/e8ogm7%2Ffile%2F3f9408862fdafd662c74dad88cb06663_f3237681fd48f3091b0b1db52e26c104.mp4",
  },
  {
    title: "Makerspace Demo",
    poster: "/forest.png",
    src: "https://pouch.jumpshare.com/preview/IdufuMHjiIa9aaqaWKgt0Xyw35Nkg_RoYZK711D4tL2OQDHhfhUj8qjFcU_EJiticvSQt3d8nBsOylqDDKkfqB5WlsrgoYW_m2vkbazPlo4eFRrCx8ZIeLIDtgfgpPL7rG57JKtV_DZ1xXraaSdPPW6yjbN-I2pg_cnoHs_AmgI.mp4",
  },
  {
    title: "Global Classroom",
    poster: "/u-robo.png",
    src: "https://pouch.jumpshare.com/preview/IdufuMHjiIa9aaqaWKgt0Xyw35Nkg_RoYZK711D4tL2OQDHhfhUj8qjFcU_EJiticvSQt3d8nBsOylqDDKkfqB5WlsrgoYW_m2vkbazPlo4eFRrCx8ZIeLIDtgfgpPL7rG57JKtV_DZ1xXraaSdPPW6yjbN-I2pg_cnoHs_AmgI.mp4",
  },
]

/* ---------------- SECTION ---------------- */

export default function VideoCarouselSection() {
  return (
    <section
      id="videos"
      className="relative px-4 border-b border-dashed py-14 bg-background border-white/20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bowlby md:text-4xl lg:text-5xl">
            Campus Life
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Choose and watch any video you like — playback starts only when you
            click.
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem
                key={video.title}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <VideoCard {...video} />
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

/* ---------------- VIDEO CARD ---------------- */

function VideoCard({
  title,
  poster,
  src,
}: {
  title: string
  poster: string
  src: string
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const playPause = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  const enterPip = async () => {
    try {
      if (videoRef.current && !document.pictureInPictureElement) {
        await videoRef.current.requestPictureInPicture()
      }
    } catch {}
  }

  const enterFullscreen = async () => {
    try {
      if (videoRef.current && !document.fullscreenElement) {
        await videoRef.current.requestFullscreen()
      }
    } catch {}
  }

  return (
    <div className="p-3 transition border rounded-xl bg-card hover:shadow-md">
      {/* Video */}
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

        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          muted={muted}
          playsInline
          preload="metadata"
          poster={poster}
          controls={false}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onLoadStart={() => setLoading(true)}
          onLoadedData={() => setLoading(false)}
          onError={() => {
            setError(true)
            setLoading(false)
          }}
        >
          <source src={src} type="video/mp4" />
        </video>

        {!loading && !error && (
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

      {/* Controls */}
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
        </div>
      </div>
    </div>
  )
}
