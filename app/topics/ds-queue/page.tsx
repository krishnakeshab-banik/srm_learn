"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, Code, BookText, FileCode2, BarChart2, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import QueueIntroSection from "./sections/queue-intro"
import QueueTypesSection from "./sections/queue-types"
import QueueArraySection from "./sections/queue-array"
import QueueLinkedListSection from "./sections/queue-linkedlist"
import CircularQueueSection from "./sections/circular-queue"
import PriorityQueueSection from "./sections/priority-queue"
import DequeSection from "./sections/deque"
import QueueOperationsSection from "./sections/queue-operations"
import QueueApplicationsSection from "./sections/queue-applications"
import QueueQuizSection from "./sections/queue-quiz"
import QueuePracticeSection from "./sections/queue-practice"
import QueueCommunitySection from "./sections/queue-community"

const sections = [
	{ id: "introduction", title: "Introduction to Queue", icon: <BookText className="h-4 w-4 mr-2" /> },
	{ id: "types", title: "Types of Queue", icon: <List className="h-4 w-4 mr-2" /> },
	{ id: "array", title: "Queue Array Implementation", icon: <List className="h-4 w-4 mr-2" /> },
	{ id: "linkedlist", title: "Queue Linked List Implementation", icon: <List className="h-4 w-4 mr-2" /> },
	{ id: "circular", title: "Circular Queue", icon: <List className="h-4 w-4 mr-2" /> },
	{ id: "priority", title: "Priority Queue", icon: <List className="h-4 w-4 mr-2" /> },
	{ id: "deque", title: "Deque (Double Ended Queue)", icon: <List className="h-4 w-4 mr-2" /> },
	{ id: "operations", title: "Queue Operations", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
	{ id: "applications", title: "Applications of Queue", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
	{ id: "quiz", title: "Quiz", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
	{ id: "practice", title: "Practice Questions", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
	{ id: "community", title: "Community Content", icon: <FileCode2 className="h-4 w-4 mr-2" /> },
]

const content = {
	introduction: {
		title: "Introduction to Queue",
		content: <QueueIntroSection />,
	},
	types: {
		title: "Types of Queue",
		content: <QueueTypesSection />,
	},
	array: {
		title: "Queue Array Implementation",
		content: <QueueArraySection />,
	},
	linkedlist: {
		title: "Queue Linked List Implementation",
		content: <QueueLinkedListSection />,
	},
	circular: {
		title: "Circular Queue",
		content: <CircularQueueSection />,
	},
	priority: {
		title: "Priority Queue",
		content: <PriorityQueueSection />,
	},
	deque: {
		title: "Deque (Double Ended Queue)",
		content: <DequeSection />,
	},
	operations: {
		title: "Queue Operations",
		content: <QueueOperationsSection />,
	},
	applications: {
		title: "Applications of Queue",
		content: <QueueApplicationsSection />,
	},
	quiz: {
		title: "Queue Quiz",
		content: <QueueQuizSection />,
	},
	practice: {
		title: "Queue Practice Questions",
		content: <QueuePracticeSection />,
	},
	community: {
		title: "Community Content",
		content: <QueueCommunitySection />,
	},
}

export default function DSQueueContent() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [activeSection, setActiveSection] = useState("introduction")

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="sticky top-0 z-50 border-b bg-white">
				<div className="container mx-auto px-4 h-16 flex items-center justify-between">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/courses/ds1/topics">
							<ArrowLeft className="h-5 w-5" />
						</Link>
					</Button>
					<h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">Queue Data Structure</h1>
					<Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
						<Menu className="h-5 w-5" />
					</Button>
				</div>
			</header>

			<div className="container mx-auto px-4 flex">
				{/* Sidebar */}
				<aside
					className={cn(
						"fixed inset-y-0 left-0 z-40 w-64 bg-gray-50 border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-4rem)] mt-4",
						isSidebarOpen ? "translate-x-0" : "-translate-x-full",
					)}
				>
					<ScrollArea className="h-full py-6 px-4">
						<nav className="space-y-2">
							{sections.map((section) => (
								<button
									key={section.id}
									className={cn(
										"w-full px-4 py-2 text-sm rounded-md text-left flex items-center",
										activeSection === section.id ? "bg-primary text-primary-foreground" : "hover:bg-gray-100",
									)}
									onClick={() => {
										setActiveSection(section.id)
										setIsSidebarOpen(false)
									}}
								>
									{section.icon}
									{section.title}
								</button>
							))}
						</nav>
					</ScrollArea>
				</aside>

				{/* Main Content */}
				<main className="flex-1 py-6 md:pl-8">
					<article className="prose prose-sm max-w-none">
						{content[activeSection as keyof typeof content] && (
							<>
								<h2 className="text-2xl font-bold mb-6">{content[activeSection as keyof typeof content].title}</h2>
								{content[activeSection as keyof typeof content].content}
							</>
						)}
					</article>
				</main>
			</div>
		</div>
	)
}