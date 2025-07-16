"use client"

import QuizComponent from "../../ds-array/quiz-component"

export default function SearchingQuizSection() {
  return (
    <QuizComponent
      title="Test Your Knowledge of Searching"
      questions={[
        {
          question: "Which searching algorithm works only on sorted arrays?",
          options: ["Linear Search", "Binary Search", "Jump Search", "Interpolation Search"],
          correctAnswer: 1
        },
        {
          question: "What is the time complexity of linear search in the worst case?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
          correctAnswer: 2
        },
        {
          question: "Which searching algorithm divides the search interval in half each time?",
          options: ["Linear Search", "Binary Search", "Jump Search", "Fibonacci Search"],
          correctAnswer: 1
        },
        {
          question: "Which searching algorithm is best for unsorted data?",
          options: ["Binary Search", "Linear Search", "Jump Search", "Interpolation Search"],
          correctAnswer: 1
        },
        {
          question: "What is the best case time complexity of binary search?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
          correctAnswer: 0
        }
      ]}
    />
  )
}
