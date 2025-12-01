import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CourseIntroPage({ params }: { params: { courseId: string } }) {
  // In a real app, fetch course data based on courseId
  const courses = {
    ds1: {
      id: "ds1",
      title: "Data Structures - 1",
      instructor: "Dr. A Maheshwari",
      rating: "4.3",
      description:
        "Master the fundamentals of Data Structures and Algorithms to build efficient and optimized solutions.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Data%20Structures-%201.jpg-nRfthDASY6KQwweVKq1NVHG9UpwZ4p.jpeg",
      overview: `Data Structures are essential for organizing and managing data efficiently, enabling quick access and modification. They are crucial for designing efficient algorithms and are widely used in software engineering, databases, AI, and more.

Key Data Structures:
1. Arrays: Fixed-size, efficient for indexing.
2. Linked Lists: Dynamic size, good for insertions/deletions.
3. Stacks: LIFO structure, used in undo functionality.
4. Queues: FIFO structure, used in job scheduling.
5. Trees: Hierarchical, used in file systems.
6. Graphs: Represent relationships, used in social networks.
7. Hash Tables: Fast lookups, used in dictionaries`,
    },
    "c-programming": {
      id: "c-programming",
      title: "C Programming",
      instructor: "Prof. Anita Desai",
      rating: "4.5",
      description: "Learn the fundamentals of C programming language and build a strong foundation in coding.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20Programming-uLjMOI1BjkPoTIuwzttWVv4z47MslJ.png",
      overview: `C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.

Key Topics:
1. Basic Syntax
2. Data Types
3. Control Structures
4. Functions
5. Arrays and Pointers
6. Structures and Unions
7. File Handling`,
    },
    lm: {
      id: "lm",
      title: "Leadership & Management",
      instructor: "Dr. Priya Singh",
      rating: "4.1",
      description: "Enhance your leadership skills with our expert-led courses.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home19-W1PreFfpoWe97nnhE3NijlQN8bgh7n.png",
      overview: `Leadership and management skills are crucial for success in any organization. This course covers essential topics to help you become an effective leader and manager.

Key Topics:
1. Leadership Styles
2. Team Building
3. Communication Skills
4. Decision Making
5. Conflict Resolution
6. Change Management
7. Performance Management`,
    },
  }

  const course = courses[params.courseId as keyof typeof courses]

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <Link href="/courses" className="inline-flex items-center text-sm text-gray-600 mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="mt-6 space-y-4">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <div className="flex items-center gap-4">
                <span className="text-sm">Course</span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{course.rating} out of 5</span>
                </div>
              </div>
              <p className="text-sm">Instructor: {course.instructor}</p>
            </div>
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Course Description</h2>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Course Overview</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground whitespace-pre-line">{course.overview}</p>
            </div>
            <Link href={`/courses/${course.id}/topics`} className="block mt-6">
              <Button className="w-full">Start Learning</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

