"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThumbsUp, MessageSquare, Share2, Flag, Code, BookText, FileCode2 } from "lucide-react"

interface UserContent {
  id: string
  type: "code" | "explanation" | "resource"
  title: string
  content: string
  author: string
  likes: number
  comments: number
  timestamp: string
  language?: string
}

export default function UserContentSection() {
  const [activeTab, setActiveTab] = useState("view")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [contentType, setContentType] = useState<"code" | "explanation" | "resource">("code")
  const [language, setLanguage] = useState("cpp")
  const [author, setAuthor] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const [userContents, setUserContents] = useState<UserContent[]>([
    {
      id: "1",
      type: "code",
      title: "Singly Linked List Insert",
      content: `// Insert at beginning
void push(Node** head_ref, int new_data) {
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = *head_ref;
    *head_ref = new_node;
}`,
      author: "LinkedListGuru",
      likes: 7,
      comments: 1,
      timestamp: "2024-05-01",
      language: "cpp"
    },
    {
      id: "2",
      type: "explanation",
      title: "Why use Circular Linked List?",
      content: "Circular linked lists are useful for applications like round-robin scheduling, playlist looping, and buffer management because you can loop through the list endlessly.",
      author: "DSAStudent",
      likes: 5,
      comments: 0,
      timestamp: "2024-05-02",
    },
    {
      id: "3",
      type: "resource",
      title: "Interactive Linked List Visualizer",
      content: "Try this: https://ds1-iiith.vlabs.ac.in/exp/linked-list/index.html",
      author: "ResourceBot",
      likes: 10,
      comments: 2,
      timestamp: "2024-05-03",
    }
  ])

  const handleSubmit = () => {
    if (!title.trim() || !content.trim() || !author.trim()) {
      return
    }
    const newContent: UserContent = {
      id: Date.now().toString(),
      type: contentType,
      title,
      content,
      author,
      likes: 0,
      comments: 0,
      timestamp: new Date().toISOString().split('T')[0],
      language: contentType === "code" ? language : undefined
    }
    setUserContents([...userContents, newContent])
    setTitle("")
    setContent("")
    setAuthor("")
    setSuccessMessage("Your content has been added successfully!")
    setTimeout(() => setSuccessMessage(""), 3000)
    setActiveTab("view")
  }

  const handleLike = (id: string) => {
    setUserContents(
      userContents.map(item =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    )
  }

  const formatCode = (code: string, language: string = "cpp") => {
    return (
      <pre className={`language-${language} bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto`}>
        <code>{code}</code>
      </pre>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Community Contributions</h3>
          <TabsList className="w-[400px] grid grid-cols-2">
            <TabsTrigger value="view">View Content</TabsTrigger>
            <TabsTrigger value="contribute">Contribute</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="view" className="space-y-6">
          {userContents.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 pb-2">
                <div className="flex items-center gap-2">
                  {item.type === "code" && <Code className="h-4 w-4 text-blue-500" />}
                  {item.type === "explanation" && <BookText className="h-4 w-4 text-green-500" />}
                  {item.type === "resource" && <FileCode2 className="h-4 w-4 text-purple-500" />}
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
                <CardDescription>
                  Shared by {item.author} on {item.timestamp}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                {item.type === "code" ? (
                  formatCode(item.content, item.language)
                ) : (
                  <div className="whitespace-pre-line">{item.content}</div>
                )}
              </CardContent>
              <CardFooter className="border-t bg-gray-50 flex justify-between">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" onClick={() => handleLike(item.id)}>
                    <ThumbsUp className="h-4 w-4 mr-1" /> {item.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" /> {item.comments}
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="contribute" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Share Your Knowledge</CardTitle>
              <CardDescription>
                Contribute code examples, explanations, or resources to help others learn about linked lists.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {successMessage && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4">
                  {successMessage}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="content-type">Content Type</Label>
                <div className="flex gap-4">
                  <Label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={contentType === "code"}
                      onChange={() => setContentType("code")}
                      className="h-4 w-4"
                    />
                    <span>Code Example</span>
                  </Label>
                  <Label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={contentType === "explanation"}
                      onChange={() => setContentType("explanation")}
                      className="h-4 w-4"
                    />
                    <span>Explanation</span>
                  </Label>
                  <Label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={contentType === "resource"}
                      onChange={() => setContentType("resource")}
                      className="h-4 w-4"
                    />
                    <span>Resource</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a descriptive title"
                />
              </div>

              {contentType === "code" && (
                <div className="space-y-2">
                  <Label htmlFor="language">Programming Language</Label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={
                    contentType === "code"
                      ? "Paste your code example here..."
                      : contentType === "explanation"
                      ? "Write your explanation here..."
                      : "Share useful resources, links, or references..."
                  }
                  className="min-h-[200px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Your Name</Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter your name or username"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSubmit}>Submit Contribution</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
