"use client"

import React from "react"
import Image from "next/image"

const applications = [
  {
    title: "Social Networks",
    description: "Representing user connections, friend suggestions, community detection",
    icon: "🌐",
    examples: ["Facebook", "LinkedIn", "Instagram"]
  },
  {
    title: "Navigation Systems",
    description: "Finding shortest paths, traffic optimization, route planning",
    icon: "🗺️",
    examples: ["Google Maps", "Uber", "Waze"]
  },
  {
    title: "Computer Networks",
    description: "Network topology, routing protocols, network flow",
    icon: "💻",
    examples: ["Internet", "LAN", "Network Design"]
  },
  {
    title: "Recommendation Systems",
    description: "Product recommendations, content suggestions, user preferences",
    icon: "📱",
    examples: ["Netflix", "Amazon", "Spotify"]
  }
]

export default function GraphApplicationsSection() {
  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h3 className="text-xl font-semibold mb-4">Applications of Graphs</h3>
        <p>
          Graphs are widely used in various real-world applications. Here are some key areas
          where graph data structures and algorithms play a crucial role:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {applications.map((app, index) => (
          <div key={index} className="bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">{app.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{app.title}</h4>
            <p className="text-gray-600 mb-4">{app.description}</p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="text-sm font-medium mb-2">Examples:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {app.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
