export const practiceQuestions = [
  {
    title: "Insert at the beginning of a singly linked list",
    description: "Write a function to insert a node with value x at the beginning of a singly linked list.",
    starterCode: `// Complete the function
void insertBegin(Node** head_ref, int x) {
    // your code here
}`,
    expectedOutput: "10 20 30\n",
    solution: `void insertBegin(Node** head_ref, int x) {
    Node* new_node = new Node();
    new_node->data = x;
    new_node->next = *head_ref;
    *head_ref = new_node;
}
// Step-by-step:
// 1. Create a new node.
// 2. Set its data to x.
// 3. Point its next to the current head.
// 4. Update head to the new node.`
  },
  {
    title: "Insert at the end of a singly linked list",
    description: "Write a function to insert a node with value x at the end of a singly linked list.",
    starterCode: `void insertEnd(Node** head_ref, int x) {
    // your code here
}`,
    expectedOutput: "20 30 10\n",
    solution: `void insertEnd(Node** head_ref, int x) {
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
}
// Step-by-step:
// 1. Create a new node with data x and next as nullptr.
// 2. If list is empty, set head to new node.
// 3. Else, traverse to last node and set its next to new node.`
  },
  {
    title: "Delete a node by value in a singly linked list",
    description: "Write a function to delete the first occurrence of value x in a singly linked list.",
    starterCode: `void deleteNode(Node** head_ref, int x) {
    // your code here
}`,
    expectedOutput: "20 30\n",
    solution: `void deleteNode(Node** head_ref, int x) {
    Node* temp = *head_ref, *prev = nullptr;
    if (temp != nullptr && temp->data == x) {
        *head_ref = temp->next;
        delete temp;
        return;
    }
    while (temp != nullptr && temp->data != x) {
        prev = temp;
        temp = temp->next;
    }
    if (temp == nullptr) return;
    prev->next = temp->next;
    delete temp;
}
// Step-by-step:
// 1. Check if head node holds x, update head if so.
// 2. Otherwise, traverse and keep track of previous node.
// 3. Update previous node's next and delete found node.`
  },
  {
    title: "Reverse a singly linked list",
    description: "Write a function to reverse a singly linked list.",
    starterCode: `void reverse(Node** head_ref) {
    // your code here
}`,
    expectedOutput: "30 20 10\n",
    solution: `void reverse(Node** head_ref) {
    Node* prev = nullptr;
    Node* current = *head_ref;
    Node* next = nullptr;
    while (current != nullptr) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    *head_ref = prev;
}
// Step-by-step:
// 1. Use three pointers: prev, current, next.
// 2. Reverse the next pointer of each node.
// 3. Update head to the last node.`
  },
  {
    title: "Find the length of a singly linked list",
    description: "Write a function to return the length of a singly linked list.",
    starterCode: `int getLength(Node* head) {
    // your code here
}`,
    expectedOutput: "3\n",
    solution: `int getLength(Node* head) {
    int count = 0;
    Node* temp = head;
    while (temp != nullptr) {
        count++;
        temp = temp->next;
    }
    return count;
}
// Step-by-step:
// 1. Initialize count to 0.
// 2. Traverse the list, incrementing count for each node.`
  },
  {
    title: "Search for a value in a singly linked list",
    description: "Write a function to search for value x in a singly linked list. Return true if found, else false.",
    starterCode: `bool search(Node* head, int x) {
    // your code here
}`,
    expectedOutput: "Found\n",
    solution: `bool search(Node* head, int x) {
    Node* temp = head;
    while (temp != nullptr) {
        if (temp->data == x)
            return true;
        temp = temp->next;
    }
    return false;
}
// Step-by-step:
// 1. Traverse the list.
// 2. If node's data matches x, return true.`
  },
  {
    title: "Insert at the beginning of a doubly linked list",
    description: "Write a function to insert a node with value x at the beginning of a doubly linked list.",
    starterCode: `void insertBegin(Node** head_ref, int x) {
    // your code here
}`,
    expectedOutput: "10 20 30\n",
    solution: `void insertBegin(Node** head_ref, int x) {
    Node* new_node = new Node();
    new_node->data = x;
    new_node->next = *head_ref;
    new_node->prev = nullptr;
    if (*head_ref != nullptr)
        (*head_ref)->prev = new_node;
    *head_ref = new_node;
}
// Step-by-step:
// 1. Create new node, set data to x.
// 2. Set new_node->next to head, new_node->prev to nullptr.
// 3. Update old head's prev to new node, update head.`
  },
  {
    title: "Delete a node in a doubly linked list",
    description: "Write a function to delete a given node in a doubly linked list.",
    starterCode: `void deleteNode(Node** head_ref, Node* del) {
    // your code here
}`,
    expectedOutput: "20 30\n",
    solution: `void deleteNode(Node** head_ref, Node* del) {
    if (*head_ref == nullptr || del == nullptr)
        return;
    if (*head_ref == del)
        *head_ref = del->next;
    if (del->next != nullptr)
        del->next->prev = del->prev;
    if (del->prev != nullptr)
        del->prev->next = del->next;
    delete del;
}
// Step-by-step:
// 1. Handle head and null cases.
// 2. Update next and prev pointers as needed.
// 3. Delete the node.`
  },
  {
    title: "Insert at the end of a circular singly linked list",
    description: "Write a function to insert a node with value x at the end of a circular singly linked list.",
    starterCode: `void insertEnd(Node** head_ref, int x) {
    // your code here
}`,
    expectedOutput: "20 30 10\n",
    solution: `void insertEnd(Node** head_ref, int x) {
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
}
// Step-by-step:
// 1. Create new node, set data to x.
// 2. If list is empty, point new_node->next to itself and set head.
// 3. Else, traverse to last node and update pointers.`
  },
  {
    title: "Detect a loop in a linked list",
    description: "Write a function to detect if a singly linked list has a loop (cycle).",
    starterCode: `bool hasLoop(Node* head) {
    // your code here
}`,
    expectedOutput: "Yes\n",
    solution: `bool hasLoop(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (slow && fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast)
            return true;
    }
    return false;
}
// Step-by-step:
// 1. Use two pointers (slow, fast).
// 2. Move slow by 1, fast by 2.
// 3. If they meet, there is a loop.`
  }
]
