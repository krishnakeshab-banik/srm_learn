# Simple Queue (Linear Queue)

## Overview

A simple queue, also known as a linear queue, is the most basic implementation of the queue data structure. It follows the strict FIFO (First In, First Out) principle using a linear array structure.

## Structure

```
Index:  0    1    2    3    4
Array: [A] [B] [C] [ ] [ ]
        ↑         ↑
    FRONT(0)   REAR(2)
```

## Key Components

### Pointers:
- **FRONT**: Points to the first element (index 0 initially)
- **REAR**: Points to the last element (index -1 initially for empty queue)

### Array:
- Fixed-size array to store elements
- Elements are stored contiguously

## Operations

### 1. Enqueue (Insert)
```python
def enqueue(self, item):
    if self.rear == self.size - 1:  # Queue full
        print("Queue Overflow")
        return
    
    if self.front == -1:  # First element
        self.front = 0
    
    self.rear += 1
    self.queue[self.rear] = item
```

### 2. Dequeue (Remove)
```python
def dequeue(self):
    if self.front == -1:  # Queue empty
        print("Queue Underflow")
        return None
    
    item = self.queue[self.front]
    
    if self.front == self.rear:  # Last element
        self.front = self.rear = -1
    else:
        self.front += 1
    
    return item
```

## Complete Implementation

```python
class SimpleQueue:
    def __init__(self, size):
        self.size = size
        self.queue = [None] * size
        self.front = -1
        self.rear = -1
    
    def is_empty(self):
        return self.front == -1
    
    def is_full(self):
        return self.rear == self.size - 1
    
    def enqueue(self, item):
        if self.is_full():
            raise Exception("Queue Overflow")
        
        if self.is_empty():
            self.front = 0
        
        self.rear += 1
        self.queue[self.rear] = item
    
    def dequeue(self):
        if self.is_empty():
            raise Exception("Queue Underflow")
        
        item = self.queue[self.front]
        
        if self.front == self.rear:  # Last element
            self.front = self.rear = -1
        else:
            self.front += 1
        
        return item
    
    def peek(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return self.queue[self.front]
    
    def size_current(self):
        if self.is_empty():
            return 0
        return self.rear - self.front + 1
    
    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return
        
        print("Queue:", end=" ")
        for i in range(self.front, self.rear + 1):
            print(self.queue[i], end=" ")
        print()
```

## Visual Example

### Step-by-Step Operations:

1. **Initial State**:
   ```
   Queue: [ ] [ ] [ ] [ ] [ ]
   front = -1, rear = -1
   ```

2. **Enqueue(10)**:
   ```
   Queue: [10] [ ] [ ] [ ] [ ]
   front = 0, rear = 0
   ```

3. **Enqueue(20)**:
   ```
   Queue: [10] [20] [ ] [ ] [ ]
   front = 0, rear = 1
   ```

4. **Enqueue(30)**:
   ```
   Queue: [10] [20] [30] [ ] [ ]
   front = 0, rear = 2
   ```

5. **Dequeue()** (returns 10):
   ```
   Queue: [ ] [20] [30] [ ] [ ]
   front = 1, rear = 2
   ```

6. **Dequeue()** (returns 20):
   ```
   Queue: [ ] [ ] [30] [ ] [ ]
   front = 2, rear = 2
   ```

## Advantages

1. **Simple Implementation**: Easy to understand and implement
2. **Fast Operations**: O(1) time complexity for enqueue/dequeue
3. **Memory Efficient**: No extra pointers needed
4. **Cache Friendly**: Contiguous memory allocation

## Disadvantages

1. **Memory Wastage**: Once elements are dequeued, space cannot be reused
2. **Fixed Size**: Cannot grow beyond initial size
3. **False Full Condition**: May appear full even when spaces are available

### Memory Wastage Example:
```
After several operations:
Queue: [ ] [ ] [ ] [D] [E]
                    ↑    ↑
                 FRONT REAR

Spaces 0-2 are wasted and cannot be reused!
```

## Time & Space Complexity

### Time Complexity:
- **Enqueue**: O(1)
- **Dequeue**: O(1)
- **Peek**: O(1)
- **IsEmpty**: O(1)
- **IsFull**: O(1)

### Space Complexity:
- **O(n)** where n is the maximum size of the queue

## Applications

### 1. Operating Systems:
- Process scheduling
- Print spooling
- Disk scheduling

### 2. Networking:
- Data packet handling
- Buffer management

### 3. Algorithms:
- Breadth-First Search (BFS)
- Level-order tree traversal

### 4. Real-world Systems:
- Call center systems
- Traffic light management
- Resource allocation

## Code Examples in Different Languages

### C++ Implementation:
```cpp
#include <iostream>
using namespace std;

class SimpleQueue {
private:
    int* queue;
    int front, rear, size;

public:
    SimpleQueue(int s) {
        size = s;
        queue = new int[size];
        front = rear = -1;
    }
    
    bool isEmpty() {
        return front == -1;
    }
    
    bool isFull() {
        return rear == size - 1;
    }
    
    void enqueue(int item) {
        if (isFull()) {
            cout << "Queue Overflow" << endl;
            return;
        }
        
        if (isEmpty()) {
            front = 0;
        }
        
        rear++;
        queue[rear] = item;
    }
    
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow" << endl;
            return -1;
        }
        
        int item = queue[front];
        
        if (front == rear) {
            front = rear = -1;
        } else {
            front++;
        }
        
        return item;
    }
    
    ~SimpleQueue() {
        delete[] queue;
    }
};
```

### Java Implementation:
```java
public class SimpleQueue {
    private int[] queue;
    private int front, rear, size;
    
    public SimpleQueue(int size) {
        this.size = size;
        this.queue = new int[size];
        this.front = this.rear = -1;
    }
    
    public boolean isEmpty() {
        return front == -1;
    }
    
    public boolean isFull() {
        return rear == size - 1;
    }
    
    public void enqueue(int item) {
        if (isFull()) {
            throw new RuntimeException("Queue Overflow");
        }
        
        if (isEmpty()) {
            front = 0;
        }
        
        rear++;
        queue[rear] = item;
    }
    
    public int dequeue() {
        if (isEmpty()) {
            throw new RuntimeException("Queue Underflow");
        }
        
        int item = queue[front];
        
        if (front == rear) {
            front = rear = -1;
        } else {
            front++;
        }
        
        return item;
    }
}
```

## Best Practices

1. **Error Handling**: Always check for overflow/underflow conditions
2. **Initialization**: Properly initialize front and rear pointers
3. **Memory Management**: Free allocated memory in C/C++
4. **Size Validation**: Validate queue size during creation
5. **Thread Safety**: Add synchronization for concurrent access

## Common Interview Questions

1. **Q**: How to implement a queue using arrays?
   **A**: Use front and rear pointers with proper overflow/underflow checks

2. **Q**: What is the main disadvantage of simple queue?
   **A**: Memory wastage due to inability to reuse dequeued spaces

3. **Q**: How to check if queue is empty?
   **A**: Check if front == -1

4. **Q**: What happens when queue is full?
   **A**: Enqueue operation should handle overflow condition

## Summary

Simple queue is the foundation of queue data structure. While it has limitations like memory wastage, it's perfect for understanding basic queue concepts and is suitable for applications where memory is not a constraint.

---

**Next**: Learn about [Circular Queue](circular_queue.md) which solves the memory wastage problem.