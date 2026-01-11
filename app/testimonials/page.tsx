// app/testimonials/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  User,
  Award,
  GraduationCap,
  Target,
  Users,
  Filter,
  QuoteIcon,
  ExternalLink,
  MessageCircle,
  Heart,
  ThumbsUp,
  Camera,
} from "lucide-react";
import Image from "next/image";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

// Google Reviews Sample Data - Replace with actual Google Reviews API integration
const googleReviews = [
  {
    id: 1,
    name: "All Serious",
    rating: 5,
    date: "3 months ago",
    content:
      "My experience at Ufill Academy has been truly amazing! The staff are incredibly kind and supportive, creating a great learning environment. I enrolled in the AI and Robotics course, and it was both informative and enjoyable. I even received a certification upon completion, which I'm very proud of.",
    verified: true,
    location: "Tamil Nadu",
    role: "Student",
    helpful: 24,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjX4vMi6hg0wEYSAhMon7DgGZ5ResxIX90BPSShw643PVIItg6Y=w36-h36-p-rp-mo-br100",
    ImageAlt: "All Serious",
  },
  // {
  //   id: 2,
  //   name: "மகரந்தன் மா.வசந்த்குமார்",
  //   rating: 5,
  //   date: "3 month ago",
  //   content:
  //     "இளைய தலைமுறையினர் தங்களை மட்டும் மையமாகக் கொள்ளாமல், தங்களைச் சார்ந்திருப்பவர்களையும் கவனித்துக்கொள்கிறார்கள் என்பதை நிரூபிக்கும் ஒரு அற்புதமான முயற்சி இது. மாணவர்களுக்கான எதிர்கால நடவடிக்கைகள் தொடர்ந்து செழிக்கட்டும். யு ஃபில் அகாடமியின் வாழ்த்துக்கள்  .... U fill Academy - Yes U fill Definitely.... Your Growth and Activities in Stimulation. The initiative and leadership in teaching the next generation technical skills is commendable.",
  //   verified: true,
  //   location: "Tamil Nadu",
  //   role: "Parent",
  //   helpful: 18,
  //   image: "https://lh3.googleusercontent.com/a-/ALV-UjUPAC9dhshpULJJV6Xrvp_-jkjyDyMuI0r_WnxKghngwL6tu8yE=w36-h36-p-rp-mo-br100",
  //   ImageAlt: "Magarathan",
  // },
  {
    id: 2,
    name: "Nithish Rathinavel",
    rating: 5,
    date: "2 months ago",
    content:
      "This is very useful to us we learn many about python in this webinar thanks for take we us in your path",
    verified: true,
    location: "Tamil Nadu",
    role: "Student",
    helpful: 32,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjX4XAZi0GPQ4y_N2QbQZpOsJEJRcs0c-_43xZ_h-yTPL3Y9j4fV=w36-h36-p-rp-mo-br100",
    ImageAlt: "Nithish",
  },
  {
    id: 3,
    name: "Kalai Maran",
    rating: 4,
    date: "2 months ago",
    content:
      "U-Fill Academy provides clear teaching and useful guidance.I really gained confidence and improved my understanding here.",
    verified: true,
    location: "Tamil Nadu",
    role: "Student",
    helpful: 15,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVLYNcwykEymzIN6KZTsPigWXtysDIcX2ILt07dzYPPNNNbxl16=w36-h36-p-rp-mo-br100",
    ImageAlt: "Kalai Maran",
  },
  {
    id: 4,
    name: "Aishwaryasundarajan",
    rating: 5,
    date: "2 months ago",
    content:
      "This class is very use full for my own experience Thankyou for your free python webinar cls",
    verified: true,
    location: "Tamil Nadu",
    role: "Student",
    helpful: 42,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW06NsOXtsQoGADkOQbZca6NsMjOK9YXv1jbf3Rh2YEMHpcl8I=w36-h36-p-rp-mo-br100",
    ImageAlt: "Aishwarya Sundarajan",
  },
  {
    id: 5,
    name: "Mercy Sangeetha",
    rating: 5,
    date: "3 months ago",
    content:
      "A great place to learn AI, IoT, and robotics with practical, student-friendly training",
    verified: true,
    location: "Tamil Nadu",
    role: "AI & IOT Student",
    helpful: 28,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjU89FhrZSvYJddJ0Wl9WHLi8qnNc8Uxjh1C7iAPyIcCzfxw-70=w36-h36-p-rp-mo-br100",
    ImageAlt: "Mercy Sangeetha",
  },
  {
    id: 6,
    name: "Durga Parthipan",
    rating: 5,
    date: "3 months ago",
    content: "Good Teaching, I observe the basic think for AI&IoT",
    verified: true,
    location: "Tamil Nadu",
    role: "AI & IOT Student",
    helpful: 28,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUcPAJwoXKeNlw2gtZkCEEaY5Yp2kXD01RRn7tlpAyVX1G8l5Kb=w36-h36-p-rp-mo-br100",
    ImageAlt: "Durga Parthipan",
  },
];

