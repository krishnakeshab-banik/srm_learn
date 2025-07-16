"use client"

import CodeEditor from "../../ds-array/code-editor"
import Image from "next/image"

export default function QueueLinkedListSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Queue Implementation using Linked List</h3>
      <p>
        A queue can also be implemented using a singly linked list. The <b>front</b> is the head, and the <b>rear</b> is the tail.
      </p>
      <Image
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/QueueLinkedList.png"
        alt="Queue Linked List"
        width={500}
        height={120}
        className="rounded-lg shadow mb-6 border"
      />
      <CodeEditor
        title="Queue Linked List Implementation (C++)"
        language="cpp"
        initialCode={`struct Node {
    int data;
    Node* next;
    Node(int x) : data(x), next(nullptr) {}
};

class Queue {
    Node *front, *rear;
public:
    Queue() : front(nullptr), rear(nullptr) {}
    void enqueue(int x) {
        Node* node = new Node(x);
        if (!rear) {
            front = rear = node;
        } else {
            rear->next = node;
            rear = node;
        }
    }
    int dequeue() {
        if (!front) return -1;
        int val = front->data;
        Node* temp = front;
        front = front->next;
        if (!front) rear = nullptr;
        delete temp;
        return val;
    }
    int peek() {
        return front ? front->data : -1;
    }
    bool isEmpty() {
        return front == nullptr;
    }
};`}
      />
      <div className="mt-4">
        <b>Advantage:</b> No fixed size; queue can grow dynamically.
      </div>
    </section>
  )
}
