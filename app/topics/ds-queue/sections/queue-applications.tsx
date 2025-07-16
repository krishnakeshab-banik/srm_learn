"use client"

import Image from "next/image"

export default function QueueApplicationsSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Applications of Queue</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>CPU scheduling (Round Robin, FCFS)</li>
        <li>Printer queue management</li>
        <li>Call center systems (waiting calls)</li>
        <li>Data buffering (IO Buffers, pipes, file IO, etc.)</li>
        <li>Breadth-First Search (BFS) in graphs and trees</li>
        <li>Handling of interrupts in real-time systems</li>
        <li>Traffic system management</li>
        <li>Simulation of real-world queues (ticketing, supermarket, etc.)</li>
      </ul>
      <div className="my-4">
        <Image
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/QueueApplications.png"
          alt="Queue Applications"
          width={600}
          height={180}
          className="rounded-lg shadow border"
        />
      </div>
    </section>
  )
}
