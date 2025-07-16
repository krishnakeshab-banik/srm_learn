"use client"

import CodeEditor from "../../ds-array/code-editor"

export default function QueuePracticeSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Queue Practice Questions</h3>
      <div className="space-y-8">
        <div>
          <b>Q1:</b> Implement a queue using two stacks.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`class Queue:
    def __init__(self):
        self.s1 = []
        self.s2 = []
    def enqueue(self, x):
        self.s1.append(x)
    def dequeue(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        if not self.s2:
            return -1
        return self.s2.pop()`}
            />
          </details>
        </div>
        <div>
          <b>Q2:</b> Check if a given queue of integers is a palindrome.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`from collections import deque
def is_palindrome_queue(q):
    arr = list(q)
    return arr == arr[::-1]`}
            />
          </details>
        </div>
        <div>
          <b>Q3:</b> Implement a circular queue with fixed size.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`class CircularQueue:
    def __init__(self, k):
        self.q = [None]*k
        self.size = k
        self.front = self.rear = -1
    def enqueue(self, x):
        if (self.rear+1)%self.size == self.front:
            return False
        if self.front == -1:
            self.front = self.rear = 0
        else:
            self.rear = (self.rear+1)%self.size
        self.q[self.rear] = x
        return True
    def dequeue(self):
        if self.front == -1:
            return -1
        val = self.q[self.front]
        if self.front == self.rear:
            self.front = self.rear = -1
        else:
            self.front = (self.front+1)%self.size
        return val`}
            />
          </details>
        </div>
        <div>
          <b>Q4:</b> Implement a priority queue using heapq in Python.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`import heapq
pq = []
heapq.heappush(pq, (2, "task2"))
heapq.heappush(pq, (1, "task1"))
heapq.heappush(pq, (3, "task3"))
print(heapq.heappop(pq))  # (1, "task1")`}
            />
          </details>
        </div>
        <div>
          <b>Q5:</b> Reverse the first k elements of a queue.<br />
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
            <CodeEditor
              language="python"
              initialCode={`from collections import deque
def reverse_k(q, k):
    stack = []
    for _ in range(k):
        stack.append(q.popleft())
    while stack:
        q.appendleft(stack.pop())
    for _ in range(len(q)-k):
        q.append(q.popleft())`}
            />
          </details>
        </div>
      </div>
    </section>
  )
}
