"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Download, ExternalLink, Github, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the profile
  const userData = {
    name: "Shaurya Kesarwani",
    email: "abcd@example.com",
    bio: "Software Engineering student passionate about web development and AI.",
    joinDate: "January 2023",
    courses: [
   
      {
        id: "c-programming",
        name: "C Programming",
        completionDate: "February 10, 2023",
        status: "Completed",
        progress: 100,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20Programming-uLjMOI1BjkPoTIuwzttWVv4z47MslJ.png",
      },
      {
        id: "lm",
        name: "Leadership & Management",
        completionDate: "April 22, 2023",
        status: "Completed",
        progress: 100,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leadership%20and%20management-IEmcsiJQeCqZqxnAOLN9W8wfkiDkrr.jpeg",
      },
    ],
    certificates: [
     
      {
        id: "cert2",
        name: "C Programming Expert",
        issueDate: "February 15, 2023",
        issuer: "SRM University",
        downloadUrl: "#",
      },
      {
        id: "cert3",
        name: "Leadership Excellence",
        issueDate: "April 25, 2023",
        issuer: "SRM University",
        downloadUrl: "#",
      },
    ],
    projects: [
      {
        id: "proj1",
        name: "Sorting Algorithm Visualizer",
        description: "Interactive web application to visualize different sorting algorithms.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/johndoe/sorting-visualizer",
        demoUrl: "#",
      },
      {
        id: "proj2",
        name: "Student Management System",
        description: "A comprehensive system for managing student data and academic records.",
        technologies: ["Next.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/johndoe/student-management",
        demoUrl: "#",
      },
      {
        id: "proj3",
        name: "Personal Portfolio Website",
        description: "Professional portfolio showcasing skills and projects.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/johndoe/portfolio",
        demoUrl: "#",
      },
    ],
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full border-4 border-gray-100 shadow-sm"
              />
              <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-sm hover:bg-primary/90 transition-colors">
                <Edit className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <p className="text-gray-500 mb-2">{userData.email}</p>
              <p className="text-gray-700 mb-4 max-w-2xl">{userData.bio}</p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="outline" className="bg-blue-50">
                  Member since {userData.joinDate}
                </Badge>
                <Badge variant="outline" className="bg-green-50">
                  {userData.courses.length} Courses Completed
                </Badge>
                <Badge variant="outline" className="bg-purple-50">
                  {userData.certificates.length} Certificates
                </Badge>
                <Badge variant="outline" className="bg-amber-50">
                  {userData.projects.length} Projects
                </Badge>
              </div>
            </div>

            <Button variant="outline" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Recent Courses */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Courses</h2>
                <Button variant="link" onClick={() => setActiveTab("courses")}>
                  View All
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {userData.courses.slice(0, 3).map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-green-500">{course.status}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>Completed on {course.completionDate}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Certificates */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Certificates</h2>
                <Button variant="link" onClick={() => setActiveTab("certificates")}>
                  View All
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {userData.certificates.slice(0, 3).map((certificate) => (
                  <Card key={certificate.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{certificate.name}</CardTitle>
                      <CardDescription>Issued on {certificate.issueDate}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={certificate.downloadUrl}>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Projects */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Projects</h2>
                <Button variant="link" onClick={() => setActiveTab("projects")}>
                  View All
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {userData.projects.slice(0, 3).map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.demoUrl}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <h2 className="text-2xl font-bold mb-6">Completed Courses</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {userData.courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500">{course.status}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>Completed on {course.completionDate}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/courses/${course.id}`}>View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates">
            <h2 className="text-2xl font-bold mb-6">My Certificates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {userData.certificates.map((certificate) => (
                <Card key={certificate.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{certificate.name}</CardTitle>
                    <CardDescription>Issued by {certificate.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">Issued on {certificate.issueDate}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={certificate.downloadUrl}>
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <h2 className="text-2xl font-bold mb-6">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {userData.projects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
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
          </TabsContent>
        </Tabs>

        {/* Logout Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="destructive"
            className="flex items-center gap-2 px-8 transition-all hover:bg-red-600"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

