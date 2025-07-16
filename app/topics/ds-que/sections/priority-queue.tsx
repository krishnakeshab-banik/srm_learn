"use client"

import CodeEditor from "../../ds-array/code-editor"
import Image from "next/image"

export default function PriorityQueueSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Priority Queue</h3>
      <p>
        A <b>Priority Queue</b> is a special type of queue where each element is associated with a priority and is served according to its priority.
      </p>
      <Image
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Priorityqueue.png"
        alt="Priority Queue"
        width={500}
        height={120}
        className="rounded-lg shadow mb-6 border"
      />
      <ul className="list-disc pl-6 mb-4">
        <li>Elements with higher priority are served before lower priority ones.</li>
        <li>If two elements have the same priority, they are served according to their order in the queue.</li>
        <li>Used in OS process scheduling, Dijkstra's algorithm, bandwidth management.</li>
      </ul>
      <CodeEditor
        title="Priority Queue using STL (C++)"
        language="cpp"
        initialCode={`#include <queue>
#include <vector>
#include <iostream>
using namespace std;

int main() {
    priority_queue<int> pq;
    pq.push(10);
    pq.push(30);
    pq.push(20);
    cout << pq.top() << endl; // 30 (highest)
    pq.pop();
    cout << pq.top() << endl; // 20
    return 0;
}`}
      />
      <div className="mt-4">
        <b>Fun Fact:</b> Priority queues are often implemented using heaps!
      </div>
    </section>
  )
}
