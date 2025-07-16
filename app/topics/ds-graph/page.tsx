"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, Code, BookText, FileCode2, BarChart2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import GraphIntroSection from "./sections/graph-intro"
import GraphTypesSection from "./sections/graph-types"
import GraphRepresentationSection from "./sections/graph-representation"
import GraphTraversalSection from "./sections/graph-traversal"
import GraphAlgorithmsSection from "./sections/graph-algorithms"
import GraphApplicationsSection from "./sections/graph-applications"
import GraphQuizSection from "./sections/graph-quiz"
import GraphPracticeSection from "./sections/graph-practice"
import GraphCommunitySection from "./sections/graph-community"

const sections = [
  { id: "introduction", title: "Introduction to Graphs", icon: <BookText className="h-4 w-4 mr-2" /> },
  { id: "types", title: "Types of Graphs", icon: <List className="h-4 w-4 mr-2" /> },
  { id: "representation", title: "Graph Representation", icon: <Code className="h-4 w-4 mr-2" /> },
  { id: "traversal", title: "Graph Traversal", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "algorithms", title: "Graph Algorithms", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "applications", title: "Applications", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "quiz", title: "Quiz", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
  { id: "practice", title: "Practice Questions", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "community", title: "Community Content", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
]

const content = {
  introduction: {
    title: "Introduction to Graphs",
    content: <GraphIntroSection />,
  },
  types: {
    title: "Types of Graphs",
    content: <GraphTypesSection />,
  },
  representation: {
    title: "Graph Representation",
    content: <GraphRepresentationSection />,
  },
  traversal: {
    title: "Graph Traversal",
    content: <GraphTraversalSection />,
  },
  algorithms: {
    title: "Graph Algorithms",
    content: <GraphAlgorithmsSection />,
  },
  applications: {
    title: "Applications of Graphs",
    content: <GraphApplicationsSection />,
  },
  quiz: {
    title: "Graph Quiz",
    content: <GraphQuizSection />,
  },
  practice: {
    title: "Practice Questions",
    content: <GraphPracticeSection />,
  },
  community: {
    title: "Community Content",
    content: <GraphCommunitySection />,
  },
}

export default function DSGraphContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/courses/ds1/topics">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">Graph Data Structure</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 flex">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-gray-50 border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-4rem)] mt-4",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <ScrollArea className="h-full py-6 px-4">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={cn(
                    "w-full px-4 py-2 text-sm rounded-md text-left flex items-center",
                    activeSection === section.id ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
                  )}
                  onClick={() => {
                    setActiveSection(section.id)
                    setIsSidebarOpen(false)
                  }}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        <main className="flex-1 py-6 md:pl-8">
          <article className="prose prose-sm max-w-none">
            {content[activeSection as keyof typeof content] && (
              <>
                <h2 className="text-2xl font-bold mb-6">{content[activeSection as keyof typeof content].title}</h2>
                {content[activeSection as keyof typeof content].content}
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  )
}
