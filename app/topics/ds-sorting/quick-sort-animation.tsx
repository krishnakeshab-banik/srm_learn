"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface ArrayItem {
  value: number
  isComparing: boolean
  isSwapping: boolean
  isPivot: boolean
  isSorted: boolean
}

export default function QuickSortAnimation() {
  const [array, setArray] = useState<ArrayItem[]>([
    { value: 5, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
    { value: 1, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
    { value: 4, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
    { value: 2, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
    { value: 8, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
    { value: 3, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
  ])
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [comment, setComment] = useState("Click 'Start' to begin the Quick Sort animation.")
  const animationTimeoutRef = useRef<NodeJS.Timeout>()

  const resetArray = () => {
    setArray([
      { value: 5, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
      { value: 1, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
      { value: 4, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
      { value: 2, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
      { value: 8, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
      { value: 3, isComparing: false, isSwapping: false, isPivot: false, isSorted: false },
    ])
    setIsPlaying(false)
    setComment("Click 'Start' to begin the Quick Sort animation.")
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }
  }

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const quickSort = async (start: number, end: number) => {
    if (start >= end) return

    setComment(`Sorting subarray from index ${start} to ${end}`)
    await sleep(1000 / speed)

    // Choose pivot as last element
    const pivotValue = array[end].value
    let newArray = [...array]
    newArray[end] = { ...newArray[end], isPivot: true }
    setArray(newArray)
    setComment(`Selected pivot: ${pivotValue} (at index ${end})`)
    await sleep(1000 / speed)

    let i = start - 1

    for (let j = start; j < end; j++) {
      if (!isPlaying) return

      // Highlight element being compared with pivot
      newArray = [...array]
      newArray[j] = { ...newArray[j], isComparing: true }
      setArray(newArray)
      setComment(`Comparing element at index ${j} (${array[j].value}) with pivot ${pivotValue}`)
      await sleep(1000 / speed)

      if (array[j].value < pivotValue) {
        i++
        // Swap elements
        setComment(
          `${array[j].value} is less than pivot ${pivotValue}, swapping with element at index ${i} (${array[i].value})`,
        )
        newArray = [...array]
        newArray[i] = { ...array[j], isSwapping: true }
        newArray[j] = { ...array[i], isSwapping: true }
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        setArray(newArray)
        await sleep(1000 / speed)

        // Reset swap highlighting
        newArray = [...array]
        newArray[i].isSwapping = false
        newArray[j].isSwapping = false
        setArray(newArray)
      } else {
        setComment(`${array[j].value} is greater than or equal to pivot ${pivotValue}, no swap needed`)
        await sleep(500 / speed)
      }

      // Reset comparison highlighting
      newArray = [...array]
      newArray[j].isComparing = false
      setArray(newArray)
    }

    // Place pivot in correct position
    setComment(`Placing pivot ${pivotValue} at its correct position (index ${i + 1})`)
    newArray = [...array]
    newArray[i + 1] = { ...array[end], isSwapping: true }
    newArray[end] = { ...array[i + 1], isSwapping: true }
    ;[newArray[i + 1], newArray[end]] = [newArray[end], newArray[i + 1]]
    setArray(newArray)
    await sleep(1000 / speed)

    // Mark pivot position as sorted
    newArray = [...array]
    newArray[i + 1] = { ...newArray[i + 1], isSorted: true, isPivot: false, isSwapping: false }
    setArray(newArray)
    setComment(`Pivot ${pivotValue} is now at its correct sorted position (index ${i + 1})`)
    await sleep(1000 / speed)

    // Recursively sort the sub-arrays
    await quickSort(start, i)
    await quickSort(i + 2, end)
  }

  useEffect(() => {
    if (isPlaying) {
      const runSort = async () => {
        await quickSort(0, array.length - 1)

        // Mark all elements as sorted when complete
        const newArray = [...array]
        newArray.forEach((item) => {
          item.isSorted = true
          item.isComparing = false
          item.isSwapping = false
          item.isPivot = false
        })
        setArray(newArray)
        setComment("Quick Sort completed! The array is now fully sorted.")
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
                item.isPivot
                  ? "bg-purple-500"
                  : item.isComparing
                    ? "bg-yellow-400"
                    : item.isSwapping
                      ? "bg-red-400"
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
        <div className="flex justify-center gap-4 mb-6 text-xs">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-sm mr-1"></div>
            <span>Unsorted</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-500 rounded-sm mr-1"></div>
            <span>Pivot</span>
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

