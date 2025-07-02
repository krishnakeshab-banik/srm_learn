"use client"

import React, { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function CodeBlock({ code, language = "cpp" }: { code: string; language?: string }) {
  return (
    <div className="my-4">
      <pre className={`language-${language} bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto`}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

// 1. Searching in Array
function SearchingInArray() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Searching in Array</CardTitle>
        <CardDescription>
          Find the position of a value in an array using linear or binary search.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <p className="mb-2">
          <strong>Searching</strong> is the process of finding whether a particular value exists in an array and, if so, at which index.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Linear Search:</strong> Checks each element one by one from the start to the end. Works for both sorted and unsorted arrays.
          </li>
          <li>
            <strong>Binary Search:</strong> Much faster, but only works on sorted arrays. It repeatedly divides the search interval in half.
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">How it works:</span>
          <ul className="list-decimal pl-6 mt-1">
            <li>Start from the first element.</li>
            <li>Compare each element with the target value.</li>
            <li>If found, return the index; if not, continue to the end.</li>
          </ul>
        </div>
        <CodeBlock
          language="cpp"
          code={`// Linear Search in C++
int search(int arr[], int n, int x) {
    for (int i = 0; i < n; i++)
        if (arr[i] == x)
            return i; // Found at index i
    return -1; // Not found
}
`}
        />
        <div className="mb-2">
          <span className="font-semibold">Time Complexity:</span> O(n) for linear search, O(log n) for binary search (sorted arrays only).
        </div>
        <div className="mb-2">
          <span className="font-semibold">Real-life analogy:</span> Linear search is like looking for a friend's name in a random list, checking each name one by one. Binary search is like looking for a word in a dictionary, where you open the book in the middle and decide which half to search next.
        </div>
      </CardContent>
    </Card>
  )
}

// 2. Reverse an Array
function ReverseArray() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reverse an Array</CardTitle>
        <CardDescription>
          Change the order of elements so the first becomes last, and so on.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <p className="mb-2">
          <strong>Reversing an array</strong> means changing the order of its elements so that the first element becomes the last, the second becomes the second last, and so on.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Why reverse?</strong> Sometimes, you need to process data in the opposite order, or you want to undo a previous operation.
          </li>
          <li>
            <strong>How?</strong> Swap the first and last elements, then the second and second last, and so on, until you reach the middle.
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">How it works:</span>
          <ul className="list-decimal pl-6 mt-1">
            <li>Set two pointers: one at the start, one at the end.</li>
            <li>Swap the elements at these pointers.</li>
            <li>Move the pointers towards each other and repeat until they meet.</li>
          </ul>
        </div>
        <CodeBlock
          language="cpp"
          code={`// Reverse an array in C++
void reverse(int arr[], int n) {
    int start = 0, end = n - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
`}
        />
        <div className="mb-2">
          <span className="font-semibold">Time Complexity:</span> O(n)
        </div>
        <div className="mb-2">
          <span className="font-semibold">Real-life analogy:</span> Imagine a queue of people; reversing the queue means the last person becomes first and vice versa.
        </div>
      </CardContent>
    </Card>
  )
}

// 3. Array Rotations
function ArrayRotations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Array Rotations</CardTitle>
        <CardDescription>
          Shift all elements left or right by a given number of positions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <p className="mb-2">
          <strong>Array rotation</strong> means shifting all elements of the array to the left or right by a certain number of positions. The elements that "fall off" one end are put back at the other end.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Left Rotation:</strong> Each element moves to the left by one position, and the first element moves to the end.
          </li>
          <li>
            <strong>Right Rotation:</strong> Each element moves to the right by one position, and the last element moves to the start.
          </li>
          <li>
            <strong>Applications:</strong> Used in algorithms, games, and for implementing cyclic data structures.
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">How it works:</span>
          <ul className="list-decimal pl-6 mt-1">
            <li>Copy the first <code>d</code> elements to a temporary array.</li>
            <li>Shift the remaining elements to the left.</li>
            <li>Copy the temporary array elements to the end.</li>
          </ul>
        </div>
        <CodeBlock
          language="cpp"
          code={`// Left rotate an array by d positions (using temp array)
void leftRotate(int arr[], int n, int d) {
    int temp[d];
    for (int i = 0; i < d; i++)
        temp[i] = arr[i];
    for (int i = d; i < n; i++)
        arr[i - d] = arr[i];
    for (int i = 0; i < d; i++)
        arr[n - d + i] = temp[i];
}
`}
        />
        <div className="mb-2">
          <span className="font-semibold">Time Complexity:</span> O(n)
        </div>
        <div className="mb-2">
          <span className="font-semibold">Real-life analogy:</span> Think of a circular conveyor belt where items move forward and wrap around to the start.
        </div>
        <a href="https://www.geeksforgeeks.org/array-rotation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Complete Guide On Array Rotations (GeeksforGeeks)
        </a>
      </CardContent>
    </Card>
  )
}