const reviewCategories = [
  {
    id: "all",
    label: "All Reviews",
    icon: MessageCircle,
    count: googleReviews.length,
  },
  {
    id: "5star",
    label: "5 Star Reviews",
    icon: Star,
    count: googleReviews.filter((r) => r.rating === 5).length,
  },
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    count: googleReviews.filter((r) => r.role.toLowerCase().includes("student"))
      .length,
  },
  {
    id: "parents",
    label: "Parents",
    icon: User,
    count: googleReviews.filter((r) => r.role.toLowerCase().includes("parent"))
      .length,
  },
  {
    id: "recent",
    label: "Recent",
    icon: Award,
    count: googleReviews.filter(
      (r) => r.date.includes("week") || r.date.includes("days")
    ).length,
  },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredReviews =
    activeCategory === "all"
      ? googleReviews
      : activeCategory === "5star"
      ? googleReviews.filter((r) => r.rating === 5)
      : activeCategory === "students"
      ? googleReviews.filter((r) => r.role.toLowerCase().includes("student"))
      : activeCategory === "parents"
      ? googleReviews.filter((r) => r.role.toLowerCase().includes("parent"))
      : activeCategory === "recent"
      ? googleReviews.filter(
          (r) => r.date.includes("week") || r.date.includes("days")
        )
      : googleReviews;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredReviews.length - 1 : prevIndex - 1
    );
  };

  const averageRating = (
    googleReviews.reduce((acc, review) => acc + review.rating, 0) /
    googleReviews.length
  ).toFixed(1);

  // Fallback to initials if image is not available
  const UserAvatar = ({ review }: { review: any }) => {
    if (review.image) {
      return (
        <div className="relative w-12 h-12">
          <Image
            src={review.image}
            alt={review.imageAlt || review.name}
            fill
            className="object-cover rounded-full"
            sizes="48px"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      );
    }

    // Fallback to colored initials
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-orange-500",
      "bg-teal-500",
    ];
    const color = colors[review.id % colors.length];

    return (
      <div
        className={`flex items-center justify-center w-12 h-12 text-white rounded-full ${color}`}
      >
        <span className="font-semibold">{review.name.charAt(0)}</span>
      </div>
    );
  };

  // Mobile Avatar component
  const MobileUserAvatar = ({ review }: { review: any }) => {
    if (review.image) {
      return (
        <div className="relative w-10 h-10">
          <Image
            src={review.image}
            alt={review.imageAlt || review.name}
            fill
            className="object-cover rounded-full"
            sizes="40px"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      );
    }

    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    const color = colors[review.id % colors.length];

    return (
      <div
        className={`flex items-center justify-center w-10 h-10 text-white rounded-full ${color}`}
      >
        <span className="text-sm font-semibold">{review.name.charAt(0)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>

      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto mt-20 text-center">
        <h2 className="mb-6 font-serif text-5xl tracking-tighter md:text-7xl">
          <QuoteIcon className="inline-block w-8 h-8 mr-3 -mt-20 text-primary/70" />
          Stories That <span className="text-primary">Inspiring</span> Us
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-muted-foreground">
          Read what our students, parents, and volunteers are saying about their
          experience with U Fill Academy.
        </p>

        {/* Google Reviews Summary */}
        <div className="max-w-2xl p-6 mx-auto mb-12 border rounded-2xl bg-card border-border">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center gap-2 mb-2 md:justify-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(Number(averageRating))
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">
                  {averageRating}
                </span>
                <span className="text-muted-foreground">out of 5</span>
              </div>
              <p className="text-muted-foreground">
                Based on {googleReviews.length} Google reviews
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="default"
                className="gap-2"
                onClick={() =>
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLSf2mr-zHnoXuCooguJWy2UW9aXRyjbYWWGsiDrJcxn8ooQlVw/viewform?usp=sharing&ouid=107661290545000572073", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4" />
                Write a Review
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/xcMM39kadpTSPCwE7",
                    "_blank"
                  )
                }
              >
                <ExternalLink className="w-4 h-4" />
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Category Filter */}
        {/* <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground">
              Filter Reviews
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {reviewCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="relative"
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentIndex(0);
                }}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
                <span className="absolute px-2 py-1 text-xs text-white rounded-full -top-2 -right-2 bg-primary">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div> */}

        {/* Google Reviews Grid */}
        <div className="flex justify-center mb-12 md:block">
          <div className="grid auto-rows-[1fr] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="relative p-6 transition-all duration-300 border rounded-2xl bg-card border-border group hover:shadow-xl"
              >
                {/* Google Verified Badge */}
                {review.verified && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-2 py-1 text-xs text-green-600 bg-green-100 rounded-full">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>Verified</span>
                    </span>
                  </div>
                )}

                {/* Review Header */}
                <div className="flex items-center gap-4 mb-4">
                  <UserAvatar review={review} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <p className="mb-4 text-sm text-foreground">
                  "{review.content}"
                </p>

                {/* Review Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {review.role}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {review.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 p-1 text-xs text-muted-foreground hover:text-primary">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{review.helpful} helpful</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel for Mobile */}
        <div className="mb-20 md:hidden">
          <div className="relative p-6 overflow-hidden border rounded-2xl bg-card border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                Latest Reviews
              </h3>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" onClick={prevSlide}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={nextSlide}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredReviews.map((review) => (
                  <div key={review.id} className="w-full shrink-0">
                    <div className="px-4">
                      <div className="flex items-center gap-3 mb-4">
                        <MobileUserAvatar review={review} />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {review.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="mb-4 text-sm text-foreground">
                        "{review.content}"
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {review.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {filteredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - Leave a Review */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
            {/* Pattern Background */}
            <div className="absolute inset-0">
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="review-pattern"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="20"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#review-pattern)" />
              </svg>
            </div>

            <div className="relative px-8 py-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white rounded-full">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white">
                Share Your Photo & Review
              </h3>
              <p className="max-w-2xl mx-auto mb-8 text-white/90">
                Upload your photo along with your review to help others connect
                with your success story.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    window.open("https://docs.google.com/forms/d/e/1FAIpQLSf2mr-zHnoXuCooguJWy2UW9aXRyjbYWWGsiDrJcxn8ooQlVw/viewform", "_blank")
                  }
                  className="gap-2"
                >
                  <Star className="w-4 h-4" />
                  Write a Google Review
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="gap-2 text-white border-white hover:bg-white/10"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/xcMM39kadpTSPCwE7",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Review Statistics */}
        {/* <div className="mt-20">
          <h3 className="mb-8 text-3xl font-bold text-center text-foreground">
            Review Insights
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">
                {averageRating}
              </div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">
                {googleReviews.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </div>
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">
                {googleReviews.filter((r) => r.rating === 5).length}
              </div>
              <div className="text-sm text-muted-foreground">
                5 Star Reviews
              </div>
            </div>
            <div className="p-6 text-center border rounded-2xl bg-card border-border">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">With Photos</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
