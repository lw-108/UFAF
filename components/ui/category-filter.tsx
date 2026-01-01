"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className={cn(
          activeCategory === "all" && "bg-primary text-primary-foreground"
        )}
      >
        All Courses
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={cn(
            activeCategory === category && "bg-primary text-primary-foreground"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}