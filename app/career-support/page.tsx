"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, UserCheck, BookOpen, MessageCircle, ArrowRight } from "lucide-react"

export default function CareerSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">Career Support at SRM LEARN</h1>
          <p className="text-lg md:text-2xl mb-6 animate-fade-in-up">
            Empowering your journey from classroom to career with expert guidance, resources, and opportunities.
          </p>
          <Button asChild size="lg" variant="secondary" className="animate-bounce">
            <Link href="#services">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Career Support"
            fill
            className="object-cover"
          />
        </div>
      </header>

      <main className="flex-1">
        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10 animate-fade-in-down">Our Career Support Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <Briefcase className="h-12 w-12 text-blue-600 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">Resume & LinkedIn Review</h3>
              <p className="text-gray-600 text-center mb-4">
                Get personalized feedback on your resume and LinkedIn profile from industry experts to stand out in the job market.
              </p>
              <Button variant="outline" asChild>
                <Link href="#book-session">Book a Session</Link>
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <UserCheck className="h-12 w-12 text-indigo-600 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">Mock Interviews</h3>
              <p className="text-gray-600 text-center mb-4">
                Practice technical and HR interviews with real professionals. Receive actionable feedback and boost your confidence.
              </p>
              <Button variant="outline" asChild>
                <Link href="#book-session">Schedule Mock Interview</Link>
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <BookOpen className="h-12 w-12 text-green-600 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">Career Guidance & Mentorship</h3>
              <p className="text-gray-600 text-center mb-4">
                Connect with mentors for guidance on career paths, higher studies, internships, and skill development.
              </p>
              <Button variant="outline" asChild>
                <Link href="#mentorship">Find a Mentor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Animated Timeline */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 animate-fade-in-down">Your Career Journey with Us</h2>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 flex flex-col items-center animate-slide-in-left">
                <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 shadow-lg animate-bounce">
                  1
                </div>
                <p className="font-semibold text-blue-700">Skill Building</p>
                <span className="text-gray-500 text-sm text-center">Master in-demand skills with our courses</span>
              </div>
              <div className="h-1 w-16 bg-blue-400 rounded-full hidden md:block animate-grow-x"></div>
              <div className="flex-1 flex flex-col items-center animate-slide-in-up">
                <div className="bg-indigo-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 shadow-lg animate-bounce">
                  2
                </div>
                <p className="font-semibold text-indigo-700">Resume & Interview Prep</p>
                <span className="text-gray-500 text-sm text-center">Get expert help to ace your applications</span>
              </div>
              <div className="h-1 w-16 bg-indigo-400 rounded-full hidden md:block animate-grow-x"></div>
              <div className="flex-1 flex flex-col items-center animate-slide-in-right">
                <div className="bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 shadow-lg animate-bounce">
                  3
                </div>
                <p className="font-semibold text-green-700">Land Your Dream Job</p>
                <span className="text-gray-500 text-sm text-center">Get placed with top companies and startups</span>
              </div>
            </div>
          </div>
        </section>

        {/* Book a Session */}
        <section id="book-session" className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down">Book a 1:1 Career Session</h2>
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2" required />
              <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2" required />
              <select className="w-full border rounded px-4 py-2" required>
                <option value="">Select Service</option>
                <option value="resume">Resume Review</option>
                <option value="mock">Mock Interview</option>
                <option value="mentorship">Mentorship</option>
              </select>
              <textarea placeholder="Tell us your goals..." className="w-full border rounded px-4 py-2" rows={3} />
              <Button className="w-full" type="submit">Book Now</Button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">We will contact you within 24 hours to confirm your session.</p>
          </div>
        </section>

        {/* Mentorship */}
        <section id="mentorship" className="bg-gradient-to-r from-blue-100 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down">Meet Our Mentors</h2>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up">
                <Image src="/mentor1.png" alt="Mentor 1" width={80} height={80} className="rounded-full mb-2" />
                <h4 className="font-semibold">Amit Sharma</h4>
                <span className="text-sm text-gray-500 mb-2">Software Engineer, Google</span>
                <p className="text-xs text-gray-600 text-center">DSA, System Design, Interview Prep</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up delay-100">
                <Image src="/mentor2.png" alt="Mentor 2" width={80} height={80} className="rounded-full mb-2" />
                <h4 className="font-semibold">Priya Verma</h4>
                <span className="text-sm text-gray-500 mb-2">SDE, Amazon</span>
                <p className="text-xs text-gray-600 text-center">Coding, Resume, Career Guidance</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up delay-200">
                <Image src="/mentor3.png" alt="Mentor 3" width={80} height={80} className="rounded-full mb-2" />
                <h4 className="font-semibold">Rahul Singh</h4>
                <span className="text-sm text-gray-500 mb-2">Data Scientist, Microsoft</span>
                <p className="text-xs text-gray-600 text-center">ML, Data Science, Higher Studies</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <details className="bg-white rounded-lg shadow p-4 animate-fade-in-up">
              <summary className="font-semibold cursor-pointer">How do I book a career support session?</summary>
              <p className="mt-2 text-gray-600">Fill out the form above and our team will reach out to you within 24 hours.</p>
            </details>
            <details className="bg-white rounded-lg shadow p-4 animate-fade-in-up">
              <summary className="font-semibold cursor-pointer">Are the sessions free?</summary>
              <p className="mt-2 text-gray-600">Yes, all career support services are free for SRM LEARN students.</p>
            </details>
            <details className="bg-white rounded-lg shadow p-4 animate-fade-in-up">
              <summary className="font-semibold cursor-pointer">Can I get help with off-campus placements?</summary>
              <p className="mt-2 text-gray-600">Absolutely! Our mentors can guide you for both on-campus and off-campus opportunities.</p>
            </details>
          </div>
        </section>
      </main>
    </div>
  )
}
