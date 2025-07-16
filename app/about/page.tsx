"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, BookOpen, Rocket, Heart, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 flex flex-col">
      <header className="bg-gradient-to-r from-pink-500 to-yellow-400 py-16 text-white text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">About SRM LEARN</h1>
          <p className="text-lg md:text-2xl mb-6 animate-fade-in-up">
            Empowering students to achieve their dreams through world-class education, technology, and community.
          </p>
          <Button asChild size="lg" variant="secondary" className="animate-bounce">
            <Link href="#mission">
              Our Mission <Rocket className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
            alt="About Us"
            fill
            className="object-cover"
          />
        </div>
      </header>

      <main className="flex-1">
        {/* Mission Section */}
        <section id="mission" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10 animate-fade-in-down">Our Mission & Vision</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 animate-slide-in-left">
              <Image
                src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/01/srm-logo.svg.gzip"
                alt="SRM Logo"
                width={200}
                height={80}
                className="mb-6"
              />
              <p className="text-lg text-gray-700 mb-4">
                At <b>SRM LEARN</b>, our mission is to make high-quality education accessible, engaging, and effective for every learner. We believe in the power of technology and community to transform lives and careers.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Delivering world-class courses and resources</li>
                <li>Fostering a vibrant, supportive learning community</li>
                <li>Empowering students to achieve their academic and career goals</li>
              </ul>
              <Button asChild variant="outline" className="mt-2">
                <Link href="#team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-center animate-slide-in-right">
              <Image
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
                alt="Mission"
                width={400}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-to-r from-yellow-100 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down">Our Core Values</h2>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up">
                <Users className="h-10 w-10 text-pink-500 mb-2 animate-pulse" />
                <h4 className="font-semibold">Community</h4>
                <p className="text-xs text-gray-600 text-center">We grow together, support each other, and celebrate every success.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up delay-100">
                <Award className="h-10 w-10 text-yellow-500 mb-2 animate-pulse" />
                <h4 className="font-semibold">Excellence</h4>
                <p className="text-xs text-gray-600 text-center">We strive for the highest standards in everything we do.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up delay-200">
                <BookOpen className="h-10 w-10 text-green-500 mb-2 animate-pulse" />
                <h4 className="font-semibold">Lifelong Learning</h4>
                <p className="text-xs text-gray-600 text-center">We believe learning never stops and encourage curiosity.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up delay-300">
                <Heart className="h-10 w-10 text-red-500 mb-2 animate-pulse" />
                <h4 className="font-semibold">Passion</h4>
                <p className="text-xs text-gray-600 text-center">We are passionate about education and student success.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 animate-fade-in-up delay-400">
                <Star className="h-10 w-10 text-yellow-400 mb-2 animate-pulse" />
                <h4 className="font-semibold">Innovation</h4>
                <p className="text-xs text-gray-600 text-center">We embrace new ideas and technologies to enhance learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down">Meet Our Expert Faculty</h2>
          <p className="text-center text-gray-600 mb-12">Our dedicated team of professionals from CINTEL and EEE departments</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform animate-fade-in-up">
              <Image src="./images/srm-faculty-7.jpg" alt="Dr. A. Maheshwari" width={80} height={80} className="rounded-full mb-4" />
              <h4 className="font-semibold text-lg">Dr. A. Maheshwari</h4>
              <span className="text-sm text-blue-600 mb-2">Associate Professor</span>
              <span className="text-xs text-gray-500 mb-3">Department of CINTEL</span>
              <p className="text-xs text-gray-600 text-center">Specializes in Computer Intelligence, Data Structures, and Advanced Algorithms</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform animate-fade-in-up delay-100">
              <Image src="./images/30.jpg" alt="Dr. G. Sumathy" width={80} height={80} className="rounded-full mb-4" />
              <h4 className="font-semibold text-lg">Dr. G. Sumathy</h4>
              <span className="text-sm text-blue-600 mb-2">Associate Professor</span>
              <span className="text-xs text-gray-500 mb-3">Department of CINTEL</span>
              <p className="text-xs text-gray-600 text-center">Expert in Machine Learning, AI, and Computational Intelligence</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform animate-fade-in-up delay-200">
              <Image src="./images/DSC_4361-1.jpg" alt="Dr. K. Vijayalakshmi" width={80} height={80} className="rounded-full mb-4" />
              <h4 className="font-semibold text-lg">Dr. K. Vijayalakshmi</h4>
              <span className="text-sm text-green-600 mb-2">Assistant Professor</span>
              <span className="text-xs text-gray-500 mb-3">Department of CINTEL</span>
              <p className="text-xs text-gray-600 text-center">Focuses on Data Mining, Neural Networks, and Pattern Recognition</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform animate-fade-in-up delay-300">
              <Image src="./images/srm-faculty-8-1.jpg" alt="Dr. M. Karpagam" width={80} height={80} className="rounded-full mb-4" />
              <h4 className="font-semibold text-lg">Dr. M. Karpagam</h4>
              <span className="text-sm text-green-600 mb-2">Assistant Professor</span>
              <span className="text-xs text-gray-500 mb-3">Department of CINTEL</span>
              <p className="text-xs text-gray-600 text-center">Specializes in Software Engineering, Database Systems, and Web Technologies</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform animate-fade-in-up delay-400">
              <Image src="./images/WhatsApp-Image-2025-04-28-at-16.07.55.jpeg" alt="Dr. K. Saravanan" width={80} height={80} className="rounded-full mb-4" />
              <h4 className="font-semibold text-lg">Dr. K. Saravanan</h4>
              <span className="text-sm text-purple-600 mb-2">Associate Professor</span>
              <span className="text-xs text-gray-500 mb-3">Department of EEE</span>
              <p className="text-xs text-gray-600 text-center">Expert in Data Structures, Algorithms, and Electrical Engineering Systems</p>
            </div>
          </div>
          
          {/* Department Info */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Our Departments</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-blue-600">CINTEL</h4>
                <p className="text-sm text-gray-600 mb-2">Computer Intelligence & Engineering</p>
                <p className="text-xs text-gray-500">Our CINTEL department focuses on cutting-edge research in artificial intelligence, machine learning, data science, and intelligent systems. Faculty members are dedicated to advancing computational intelligence and preparing students for the digital future.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-purple-600">EEE</h4>
                <p className="text-sm text-gray-600 mb-2">Electrical & Electronics Engineering</p>
                <p className="text-xs text-gray-500">The EEE department combines traditional electrical engineering with modern computational methods. Our faculty bridges the gap between hardware and software, bringing unique perspectives to data structures and algorithmic thinking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-pink-100 to-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-down">Our Impact</h2>
            <div className="flex flex-wrap gap-8 justify-center text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 animate-fade-in-up">
                <div className="text-4xl font-bold text-pink-500 mb-2 animate-bounce">50,000+</div>
                <div className="text-gray-700 font-semibold">Students Empowered</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 animate-fade-in-up delay-100">
                <div className="text-4xl font-bold text-yellow-500 mb-2 animate-bounce">200+</div>
                <div className="text-gray-700 font-semibold">Expert Faculty</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 animate-fade-in-up delay-200">
                <div className="text-4xl font-bold text-green-500 mb-2 animate-bounce">1000+</div>
                <div className="text-gray-700 font-semibold">Courses & Resources</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 animate-fade-in-up delay-300">
                <div className="text-4xl font-bold text-indigo-500 mb-2 animate-bounce">99%</div>
                <div className="text-gray-700 font-semibold">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
