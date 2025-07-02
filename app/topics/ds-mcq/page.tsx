"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

type MCQ = {
  question: string
  options: string[]
  answer: number
  explanation: string
}

const initialQuestions: MCQ[] = [
  // ... For brevity, only a few are shown. Fill up to 100 as needed.
  {
    question: "Which data structure is used to implement recursion?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: 1,
    explanation: "Stack is used for recursion as it follows LIFO, which matches function call/return order."
  },
  {
    question: "What is the time complexity of searching an element in a balanced binary search tree?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    answer: 1,
    explanation: "A balanced BST has height log n, so search is O(log n)."
  },
  {
    question: "Which of the following is not a linear data structure?",
    options: ["Array", "Linked List", "Tree", "Stack"],
    answer: 2,
    explanation: "Tree is a hierarchical (non-linear) data structure."
  },
  // ... Add more up to 100 questions ...
]

export default function DS_MCQ_Practice() {
  const [questions, setQuestions] = useState<MCQ[]>(initialQuestions)
  const [tab, setTab] = useState("practice")
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [showAdd, setShowAdd] = useState(false)
  const [auth, setAuth] = useState({ username: "", password: "", error: "" })
  const [newQ, setNewQ] = useState({ question: "", options: ["", "", "", ""], answer: 0, explanation: "" })
  const [addSuccess, setAddSuccess] = useState("")
  const [editIdx, setEditIdx] = useState<number | null>(null)
  const [editQ, setEditQ] = useState({ question: "", options: ["", "", "", ""], answer: 0, explanation: "" })

  // MCQ Practice Logic
  const handleOption = (idx: number) => {
    setSelected(idx)
    setShowExplanation(true)
    if (idx === questions[current].answer) setScore(score + 1)
  }

  const handleNext = () => {
    setShowExplanation(false)
    setSelected(null)
    if (current + 1 < questions.length) setCurrent(current + 1)
  }

  const handlePrev = () => {
    setShowExplanation(false)
    setSelected(null)
    if (current > 0) setCurrent(current - 1)
  }

  const handleGoto = (idx: number) => {
    setShowExplanation(false)
    setSelected(null)
    setCurrent(idx)
  }

  const handleReset = () => {
    setCurrent(0)
    setSelected(null)
    setShowExplanation(false)
    setScore(0)
  }

  // Admin Auth
  const handleLogin = () => {
    if (auth.username === "srmlearn" && auth.password === "SRMLEARN123") {
      setShowAdd(true)
      setAuth({ username: "", password: "", error: "" })
    } else {
      setAuth({ ...auth, error: "Invalid credentials" })
    }
  }

  // Add Question Logic
  const handleAddQuestion = () => {
    if (
      !newQ.question.trim() ||
      newQ.options.some((o) => !o.trim()) ||
      newQ.explanation.trim() === ""
    ) {
      setAddSuccess("Please fill all fields.")
      return
    }
    setQuestions([...questions, { ...newQ, answer: Number(newQ.answer) }])
    setAddSuccess("Question added successfully!")
    setNewQ({ question: "", options: ["", "", "", ""], answer: 0, explanation: "" })
    setTimeout(() => setAddSuccess(""), 2000)
  }

  // Edit Question Logic
  const handleEditClick = (idx: number) => {
    setEditIdx(idx)
    setEditQ({ ...questions[idx] })
    setAddSuccess("")
  }
  const handleEditSave = () => {
    if (
      !editQ.question.trim() ||
      editQ.options.some((o) => !o.trim()) ||
      editQ.explanation.trim() === ""
    ) {
      setAddSuccess("Please fill all fields.")
      return
    }
    const updated = [...questions]
    updated[editIdx!] = { ...editQ, answer: Number(editQ.answer) }
    setQuestions(updated)
    setEditIdx(null)
    setAddSuccess("Question updated successfully!")
    setTimeout(() => setAddSuccess(""), 2000)
  }
  const handleEditCancel = () => {
    setEditIdx(null)
    setAddSuccess("")
  }

  // Delete Question Logic
  const handleDelete = (idx: number) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      setQuestions(questions.filter((_, i) => i !== idx))
      setAddSuccess("Question deleted successfully!")
      setTimeout(() => setAddSuccess(""), 2000)
      if (editIdx === idx) setEditIdx(null)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="practice">Practice MCQs</TabsTrigger>
          <TabsTrigger value="add">Add Question</TabsTrigger>
        </TabsList>
        <TabsContent value="practice">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>MCQ Practice ({current + 1} / {questions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 font-medium">{questions[current].question}</div>
              <div className="space-y-2 mb-4">
                {questions[current].options.map((opt, idx) => (
                  <Button
                    key={idx}
                    variant={selected === idx
                      ? (idx === questions[current].answer ? "success" : "destructive")
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
                <div className={`p-3 rounded-md mb-4 ${selected === questions[current].answer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {selected === questions[current].answer ? "Correct!" : "Incorrect."}
                  <div className="mt-2 text-sm">{questions[current].explanation}</div>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                <Button variant="secondary" size="sm" onClick={handlePrev} disabled={current === 0}>Prev</Button>
                <Button variant="secondary" size="sm" onClick={handleNext} disabled={current === questions.length - 1}>Next</Button>
                <Button variant="outline" size="sm" onClick={handleReset}>Reset Practice</Button>
                <span className="ml-auto font-semibold">Score: {score}</span>
              </div>
              <ScrollArea className="h-12">
                <div className="flex flex-wrap gap-1">
                  {questions.map((_, idx) => (
                    <Button
                      key={idx}
                      size="icon"
                      variant={idx === current ? "default" : "outline"}
                      onClick={() => handleGoto(idx)}
                    >
                      {idx + 1}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add">
          {!showAdd ? (
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Admin Login</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Username"
                  value={auth.username}
                  onChange={e => setAuth({ ...auth, username: e.target.value })}
                  className="mb-2"
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={auth.password}
                  onChange={e => setAuth({ ...auth, password: e.target.value })}
                  className="mb-2"
                />
                {auth.error && <div className="text-red-600 mb-2">{auth.error}</div>}
                <Button onClick={handleLogin}>Login</Button>
              </CardContent>
            </Card>
          ) : (
            <div>
              <Card className="max-w-2xl mx-auto mb-8">
                <CardHeader>
                  <CardTitle>Add MCQ Question</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Question"
                      value={newQ.question}
                      onChange={e => setNewQ({ ...newQ, question: e.target.value })}
                    />
                    {newQ.options.map((opt, idx) => (
                      <Input
                        key={idx}
                        placeholder={`Option ${idx + 1}`}
                        value={opt}
                        onChange={e => {
                          const opts = [...newQ.options]
                          opts[idx] = e.target.value
                          setNewQ({ ...newQ, options: opts })
                        }}
                      />
                    ))}
                    <div>
                      <label className="font-medium mr-2">Correct Option:</label>
                      <select
                        value={newQ.answer}
                        onChange={e => setNewQ({ ...newQ, answer: Number(e.target.value) })}
                        className="border rounded p-1"
                      >
                        {newQ.options.map((_, idx) => (
                          <option key={idx} value={idx}>{`Option ${idx + 1}`}</option>
                        ))}
                      </select>
                    </div>
                    <Textarea
                      placeholder="Explanation"
                      value={newQ.explanation}
                      onChange={e => setNewQ({ ...newQ, explanation: e.target.value })}
                    />
                    {addSuccess && <div className="text-green-600">{addSuccess}</div>}
                    <Button onClick={handleAddQuestion}>Add Question</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Edit/Delete Existing Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-6">
                      {questions.map((q, idx) =>
                        editIdx === idx ? (
                          <div key={idx} className="border rounded p-4 bg-gray-50">
                            <Textarea
                              value={editQ.question}
                              onChange={e => setEditQ({ ...editQ, question: e.target.value })}
                              className="mb-2"
                            />
                            {editQ.options.map((opt, oidx) => (
                              <Input
                                key={oidx}
                                value={opt}
                                onChange={e => {
                                  const opts = [...editQ.options]
                                  opts[oidx] = e.target.value
                                  setEditQ({ ...editQ, options: opts })
                                }}
                                className="mb-2"
                              />
                            ))}
                            <div className="mb-2">
                              <label className="font-medium mr-2">Correct Option:</label>
                              <select
                                value={editQ.answer}
                                onChange={e => setEditQ({ ...editQ, answer: Number(e.target.value) })}
                                className="border rounded p-1"
                              >
                                {editQ.options.map((_, oidx) => (
                                  <option key={oidx} value={oidx}>{`Option ${oidx + 1}`}</option>
                                ))}
                              </select>
                            </div>
                            <Textarea
                              value={editQ.explanation}
                              onChange={e => setEditQ({ ...editQ, explanation: e.target.value })}
                              className="mb-2"
                            />
                            <div className="flex gap-2">
                              <Button size="sm" onClick={handleEditSave}>Save</Button>
                              <Button size="sm" variant="secondary" onClick={handleEditCancel}>Cancel</Button>
                            </div>
                          </div>
                        ) : (
                          <div key={idx} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between bg-white">
                            <div>
                              <div className="font-semibold mb-1">{idx + 1}. {q.question}</div>
                              <ul className="mb-1 pl-4 list-disc text-sm">
                                {q.options.map((opt, oidx) => (
                                  <li key={oidx} className={q.answer === oidx ? "font-bold text-green-700" : ""}>
                                    {opt}
                                  </li>
                                ))}
                              </ul>
                              <div className="text-xs text-gray-500">Explanation: {q.explanation}</div>
                            </div>
                            <div className="flex gap-2 mt-2 md:mt-0">
                              <Button size="sm" variant="outline" onClick={() => handleEditClick(idx)}>Edit</Button>
                              <Button size="sm" variant="destructive" onClick={() => handleDelete(idx)}>Delete</Button>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
