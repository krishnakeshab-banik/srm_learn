"""
Queue Data Structure - Python Implementation Examples
=====================================================

This file contains comprehensive Python implementations of various queue types
with detailed comments and examples for better understanding.
"""

from collections import deque
import heapq
from typing import Any, Optional, List, Tuple


# =============================================================================
# 1. SIMPLE QUEUE USING LIST
# =============================================================================

class SimpleQueueList:
    """
    Basic queue implementation using Python list.
    
    Note: This is inefficient for large queues due to O(n) dequeue operation.
    """
    
    def __init__(self):
        """Initialize empty queue."""
        self.queue = []
    
    def enqueue(self, item: Any) -> None:
        """
        Add item to rear of queue.
        Time Complexity: O(1)
        """
        self.queue.append(item)
    
    def dequeue(self) -> Any:
        """
        Remove and return item from front of queue.
        Time Complexity: O(n) - due to list shifting
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.queue.pop(0)  # O(n) operation
    
    def peek(self) -> Any:
        """
        Return front item without removing it.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.queue[0]
    
    def is_empty(self) -> bool:
        """Check if queue is empty."""
        return len(self.queue) == 0
    
    def size(self) -> int:
        """Return number of items in queue."""
        return len(self.queue)
    
    def __str__(self) -> str:
        """String representation of queue."""
        return f"Queue: {self.queue}"


# =============================================================================
# 2. QUEUE USING COLLECTIONS.DEQUE (RECOMMENDED)
# =============================================================================

class QueueDeque:
    """
    Efficient queue implementation using collections.deque.
    
    This is the recommended approach for queue in Python.
    All operations are O(1).
    """
    
    def __init__(self):
        """Initialize empty queue using deque."""
        self.queue = deque()
    
    def enqueue(self, item: Any) -> None:
        """
        Add item to rear of queue.
        Time Complexity: O(1)
        """
        self.queue.append(item)
    
    def dequeue(self) -> Any:
        """
        Remove and return item from front of queue.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.queue.popleft()  # O(1) operation
    
    def peek(self) -> Any:
        """
        Return front item without removing it.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.queue[0]
    
    def is_empty(self) -> bool:
        """Check if queue is empty."""
        return len(self.queue) == 0
    
    def size(self) -> int:
        """Return number of items in queue."""
        return len(self.queue)
    
    def __str__(self) -> str:
        """String representation of queue."""
        return f"Queue: {list(self.queue)}"


# =============================================================================
# 3. QUEUE USING CLASSES (OOP APPROACH)
# =============================================================================

class Node:
    """Node class for linked list implementation."""
    
    def __init__(self, data: Any):
        self.data = data
        self.next: Optional['Node'] = None


class QueueLinkedList:
    """
    Queue implementation using linked list.
    
    All operations are O(1).
    Dynamic size, no memory waste.
    """
    
    def __init__(self):
        """Initialize empty queue."""
        self.front: Optional[Node] = None
        self.rear: Optional[Node] = None
        self._size = 0
    
    def enqueue(self, item: Any) -> None:
        """
        Add item to rear of queue.
        Time Complexity: O(1)
        """
        new_node = Node(item)
        
        if self.is_empty():
            # First node
            self.front = self.rear = new_node
        else:
            # Add to rear
            self.rear.next = new_node
            self.rear = new_node
        
        self._size += 1
    
    def dequeue(self) -> Any:
        """
        Remove and return item from front of queue.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        
        item = self.front.data
        self.front = self.front.next
        
        if self.front is None:
            # Queue became empty
            self.rear = None
        
        self._size -= 1
        return item
    
    def peek(self) -> Any:
        """
        Return front item without removing it.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.front.data
    
    def is_empty(self) -> bool:
        """Check if queue is empty."""
        return self.front is None
    
    def size(self) -> int:
        """Return number of items in queue."""
        return self._size
    
    def __str__(self) -> str:
        """String representation of queue."""
        if self.is_empty():
            return "Queue: []"
        
        items = []
        current = self.front
        while current:
            items.append(str(current.data))
            current = current.next
        
        return f"Queue: [{' -> '.join(items)}]"


