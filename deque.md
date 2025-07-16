# Deque (Double-ended Queue)

## Overview

A deque (pronounced "deck") is a double-ended queue that allows insertion and deletion of elements from both ends - front and rear. It combines the functionality of both stack and queue data structures.

## Key Characteristics

- **Bidirectional Access**: Insert and delete from both ends
- **Flexible Structure**: Can behave as both stack and queue
- **Four Primary Operations**: Insert/delete at front and rear
- **Linear Structure**: Elements are arranged in a line

## Visual Representation

```
Insert_Front ← [A] [B] [C] [D] → Insert_Rear
Delete_Front ← [A] [B] [C] [D] → Delete_Rear
               ↑              ↑
            FRONT           REAR
```

## Core Operations

### 1. Insert at Front (addFront)
```python
def add_front(self, item):
    # Add element at the front
    pass
```

### 2. Insert at Rear (addRear)
```python
def add_rear(self, item):
    # Add element at the rear
    pass
```

### 3. Delete from Front (removeFront)
```python
def remove_front(self):
    # Remove and return element from front
    pass
```

### 4. Delete from Rear (removeRear)
```python
def remove_rear(self):
    # Remove and return element from rear
    pass
```

## Complete Implementation

### Array-based Implementation:
```python
class Deque:
    def __init__(self, max_size):
        self.max_size = max_size
        self.deque = [None] * max_size
        self.front = -1
        self.rear = -1
        self.size = 0
    
    def is_empty(self):
        return self.size == 0
    
    def is_full(self):
        return self.size == self.max_size
    
    def add_front(self, item):
        if self.is_full():
            raise Exception("Deque Overflow")
        
        if self.is_empty():
            self.front = self.rear = 0
        else:
            self.front = (self.front - 1 + self.max_size) % self.max_size
        
        self.deque[self.front] = item
        self.size += 1
    
    def add_rear(self, item):
        if self.is_full():
            raise Exception("Deque Overflow")
        
        if self.is_empty():
            self.front = self.rear = 0
        else:
            self.rear = (self.rear + 1) % self.max_size
        
        self.deque[self.rear] = item
        self.size += 1
    
    def remove_front(self):
        if self.is_empty():
            raise Exception("Deque Underflow")
        
        item = self.deque[self.front]
        
        if self.size == 1:
            self.front = self.rear = -1
        else:
            self.front = (self.front + 1) % self.max_size
        
        self.size -= 1
        return item
    
    def remove_rear(self):
        if self.is_empty():
            raise Exception("Deque Underflow")
        
        item = self.deque[self.rear]
        
        if self.size == 1:
            self.front = self.rear = -1
        else:
            self.rear = (self.rear - 1 + self.max_size) % self.max_size
        
        self.size -= 1
        return item
    
    def peek_front(self):
        if self.is_empty():
            raise Exception("Deque is empty")
        return self.deque[self.front]
    
    def peek_rear(self):
        if self.is_empty():
            raise Exception("Deque is empty")
        return self.deque[self.rear]
    
    def display(self):
        if self.is_empty():
            print("Deque is empty")
            return
        
        print("Deque:", end=" ")
        i = self.front
        for _ in range(self.size):
            print(self.deque[i], end=" ")
            i = (i + 1) % self.max_size
        print()
```

### Doubly Linked List Implementation:
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DequeLinkedList:
    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0
    
    def is_empty(self):
        return self.size == 0
    
    def add_front(self, item):
        new_node = Node(item)
        
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            new_node.next = self.front
            self.front.prev = new_node
            self.front = new_node
        
        self.size += 1
    
    def add_rear(self, item):
        new_node = Node(item)
        
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            new_node.prev = self.rear
            self.rear = new_node
        
        self.size += 1
    
    def remove_front(self):
        if self.is_empty():
            raise Exception("Deque Underflow")
        
        item = self.front.data
        
        if self.size == 1:
            self.front = self.rear = None
        else:
            self.front = self.front.next
            self.front.prev = None
        
        self.size -= 1
        return item
    
    def remove_rear(self):
        if self.is_empty():
            raise Exception("Deque Underflow")
        
        item = self.rear.data
        
        if self.size == 1:
            self.front = self.rear = None
        else:
            self.rear = self.rear.prev
            self.rear.next = None
        
        self.size -= 1
        return item
    
    def peek_front(self):
        if self.is_empty():
            raise Exception("Deque is empty")
        return self.front.data
    
    def peek_rear(self):
        if self.is_empty():
            raise Exception("Deque is empty")
        return self.rear.data
    
    def display(self):
        if self.is_empty():
            print("Deque is empty")
            return
        
        current = self.front
        print("Deque:", end=" ")
        while current:
            print(current.data, end=" ")
            current = current.next
        print()
```

## Visual Step-by-Step Example

### Initial State:
```
Deque: [ ] [ ] [ ] [ ] [ ]
       front = -1, rear = -1
```

### add_front(10):
```
Deque: [10] [ ] [ ] [ ] [ ]
        ↑
    front/rear = 0
```

### add_rear(20):
```
Deque: [10] [20] [ ] [ ] [ ]
        ↑     ↑
    front=0  rear=1
```

### add_front(5):
```
Deque: [5] [10] [20] [ ] [ ]
       ↑          ↑
   front=4     rear=1
   (wrapped around)
```

### remove_rear() (returns 20):
```
Deque: [5] [10] [ ] [ ] [ ]
       ↑     ↑
   front=4  rear=0
