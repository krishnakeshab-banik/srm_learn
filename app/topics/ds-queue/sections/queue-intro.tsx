"use client"

import Image from "next/image"

export default function QueueIntroSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">What is a Queue?</h3>
      <p>
        A <b>Queue</b> is a linear data structure that follows the <b>FIFO (First-In, First-Out)</b> principle. The element inserted first is the first one to be removed.
      </p>
      <div className="my-4">
        <Image
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Queue.png"
          alt="Queue Illustration"
          width={500}
          height={120}
          className="rounded-lg shadow border"
        />
      </div>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <b>Front:</b> The first element of the queue (to be removed first).
        </li>
        <li>
          <b>Rear:</b> The last element of the queue (where new elements are added).
        </li>
      </ul>
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <b>Real-life analogy:</b> Think of a queue as a line of people waiting for a bus. The person who gets in line first is the first to board the bus.
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg mb-4">
        <b>Queue vs Stack:</b> Queue is FIFO (First-In, First-Out), Stack is LIFO (Last-In, First-Out).
      </div>
      <div className="mt-4">
        <b>Watch:</b>{" "}
        <a
          href="https://www.youtube.com/watch?v=okr-XE8yTO8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Queue Data Structure Explained (YouTube)
        </a>
      </div>
    </section>
  )
}
