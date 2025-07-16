"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Menu, Code, BookText, FileCode2, BarChart2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import CodeEditor from "../ds-array/code-editor"
import QuizComponent from "../ds-sorting/quiz-component"
import StackOperationsSection from "./sections/stack-operations"
import InfixPrefixPostfixSection from "./sections/infix-prefix-postfix"
import CommunityContentSection from "./sections/community-content"

// Visualization: Simple Stack Animation
function StackVisualization() {
  const [stack, setStack] = useState<number[]>([10, 20, 30])
  const [input, setInput] = useState("")
  const push = () => {
    if (input.trim() && !isNaN(Number(input))) {
      setStack([...stack, Number(input)])
      setInput("")
    }
  }
  const pop = () => {
    setStack(stack.slice(0, -1))
  }
  return (
    <div className="my-6">
      <div className="flex gap-2 items-end h-48">
        {stack.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="bg-blue-200 border border-blue-500 rounded-t-lg rounded-b-none w-16 h-12 flex items-center justify-center font-bold text-blue-800 shadow">
              {val}
            </div>
            <div className="w-16 h-2 bg-blue-500"></div>
          </div>
        ))}
        <div className="flex flex-col items-center">
          <div className="w-16 h-12"></div>
          <div className="w-16 h-2 bg-gray-300"></div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border rounded px-2 py-1 w-24"
          placeholder="Value"
        />
        <Button size="sm" onClick={push}>Push</Button>
        <Button size="sm" variant="destructive" onClick={pop} disabled={stack.length === 0}>Pop</Button>
      </div>
      <div className="mt-2 text-xs text-gray-500">Top of Stack → Rightmost block</div>
    </div>
  )
}

