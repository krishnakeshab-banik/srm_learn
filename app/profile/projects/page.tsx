"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react"

export default function ProjectsPage() {
  // Mock data for projects
  const projects = [
    {
      id: "proj1",
      name: "Sorting Algorithm Visualizer",
      description:
        "Interactive web application to visualize different sorting algorithms including bubble sort, merge sort, quick sort, and heap sort.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/johndoe/sorting-visualizer",
      demoUrl: "#",
      date: "March 2023",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sorting-visualizer-thumbnail.png",
    },
    {
      id: "proj2",
      name: "Student Management System",
      description:
        "A comprehensive system for managing student data, academic records, attendance, and performance analytics.",
      technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
      githubUrl: "https://github.com/johndoe/student-management",
      demoUrl: "#",
      date: "January 2023",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student-management-thumbnail.png",
    },
    {
      id: "proj3",
      name: "Personal Portfolio Website",
      description:
        "Professional portfolio showcasing skills, projects, and achievements with a modern, responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      githubUrl: "https://github.com/johndoe/portfolio",
      demoUrl: "#",
      date: "December 2022",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-thumbnail.png",
    },
    {
      id: "proj4",
      name: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/johndoe/ecommerce",
      demoUrl: "#",
      date: "April 2023",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecommerce-thumbnail.png",
    },
    {
      id: "proj5",
      name: "Weather Forecast App",
      description:
        "Real-time weather application providing current conditions and forecasts based on user location or search.",
      technologies: ["React Native", "OpenWeather API", "Geolocation"],
      githubUrl: "https://github.com/johndoe/weather-app",
      demoUrl: "#",
      date: "February 2023",
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/weather-app-thumbnail.png",
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
          <h1 className="text-2xl font-bold mt-4">My Projects</h1>
          <p className="text-gray-500">View all your completed and ongoing projects.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={project.demoUrl}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl}>
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

