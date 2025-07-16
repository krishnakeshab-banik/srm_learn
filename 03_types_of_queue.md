# Types of Queue

Queues come in various forms, each designed to solve specific problems and optimize different use cases. Let's explore the main types of queues and their characteristics.

## Overview of Queue Types

1. **Simple Queue** - Basic FIFO implementation
2. **Circular Queue** - Optimized space utilization
3. **Priority Queue** - Elements processed by priority
4. **Double-ended Queue (Deque)** - Insertion/deletion from both ends

---

## 1. Simple Queue (Linear Queue)

The most basic form of queue following strict FIFO principle.

### Characteristics:
- Elements are added at rear and removed from front
- Uses linear array structure
- Fixed size with potential memory wastage

### Structure:
```
[Front] [  ] [  ] [  ] [Rear]
   ↑                     ↑
Remove                  Add
```

### Applications:
- Process scheduling in operating systems
- Print job management
- Breadth-first search algorithms

**→ [Detailed Simple Queue Implementation](simple_queue.md)**

---

## 2. Circular Queue

An optimized version of linear queue where the last position connects back to the first position.

### Characteristics:
- Overcomes memory wastage of linear queue
- Fixed size with efficient space utilization
- Front and rear pointers wrap around

### Structure:
```
    [2] [3]
[1]       [4]
    [8] [5]
    [7] [6]
```

### Key Benefits:
- **Space Efficient**: Reuses empty positions
- **No Memory Waste**: Unlike linear queue
- **Constant Size**: Fixed memory allocation

**→ [Detailed Circular Queue Implementation](circular_queue.md)**

---

## 3. Priority Queue

Elements are processed based on priority rather than insertion order.

### Characteristics:
- Each element has an associated priority
- Higher priority elements are dequeued first
- Can be implemented using heaps or sorted arrays

### Types:
- **Max Priority Queue**: Highest priority first
- **Min Priority Queue**: Lowest priority first

### Structure:
```
Priority Queue (Max):
[Task A: Priority 9] ← Will be processed first
[Task B: Priority 5]
[Task C: Priority 7]
[Task D: Priority 3] ← Will be processed last
```

### Applications:
- CPU scheduling algorithms
- Dijkstra's shortest path algorithm
- Huffman coding
- A* search algorithm

**→ [Detailed Priority Queue Implementation](priority_queue.md)**

---

## 4. Double-ended Queue (Deque)

Allows insertion and deletion from both ends.

### Characteristics:
- Can function as both stack and queue
- Four main operations: insert_front, insert_rear, delete_front, delete_rear
- More flexible than standard queue

### Structure:
```
Insert_Front ← [A] [B] [C] [D] → Insert_Rear
Delete_Front ← [A] [B] [C] [D] → Delete_Rear
```

### Types:
- **Input Restricted**: Insertion only from rear
- **Output Restricted**: Deletion only from front

### Applications:
- Undo operations in applications
- Palindrome checking
- Sliding window problems

**→ [Detailed Deque Implementation](deque.md)**

---

## Comparison Table

| Feature | Simple Queue | Circular Queue | Priority Queue | Deque |
|---------|-------------|----------------|----------------|-------|
| **Insertion** | Rear only | Rear only | By priority | Both ends |
| **Deletion** | Front only | Front only | By priority | Both ends |
| **Memory** | May waste space | Efficient | Varies | Efficient |
| **Complexity** | O(1) | O(1) | O(log n) | O(1) |
| **Use Case** | Basic FIFO | Space-critical | Priority-based | Flexible access |

## When to Use Which Queue?

### Use Simple Queue When:
- Basic FIFO behavior is needed
- Memory is not a constraint
- Simple implementation is preferred

### Use Circular Queue When:
- Memory efficiency is important
- Fixed-size buffer is needed
- Preventing memory fragmentation

### Use Priority Queue When:
- Elements need processing by importance
- Implementing scheduling algorithms
- Order matters more than insertion time

### Use Deque When:
- Need flexibility in insertion/deletion
- Implementing both stack and queue operations
- Sliding window algorithms

## Implementation Approaches

### Array-based Implementation:
```python
class Queue:
    def __init__(self, size):
        self.size = size
        self.queue = [None] * size
        self.front = -1
        self.rear = -1
```

### Linked List Implementation:
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
```

## Performance Characteristics

### Time Complexity Summary:
| Operation | Simple | Circular | Priority | Deque |
|-----------|--------|----------|----------|-------|
| Insert | O(1) | O(1) | O(log n) | O(1) |
| Delete | O(1) | O(1) | O(log n) | O(1) |
| Peek | O(1) | O(1) | O(1) | O(1) |
| Search | O(n) | O(n) | O(n) | O(n) |

### Space Complexity:
- All types: O(n) where n is the number of elements

## Common Problems and Solutions

### Problem 1: Queue Overflow
**Solution**: Use circular queue or dynamic resizing

### Problem 2: Memory Wastage
**Solution**: Implement circular queue

### Problem 3: Priority-based Processing
**Solution**: Use priority queue with heap

### Problem 4: Bidirectional Access
**Solution**: Implement deque

## Best Practices

1. **Choose the Right Type**: Select based on your specific needs
2. **Handle Edge Cases**: Check for empty/full conditions
3. **Error Handling**: Implement proper exception handling
4. **Memory Management**: Consider space complexity
5. **Thread Safety**: Add synchronization for concurrent access

## Summary

Understanding different queue types helps you choose the optimal solution for your specific use case. Each type has its strengths and is designed to solve particular problems efficiently.

---

**Next**: Explore interactive visualizations to better understand queue operations.