"use client"

import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const MatrixExample = () => {
  const matrix = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[300px] border-collapse">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-50"></th>
            {["A", "B", "C", "D"].map((vertex) => (
              <th key={vertex} className="border p-2 bg-gray-50">
                {vertex}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              <th className="border p-2 bg-gray-50">{["A", "B", "C", "D"][i]}</th>
              {row.map((cell, j) => (
                <td key={j} className="border p-2 text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const ListExample = () => {
  const adjList = {
    A: ["B", "D"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["A", "C"],
  }

  return (
    <div className="space-y-2 font-mono bg-gray-50 p-4 rounded-lg">
      {Object.entries(adjList).map(([vertex, neighbors]) => (
        <div key={vertex}>
          {vertex} → {neighbors.join(" → ")}
        </div>
      ))}
    </div>
  )
}

export default function GraphRepresentationSection() {
  const [activeTab, setActiveTab] = useState("matrix")

  return (
    <div className="space-y-6">
      <section className="prose max-w-none">
        <h3 className="text-xl font-semibold mb-4">Graph Representation</h3>
        <p>
          There are several ways to represent a graph in computer memory. The two most common representations are:
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="matrix">Adjacency Matrix</TabsTrigger>
            <TabsTrigger value="list">Adjacency List</TabsTrigger>
          </TabsList>

          <TabsContent value="matrix" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Adjacency Matrix</h4>
              <p>
                A 2D array where matrix[i][j] represents an edge from vertex i to vertex j. For unweighted graphs,
                1 indicates an edge exists, and 0 indicates no edge.
              </p>
            </div>

            <div className="my-4">
              <h5 className="font-semibold mb-2">Example:</h5>
              <MatrixExample />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Advantages</h5>
                <ul className="list-disc pl-4">
                  <li>Fast edge lookup O(1)</li>
                  <li>Simple to implement</li>
                  <li>Easy to represent weighted edges</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Disadvantages</h5>
                <ul className="list-disc pl-4">
                  <li>Uses O(V²) space</li>
                  <li>Wastes space for sparse graphs</li>
                  <li>Adding a vertex is O(V²)</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Adjacency List</h4>
              <p>
                An array of linked lists where each list contains all vertices adjacent to a particular vertex. Each vertex
                stores a list of its neighboring vertices.
              </p>
            </div>

            <div className="my-4">
              <h5 className="font-semibold mb-2">Example:</h5>
              <ListExample />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Advantages</h5>
                <ul className="list-disc pl-4">
                  <li>Space efficient for sparse graphs</li>
                  <li>Faster to iterate over edges</li>
                  <li>Adding vertices is easier</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Disadvantages</h5>
                <ul className="list-disc pl-4">
                  <li>Edge lookup is O(V)</li>
                  <li>More complex implementation</li>
                  <li>Less space efficient for dense graphs</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">When to Use Which?</h4>
          <ul className="list-disc pl-4">
            <li>Use Adjacency Matrix when:
              <ul className="list-disc pl-4 mt-1">
                <li>Graph is dense (many edges)</li>
                <li>Need quick edge weight lookups</li>
                <li>Memory is not a constraint</li>
              </ul>
            </li>
            <li className="mt-2">Use Adjacency List when:
              <ul className="list-disc pl-4 mt-1">
                <li>Graph is sparse (few edges)</li>
                <li>Need to iterate over edges quickly</li>
                <li>Memory efficiency is important</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