// 4. Search, Insert, Delete in Unsorted Array
function UnsortedArrayOps() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search, Insert, Delete in Unsorted Array</CardTitle>
        <CardDescription>
          Perform basic operations on arrays where order is not maintained.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <p className="mb-2">
          <strong>Unsorted arrays</strong> do not maintain any order among their elements. This affects how you perform basic operations:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Search:</strong> You must check each element one by one (linear search).
          </li>
          <li>
            <strong>Insert:</strong> You can add a new element at the end if there is space.
          </li>
          <li>
            <strong>Delete:</strong> Find the element, then shift all elements after it one position to the left.
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">How it works:</span>
          <ul className="list-decimal pl-6 mt-1">
            <li>For search, compare each element with the target.</li>
            <li>For insert, add the new element at the end.</li>
            <li>For delete, find the element and shift the rest left.</li>
          </ul>
        </div>
        <CodeBlock
          language="cpp"
          code={`// Insert at end
int insert(int arr[], int n, int key, int capacity) {
    if (n >= capacity) return n;
    arr[n] = key;
    return n + 1;
}

// Delete element
int deleteElement(int arr[], int n, int key) {
    int i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            break;
    if (i == n) return n;
    for (int j = i; j < n - 1; j++)
        arr[j] = arr[j + 1];
    return n - 1;
}
`}
        />
        <div className="mb-2">
          <span className="font-semibold">Time Complexity:</span> Search: O(n), Insert: O(1), Delete: O(n)
        </div>
        <div className="mb-2">
          <span className="font-semibold">Real-life analogy:</span> Imagine a pile of books (unsorted). To find a book, you may have to check each one. To add, just put it on top. To remove, find it and shift the rest.
        </div>
        <a href="https://www.geeksforgeeks.org/search-insert-and-delete-in-an-unsorted-array/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          More on Unsorted Array Operations (GeeksforGeeks)
        </a>
      </CardContent>
    </Card>
  )
}

// 5. Search, Insert, Delete in Sorted Array
function SortedArrayOps() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search, Insert, Delete in Sorted Array</CardTitle>
        <CardDescription>
          Perform operations efficiently by maintaining sorted order.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <p className="mb-2">
          <strong>Sorted arrays</strong> keep their elements in order (ascending or descending). This allows for faster searching and requires careful insertion and deletion to maintain order.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Search:</strong> Use binary search for fast lookup.
          </li>
          <li>
            <strong>Insert:</strong> Find the correct position and shift elements to make space.
          </li>
          <li>
            <strong>Delete:</strong> Find the element and shift elements to fill the gap.
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">How it works:</span>
          <ul className="list-decimal pl-6 mt-1">
            <li>For search, use binary search to find the element quickly.</li>
            <li>For insert, shift elements right to make space, then insert.</li>
            <li>For delete, shift elements left to fill the gap.</li>
          </ul>
        </div>
        <CodeBlock
          language="cpp"
          code={`// Binary Search
int binarySearch(int arr[], int n, int key) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == key) return m;
        if (arr[m] < key) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

// Insert in sorted array
int insertSorted(int arr[], int n, int key, int capacity) {
    if (n >= capacity) return n;
    int i = n - 1;
    while (i >= 0 && arr[i] > key) {
        arr[i + 1] = arr[i];
        i--;
    }
    arr[i + 1] = key;
    return n + 1;
}

// Delete from sorted array
int deleteElement(int arr[], int n, int key) {
    int pos = binarySearch(arr, n, key);
    if (pos == -1) return n;
    for (int i = pos; i < n - 1; i++)
        arr[i] = arr[i + 1];
    return n - 1;
}
`}
        />
        <div className="mb-2">
          <span className="font-semibold">Time Complexity:</span> Search: O(log n), Insert/Delete: O(n)
        </div>
        <div className="mb-2">
          <span className="font-semibold">Real-life analogy:</span> Like a sorted list of names; you can quickly find a name, but to add or remove, you must keep the list sorted.
        </div>
        <a href="https://www.geeksforgeeks.org/search-insert-and-delete-in-a-sorted-array/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          More on Sorted Array Operations (GeeksforGeeks)
        </a>
      </CardContent>
    </Card>
  )
}

