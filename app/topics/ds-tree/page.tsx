"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, Code, BookText, FileCode2, BarChart2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import CodeEditor from "../ds-array/code-editor"
import QuizComponent from "../ds-sorting/quiz-component"

function TreeVisualization() {
  // Simple interactive binary tree visualization
  return (
    <div className="flex flex-col items-center my-6">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-green-400 text-white w-12 h-12 flex items-center justify-center font-bold shadow">1</div>
        <div className="flex flex-row mt-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-b-2 border-green-400 h-6 w-6 -mb-2"></div>
            <div className="rounded-full bg-blue-400 text-white w-12 h-12 flex items-center justify-center font-bold shadow">2</div>
            <div className="flex flex-row mt-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="border-l-2 border-b-2 border-blue-400 h-6 w-6 -mb-2"></div>
                <div className="rounded-full bg-purple-400 text-white w-10 h-10 flex items-center justify-center font-bold shadow">4</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-l-2 border-b-2 border-blue-400 h-6 w-6 -mb-2"></div>
                <div className="rounded-full bg-purple-400 text-white w-10 h-10 flex items-center justify-center font-bold shadow">5</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-b-2 border-green-400 h-6 w-6 -mb-2"></div>
            <div className="rounded-full bg-blue-400 text-white w-12 h-12 flex items-center justify-center font-bold shadow">3</div>
            <div className="flex flex-row mt-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="border-l-2 border-b-2 border-blue-400 h-6 w-6 -mb-2"></div>
                <div className="rounded-full bg-purple-400 text-white w-10 h-10 flex items-center justify-center font-bold shadow">6</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-l-2 border-b-2 border-blue-400 h-6 w-6 -mb-2"></div>
                <div className="rounded-full bg-purple-400 text-white w-10 h-10 flex items-center justify-center font-bold shadow">7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2">A simple binary tree visualization</div>
    </div>
  )
}

// Interactive tree type selector
function TreeTypeSelector({ onSelect, selected }: { onSelect: (type: string) => void; selected: string }) {
  const types = [
    { id: "binary", name: "Binary Tree", img: "https://i.imgur.com/3QyQZ2b.png" },
    { id: "full", name: "Full Binary Tree", img: "https://i.imgur.com/1Q2QwQe.png" },
    { id: "complete", name: "Complete Binary Tree", img: "https://i.imgur.com/1Q2QwQe.png" },
    { id: "perfect", name: "Perfect Binary Tree", img: "https://i.imgur.com/1Q2QwQe.png" },
    { id: "balanced", name: "Balanced Binary Tree", img: "https://i.imgur.com/1Q2QwQe.png" },
    { id: "bst", name: "Binary Search Tree", img: "https://i.imgur.com/1Q2QwQe.png" },
    { id: "avl", name: "AVL Tree", img: "https://i.imgur.com/1Q2QwQe.png" },
    { id: "general", name: "General Tree", img: "https://i.imgur.com/1Q2QwQe.png" },
  ]
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {types.map((type) => (
        <button
          key={type.id}
          className={`flex flex-col items-center border rounded-lg p-2 w-32 transition-all ${
            selected === type.id ? "border-primary bg-blue-50" : "border-gray-200 bg-white"
          } hover:border-primary`}
          onClick={() => onSelect(type.id)}
        >
          <img src={type.img} alt={type.name} className="w-16 h-16 object-contain mb-2" />
          <span className="font-semibold text-xs">{type.name}</span>
        </button>
      ))}
    </div>
  )
}

