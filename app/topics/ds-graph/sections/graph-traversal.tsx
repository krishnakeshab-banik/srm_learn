"use client"

import React, { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

interface Vertex {
  id: string
  x: number
  y: number
  visited?: boolean
  active?: boolean
  inQueue?: boolean
}

interface Edge {
  from: string
  to: string
}

const initialGraph = {
  vertices: [
    { id: "A", x: 100, y: 100 },
    { id: "B", x: 200, y: 100 },
    { id: "C", x: 150, y: 200 },
    { id: "D", x: 50, y: 200 },
    { id: "E", x: 250, y: 200 }
  ],
  edges: [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "B", to: "D" },
    { from: "B", to: "E" },
    { from: "C", to: "D" },
    { from: "D", to: "E" }
  ]
}

export default function GraphTraversalSection() {
  const [vertices, setVertices] = useState<Vertex[]>(initialGraph.vertices)
  const [edges] = useState<Edge[]>(initialGraph.edges)
  const [isRunning, setIsRunning] = useState(false)
  const [algorithm, setAlgorithm] = useState<"bfs" | "dfs">("bfs")
  const [visitOrder, setVisitOrder] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const resetTraversal = () => {
    setVertices(initialGraph.vertices.map(v => ({ ...v, visited: false, active: false, inQueue: false })))
    setVisitOrder([])
    setCurrentStep(0)
    setIsRunning(false)
  }

  const getAdjList = () => {
    const adjList: Record<string, string[]> = {}
    vertices.forEach(v => adjList[v.id] = [])
    edges.forEach(({ from, to }) => {
      adjList[from].push(to)
      adjList[to].push(from)
    })
    return adjList
  }

  const bfs = (startId: string) => {
    const adjList = getAdjList()
    const visited = new Set<string>()
    const queue: string[] = [startId]
    const order: string[] = []

    while (queue.length > 0) {
      const current = queue.shift()!
      if (!visited.has(current)) {
        visited.add(current)
        order.push(current)
        adjList[current].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor)
          }
        })
      }
    }
    return order
  }

  const dfs = (startId: string) => {
    const adjList = getAdjList()
    const visited = new Set<string>()
    const order: string[] = []

    const traverse = (id: string) => {
      visited.add(id)
      order.push(id)
      adjList[id].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          traverse(neighbor)
        }
      })
    }

    traverse(startId)
    return order
  }

  const startTraversal = () => {
    const order = algorithm === "bfs" ? bfs("A") : dfs("A")
    setVisitOrder(order)
    setIsRunning(true)
    setCurrentStep(0)
  }

  useEffect(() => {
    if (isRunning && currentStep < visitOrder.length) {
      const timer = setTimeout(() => {
        setVertices(prev => 
          prev.map(v => ({
            ...v,
            visited: visitOrder.slice(0, currentStep + 1).includes(v.id),
            active: v.id === visitOrder[currentStep],
            inQueue: algorithm === "bfs" && 
              !visitOrder.slice(0, currentStep + 1).includes(v.id) &&
              edges.some(e => 
                (e.from === visitOrder[currentStep] && e.to === v.id) ||
                (e.to === visitOrder[currentStep] && e.from === v.id)
              )
          }))
        )
        setCurrentStep(prev => prev + 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isRunning, currentStep, visitOrder, algorithm, edges])

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h3 className="text-xl font-semibold mb-4">Graph Traversal</h3>
        <p>
          Graph traversal means visiting all vertices in a graph in a systematic way.
          The two main approaches are Breadth-First Search (BFS) and Depth-First Search (DFS).
        </p>
      </div>

      <Tabs value={algorithm} onValueChange={(v) => { setAlgorithm(v as "bfs" | "dfs"); resetTraversal(); }}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bfs">Breadth-First Search (BFS)</TabsTrigger>
          <TabsTrigger value="dfs">Depth-First Search (DFS)</TabsTrigger>
        </TabsList>

        <TabsContent value="bfs" className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Breadth-First Search (BFS)</h4>
            <p>Visits all vertices at the current depth before moving to vertices at the next depth level.</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Uses a queue data structure</li>
              <li>Finds shortest path in unweighted graphs</li>
              <li>Time complexity: O(V + E)</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="dfs" className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Depth-First Search (DFS)</h4>
            <p>Explores as far as possible along each branch before backtracking.</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Uses a stack (or recursion)</li>
              <li>Memory efficient for deep graphs</li>
              <li>Time complexity: O(V + E)</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">Interactive Visualization</h4>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetTraversal}
              disabled={isRunning}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button
              size="sm"
              onClick={() => isRunning ? setIsRunning(false) : startTraversal()}
            >
              {isRunning ? (
                <><Pause className="h-4 w-4 mr-1" /> Pause</>
              ) : (
                <><Play className="h-4 w-4 mr-1" /> Start</>
              )}
            </Button>
          </div>
        </div>

        <svg width="100%" height="300" className="bg-gray-50 rounded">
          {/* Draw edges */}
          {edges.map((edge, i) => {
            const from = vertices.find(v => v.id === edge.from)
            const to = vertices.find(v => v.id === edge.to)
            if (!from || !to) return null
            return (
              <line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={
                  from.visited && to.visited ? "#22C55E" :
                  (from.visited || to.visited) ? "#60A5FA" :
                  "#94A3B8"
                }
                strokeWidth="2"
              />
            )
          })}
          
          {/* Draw vertices */}
          {vertices.map((vertex) => (
            <g key={vertex.id}>
              <circle
                cx={vertex.x}
                cy={vertex.y}
                r="20"
                className={cn(
                  "transition-colors duration-300",
                  vertex.active ? "fill-yellow-400" :
                  vertex.visited ? "fill-green-500" :
                  vertex.inQueue ? "fill-blue-400" :
                  "fill-gray-400"
                )}
              />
              <text
                x={vertex.x}
                y={vertex.y}
                textAnchor="middle"
                dy=".3em"
                fill="white"
                fontSize="14"
              >
                {vertex.id}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-4 text-sm text-gray-600">
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
              Unvisited
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
              In Queue
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
              Current
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              Visited
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
