"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Menu, List, GitMerge, GitPullRequest, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import BubbleSortAnimation from "./bubble-sort-animation"
import MergeSortAnimation from "./merge-sort-animation"
import QuickSortAnimation from "./quick-sort-animation"
import HeapSortAnimation from "./heap-sort-animation"
// Add the quiz content for each sorting algorithm
// First, import the QuizComponent
import QuizComponent from "./quiz-component"

export default function DSSortingContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("bubble-sort-algorithm")
  const [activeSort, setActiveSort] = useState("bubble")

  const sortTypes = [
    { id: "bubble", title: "Bubble Sort", icon: <List className="h-4 w-4 mr-2" /> },
    { id: "merge", title: "Merge Sort", icon: <GitMerge className="h-4 w-4 mr-2" /> },
    { id: "quick", title: "Quick Sort", icon: <GitPullRequest className="h-4 w-4 mr-2" /> },
    { id: "heap", title: "Heap Sort", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
  ]

  // Update the sections object to include a "quiz" section for each sorting algorithm
  const sections = {
    bubble: [
      { id: "bubble-sort-algorithm", title: "Bubble Sort Algorithm" },
      { id: "working-bubble-sort", title: "Working of Bubble Sort" },
      { id: "bubble-sort-complexity", title: "Bubble Sort Complexity" },
      { id: "optimized-bubble-sort", title: "Optimized Bubble Sort Algorithm" },
      { id: "bubble-sort-quiz", title: "Quiz" },
    ],
    merge: [
      { id: "merge-sort-algorithm", title: "Merge Sort Algorithm" },
      { id: "working-merge-sort", title: "Working of Merge Sort" },
      { id: "merge-sort-complexity", title: "Merge Sort Complexity" },
      { id: "optimized-merge-sort", title: "Implementation of merge sort" },
      { id: "merge-sort-quiz", title: "Quiz" },
    ],
    quick: [
      { id: "quick-sort-algorithm", title: "Quick Sort Algorithm" },
      { id: "working-quick-sort", title: "Working of Quick Sort" },
      { id: "quick-sort-complexity", title: "Quick Sort Complexity" },
      { id: "optimized-quick-sort", title: "Optimized Quick Sort Algorithm" },
      { id: "quick-sort-quiz", title: "Quiz" },
    ],
    heap: [
      { id: "heap-sort-algorithm", title: "Heap Sort Algorithm" },
      { id: "working-heap-sort", title: "Working of Heap Sort" },
      { id: "heap-sort-complexity", title: "Heap Sort Complexity" },
      { id: "optimized-heap-sort", title: "Optimized Heap Sort Algorithm" },
      { id: "heap-sort-quiz", title: "Quiz" },
    ],
  }

  // Add to the content object (for Bubble Sort)
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

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
              <h4 className="font-semibold mb-4">Algorithm Implementation</h4>
              <p className="mb-4">
                In the algorithm given below, suppose arr is an array of n elements. The assumed swap function in the
                algorithm will swap the values of given array elements.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
                {`begin BubbleSort(arr)   
   for all array elements   
      if arr[i] > arr[i+1]   
         swap(arr[i], arr[i+1])   
      end if   
   end for      
   return arr      
end BubbleSort`}
              </div>
              <div className="aspect-video mb-2">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Jdtq5uKz-w4?si=npMOVEQMpaJmCjOB"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xs text-gray-500 text-center">Video explanation of Bubble Sort algorithm</p>
            </div>

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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image1-CTY6fGmT6ScBdWf8w4gLYhuHWEdgLD.png"
                alt="Bubble Sort Algorithm Visualization"
                width={800}
                height={400}
                className="rounded-lg shadow-md mb-6"
              />
            </div>
          </section>
        </>
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
    "working-bubble-sort": {
      title: "Working of Bubble Sort",
      content: (
        <section className="mb-8">
          <p className="mb-4">
            Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements and swapping them if
            they are in the wrong order. The pass through the list is repeated until no swaps are needed, which means
            the list is sorted.
          </p>

          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image1-CTY6fGmT6ScBdWf8w4gLYhuHWEdgLD.png"
            alt="Bubble Sort Steps Visualization"
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />

          <h4 className="font-semibold mt-6 mb-4">Interactive Visualization</h4>
          <p className="mb-4">
            Below is an interactive visualization of the Bubble Sort algorithm. Use the controls to start, pause, reset
            the animation, and adjust its speed.
          </p>

          <div className="my-8">
            <BubbleSortAnimation />
          </div>

          <h4 className="font-semibold mt-6 mb-2">How it Works:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              First Pass: Compare adjacent elements and swap them if they are in the wrong order. This brings the
              largest element to the end.
            </li>
            <li>
              Second Pass: Repeat the process, but now we can exclude the last element as it's already in position.
            </li>
            <li>Subsequent Passes: Continue this process, each time excluding the last sorted elements.</li>
            <li>
              Completion: The algorithm completes when no swaps are needed in a pass, indicating the array is sorted.
            </li>
          </ol>
        </section>
      ),
    },
    "bubble-sort-quiz": {
      title: "Bubble Sort Quiz",
      content: (
        <section className="mb-8">
          <QuizComponent
            title="Test your knowledge of Bubble Sort"
            questions={[
              {
                question: "What is the time complexity of Bubble Sort in the worst case?",
                options: ["O(log n)", "O(n)", "O(n^2)", "O(n log n)"],
                correctAnswer: 2,
              },
              {
                question: "Bubble Sort is also known as:",
                options: ["Selection Sort", "Insertion Sort", "Partition Sort", "Sinking Sort"],
                correctAnswer: 3,
              },
              {
                question: "In Bubble Sort, how many passes are required to sort an array of size 'n'?",
                options: ["n/2", "n-5", "n-1", "log n"],
                correctAnswer: 2,
              },
              {
                question: "Which sorting technique repeatedly swaps adjacent elements if they are in the wrong order?",
                options: ["Quick Sort", "Heap Sort", "Bubble Sort", "Merge Sort"],
                correctAnswer: 2,
              },
              {
                question: "Bubble Sort is:",
                options: [
                  "Stable and Adaptive",
                  "Stable but not Adaptive",
                  "Adaptive but not Stable",
                  "Neither Stable nor Adaptive",
                ],
                correctAnswer: 1,
              },
            ]}
          />
        </section>
      ),
    },
  }

  // Add to the mergeSortContent object
  const mergeSortContent = {
    "merge-sort-algorithm": {
      title: "Merge Sort Algorithm",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Merge Sort Algorithm: An Overview</h3>
          <p className="mb-4">
            Merge Sort is an efficient, comparison-based sorting algorithm that follows the divide and conquer strategy.
            It divides the input array into two halves, recursively sorts them, and then merges the sorted halves.
          </p>

          <div className="my-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/merge%20sort-aSS0US3fTlOpWzzSPti37PtSg0EEVP.png"
              alt="Merge Sort Process Visualization"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="aspect-video mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4VqmGXwpLqc?si=BQQq0VL5w9T3ToO5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Algorithm Implementation</h4>
            <div className="bg-gray-25 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`// Merge Sort Algorithm (pseudocode)
mergeSort(arr[], left, right):
  if left < right:
    mid = (left + right) / 2
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
    
merge(arr[], left, mid, right):
  // Create temporary arrays
  n1 = mid - left + 1
  n2 = right - mid
  L[] = new array of size n1
  R[] = new array of size n2
  
  // Copy data to temporary arrays
  for i = 0 to n1-1:
    L[i] = arr[left + i]
  for j = 0 to n2-1:
    R[j] = arr[mid + 1 + j]
    
  // Merge the temporary arrays back
  i = 0, j = 0, k = left
  while i < n1 and j < n2:
    if L[i] <= R[j]:
      arr[k] = L[i]
      i++
    else:
      arr[k] = R[j]
      j++
    k++
    
  // Copy remaining elements
  while i < n1:
    arr[k] = L[i]
    i++
    k++
  while j < n2:
    arr[k] = R[j]
    j++
    k++`}
            </div>
          </div>

          <h4 className="font-semibold mt-6 mb-2">Key Features of Merge Sort</h4>
          <ul className="list-disc pl-6 mb-6">
            <li>Divide and Conquer approach</li>
            <li>Stable sorting algorithm</li>
            <li>Guaranteed O(n log n) time complexity</li>
            <li>Not an in-place sorting algorithm (requires additional memory)</li>
          </ul>
        </section>
      ),
    },
    "working-merge-sort": {
      title: "Working of Merge Sort",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Interactive Merge Sort Visualization</h3>
          <p className="mb-4">
            Below is an interactive visualization of the Merge Sort algorithm. Use the controls to start, pause, reset
            the animation, and adjust its speed.
          </p>

          <div className="my-8">
            <MergeSortAnimation />
          </div>
          <h3 className="text-xl font-semibold mb-4">Step-by-Step Working of Merge Sort</h3>

          <h4 className="font-semibold mb-2">1. Divide the Array (Recursive Splitting)</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>The given array is divided into two equal halves.</li>
            <li>If the array has an odd number of elements, one half may have one extra element.</li>
            <li>
              The process continues recursively until each subarray has only one element, as a single element is already
              sorted by definition.
            </li>
          </ul>

          <p className="mt-4">
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code>{`Initial Array: [38, 27, 43, 3, 9, 82, 10]

Split:
[38, 27, 43, 3]  [9, 82, 10]

Further Splitting:
[38, 27]  [43, 3]   [9, 82]   [10]

Again:
[38]  [27]   [43]   [3]   [9]   [82]   [10]

At this point, we cannot split further.`}</code>
          </pre>

          <h4 className="font-semibold mt-6">2. Merge the Subarrays (Sorting and Combining)</h4>
          <p>Now, we start merging while sorting:</p>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Merge [38] and [27] → [27, 38]</li>
            <li>Merge [43] and [3] → [3, 43]</li>
            <li>Merge [9] and [82] → [9, 82]</li>
            <li>[10] remains as it is.</li>
          </ul>

          <p className="mt-4">
            <strong>Updated Array:</strong>
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code>{`[27, 38]   [3, 43]   [9, 82]   [10]`}</code>
          </pre>

          <p className="mt-4">
            <strong>Next Merging Steps:</strong>
          </p>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Merge [27, 38] and [3, 43] → [3, 27, 38, 43]</li>
            <li>Merge [9, 82] and [10] → [9, 10, 82]</li>
          </ul>

          <p className="mt-4">
            <strong>Final Merging:</strong>
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            <code>{`Merge [3, 27, 38, 43] and [9, 10, 82] → [3, 9, 10, 27, 38, 43, 82]

Final Sorted Array: [3, 9, 10, 27, 38, 43, 82]`}</code>
          </pre>
        </section>
      ),
    },

    "merge-sort-complexity": {
      title: "Merge Sort Complexity",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Merge Sort Complexity Analysis</h3>
          <p className="mb-4">
            Let's analyze the time and space complexity of the Merge Sort algorithm in different scenarios.
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
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Average Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Worst Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <p className="mb-2">
              <strong>Time Complexity Analysis:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The merge step takes O(n) time to merge two sorted subarrays of total size n.</li>
              <li>The divide step splits the array into two halves in constant time.</li>
              <li>The algorithm makes log n levels of recursive calls.</li>
              <li>At each level, the total work done is O(n), resulting in O(n log n) overall time complexity.</li>
            </ul>
          </div>

          <h4 className="font-semibold mt-6 mb-2">2. Space Complexity</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Space Complexity</th>
                  <th className="border border-gray-300 px-4 py-2">O(n)</th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Stable</th>
                  <th className="border border-gray-300 px-4 py-2">YES</th>
                </tr>
              </thead>
            </table>
          </div>

          <p className="mb-4">
            Merge Sort requires additional space proportional to the size of the input array for temporary arrays during
            the merge process. This makes it less memory-efficient compared to in-place sorting algorithms like Quick
            Sort or Heap Sort.
          </p>
        </section>
      ),
    },
    "optimized-merge-sort": {
      title: "Implementation of merge sort",
      content: (
        <section className="mb-8">
          <p className="mb-4">
            While the basic Merge Sort algorithm is already efficient with O(n log n) time complexity, several
            optimizations can be applied to improve its performance in practical scenarios.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Basic Implementation (C/C++)</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`#include <stdio.h>

// Merge function to merge two sorted subarrays
void merge(int arr[], int left, int mid, int right) {
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    int L[n1], R[n2];
    
    // Copy data to temporary arrays
    for (i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Merge the temporary arrays back into arr[left..right]
    i = 0;
    j = 0;
    k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copy the remaining elements of L[]
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copy the remaining elements of R[]
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Merge Sort function
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        // Find the middle point
        int mid = left + (right - left) / 2;
        
        // Sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Merge the sorted halves
        merge(int arr[], int left, int mid, int right) {
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    int L[n1], R[n2];
    
    // Copy data to temporary arrays
    for (i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Merge the temporary arrays back into arr[left..right]
    i = 0;
    j = 0;
    k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copy the remaining elements of L[]
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copy the remaining elements of R[]
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Merge Sort function
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        // Find the middle point
        int mid = left + (right - left) / 2;
        
        // Sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}`}
            </div>
          </div>

          <h4 className="font-semibold mt-6 mb-2">Optimization Techniques</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              <strong>Insertion Sort for Small Subarrays:</strong> For small subarrays (typically less than 10-20
              elements), using Insertion Sort instead of Merge Sort reduces overhead.
            </li>
            <li>
              <strong>In-place Merge:</strong> Techniques to perform merging without additional space, though usually
              with increased time complexity.
            </li>
            <li>
              <strong>Cache-Friendly Implementation:</strong> Optimizing the algorithm to better utilize CPU cache by
              improving locality of reference.
            </li>
          </ol>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Optimized Implementation (Java)</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`public class OptimizedMergeSort {
    private static final int INSERTION_SORT_THRESHOLD = 10;
    
    public static void sort(int[] arr) {
        int[] temp = new int[arr.length];
        mergeSort(arr, temp, 0, arr.length - 1);
    }
    
    private static void mergeSort(int[] arr, int[] temp, int left, int right) {
        // Use insertion sort for small arrays
        if (right - left <= INSERTION_SORT_THRESHOLD) {
            insertionSort(arr, left, right);
            return;
        }
        
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            // Sort first and second halves
            mergeSort(arr, temp, left, mid);
            mergeSort(arr, temp, mid + 1, right);
            
            // Merge the sorted halves
            merge(arr, temp, left, mid, right);
        }
    }
    
    private static void merge(int[] arr, int[] temp, int left, int mid, int right) {
        // Copy data to temp array
        for (int i = left; i <= right; i++) {
            temp[i] = arr[i];
        }
        
        int i = left;
        int j = mid + 1;
        int k = left;
        
        // Merge temp arrays back into arr
        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                arr[k++] = temp[i++];
            } else {
                arr[k++] = temp[j++];
            }
        }
        
        // Copy remaining elements
        while (i <= mid) {
            arr[k++] = temp[i++];
        }
        
        // No need to copy second half - already in correct position
    }
    
    private static void insertionSort(int[] arr, int left, int right) {
        for (int i = left + 1; i <= right; i++) {
            int key = arr[i];
            int j = i - 1;
            
            while (j >= left && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            
            arr[j + 1] = key;
        }
    }
}`}
            </div>
          </div>
        </section>
      ),
    },
    "merge-sort-quiz": {
      title: "Merge Sort Quiz",
      content: (
        <section className="mb-8">
          <QuizComponent
            title="Test your knowledge of Merge Sort"
            questions={[
              {
                question: "Merge Sort follows which approach?",
                options: ["Divide and Conquer", "Greedy Approach", "Dynamic Programming", "Backtracking"],
                correctAnswer: 0,
              },
              {
                question: "What is the time complexity of Merge Sort in the worst case?",
                options: ["O(n^2)", "O(log n)", "O(n)", "O(n log n)"],
                correctAnswer: 3,
              },
              {
                question: "In Merge Sort, the array is divided into:",
                options: ["Two equal halves", "Three parts", "Four equal parts", "Unequal parts"],
                correctAnswer: 0,
              },
              {
                question: "Merge Sort is preferred for:",
                options: ["Small datasets", "Large datasets", "Sorted datasets", "None of these"],
                correctAnswer: 1,
              },
              {
                question: "What is the space complexity of Merge Sort?",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correctAnswer: 1,
              },
            ]}
          />
        </section>
      ),
    },
  }

  // Add to the quickSortContent object
  const quickSortContent = {
    "quick-sort-algorithm": {
      title: "Quick Sort Algorithm",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Quick Sort Algorithm: An Overview</h3>
          <p className="mb-4">
            Quick Sort is another efficient, comparison-based sorting algorithm that follows the divide and conquer
            paradigm. It selects a 'pivot' element and partitions the array around the pivot, placing elements smaller
            than pivot on the left and larger elements on the right.
          </p>

          <div className="my-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quick%20sort-1cFLHQm7vQ6udtFEFbowalujqq4JoO.png"
              alt="Quick Sort Process Visualization"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="aspect-video mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Hoixgm4-P4M?si=wK8BozzzLicFGEkp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Algorithm Implementation</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`// Quick Sort Algorithm (pseudocode)
quickSort(arr[], low, high):
  if low < high:
    // pi is partitioning index
    pi = partition(arr, low, high)
    
    // Recursively sort elements
    quickSort(arr, low, pi - 1)  // Before pi
    quickSort(arr, pi + 1, high) // After pi
    
partition(arr[], low, high):
  // Select the rightmost element as pivot
  pivot = arr[high]
  
  // Index of smaller element
  i = low - 1
  
  for j = low to high - 1:
    // If current element is smaller than the pivot
    if arr[j] < pivot:
      i++  // Increment index of smaller element
      swap arr[i] and arr[j]
      
  // Swap pivot element with the element at i+1
  swap arr[i + 1] and arr[high]
  return i + 1`}
            </div>
          </div>

          <h4 className="font-semibold mt-6 mb-2">Key Features of Quick Sort</h4>
          <ul className="list-disc pl-6 mb-6">
            <li>Divide and Conquer approach</li>
            <li>In-place sorting algorithm (requires minimal additional memory)</li>
            <li>Average case O(n log n) time complexity</li>
            <li>Efficient for large datasets and practical applications</li>
            <li>Not stable by default (equal elements might change their relative order)</li>
          </ul>
        </section>
      ),
    },
    "working-quick-sort": {
      title: "Working of Quick Sort",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Interactive Quick Sort Visualization</h3>
          <p className="mb-4">
            Below is an interactive visualization of the Quick Sort algorithm. Use the controls to start, pause, reset
            the animation, and adjust its speed.
          </p>

          <div className="my-8">
            <QuickSortAnimation />
          </div>

          <h3 className="text-xl font-semibold mb-4">How Quick Sort Works</h3>
          <p className="mb-4">
            Quick Sort works by selecting a 'pivot' element from the array and partitioning the other elements into two
            sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then
            recursively sorted.
          </p>

          <div className="space-y-6 my-6">
            <h4 className="font-semibold mb-2">Step-by-Step Process:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Choose a pivot:</strong> Select an element from the array to act as a pivot.
              </li>
              <li>
                <strong>Partition:</strong> Rearrange the array so that all elements with values less than the pivot
                come before it, while all elements with values greater than the pivot come after it.
              </li>
              <li>
                <strong>Recursively apply:</strong> Apply the same steps to the sub-arrays formed on the left and right
                of the pivot.
              </li>
            </ol>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Visual Representation</h4>
            <p className="mb-4">
              [Add visualization of quick sort here - showing the pivot selection and partitioning steps]
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-4">Interactive Example</h4>
            <p className="mb-4">[Add interactive quick sort demo here]</p>
          </div>
        </section>
      ),
    },
    "quick-sort-complexity": {
      title: "Quick Sort Complexity",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Quick Sort Complexity Analysis</h3>
          <p className="mb-4">
            Let's analyze the time and space complexity of the Quick Sort algorithm in different scenarios.
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
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Average Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Worst Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n²)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <p className="mb-2">
              <strong>Time Complexity Analysis:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Best Case:</strong> Occurs when the partitioning process always divides the array into two
                nearly equal halves. This happens when the pivot is the middle element, leading to O(n log n) time
                complexity.
              </li>
              <li>
                <strong>Average Case:</strong> O(n log n), assuming random distribution of the input data.
              </li>
              <li>
                <strong>Worst Case:</strong> O(n²) occurs when the partitioning process always picks the smallest or
                largest element as the pivot, which happens in sorted or reverse-sorted arrays if we always choose the
                first or last element as pivot.
              </li>
            </ul>
          </div>

          <h4 className="font-semibold mt-6 mb-2">2. Space Complexity</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Space Complexity</th>
                  <th className="border border-gray-300 px-4 py-2">O(log n)</th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Stable</th>
                  <th className="border border-gray-300 px-4 py-2">NO</th>
                </tr>
              </thead>
            </table>
          </div>

          <p className="mb-4">
            Quick Sort requires O(log n) additional space for the recursion stack in the average and best cases. In the
            worst case, it can require O(n) space. Unlike Merge Sort, Quick Sort is an in-place sorting algorithm as it
            doesn't require auxiliary arrays for sorting.
          </p>
        </section>
      ),
    },
    "optimized-quick-sort": {
      title: "Optimized Quick Sort Algorithm",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Optimized Quick Sort Implementations</h3>
          <p className="mb-4">
            The basic Quick Sort algorithm can be optimized in several ways to improve performance and address the
            worst-case scenario.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Basic Implementation (C/C++)</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`#include <stdio.h>

// Function to swap elements
void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

// Partition function
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // pivot
    int i = (low - 1); // Index of smaller element
    
    for (int j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            i++; // increment index of smaller element
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// The main function that implements QuickSort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // pi is partitioning index
        int pi = partition(arr, low, high);
        
        // Separately sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`}
            </div>
          </div>

          <h4 className="font-semibold mt-6 mb-2">Optimization Techniques</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              <strong>Pivot Selection:</strong> Instead of always choosing the last element, better pivot selection
              strategies include:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Median-of-Three:</strong> Choose the median of the first, middle, and last elements as the
                  pivot.
                </li>
                <li>
                  <strong>Random Pivot:</strong> Randomly select an element as the pivot to avoid worst-case scenarios.
                </li>
              </ul>
            </li>
            <li>
              <strong>Insertion Sort for Small Subarrays:</strong> Similar to Merge Sort, use Insertion Sort for small
              subarrays.
            </li>
            <li>
              <strong>Tail Recursion Elimination:</strong> Optimize the recursion to avoid stack overflow for large
              arrays.
            </li>
            <li>
              <strong>Three-Way Partitioning:</strong> For arrays with many duplicate elements, partition into three
              parts (less than, equal to, and greater than the pivot).
            </li>
          </ol>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Optimized Implementation (Java) - Median-of-Three Pivot</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`public class OptimizedQuickSort {
    private static final int INSERTION_SORT_THRESHOLD = 10;
    
    public static void sort(int[] arr) {
        quickSort(arr, 0, arr.length - 1);
    }
    
    private static void quickSort(int[] arr, int low, int high) {
        // Use insertion sort for small arrays
        if (high - low <= INSERTION_SORT_THRESHOLD) {
            insertionSort(arr, low, high);
            return;
        }
        
        if (low < high) {
            // Choose pivot using median-of-three
            int pivot = medianOfThree(arr, arr, high);
            
            // Partition and get the pivot position
            int pi = partition(arr, low, high, pivot);
            
            // Recursively sort elements
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    // Find median of first, middle, and last element
    private static int medianOfThree(int[] arr, int low, int high) {
        int mid = low + (high - low) / 2;
        
        // Sort low, mid, high values
        if (arr[mid] < arr[low])
            swap(arr, mid, low);
        if (arr[high] < arr[low])
            swap(arr, high, low);
        if (arr[high] < arr[mid])
            swap(arr, high, mid);
        
        // Place pivot at high-1 position
        swap(arr, mid, high - 1);
        return arr[high - 1];
    }
    
    private static int partition(int[] arr, int low, int high, int pivot) {
        int i = low;
        int j = high - 1; // pivot is at high-1
        
        while (true) {
            // Find element >= pivot from left
            while (arr[++i] < pivot);
            
            // Find element <= pivot from right
            while (pivot < arr[--j]);
            
            if (i >= j)
                break;
                
            swap(arr, i, j);
        }
        
        // Restore pivot
        swap(arr, i, high - 1);
        return i; // Return pivot position
    }
    
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    private static void insertionSort(int[] arr, int low, int high) {
        for (int i = low + 1; i <= high; i++) {
            int key = arr[i];
            int j = i - 1;
            
            while (j >= low && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            
            arr[j + 1] = key;
        }
    }
}`}
            </div>
          </div>
        </section>
      ),
    },
    "quick-sort-quiz": {
      title: "Quick Sort Quiz",
      content: (
        <section className="mb-8">
          <QuizComponent
            title="Test your knowledge of Quick Sort"
            questions={[
              {
                question: "Quick Sort follows which approach?",
                options: ["Divide and Conquer", "Greedy Approach", "Dynamic Programming", "Backtracking"],
                correctAnswer: 0,
              },
              {
                question: "What is the average time complexity of Quick Sort?",
                options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
                correctAnswer: 2,
              },
              {
                question: "Quick Sort performs well when:",
                options: ["Array is sorted", "Pivot is close to the median", "Array is reversed", "None of these"],
                correctAnswer: 1,
              },
              {
                question: "Which is the most important operation in Quick Sort?",
                options: ["Partitioning", "Merging", "Comparison", "Swapping"],
                correctAnswer: 0,
              },
              {
                question: "Quick Sort is:",
                options: ["Stable Sort", "Space efficient", "In-place Sort", "None of these"],
                correctAnswer: 2,
              },
            ]}
          />
        </section>
      ),
    },
  }

  // Finally, let's update the heap Sort content
  const heapSortContent = {
    "heap-sort-algorithm": {
      title: "Heap Sort Algorithm",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Heap Sort Algorithm: An Overview</h3>
          <p className="mb-4">
            Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides its
            input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the
            largest element and inserting it into the sorted region.
          </p>

          <div className="my-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heap%20sort-4jf0dzRstKmjUpQqarUA8ieLfDRCvD.png"
              alt="Heap Sort Process Visualization"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="aspect-video mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2DmK_H7IdTo?si=HzczFnBGd3q4iBcy"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Algorithm Implementation</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`// Heap Sort Algorithm (pseudocode)
heapSort(arr[]):
  n = arr.length
  
  // Build heap (rearrange array)
  for i = n/2 - 1 down to 0:
    heapify(arr, n, i)
    
  // Extract elements from heap one by one
  for i = n-1 down to 0:
    // Move current root to end
    swap arr[0] with arr[i]
    
    // Call max heapify on the reduced heap
    heapify(arr, i, 0)
    
// To heapify a subtree rooted with node i
heapify(arr[], n, i):
  largest = i      // Initialize largest as root
  left = 2*i + 1   // Left child
  right = 2*i + 2  // Right child
  
  // If left child is larger than root
  if left < n and arr[left] > arr[largest]:
    largest = left
    
  // If right child is larger than largest so far
  if right < n and arr[right] > arr[largest]:
    largest = right
    
  // If largest is not root
  if largest != i:
    swap arr[i] with arr[largest]
    
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest)`}
            </div>
          </div>

          <h4 className="font-semibold mt-6 mb-2">Key Features of Heap Sort</h4>
          <ul className="list-disc pl-6 mb-6">
            <li>Uses a binary heap data structure</li>
            <li>In-place sorting algorithm (no additional storage required)</li>
            <li>Guaranteed O(n log n) time complexity in all cases</li>
            <li>Not stable (equal elements may change relative order)</li>
            <li>Efficient for large datasets</li>
          </ul>
        </section>
      ),
    },
    "working-heap-sort": {
      title: "Working of Heap Sort",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Interactive Heap Sort Visualization</h3>
          <p className="mb-4">
            Below is an interactive visualization of the Heap Sort algorithm. Use the controls to start, pause, reset
            the animation, and adjust its speed.
          </p>

          <div className="my-8">
            <HeapSortAnimation />
          </div>

          <h3 className="text-xl font-semibold mb-4">How Heap Sort Works</h3>
          <p className="mb-4">
            Heap Sort works by first building a max heap from the input data, then repeatedly extracting the maximum
            element from the heap and rebuilding the heap until it's empty.
          </p>

          <div className="space-y-6 my-6">
            <h4 className="font-semibold mb-2">Step-by-Step Process:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Build a max heap:</strong> Convert the array into a max heap structure, where the largest
                element is at the root.
              </li>
              <li>
                <strong>Extract elements:</strong> Repeatedly remove the maximum element (root) from the heap and place
                it at the end of the array.
              </li>
              <li>
                <strong>Heapify:</strong> After each extraction, heapify the remaining heap to maintain the max heap
                property.
              </li>
              <li>
                <strong>Completion:</strong> Once all elements have been extracted, the array will be sorted in
                ascending order.
              </li>
            </ol>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Visual Representation</h4>
            <p className="mb-4">
              [Add visualization of heap sort here - showing the heap construction and extraction steps]
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-4">Understanding the Heap Data Structure</h4>
            <p className="mb-4">A binary heap is a complete binary tree where:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Max Heap:</strong> Each parent node is greater than or equal to its children.
              </li>
              <li>
                <strong>Min Heap:</strong> Each parent node is less than or equal to its children.
              </li>
              <li>
                The tree is represented as an array where for any element at index i:
                <ul className="list-disc pl-6 mt-2">
                  <li>Left child is at index 2i + 1</li>
                  <li>Right child is at index 2i + 2</li>
                  <li>Parent is at index (i-1)/2 (integer division)</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      ),
    },
    "heap-sort-complexity": {
      title: "Heap Sort Complexity",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Heap Sort Complexity Analysis</h3>
          <p className="mb-4">
            Let's analyze the time and space complexity of the Heap Sort algorithm in different scenarios.
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
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Average Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Worst Case</td>
                  <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <p className="mb-2">
              <strong>Time Complexity Analysis:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Building the heap:</strong> Takes O(n) time using the bottom-up approach.
              </li>
              <li>
                <strong>Heapify operation:</strong> Takes O(log n) time in the worst case.
              </li>
              <li>
                <strong>Extraction phase:</strong> Requires n-1 extractions, each taking O(log n) time.
              </li>
              <li>
                <strong>Overall complexity:</strong> O(n) + O(n log n) = O(n log n)
              </li>
            </ul>
          </div>

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
                  <th className="border border-gray-300 px-4 py-2">NO</th>
                </tr>
              </thead>
            </table>
          </div>

          <p className="mb-4">
            Heap Sort is an in-place sorting algorithm that requires only a constant amount of additional memory (O(1))
            regardless of the input size. This makes it more space-efficient than Merge Sort, which requires O(n)
            additional space.
          </p>
        </section>
      ),
    },
    "optimized-heap-sort": {
      title: "Optimized Heap Sort Algorithm",
      content: (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Optimized Heap Sort Implementations</h3>
          <p className="mb-4">
            While Heap Sort already has an optimal time complexity of O(n log n), several practical optimizations can
            improve its performance in real-world scenarios.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Basic Implementation (C/C++)</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`#include <stdio.h>

// To heapify a subtree rooted with node i
void heapify(int arr[], int n, int i) {
    int largest = i; // Initialize largest as root
    int left = 2 * i + 1; // left = 2*i + 1
    int right = 2 * i + 2; // right = 2*i + 2
    
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest])
        largest = left;
    
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest])
        largest = right;
    
    // If largest is not root
    if (largest != i) {
        // Swap
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Main function to perform heap sort
void heapSort(int arr[], int n) {
    // Build heap (rearrange array)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    
    // One by one extract an element from heap
    for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        
        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}`}
            </div>
          </div>

          <h4 className="font-semibold mt-6 mb-2">Optimization Techniques</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              <strong>Iterative Heapify:</strong> Replace the recursive heapify with an iterative version to reduce
              function call overhead.
            </li>
            <li>
              <strong>Cache Optimization:</strong> Improve data locality to better utilize CPU cache.
            </li>
            <li>
              <strong>Bottom-up Heap Construction:</strong> Efficient approach for building initial heap in O(n) time.
            </li>
            <li>
              <strong>Branch Prediction Optimization:</strong> Reorder comparisons to help CPU branch prediction.
            </li>
          </ol>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
            <h4 className="font-semibold mb-4">Optimized Implementation (Java) - Iterative Heapify</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono whitespace-pre mb-6 text-sm">
              {`public class OptimizedHeapSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        
        // Build heap (rearrange array)
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);
        
        // One by one extract an element from heap
        for (int i = n - 1; i > 0; i--) {
            // Move current root to end
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            
            // Call max heapify on the reduced heap
            heapifyIterative(arr, i, 0);
        }
    }
    
    // Iterative heapify
    private static void heapifyIterative(int[] arr, int n, int i) {
        int largest = i; // Initialize largest as root
        int temp;
        
        while (true) {
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            largest = i;
            
            // If left child is larger than root
            if (left < n && arr[left] > arr[largest])
                largest = left;
            
            // If right child is larger than largest so far
            if (right < n && arr[right] > arr[largest])
                largest = right;
            
            // If largest is not root
            if (largest != i) {
                temp = arr[i];
                arr[i] = arr[largest];
                arr[largest] = temp;
                
                // Continue heapifying
                i = largest;
            } else {
                break;
            }
        }
    }
    
    // Original recursive heapify (for comparison)
    private static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        
        if (left < n && arr[left] > arr[largest])
            largest = left;
        
        if (right < n && arr[right] > arr[largest])
            largest = right;
        
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            
            heapify(arr, n, largest);
        }
    }
}`}
            </div>
          </div>
        </section>
      ),
    },
    "heap-sort-quiz": {
      title: "Heap Sort Quiz",
      content: (
        <section className="mb-8">
          <QuizComponent
            title="Test your knowledge of Heap Sort"
            questions={[
              {
                question: "What type of data structure does Heap Sort use?",
                options: ["Binary Heap", "Linked List", "Graph", "Stack"],
                correctAnswer: 0,
              },
              {
                question: "Time complexity of Heap Sort in worst case is:",
                options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
                correctAnswer: 1,
              },
              {
                question: "Which of the following is true about Heap Sort?",
                options: [
                  "It is a stable sorting technique",
                  "It works on Divide and Conquer",
                  "It uses a Binary Heap",
                  "It requires linked list implementation",
                ],
                correctAnswer: 2,
              },
              {
                question: "In Heap Sort, the maximum element is stored in:",
                options: ["Root Node", "Leaf Node", "Middle Node", "Any Random Node"],
                correctAnswer: 0,
              },
              {
                question: "Heap Sort can be directly applied to:",
                options: ["Array", "Linked List", "Stack", "Graph"],
                correctAnswer: 0,
              },
            ]}
          />
        </section>
      ),
    },
  }

  const currentSections = sections[activeSort as keyof typeof sections]

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
          <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">DS Sorting</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        {/* Sort Type Navigation */}
        <div className="border-t">
          <div className="container mx-auto">
            <div className="grid grid-cols-4">
              {sortTypes.map((sort) => (
                <button
                  key={sort.id}
                  onClick={() => {
                    setActiveSort(sort.id)
                    setActiveSection(sections[sort.id as keyof typeof sections][0].id)
                  }}
                  className={cn(
                    "py-2 text-sm font-medium text-center transition-colors flex items-center justify-center",
                    activeSort === sort.id
                      ? "border-b-2 border-primary text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {sort.icon}
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