function TreeTypeDetails({ type }: { type: string }) {
  switch (type) {
    case "binary":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">Binary Tree</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/binary-tree-to-DLL.png" alt="Binary Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>Each node has at most two children (left and right).</li>
            <li>Used as the base for many other tree types.</li>
            <li>Not necessarily sorted or balanced.</li>
          </ul>
        </div>
      )
    case "full":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">Full Binary Tree</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/full-binary-tree.png" alt="Full Binary Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>Every node has either 0 or 2 children.</li>
            <li>No node has only one child.</li>
            <li>All leaf nodes are at the same or different levels.</li>
          </ul>
        </div>
      )
    case "complete":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">Complete Binary Tree</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/complete-binary-tree.png" alt="Complete Binary Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>All levels are completely filled except possibly the last.</li>
            <li>All nodes are as far left as possible.</li>
            <li>Used in heap data structures.</li>
          </ul>
        </div>
      )
    case "perfect":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">Perfect Binary Tree</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/perfect-binary-tree.png" alt="Perfect Binary Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>All internal nodes have two children.</li>
            <li>All leaf nodes are at the same level.</li>
            <li>Number of nodes = 2<sup>h+1</sup> - 1 (h = height)</li>
          </ul>
        </div>
      )
    case "balanced":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">Balanced Binary Tree</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/balanced-binary-tree.png" alt="Balanced Binary Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>Height difference between left and right subtrees is at most 1 for every node.</li>
            <li>Ensures O(log n) operations.</li>
            <li>Examples: AVL Tree, Red-Black Tree.</li>
          </ul>
        </div>
      )
    case "bst":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">Binary Search Tree (BST)</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/BSTinsert.png" alt="Binary Search Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>Left child &lt; parent &lt; right child.</li>
            <li>Efficient for searching, insertion, and deletion.</li>
            <li>Inorder traversal gives sorted order.</li>
          </ul>
        </div>
      )
    case "avl":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">AVL Tree</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/AVL-Tree.png" alt="AVL Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>Self-balancing BST.</li>
            <li>Balance factor (height difference) is -1, 0, or 1 for every node.</li>
            <li>Ensures O(log n) operations.</li>
          </ul>
        </div>
      )
    case "general":
      return (
        <div>
          <h4 className="text-lg font-bold mb-2">General Tree</h4>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/General-Tree.png" alt="General Tree" className="w-64 mb-2 rounded shadow" />
          <ul className="list-disc pl-6 mb-2">
            <li>Each node can have any number of children.</li>
            <li>Used to represent hierarchical data (e.g., file systems).</li>
          </ul>
        </div>
      )
    default:
      return null
  }
}

