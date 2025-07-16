"use client"

import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const algorithms = [
  {
    id: "dijkstra",
    name: "Dijkstra's Algorithm",
    description: "Finds the shortest path between nodes in a weighted graph.",
    timeComplexity: "O((V + E) log V)",
    spaceComplexity: "O(V)",
    useCase: "GPS Navigation, Network Routing"
  },
  {
    id: "prim",
    name: "Prim's Algorithm",
    description: "Finds a minimum spanning tree for a weighted undirected graph.",
    timeComplexity: "O(E log V)",
    spaceComplexity: "O(V)",
    useCase: "Network Design, Clustering"
  },
  {
    id: "kruskal",
    name: "Kruskal's Algorithm",
    description: "Another approach to find minimum spanning tree.",
    timeComplexity: "O(E log E)",
    spaceComplexity: "O(V)",
    useCase: "Network Design, Circuit Design"
  }
]

export default function GraphAlgorithmsSection() {
  const [selectedAlgo, setSelectedAlgo] = useState(algorithms[0])

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h3 className="text-xl font-semibold mb-4">Graph Algorithms</h3>
        <p>
          Graph algorithms are used to solve various problems related to graph data structures.
          Here are some of the most important algorithms:
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4">
        {algorithms.map(algo => (
          <Button
            key={algo.id}
            variant={selectedAlgo.id === algo.id ? "default" : "outline"}
            onClick={() => setSelectedAlgo(algo)}
          >
            {algo.name}
          </Button>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-4">{selectedAlgo.name}</h4>
        <p className="text-gray-700 mb-4">{selectedAlgo.description}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Complexity</h5>
            <div className="space-y-2">
              <p><span className="font-medium">Time:</span> {selectedAlgo.timeComplexity}</p>
              <p><span className="font-medium">Space:</span> {selectedAlgo.spaceComplexity}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Use Cases</h5>
            <p>{selectedAlgo.useCase}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
