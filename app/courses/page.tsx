"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Categories from "@/components/categories"
import FeaturedCourses from "@/components/featured-courses"
import MyLearning from "@/components/my-learning"

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Engineering")

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <Categories onCategoryChange={setSelectedCategory} />
          <section>
            <h2 className="text-2xl font-semibold mb-6">Featured Courses</h2>
            <FeaturedCourses isHomePage={false} selectedCategory={selectedCategory} />
          </section>
          <MyLearning />
        </div>
      </main>
    </div>
  )
}