// 6. Sort an Array
function SortArray() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sort an Array</CardTitle>
        <CardDescription>
          Arrange elements in ascending or descending order.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <p className="mb-2">
          <strong>Sorting</strong> means arranging the elements of an array in a particular order (usually ascending or descending).
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Why sort?</strong> Sorting helps in searching, organizing, and presenting data efficiently.
          </li>
          <li>
            <strong>How?</strong> There are many algorithms: Bubble Sort, Selection Sort, Merge Sort, Quick Sort, etc.
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">How it works (Bubble Sort):</span>
          <ul className="list-decimal pl-6 mt-1">
            <li>Compare each pair of adjacent elements.</li>
            <li>If they are in the wrong order, swap them.</li>
            <li>Repeat for all elements until the array is sorted.</li>
          </ul>
        </div>
        <CodeBlock
          language="cpp"
          code={`// Bubble Sort
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
}
`}
        />
        <div className="mb-2">
          <span className="font-semibold">Time Complexity:</span> O(n²) for Bubble Sort. Efficient algorithms like Merge Sort and Quick Sort have O(n log n) complexity.
        </div>
        <div className="mb-2">
          <span className="font-semibold">Real-life analogy:</span> Sorting a deck of cards by value or arranging books on a shelf alphabetically.
        </div>
        <a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Sorting Algorithms (GeeksforGeeks)
        </a>
      </CardContent>
    </Card>
  )
}

// 7. Generate All Subarrays
function GenerateSubarrays() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate All Subarrays</CardTitle>
        <CardDescription>
          List all possible contiguous segments of an array.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <p className="mb-2">
          <strong>Subarrays</strong> are contiguous parts of an array. For an array of length n, there are n*(n+1)/2 possible subarrays.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Why generate subarrays?</strong> Many problems (like finding the maximum sum subarray) require checking all possible subarrays.
          </li>
          <li>
            <strong>How?</strong> Use two nested loops: the outer loop picks the starting index, and the inner loop picks the ending index.
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">How it works:</span>
          <ul className="list-decimal pl-6 mt-1">
            <li>Pick a starting index for the subarray.</li>
            <li>For each starting index, pick all possible ending indices.</li>
            <li>Print or process the elements between the start and end indices.</li>
          </ul>
        </div>
        <CodeBlock
          language="cpp"
          code={`// Print all subarrays
void printAllSubarrays(int arr[], int n) {
    for (int i = 0; i < n; i++)
        for (int j = i; j < n; j++) {
            for (int k = i; k <= j; k++)
                std::cout << arr[k] << " ";
            std::cout << std::endl;
        }
}
`}
        />
        <div className="mb-2">
          <span className="font-semibold">Time Complexity:</span> O(n³) for printing all subarrays.
        </div>
        <div className="mb-2">
          <span className="font-semibold">Real-life analogy:</span> Think of all possible continuous segments you can cut from a ribbon.
        </div>
        <a href="https://www.geeksforgeeks.org/generate-all-the-subarrays-of-a-given-array/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Generate All Subarrays (GeeksforGeeks)
        </a>
      </CardContent>
    </Card>
  )
}

export default function BasicArrayOperations() {
  const [tab, setTab] = useState("searching")
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Basic Operations on Arrays</h2>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-4 flex flex-wrap gap-2">
          <TabsTrigger value="searching">Searching</TabsTrigger>
          <TabsTrigger value="reverse">Reverse Array</TabsTrigger>
          <TabsTrigger value="rotation">Array Rotations</TabsTrigger>
          <TabsTrigger value="unsorted">Unsorted Array Ops</TabsTrigger>
          <TabsTrigger value="sorted">Sorted Array Ops</TabsTrigger>
          <TabsTrigger value="sort">Sort Array</TabsTrigger>
          <TabsTrigger value="subarrays">Generate Subarrays</TabsTrigger>
        </TabsList>
        <TabsContent value="searching"><SearchingInArray /></TabsContent>
        <TabsContent value="reverse"><ReverseArray /></TabsContent>
        <TabsContent value="rotation"><ArrayRotations /></TabsContent>
        <TabsContent value="unsorted"><UnsortedArrayOps /></TabsContent>
        <TabsContent value="sorted"><SortedArrayOps /></TabsContent>
        <TabsContent value="sort"><SortArray /></TabsContent>
        <TabsContent value="subarrays"><GenerateSubarrays /></TabsContent>
      </Tabs>
    </div>
  )
}
