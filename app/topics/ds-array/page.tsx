"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Menu, Code, BookText, FileCode2, BarChart2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import ArrayVisualization from "./array-visualization"
import CodeEditor from "./code-editor"
import QuizComponent from "./quiz-component"
import UserContentSection from "./user-content"
import BasicArrayOperations from "./basic-operations"

export default function DSArrayContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introduction to Arrays", icon: <BookText className="h-4 w-4 mr-2" /> },
    { id: "basic-operations", title: "Basic Operations", icon: <List className="h-4 w-4 mr-2" /> },
    { id: "array-operations", title: "Array Operations", icon: <List className="h-4 w-4 mr-2" /> },
    { id: "array-implementation", title: "Array Implementation", icon: <Code className="h-4 w-4 mr-2" /> },
    { id: "array-complexity", title: "Time & Space Complexity", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
    { id: "array-applications", title: "Applications", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
    { id: "array-quiz", title: "Quiz", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
    { id: "community-content", title: "Community Content", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  ]

  const content = {
    introduction: {
      title: "Introduction to Arrays",
      content: (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">What is an Array?</h3>
            <p className="mb-4">
              An array is a linear data structure that collects elements of the same data type and stores them in contiguous and adjacent memory locations. Arrays use a zero-based index to randomly access elements in the array.
            </p>
            <p className="mb-4">
              Arrays are among the oldest and most important data structures and are used by almost every program. They are also used to implement many other data structures like stacks, queues, heaps, hash tables, etc.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Key Characteristics of Arrays:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Elements are stored in <strong>contiguous memory locations</strong></li>
                <li>Elements can be accessed using <strong>index values</strong> (zero-based indexing in most languages)</li>
                <li>Arrays have a <strong>fixed size</strong> in many languages (static arrays)</li>
                <li>All elements must be of the <strong>same data type</strong> (in statically typed languages)</li>
                <li>Provides <strong>O(1) constant time access</strong> to any element by index</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Real-World Analogy</h4>
              <p>
                Think of an array as a row of mailboxes, each with a unique number (index). You can directly access any mailbox by its number, just like you can access any array element by its index.
              </p>
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-gcFpIKiPquu92glGoy6PnAss9aQGS2.png"
              alt="Array Data Structure Illustration"
              width={800}
              height={400}
              className="rounded-lg shadow-md mb-6"
            />
            <h4 className="text-lg font-semibold mb-2">Types of Arrays</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">1. One-Dimensional Arrays</h5>
                <p className="text-sm">
                  A one-dimensional array is a linear array where elements are arranged in a single row. It's the simplest form of an array.
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2 font-mono text-sm">
                  int numbers[5] = &#123;10, 20, 30, 40, 50&#125;;
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">2. Multi-Dimensional Arrays</h5>
                <p className="text-sm">
                  Multi-dimensional arrays store elements in a tabular form with multiple rows and columns.
                </p>
                <div className="bg-gray-100 p-2 rounded mt-2 font-mono text-sm">
                  int matrix[3][3] = &#123;&#123;1, 2, 3&#125;, &#123;4, 5, 6&#125;, &#123;7, 8, 9&#125;&#125;;
                </div>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">Array Representation in Memory</h4>
            <p className="mb-4">
              In memory, an array is represented as a contiguous block. For a one-dimensional array of size n, if the base address is B and the size of each element is S, then:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Address of first element (index 0): B</li>
              <li>Address of second element (index 1): B + S</li>
              <li>Address of third element (index 2): B + 2S</li>
              <li>Address of ith element (index i): B + i*S</li>
            </ul>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Advantages of Arrays</h4>
              <ul className="list-disc pl-6">
                <li>Random access to elements using index</li>
                <li>Easy to traverse and iterate</li>
                <li>Memory locality improves cache performance</li>
                <li>Used to implement other data structures</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Disadvantages of Arrays</h4>
              <ul className="list-disc pl-6">
                <li>Fixed size (static arrays) – cannot grow or shrink dynamically</li>
                <li>Insertion and deletion are costly (O(n)) except at the end</li>
                <li>Wastage of memory if array size is overestimated</li>
                <li>All elements must be of the same data type</li>
              </ul>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Interactive Array Visualization</h4>
              <p className="mb-4">
                Experiment with the array visualization below to understand how arrays store and access elements:
              </p>
              <ArrayVisualization />
            </div>
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
    "basic-operations": {
      title: "Basic Operations on Arrays",
      content: (
        <>
          <BasicArrayOperations />
        </>
      ),
    },
    "array-operations": {
      title: "Array Operations",
      content: (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">Basic Array Operations</h3>
            <p className="mb-4">
              Arrays support various operations for manipulating data. Here are the fundamental operations you can perform on arrays:
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. Traversal</h4>
                <p className="mb-2">
                  Traversal means accessing each element of the array exactly once to process it or display it.
                </p>
                <CodeEditor 
                  title="Array Traversal Example"
                  language="javascript"
                  initialCode={`// Array traversal in JavaScript
const numbers = [10, 20, 30, 40, 50];

// Method 1: Using for loop
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(\`Element at index \${i}: \${numbers[i]}\`);
}

// Method 2: Using forEach
console.log("\\nUsing forEach:");
numbers.forEach((element, index) => {
  console.log(\`Element at index \${index}: \${element}\`);
});

// Method 3: Using for...of loop
console.log("\\nUsing for...of loop:");
for (const element of numbers) {
  console.log(element);
}`}
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. Insertion</h4>
                <p className="mb-2">
                  Insertion means adding an element at a specified position in the array. This operation may require shifting elements to make space.
                </p>
                <CodeEditor 
                  title="Array Insertion Example"
                  language="javascript"
                  initialCode={`// Array insertion in JavaScript
const fruits = ['Apple', 'Orange', 'Banana'];
console.log("Original array:", fruits);

// Insert at the end (push)
fruits.push('Mango');
console.log("After push:", fruits);

// Insert at the beginning (unshift)
fruits.unshift('Strawberry');
console.log("After unshift:", fruits);

// Insert at a specific position (splice)
// syntax: splice(position, deleteCount, element1, element2, ...)
fruits.splice(2, 0, 'Kiwi');
console.log("After splice:", fruits);`}
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3. Deletion</h4>
                <p className="mb-2">
                  Deletion means removing an element from a specified position in the array. This operation may require shifting elements to fill the gap.
                </p>
                <CodeEditor 
                  title="Array Deletion Example"
                  language="javascript"
                  initialCode={`// Array deletion in JavaScript
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
console.log("Original array:", colors);

// Remove from the end (pop)
const lastColor = colors.pop();
console.log("After pop:", colors);
console.log("Removed element:", lastColor);

// Remove from the beginning (shift)
const firstColor = colors.shift();
console.log("After shift:", colors);
console.log("Removed element:", firstColor);

// Remove from a specific position (splice)
// syntax: splice(position, deleteCount)
const removedColors = colors.splice(1, 1);
console.log("After splice:", colors);
console.log("Removed element:", removedColors);`}
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">4. Searching</h4>
                <p className="mb-2">
                  Searching means finding the location of an element in the array or determining if it exists in the array.
                </p>
                <CodeEditor 
                  title="Array Searching Example"
                  language="javascript"
                  initialCode={`// Array searching in JavaScript
const numbers = [10, 25, 8, 42, 15, 25, 30];
console.log("Array:", numbers);

// Method 1: indexOf - returns the first index of an element
const index1 = numbers.indexOf(25);
console.log("indexOf(25):", index1);

// Method 2: lastIndexOf - returns the last index of an element
const index2 = numbers.lastIndexOf(25);
console.log("lastIndexOf(25):", index2);

// Method 3: includes - returns true if element exists
const exists = numbers.includes(42);
console.log("includes(42):", exists);

// Method 4: find - returns the first element that satisfies a condition
const found = numbers.find(num => num > 20);
console.log("find(num > 20):", found);

// Method 5: findIndex - returns the index of the first element that satisfies a condition
const foundIndex = numbers.findIndex(num => num > 20);
console.log("findIndex(num > 20):", foundIndex);`}
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">5. Updating</h4>
                <p className="mb-2">
                  Updating means changing the value of an existing element in the array.
                </p>
                <CodeEditor 
                  title="Array Updating Example"
                  language="javascript"
                  initialCode={`// Array updating in JavaScript
const scores = [85, 92, 78, 90, 88];
console.log("Original scores:", scores);

// Update by direct assignment
scores[2] = 95;
console.log("After updating index 2:", scores);

// Update multiple elements using map
const updatedScores = scores.map(score => score + 5);
console.log("After adding 5 to all scores:", updatedScores);

// Conditional update using map
const finalScores = scores.map(score => 
  score < 90 ? score + 2 : score
);
console.log("After conditional update:", finalScores);`}
                />
              </div>
            </div>
          </section>
        </>
      ),
    },
    "array-implementation": {
      title: "Array Implementation",
      content: (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">Array Implementation in Different Languages</h3>
            <p className="mb-4">
              Arrays are implemented differently across programming languages. Let's look at how arrays are declared and used in various popular languages:
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">JavaScript Arrays</h4>
                <p className="mb-2">
                  JavaScript arrays are dynamic and can hold elements of different types.
                </p>
                <CodeEditor 
                  title="JavaScript Array Implementation"
                  language="javascript"
                  initialCode={`// JavaScript Array Implementation
// 1. Array Declaration
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { name: "John" }, [10, 20]];

// 2. Creating arrays with Array constructor
const emptyArray = new Array(5); // Creates array with 5 empty slots
const filledArray = new Array(1, 2, 3, 4, 5); // Creates array with values

// 3. Array methods
console.log("Original array:", numbers);
numbers.push(6); // Add to end
console.log("After push:", numbers);
numbers.pop(); // Remove from end
console.log("After pop:", numbers);

// 4. Array properties
console.log("Array length:", numbers.length);

// 5. Array iteration
numbers.forEach(num => console.log(num * 2));

// 6. Array transformation
const doubled = numbers.map(num => num * 2);
console.log("Doubled array:", doubled);

// 7. Array filtering
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);`}
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Python Arrays</h4>
                <p className="mb-2">
                  Python has several ways to implement arrays, including lists, NumPy arrays, and the array module.
                </p>
                <CodeEditor 
                  title="Python Array Implementation"
                  language="python"
                  initialCode={`# Python Array Implementation

# 1. Using Lists (most common)
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, {"name": "John"}, [10, 20]]

# 2. List operations
numbers.append(6)  # Add to end
numbers.pop()      # Remove from end
numbers.insert(0, 0)  # Insert at specific position
numbers.remove(3)  # Remove specific value

# 3. List comprehension
squares = [x**2 for x in numbers]

# 4. Using NumPy arrays (for numerical computing)
# import numpy as np
# np_array = np.array([1, 2, 3, 4, 5])
# np_zeros = np.zeros(5)  # Creates array of zeros
# np_range = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]

# 5. Using array module (for arrays of same datatype)
# import array
# int_array = array.array('i', [1, 2, 3, 4, 5])  # 'i' for integers`}
                />
              </div>
            </div>
          </section>
        </>
      ),
    },
    "array-complexity": {
      title: "Time & Space Complexity",
      content: (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">Array Time & Space Complexity</h3>
            <p className="mb-4">
              Understanding the time and space complexity of array operations is crucial for writing efficient code. Here's a breakdown of the complexity for common array operations:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2">Operation</th>
                    <th className="border border-gray-300 px-4 py-2">Time Complexity</th>
                    <th className="border border-gray-300 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Access by Index</td>
                    <td className="border border-gray-300 px-4 py-2">O(1)</td>
                    <td className="border border-gray-300 px-4 py-2">Constant time access using index</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Search (Unsorted Array)</td>
                    <td className="border border-gray-300 px-4 py-2">O(n)</td>
                    <td className="border border-gray-300 px-4 py-2">Linear search through all elements</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Search (Sorted Array)</td>
                    <td className="border border-gray-300 px-4 py-2">O(log n)</td>
                    <td className="border border-gray-300 px-4 py-2">Binary search can be used</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Insertion/Deletion at End</td>
                    <td className="border border-gray-300 px-4 py-2">O(1) amortized</td>
                    <td className="border border-gray-300 px-4 py-2">For dynamic arrays, occasional resizing may occur</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Insertion/Deletion at Beginning</td>
                    <td className="border border-gray-300 px-4 py-2">O(n)</td>
                    <td className="border border-gray-300 px-4 py-2">Requires shifting all elements</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Insertion/Deletion at Middle</td>
                    <td className="border border-gray-300 px-4 py-2">O(n)</td>
                    <td className="border border-gray-300 px-4 py-2">Requires shifting elements after the position</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Traversal</td>
                    <td className="border border-gray-300 px-4 py-2">O(n)</td>
                    <td className="border border-gray-300 px-4 py-2">Visiting each element once</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Sorting</td>
                    <td className="border border-gray-300 px-4 py-2">O(n log n) to O(n²)</td>
                    <td className="border border-gray-300 px-4 py-2">Depends on the sorting algorithm used</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </>
      ),
    },
    "array-applications": {
      title: "Applications of Arrays",
      content: (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline">Applications of Arrays</h3>
            <p className="mb-4">
              Arrays are one of the most versatile data structures and are used in numerous applications across computer science and software development. Here are some common applications:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. Implementing Other Data Structures</h4>
                <p className="text-sm mb-2">
                  Arrays serve as building blocks for many other data structures:
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Stacks and Queues</li>
                  <li>Hash Tables</li>
                  <li>Heaps</li>
                  <li>Graphs (adjacency matrix)</li>
                  <li>Sparse Matrices</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. Database Systems</h4>
                <p className="text-sm mb-2">
                  Arrays are used in database implementations for:
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Indexing and fast data retrieval</li>
                  <li>Storing query results</li>
                  <li>Buffer management</li>
                  <li>Column-oriented storage</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3. Image Processing</h4>
                <p className="text-sm mb-2">
                  Images are typically represented as 2D or 3D arrays:
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Pixel manipulation</li>
                  <li>Filters and convolutions</li>
                  <li>Computer vision algorithms</li>
                  <li>Image compression</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">4. Scientific Computing</h4>
                <p className="text-sm mb-2">
                  Arrays are essential for numerical computations:
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Matrix operations</li>
                  <li>Signal processing</li>
                  <li>Statistical analysis</li>
                  <li>Simulation models</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ),
    },
    "array-quiz": {
      title: "Array Quiz",
      content: (
        <QuizComponent
          title="Test Your Knowledge of Arrays"
          questions={[
            {
              question: "What is the time complexity of accessing an element by index in an array?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              correctAnswer: 0
            },
            {
              question: "Which of the following operations has O(n) time complexity for arrays?",
              options: [
                "Accessing an element by index",
                "Inserting an element at the beginning",
                "Appending an element at the end (with sufficient capacity)",
                "Checking if the array is empty"
              ],
              correctAnswer: 1
            },
            {
              question: "In a zero-indexed array of size 5, what is the index of the last element?",
              options: ["4", "5", "0", "Depends on the programming language"],
              correctAnswer: 0
            },
            {
              question: "Which of the following is NOT a characteristic of arrays?",
              options: [
                "Elements are stored in contiguous memory locations",
                "Elements can be of different data types in statically typed languages",
                "Random access to elements using index",
                "Fixed size in many programming languages"
              ],
              correctAnswer: 1
            },
            {
              question: "What is the space complexity of an array with n elements?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              correctAnswer: 2
            }
          ]}
        />
      ),
    },
    "community-content": {
      title: "Community Content",
      content: (
        <UserContentSection />
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
          <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">Array Data Structure</h1>
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

