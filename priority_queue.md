# Priority Queue

## Overview

A priority queue is a specialized queue where each element has an associated priority, and elements are processed based on their priority rather than their insertion order. Higher priority elements are dequeued before lower priority elements.

## Key Characteristics

- **Priority-based Processing**: Elements with higher priority are served first
- **Not FIFO**: Breaks the traditional First-In-First-Out rule
- **Dynamic Ordering**: Order depends on priority values
- **Efficient Operations**: Optimized for priority-based access

## Types of Priority Queue

### 1. Max Priority Queue
- **Highest priority** element is dequeued first
- **Example**: Priority 9 > Priority 5 > Priority 1

### 2. Min Priority Queue
- **Lowest priority** element is dequeued first
- **Example**: Priority 1 > Priority 5 > Priority 9

## Visual Representation

### Max Priority Queue:
```
Priority Queue:
┌─────────────────────┐
│ Task A (Priority 9) │ ← Dequeue first
├─────────────────────┤
│ Task C (Priority 7) │
├─────────────────────┤
│ Task B (Priority 5) │
├─────────────────────┤
│ Task D (Priority 3) │ ← Dequeue last
└─────────────────────┘
```

### Min Priority Queue:
```
Priority Queue:
┌─────────────────────┐
│ Task D (Priority 1) │ ← Dequeue first
├─────────────────────┤
│ Task B (Priority 3) │
├─────────────────────┤
│ Task C (Priority 7) │
├─────────────────────┤
│ Task A (Priority 9) │ ← Dequeue last
└─────────────────────┘
```

## Implementation Methods

### 1. Array-based Implementation (Unsorted)
```python
class PriorityQueue:
    def __init__(self):
        self.queue = []
    
    def enqueue(self, item, priority):
        self.queue.append((item, priority))
    
    def dequeue(self):
        if not self.queue:
            raise Exception("Queue is empty")
        
        # Find highest priority
        max_priority_index = 0
        for i in range(1, len(self.queue)):
            if self.queue[i][1] > self.queue[max_priority_index][1]:
                max_priority_index = i
        
        return self.queue.pop(max_priority_index)[0]
```

### 2. Array-based Implementation (Sorted)
```python
class PriorityQueue:
    def __init__(self):
        self.queue = []
    
    def enqueue(self, item, priority):
        # Insert in sorted order
        inserted = False
        for i in range(len(self.queue)):
            if priority > self.queue[i][1]:
                self.queue.insert(i, (item, priority))
                inserted = True
                break
        
        if not inserted:
            self.queue.append((item, priority))
    
    def dequeue(self):
        if not self.queue:
            raise Exception("Queue is empty")
        
        return self.queue.pop(0)[0]
```

### 3. Heap-based Implementation (Optimal)
```python
import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []
    
    def enqueue(self, item, priority):
        # Use negative priority for max heap behavior
        heapq.heappush(self.heap, (-priority, item))
    
    def dequeue(self):
        if not self.heap:
            raise Exception("Queue is empty")
        
        _, item = heapq.heappop(self.heap)
        return item
    
    def peek(self):
        if not self.heap:
            raise Exception("Queue is empty")
        
        return self.heap[0][1]
    
    def is_empty(self):
        return len(self.heap) == 0
    
    def size(self):
        return len(self.heap)
```

## Complete Implementation with Node Structure

```python
class Node:
    def __init__(self, data, priority):
        self.data = data
        self.priority = priority
        self.next = None

class PriorityQueue:
    def __init__(self):
        self.front = None
    
    def enqueue(self, data, priority):
        new_node = Node(data, priority)
        
        # If queue is empty or new node has higher priority
        if not self.front or priority > self.front.priority:
            new_node.next = self.front
            self.front = new_node
            return
        
        # Find correct position
        current = self.front
        while current.next and current.next.priority >= priority:
            current = current.next
        
        new_node.next = current.next
        current.next = new_node
    
    def dequeue(self):
        if not self.front:
            raise Exception("Queue is empty")
        
        item = self.front.data
        self.front = self.front.next
        return item
    
    def peek(self):
        if not self.front:
            raise Exception("Queue is empty")
        return self.front.data
    
    def is_empty(self):
        return self.front is None
    
    def display(self):
        current = self.front
        while current:
            print(f"({current.data}, {current.priority})", end=" -> ")
            current = current.next
        print("None")
```

## Time Complexity Comparison

| Implementation | Enqueue | Dequeue | Peek |
|---------------|---------|---------|------|
| **Unsorted Array** | O(1) | O(n) | O(n) |
| **Sorted Array** | O(n) | O(1) | O(1) |
| **Linked List** | O(n) | O(1) | O(1) |
| **Binary Heap** | O(log n) | O(log n) | O(1) |

## Real-World Scenarios

