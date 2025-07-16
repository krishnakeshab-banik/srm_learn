"use client"

import QuizComponent from "../../ds-sorting/quiz-component"

export default function QueueQuizSection() {
  return (
    <QuizComponent
      title="Test Your Knowledge of Queues"
      questions={[
        {
          question: "What is the principle of a queue?",
          options: ["LIFO", "FIFO", "FILO", "None"],
          correctAnswer: 1,
        },
        {
          question: "Which operation inserts an element at the rear of the queue?",
          options: ["Enqueue", "Dequeue", "Push", "Pop"],
          correctAnswer: 0,
        },
        {
          question: "Which queue allows insertion and deletion at both ends?",
          options: ["Simple Queue", "Circular Queue", "Deque", "Priority Queue"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is NOT an application of queue?",
          options: [
            "CPU scheduling",
            "Printer queue",
            "Stack implementation",
            "BFS traversal",
          ],
          correctAnswer: 2,
        },
        {
          question: "What is the time complexity of enqueue and dequeue in a queue?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
          correctAnswer: 0,
        },
        {
          question: "Which data structure is used for BFS traversal?",
          options: ["Stack", "Queue", "Array", "Tree"],
          correctAnswer: 1,
        },
        {
          question: "Which queue connects the last position back to the first?",
          options: ["Simple Queue", "Circular Queue", "Priority Queue", "Deque"],
          correctAnswer: 1,
        },
        {
          question: "Which queue serves elements based on priority?",
          options: ["Simple Queue", "Circular Queue", "Priority Queue", "Deque"],
          correctAnswer: 2,
        },
        {
          question: "What is the front of the queue?",
          options: [
            "Where elements are inserted",
            "Where elements are deleted",
            "Both ends",
            "None",
          ],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is true for a queue?",
          options: [
            "Insertion at front, deletion at rear",
            "Insertion at rear, deletion at front",
            "Insertion and deletion at both ends",
            "None",
          ],
          correctAnswer: 1,
        },
      ]}
    />
  )
}
