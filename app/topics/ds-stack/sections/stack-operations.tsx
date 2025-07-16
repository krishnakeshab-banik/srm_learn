// Stack Operations Section - extracted and adapted from https://www.algorithmroom.com/dsa/stack-operations
"use client"

import CodeEditor from "../../ds-array/code-editor"

export default function StackOperationsSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Stack Operations</h3>
      <p className="mb-4">
        Stack supports four main operations:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Push:</b> Add an element to the top of the stack.</li>
        <li><b>Pop:</b> Remove the top element from the stack.</li>
        <li><b>Peek/Top:</b> View the top element without removing it.</li>
        <li><b>isEmpty:</b> Check if the stack is empty.</li>
      </ul>
      <div className="mb-6">
        <b>Visualization:</b>
        <img
          src="https://www.algorithmroom.com/_next/image?url=%2Fassets%2Fstack%2Fstack-operations.gif&w=640&q=75"
          alt="Stack Operations Animation"
          className="rounded shadow my-4"
          width={400}
          height={180}
        />
      </div>
      <CodeEditor
        title="Stack Operations Example (C++)"
        language="cpp"
        initialCode={`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;
    s.push(10); // Push
    s.push(20);
    cout << s.top() << endl; // Peek (20)
    s.pop(); // Pop
    cout << s.top() << endl; // Peek (10)
    cout << (s.empty() ? "Empty" : "Not Empty") << endl;
    return 0;
}`}
      />
      <div className="mt-4">
        <b>Watch:</b> <a href="https://www.youtube.com/watch?v=zwb3GmNAtFk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Stack Operations Explained (YouTube)</a>
      </div>
    </section>
  )
}