# =============================================================================
# 4. CIRCULAR QUEUE WITH FIXED SIZE
# =============================================================================

class CircularQueue:
    """
    Circular queue implementation with fixed size.
    
    Overcomes memory wastage of linear queue.
    All operations are O(1).
    """
    
    def __init__(self, max_size: int):
        """
        Initialize circular queue with maximum size.
        
        Args:
            max_size: Maximum capacity of the queue
        """
        self.max_size = max_size
        self.queue = [None] * max_size
        self.front = 0
        self.rear = 0
        self.count = 0
    
    def enqueue(self, item: Any) -> None:
        """
        Add item to rear of queue.
        Time Complexity: O(1)
        """
        if self.is_full():
            raise OverflowError("Queue is full")
        
        self.queue[self.rear] = item
        self.rear = (self.rear + 1) % self.max_size
        self.count += 1
    
    def dequeue(self) -> Any:
        """
        Remove and return item from front of queue.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        
        item = self.queue[self.front]
        self.queue[self.front] = None  # Clear reference
        self.front = (self.front + 1) % self.max_size
        self.count -= 1
        
        return item
    
    def peek(self) -> Any:
        """
        Return front item without removing it.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.queue[self.front]
    
    def is_empty(self) -> bool:
        """Check if queue is empty."""
        return self.count == 0
    
    def is_full(self) -> bool:
        """Check if queue is full."""
        return self.count == self.max_size
    
    def size(self) -> int:
        """Return number of items in queue."""
        return self.count
    
    def display(self) -> str:
        """Display queue contents with positions."""
        if self.is_empty():
            return "Circular Queue: []"
        
        items = []
        for i in range(self.count):
            pos = (self.front + i) % self.max_size
            items.append(f"{self.queue[pos]}")
        
        return f"Circular Queue: [{' -> '.join(items)}]"
    
    def __str__(self) -> str:
        """String representation of queue."""
        return self.display()


# =============================================================================
# 5. PRIORITY QUEUE USING HEAPQ
# =============================================================================

class PriorityQueueHeap:
    """
    Priority queue implementation using heapq (min-heap).
    
    Elements with lower priority value are dequeued first.
    For max-heap behavior, use negative priorities.
    """
    
    def __init__(self):
        """Initialize empty priority queue."""
        self.heap = []
        self.entry_count = 0  # For tie-breaking
    
    def enqueue(self, item: Any, priority: int) -> None:
        """
        Add item with given priority.
        
        Args:
            item: Item to add
            priority: Priority (lower value = higher priority)
        
        Time Complexity: O(log n)
        """
        # Use entry_count to break ties (maintain insertion order)
        heapq.heappush(self.heap, (priority, self.entry_count, item))
        self.entry_count += 1
    
    def dequeue(self) -> Any:
        """
        Remove and return highest priority item.
        Time Complexity: O(log n)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        
        priority, _, item = heapq.heappop(self.heap)
        return item
    
    def peek(self) -> Any:
        """
        Return highest priority item without removing it.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.heap[0][2]
    
    def is_empty(self) -> bool:
        """Check if queue is empty."""
        return len(self.heap) == 0
    
    def size(self) -> int:
        """Return number of items in queue."""
        return len(self.heap)
    
    def __str__(self) -> str:
        """String representation of queue."""
        if self.is_empty():
            return "Priority Queue: []"
        
        items = [(priority, item) for priority, _, item in self.heap]
        return f"Priority Queue: {items}"


# =============================================================================
# 6. PRIORITY QUEUE USING QUEUE.PRIORITYQUEUE
# =============================================================================

import queue

