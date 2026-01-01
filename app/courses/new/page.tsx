"use client"

import { CourseCard } from "@/components/ui/course-card"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Calendar } from "lucide-react"
import { coursesData } from "@/data/courses"

export default function NewCoursesPage() {
  const newCourses = coursesData.filter(course => course.isNew)
  const upcomingCourses = [
    {
      title: "Web3 Development",
      description: "Learn blockchain, smart contracts, and decentralized apps",
      launchDate: "Coming January 2026"
    },
    {
      title: "AR/VR Development",
      description: "Create augmented and virtual reality experiences",
      launchDate: "Coming February 2026"
    },
    {
      title: "Data Science Bootcamp",
      description: "Intensive data science and machine learning course",
      launchDate: "Coming March 2026"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="container relative px-4 py-20 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Fresh & Trending</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold">
              <span className="text-primary">New</span> & Upcoming Courses
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Be the first to experience our latest courses designed with current trends
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Newly Launched Courses */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="mb-2 text-3xl font-bold">
                Just Launched <span className="text-primary">({newCourses.length})</span>
              </h2>
              <p className="text-muted-foreground">
                Fresh courses added to our catalog
              </p>
            </div>
            <Button variant="outline">
              <Zap className="w-4 h-4 mr-2" />
              View All New
            </Button>
          </div>

          {newCourses.length === 0 ? (
            <div className="py-12 text-center border-2 border-dashed rounded-lg">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold">No new courses at the moment</h3>
              <p className="text-muted-foreground">Check back soon for new additions!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </section>

        {/* Upcoming Courses */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="mb-2 text-3xl font-bold">
                Coming <span className="text-primary">Soon</span>
              </h2>
              <p className="text-muted-foreground">
                Exciting new courses launching soon
              </p>
            </div>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Get Notified
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {upcomingCourses.map((course, index) => (
              <div key={index} className="p-6 transition-colors border-2 border-dashed rounded-lg hover:border-primary/50">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                    Coming Soon
                  </span>
                </div>
                <p className="mb-6 text-muted-foreground">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {course.launchDate}
                  </div>
                  <Button variant="outline">Notify Me</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Tech Section */}
        <section>
          <div className="p-8 bg-linear-to-r from-primary/5 to-primary/10 rounded-2xl">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="mb-8 lg:mb-0 lg:max-w-lg">
                <h2 className="mb-4 text-3xl font-bold">
                  Trending in <span className="text-primary">2026</span>
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Based on current industry demands and student interests, these courses are gaining massive popularity.
                </p>
                <div className="space-y-3">
                  {[
                    "AI & Machine Learning applications",
                    "IoT and Smart Home automation",
                    "Web3 and Blockchain development",
                    "Cybersecurity fundamentals",
                    "Data Analytics and Visualization"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute rounded-full -inset-4 bg-linear-to-r from-primary/20 to-transparent blur-xl" />
                <div className="relative p-8 bg-white shadow-xl dark:bg-gray-900 rounded-2xl">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🚀</div>
                    <h3 className="mb-2 text-2xl font-bold">Stay Ahead</h3>
                    <p className="mb-6 text-muted-foreground">
                      Be among the first to learn trending technologies
                    </p>
                    <Button className="w-full">Explore Trendy Courses</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}