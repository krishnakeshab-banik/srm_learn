"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Vertex {
  id: string
  x: number
  y: number
}

interface Edge {
  from: string
  to: string
}

export default function GraphIntroSection() {
  const [vertices, setVertices] = React.useState<Vertex[]>([
    { id: "A", x: 100, y: 100 },
    { id: "B", x: 200, y: 100 },
    { id: "C", x: 150, y: 200 },
    { id: "D", x: 50, y: 200 },
  ])

  const [edges, setEdges] = React.useState<Edge[]>([
    { from: "A", to: "B" },
    { from: "B", to: "C" },
    { from: "C", to: "D" },
    { from: "D", to: "A" },
  ])

  return (
    <div className="space-y-6">
      <section className="prose max-w-none">
        <h3 className="text-xl font-semibold mb-4">What is a Graph?</h3>
        <p>
          A graph is a non-linear data structure consisting of vertices (or nodes) and edges that connect these vertices. 
          It's used to represent relationships between different objects.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg my-4">
          <h4 className="font-semibold">Key Components:</h4>
          <ul className="list-disc pl-6">
            <li><strong>Vertex/Node:</strong> A fundamental unit of a graph that holds data</li>
            <li><strong>Edge:</strong> A connection between two vertices</li>
            <li><strong>Adjacency:</strong> Two vertices are adjacent if there's an edge connecting them</li>
          </ul>
        </div>

        <div className="my-6">
          <h4 className="font-semibold mb-2">Interactive Graph Visualization</h4>
          <div className="border rounded-lg p-4 bg-gray-50 relative h-[300px]">
            <svg width="100%" height="100%" className="absolute inset-0">
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
                    stroke="#4B5563"
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
                    fill="#60A5FA"
                    className="transition-colors hover:fill-blue-400"
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
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold">Real-world Applications:</h4>
            <ul className="list-disc pl-6">
              <li>Social Networks (Friends connections)</li>
              <li>GPS and Navigation (Road networks)</li>
              <li>Computer Networks (Network topology)</li>
              <li>Recommendation Systems</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold">Why Learn Graphs?</h4>
            <ul className="list-disc pl-6">
              <li>Model complex relationships</li>
              <li>Solve real-world problems</li>
              <li>Essential for many algorithms</li>
              <li>Used in modern technologies</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