class PriorityQueueBuiltin:
    """
    Priority queue using built-in queue.PriorityQueue.
    
    Thread-safe implementation suitable for multi-threaded applications.
    """
    
    def __init__(self, max_size: int = 0):
        """
        Initialize priority queue.
        
        Args:
            max_size: Maximum size (0 = unlimited)
        """
        self.pq = queue.PriorityQueue(maxsize=max_size)
        self.entry_count = 0
    
    def enqueue(self, item: Any, priority: int) -> None:
        """
        Add item with given priority.
        
        Args:
            item: Item to add
            priority: Priority (lower value = higher priority)
        """
        self.pq.put((priority, self.entry_count, item))
        self.entry_count += 1
    
    def dequeue(self) -> Any:
        """Remove and return highest priority item."""
        if self.is_empty():
            raise IndexError("Queue is empty")
        
        priority, _, item = self.pq.get()
        return item
    
    def is_empty(self) -> bool:
        """Check if queue is empty."""
        return self.pq.empty()
    
    def size(self) -> int:
        """Return number of items in queue."""
        return self.pq.qsize()
    
    def __str__(self) -> str:
        """String representation of queue."""
        return f"Priority Queue (size: {self.size()})"


# =============================================================================
# 7. DOUBLE-ENDED QUEUE (DEQUE)
# =============================================================================

