"use client"

import CodeEditor from "../../ds-array/code-editor"
import Image from "next/image"

export default function CircularQueueSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Circular Queue</h3>
      <p>
        In a <b>Circular Queue</b>, the last position is connected back to the first, making the queue circular. This allows efficient use of space.
      </p>
      <Image
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Circularqueue.png"
        alt="Circular Queue"
        width={500}
        height={120}
        className="rounded-lg shadow mb-6 border"
      />
      <ul className="list-disc pl-6 mb-4">
        <li>Front and rear pointers wrap around using modulo operation.</li>
        <li>Prevents "false overflow" (unused space at front).</li>
        <li>Used in CPU scheduling, buffering, traffic systems.</li>
      </ul>
      <CodeEditor
        title="Circular Queue Implementation (C++)"
        language="cpp"
        initialCode={`#define MAX 1000
class CircularQueue {
    int arr[MAX];
    int front, rear;
public:
    CircularQueue() { front = rear = -1; }
    bool enqueue(int x);
    int dequeue();
    bool isEmpty();
    bool isFull();
};

bool CircularQueue::enqueue(int x) {
    if ((front == 0 && rear == MAX-1) || (rear == (front-1)%(MAX-1)))
        return false;
    else if (front == -1) {
        front = rear = 0;
        arr[rear] = x;
    } else if (rear == MAX-1 && front != 0) {
        rear = 0;
        arr[rear] = x;
    } else {
        arr[++rear] = x;
    }
    return true;
}
int CircularQueue::dequeue() {
    if (front == -1) return -1;
    int val = arr[front];
    if (front == rear) front = rear = -1;
    else if (front == MAX-1) front = 0;
    else front++;
    return val;
}
bool CircularQueue::isEmpty() { return front == -1; }
bool CircularQueue::isFull() {
    return (front == 0 && rear == MAX-1) || (rear == (front-1)%(MAX-1));
}`}
      />
    </section>
  )
}