const sections = [
  { id: "introduction", title: "Introduction to Stack", icon: <BookText className="h-4 w-4 mr-2" /> },
  { id: "stack-array", title: "Stack Array Implementation", icon: <List className="h-4 w-4 mr-2" /> },
  { id: "stack-linkedlist", title: "Stack Linked List Implementation", icon: <List className="h-4 w-4 mr-2" /> },
  { id: "stack-deque", title: "Stack using Deque", icon: <List className="h-4 w-4 mr-2" /> },
  { id: "operations", title: "Stack Operations", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "infix-prefix-postfix", title: "Infix, Prefix & Postfix", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "applications", title: "Applications of Stack", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "implementations", title: "Implementations in Languages", icon: <Code className="h-4 w-4 mr-2" /> },
  { id: "quiz", title: "Quiz", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
  { id: "practice", title: "Practice Questions", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "community", title: "Community Content", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
]

const content = {
  introduction: {
    title: "Introduction to Stack",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">What is a Stack?</h3>
          <p className="mb-4">
            A <b>Stack</b> is a linear data structure that follows the <b>LIFO (Last-In, First-Out)</b> principle. The element inserted last is the first one to be removed. Think of a stack of plates: you add (push) and remove (pop) plates from the top.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Key Operations</h4>
            <ul className="list-disc pl-6">
              <li><b>Push:</b> Add an element to the top of the stack</li>
              <li><b>Pop:</b> Remove the top element</li>
              <li><b>Peek/Top:</b> View the top element without removing it</li>
              <li><b>isEmpty:</b> Check if the stack is empty</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Real-World Analogy</h4>
            <p>
              Imagine a stack of books. You can only add or remove the top book. The last book you placed is the first you can remove.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Stack Visualization</h4>
            <StackVisualization />
          </div>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/Stack.png"
            alt="Stack Illustration"
            width={600}
            height={200}
            className="rounded-lg shadow-md mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
        </section>
      </>
    ),
  },
  "stack-array": {
    title: "Stack Array Implementation",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Stack Implementation using Array</h3>
          <p className="mb-4">
            The simplest way to implement a stack is using an array. We maintain a variable <b>top</b> to keep track of the index of the top element.
          </p>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/StackArray.png"
            alt="Stack Array"
            width={500}
            height={120}
            className="rounded-lg shadow mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
          <CodeEditor
            title="Stack Array Implementation (C++)"
            language="cpp"
            initialCode={`#define MAX 1000
class Stack {
    int top;
public:
    int a[MAX];
    Stack() { top = -1; }
    bool push(int x);
    int pop();
    int peek();
    bool isEmpty();
};

bool Stack::push(int x) {
    if (top >= (MAX - 1)) return false;
    a[++top] = x;
    return true;
}
int Stack::pop() {
    if (top < 0) return -1;
    return a[top--];
}
int Stack::peek() {
    if (top < 0) return -1;
    return a[top];
}
bool Stack::isEmpty() {
    return (top < 0);
}`}
          />
          <div className="mt-4">
            <b>Question:</b> What happens if you try to push when the stack is full? <br />
            <span className="text-sm text-gray-600">Answer: Stack Overflow occurs.</span>
          </div>
        </section>
      </>
    ),
  },
  "stack-linkedlist": {
    title: "Stack Linked List Implementation",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Stack Implementation using Linked List</h3>
          <p className="mb-4">
            A stack can also be implemented using a singly linked list. The top of the stack is the head of the list.
          </p>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/StackLinkedList.png"
            alt="Stack Linked List"
            width={500}
            height={120}
            className="rounded-lg shadow mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
          <CodeEditor
            title="Stack Linked List Implementation (C++)"
            language="cpp"
            initialCode={`struct StackNode {
    int data;
    StackNode* next;
    StackNode(int x) : data(x), next(nullptr) {}
};

class Stack {
    StackNode* top;
public:
    Stack() : top(nullptr) {}
    void push(int x) {
        StackNode* node = new StackNode(x);
        node->next = top;
        top = node;
    }
    int pop() {
        if (!top) return -1;
        int res = top->data;
        StackNode* temp = top;
        top = top->next;
        delete temp;
        return res;
    }
    int peek() {
        return top ? top->data : -1;
    }
    bool isEmpty() {
        return top == nullptr;
    }
};`}
          />
          <div className="mt-4">
            <b>Question:</b> What is the advantage of using a linked list for stack? <br />
            <span className="text-sm text-gray-600">Answer: No fixed size; stack can grow dynamically.</span>
          </div>
        </section>
      </>
    ),
  },
  "stack-deque": {
    title: "Stack Implementation using Deque",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Stack using Deque</h3>
          <p className="mb-4">
            In C++ STL, Java, Python, and JavaScript, stacks can be implemented using built-in deque (double-ended queue) structures for efficient push/pop.
          </p>
          <CodeEditor
            title="Stack using Deque (Python)"
            language="python"
            initialCode={`from collections import deque
stack = deque()
stack.append(10)  # push
stack.append(20)
print(stack.pop())  # pop -> 20
print(stack[-1])    # peek -> 10
print(len(stack) == 0)  # isEmpty`}
          />
          <CodeEditor
            title="Stack using Deque (C++)"
            language="cpp"
            initialCode={`#include <deque>
std::deque<int> stack;
stack.push_back(10); // push
stack.push_back(20);
stack.pop_back();    // pop
int top = stack.back(); // peek
bool empty = stack.empty();`}
          />
          <CodeEditor
            title="Stack using Deque (Java)"
            language="java"
            initialCode={`import java.util.Deque;
import java.util.ArrayDeque;
Deque<Integer> stack = new ArrayDeque<>();
stack.push(10); // push
stack.push(20);
stack.pop();    // pop
int top = stack.peek(); // peek
boolean empty = stack.isEmpty();`}
          />
        </section>
      </>
    ),
  },
  operations: {
    title: "Stack Operations",
    content: <StackOperationsSection />
  },
  "infix-prefix-postfix": {
    title: "Infix, Prefix & Postfix Conversion",
    content: <InfixPrefixPostfixSection />
  },
  applications: {
    title: "Applications of Stack",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Applications of Stack</h3>
          <ul className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              <b>Function Call Management (Recursion):</b> Each function call pushes a frame onto the stack. Recursion uses the stack to manage multiple calls.
              <br />
              <span className="text-xs text-gray-500">Try calling a recursive function and see the call stack grow in your debugger!</span>
            </li>
            <li>
              <b>Expression Evaluation and Conversion:</b> Stacks are used for infix to postfix conversion and evaluation of postfix expressions.
              <br />
              <span className="text-xs text-gray-500">E.g., 3 + 4 * 2 → 3 4 2 * + (postfix)</span>
            </li>
            <li>
              <b>Undo Mechanism in Applications:</b> Each action is pushed onto a stack. Undo pops the last action.
            </li>
            <li>
              <b>Balanced Parentheses Checking:</b> Push opening brackets, pop for closing. If stack is empty at the end, parentheses are balanced.
            </li>
            <li>
              <b>Backtracking Algorithms:</b> Used in maze solving, puzzles, and more. Stack helps backtrack to previous states.
            </li>
            <li>
              <b>Depth-First Search (DFS):</b> DFS uses a stack to keep track of nodes to visit.
            </li>
            <li>
              <b>Memory Management (Stack Memory):</b> Local variables and function calls are managed using stack memory.
            </li>
            <li>
              <b>Parenthesis Matching in Compilers:</b> Compilers use stacks to check for balanced symbols.
            </li>
          </ul>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220718121726/StackApplications.png"
            alt="Stack Applications"
            width={600}
            height={180}
            className="rounded-lg shadow mb-6 border"
            onError={(e: any) => { e.target.style.display = 'none' }}
          />
        </section>
      </>
    ),
  },
  implementations: {
    title: "Stack Implementations in Different Languages",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Stack in C++ STL</h3>
          <CodeEditor
            title="Stack in C++ STL"
            language="cpp"
            initialCode={`#include <stack>
std::stack<int> s;
s.push(10);
s.push(20);
s.pop();
int top = s.top();
bool empty = s.empty();`}
          />
          <h3 className="text-xl font-semibold mb-4 underline">Stack in Java</h3>
          <CodeEditor
            title="Stack in Java"
            language="java"
            initialCode={`import java.util.Stack;
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
stack.pop();
int top = stack.peek();
boolean empty = stack.isEmpty();`}
          />
          <h3 className="text-xl font-semibold mb-4 underline">Stack in Python</h3>
          <CodeEditor
            title="Stack in Python"
            language="python"
            initialCode={`stack = []
stack.append(10)
stack.append(20)
stack.pop()
top = stack[-1]
empty = len(stack) == 0`}
          />
          <h3 className="text-xl font-semibold mb-4 underline">Stack in C#</h3>
          <CodeEditor
            title="Stack in C#"
            language="csharp"
            initialCode={`using System.Collections.Generic;
Stack<int> stack = new Stack<int>();
stack.Push(10);
stack.Push(20);
stack.Pop();
int top = stack.Peek();
bool empty = stack.Count == 0;`}
          />
          <h3 className="text-xl font-semibold mb-4 underline">Stack in JavaScript</h3>
          <CodeEditor
            title="Stack in JavaScript"
            language="javascript"
            initialCode={`let stack = [];
stack.push(10);
stack.push(20);
stack.pop();
let top = stack[stack.length - 1];
let empty = stack.length === 0;`}
          />
        </section>
      </>
    ),
  },
  quiz: {
    title: "Stack Quiz",
    content: (
      <QuizComponent
        title="Test Your Knowledge of Stacks"
        questions={[
          {
            question: "What is the time complexity of push and pop operations in a stack?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctAnswer: 0
          },
          {
            question: "Which data structure is used for function call management in most programming languages?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            correctAnswer: 1
          },
          {
            question: "Which of the following is NOT an application of stack?",
            options: [
              "Expression evaluation",
              "Backtracking",
              "Level order traversal of tree",
              "Undo/Redo in editors"
            ],
            correctAnswer: 2
          },
          {
            question: "What happens if you pop from an empty stack?",
            options: [
              "Stack Overflow",
              "Stack Underflow",
              "Segmentation Fault",
              "No Error"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of the following is true for stack?",
            options: [
              "FIFO structure",
              "LIFO structure",
              "Random access allowed",
              "None of the above"
            ],
            correctAnswer: 1
          }
        ]}
      />
    ),
  },
  practice: {
    title: "Stack Practice Questions",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Practice Questions</h3>
          <div className="space-y-8">
            <div>
              <b>Q1:</b> Implement a stack using an array and write a function to reverse a string using stack.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`// Reverse a string using stack
void reverse(std::string &str) {
    std::stack<char> s;
    for (char c : str) s.push(c);
    for (int i = 0; i < str.length(); ++i) {
        str[i] = s.top();
        s.pop();
    }
}`}
                />
                <p className="mt-2 text-sm text-gray-600">Push all characters to stack, then pop to reverse.</p>
              </details>
            </div>
            <div>
              <b>Q2:</b> Check for balanced parentheses in an expression using stack.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="python"
                  initialCode={`def is_balanced(expr):
    stack = []
    for c in expr:
        if c in "([{":
            stack.append(c)
        elif c in ")]}":
            if not stack: return False
            if (c == ")" and stack[-1] != "(") or \
               (c == "]" and stack[-1] != "[") or \
               (c == "}" and stack[-1] != "{"):
                return False
            stack.pop()
    return not stack`}
                />
                <p className="mt-2 text-sm text-gray-600">Push opening, pop and check for closing brackets.</p>
              </details>
            </div>
            <div>
              <b>Q3:</b> Implement two stacks in one array.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`class TwoStacks {
    int* arr;
    int size, top1, top2;
public:
    TwoStacks(int n) {
        size = n; arr = new int[n];
        top1 = -1; top2 = n;
    }
    void push1(int x) {
        if (top1 < top2 - 1) arr[++top1] = x;
    }
    void push2(int x) {
        if (top1 < top2 - 1) arr[--top2] = x;
    }
    int pop1() {
        if (top1 >= 0) return arr[top1--];
        return -1;
    }
    int pop2() {
        if (top2 < size) return arr[top2++];
        return -1;
    }
};`}
                />
                <p className="mt-2 text-sm text-gray-600">Grow stacks from both ends of the array.</p>
              </details>
            </div>
            <div>
              <b>Q4:</b> Implement a stack using two queues.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="python"
                  initialCode={`from collections import deque
class Stack:
    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()
    def push(self, x):
        self.q2.append(x)
        while self.q1:
            self.q2.append(self.q1.popleft())
        self.q1, self.q2 = self.q2, self.q1
    def pop(self):
        return self.q1.popleft() if self.q1 else -1`}
                />
                <p className="mt-2 text-sm text-gray-600">Push to q2, move all from q1 to q2, swap q1 and q2.</p>
              </details>
            </div>
            <div>
              <b>Q5:</b> Design a stack that supports getMin() in O(1) time.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`class MinStack {
    std::stack<int> s, minS;
public:
    void push(int x) {
        s.push(x);
        if (minS.empty() || x <= minS.top()) minS.push(x);
    }
    void pop() {
        if (s.top() == minS.top()) minS.pop();
        s.pop();
    }
    int getMin() {
        return minS.top();
    }
};`}
                />
                <p className="mt-2 text-sm text-gray-600">Use an auxiliary stack to track minimums.</p>
              </details>
            </div>
            <div>
              <b>Q6:</b> Evaluate a postfix expression using stack.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="python"
                  initialCode={`def eval_postfix(expr):
    stack = []
    for token in expr.split():
        if token.isdigit():
            stack.append(int(token))
        else:
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            elif token == '/': stack.append(a // b)
    return stack[-1]`}
                />
                <p className="mt-2 text-sm text-gray-600">Push operands, pop for operators, compute and push result.</p>
              </details>
            </div>
            <div>
              <b>Q7:</b> Sort a stack using only stack operations.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`void sortStack(std::stack<int>& s) {
    std::stack<int> temp;
    while (!s.empty()) {
        int t = s.top(); s.pop();
        while (!temp.empty() && temp.top() > t) {
            s.push(temp.top()); temp.pop();
        }
        temp.push(t);
    }
    while (!temp.empty()) {
        s.push(temp.top()); temp.pop();
    }
}`}
                />
                <p className="mt-2 text-sm text-gray-600">Use a temporary stack to sort elements.</p>
              </details>
            </div>
            <div>
              <b>Q8:</b> Implement a stack with O(1) time for push, pop, and getMax.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="python"
                  initialCode={`class MaxStack:
    def __init__(self):
        self.s = []
        self.maxS = []
    def push(self, x):
        self.s.append(x)
        if not self.maxS or x >= self.maxS[-1]:
            self.maxS.append(x)
    def pop(self):
        if self.s[-1] == self.maxS[-1]:
            self.maxS.pop()
        return self.s.pop()
    def getMax(self):
        return self.maxS[-1]`}
                />
                <p className="mt-2 text-sm text-gray-600">Use an auxiliary stack for max values.</p>
              </details>
            </div>
            <div>
              <b>Q9:</b> Find the next greater element for each element in an array using stack.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`void nextGreater(int arr[], int n) {
    std::stack<int> s;
    for (int i = 0; i < n; ++i) {
        while (!s.empty() && arr[i] > s.top()) {
            std::cout << s.top() << " -> " << arr[i] << "\\n";
            s.pop();
        }
        s.push(arr[i]);
    }
    while (!s.empty()) {
        std::cout << s.top() << " -> -1\\n";
        s.pop();
    }
}`}
                />
                <p className="mt-2 text-sm text-gray-600">Use stack to track elements for which next greater is not found yet.</p>
              </details>
            </div>
            <div>
              <b>Q10:</b> Implement a stack that supports middle element retrieval in O(1) time.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`// Use DLL and a pointer to middle node
class MyStack {
    struct Node { int data; Node *prev, *next; Node(int x):data(x),prev(nullptr),next(nullptr){} };
    Node *head, *mid;
    int count;
public:
    MyStack():head(nullptr),mid(nullptr),count(0){}
    void push(int x) {
        Node* node = new Node(x);
        node->next = head;
        if (head) head->prev = node;
        head = node;
        count++;
        if (count == 1) mid = node;
        else if (count % 2 == 1) mid = mid->prev;
    }
    int pop() {
        if (!head) return -1;
        int x = head->data;
        Node* temp = head;
        head = head->next;
        if (head) head->prev = nullptr;
        count--;
        if (count % 2 == 0 && mid) mid = mid->next;
        delete temp;
        return x;
    }
    int findMiddle() {
        return mid ? mid->data : -1;
    }
};`}
                />
                <p className="mt-2 text-sm text-gray-600">Maintain a pointer to the middle node in a DLL.</p>
              </details>
            </div>
          </div>
        </section>
      </>
    ),
  },
  community: {
    title: "Community Content",
    content: <CommunityContentSection />,
  },
}

// This file should already contain the DS Stack content page as previously provided.
// If you see "content not available" in your app, ensure this file is present and correctly exported.
// No changes needed if the file content matches the previous DS Stack implementation.
// If you still see "content not available", check your routing and sidebar links to ensure they point to /topics/ds-stack and this file exists at that path.

export default function DSStackContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/courses/ds1/topics">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">Stack Data Structure</h1>
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
              {sections.map((section) => (
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
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-6 md:pl-8">
          <article className="prose prose-sm max-w-none">
            {content[activeSection as keyof typeof content] && (
              <>
                <h2 className="text-2xl font-bold mb-6">{content[activeSection as keyof typeof content].title}</h2>
                {content[activeSection as keyof typeof content].content}
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  )
}
