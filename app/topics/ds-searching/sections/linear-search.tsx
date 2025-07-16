"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CodeEditor from "../../ds-array/code-editor"

export default function LinearSearchSection() {
  const [array, setArray] = useState([12, 34, 54, 2, 3, 99, 23])
  const [target, setTarget] = useState("")
  const [highlight, setHighlight] = useState<number | null>(null)
  const [found, setFound] = useState<number | null>(null)

  const handleSearch = async () => {
    setFound(null)
    for (let i = 0; i < array.length; i++) {
      setHighlight(i)
      await new Promise(res => setTimeout(res, 500))
      if (array[i] === Number(target)) {
        setFound(i)
        setHighlight(null)
        return
      }
    }
    setHighlight(null)
    setFound(-1)
  }

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Linear Search (Interactive)</h3>
      <div className="flex gap-2 mb-4">
        {array.map((num, idx) => (
          <div
            key={idx}
            className={`inline-block w-12 h-12 flex items-center justify-center rounded-lg border-2 text-lg font-bold transition-all duration-300
              ${highlight === idx ? "border-yellow-500 bg-yellow-100" : ""}
              ${found === idx ? "border-green-500 bg-green-100" : ""}
            `}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={target}
          onChange={e => setTarget(e.target.value)}
          className="border rounded px-2 py-1 w-32"
          placeholder="Enter value to search"
        />
        <Button onClick={handleSearch} disabled={!target}>Search</Button>
      </div>
      {found === -1 && <div className="text-red-600 font-semibold">Not Found!</div>}
      {found !== null && found >= 0 && <div className="text-green-600 font-semibold">Found at index {found}</div>}
      <div className="mt-6">
        <CodeEditor
          title="Linear Search (Python)"
          language="python"
          initialCode={`def linear_search(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1`}
        />
      </div>
    </section>
  )
}
