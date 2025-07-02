"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export default function DSTutorialContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "ds-algorithm", title: "DS Algorithm" },
  ]

    const content = {
    introduction: {
      title: "Introduction to Data Structures",
      content: (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">INTRODUCTION</h3>
            <p className="mb-4">
              A data structure is a specialized format for organizing, processing, retrieving, and storing data in a computer's memory. Data structures arrange data in a logical manner so that it can be used effectively, shared, and persisted. They not only store data values, but also maintain information about how those values relate to each other.
            </p>
            <p className="mb-4">
              Data structures give us the possibility to manage large amounts of data efficiently for uses such as large databases and internet indexing services.
            </p>
            <p className="mb-4">
              Data structures are essential ingredients in creating fast and powerful algorithms. They help in managing and organizing data, reduce complexity, and increase efficiency.
            </p>
            <p className="mb-4">
              In computer science, data structures are broadly categorized into two main types: primitive and abstract.
            </p>
            <ul className="mb-4 list-disc pl-5">
              <li><strong>Primitive Data Structures:</strong> These are the fundamental, built-in data types provided directly by a programming language. Examples include integers, floating-point numbers, characters, and Booleans.</li>
              <li><strong>Abstract Data Structures (ADS):</strong> These are more sophisticated data structures constructed using primitive data types. Common examples include arrays, linked lists, stacks, queues, trees, and graphs.</li>
            </ul>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-gcFpIKiPquu92glGoy6PnAss9aQGS2.png"
              alt="Data Structures Overview"
              width={800}
              height={400}
              className="rounded-lg shadow-md"
            />
            <p className="mt-4 mb-4">Let us consider an example where an employee name can be broken down into three sub-items: First, Middle, and Last. However, an ID assigned to an employee will generally be considered a single item.</p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture2-5pQ10SLkYVgZzLRVqqvfPflx2gLey3.png"
              alt="Employee Data Structure Example"
              width={800}
              height={400}
              className="rounded-lg shadow-md"
            />
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">Theory and Key Terminology</h3>
            <p className="mb-4">As we progress through this tutorial, we will encounter various theoretical concepts and technical terms essential for understanding data structures and algorithms.</p>
            <ul className="mb-4 list-disc pl-5">
              <li><strong>Algorithm:</strong> A step-by-step procedure or set of rules designed to solve a specific problem.</li>
              <li><strong>Data Structure:</strong> A structured way of organizing and storing data.</li>
              <li><strong>Time Complexity:</strong> A measure of how long an algorithm takes to execute.</li>
              <li><strong>Space Complexity:</strong> A measure of memory usage by an algorithm.</li>
              <li><strong>Big O Notation:</strong> Expresses an algorithm’s efficiency in worst-case scenarios.</li>
              <li><strong>Recursion:</strong> A function calling itself to solve a problem.</li>
              <li><strong>Divide and Conquer:</strong> Breaking a problem into smaller subproblems.</li>
              <li><strong>Brute Force:</strong> A straightforward problem-solving approach.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">Why Learn Data Structures?</h3>
            <p className="mb-4">Data Structures and Algorithms are fundamental to Computer Science. They enhance programming skills and efficiency.</p>
            <h4 className="text-lg font-semibold mb-2">Objectives of Data Structures</h4>
            <ul className="mb-4 list-disc pl-5">
              <li><strong>Correctness:</strong> Ensures accurate operation for all valid inputs.</li>
              <li><strong>Efficiency:</strong> Optimizes performance while minimizing resource usage.</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Key Features of Data Structures</h4>
            <ul className="mb-4 list-disc pl-5">
              <li><strong>Robustness:</strong> Ensures correct execution across platforms.</li>
              <li><strong>Adaptability:</strong> Supports long-term software evolution.</li>
              <li><strong>Reusability:</strong> Enables cost-effective software development.</li>
            </ul>
          </section>
        </>
      ),
    },
    "ds-algorithm": {
      title: "Data Structure Algorithms",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">What is an Algorithm?</h3>
          <p className="mb-4">
            An algorithm is a set of step-by-step instructions used to solve a problem or perform a task, especially in computing. It is not a complete program but a logical procedure that can be represented using flowcharts or pseudocode.
          </p>
          <h3 className="text-xl font-semibold mb-4 underline">Characteristics of an Algorithm</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Input – Accepts one or more inputs.</li>
            <li>Output – Produces at least one output.</li>
            <li>Unambiguity – Clearly defined, step-by-step instructions.</li>
            <li>Finiteness – Has a definite number of steps.</li>
            <li>Effectiveness – Each step contributes to solving the problem.</li>
            <li>Language Independence – Can be implemented in any programming language.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 underline">How an Algorithm Works</h3>
          <ol className="list-decimal pl-5 mb-4">
            <li>Problem Definition – Identify the problem to solve.</li>
            <li>Algorithm Design – Develop a structured step-by-step solution.</li>
            <li>Input Processing – Provide necessary inputs.</li>
            <li>Processing Unit – Executes algorithmic steps.</li>
            <li>Output Generation – Produces the desired result.</li>
          </ol>
          <h3 className="text-xl font-semibold mb-4 underline">Why Do We Need Algorithms?</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Scalability – Breaks large problems into manageable steps.</li>
            <li>Efficiency – Helps optimize computing performance.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 underline">Algorithm Analysis</h3>
          <p className="mb-4">
            The process of comparing algorithms rate of growth with respect to time and space complexity. The algorithm can be analyzed in two levels:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Priori Analysis:</strong> Theoretical analysis of an algorithm before implementation, independent of system architecture.</li>
            <li><strong>Posterior Analysis:</strong> Practical analysis after implementation, dependent on system architecture.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 underline">Algorithm Complexity</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Time Complexity – Measures execution time (denoted as Big O notation).</li>
            <li>Space Complexity – Measures memory usage, including input size and auxiliary space.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 underline">Searching Algorithms</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Linear Search – Searches sequentially through an array.</li>
            <li>Binary Search – Efficiently finds an element in a sorted array.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 underline">Sorting Algorithms</h3>
          <p className="mb-4">
            Sorting algorithms rearrange elements in ascending or descending order using comparison-based operations.
          </p>
        </section>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/courses/ds1/topics">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">DS Tutorial</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 flex">
        {/* Sidebar */}
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
                    "w-full px-4 py-2 text-sm rounded-md text-left",
                    activeSection === section.id ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
                  )}
                  onClick={() => {
                    setActiveSection(section.id)
                    setIsSidebarOpen(false)
                  }}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
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

