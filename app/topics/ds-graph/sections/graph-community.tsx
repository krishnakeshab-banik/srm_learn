"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function GraphCommunitySection() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Join the Graph Theory Community</h3>
        <p className="text-gray-600 mb-4">
          Connect with fellow learners, share your solutions, and learn from others.
        </p>
        <Button>Join Discussion</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-4">Recent Discussions</h4>
          <ul className="space-y-4">
            <li className="border-b pb-4">
              <h5 className="font-medium">Optimizing Dijkstra's Algorithm</h5>
              <p className="text-sm text-gray-600">Started by John Doe • 5 replies</p>
            </li>
            <li className="border-b pb-4">
              <h5 className="font-medium">Graph Coloring Problems</h5>
              <p className="text-sm text-gray-600">Started by Jane Smith • 3 replies</p>
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">📚 Graph Theory Handbook</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">🎥 Video Tutorials</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">💻 Practice Problems</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
