"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

interface GraphType {
  id: string
  name: string
  description: string
  properties: string[]
  example: {
    vertices: { id: string; x: number; y: number }[]
    edges: { from: string; to: string; directed?: boolean }[]
  }
}

const graphTypes: GraphType[] = [
  {
    id: "undirected",
    name: "Undirected Graph",
    description: "A graph where edges have no direction. If vertex A is connected to B, then B is connected to A.",
    properties: [
      "Edges have no direction",
      "Symmetric relationships",
      "Example: Friend connections in social networks"
    ],
    example: {
      vertices: [
        { id: "A", x: 100, y: 100 },
        { id: "B", x: 200, y: 100 },
        { id: "C", x: 150, y: 200 }
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "C", to: "A" }
      ]
    }
  },
  {
    id: "directed",
    name: "Directed Graph (Digraph)",
    description: "A graph where edges have direction. If A points to B, B might not point to A.",
    properties: [
      "Edges have direction",
      "One-way relationships",
      "Example: Web pages and links"
    ],
    example: {
      vertices: [
        { id: "A", x: 100, y: 100 },
        { id: "B", x: 200, y: 100 },
        { id: "C", x: 150, y: 200 }
      ],
      edges: [
        { from: "A", to: "B", directed: true },
        { from: "B", to: "C", directed: true },
        { from: "C", to: "A", directed: true }
      ]
    }
  },
  {
    id: "weighted",
    name: "Weighted Graph",
    description: "A graph where edges have weights or costs associated with them.",
    properties: [
      "Edges have weights/costs",
      "Used for optimization problems",
      "Example: Road networks with distances"
    ],
    example: {
      vertices: [
        { id: "A", x: 100, y: 100 },
        { id: "B", x: 200, y: 100 },
        { id: "C", x: 150, y: 200 }
      ],
      edges: [
        { from: "A", to: "B", weight: 5 },
        { from: "B", to: "C", weight: 3 },
        { from: "C", to: "A", weight: 4 }
      ]
    }
  }
]

export default function GraphTypesSection() {
  const [selectedType, setSelectedType] = useState(graphTypes[0])

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {graphTypes.map(type => (
          <Button
            key={type.id}
            variant={selectedType.id === type.id ? "default" : "outline"}
            onClick={() => setSelectedType(type)}
          >
            {type.name}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">{selectedType.name}</h3>
          <p className="text-gray-600 mb-4">{selectedType.description}</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Properties:</h4>
            <ul className="list-disc pl-6">
              {selectedType.properties.map((prop, i) => (
                <li key={i}>{prop}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">Interactive Example</h4>
          <svg width="100%" height="250" className="overflow-visible">
            {selectedType.example.edges.map((edge, i) => {
              const from = selectedType.example.vertices.find(v => v.id === edge.from)
              const to = selectedType.example.vertices.find(v => v.id === edge.to)
              if (!from || !to) return null
              
              if (edge.directed) {
                return (
                  <g key={i} className="hover:scale-110 transition-transform">
                    <defs>
                      <marker
                        id={`arrowhead-${i}`}
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#4B5563" />
                      </marker>
                    </defs>
                    <line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="#4B5563"
                      strokeWidth="2"
                      markerEnd={`url(#arrowhead-${i})`}
                      className="transition-all hover:stroke-blue-500"
                    />
                  </g>
                )
              }

              return (
                <line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#4B5563"
                  strokeWidth="2"
                  className="transition-all hover:stroke-blue-500 hover:scale-110"
                />
              )
            })}
            
            {selectedType.example.vertices.map((vertex) => (
              <g key={vertex.id} className="transition-transform hover:scale-110">
                <circle
                  cx={vertex.x}
                  cy={vertex.y}
                  r="20"
                  className="fill-blue-400 hover:fill-blue-500 transition-colors"
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
    </div>
  )
}