const sections = [
  { id: "intro", title: "Introduction to Trees", icon: <BookText className="h-4 w-4 mr-2" /> },
  { id: "types", title: "Types of Trees", icon: <List className="h-4 w-4 mr-2" /> },
  { id: "traversal", title: "Tree Traversals", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "implementation", title: "Tree Implementation", icon: <Code className="h-4 w-4 mr-2" /> },
  { id: "applications", title: "Applications", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
  { id: "quiz", title: "Quiz", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
  { id: "practice", title: "Practice Questions", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
]

const content = {
  intro: {
    title: "Introduction to Trees",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">What is a Tree?</h3>
          <p>
            A <b>tree</b> is a non-linear hierarchical data structure consisting of nodes, with a single node as the root and zero or more child nodes. Each node (except the root) has exactly one parent.
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Root node: The topmost node.</li>
            <li>Leaf node: A node with no children.</li>
            <li>Internal node: A node with at least one child.</li>
            <li>Height: Number of edges on the longest path from root to a leaf.</li>
            <li>Depth: Number of edges from root to the node.</li>
          </ul>
          <TreeVisualization />
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <b>Real-life analogy:</b> Family tree, organization chart, file system directories.
          </div>
        </section>
      </>
    ),
  },
  types: {
    title: "Types of Trees",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Types of Trees</h3>
          <p className="mb-4">
            Trees come in many varieties, each with unique properties and use-cases. Click on a type below to learn more interactively!
          </p>
          <TreeTypesInteractive />
        </section>
      </>
    ),
  },
  traversal: {
    title: "Tree Traversals",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Tree Traversal Methods</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><b>Preorder (NLR):</b> Visit Node, Left, Right</li>
            <li><b>Inorder (LNR):</b> Visit Left, Node, Right</li>
            <li><b>Postorder (LRN):</b> Visit Left, Right, Node</li>
            <li><b>Level Order:</b> Visit nodes level by level (BFS)</li>
          </ul>
          <CodeEditor
            title="Inorder Traversal (Recursive, C++)"
            language="cpp"
            initialCode={`void inorder(Node* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}`}
          />
          <CodeEditor
            title="Level Order Traversal (BFS, C++)"
            language="cpp"
            initialCode={`void levelOrder(Node* root) {
    if (!root) return;
    queue<Node*> q;
    q.push(root);
    while (!q.empty()) {
        Node* curr = q.front(); q.pop();
        cout << curr->data << " ";
        if (curr->left) q.push(curr->left);
        if (curr->right) q.push(curr->right);
    }
}`}
          />
        </section>
      </>
    ),
  },
  implementation: {
    title: "Tree Implementation",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Binary Tree Implementation (C++)</h3>
          <CodeEditor
            title="Binary Tree Node Structure"
            language="cpp"
            initialCode={`struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};`}
          />
          <CodeEditor
            title="Insert Node (BST, C++)"
            language="cpp"
            initialCode={`Node* insert(Node* root, int key) {
    if (!root) return new Node(key);
    if (key < root->data)
        root->left = insert(root->left, key);
    else
        root->right = insert(root->right, key);
    return root;
}`}
          />
          <CodeEditor
            title="Tree Traversal Example (Python)"
            language="python"
            initialCode={`class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inorder(root):
    if root:
        inorder(root.left)
        print(root.data, end=" ")
        inorder(root.right)
`}
          />
        </section>
      </>
    ),
  },
  applications: {
    title: "Applications of Trees",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Applications of Trees</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Hierarchical data representation (file systems, organization charts)</li>
            <li>Binary Search Trees for fast searching, insertion, deletion</li>
            <li>Expression trees (parsing mathematical expressions)</li>
            <li>Heaps (priority queues)</li>
            <li>Tries (dictionary, autocomplete)</li>
            <li>Routing tables in networks</li>
            <li>Game trees (AI, decision making)</li>
          </ul>
        </section>
      </>
    ),
  },
  quiz: {
    title: "Tree Quiz",
    content: (
      <QuizComponent
        title="Test Your Knowledge of Trees"
        questions={[
          {
            question: "What is the maximum number of children a binary tree node can have?",
            options: ["1", "2", "3", "Any number"],
            correctAnswer: 1,
          },
          {
            question: "Which traversal visits nodes in sorted order for a BST?",
            options: ["Preorder", "Inorder", "Postorder", "Level Order"],
            correctAnswer: 1,
          },
          {
            question: "Which tree is always height-balanced?",
            options: ["Binary Tree", "AVL Tree", "BST", "Heap"],
            correctAnswer: 1,
          },
          {
            question: "Which of the following is NOT an application of trees?",
            options: [
              "File system representation",
              "Priority queues",
              "Stack implementation",
              "Expression parsing",
            ],
            correctAnswer: 2,
          },
          {
            question: "What is the height of a tree with only root node?",
            options: ["0", "1", "2", "Undefined"],
            correctAnswer: 0,
          },
        ]}
      />
    ),
  },
  practice: {
    title: "Tree Practice Questions",
    content: (
      <>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 underline">Practice Questions</h3>
          <div className="space-y-8">
            <div>
              <b>Q1:</b> Write a function to count the number of leaf nodes in a binary tree.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`int countLeaves(Node* root) {
    if (!root) return 0;
    if (!root->left && !root->right) return 1;
    return countLeaves(root->left) + countLeaves(root->right);
}`}
                />
              </details>
            </div>
            <div>
              <b>Q2:</b> Write a function to find the height of a binary tree.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`int height(Node* root) {
    if (!root) return -1;
    return 1 + max(height(root->left), height(root->right));
}`}
                />
              </details>
            </div>
            <div>
              <b>Q3:</b> Write a function to print all nodes at a given level in a binary tree.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`void printLevel(Node* root, int level) {
    if (!root) return;
    if (level == 0) cout << root->data << " ";
    else {
        printLevel(root->left, level-1);
        printLevel(root->right, level-1);
    }
}`}
                />
              </details>
            </div>
            <div>
              <b>Q4:</b> Write a function to check if a binary tree is balanced.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`bool isBalanced(Node* root) {
    if (!root) return true;
    int lh = height(root->left);
    int rh = height(root->right);
    return abs(lh - rh) <= 1 && isBalanced(root->left) && isBalanced(root->right);
}`}
                />
              </details>
            </div>
            <div>
              <b>Q5:</b> Write a function to mirror a binary tree.<br />
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 underline">Show Solution</summary>
                <CodeEditor
                  language="cpp"
                  initialCode={`void mirror(Node* root) {
    if (!root) return;
    swap(root->left, root->right);
    mirror(root->left);
    mirror(root->right);
}`}
                />
              </details>
            </div>
          </div>
        </section>
      </>
    ),
  },
}

// Interactive wrapper for types section
function TreeTypesInteractive() {
  const [selected, setSelected] = useState("binary")
  return (
    <div>
      <TreeTypeSelector selected={selected} onSelect={setSelected} />
      <div className="mt-4">
        <TreeTypeDetails type={selected} />
      </div>
    </div>
  )
}

export default function DSTreeContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("intro")

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
          <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">Tree Data Structure</h1>
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
