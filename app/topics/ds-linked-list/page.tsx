"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { linkedListSections } from "./sidebar"
import UserContentSection from "./user-content"
import InteractiveQuiz from "./quiz-component"
import { ArrowLeft, Menu } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import CodeEditor from "@/app/topics/ds-array/code-editor"
import { practiceQuestions } from "./practice-questions"

function CodeBlock({ code, language = "cpp" }: { code: string; language?: string }) {
  return (
    <div className="my-4">
      <pre className={`language-${language} bg-gray-900 text-green-200 p-4 rounded-lg overflow-x-auto text-sm`}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold mb-4 mt-8 border-b pb-2">{children}</h3>
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg font-semibold mb-2 mt-6">{children}</h4>
}

function VisualArrow() {
  return (
    <svg width="40" height="24" className="mx-2">
      <line x1="0" y1="12" x2="40" y2="12" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="#2563eb" />
        </marker>
      </defs>
    </svg>
  )
}

function LinkedListVisualization() {
  // Simple visualization for singly linked list
  return (
    <div className="flex items-center gap-4 my-6 overflow-x-auto">
      {["10", "20", "30", "40"].map((val, idx, arr) => (
        <div key={val} className="flex items-center">
          <div className="bg-blue-100 border border-blue-400 rounded-lg px-6 py-3 flex flex-col items-center shadow">
            <span className="font-bold text-blue-700">{val}</span>
            <span className="text-xs text-gray-500">Node</span>
          </div>
          {idx < arr.length - 1 && <VisualArrow />}
        </div>
      ))}
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 border border-gray-400 rounded-lg px-6 py-3 flex flex-col items-center shadow">
          <span className="font-bold text-gray-500">NULL</span>
          <span className="text-xs text-gray-400">End</span>
        </div>
      </div>
    </div>
  )
}

export default function DSLinkedListContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")

  const content = {
    introduction: {
      title: "Introduction to Linked List",
      content: (
        <>
          <SectionHeading>What is a Linked List?</SectionHeading>
          <p className="mb-4">
            A <span className="font-bold text-blue-700">Linked List</span> is a linear data structure where elements (nodes) are not stored at contiguous memory locations. Each node contains a value and a pointer (reference) to the next node in the sequence. Unlike arrays, linked lists can easily grow and shrink in size, making them ideal for dynamic memory management.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <SubHeading>Key Characteristics</SubHeading>
            <ul className="list-disc pl-6 space-y-1">
              <li>Each node contains <span className="font-semibold">data</span> and a <span className="font-semibold">pointer</span> to the next node.</li>
              <li>Nodes are not stored in contiguous memory.</li>
              <li>Dynamic size: can grow or shrink during execution.</li>
              <li>Efficient insertion and deletion from anywhere in the list.</li>
              <li>Can be used to implement complex data structures like stacks, queues, graphs, and polynomials.</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <SubHeading>Real-World Analogy</SubHeading>
            <p>
              Imagine a treasure hunt where each clue (node) gives you the location of the next clue. You can't skip ahead; you must follow the chain one by one. Similarly, in a linked list, you must follow each node's pointer to reach the next node.
            </p>
            <p className="mt-2">
              Another analogy: Think of a train where each coach (node) is connected to the next. You can add or remove coaches easily, but to reach a specific coach, you must pass through all previous ones.
            </p>
          </div>
          <div className="mb-6">
            <SubHeading>Visualization</SubHeading>
            <LinkedListVisualization />
            <p className="text-xs text-gray-500 mt-2">Each box is a node. The arrow shows the pointer to the next node. The last node points to NULL.</p>
          </div>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/Linkedlist.png"
            alt="Linked List Illustration"
            width={700}
            height={180}
            className="rounded-lg shadow-md mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
        </>
      ),
    },
    singly: {
      title: "Singly Linked List",
      content: (
        <>
          <SectionHeading>Singly Linked List</SectionHeading>
          <p>
            A singly linked list is a linear data structure where each node points only to the next node. Traversal is possible only in one direction.
          </p>
          <div className="flex items-center gap-4 my-6 overflow-x-auto">
            {["A", "B", "C", "D"].map((val, idx, arr) => (
              <div key={val} className="flex items-center">
                <div className="bg-blue-100 border border-blue-400 rounded-lg px-6 py-3 flex flex-col items-center shadow">
                  <span className="font-bold text-blue-700">{val}</span>
                  <span className="text-xs text-gray-500">Node</span>
                </div>
                {idx < arr.length - 1 && <VisualArrow />}
              </div>
            ))}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 border border-gray-400 rounded-lg px-6 py-3 flex flex-col items-center shadow">
                <span className="font-bold text-gray-500">NULL</span>
                <span className="text-xs text-gray-400">End</span>
              </div>
            </div>
          </div>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/Linkedlist.png"
            alt="Singly Linked List"
            width={600}
            height={120}
            className="rounded-lg shadow-md mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
          <SubHeading>Insertion in Singly Linked List</SubHeading>
          <p>
            Insertion can be done at the beginning, end, or after a given node. Let's see how to insert at the beginning:
          </p>
          <CodeBlock
            code={`// Insert at beginning
void push(Node** head_ref, int new_data) {
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = *head_ref;
    *head_ref = new_node;
}`}/>
          <p>
            <strong>Logic:</strong> Create a new node, set its next to the current head, and update head to the new node.
          </p>
          <SubHeading>Deletion in Singly Linked List</SubHeading>
          <p>
            To delete a node by value:
          </p>
          <CodeBlock
            code={`// Delete first occurrence of key
void deleteNode(Node** head_ref, int key) {
    Node* temp = *head_ref, *prev = nullptr;
    if (temp != nullptr && temp->data == key) {
        *head_ref = temp->next;
        delete temp;
        return;
    }
    while (temp != nullptr && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }
    if (temp == nullptr) return;
    prev->next = temp->next;
    delete temp;
}`}/>
          <p>
            <strong>Logic:</strong> Traverse to find the node, update the previous node's next pointer, and delete the node.
          </p>
          <SubHeading>Practice Question</SubHeading>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Insert a node at the end of a singly linked list</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Write a function to insert a node with value <code>x</code> at the end of a singly linked list.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeBlock
                  code={`void insertEnd(Node** head_ref, int x) {
    Node* new_node = new Node();
    new_node->data = x;
    new_node->next = nullptr;
    if (*head_ref == nullptr) {
        *head_ref = new_node;
        return;
    }
    Node* temp = *head_ref;
    while (temp->next != nullptr)
        temp = temp->next;
    temp->next = new_node;
}`}
                />
                <p className="mt-2 text-sm text-gray-600">Traverse to the last node and set its next to the new node.</p>
              </details>
            </CardContent>
          </Card>
        </>
      ),
    },
    doubly: {
      title: "Doubly Linked List",
      content: (
        <>
          <SectionHeading>Doubly Linked List</SectionHeading>
          <p>
            In a doubly linked list, each node has pointers to both the next and previous nodes. This allows traversal in both directions and easier deletion/insertion at both ends.
          </p>
          <div className="flex items-center gap-4 my-6 overflow-x-auto">
            {["A", "B", "C", "D"].map((val, idx, arr) => (
              <div key={val} className="flex items-center">
                <div className="bg-green-100 border border-green-400 rounded-lg px-6 py-3 flex flex-col items-center shadow">
                  <span className="font-bold text-green-700">{val}</span>
                  <span className="text-xs text-gray-500">Node</span>
                </div>
                {idx < arr.length - 1 && (
                  <svg width="40" height="24" className="mx-2">
                    <line x1="0" y1="12" x2="40" y2="12" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    <line x1="40" y1="16" x2="0" y2="16" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                    <defs>
                      <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#16a34a" />
                      </marker>
                    </defs>
                  </svg>
                )}
              </div>
            ))}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 border border-gray-400 rounded-lg px-6 py-3 flex flex-col items-center shadow">
                <span className="font-bold text-gray-500">NULL</span>
                <span className="text-xs text-gray-400">End</span>
              </div>
            </div>
          </div>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/DoublyLinkedList.png"
            alt="Doubly Linked List"
            width={600}
            height={120}
            className="rounded-lg shadow-md mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
          <SubHeading>Concept</SubHeading>
          <ul className="list-disc pl-6 mb-4">
            <li>Each node has <code>prev</code> and <code>next</code> pointers.</li>
            <li>Allows traversal in both directions.</li>
            <li>Insertion and deletion at both ends are efficient.</li>
            <li>Requires extra memory for the previous pointer.</li>
          </ul>
          <SubHeading>Insertion Example</SubHeading>
          <CodeBlock
            code={`// Insert at beginning
void push(Node** head_ref, int new_data) {
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = *head_ref;
    new_node->prev = nullptr;
    if (*head_ref != nullptr)
        (*head_ref)->prev = new_node;
    *head_ref = new_node;
}`}
          />
          <SubHeading>Deletion Example</SubHeading>
          <CodeBlock
            code={`// Delete a node
void deleteNode(Node** head_ref, Node* del) {
    if (*head_ref == nullptr || del == nullptr)
        return;
    if (*head_ref == del)
        *head_ref = del->next;
    if (del->next != nullptr)
        del->next->prev = del->prev;
    if (del->prev != nullptr)
        del->prev->next = del->next;
    delete del;
}`}
          />
          <SubHeading>Practice Question</SubHeading>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Insert a node at the end of a doubly linked list</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Write a function to insert a node with value <code>x</code> at the end of a doubly linked list.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeBlock
                  code={`void insertEnd(Node** head_ref, int x) {
    Node* new_node = new Node();
    new_node->data = x;
    new_node->next = nullptr;
    if (*head_ref == nullptr) {
        new_node->prev = nullptr;
        *head_ref = new_node;
        return;
    }
    Node* temp = *head_ref;
    while (temp->next != nullptr)
        temp = temp->next;
    temp->next = new_node;
    new_node->prev = temp;
}`}
                />
                <p className="mt-2 text-sm text-gray-600">Traverse to the last node, set its next to new node, and new node's prev to last node.</p>
              </details>
            </CardContent>
          </Card>
        </>
      ),
    },
    circular: {
      title: "Circular Linked List",
      content: (
        <>
          <SectionHeading>Circular Linked List</SectionHeading>
          <p>
            In a circular linked list, the last node points back to the first node, forming a circle. This can be implemented for both singly and doubly linked lists.
          </p>
          <div className="flex items-center gap-4 my-6 overflow-x-auto">
            {["A", "B", "C", "D"].map((val, idx, arr) => (
              <div key={val} className="flex items-center">
                <div className="bg-purple-100 border border-purple-400 rounded-lg px-6 py-3 flex flex-col items-center shadow">
                  <span className="font-bold text-purple-700">{val}</span>
                  <span className="text-xs text-gray-500">Node</span>
                </div>
                {idx < arr.length - 1 ? (
                  <svg width="40" height="24" className="mx-2">
                    <line x1="0" y1="12" x2="40" y2="12" stroke="#a21caf" strokeWidth="2" markerEnd="url(#arrowhead3)" />
                    <defs>
                      <marker id="arrowhead3" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#a21caf" />
                      </marker>
                    </defs>
                  </svg>
                ) : (
                  <svg width="40" height="40" className="mx-2">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="#a21caf" strokeWidth="2" />
                    <polygon points="36,20 32,16 32,24" fill="#a21caf" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/CircularLinkedList.png"
            alt="Circular Linked List"
            width={600}
            height={120}
            className="rounded-lg shadow-md mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
          <SubHeading>Concept</SubHeading>
          <ul className="list-disc pl-6 mb-4">
            <li>The last node's next pointer points to the head node.</li>
            <li>Traversal can start from any node and loop back to the start.</li>
            <li>Used in round-robin scheduling, playlist looping, and buffer management.</li>
          </ul>
          <SubHeading>Insertion Example</SubHeading>
          <CodeBlock
            code={`// Insert at end in circular singly linked list
void insertEnd(Node** head_ref, int x) {
    Node* new_node = new Node();
    new_node->data = x;
    if (*head_ref == nullptr) {
        new_node->next = new_node;
        *head_ref = new_node;
        return;
    }
    Node* temp = *head_ref;
    while (temp->next != *head_ref)
        temp = temp->next;
    temp->next = new_node;
    new_node->next = *head_ref;
}`}
          />
          <SubHeading>Deletion Example</SubHeading>
          <CodeBlock
            code={`// Delete a node in circular singly linked list
void deleteNode(Node** head_ref, int key) {
    if (*head_ref == nullptr) return;
    Node *curr = *head_ref, *prev = nullptr;
    while (curr->data != key) {
        if (curr->next == *head_ref) return;
        prev = curr;
        curr = curr->next;
    }
    if (curr == *head_ref && curr->next == *head_ref) {
        *head_ref = nullptr;
        delete curr;
        return;
    }
    if (curr == *head_ref) {
        prev = *head_ref;
        while (prev->next != *head_ref)
            prev = prev->next;
        *head_ref = curr->next;
        prev->next = *head_ref;
        delete curr;
    } else if (curr->next == *head_ref) {
        prev->next = *head_ref;
        delete curr;
    } else {
        prev->next = curr->next;
        delete curr;
    }
}`}
          />
          <SubHeading>Practice Question</SubHeading>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Insert a node at the beginning of a circular singly linked list</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Write a function to insert a node with value <code>x</code> at the beginning of a circular singly linked list.</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeBlock
                  code={`void insertBegin(Node** head_ref, int x) {
    Node* new_node = new Node();
    new_node->data = x;
    if (*head_ref == nullptr) {
        new_node->next = new_node;
        *head_ref = new_node;
        return;
    }
    Node* temp = *head_ref;
    while (temp->next != *head_ref)
        temp = temp->next;
    temp->next = new_node;
    new_node->next = *head_ref;
    *head_ref = new_node;
}`}
                />
                <p className="mt-2 text-sm text-gray-600">Update the last node's next to new node, set new node's next to head, and update head.</p>
              </details>
            </CardContent>
          </Card>
        </>
      ),
    },
    representation: {
      title: "Memory Representation",
      content: (
        <>
          <SectionHeading>Memory Representation of Linked List</SectionHeading>
          <p className="mb-4">
            Unlike arrays, linked lists do not require contiguous memory. Each node is dynamically allocated and can be scattered in memory. The <span className="font-semibold">next</span> pointer connects the nodes.
          </p>
          <CodeBlock
            code={`struct Node {
    int data;
    Node* next;
};`}
          />
          <ul className="list-disc pl-6 mb-4">
            <li>Each node is created using dynamic memory allocation (e.g., <code>new</code> in C++).</li>
            <li>The <span className="font-semibold">head</span> pointer stores the address of the first node.</li>
            <li>The last node's next pointer is <code>nullptr</code> (or <code>NULL</code>).</li>
          </ul>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Memory-Representation-LinkedList.png"
            alt="Memory Representation"
            width={700}
            height={180}
            className="rounded-lg shadow-md mb-6 border"
          />
        </>
      ),
    },
    operations: {
      title: "Basic Operations",
      content: (
        <>
          <SectionHeading>Basic Operations on Linked List</SectionHeading>
          <div className="space-y-8">
            <div>
              <SubHeading>Traversal</SubHeading>
              <p>
                Traversal means visiting every node in the list, usually to display or process the data. You start from the head and follow each pointer until you reach the end (NULL).
              </p>
              <CodeBlock
                code={`void printList(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
}`}
              />
            </div>
            <div>
              <SubHeading>Insertion</SubHeading>
              <p>
                Insertion can be done at the beginning, end, or any position. For example, inserting at the beginning is very efficient (O(1)), while inserting at the end requires traversal (O(n)) unless you maintain a tail pointer.
              </p>
              <CodeBlock
                code={`// Insert at beginning
void push(Node** head_ref, int new_data) {
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = *head_ref;
    *head_ref = new_node;
}`}
              />
            </div>
            <div>
              <SubHeading>Deletion</SubHeading>
              <p>
                Deletion removes a node by value or position. You must update the previous node's pointer to skip the deleted node.
              </p>
              <CodeBlock
                code={`// Delete first occurrence of key
void deleteNode(Node** head_ref, int key) {
    Node* temp = *head_ref, *prev = nullptr;
    if (temp != nullptr && temp->data == key) {
        *head_ref = temp->next;
        delete temp;
        return;
    }
    while (temp != nullptr && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }
    if (temp == nullptr) return;
    prev->next = temp->next;
    delete temp;
}`}
              />
            </div>
            <div>
              <SubHeading>Searching</SubHeading>
              <p>
                To search for a value, start from the head and check each node's data. If found, return true; otherwise, continue until the end.
              </p>
              <CodeBlock
                code={`bool search(Node* head, int x) {
    Node* current = head;
    while (current != nullptr) {
        if (current->data == x)
            return true;
        current = current->next;
    }
    return false;
}`}
              />
            </div>
            <div>
              <SubHeading>Reversing</SubHeading>
              <p>
                Reversing a linked list means changing the direction of the pointers so the last node becomes the head.
              </p>
              <CodeBlock
                code={`Node* reverse(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;
    while (current != nullptr) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev;
}`}
              />
            </div>
            <div>
              <SubHeading>Polynomial Arithmetic (Advanced)</SubHeading>
              <p>
                Linked lists can represent polynomials, where each node contains a coefficient and exponent. You can add, subtract, or multiply polynomials using linked list operations. (See <a href="https://ds1-iiith.vlabs.ac.in/exp/poly-arithmetic/index.html" target="_blank" className="text-blue-600 underline">this interactive demo</a>.)
              </p>
            </div>
          </div>
        </>
      ),
    },
    advantages: {
      title: "Advantages & Disadvantages",
      content: (
        <>
          <SectionHeading>Advantages</SectionHeading>
          <ul className="list-disc pl-6 mb-4">
            <li>Dynamic size: can grow or shrink at runtime.</li>
            <li>Efficient insertions/deletions (especially at the beginning or middle).</li>
            <li>No memory wastage due to over-allocation.</li>
            <li>Can easily implement advanced data structures (stacks, queues, graphs, polynomials).</li>
            <li>Useful for applications where memory allocation/deallocation is frequent.</li>
            <li>Nodes can be scattered in memory, reducing fragmentation issues.</li>
          </ul>
          <SectionHeading>Disadvantages</SectionHeading>
          <ul className="list-disc pl-6 mb-4">
            <li>Random access is not possible (must traverse from head).</li>
            <li>Extra memory for pointers in each node.</li>
            <li>More complex code for insertion/deletion compared to arrays.</li>
            <li>Cache locality is poor compared to arrays, which may affect performance.</li>
            <li>Reverse traversal is not possible in singly linked lists.</li>
          </ul>
        </>
      ),
    },
    applications: {
      title: "Applications",
      content: (
        <>
          <SectionHeading>Applications of Linked List</SectionHeading>
          <ul className="list-disc pl-6 mb-4">
            <li>Dynamic memory allocation (e.g., free lists in memory management).</li>
            <li>Implementation of stacks and queues.</li>
            <li>Graph adjacency representation.</li>
            <li>Maintaining directory of names, polynomial arithmetic, etc.</li>
            <li>Undo/Redo functionality in editors.</li>
            <li>Browser history navigation (back/forward).</li>
            <li>Music playlist management.</li>
            <li>Polynomial arithmetic and sparse matrix representation.</li>
          </ul>
        </>
      ),
    },
    complexity: {
      title: "Time & Space Complexity",
      content: (
        <>
          <SectionHeading>Time & Space Complexity</SectionHeading>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-2">Operation</th>
                  <th className="border border-gray-300 px-4 py-2">Singly Linked List</th>
                  <th className="border border-gray-300 px-4 py-2">Doubly Linked List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Access/Search</td>
                  <td className="border border-gray-300 px-4 py-2">O(n)</td>
                  <td className="border border-gray-300 px-4 py-2">O(n)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Insertion (at head)</td>
                  <td className="border border-gray-300 px-4 py-2">O(1)</td>
                  <td className="border border-gray-300 px-4 py-2">O(1)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Insertion (at tail)</td>
                  <td className="border border-gray-300 px-4 py-2">O(n)</td>
                  <td className="border border-gray-300 px-4 py-2">O(1) (if tail pointer maintained)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Deletion (at head)</td>
                  <td className="border border-gray-300 px-4 py-2">O(1)</td>
                  <td className="border border-gray-300 px-4 py-2">O(1)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Deletion (at tail)</td>
                  <td className="border border-gray-300 px-4 py-2">O(n)</td>
                  <td className="border border-gray-300 px-4 py-2">O(1) (if tail pointer maintained)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Space</td>
                  <td className="border border-gray-300 px-4 py-2">O(n)</td>
                  <td className="border border-gray-300 px-4 py-2">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    quiz: {
      title: "Linked List Quiz",
      content: (
        <InteractiveQuiz />
      ),
    },
    "community-content": {
      title: "Community Content",
      content: (
        <UserContentSection />
      ),
    },
    "practice-questions": {
      title: "Linked List Practice Questions",
      content: (
        <>
          <SectionHeading>Practice Questions</SectionHeading>
          <p className="mb-4">Test your understanding of linked lists by solving these coding questions. Write your code in the editor and check if your output matches the expected result. Click "Show Solution" to see a detailed explanation.</p>
          <div className="space-y-8">
            {practiceQuestions.map((q, idx) => (
              <Card key={idx} className="mb-4">
                <CardHeader>
                  <CardTitle>{idx + 1}. {q.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{q.description}</p>
                  <CodeEditor
                    language="cpp"
                    initialCode={q.starterCode}
                    expectedOutput={q.expectedOutput}
                    showRunButton
                  />
                  <details className="mt-4">
                    <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                    <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">{q.solution}</pre>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/courses/ds1/topics">
              <span className="sr-only">Back</span>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">Linked List Data Structure</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-gray-50 border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-4rem)] mt-4",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <ScrollArea className="h-full py-6 px-4">
            <nav className="space-y-2">
              {linkedListSections.map((section) => (
                <button
                  key={section.id}
                  className={cn(
                    "w-full px-4 py-2 text-sm rounded-md text-left flex items-center",
                    activeSection === section.id ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
                  )}
                  onClick={() => {
                    setActiveSection(section.id)
                    setIsSidebarOpen(false)
                  }}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
              <button
                className={cn(
                  "w-full px-4 py-2 text-sm rounded-md text-left flex items-center",
                  activeSection === "practice-questions" ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
                )}
                onClick={() => {
                  setActiveSection("practice-questions")
                  setIsSidebarOpen(false)
                }}
              >
                <span className="mr-2">📝</span>
                Practice Questions
              </button>
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-6 md:pl-8">
          <article className="prose prose-sm max-w-none">
            {content[activeSection as keyof typeof content] && (
              <>
                <h2 className="text-3xl font-extrabold mb-8 text-primary">{content[activeSection as keyof typeof content].title}</h2>
                {content[activeSection as keyof typeof content].content}
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  )
}

