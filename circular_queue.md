# Circular Queue

## Overview

A circular queue is an advanced version of the linear queue that overcomes the memory wastage problem by connecting the rear end back to the front end, forming a circular structure.

## Why Circular Queue?

### Problem with Linear Queue:
```
After some operations:
Linear Queue: [ ] [ ] [ ] [D] [E]
                           ↑    ↑
                        FRONT REAR

Spaces 0-2 are wasted! Cannot add more elements even though space exists.
```

### Solution - Circular Queue:
```
Circular Queue: [F] [G] [ ] [D] [E]
                      ↑    ↑
                   REAR  FRONT

Rear wraps around to reuse space!
```

## Circular Structure Logic

### Conceptual View:
```
    [2] [3]
[1]       [4]
[0]       [5]
    [7] [6]
```

### Array Implementation:
```
Index:  0    1    2    3    4
Array: [A] [B] [C] [D] [E]
        ↑              ↑
      REAR           FRONT
```

## Key Concepts

### 1. Modular Arithmetic
- **Next Position**: `(current + 1) % size`
- **Wrap Around**: When rear reaches end, it goes to beginning

### 2. Full vs Empty Condition
- **Empty**: `front == rear`
- **Full**: `(rear + 1) % size == front`

### 3. Head and Tail Pointer Logic

#### Front Pointer:
- Points to the first element to be removed
- Moves clockwise after dequeue operation
- Formula: `front = (front + 1) % size`

#### Rear Pointer:
- Points to the last inserted element
- Moves clockwise after enqueue operation
- Formula: `rear = (rear + 1) % size`

## Implementation

```python
class CircularQueue:
    def __init__(self, size):
        self.size = size + 1  # One extra space to distinguish full from empty
        self.queue = [None] * self.size
        self.front = 0
        self.rear = 0
    
    def is_empty(self):
        return self.front == self.rear
    
    def is_full(self):
        return (self.rear + 1) % self.size == self.front
    
    def enqueue(self, item):
        if self.is_full():
            raise Exception("Queue Overflow")
        
        self.queue[self.rear] = item
        self.rear = (self.rear + 1) % self.size
    
    def dequeue(self):
        if self.is_empty():
            raise Exception("Queue Underflow")
        
        item = self.queue[self.front]
        self.queue[self.front] = None  # Optional: clear the slot
        self.front = (self.front + 1) % self.size
        return item
    
    def peek(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return self.queue[self.front]
    
    def size_current(self):
        return (self.rear - self.front + self.size) % self.size
    
    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return
        
        print("Queue:", end=" ")
        i = self.front
        while i != self.rear:
            print(self.queue[i], end=" ")
            i = (i + 1) % self.size
        print()
```

## Visual Step-by-Step Example

### Initial Setup (Size = 5):
```
Queue: [ ] [ ] [ ] [ ] [ ]
        ↑
    FRONT/REAR (0)
```

### Step 1: Enqueue(10)
```
Queue: [10] [ ] [ ] [ ] [ ]
        ↑    ↑
    FRONT  REAR
```

### Step 2: Enqueue(20), Enqueue(30)
```
Queue: [10] [20] [30] [ ] [ ]
        ↑              ↑
    FRONT           REAR
```

### Step 3: Dequeue() (returns 10)
```
Queue: [ ] [20] [30] [ ] [ ]
             ↑         ↑
          FRONT     REAR
```

### Step 4: Enqueue(40), Enqueue(50)
```
Queue: [ ] [20] [30] [40] [50]
             ↑              ↑
          FRONT           REAR
```

### Step 5: Enqueue(60) - Circular wrap!
```
Queue: [60] [20] [30] [40] [50]
         ↑    ↑
      REAR  FRONT
```

## Benefits over Linear Queue

### 1. Space Efficiency
- **Linear Queue**: Wasted space cannot be reused
- **Circular Queue**: All spaces can be reused

### 2. Memory Utilization
```
Linear Queue Utilization: 40-60%
Circular Queue Utilization: 90-100%
```

### 3. No False Full Condition
- Linear queue can appear full with empty spaces
- Circular queue accurately represents fullness

