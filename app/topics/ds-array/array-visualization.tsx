"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"

interface ArrayElement {
  value: number | string
  isHighlighted: boolean
  isAccessing: boolean
}

export default function ArrayVisualization() {
  const [array, setArray] = useState<ArrayElement[]>([
    { value: 10, isHighlighted: false, isAccessing: false },
    { value: 20, isHighlighted: false, isAccessing: false },
    { value: 30, isHighlighted: false, isAccessing: false },
    { value: 40, isHighlighted: false, isAccessing: false },
    { value: 50, isHighlighted: false, isAccessing: false },
  ])
  const [newValue, setNewValue] = useState<string>("")
  const [accessIndex, setAccessIndex] = useState<string>("")
  const [isAccessing, setIsAccessing] = useState(false)
  const [accessSpeed, setAccessSpeed] = useState(1)
  const [message, setMessage] = useState<string>("")

  const addElement = () => {
    if (newValue.trim() === "") return
    
    const value = isNaN(Number(newValue)) ? newValue : Number(newValue)
    setArray([...array, { value, isHighlighted: true, isAccessing: false }])
    setNewValue("")
    
    // Briefly highlight the new element
    setTimeout(() => {
      setArray(prev => 
        prev.map((item, idx) => idx === prev.length - 1 
          ? { ...item, isHighlighted: false } 
          : item
        )
      )
    }, 1000)
    
    setMessage(`Added element: ${value}`)
    setTimeout(() => setMessage(""), 2000)
  }

  const removeElement = (index: number) => {
    setMessage(`Removed element: ${array[index].value}`)
    setArray(array.filter((_, idx) => idx !== index))
    setTimeout(() => setMessage(""), 2000)
  }

  const accessElement = async () => {
    const index = parseInt(accessIndex)
    if (isNaN(index) || index < 0 || index >= array.length) {
      setMessage("Invalid index!")
      setTimeout(() => setMessage(""), 2000)
      return
    }

    setIsAccessing(true)
    setMessage(`Accessing element at index ${index}...`)

    // Visualize array access
    for (let i = 0; i <= index; i++) {
      setArray(prev => 
        prev.map((item, idx) => ({
          ...item,
          isAccessing: idx === i
        }))
      )
      await new Promise(resolve => setTimeout(resolve, 500 / accessSpeed))
    }

    setMessage(`Found element: ${array[index].value} at index ${index}`)
    
    // Reset the visualization
    setTimeout(() => {
      setArray(prev => 
        prev.map(item => ({ ...item, isAccessing: false }))
      )
      setIsAccessing(false)
      setTimeout(() => setMessage(""), 2000)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Array Visualization</h3>
        
        <div className="flex items-center gap-2 mb-6 overflow-x-auto py-2">
          {array.map((item, index) => (
            <div 
              key={index}
              className={`
                min-w-16 h-16 flex flex-col items-center justify-center rounded-md border-2 transition-all duration-300
                ${item.isHighlighted ? 'border-green-500 bg-green-50' : 
                  item.isAccessing ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300 bg-white'}
              `}
            >
              <div className="font-mono text-lg">{item.value}</div>
              <div className="text-xs text-gray-500">[{index}]</div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5 absolute -top-2 -right-2 bg-white rounded-full border"
                onClick={() => removeElement(index)}
              >
                <Trash2 className="h-3 w-3 text-red-500" />
              </Button>
            </div>
          ))}
        </div>

        {message && (
          <div className="bg-blue-50 p-2 rounded-md text-sm text-center mb-4">
            {message}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Add Element</h4>
            <div className="flex gap-2">
              <Input 
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="Enter value"
                className="w-full"
              />
              <Button onClick={addElement} size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Access Element</h4>
            <div className="flex gap-2">
              <Input 
                value={accessIndex}
                onChange={(e) => setAccessIndex(e.target.value)}
                placeholder="Enter index"
                type="number"
                min={0}
                max={array.length - 1}
                className="w-full"
                disabled={isAccessing}
              />
              <Button onClick={accessElement} size="sm" disabled={isAccessing}>
                Access
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Animation Speed</h4>
          <div className="flex items-center gap-4">
            <span className="text-xs">Slow</span>
            <Slider
              value={[accessSpeed]}
              onValueChange={(value) => setAccessSpeed(value[0])}
              min={0.5}
              max={2}
              step={0.5}
              className="w-full"
            />
            <span className="text-xs">Fast</span>
          </div>
        </div>
      </div>
    </div>
  )
}