# Queue Operations

## Basic Queue Operations

A queue supports several fundamental operations that enable its FIFO behavior:

## 1. Enqueue (Insertion)

**Purpose**: Add an element to the rear of the queue

**Process**:
1. Check if queue is full (overflow condition)
2. If queue is empty, set both front and rear to 0
3. Otherwise, increment rear pointer
4. Insert element at rear position

**Visual Example**:
```
Before: [A] [B] [C] [ ]
                    ↑
                  REAR

Enqueue(D):
After:  [A] [B] [C] [D]
                      ↑
                    REAR
```

**Pseudocode**:
```
function enqueue(element):
    if isFull():
        print("Queue Overflow")
        return
    
    if isEmpty():
        front = 0
        rear = 0
    else:
        rear = rear + 1
    
    queue[rear] = element
```

## 2. Dequeue (Deletion)

**Purpose**: Remove and return the element from the front of the queue

**Process**:
1. Check if queue is empty (underflow condition)
2. Store the front element to return
3. Increment front pointer
4. If queue becomes empty, reset front and rear to -1

**Visual Example**:
```
Before: [A] [B] [C] [D]
         ↑
       FRONT

Dequeue():
After:  [ ] [B] [C] [D]
             ↑
           FRONT
Returns: A
```

**Pseudocode**:
```
function dequeue():
    if isEmpty():
        print("Queue Underflow")
        return null
    
    element = queue[front]
    
    if front == rear:  // Only one element
        front = -1
        rear = -1
    else:
        front = front + 1
    
    return element
```

## 3. Front/Peek

**Purpose**: Get the value of the front element without removing it

**Process**:
1. Check if queue is empty
2. Return the element at front position

**Visual Example**:
```
Queue: [A] [B] [C] [D]
        ↑
      FRONT

peek() returns: A
Queue remains: [A] [B] [C] [D]
```

**Pseudocode**:
```
function peek():
    if isEmpty():
        print("Queue is empty")
        return null
    
    return queue[front]
```

## 4. IsEmpty

**Purpose**: Check if the queue has no elements

**Condition**: `front == -1` (or `front > rear`)

**Pseudocode**:
```
function isEmpty():
    return front == -1
```

## 5. IsFull

**Purpose**: Check if the queue has reached maximum capacity

**Condition**: `rear == SIZE - 1` (for array implementation)

**Pseudocode**:
```
function isFull():
    return rear == SIZE - 1
```

## 6. Size

**Purpose**: Get the current number of elements in the queue

**Calculation**: `rear - front + 1` (when not empty)

**Pseudocode**:
```
function size():
    if isEmpty():
        return 0
    return rear - front + 1
```

## Complete Operation Flow

### Step-by-Step Example:

1. **Initial State**: Empty queue
   ```
   Queue: [ ] [ ] [ ] [ ]
   front = -1, rear = -1
   ```

2. **Enqueue(10)**:
   ```
   Queue: [10] [ ] [ ] [ ]
   front = 0, rear = 0
   ```

3. **Enqueue(20)**:
   ```
   Queue: [10] [20] [ ] [ ]
   front = 0, rear = 1
   ```

4. **Enqueue(30)**:
   ```
   Queue: [10] [20] [30] [ ]
   front = 0, rear = 2
   ```

5. **Dequeue()** (returns 10):
   ```
   Queue: [ ] [20] [30] [ ]
   front = 1, rear = 2
   ```

6. **Peek()** (returns 20):
   ```
   Queue: [ ] [20] [30] [ ]
   front = 1, rear = 2 (unchanged)
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
| Size      | O(1)           |

### Space Complexity:
- **Array Implementation**: O(n) where n is the maximum size
- **Linked List Implementation**: O(n) where n is the current number of elements

## Implementation Considerations

### Array Implementation:
**Advantages**:
- Simple to implement
- Memory efficient
- Fast random access

**Disadvantages**:
- Fixed size
- Memory wastage (as elements are dequeued)

### Linked List Implementation:
**Advantages**:
- Dynamic size
- No memory wastage
- Efficient memory utilization

**Disadvantages**:
- Extra memory for pointers
- No random access

## Common Edge Cases

1. **Empty Queue Operations**:
   - Dequeue from empty queue → Underflow
   - Peek empty queue → Error

2. **Full Queue Operations**:
   - Enqueue to full queue → Overflow

3. **Single Element Queue**:
   - Dequeue makes queue empty
   - front == rear condition

## Error Handling

```python
class QueueError(Exception):
    pass

class QueueOverflowError(QueueError):
    pass

class QueueUnderflowError(QueueError):
    pass
```

## Summary

Queue operations maintain the FIFO principle while providing efficient O(1) time complexity for all basic operations. Understanding these operations is crucial for implementing queues and using them effectively in various applications.

---

**Next**: Explore different types of queues and their specialized use cases.