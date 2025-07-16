"use client"

import CodeEditor from "../../ds-array/code-editor"

export default function SearchingPracticeSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Practice Questions</h3>
      <div className="space-y-8">
        <div>
          <b>Q1:</b> Implement linear search in Python.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`def linear_search(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1`}
            />
          </details>
        </div>
        <div>
          <b>Q2:</b> Implement binary search in Python.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1`}
            />
          </details>
        </div>
        <div>
          <b>Q3:</b> Write a function to count the number of occurrences of a value in an array.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`def count_occurrences(arr, x):
    count = 0
    for val in arr:
        if val == x:
            count += 1
    return count`}
            />
          </details>
        </div>
      </div>
    </section>
  )
}
