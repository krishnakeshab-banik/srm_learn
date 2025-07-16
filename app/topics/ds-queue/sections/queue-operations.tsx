"use client"

import { useState } from "react"

function QueueVisualization() {
  const [queue, setQueue] = useState<number[]>([])
  const [input, setInput] = useState("")
  const enqueue = () => {
    if (input.trim() && !isNaN(Number(input))) {
      setQueue([...queue, Number(input)])
      setInput("")
    }
  }
  const dequeue = () => {
    setQueue(queue.slice(1))
  }
  return (
    <div className="my-4">
      <div className="flex gap-2 items-end h-20 mb-2">
        {queue.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="bg-blue-400 border border-blue-700 rounded-lg w-12 h-12 flex items-center justify-center font-bold text-white shadow">
              {val}
            </div>
            {idx === 0 && <span className="text-xs text-gray-500 mt-1">Front</span>}
            {idx === queue.length - 1 && <span className="text-xs text-gray-500 mt-1">Rear</span>}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border rounded px-2 py-1 w-24"
          placeholder="Value"
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={enqueue}>Enqueue</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={dequeue} disabled={queue.length === 0}>Dequeue</button>
      </div>
      <div className="mt-2 text-xs text-gray-500">FIFO: First-In, First-Out</div>
    </div>
  )
}

export default function QueueOperationsSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Queue Operations</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Enqueue:</b> Insert an element at the rear.</li>
        <li><b>Dequeue:</b> Remove an element from the front.</li>
        <li><b>Front (Peek):</b> View the front element.</li>
        <li><b>IsEmpty:</b> Check if the queue is empty.</li>
        <li><b>IsFull:</b> (For fixed-size queues) Check if the queue is full.</li>
      </ul>
      <QueueVisualization />
      <div className="mb-2">
        <b>Time Complexity:</b> O(1) for enqueue and dequeue.
      </div>
      <div className="mb-2">
        <b>Space Complexity:</b> O(n) for n elements.
      </div>
    </section>
  )
}