```

## Types of Deque

### 1. Input Restricted Deque
- **Insertion**: Only at rear
- **Deletion**: From both ends

```python
class InputRestrictedDeque:
    def add_rear(self, item):
        # Only insertion method
        pass
    
    def remove_front(self):
        # Deletion from front
        pass
    
    def remove_rear(self):
        # Deletion from rear
        pass
```

### 2. Output Restricted Deque
- **Insertion**: From both ends
- **Deletion**: Only from front

```python
class OutputRestrictedDeque:
    def add_front(self, item):
        # Insertion at front
        pass
    
    def add_rear(self, item):
        # Insertion at rear
        pass
    
    def remove_front(self):
        # Only deletion method
        pass
```

## Time & Space Complexity

### Time Complexity:
| Operation | Array | Linked List |
|-----------|-------|-------------|
| add_front | O(1) | O(1) |
| add_rear | O(1) | O(1) |
| remove_front | O(1) | O(1) |
| remove_rear | O(1) | O(1) |
| peek_front | O(1) | O(1) |
| peek_rear | O(1) | O(1) |

### Space Complexity:
- **Array**: O(n) fixed space
- **Linked List**: O(n) dynamic space

## Applications

### 1. Undo Operations in Applications
```python
class UndoRedoManager:
    def __init__(self):
        self.operations = Deque(100)
    
    def execute_operation(self, operation):
        self.operations.add_rear(operation)
        operation.execute()
    
    def undo(self):
        if not self.operations.is_empty():
            operation = self.operations.remove_rear()
            operation.undo()
    
    def redo(self):
        # Implementation for redo functionality
        pass
```

### 2. Palindrome Checking
```python
def is_palindrome(s):
    deque = Deque(len(s))
    
    # Add all characters to deque
    for char in s:
        deque.add_rear(char)
    
    # Compare from both ends
    while deque.size > 1:
        if deque.remove_front() != deque.remove_rear():
            return False
    
    return True
```

### 3. Sliding Window Problems
```python
def sliding_window_maximum(arr, k):
    deque = Deque(len(arr))
    result = []
    
    for i in range(len(arr)):
        # Remove elements outside window
        while not deque.is_empty() and deque.peek_front() <= i - k:
            deque.remove_front()
        
        # Remove smaller elements from rear
        while not deque.is_empty() and arr[deque.peek_rear()] <= arr[i]:
            deque.remove_rear()
        
        deque.add_rear(i)
        
        # Add to result if window is full
        if i >= k - 1:
            result.append(arr[deque.peek_front()])
    
    return result
```

### 4. Web Browser History
```python
class BrowserHistory:
    def __init__(self):
        self.history = Deque(1000)
        self.current = -1
    
    def visit(self, url):
        # Clear forward history
        while self.current < self.history.size - 1:
            self.history.remove_rear()
        
        self.history.add_rear(url)
        self.current += 1
    
    def back(self):
        if self.current > 0:
            self.current -= 1
            return self.history.peek_at(self.current)
        return None
    
    def forward(self):
        if self.current < self.history.size - 1:
            self.current += 1
            return self.history.peek_at(self.current)
        return None
```

## Deque vs Other Data Structures

| Feature | Deque | Queue | Stack |
|---------|-------|--------|-------|
| **Insert Front** | ✓ | ✗ | ✗ |
| **Insert Rear** | ✓ | ✓ | ✓ |
| **Delete Front** | ✓ | ✓ | ✗ |
| **Delete Rear** | ✓ | ✗ | ✓ |
| **Flexibility** | High | Medium | Low |
| **Use Case** | Flexible | FIFO | LIFO |

## C++ STL Implementation

```cpp
#include <deque>
#include <iostream>

int main() {
    std::deque<int> dq;
    
    // Add elements
    dq.push_front(10);
    dq.push_back(20);
    dq.push_front(5);
    
    // Display: 5 10 20
    for (int x : dq) {
        std::cout << x << " ";
    }
    
    // Remove elements
    dq.pop_front();  // Remove 5
    dq.pop_back();   // Remove 20
    
    return 0;
}
```

## Python Collections.deque

```python
from collections import deque

# Create deque
dq = deque([1, 2, 3])

# Add elements
dq.appendleft(0)  # Add to front
dq.append(4)      # Add to rear

# Remove elements
front = dq.popleft()  # Remove from front
rear = dq.pop()       # Remove from rear

# Other operations
dq.rotate(1)      # Rotate right
dq.rotate(-1)     # Rotate left
```

## Common Interview Questions

### Q1: Difference between deque and queue?
**A**: Deque allows insertion/deletion from both ends, queue only from one end each.

### Q2: How to implement stack and queue using deque?
**A**: Stack: use one end for both operations. Queue: use different ends.

### Q3: Time complexity of deque operations?
**A**: All basic operations are O(1) with proper implementation.

### Q4: When to use deque over array?
**A**: When you need efficient insertion/deletion at both ends.

## Best Practices

1. **Choose Right Implementation**: Array for fixed size, linked list for dynamic
2. **Handle Edge Cases**: Empty deque, single element scenarios
3. **Memory Management**: Consider space complexity for large datasets
4. **Thread Safety**: Add synchronization for concurrent access
5. **Error Handling**: Proper exception handling for overflow/underflow

## Summary

Deque is a versatile data structure that combines the best features of stacks and queues. Its ability to efficiently insert and delete from both ends makes it invaluable for many applications, from undo operations to complex algorithms like sliding window problems.

---

**Next**: Explore [Interactive Visualizations](04_queue_visualizations.html) to see queue operations in action.