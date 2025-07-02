"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface ArrayBar {
  value: number
  isComparing: boolean
  isSwapping: boolean
}

export default function BubbleSortAnimation() {
  const [array, setArray] = useState<ArrayBar[]>([
    { value: 5, isComparing: false, isSwapping: false },
    { value: 1, isComparing: false, isSwapping: false },
    { value: 4, isComparing: false, isSwapping: false },
    { value: 2, isComparing: false, isSwapping: false },
    { value: 8, isComparing: false, isSwapping: false },
  ])
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const animationTimeoutRef = useRef<NodeJS.Timeout>()
  const currentStepRef = useRef(0)

  const resetArray = () => {
    setArray([
      { value: 5, isComparing: false, isSwapping: false },
      { value: 1, isComparing: false, isSwapping: false },
      { value: 4, isComparing: false, isSwapping: false },
      { value: 2, isComparing: false, isSwapping: false },
      { value: 8, isComparing: false, isSwapping: false },
    ])
    currentStepRef.current = 0
    setIsPlaying(false)
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }
  }

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const bubbleSort = async () => {
    const n = array.length
    let newArray = [...array]

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isPlaying) return // Stop if animation is paused

        // Highlight elements being compared
        newArray = newArray.map((item, index) => ({
          ...item,
          isComparing: index === j || index === j + 1,
          isSwapping: false,
        }))
        setArray(newArray)
        await sleep(500 / speed)

        if (newArray[j].value > newArray[j + 1].value) {
          // Highlight elements being swapped
          newArray = newArray.map((item, index) => ({
            ...item,
            isSwapping: index === j || index === j + 1,
          }))
          setArray(newArray)
          await sleep(500 / speed)

          // Perform swap
          const temp = newArray[j]
          newArray[j] = newArray[j + 1]
          newArray[j + 1] = temp
          setArray([...newArray])
          await sleep(500 / speed)
        }

        // Reset highlights
        newArray = newArray.map((item) => ({
          ...item,
          isComparing: false,
          isSwapping: false,
        }))
        setArray(newArray)
      }
    }

    setIsPlaying(false)
  }

  useEffect(() => {
    if (isPlaying) {
      bubbleSort()
    }
  }, [isPlaying]) // Removed bubbleSort from dependencies

  return (
    <div className="space-y-6">
      <div className="h-64 flex items-end justify-center gap-2 bg-gray-50 rounded-lg p-4">
        {array.map((item, index) => (
          <div
            key={index}
            className={`w-16 transition-all duration-300 flex items-center justify-center text-white font-bold ${
              item.isComparing ? "bg-yellow-400" : item.isSwapping ? "bg-red-400" : "bg-blue-400"
            }`}
            style={{ height: `${(item.value / 8) * 100}%` }}
          >
            {item.value}
          </div>
        ))}
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

