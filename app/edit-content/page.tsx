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

  // Step 3: Edit Subtopics (show as main explore subtopics page, but editable)
  if (step === "subtopics") {
    // Simulate the main explore subtopics UI
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => setStep("course")}
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
            >
              ← Back to Course Overview
            </Button>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h1 className="text-3xl font-bold mb-3 text-gray-800">{editCourse.title}</h1>
            <p className="text-gray-600 mb-4">{editCourse.overview}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{editCourse.subtopics.length} subtopics</span>
              <span className="mx-2">•</span>
              <span>
                {
                  editCourse.subtopics.filter((s: any) => s.available).length
                } available now
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Subtopics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editCourse.subtopics.map((sub: any, idx: number) => (
              <div key={sub.id} className="relative group">
                <Card
                  className={`hover:shadow-md transition-all duration-300 border-l-4 ${
                    sub.available ? "border-l-primary" : "opacity-75"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        {/* Icon can be dynamic per subtopic */}
                        <span className="font-bold text-lg">{idx + 1}</span>
                      </div>
                      <div>
                        <input
                          className="font-semibold text-gray-800 bg-transparent border-b border-dashed border-gray-300 focus:outline-none focus:border-primary"
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
                        {sub.available ? (
                          <p className="text-sm text-primary mt-1">Available now</p>
                        ) : (
                          <p className="text-sm text-muted-foreground mt-1">Content will be available soon</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        variant={sub.available ? "success" : "outline"}
                        onClick={() => {
                          setEditCourse({
                            ...editCourse,
                            subtopics: editCourse.subtopics.map((s: any) =>
                              s.id === sub.id ? { ...s, available: !s.available } : s
                            ),
                          })
                        }}
                      >
                        {sub.available ? "Available" : "Unavailable"}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedSubtopic(sub)
                          setEditSubtopic({ ...sub })
                          setStep("subtopic-content")
                          setSidebarTopics([{ id: "main", title: sub.title, content: sub.content }])
                          setSelectedSidebar({ id: "main", title: sub.title, content: sub.content })
                          setSidebarContent(sub.content)
                          setSidebarTitle(sub.title)
                        }}
                      >
                        Edit Content
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setEditCourse({
                            ...editCourse,
                            subtopics: editCourse.subtopics.filter((s: any) => s.id !== sub.id)
                          })
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Add Subtopic Card */}
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                className="w-full h-full min-h-[120px] border-dashed border-2"
                onClick={() => {
                  const newSub = { id: Date.now().toString(), title: "New Subtopic", available: false, content: "" }
                  setEditCourse({
                    ...editCourse,
                    subtopics: [...editCourse.subtopics, newSub]
                  })
                }}
              >
                + Add Subtopic
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 4: Edit Subtopic Content and Sidebar (show as main subtopic page, but editable)
  if (step === "subtopic-content") {
    // Helper to insert at cursor position in textarea
    function insertAtCursor(textareaId: string, insertText: string) {
      const textarea = document.getElementById(textareaId) as HTMLTextAreaElement | null;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const before = sidebarContent.substring(0, start);
      const after = sidebarContent.substring(end);
      setSidebarContent(before + insertText + after);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + insertText.length;
        textarea.focus();
      }, 0);
    }

    // Unique id for textarea for cursor insertion
    const textareaId = "sidebar-content-editor";

    // Save all sidebar topics' content to the subtopic (so main page reflects all sidebar topics)
    const handleSaveAndBack = () => {
      setEditCourse({
        ...editCourse,
        subtopics: editCourse.subtopics.map((s: any) =>
          s.id === editSubtopic.id
            ? {
                ...editSubtopic,
                // Save all sidebar topics as an array (or serialize as needed for your main page)
                sidebarTopics: [...sidebarTopics],
                // Optionally, keep the first topic's content as main content for backward compatibility
                content: sidebarTopics.length > 0 ? sidebarTopics[0].content : "",
              }
            : s
        ),
      });
      setStep("subtopics");
    };

    // When switching sidebar topic, update the selectedSidebar, sidebarTitle, sidebarContent
    // When saving, update the sidebarTopics array and also update the subtopic's sidebarTopics/content

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
          {/* Sidebar Topics (like main page, but editable) */}
          <aside className="w-full md:w-1/4">
            <div className="mb-4 flex justify-between items-center">
              <span className="font-semibold text-lg">Sidebar Topics</span>
              <Button size="sm" variant="outline" onClick={() => {
                const newSidebar = { id: Date.now().toString(), title: "New Sidebar Topic", content: "" }
                setSidebarTopics([...sidebarTopics, newSidebar])
                setSelectedSidebar(newSidebar)
                setSidebarTitle(newSidebar.title)
                setSidebarContent(newSidebar.content)
              }}>
                + Add
              </Button>
            </div>
            <div className="space-y-2">
              {sidebarTopics.map((topic) => (
                <div key={topic.id} className={`flex items-center gap-2 ${selectedSidebar?.id === topic.id ? "bg-blue-50" : ""}`}>
                  <Input
                    value={topic.title}
                    onChange={e => {
                      setSidebarTopics(sidebarTopics.map(t =>
                        t.id === topic.id ? { ...t, title: e.target.value } : t
                      ))
                    }}
                    className="flex-1"
                  />
                  <Button size="sm" variant="outline" onClick={() => {
                    setSelectedSidebar(topic)
                    setSidebarTitle(topic.title)
                    setSidebarContent(topic.content)
                  }}>Edit</Button>
                  <Button size="sm" variant="destructive" onClick={() => {
                    setSidebarTopics(sidebarTopics.filter(t => t.id !== topic.id))
                    if (selectedSidebar?.id === topic.id) {
                      setSelectedSidebar(null)
                      setSidebarTitle("")
                      setSidebarContent("")
                    }
                  }}>Delete</Button>
                </div>
              ))}
            </div>
          </aside>
          {/* Main Content Editor for selected sidebar topic */}
          <main className="flex-1">
            {selectedSidebar ? (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="mb-4 flex flex-col md:flex-row md:items-center gap-2">
                  <Input
                    value={sidebarTitle}
                    onChange={e => setSidebarTitle(e.target.value)}
                    className="font-bold text-xl"
                    placeholder="Sidebar Topic Title"
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      setSidebarTopics(sidebarTopics.map(t =>
                        t.id === selectedSidebar.id ? { ...t, title: sidebarTitle, content: sidebarContent } : t
                      ))
                    }}
                  >
                    Save Title
                  </Button>
                </div>
                {/* Content Editing Area */}
                <Textarea
                  id={textareaId}
                  value={sidebarContent}
                  onChange={e => setSidebarContent(e.target.value)}
                  className="min-h-[200px] font-mono mb-4"
                  placeholder="Type content here. Use Markdown for formatting. (In production, use a rich text editor.)"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Add Title Box */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n## Title Box\n")}
                  >Add Title Box</Button>
                  {/* Add Paragraph Box */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n> Paragraph Box\n")}
                  >Add Paragraph Box</Button>
                  {/* Highlight */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n<span style=\"background:yellow\">Highlight this text</span>\n")}
                  >Highlight</Button>
                  {/* Table */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n| Header1 | Header2 |\n| ------- | ------- |\n| Cell1   | Cell2   |\n")}
                  >Add Table</Button>
                  {/* Image */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n![Alt text](image-url)\n")}
                  >Add Image</Button>
                  {/* Code Editor */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n```cpp\n// Your code here\n```\n")}
                  >Add Code Editor</Button>
                  {/* Quiz */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n<!-- QUIZ_START -->\nQuestion: ...\nOptions: ...\nAnswer: ...\n<!-- QUIZ_END -->\n")}
                  >Add Quiz</Button>
                  {/* Poll */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => insertAtCursor(textareaId, "\n<!-- POLL_START -->\nPoll Question: ...\nOptions: ...\n<!-- POLL_END -->\n")}
                  >Add Poll</Button>
                  {/* Delete Content */}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => setSidebarContent("")}
                  >Delete Content</Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setSidebarTopics(sidebarTopics.map(t =>
                        t.id === selectedSidebar.id ? { ...t, title: sidebarTitle, content: sidebarContent } : t
                      ))
                    }}
                  >
                    Save Content
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      setSidebarTitle(selectedSidebar.title)
                      setSidebarContent(selectedSidebar.content)
                    }}
                  >
                    Reset
                  </Button>
                </div>
                <div className="mt-8">
                  <div className="font-semibold mb-2">Live Preview:</div>
                  <div className="prose prose-sm bg-gray-50 p-4 rounded">
                    {/* Render markdown and HTML for preview */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sidebarContent
                          .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
                            `<pre class="bg-gray-900 text-green-200 p-2 rounded mb-2"><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
                          )
                          .replace(/\n## (.*)/g, "<h2 class='text-xl font-bold my-2'>$1</h2>")
                          .replace(/\n> (.*)/g, "<div class='bg-gray-100 p-2 rounded my-2'>$1</div>")
                          .replace(/\|(.+)\|\n\|(.+)\|\n((?:\|.+\|\n?)*)/g, (match) => {
                            // crude markdown table to html
                            const rows = match.trim().split('\n');
                            const header = rows[0].split('|').filter(Boolean).map(cell => `<th>${cell.trim()}</th>`).join('');
                            const body = rows.slice(2).map(row =>
                              `<tr>${row.split('|').filter(Boolean).map(cell => `<td>${cell.trim()}</td>`).join('')}</tr>`
                            ).join('');
                            return `<table class="table-auto border mb-2"><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table>`;
                          })
                          .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="my-2 rounded shadow" />')
                          .replace(/<span style="background:yellow">(.+?)<\/span>/g, '<span style="background:yellow">$1</span>')
                          .replace(/<!-- QUIZ_START -->([\s\S]*?)<!-- QUIZ_END -->/g, '<div class="bg-blue-50 p-2 rounded my-2">[Quiz Block]</div>')
                          .replace(/<!-- POLL_START -->([\s\S]*?)<!-- POLL_END -->/g, '<div class="bg-green-50 p-2 rounded my-2">[Poll Block]</div>')
                          .replace(/\n/g, "<br/>")
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-center mt-16">Select a sidebar topic to edit its content.</div>
            )}
            <div className="flex justify-end mt-8">
              <Button onClick={handleSaveAndBack}>Save & Back to Subtopics</Button>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return null
}
