import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  price = "₹2,999"
}: CourseCardProps) {
  return (
    <Card className="relative overflow-hidden transition-all border-2 group hover:border-primary/50 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
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
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
        <CardDescription className="pt-2 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
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
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold">{price}</span>
          <Button className="bg-primary hover:bg-primary/90">
            Enroll Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}