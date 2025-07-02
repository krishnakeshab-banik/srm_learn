"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle } from "lucide-react"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: QuizQuestion[]
  title: string
}

export default function QuizComponent({ questions, title }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted) return

    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = optionIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleSubmit = () => {
    if (isSubmitted) {
      // Reset the quiz
      setSelectedAnswers(Array(questions.length).fill(-1))
      setIsSubmitted(false)
      setScore(0)
      return
    }

    // Calculate score
    let newScore = 0
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        newScore++
      }
    }
    setScore(newScore)
    setIsSubmitted(true)
  }

  const allQuestionsAnswered = selectedAnswers.every((answer) => answer !== -1)

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold">{title}</h3>

      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="p-6 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-4">
            Question {questionIndex + 1}: {question.question}
          </h4>

          <RadioGroup
            value={selectedAnswers[questionIndex].toString()}
            onValueChange={(value) => handleAnswerSelect(questionIndex, Number.parseInt(value))}
            className="space-y-3"
          >
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`flex items-center space-x-2 p-3 rounded-md ${
                  isSubmitted && optionIndex === question.correctAnswer
                    ? "bg-green-100"
                    : isSubmitted &&
                      selectedAnswers[questionIndex] === optionIndex &&
                      optionIndex !== question.correctAnswer
                    ? "bg-red-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <RadioGroupItem
                  value={optionIndex.toString()}
                  id={`q${questionIndex}-o${optionIndex}`}
                  disabled={isSubmitted}
                />
                <Label htmlFor={`q${questionIndex}-o${optionIndex}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {isSubmitted && optionIndex === question.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {isSubmitted &&
                  selectedAnswers[questionIndex] === optionIndex &&
                  optionIndex !== question.correctAnswer && <XCircle className="h-5 w-5 text-red-500" />}
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}

      <div className="flex flex-col items-center space-y-4">
        {isSubmitted && (
          <div className="text-center p-4 bg-blue-50 rounded-lg w-full">
            <p className="text-lg font-semibold">
              Your Score: {score} out of {questions.length}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {score === questions.length
                ? "Perfect! You got all questions correct."
                : score >= questions.length / 2
                ? "Good job! Keep learning to improve further."
                : "Keep practicing to improve your understanding."}
            </p>
          </div>
        )}

        <Button onClick={handleSubmit} disabled={!isSubmitted && !allQuestionsAnswered} className="px-8">
          {isSubmitted ? "Try Again" : "Submit"}
        </Button>
      </div>
    </div>
  )
}