"use client"

import CodeEditor from "../../ds-array/code-editor"
import Image from "next/image"

export default function DequeSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Deque (Double Ended Queue)</h3>
      <p>
        A <b>Deque</b> (Double Ended Queue) is a linear data structure that allows insertion and deletion at both ends.
      </p>
      <Image
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220722143849/Deque.png"
        alt="Deque"
        width={500}
        height={120}
        className="rounded-lg shadow mb-6 border"
      />
      <ul className="list-disc pl-6 mb-4">
        <li>Input-restricted deque: Insertion at one end, deletion at both ends.</li>
        <li>Output-restricted deque: Deletion at one end, insertion at both ends.</li>
        <li>Used in palindrome checking, sliding window problems, undo operations.</li>
      </ul>
      <CodeEditor
        title="Deque using STL (C++)"
        language="cpp"
        initialCode={`#include <deque>
#include <iostream>
using namespace std;

int main() {
    deque<int> dq;
    dq.push_back(10);
    dq.push_front(20);
    dq.push_back(30);
    cout << dq.front() << " " << dq.back() << endl; // 20 30
    dq.pop_front();
    dq.pop_back();
    cout << dq.front() << endl; // 10
    return 0;
}`}
      />
    </section>
  )
}
