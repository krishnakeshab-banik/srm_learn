"use client"

import QuizComponent from "../../ds-array/quiz-component"

export default function GraphQuizSection() {
  return (
    <QuizComponent
      title="Test Your Knowledge of Graphs"
      questions={[
        {
          question: "What is a vertex in a graph?",
          options: [
            "A connection between two nodes",
            "A fundamental unit of a graph that holds data",
            "A path in the graph",
            "A cycle in the graph"
          ],
          correctAnswer: 1
        },
        {
          question: "Which traversal uses a queue data structure?",
          options: ["DFS", "BFS", "Inorder", "Preorder"],
          correctAnswer: 1
        },
        {
          question: "What is the time complexity of Dijkstra's algorithm with a binary heap?",
          options: ["O(V)", "O(E)", "O((V + E) log V)", "O(V^2)"],
          correctAnswer: 2
        },
        {
          question: "Which representation is better for sparse graphs?",
          options: ["Adjacency Matrix", "Adjacency List", "Edge List", "Incidence Matrix"],
          correctAnswer: 1
        },
        {
          question: "What is a minimum spanning tree?",
          options: [
            "Shortest path between two vertices",
            "Tree with minimum number of vertices",
            "Tree connecting all vertices with minimum total edge weight",
            "Tree with minimum height"
          ],
          correctAnswer: 2
        }
      ]}
    />
  )
}