## Advanced Implementation (C++)

```cpp
#include <iostream>
using namespace std;

template <typename T>
class CircularQueue {
private:
    T* queue;
    int front, rear, size, count;

public:
    CircularQueue(int s) {
        size = s;
        queue = new T[size];
        front = rear = count = 0;
    }
    
    bool isEmpty() {
        return count == 0;
    }
    
    bool isFull() {
        return count == size;
    }
    
    void enqueue(T item) {
        if (isFull()) {
            throw runtime_error("Queue Overflow");
        }
        
        queue[rear] = item;
        rear = (rear + 1) % size;
        count++;
    }
    
    T dequeue() {
        if (isEmpty()) {
            throw runtime_error("Queue Underflow");
        }
        
        T item = queue[front];
        front = (front + 1) % size;
        count--;
        return item;
    }
    
    T peek() {
        if (isEmpty()) {
            throw runtime_error("Queue is empty");
        }
        return queue[front];
    }
    
    int currentSize() {
        return count;
    }
    
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return;
        }
        
        cout << "Queue: ";
        for (int i = 0; i < count; i++) {
            cout << queue[(front + i) % size] << " ";
        }
        cout << endl;
    }
    
    ~CircularQueue() {
        delete[] queue;
    }
};
```

## Time & Space Complexity

### Time Complexity:
| Operation | Time Complexity |
|-----------|-----------------|
| Enqueue   | O(1)           |
| Dequeue   | O(1)           |
| Peek      | O(1)           |
| IsEmpty   | O(1)           |
| IsFull    | O(1)           |

### Space Complexity:
- **O(n)** where n is the size of the queue

## Applications

### 1. Operating Systems:
- **CPU Scheduling**: Round-robin scheduling
- **Buffer Management**: Circular buffer for I/O operations
- **Memory Management**: Page replacement algorithms

### 2. Networking:
- **Router Buffers**: Packet queuing
- **Traffic Shaping**: Bandwidth management
- **Network Protocols**: Sliding window protocols

### 3. Multimedia:
- **Audio/Video Streaming**: Buffer management
- **Real-time Systems**: Data buffering
- **Game Development**: Event queues

### 4. Embedded Systems:
- **Sensor Data**: Circular buffer for sensor readings
- **Communication**: UART/SPI buffers
- **Real-time Processing**: Data sampling

## Common Implementation Patterns

### Pattern 1: Extra Space Method
```python
# Use size + 1 array, sacrifice one space
def is_full(self):
    return (self.rear + 1) % self.size == self.front
```

### Pattern 2: Count Variable Method
```python
# Use count variable to track number of elements
def is_full(self):
    return self.count == self.size
```

### Pattern 3: Flag Method
```python
# Use boolean flag to distinguish full from empty
def is_full(self):
    return self.is_full_flag and (self.front == self.rear)
```

## Common Pitfalls

### 1. Off-by-One Errors
```python
# Wrong
rear = (rear + 1) % (size + 1)

# Correct
rear = (rear + 1) % size
```

### 2. Full vs Empty Confusion
```python
# Always use consistent method to check full/empty
# Don't mix different approaches
```

### 3. Index Calculation
```python
# Wrong
next_pos = (current + 1) % (size + 1)

# Correct
next_pos = (current + 1) % size
```

## Interview Questions

### Q1: Why do we need circular queue?
**A**: To overcome memory wastage in linear queue and achieve better space utilization.

### Q2: How do you detect if circular queue is full?
**A**: `(rear + 1) % size == front` or use count variable.

### Q3: What is the advantage of circular queue over linear queue?
**A**: Space efficiency, no memory wastage, and better utilization of available space.

### Q4: Can circular queue overflow?
**A**: Yes, when all positions are occupied and we try to add more elements.

## Summary

Circular queue is an elegant solution to the memory wastage problem of linear queues. By connecting the end back to the beginning, it ensures optimal space utilization while maintaining the FIFO principle. It's widely used in systems programming, especially for buffer management and resource allocation.

---

**Next**: Learn about [Priority Queue](priority_queue.md) where elements are processed by priority rather than insertion order.