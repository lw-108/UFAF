import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, TrendingUp, Sparkles } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  category: string
  duration: string
  students: number
  rating: number
  isNew?: boolean
  isPopular?: boolean
  price?: string
  image: string
}

export function CourseCard({
  title,
  description,
  category,
  duration,
  students,
  rating,
  isNew = false,
  isPopular = false,
  price = "₹2,999",
  image,
}: CourseCardProps) {
  return (
    <Card className="relative overflow-hidden transition-all border-2 group hover:border-primary/50 hover:shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* LEFT — Course Details */}
        <div className="flex flex-col justify-between">
          <CardHeader className="pb-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-xl">{title}</CardTitle>

                {isNew && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Sparkles className="w-3 h-3 mr-1" />
                    New
                  </Badge>
                )}

                {isPopular && (
                  <Badge variant="secondary" className="text-orange-500 bg-orange-500/10">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>

              <Badge variant="outline" className="w-fit text-xs">
                {category}
              </Badge>
            </div>

            <CardDescription className="pt-2 line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{students}+ students</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span>{rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 mt-4">
              <span className="text-2xl font-bold">{price}</span>
              <Button className="bg-primary  hover:bg-primary/90">
                Enroll Now
              </Button>
            </div>
          </CardContent>
        </div>

        {/* RIGHT — Image */}
        <div className="relative hidden md:block w-50 h-50">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover p-4 transition-transform duration-300 group-hover:scale-105 rounded-3xl"
          />
          <div className="absolute inset-0 bg-linear-to-l from-black/10 to-transparent rounded-r-xl" />
        </div>

      </div>
    </Card>
  )
}
