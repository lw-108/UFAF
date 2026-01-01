"use client"

import { useState } from "react"
import { CourseCard } from "@/components/ui/course-card"
import { CategoryFilter } from "@/components/ui/category-filter"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Grid3x3, List } from "lucide-react"
import { coursesData, categories } from "@/data/courses"
import { NavbarWithMegaMenu } from "@/components/NavbarWithMegaMenu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = activeCategory === "all" || course.category === activeCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.students - a.students
      case "rating":
        return b.rating - a.rating
      case "new":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
      case "price-low":
        return parseFloat(a.price.replace(/[^0-9]/g, '')) - parseFloat(b.price.replace(/[^0-9]/g, ''))
      case "price-high":
        return parseFloat(b.price.replace(/[^0-9]/g, '')) - parseFloat(a.price.replace(/[^0-9]/g, ''))
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 z-50 w-full mb-50">
        <NavbarWithMegaMenu />
      </div>
      {/* Hero Section */}
      <div className="relative py-20 mt-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold">
              Explore Our <span className="text-primary">Courses</span>
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Choose from a wide range of courses designed to empower your future
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses by name, category, or tags..."
                className="pl-12 text-lg border-2 rounded-full py-7"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute px-6 py-5 transform -translate-y-1/2 rounded-full right-2 top-1/2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        {/* Filters Section */}
        <div className="mb-10">
          <div className="flex flex-col items-start justify-between gap-6 mb-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold">
                {activeCategory === "all" ? "All Courses" : activeCategory}
                <span className="ml-2 text-primary">({filteredCourses.length})</span>
              </h2>
              <p className="text-muted-foreground">
                Browse through our comprehensive course catalog
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-45">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="new">New Courses</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex overflow-hidden border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid3x3 className="w-5 h-5" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories.slice(1)}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="py-20 text-center">
            <div className="mb-4 text-5xl">🔍</div>
            <h3 className="mb-2 text-2xl font-bold">No courses found</h3>
            <p className="mb-6 text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => { setSearchQuery(""); setActiveCategory("all") }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {sortedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        )}

        {/* Stats Section */}
        <div className="pt-12 mt-20 border-t">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="p-6 text-center rounded-lg bg-primary/5">
              <div className="mb-2 text-4xl font-bold text-primary">{coursesData.length}+</div>
              <div className="text-muted-foreground">Courses</div>
            </div>
            <div className="p-6 text-center rounded-lg bg-primary/5">
              <div className="mb-2 text-4xl font-bold text-primary">5000+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div className="p-6 text-center rounded-lg bg-primary/5">
              <div className="mb-2 text-4xl font-bold text-primary">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="p-6 text-center rounded-lg bg-primary/5">
              <div className="mb-2 text-4xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}