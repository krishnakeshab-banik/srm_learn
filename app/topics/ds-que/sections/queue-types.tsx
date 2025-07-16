"use client"

import { useState } from "react"
import Image from "next/image"

const types = [
  {
    id: "simple",
    name: "Simple Queue",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Queue.png",
    desc: (
      <>
        <p>
          <b>Simple Queue</b> (Linear Queue) is the basic FIFO queue where insertion happens at the rear and deletion at the front.
        </p>
        <ul className="list-disc pl-6">
          <li>Strict FIFO order</li>
          <li>Easy to implement</li>
          <li>Drawback: Wasted space after dequeues</li>
        </ul>
      </>
    ),
  },
  {
    id: "circular",
    name: "Circular Queue",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Circularqueue.png",
    desc: (
      <>
        <p>
          <b>Circular Queue</b> connects the last position back to the first, making the queue circular. This avoids wasted space.
        </p>
        <ul className="list-disc pl-6">
          <li>Efficient use of space</li>
          <li>Front and rear pointers wrap around</li>
          <li>Used in CPU scheduling, buffering</li>
        </ul>
      </>
    ),
  },
  {
    id: "priority",
    name: "Priority Queue",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Priorityqueue.png",
    desc: (
      <>
        <p>
          <b>Priority Queue</b> serves elements based on priority, not just order of arrival.
        </p>
        <ul className="list-disc pl-6">
          <li>Each element has a priority</li>
          <li>Higher priority elements are served first</li>
          <li>Used in OS process scheduling, Dijkstra's algorithm</li>
        </ul>
      </>
    ),
  },
  {
    id: "deque",
    name: "Deque (Double Ended Queue)",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Deque.png",
    desc: (
      <>
        <p>
          <b>Deque</b> allows insertion and deletion at both ends.
        </p>
        <ul className="list-disc pl-6">
          <li>Input-restricted: Insertion at one end, deletion at both</li>
          <li>Output-restricted: Deletion at one end, insertion at both</li>
          <li>Used in palindrome checking, sliding window problems</li>
        </ul>
      </>
    ),
  },
]

export default function QueueTypesSection() {
  const [selected, setSelected] = useState("simple")
  const type = types.find((t) => t.id === selected)
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Types of Queue</h3>
      <div className="flex gap-4 mb-6 flex-wrap">
        {types.map((t) => (
          <button
            key={t.id}
            className={`flex flex-col items-center border rounded-lg p-2 w-36 transition-all ${
              selected === t.id ? "border-primary bg-blue-50" : "border-gray-200 bg-white"
            } hover:border-primary`}
            onClick={() => setSelected(t.id)}
          >
            <Image src={t.img} alt={t.name} width={64} height={64} className="mb-2 rounded" />
            <span className="font-semibold text-xs">{t.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-bold mb-2">{type?.name}</h4>
        <Image src={type?.img || ""} alt={type?.name || ""} width={320} height={120} className="mb-2 rounded shadow" />
        <div>{type?.desc}</div>
      </div>
    </section>
  )
}
