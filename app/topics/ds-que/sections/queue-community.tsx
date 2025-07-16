"use client"

export default function QueueCommunitySection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Community Content</h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded p-4 text-yellow-800 my-4">
        <p>
          <b>Share your Queue questions, solutions, and tips!</b>
        </p>
        <ul className="list-disc pl-6 mt-2 text-sm">
          <li>Post your own queue problems and solutions</li>
          <li>Discuss tricky queue interview questions</li>
          <li>Share visualizations, YouTube videos, or helpful links</li>
          <li>Help others by answering their queue-related doubts</li>
        </ul>
        <div className="mt-4">
          <b>Want to contribute?</b> Email us at <a href="mailto:community@dsa.com" className="underline text-blue-600">community@dsa.com</a>
        </div>
      </div>
    </section>
  )
}
