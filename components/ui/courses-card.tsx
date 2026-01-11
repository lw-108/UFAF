"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  description: string;
  tags: string[];
  weeks: string;
  students: number;
  rating: number;
  price: string;
  instructor: string;
  isNew: boolean;
  image: string;
  viewMode?: "grid" | "list";
}

export function CourseCard({
  title,
  description,
  tags,
  weeks,
  students,
  rating,
  price,
  instructor,
  isNew,
  image,
  viewMode = "grid",
}: CourseCardProps) {
  const isGridView = viewMode === "grid";

  if (!isGridView) {
    return (
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Image Section for List View */}
          <div className="relative flex-shrink-0 w-full h-64 md:w-64 md:h-auto">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
            {/* Tags overlay */}
            <div className="absolute top-3 left-3">
              <div className="flex flex-wrap gap-2">
                {isNew && (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    New
                  </Badge>
                )}
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <p className="mb-3 text-muted-foreground">{instructor}</p>
                <p className="mb-6 text-gray-600">{description}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{weeks}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{students.toLocaleString()}+ students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="text-3xl font-bold text-primary">{price}</div>
                  <Button className="gap-2">
                    <Mail className="w-4 h-4" />
                    Email Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Grid View
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl group">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Tags overlay */}
        <div className="absolute top-3 left-3">
          <div className="flex flex-wrap gap-2">
            {isNew && (
              <Badge className="bg-green-600 hover:bg-green-700">
                New
              </Badge>
            )}
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <CardContent className="flex-1 p-6">
        <h3 className="mb-2 text-xl font-bold truncate">{title}</h3>
        <p className="mb-3 text-sm text-muted-foreground">{instructor}</p>
        <p className="mb-4 text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{weeks}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{students.toLocaleString()}+</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex flex-col items-start justify-between w-full gap-4 sm:flex-row sm:items-center">
          <div className="text-2xl font-bold text-primary">{price}</div>
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            Email Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}