class DoubleEndedQueue:
    """
    Double-ended queue implementation.
    
    Allows insertion and deletion from both ends.
    Uses collections.deque internally for efficiency.
    """
    
    def __init__(self):
        """Initialize empty deque."""
        self.deque = deque()
    
    def add_front(self, item: Any) -> None:
        """
        Add item to front of deque.
        Time Complexity: O(1)
        """
        self.deque.appendleft(item)
    
    def add_rear(self, item: Any) -> None:
        """
        Add item to rear of deque.
        Time Complexity: O(1)
        """
        self.deque.append(item)
    
    def remove_front(self) -> Any:
        """
        Remove and return item from front.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Deque is empty")
        return self.deque.popleft()
    
    def remove_rear(self) -> Any:
        """
        Remove and return item from rear.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Deque is empty")
        return self.deque.pop()
    
    def peek_front(self) -> Any:
        """
        Return front item without removing it.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Deque is empty")
        return self.deque[0]
    
    def peek_rear(self) -> Any:
        """
        Return rear item without removing it.
        Time Complexity: O(1)
        """
        if self.is_empty():
            raise IndexError("Deque is empty")
        return self.deque[-1]
    
    def is_empty(self) -> bool:
        """Check if deque is empty."""
        return len(self.deque) == 0
    
    def size(self) -> int:
        """Return number of items in deque."""
        return len(self.deque)
    
    def __str__(self) -> str:
        """String representation of deque."""
        return f"Deque: {list(self.deque)}"


# =============================================================================
# EXAMPLE USAGE AND DEMONSTRATIONS
# =============================================================================

def demonstrate_simple_queue():
    """Demonstrate simple queue operations."""
    print("=== Simple Queue (using list) ===")
    q = SimpleQueueList()
    
    # Enqueue operations
    for i in [10, 20, 30, 40]:
        q.enqueue(i)
        print(f"Enqueued {i}: {q}")
    
    # Dequeue operations
    while not q.is_empty():
        item = q.dequeue()
        print(f"Dequeued {item}: {q}")
    
    print()


def demonstrate_efficient_queue():
    """Demonstrate efficient queue using deque."""
    print("=== Efficient Queue (using deque) ===")
    q = QueueDeque()
    
    # Enqueue operations
    for i in ['A', 'B', 'C', 'D']:
        q.enqueue(i)
        print(f"Enqueued {i}: {q}")
    
    # Peek operation
    print(f"Front element: {q.peek()}")
    
    # Dequeue operations
    while not q.is_empty():
        item = q.dequeue()
        print(f"Dequeued {item}: {q}")
    
    print()


def demonstrate_circular_queue():
    """Demonstrate circular queue operations."""
    print("=== Circular Queue ===")
    q = CircularQueue(5)
    
    # Fill the queue
    for i in range(1, 6):
        q.enqueue(i * 10)
        print(f"Enqueued {i * 10}: {q}")
    
    # Dequeue some elements
    for _ in range(2):
        item = q.dequeue()
        print(f"Dequeued {item}: {q}")
    
    # Add more elements (showing circular behavior)
    for i in [60, 70]:
        q.enqueue(i)
        print(f"Enqueued {i}: {q}")
    
    print()


def demonstrate_priority_queue():
    """Demonstrate priority queue operations."""
    print("=== Priority Queue ===")
    q = PriorityQueueHeap()
    
    # Add tasks with different priorities
    tasks = [
        ("Low priority task", 3),
        ("High priority task", 1),
        ("Medium priority task", 2),
        ("Critical task", 0)
    ]
    
    for task, priority in tasks:
        q.enqueue(task, priority)
        print(f"Added: {task} (priority {priority})")
    
    print(f"\nQueue state: {q}")
    
    # Process tasks by priority
    print("\nProcessing tasks by priority:")
    while not q.is_empty():
        task = q.dequeue()
        print(f"Processing: {task}")
    
    print()


def demonstrate_deque():
    """Demonstrate double-ended queue operations."""
    print("=== Double-Ended Queue (Deque) ===")
    dq = DoubleEndedQueue()
    
    # Add elements to both ends
    dq.add_rear('B')
    print(f"Added B to rear: {dq}")
    
    dq.add_front('A')
    print(f"Added A to front: {dq}")
    
    dq.add_rear('C')
    print(f"Added C to rear: {dq}")
    
    dq.add_front('Z')
    print(f"Added Z to front: {dq}")
    
    # Remove from both ends
    front = dq.remove_front()
    print(f"Removed from front: {front}, Deque: {dq}")
    
    rear = dq.remove_rear()
    print(f"Removed from rear: {rear}, Deque: {dq}")
    
    print()


def demonstrate_real_world_applications():
    """Show real-world applications of queues."""
    print("=== Real-World Applications ===")
    
    # 1. Task Scheduling
    print("1. Task Scheduling:")
    task_queue = PriorityQueueHeap()
    
    # Add tasks with priorities
    task_queue.enqueue("System backup", 1)
    task_queue.enqueue("Send email", 3)
    task_queue.enqueue("Process payment", 0)  # Highest priority
    task_queue.enqueue("Update database", 2)
    
    print("Processing tasks in priority order:")
    while not task_queue.is_empty():
        task = task_queue.dequeue()
        print(f"  - {task}")
    
    # 2. Print Queue
    print("\n2. Print Queue:")
    print_queue = QueueDeque()
    
    documents = ["Document1.pdf", "Report.docx", "Image.jpg"]
    for doc in documents:
        print_queue.enqueue(doc)
        print(f"  Added to print queue: {doc}")
    
    print("Printing documents:")
    while not print_queue.is_empty():
        doc = print_queue.dequeue()
        print(f"  Printing: {doc}")
    
    # 3. Undo/Redo Operations
    print("\n3. Undo/Redo Operations:")
    undo_stack = DoubleEndedQueue()
    
    operations = ["Type 'Hello'", "Type ' World'", "Delete 'World'"]
    for op in operations:
        undo_stack.add_rear(op)
        print(f"  Performed: {op}")
    
    print("Undo operations:")
    while not undo_stack.is_empty():
        op = undo_stack.remove_rear()
        print(f"  Undoing: {op}")
    
    print()


def performance_comparison():
    """Compare performance of different queue implementations."""
    print("=== Performance Comparison ===")
    
    import time
    
    # Test data
    n = 10000
    
    # Test SimpleQueueList (inefficient)
    start = time.time()
    q1 = SimpleQueueList()
    for i in range(n):
        q1.enqueue(i)
    for i in range(n):
        q1.dequeue()
    time1 = time.time() - start
    
    # Test QueueDeque (efficient)
    start = time.time()
    q2 = QueueDeque()
    for i in range(n):
        q2.enqueue(i)
    for i in range(n):
        q2.dequeue()
    time2 = time.time() - start
    
    print(f"SimpleQueueList ({n} operations): {time1:.4f} seconds")
    print(f"QueueDeque ({n} operations): {time2:.4f} seconds")
    print(f"Speedup: {time1/time2:.2f}x faster")
    
    print()


if __name__ == "__main__":
    """Run all demonstrations."""
    print("Queue Data Structure - Python Implementation Examples")
    print("=" * 55)
    print()
    
    # Run all demonstrations
    demonstrate_simple_queue()
    demonstrate_efficient_queue()
    demonstrate_circular_queue()
    demonstrate_priority_queue()
    demonstrate_deque()
    demonstrate_real_world_applications()
    performance_comparison()
    
    print("All demonstrations completed!")