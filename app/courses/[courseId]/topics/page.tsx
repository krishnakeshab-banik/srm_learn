import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  List,
  Box,
  Network,
  Search,
  FileText,
  Database,
  GitBranch,
  GitMerge,
  GitPullRequest,
  Layers,
  Code,
  FileCode,
  Cpu,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function CourseTopicsPage({ params }: { params: { courseId: string } }) {
  const topics = [
    {
      id: "ds-tutorial",
      title: "1- DS Tutorial",
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      available: true,
    },
    { id: "ds-sorting", title: "2- DS Sorting", icon: <List className="h-6 w-6 text-green-500" />, available: true },
    { id: "ds-array", title: "3- DS Array", icon: <Box className="h-6 w-6 text-purple-500" />, available: true },
    {
      id: "ds-linked-list",
      title: "4- DS Linked List",
      icon: <GitBranch className="h-6 w-6 text-indigo-500" />,
      available: true,
    },
    { id: "ds-stack", title: "5- DS Stack", icon: <Layers className="h-6 w-6 text-orange-500" />, available: true },
    { id: "ds-queue", title: "6- DS Queue", icon: <List className="h-6 w-6 text-red-500" />, available: true },
    { id: "ds-tree", title: "7- DS Tree", icon: <GitMerge className="h-6 w-6 text-emerald-500" />, available: true },
    { id: "ds-graph", title: "8- DS Graph", icon: <Network className="h-6 w-6 text-cyan-500" />, available: true },
    {
      id: "ds-searching",
      title: "9- DS Searching",
      icon: <Search className="h-6 w-6 text-amber-500" />,
      available: true,
    },
    { id: "ds-mcq", title: "10- DS MCQ", icon: <FileCode className="h-6 w-6 text-teal-500" />, available: true },
    {
      id: "binary-tree",
      title: "11- Binary Tree",
      icon: <GitMerge className="h-6 w-6 text-lime-500" />,
      available: false,
    },
    {
      id: "binary-search-tree",
      title: "12- Binary Search Tree",
      icon: <GitMerge className="h-6 w-6 text-yellow-500" />,
      available: false,
    },
    { id: "avl-tree", title: "13- AVL Tree", icon: <GitMerge className="h-6 w-6 text-sky-500" />, available: false },
    {
      id: "miscellaneous-exercise",
      title: "14- Miscellaneous Exercise",
      icon: <Code className="h-6 w-6 text-gray-500" />,
      available: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">Data Structures Course</h1>
          <p className="text-gray-600 mb-4">
            Explore the fundamental concepts of data structures through our comprehensive subtopics. Master algorithms,
            sorting techniques, and various data structures to enhance your programming skills.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <Cpu className="h-4 w-4 mr-2" />
            <span>19 subtopics</span>
            <span className="mx-2">•</span>
            <Database className="h-4 w-4 mr-2" />
            <span>2 available now</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Subtopics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={topic.available ? `/topics/${topic.id}` : "#"}
              className={!topic.available ? "cursor-not-allowed" : ""}
            >
              <Card
                className={`hover:shadow-md transition-all duration-300 ${topic.available ? "border-l-4 border-l-primary" : "opacity-75"}`}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-gray-100 p-3 rounded-lg">{topic.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{topic.title}</h3>
                      {!topic.available && (
                        <p className="text-sm text-muted-foreground mt-1">Content will be available soon</p>
                      )}
                      {topic.available && <p className="text-sm text-primary mt-1">Available now</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

