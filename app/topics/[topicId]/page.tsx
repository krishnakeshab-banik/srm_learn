"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export default function TopicContent({ params }: { params: { topicId: string } }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("bubble-sort-algorithm")
  const [activeSort, setActiveSort] = useState("bubble")

  const sortTypes = [
    { id: "bubble", title: "Bubble Sort" },
    { id: "merge", title: "Merge Sort" },
    { id: "quick", title: "Quick Sort" },
    { id: "heap", title: "Heap Sort" },
  ]

  const sections = {
    bubble: [
      { id: "bubble-sort-algorithm", title: "Bubble Sort Algorithm" },
      { id: "algorithm", title: "Algorithm" },
      { id: "working-bubble-sort", title: "Working of Bubble Sort" },
      { id: "bubble-sort-complexity", title: "Bubble Sort Complexity" },
      { id: "optimized-bubble-sort", title: "Optimized Bubble Sort Algorithm" },
    ],
    merge: [
      { id: "merge-sort-algorithm", title: "Merge Sort Algorithm" },
      { id: "algorithm", title: "Algorithm" },
      { id: "working-merge-sort", title: "Working of Merge Sort" },
      { id: "optimized-merge-sort", title: "Optimized Merge Sort Algorithm" },
    ],
    quick: [
      { id: "quick-sort-algorithm", title: "Quick Sort Algorithm" },
      { id: "algorithm", title: "Algorithm" },
      { id: "working-quick-sort", title: "Working of Quick Sort" },
      { id: "optimized-quick-sort", title: "Optimized Quick Sort Algorithm" },
    ],
    heap: [
      { id: "heap-sort-algorithm", title: "Heap Sort Algorithm" },
      { id: "algorithm", title: "Algorithm" },
      { id: "working-heap-sort", title: "Working of Heap Sort" },
      { id: "optimized-heap-sort", title: "Optimized Heap Sort Algorithm" },
    ],
  }

  // Existing bubble sort content
  const content = {
    "bubble-sort-algorithm": {
      title: "Bubble Sort Algorithm",
      content: (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Bubble Sort Algorithm: An Overview</h3>
            <p className="mb-4">
              Bubble Sort is one of the simplest sorting algorithms. It repeatedly swaps adjacent elements until the
              entire list is sorted. This algorithm is often introduced to students as it frequently appears in exams.
            </p>

            <h4 className="font-semibold mt-6 mb-2">How Bubble Sort Works</h4>
            <p className="mb-4">
              Bubble Sort works by repeatedly comparing and swapping adjacent elements if they are in the wrong order.
              This process continues until the array is fully sorted. The name comes from the way larger elements
              "bubble" to the top, similar to air bubbles rising in water.
            </p>

            <h4 className="font-semibold mt-6 mb-2">Performance and Usage</h4>
            <p className="mb-4">
              Although easy to understand and implement, Bubble Sort is inefficient for large datasets. Its average and
              worst-case time complexity is O(n²), making it impractical for large-scale applications.
            </p>

            <h4 className="font-semibold mt-6 mb-2">When to Use Bubble Sort?</h4>
            <ul className="list-disc pl-6 mb-6">
              <li>When performance is not a concern.</li>
              <li>When a simple and easy-to-understand algorithm is needed</li>
            </ul>

            <div className="space-y-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-gcFpIKiPquu92glGoy6PnAss9aQGS2.png"
                alt="Data Types Hierarchy"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture2-5pQ10SLkYVgZzLRVqqvfPflx2gLey3.png"
                alt="Employee Data Structure"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>
        </>
      ),
    },
    algorithm: {
      title: "Algorithm",
      content: (
        <section className="mb-8">
          <p className="mb-4">
            In the algorithm given below, suppose arr is an array of n elements. The assumed swap function in the
            algorithm will swap the values of given array elements.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre">
            {`begin BubbleSort(arr)   
   for all array elements   
      if arr[i] > arr[i+1]   
         swap(arr[i], arr[i+1])   
      end if   
   end for      
   return arr      
end BubbleSort`}
          </div>
        </section>
      ),
    },
    "bubble-sort-complexity": {
      title: "Bubble Sort Complexity",
      content: (
        <section className="mb-8">
          <p className="mb-4">
            Now, let's see the time complexity of bubble sort in the best case, average case, and worst case. We will
            also see the space complexity of bubble sort.
          </p>

          <h4 className="font-semibold mt-6 mb-2">1. Time Complexity</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Case</th>
                  <th className="border border-gray-300 px-4 py-2">Time Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Best Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Average Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n²)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Worst Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n²)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Best Case Complexity</strong> - It occurs when there is no sorting required, i.e. the array is
              already sorted. The best-case time complexity of bubble sort is O(n).
            </li>
            <li>
              <strong>Average Case Complexity</strong> - It occurs when the array elements are in jumbled order that is
              not properly ascending and not properly descending. The average case time complexity of bubble sort is
              O(n²).
            </li>
            <li>
              <strong>Worst Case Complexity</strong> - It occurs when the array elements are required to be sorted in
              reverse order. That means suppose you have to sort the array elements in ascending order, but its elements
              are in descending order. The worst-case time complexity of bubble sort is O(n²).
            </li>
          </ul>

          <h4 className="font-semibold mt-6 mb-2">2. Space Complexity</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Space Complexity</th>
                  <th className="border border-gray-300 px-4 py-2">O(1)</th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Stable</th>
                  <th className="border border-gray-300 px-4 py-2">YES</th>
                </tr>
              </thead>
            </table>
          </div>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              The space complexity of bubble sort is O(1). It is because, in bubble sort, an extra variable is required
              for swapping.
            </li>
            <li>
              The space complexity of optimized bubble sort is O(2). It is because two extra variables are required in
              optimized bubble sort.
            </li>
          </ul>
        </section>
      ),
    },
    "optimized-bubble-sort": {
      title: "Optimized Bubble Sort Algorithm",
      content: (
        <section className="mb-8">
          <p className="mb-4">
            The optimized Bubble Sort improves efficiency by reducing unnecessary comparisons once the array is already
            sorted. It introduces a swapped flag that tracks whether any swaps occurred in an iteration. If no swaps are
            made, the algorithm terminates early, avoiding redundant iterations.
          </p>

          <h4 className="font-semibold mt-6 mb-2">Optimized Bubble Sort Algorithm (Pseudocode)</h4>
          <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6">
            {`bubbleSort(array)   
  n = length(array)   
  repeat   
    swapped = false   
    for i = 1 to n - 1   
      if array[i - 1] > array[i] then   
        swap(array[i - 1], array[i])   
        swapped = true   
      end if   
    end for   
    n = n - 1  // Reduce the range of comparison as the last elements are sorted 
  until not swapped   
end bubbleSort`}
          </div>

          <h4 className="font-semibold mt-6 mb-2">Key Optimizations:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Early Termination: If no swaps occur in an iteration, the array is already sorted, preventing unnecessary
              passes.
            </li>
            <li>
              Reduced Comparisons: With each pass, the largest element moves to its correct position, so the next pass
              ignores already sorted elements.
            </li>
          </ol>

          <p className="mt-4">
            This makes Bubble Sort slightly more efficient but still O(n²) in the worst case. It remains useful for
            small datasets or educational purposes.
          </p>
        </section>
      ),
    },
  }

  // Placeholder content for other sorting algorithms
  const mergeSortContent = {
    "merge-sort-algorithm": {
      title: "Merge Sort Algorithm",
      content: <div>Content for Merge Sort will be added here.</div>,
    },
    // Add other merge sort sections...
  }

  const quickSortContent = {
    "quick-sort-algorithm": {
      title: "Quick Sort Algorithm",
      content: <div>Content for Quick Sort will be added here.</div>,
    },
    // Add other quick sort sections...
  }

  const heapSortContent = {
    "heap-sort-algorithm": {
      title: "Heap Sort Algorithm",
      content: <div>Content for Heap Sort will be added here.</div>,
    },
    // Add other heap sort sections...
  }

  // Get current sections based on active sort type
  const currentSections = sections[activeSort as keyof typeof sections]

  // Get current content based on active sort type
  const getCurrentContent = () => {
    switch (activeSort) {
      case "bubble":
        return content
      case "merge":
        return mergeSortContent
      case "quick":
        return quickSortContent
      case "heap":
        return heapSortContent
      default:
        return content
    }
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
          <h1 className="text-xl font-semibold">Data Structures</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        {/* Sort Type Navigation */}
        <div className="border-t">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto">
              {sortTypes.map((sort) => (
                <button
                  key={sort.id}
                  onClick={() => {
                    setActiveSort(sort.id)
                    setActiveSection(sections[sort.id as keyof typeof sections][0].id)
                  }}
                  className={cn(
                    "px-4 py-2 text-sm font-medium whitespace-nowrap",
                    activeSort === sort.id
                      ? "border-b-2 border-primary text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {sort.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-gray-50 border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-8rem)] mt-4",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <ScrollArea className="h-full py-6 px-4">
            <nav className="space-y-2">
              {currentSections.map((section) => (
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
        <main className="flex-1 py-6 md:pl-8 overflow-y-auto">
          <article className="prose prose-sm max-w-none">
            {getCurrentContent()[activeSection as keyof typeof content] && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  {getCurrentContent()[activeSection as keyof typeof content].title}
                </h2>
                {getCurrentContent()[activeSection as keyof typeof content].content}
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  )
}

