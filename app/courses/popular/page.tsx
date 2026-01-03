"use client";

import { useState } from "react";
import { CourseCard } from "@/components/ui/course-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Users, Star, Award } from "lucide-react";
import { coursesData } from "@/data/courses";
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";

export default function PopularCoursesPage() {
  const [timeframe, setTimeframe] = useState<"all" | "monthly" | "weekly">(
    "all"
  );

  const popularCourses = coursesData.filter((course) => course.isPopular);
  const topRated = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  const mostEnrolled = [...coursesData]
    .sort((a, b) => b.students - a.students)
    .slice(0, 6);

  const trendingNow = [
    {
      id: 2,
      title: "AI & Robotics",
      trend: "🔥 95% increase",
      description: "Massive demand due to industry adoption",
    },
    {
      id: 16,
      title: "Yoga & Meditation",
      trend: "📈 80% increase",
      description: "Growing focus on mental wellness",
    },
    {
      id: 29,
      title: "Spoken English",
      trend: "🚀 75% increase",
      description: "Essential for global opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Hero Section */}
      <div className="relative mt-20 overflow-hidden bg-linear-to-b from-orange-500/5 to-background">
        <div className="container relative px-4 py-10 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-primary bg-blue-500/10">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">Most Popular</span>
            </div>
            <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-7xl">
              Top <span className="text-primary">Trending</span> Courses
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Join thousands of students learning what&apos;s trending right now
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12 md:grid-cols-4">
              <div className="p-4 text-center">
                <div className="mb-1 text-3xl font-bold text-primary">28+</div>
                <div className="text-sm text-muted-foreground">
                  Popular Courses
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-1 text-3xl font-bold text-primary">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Learners
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-1 text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-1 text-3xl font-bold text-primary">96%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 pb-20 mx-auto">
        {/* Timeframe Tabs */}
        <div className="mb-12">
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={(v: any) => setTimeframe(v)}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All Time Popular</TabsTrigger>
                <TabsTrigger value="monthly">This Month</TabsTrigger>
                <TabsTrigger value="weekly">This Week</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {popularCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="mt-0">
              <div className="py-12 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="mb-2 text-xl font-semibold">
                  Monthly trends coming soon
                </h3>
                <p className="text-muted-foreground">
                  We&apos;re working on showing monthly popularity trends
                </p>
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="mt-0">
              <div className="py-12 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="mb-2 text-xl font-semibold">
                  Weekly trends coming soon
                </h3>
                <p className="text-muted-foreground">
                  Check back for weekly trending courses
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Trending Now Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="mb-2 text-3xl font-bold">
                <span className="text-primary">Trending</span> Right Now
              </h2>
              <p className="text-muted-foreground">
                Courses experiencing rapid growth this season
              </p>
            </div>
            <Badge variant="outline" className="text-sm">
              <TrendingUp className="w-3 h-3 mr-2" />
              Real-time Trends
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trendingNow.map((item) => {
              const course = coursesData.find((c) => c.id === item.id);
              return (
                <div
                  key={item.id}
                  className="p-6 transition-all border rounded-lg hover:border-primary/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                      <Badge className="mb-2">{item.trend}</Badge>
                    </div>
                    {course && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-bold">{course.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    {item.description}
                  </p>
                  {course && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students}+ enrolled</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>{course.rating}★</span>
                        </div>
                      </div>
                      <Button size="sm">View Course</Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Top Rated & Most Enrolled */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Top Rated */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="flex items-center gap-2 mb-2 text-2xl font-bold">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  Highest Rated
                </h3>
                <p className="text-muted-foreground">
                  Courses with the best student reviews
                </p>
              </div>
              <Badge variant="secondary" className="text-sm">
                4.5+ Average
              </Badge>
            </div>

            <div className="space-y-4">
              {topRated.map((course, index) => (
                <div
                  key={course.id}
                  className="p-4 transition-colors border rounded-lg hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-muted-foreground">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {course.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-bold">{course.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {course.students} students
                        </div>
                      </div>
                      <Button size="sm">Enroll</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Most Enrolled */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="flex items-center gap-2 mb-2 text-2xl font-bold">
                  <Users className="w-6 h-6" />
                  Most Enrolled
                </h3>
                <p className="text-muted-foreground">
                  Courses chosen by most students
                </p>
              </div>
              <Badge variant="secondary" className="text-sm">
                1000+ Students
              </Badge>
            </div>

            <div className="space-y-4">
              {mostEnrolled.map((course, index) => (
                <div
                  key={course.id}
                  className="p-4 transition-colors border rounded-lg hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-muted-foreground">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {course.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold text-primary">
                          {course.students}+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          students enrolled
                        </div>
                      </div>
                      <Button size="sm">Join Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Recommendation */}
        <div className="p-8 mt-16 rounded-2xl bg-linear-to-r from-primary/5 to-primary/10">
          <div className="max-w-2xl mx-auto text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-4 text-2xl font-bold">Join Our Top Learners</h3>
            <p className="mb-6 text-muted-foreground">
              Don&apos;t miss out on what everyone is learning. Enroll in our
              most popular courses and be part of the success story.
            </p>
            <Button size="lg" className="px-8">
              Explore All Popular Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
