"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, Cog, Palette, Database, PenTool, TrendingUp, Star } from "lucide-react"
import { useState } from "react"

interface CategoryProps {
  onCategoryChange: (category: string) => void
}

export default function Categories({ onCategoryChange }: CategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState("Engineering")

  const categories = [
    { name: "Engineering", icon: Cog },
    { name: "Business", icon: Briefcase },
    { name: "Fine Arts", icon: Palette },
    { name: "Data Science", icon: Database },
    { name: "Graphic Design", icon: PenTool },
    { name: "Digital Marketing", icon: TrendingUp },
    { name: "Astronomy", icon: Star },
  ]

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          const isSelected = category.name === selectedCategory
          return (
            <Button
              key={category.name}
              variant="outline"
              className={`h-24 flex flex-col items-center justify-center gap-2 transition-opacity ${
                isSelected ? "opacity-100 border-primary" : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <Icon className="h-6 w-6" />
              <span>{category.name}</span>
            </Button>
          )
        })}
      </div>
    </section>
  )
}