### 1. Operating System Scheduling
```python
class Process:
    def __init__(self, name, priority, burst_time):
        self.name = name
        self.priority = priority
        self.burst_time = burst_time

# CPU Scheduler
scheduler = PriorityQueue()
scheduler.enqueue(Process("P1", 3, 10), 3)
scheduler.enqueue(Process("P2", 1, 5), 1)
scheduler.enqueue(Process("P3", 2, 8), 2)

# P1 (priority 3) will be executed first
```

### 2. Network Packet Routing
```python
class Packet:
    def __init__(self, data, qos_level):
        self.data = data
        self.qos_level = qos_level  # Quality of Service

# Router Priority Queue
router_queue = PriorityQueue()
router_queue.enqueue(Packet("video_stream", 1), 1)    # High priority
router_queue.enqueue(Packet("file_download", 3), 3)   # Low priority
router_queue.enqueue(Packet("voice_call", 1), 1)      # High priority
```

### 3. Emergency Room Triage
```python
class Patient:
    def __init__(self, name, severity):
        self.name = name
        self.severity = severity  # 1 = Critical, 5 = Minor

# Emergency Room Queue
er_queue = PriorityQueue()
er_queue.enqueue(Patient("John", 1), 1)    # Critical
er_queue.enqueue(Patient("Alice", 3), 3)   # Moderate
er_queue.enqueue(Patient("Bob", 1), 1)     # Critical
```

## Applications

### 1. Algorithm Implementations
- **Dijkstra's Algorithm**: Shortest path finding
- **A* Search**: Pathfinding in games and AI
- **Prim's Algorithm**: Minimum spanning tree
- **Huffman Coding**: Data compression

### 2. System Programming
- **CPU Scheduling**: Process management
- **Memory Management**: Page replacement
- **I/O Scheduling**: Disk scheduling
- **Network Protocols**: QoS management

### 3. Real-time Systems
- **Task Scheduling**: Real-time OS
- **Event Processing**: Event-driven systems
- **Interrupt Handling**: Hardware interrupts
- **Resource Allocation**: System resources

## Advanced Implementation (Binary Heap)

```python
class BinaryHeapPriorityQueue:
    def __init__(self, max_heap=True):
        self.heap = []
        self.max_heap = max_heap
    
    def _parent(self, i):
        return (i - 1) // 2
    
    def _left_child(self, i):
        return 2 * i + 1
    
    def _right_child(self, i):
        return 2 * i + 2
    
    def _compare(self, i, j):
        if self.max_heap:
            return self.heap[i][1] > self.heap[j][1]
        else:
            return self.heap[i][1] < self.heap[j][1]
    
    def _heapify_up(self, i):
        while i > 0:
            parent = self._parent(i)
            if self._compare(i, parent):
                self.heap[i], self.heap[parent] = self.heap[parent], self.heap[i]
                i = parent
            else:
                break
    
    def _heapify_down(self, i):
        while True:
            extreme = i
            left = self._left_child(i)
            right = self._right_child(i)
            
            if left < len(self.heap) and self._compare(left, extreme):
                extreme = left
            
            if right < len(self.heap) and self._compare(right, extreme):
                extreme = right
            
            if extreme != i:
                self.heap[i], self.heap[extreme] = self.heap[extreme], self.heap[i]
                i = extreme
            else:
                break
    
    def enqueue(self, item, priority):
        self.heap.append((item, priority))
        self._heapify_up(len(self.heap) - 1)
    
    def dequeue(self):
        if not self.heap:
            raise Exception("Queue is empty")
        
        if len(self.heap) == 1:
            return self.heap.pop()[0]
        
        item = self.heap[0][0]
        self.heap[0] = self.heap.pop()
        self._heapify_down(0)
        return item
    
    def peek(self):
        if not self.heap:
            raise Exception("Queue is empty")
        return self.heap[0][0]
```

## Common Interview Questions

### Q1: Difference between queue and priority queue?
**A**: Queue follows FIFO, priority queue processes by priority.

### Q2: How to implement priority queue efficiently?
**A**: Use binary heap for O(log n) operations.

### Q3: What is the time complexity of heap-based priority queue?
**A**: Insert: O(log n), Delete: O(log n), Peek: O(1)

### Q4: Can priority queue have duplicate priorities?
**A**: Yes, elements with same priority can be ordered by insertion time.

## Best Practices

1. **Choose Right Implementation**: Heap for general use, array for small datasets
2. **Handle Equal Priorities**: Define behavior for equal priority elements
3. **Memory Management**: Consider space complexity for large datasets
4. **Priority Design**: Use meaningful priority values
5. **Error Handling**: Handle empty queue conditions

## Summary

Priority queues are powerful data structures that enable priority-based processing. They're essential for many algorithms and system applications where elements need to be processed based on importance rather than insertion order. The choice of implementation depends on the specific requirements of your application.

---

**Next**: Learn about [Deque (Double-ended Queue)](deque.md) which allows insertion and deletion from both ends.