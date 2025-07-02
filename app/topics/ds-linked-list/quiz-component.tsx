"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const questions = [
  {
    question: "What is the main advantage of a linked list over an array?",
    options: [
      "Random access of elements",
      "Dynamic size and efficient insertions/deletions",
      "Less memory usage",
      "Faster searching"
    ],
    correctAnswer: 1,
    explanation: "Linked lists can grow/shrink dynamically and allow efficient insertions/deletions, unlike arrays."
  },
  {
    question: "Which pointer does the last node of a singly linked list contain?",
    options: [
      "Pointer to the first node",
      "Pointer to itself",
      "NULL",
      "Pointer to previous node"
    ],
    correctAnswer: 2,
    explanation: "The last node's next pointer is NULL, indicating the end of the list."
  },
  {
    question: "Which linked list allows traversal in both directions?",
    options: [
      "Singly Linked List",
      "Circular Linked List",
      "Doubly Linked List",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Doubly linked lists have both next and previous pointers."
  },
  {
    question: "What is a common use of circular linked lists?",
    options: [
      "Implementing round-robin scheduling",
      "Binary search",
      "Sorting algorithms",
      "Direct access to elements"
    ],
    correctAnswer: 0,
    explanation: "Circular linked lists are used in round-robin scheduling and playlist looping."
  }
]

export default function InteractiveQuiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleOption = (idx: number) => {
    setSelected(idx)
    setShowExplanation(true)
    if (idx === questions[current].correctAnswer) setScore(score + 1)
  }

  const handleNext = () => {
    setShowExplanation(false)
    setSelected(null)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setShowExplanation(false)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Quiz Finished!</h3>
        <p className="mb-4">Your Score: <span className="font-bold">{score} / {questions.length}</span></p>
        <Button onClick={handleRestart}>Restart Quiz</Button>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow">
      <h4 className="font-semibold mb-4">Question {current + 1} of {questions.length}</h4>
      <div className="mb-4 font-medium">{questions[current].question}</div>
      <div className="space-y-2 mb-4">
        {questions[current].options.map((opt, idx) => (
          <Button
            key={idx}
            variant={selected === idx
              ? (idx === questions[current].correctAnswer ? "success" : "destructive")
              : "outline"}
            className="w-full text-left"
            disabled={selected !== null}
            onClick={() => handleOption(idx)}
          >
            {opt}
          </Button>
        ))}
      </div>
      {showExplanation && (
        <div className={`p-3 rounded-md mb-4 ${selected === questions[current].correctAnswer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {selected === questions[current].correctAnswer ? "Correct!" : "Incorrect."}
          <div className="mt-2 text-sm">{questions[current].explanation}</div>
        </div>
      )}
      <div className="flex justify-end">
        {showExplanation && (
          <Button onClick={handleNext}>
            {current + 1 === questions.length ? "Finish" : "Next"}
          </Button>
        )}
      </div>
    </div>
  )
}
