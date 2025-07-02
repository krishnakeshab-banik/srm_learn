import { Progress } from "@/components/ui/progress"

export default function MyLearning() {
  const courses = [
    {
      title: "C Programming",
      instructor: "Prof. Anita Desai",
      progress: 35,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20Programming-uLjMOI1BjkPoTIuwzttWVv4z47MslJ.png",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">My Learning</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.title} className="bg-white rounded-lg shadow p-4">
            <div className="flex gap-4">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-32 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-muted-foreground">Course Instructor: {course.instructor}</p>
                <div className="mt-2">
                  <Progress value={course.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-1">{course.progress}% completed</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

