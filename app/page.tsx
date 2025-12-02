import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedCourses from "@/components/featured-courses"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section with Background */}
        <div
          className="relative bg-cover bg-center h-[600px]"
          style={{
            backgroundImage: `url('https://www.google.com/imgres?q=SRM%20University&imgurl=https%3A%2F%2Fbangaloreeducationservice.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fbangalore-education-services-photo-13.jpg&imgrefurl=https%3A%2F%2Fbangaloreeducationservice.com%2Fcolleges%2Fsrm-university%2F&docid=7P-xk5mxTAuJ1M&tbnid=lJ-CH7vq9SFZSM&vet=12ahUKEwjJ1fTp-56RAxW6zjgGHbJaEBgQM3oECBsQAA..i&w=700&h=300&hcb=2&ved=2ahUKEwjJ1fTp-56RAxW6zjgGHbJaEBgQM3oECBsQAA')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto h-full flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to SRM LEARN</h1>
              <p className="text-xl mb-8">Empower your learning journey with our diverse courses.</p>
              <Link href="/courses">
                <Button size="lg" variant="secondary">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Courses */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <FeaturedCourses isHomePage={true} />
        </section>
      </main>
    </div>
  )
}

