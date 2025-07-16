"use client"

import CodeEditor from "../../ds-array/code-editor"
import Image from "next/image"

export default function QueueArraySection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Queue Implementation using Array</h3>
      <p>
        The simplest way to implement a queue is using an array. We maintain two pointers, <b>front</b> and <b>rear</b>, to keep track of the first and last elements.
      </p>
      <Image
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Queue.png"
        alt="Queue Array"
        width={500}
        height={120}
        className="rounded-lg shadow mb-6 border"
      />
      <CodeEditor
        title="Queue Array Implementation (C++)"
        language="cpp"
        initialCode={`#define MAX 1000
class Queue {
    int front, rear;
    int arr[MAX];
public:
    Queue() { front = rear = -1; }
    bool enqueue(int x);
    int dequeue();
    int peek();
    bool isEmpty();
};

bool Queue::enqueue(int x) {
    if (rear == MAX - 1) return false;
    if (front == -1) front = 0;
    arr[++rear] = x;
    return true;
}
int Queue::dequeue() {
    if (front == -1 || front > rear) return -1;
    int val = arr[front++];
    if (front > rear) front = rear = -1;
    return val;
}
int Queue::peek() {
    if (front == -1 || front > rear) return -1;
    return arr[front];
}
bool Queue::isEmpty() {
    return front == -1;
}`}
      />
      <div className="mt-4">
        <b>Drawback:</b> After several dequeues, unused space at the front cannot be reused (solved by circular queue).
      </div>
    </section>
  )
}
