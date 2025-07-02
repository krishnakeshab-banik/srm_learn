"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface ArrayItem {
  value: number
  isComparing: boolean
  isSwapping: boolean
  isHeapified: boolean
  isSorted: boolean
}

export default function HeapSortAnimation() {
  const [array, setArray] = useState<ArrayItem[]>([
    { value: 5, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
    { value: 1, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
    { value: 4, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
    { value: 2, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
    { value: 8, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
    { value: 3, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
  ])
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [comment, setComment] = useState("Click 'Start' to begin the Heap Sort animation.")
  const animationTimeoutRef = useRef<NodeJS.Timeout>()

  const resetArray = () => {
    setArray([
      { value: 5, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
      { value: 1, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
      { value: 4, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
      { value: 2, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
      { value: 8, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
      { value: 3, isComparing: false, isSwapping: false, isHeapified: false, isSorted: false },
    ])
    setIsPlaying(false)
    setComment("Click 'Start' to begin the Heap Sort animation.")
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }
  }

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const heapify = async (n: number, i: number) => {
    if (!isPlaying) return

    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    setComment(`Heapifying subtree rooted at index ${i}`)
    await sleep(500 / speed)

    // Highlight nodes being compared
    let newArray = [...array]
    newArray[i] = { ...newArray[i], isComparing: true }
    setArray(newArray)
    await sleep(500 / speed)

    // Check if left child exists and is greater than root
    if (left < n) {
      newArray = [...array]
      newArray[left] = { ...newArray[left], isComparing: true }
      setArray(newArray)
      setComment(`Comparing root (${array[i].value}) with left child (${array[left].value})`)
      await sleep(500 / speed)

      if (array[left].value > array[largest].value) {
        setComment(`Left child ${array[left].value} is larger than current largest ${array[largest].value}`)
        largest = left
      } else {
        setComment(`Left child ${array[left].value} is not larger than current largest ${array[largest].value}`)
      }
      await sleep(500 / speed)
    }

    // Check if right child exists and is greater than largest so far
    if (right < n) {
      newArray = [...array]
      newArray[right] = { ...newArray[right], isComparing: true }
      setArray(newArray)
      setComment(`Comparing current largest (${array[largest].value}) with right child (${array[right].value})`)
      await sleep(500 / speed)

      if (array[right].value > array[largest].value) {
        setComment(`Right child ${array[right].value} is larger than current largest ${array[largest].value}`)
        largest = right
      } else {
        setComment(`Right child ${array[right].value} is not larger than current largest ${array[largest].value}`)
      }
      await sleep(500 / speed)
    }

    // Reset comparison highlighting
    newArray = [...array]
    if (i < n) newArray[i].isComparing = false
    if (left < n) newArray[left].isComparing = false
    if (right < n) newArray[right].isComparing = false
    setArray(newArray)

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
      setComment(`Swapping ${array[i].value} with ${array[largest].value}`)

      // Swap elements
      newArray = [...array]
      newArray[i] = { ...array[largest], isSwapping: true }
      newArray[largest] = { ...array[i], isSwapping: true }
      ;[newArray[i], newArray[largest]] = [newArray[largest], newArray[i]]
      setArray(newArray)
      await sleep(500 / speed)

      // Reset swap highlighting
      newArray = [...array]
      newArray[i].isSwapping = false
      newArray[largest].isSwapping = false
      setArray(newArray)

      await heapify(n, largest)
    } else {
      // Mark as heapified if no swap needed
      newArray = [...array]
      newArray[i] = { ...newArray[i], isHeapified: true }
      setArray(newArray)
      setComment(`Node at index ${i} is now heapified`)
      await sleep(500 / speed)
    }
  }

  const heapSort = async () => {
    setComment("Building max heap...")

    // Build max heap
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
      await heapify(array.length, i)
    }

    setComment("Max heap built. Now extracting elements one by one.")
    await sleep(1000 / speed)

    // Extract elements from heap one by one
    for (let i = array.length - 1; i > 0; i--) {
      if (!isPlaying) return

      // Move current root to end
      setComment(`Moving current root (${array[0].value}) to the end of the array`)
      let newArray = [...array]
      newArray[0] = { ...array[i], isSwapping: true }
      newArray[i] = { ...array[0], isSwapping: true }
      ;[newArray[0], newArray[i]] = [newArray[i], newArray[0]]
      setArray(newArray)
      await sleep(500 / speed)

      // Mark as sorted
      newArray = [...array]
      newArray[i] = { ...newArray[i], isSorted: true, isSwapping: false, isHeapified: false }
      setArray(newArray)
      setComment(`Element ${array[i].value} is now at its correct sorted position`)
      await sleep(500 / speed)

      // Call heapify on the reduced heap
      setComment(`Heapifying the reduced heap (size ${i})`)
      await heapify(i, 0)
    }

    // Mark first element as sorted
    const newArray = [...array]
    newArray[0] = { ...newArray[0], isSorted: true, isHeapified: false }
    setArray(newArray)
    setComment("Heap Sort completed! The array is now fully sorted.")
  }

  useEffect(() => {
    if (isPlaying) {
      const runSort = async () => {
        await heapSort()
        setIsPlaying(false)
      }
      runSort()
    }
  }, [isPlaying])

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        {/* Array visualization */}
        <div className="flex justify-center gap-2 mb-6">
          {array.map((item, index) => (
            <div
              key={index}
              className={`w-12 h-12 flex items-center justify-center text-white font-bold rounded-md transition-all duration-300 ${
                item.isComparing
                  ? "bg-yellow-400"
                  : item.isSwapping
                    ? "bg-red-400"
                    : item.isHeapified
                      ? "bg-purple-400"
                      : item.isSorted
                        ? "bg-green-400"
                        : "bg-blue-400"
              }`}
            >
              {item.value}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 mb-6 text-xs flex-wrap">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-sm mr-1"></div>
            <span>Unsorted</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm mr-1"></div>
            <span>Comparing</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 rounded-sm mr-1"></div>
            <span>Swapping</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-400 rounded-sm mr-1"></div>
            <span>Heapified</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded-sm mr-1"></div>
            <span>Sorted</span>
          </div>
        </div>

        {/* Comment box */}
        <div className="p-4 bg-gray-100 rounded-md min-h-[80px]">
          <h4 className="text-sm font-medium mb-2">Explanation</h4>
          <p>{comment}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-4">
          <Button onClick={() => setIsPlaying(!isPlaying)} variant="outline">
            {isPlaying ? "Pause" : "Start"}
          </Button>
          <Button onClick={resetArray} variant="outline">
            Reset
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">Speed:</span>
          <Slider
            value={[speed]}
            onValueChange={(value) => setSpeed(value[0])}
            min={0.5}
            max={2}
            step={0.5}
            className="w-48"
          />
          <span className="text-sm">{speed}x</span>
        </div>
      </div>
    </div>
  )
}

