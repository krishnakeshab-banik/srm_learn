"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

const mockCourses = [
  {
    id: "ds1",
    title: "Data Structures - 1",
    instructor: "Dr. K Sarvanan",
    rating: "4.3",
    description: "Master the fundamentals of Data Structures and Algorithms to build efficient and optimized solutions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Data%20Structures-%201.jpg-nRfthDASY6KQwweVKq1NVHG9UpwZ4p.jpeg",
    overview: "Data Structures are essential for organizing and managing data efficiently...",
    subtopics: [
      { id: "intro", title: "Introduction", available: true, content: "Intro content..." },
      { id: "arrays", title: "Arrays", available: true, content: "Arrays content..." },
      { id: "linked-list", title: "Linked List", available: false, content: "Linked List content..." },
    ],
  },
  // ...other courses...
]

export default function EditContentPage() {
  const [auth, setAuth] = useState({ username: "", password: "", error: "" })
  const [isAuthed, setIsAuthed] = useState(false)
  const [courses, setCourses] = useState(mockCourses)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [editCourse, setEditCourse] = useState<any>(null)
  const [step, setStep] = useState<"course" | "subtopics" | "subtopic-content">("course")
  const [selectedSubtopic, setSelectedSubtopic] = useState<any>(null)
  const [editSubtopic, setEditSubtopic] = useState<any>(null)
  const [sidebarTopics, setSidebarTopics] = useState<any[]>([])
  const [selectedSidebar, setSelectedSidebar] = useState<any>(null)
  const [sidebarContent, setSidebarContent] = useState("")
  const [sidebarTitle, setSidebarTitle] = useState("")
  const [showSidebarEditor, setShowSidebarEditor] = useState(false)

  // Auth logic
  const handleLogin = () => {
    if (auth.username === "srmlearn" && auth.password === "SRMLEARN123") {
      setIsAuthed(true)
      setAuth({ username: "", password: "", error: "" })
    } else {
      setAuth({ ...auth, error: "Invalid credentials" })
    }
  }

  // Course edit logic
  const handleCourseSelect = (course: any) => {
    setSelectedCourse(course)
    setEditCourse({ ...course })
    setStep("course")
  }
  const handleCourseSave = () => {
    setCourses(courses.map(c => c.id === editCourse.id ? editCourse : c))
    setStep("subtopics")
  }

  // Subtopic edit logic
  const handleSubtopicEdit = (sub: any) => {
    setSelectedSubtopic(sub)
    setEditSubtopic({ ...sub })
    setStep("subtopic-content")
    // For demo, sidebar topics are subtopic content split by headers
    setSidebarTopics([
      { id: "main", title: sub.title, content: sub.content }
      // In real app, fetch sidebar topics from subtopic
    ])
    setSelectedSidebar({ id: "main", title: sub.title, content: sub.content })
    setSidebarContent(sub.content)
    setSidebarTitle(sub.title)
  }
  const handleSubtopicSave = () => {
    setCourses(courses.map(c =>
      c.id === selectedCourse.id
        ? {
            ...c,
            subtopics: c.subtopics.map((s: any) =>
              s.id === editSubtopic.id ? { ...editSubtopic, content: sidebarContent } : s
            ),
          }
        : c
    ))
    setStep("subtopics")
  }
  const handleSubtopicAvailableToggle = (sub: any) => {
    setCourses(courses.map(c =>
      c.id === selectedCourse.id
        ? {
            ...c,
            subtopics: c.subtopics.map((s: any) =>
              s.id === sub.id ? { ...s, available: !s.available } : s
            ),
          }
        : c
    ))
  }
  const handleAddSubtopic = () => {
    const newSub = { id: Date.now().toString(), title: "New Subtopic", available: false, content: "" }
    setCourses(courses.map(c =>
      c.id === selectedCourse.id
        ? { ...c, subtopics: [...c.subtopics, newSub] }
        : c
    ))
  }

  // Sidebar topic logic (for demo, only one topic)
  const handleSidebarTitleChange = (val: string) => {
    setSidebarTitle(val)
    setSelectedSidebar({ ...selectedSidebar, title: val })
  }
  const handleSidebarContentChange = (val: string) => {
    setSidebarContent(val)
    setSelectedSidebar({ ...selectedSidebar, content: val })
  }
  const handleSidebarSave = () => {
    setSidebarTopics(sidebarTopics.map(t =>
      t.id === selectedSidebar.id ? { ...selectedSidebar, title: sidebarTitle, content: sidebarContent } : t
    ))
  }
  const handleSidebarAdd = () => {
    const newSidebar = { id: Date.now().toString(), title: "New Sidebar Topic", content: "" }
    setSidebarTopics([...sidebarTopics, newSidebar])
  }
  const handleSidebarDelete = (id: string) => {
    setSidebarTopics(sidebarTopics.filter(t => t.id !== id))
  }

  // Rich text editor placeholder (replace with real editor in production)
  const RichTextEditor = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
    <Textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      className="min-h-[200px] font-mono"
      placeholder="Type content here. Use Markdown for formatting. (In production, use a rich text editor.)"
    />
  )

  if (!isAuthed) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Edit Content - Admin Login</CardTitle>
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
      </div>
    )
  }

  // Step 1: Course List
  if (!selectedCourse) {
    return (
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Edit Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleCourseSelect(course)}>
              <div className="relative h-40">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover rounded-t-lg" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <div className="text-sm text-gray-500">{course.instructor}</div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // Step 2: Edit Course Details
  if (step === "course") {
    return (
      <div className="container mx-auto py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Edit Course Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Course Image</label>
              <Input
                type="text"
                value={editCourse.image}
                onChange={e => setEditCourse({ ...editCourse, image: e.target.value })}
                placeholder="Paste image URL"
              />
              <div className="mt-2">
                <Image src={editCourse.image || "/placeholder.svg"} alt="Course" width={300} height={180} className="rounded" />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Course Name</label>
              <Input value={editCourse.title} onChange={e => setEditCourse({ ...editCourse, title: e.target.value })} />
            </div>
            <div>
              <label className="block font-medium mb-1">Instructor</label>
              <Input value={editCourse.instructor} onChange={e => setEditCourse({ ...editCourse, instructor: e.target.value })} />
            </div>
            <div>
              <label className="block font-medium mb-1">Rating</label>
              <Input value={editCourse.rating} onChange={e => setEditCourse({ ...editCourse, rating: e.target.value })} />
            </div>
            <div>
              <label className="block font-medium mb-1">Course Description</label>
              <Textarea value={editCourse.description} onChange={e => setEditCourse({ ...editCourse, description: e.target.value })} />
            </div>
            <div>
              <label className="block font-medium mb-1">Course Overview</label>
              <Textarea value={editCourse.overview} onChange={e => setEditCourse({ ...editCourse, overview: e.target.value })} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleCourseSave}>Continue</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  // Step 3: Edit Subtopics
  if (step === "subtopics") {
    return (
      <div className="container mx-auto py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Edit Subtopics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {editCourse.subtopics.map((sub: any) => (
                <div key={sub.id} className="flex items-center gap-2 border-b pb-2">
                  <Input
                    value={sub.title}
                    onChange={e => {
                      setEditCourse({
                        ...editCourse,
                        subtopics: editCourse.subtopics.map((s: any) =>
                          s.id === sub.id ? { ...s, title: e.target.value } : s
                        ),
                      })
                    }}
                  />
                  <Button
                    size="sm"
                    variant={sub.available ? "success" : "outline"}
                    onClick={() => handleSubtopicAvailableToggle(sub)}
                  >
                    {sub.available ? "Available" : "Unavailable"}
                  </Button>
                  <Button size="sm" onClick={() => handleSubtopicEdit(sub)}>
                    Edit Content
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={handleAddSubtopic}>Add Subtopic</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Step 4: Edit Subtopic Content and Sidebar
  if (step === "subtopic-content") {
    return (
      <div className="container mx-auto py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Edit Subtopic Content & Sidebar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-8">
              {/* Sidebar Topics */}
              <div className="w-1/3">
                <div className="mb-2 font-semibold">Sidebar Topics</div>
                <div className="space-y-2">
                  {sidebarTopics.map((topic) => (
                    <div key={topic.id} className="flex items-center gap-2">
                      <Input
                        value={topic.title}
                        onChange={e => {
                          setSidebarTopics(sidebarTopics.map(t =>
                            t.id === topic.id ? { ...t, title: e.target.value } : t
                          ))
                        }}
                        className="flex-1"
                      />
                      <Button size="sm" variant="outline" onClick={() => { setSelectedSidebar(topic); setSidebarTitle(topic.title); setSidebarContent(topic.content); }}>Edit</Button>
                      <Button size="sm" variant="destructive" onClick={() => handleSidebarDelete(topic.id)}>Delete</Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={handleSidebarAdd}>Add Sidebar Topic</Button>
                </div>
              </div>
              {/* Sidebar Content Editor */}
              <div className="flex-1">
                <div className="mb-2 font-semibold">Edit Content for: {sidebarTitle}</div>
                <Input
                  value={sidebarTitle}
                  onChange={e => handleSidebarTitleChange(e.target.value)}
                  className="mb-2"
                />
                <RichTextEditor value={sidebarContent} onChange={handleSidebarContentChange} />
                <div className="flex gap-2 mt-2">
                  <Button size="sm" onClick={handleSidebarSave}>Save Sidebar Content</Button>
                </div>
                {/* Add options for header, image, highlight, quiz, code editor, etc. */}
                <div className="mt-4 space-x-2">
                  <Button size="sm" variant="outline">Add Header</Button>
                  <Button size="sm" variant="outline">Add Image</Button>
                  <Button size="sm" variant="outline">Highlight Text</Button>
                  <Button size="sm" variant="outline">Add Quiz</Button>
                  <Button size="sm" variant="outline">Add Code Editor</Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSubtopicSave}>Save & Back to Subtopics</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return null
}
