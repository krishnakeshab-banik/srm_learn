"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Star } from "lucide-react"

interface FeaturedCoursesProps {
  isHomePage: boolean
  selectedCategory?: string
}

export default function FeaturedCourses({ isHomePage, selectedCategory }: FeaturedCoursesProps) {
  const courses = [
    {
      id: "ds1",
      title: "Data Structures - 1",
      faculty: {
        name: "Dr. K Sarvanan",
        profileUrl: "/faculty/k-sarvanan",
      },
      duration: "59m",
      rating: "4.7/5",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Data%20Structures-%201.jpg-nRfthDASY6KQwweVKq1NVHG9UpwZ4p.jpeg",
      description:
        "Master the fundamentals of Data Structures and Algorithms to build efficient and optimized solutions.",
      category: "Engineering",
    },
    {
      id: "c-programming",
      title: "C Programming",
      faculty: {
        name: "Prof. Anita Desai",
        profileUrl: "/faculty/anita-desai",
      },
      duration: "1h 30m",
      rating: "4.5/5",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20Programming-uLjMOI1BjkPoTIuwzttWVv4z47MslJ.png",
      description: "Learn the fundamentals of C programming language and build a strong foundation in coding.",
      category: "Engineering",
    },
    {
      id: "lm",
      title: "Leadership & Management",
      faculty: {
        name: "Dr. Priya Singh",
        profileUrl: "/faculty/priya-singh",
      },
      duration: "1h 17m",
      rating: "4.1/5",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leadership%20and%20management-IEmcsiJQeCqZqxnAOLN9W8wfkiDkrr.jpeg",
      description: "Enhance your leadership skills with our expert-led courses.",
      category: "Business",
    },
    {
      id: "cd",
      title: "Creative Design",
      faculty: {
        name: "Prof. Arun Verma",
        profileUrl: "/faculty/arun-verma",
      },
      duration: "45m",
      rating: "4.5/5",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Creative%20design-l1jATAGyMqq7bdmhldQ4N2sGYTPbCs.jpeg",
      description: "Unleash your creativity with our hands-on design courses.",
      category: "Fine Arts",
    },
  ]

  const filteredCourses = selectedCategory ? courses.filter((course) => course.category === selectedCategory) : courses

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {filteredCourses.map((course) => (
        <div key={course.id} className="relative flex flex-col h-full">
          <Card className="flex flex-col h-full">
            <div className="relative">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={400}
                height={250}
                className="object-cover h-48 w-full"
              />
            </div>
            <CardHeader className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Link href={course.faculty.profileUrl} className="text-sm text-primary hover:underline">
                  {course.faculty.name}
                </Link>
              </div>
              <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {course.rating}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{course.description}</p>
              <div className="mt-4">
                {isHomePage ? (
                  <Link href="/courses" className="w-full">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                ) : (
                  <Link href={`/courses/${course.id}`} className="w-full">
                    <Button className="w-full">Explore More</Button>
                  </Link>
                )}
              </div>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  )
}

