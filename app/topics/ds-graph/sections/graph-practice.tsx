"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeEditor from "../../ds-array/code-editor"

const practiceQuestions = [
  {
    id: "q1",
    title: "Implement BFS",
    difficulty: "Medium",
    description: "Implement Breadth-First Search for a graph represented using adjacency list.",
    solution: `def bfs(graph, start):
    visited = set()
    queue = [start]
    visited.add(start)
    
    while queue:
        vertex = queue.pop(0)
        print(vertex, end=" ")
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
    testCases: [
      "graph = {0: [1, 2], 1: [2], 2: [0, 3], 3: [3]}",
      "bfs(graph, 2)  # Output: 2 0 3 1"
    ]
  },
  {
    id: "q2",
    title: "Number of Islands",
    difficulty: "Medium",
    description: "Find the number of islands in a 2D grid. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    solution: `def numIslands(grid):
    if not grid:
        return 0
        
    def dfs(i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    return count`,
    testCases: [
      `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
      "numIslands(grid)  # Output: 3"
    ]
  }
]

export default function GraphPracticeSection() {
  return (
    <div className="space-y-6">
      {practiceQuestions.map((question) => (
        <div key={question.id} className="border rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{question.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm ${
              question.difficulty === "Easy" ? "bg-green-100 text-green-800" :
              question.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
              "bg-red-100 text-red-800"
            }`}>
              {question.difficulty}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{question.description}</p>
          
          <div className="space-y-4">
            <CodeEditor
              title="Solution"
              language="python"
              initialCode={question.solution}
            />
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Test Cases:</h4>
              <pre className="text-sm bg-gray-100 p-2 rounded">
                {question.testCases.join("\n")}
              </pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
