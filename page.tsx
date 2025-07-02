import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 font-semibold">
            <GraduationCap className="h-6 w-6" />
            <span>SRM</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/courses" className="text-sm hover:text-primary">
              Courses
            </Link>
            <Link href="/about" className="text-sm hover:text-primary">
              About Us
            </Link>
            <Link href="/login" className="text-sm hover:text-primary">
              Login/Register
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to SRM LEARN</h1>
          <p className="text-muted-foreground mb-8">Empower your learning journey with our diverse courses.</p>
          <Button>Explore Courses</Button>
        </section>

        {/* Featured Courses */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2023.39.30_9343a10c.jpg-QkReS4afCn6xCDux2m6Yp0JgM6T4k6.jpeg"
                  alt="Full Stack Development"
                  width={400}
                  height={250}
                  className="object-cover h-48 w-full"
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl mb-2">Full Stack Development</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Learn to build robust applications with our comprehensive full stack course.
                </p>
              </CardHeader>
            </Card>

            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2023.39.30_9343a10c.jpg-QkReS4afCn6xCDux2m6Yp0JgM6T4k6.jpeg"
                  alt="Leadership & Management"
                  width={400}
                  height={250}
                  className="object-cover h-48 w-full"
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl mb-2">Leadership & Management</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Enhance your leadership skills with our expert-led courses.
                </p>
              </CardHeader>
            </Card>

            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-06%20at%2023.39.30_9343a10c.jpg-QkReS4afCn6xCDux2m6Yp0JgM6T4k6.jpeg"
                  alt="Creative Design"
                  width={400}
                  height={250}
                  className="object-cover h-48 w-full"
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl mb-2">Creative Design</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Unleash your creativity with our hands-on design courses.
                </p>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="space-y-2">
              <h3 className="font-semibold">Contact Us</h3>
              <p className="text-sm text-muted-foreground">Email: support@srmlearn.com</p>
              <p className="text-sm text-muted-foreground">Phone: +1 234 567 890</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

