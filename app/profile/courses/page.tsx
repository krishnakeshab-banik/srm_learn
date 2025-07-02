"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

export default function CoursesPage() {
  // Mock data for completed courses
  const completedCourses = [
    {
      id: "ds1",
      name: "Data Structures - 1",
      completionDate: "March 15, 2023",
      status: "Completed",
      progress: 100,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Data%20Structures-%201.jpg-nRfthDASY6KQwweVKq1NVHG9UpwZ4p.jpeg",
      instructor: "Dr. K Sarwanan",
      description:
        "Master the fundamentals of Data Structures and Algorithms to build efficient and optimized solutions.",
    },
    {
      id: "c-programming",
      name: "C Programming",
      completionDate: "February 10, 2023",
      status: "Completed",
      progress: 100,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20Programming-uLjMOI1BjkPoTIuwzttWVv4z47MslJ.png",
      instructor: "Prof. Anita Desai",
      description: "Learn the fundamentals of C programming language and build a strong foundation in coding.",
    },
    {
      id: "lm",
      name: "Leadership & Management",
      completionDate: "April 22, 2023",
      status: "Completed",
      progress: 100,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leadership%20and%20management-IEmcsiJQeCqZqxnAOLN9W8wfkiDkrr.jpeg",
      instructor: "Dr. Priya Singh",
      description: "Enhance your leadership skills with our expert-led courses.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/profile"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Link>
          <h1 className="text-2xl font-bold mt-4">Completed Courses</h1>
          <p className="text-gray-500">View all the courses you've successfully completed.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-green-500">{course.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>Instructor: {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-2">{course.description}</p>
                <p className="text-sm text-gray-500">Completed on {course.completionDate}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/courses/${course.id}`}>View Course</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/courses/${course.id}/certificate`}>View Certificate</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

