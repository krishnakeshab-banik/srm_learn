# Introduction to Queue Data Structure

## What is a Queue?

A queue is a linear data structure that follows the **First In First Out (FIFO)** principle. This means that the first element inserted into the queue is the first one to be removed. Think of it like a line of people waiting to buy tickets at a movie theater - the first person in line is the first one to be served.

## Real-life Analogy

### Waiting in Line
Consider these everyday examples of queues:
- **Movie Theater**: People line up to buy tickets, first person in line gets served first
- **Bank Queue**: Customers wait in line, first come first served
- **Print Queue**: Documents are printed in the order they were submitted
- **Traffic Light**: Cars wait in a queue at a red light, first car moves when light turns green
- **Restaurant**: Customers are seated in the order they arrive

### Key Characteristics
- **Ordered**: Elements maintain their relative order
- **Restricted Access**: Can only add to the rear and remove from the front
- **Fair**: First come, first served principle

## FIFO Principle (First In, First Out)

The FIFO principle is the fundamental rule that governs queue operations:

```
Queue: [1] [2] [3] [4] [5]
       ↑                 ↑
    FRONT              REAR
    (Remove)           (Add)
```

- **Enqueue**: Add element to the REAR
- **Dequeue**: Remove element from the FRONT

### Visual Example:
```
Initial Queue: [A, B, C]
Add D: [A, B, C, D]  (D added to rear)
Remove: [B, C, D]    (A removed from front)
```

## Queue vs Stack

| Feature | Queue | Stack |
|---------|-------|-------|
| **Principle** | FIFO (First In, First Out) | LIFO (Last In, First Out) |
| **Insertion** | At rear (enqueue) | At top (push) |
| **Deletion** | From front (dequeue) | From top (pop) |
| **Access** | Front and rear | Only top |
| **Real-world** | Line of people | Stack of plates |

### Visual Comparison:

**Queue:**
```
Enqueue →  [1] [2] [3] [4]  → Dequeue
          FRONT      REAR
```

**Stack:**
```
           [4] ← Push/Pop
           [3]
           [2]
           [1]
          TOP
```

## Why Use Queues?

### Advantages:
1. **Fair Processing**: Ensures first-come, first-served order
2. **Predictable Behavior**: FIFO ordering is intuitive
3. **Efficient Operations**: O(1) time complexity for enqueue/dequeue
4. **Memory Management**: Helps in managing resources efficiently

### Common Applications:
- **Operating Systems**: Process scheduling, print spooling
- **Networking**: Data packet handling in routers
- **Web Servers**: Request handling
- **Breadth-First Search**: Graph traversal algorithm
- **Buffer Management**: Keyboard buffer, I/O buffering

## Types of Queues (Preview)

1. **Simple Queue**: Basic FIFO queue
2. **Circular Queue**: Rear connects to front to save space
3. **Priority Queue**: Elements processed by priority, not order
4. **Double-ended Queue (Deque)**: Insert/remove from both ends

## Key Terms

- **Enqueue**: Operation to add an element to the rear of the queue
- **Dequeue**: Operation to remove an element from the front of the queue
- **Front**: The first element in the queue (next to be removed)
- **Rear**: The last element in the queue (most recently added)
- **Overflow**: Trying to add to a full queue
- **Underflow**: Trying to remove from an empty queue

## Summary

Queues are fundamental data structures that model real-world waiting scenarios. They ensure fair, ordered processing of elements using the FIFO principle, making them essential for many computing applications from operating systems to web servers.

---

**Next**: Learn about the specific operations performed on queues and their implementations.