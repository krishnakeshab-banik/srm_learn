"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CodeEditor from "../../ds-array/code-editor"

export default function BinarySearchSection() {
  const [array] = useState([2, 3, 12, 23, 34, 54, 99])
  const [target, setTarget] = useState("")
  const [low, setLow] = useState(0)
  const [high, setHigh] = useState(array.length - 1)
  const [mid, setMid] = useState<number | null>(null)
  const [found, setFound] = useState<number | null>(null)
  const [searching, setSearching] = useState(false)

  const handleSearch = async () => {
    setFound(null)
    setSearching(true)
    let l = 0, h = array.length - 1
    while (l <= h) {
      let m = Math.floor((l + h) / 2)
      setLow(l)
      setHigh(h)
      setMid(m)
      await new Promise(res => setTimeout(res, 700))
      if (array[m] === Number(target)) {
        setFound(m)
        setSearching(false)
        setMid(null)
        return
      }
      if (array[m] < Number(target)) {
        l = m + 1
      } else {
        h = m - 1
      }
    }
    setSearching(false)
    setMid(null)
    setFound(-1)
  }

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Binary Search (Interactive)</h3>
      <div className="flex gap-2 mb-4">
        {array.map((num, idx) => (
          <div
            key={idx}
            className={`inline-block w-12 h-12 flex items-center justify-center rounded-lg border-2 text-lg font-bold transition-all duration-300
              ${mid === idx ? "border-yellow-500 bg-yellow-100" : ""}
              ${found === idx ? "border-green-500 bg-green-100" : ""}
              ${idx < low || idx > high ? "opacity-40" : ""}
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
          disabled={searching}
        />
        <Button onClick={handleSearch} disabled={!target || searching}>Search</Button>
      </div>
      {found === -1 && <div className="text-red-600 font-semibold">Not Found!</div>}
      {found !== null && found >= 0 && <div className="text-green-600 font-semibold">Found at index {found}</div>}
      <div className="mt-6">
        <CodeEditor
          title="Binary Search (Python)"
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
      </div>
    </section>
  )
}
