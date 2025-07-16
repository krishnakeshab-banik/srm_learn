"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Loader2, Sparkles, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const FAQ = [
	{
		q: "What is SRM LEARN?",
		a: "SRM LEARN is an interactive learning platform offering high-quality courses, career support, and a vibrant student community.",
	},
	{
		q: "How do I enroll in a course?",
		a: "Go to the Courses page, select your desired course, and click 'Start Learning' to enroll.",
	},
	{
		q: "How can I get a certificate?",
		a: "Complete all modules and assessments in a course. Your certificate will be available in your profile under 'Certificates'.",
	},
	{
		q: "How do I contact support?",
		a: "You can use the Contact Us page or type 'contact' here for quick info.",
	},
	{
		q: "What is a data structure?",
		a: "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.",
	},
	{
		q: "How do I reset my password?",
		a: "Go to your profile settings and click on 'Change Password'.",
	},
	{
		q: "What is the difference between stack and queue?",
		a: "A stack is LIFO (Last-In, First-Out), while a queue is FIFO (First-In, First-Out).",
	},
	{
		q: "How do I get career support?",
		a: "Visit the Career Support page to book sessions for resume review, mock interviews, and mentorship.",
	},
]

function getBotResponse(input: string): Promise<string> {
	const text = input.trim().toLowerCase()
	if (["hi", "hello", "hey"].includes(text)) {
		return Promise.resolve("Hello! 👋 How can I assist you today?")
	}
	for (const { q, a } of FAQ) {
		if (text.includes(q.toLowerCase().split(" ")[0])) return Promise.resolve(a)
		if (text === q.toLowerCase()) return Promise.resolve(a)
	}
	if (text.includes("contact")) {
		return Promise.resolve("You can reach us at support@srmlearn.com or call +1 234 567 890.")
	}
	if (text.includes("certificate")) {
		return Promise.resolve("Certificates are available in your profile after completing a course.")
	}
	if (text.includes("mentor")) {
		return Promise.resolve("You can find mentors and book sessions on the Career Support page.")
	}
	if (text.includes("help") || text.includes("support")) {
		return Promise.resolve("How can I assist you? You can ask about courses, certificates, career, or platform features.")
	}
	if (text.includes("recommend") || text.includes("suggest")) {
		return Promise.resolve("Looking for recommendations? Try 'Data Structures - 1' for coding or 'Leadership & Management' for soft skills!")
	}
	return Promise.resolve("I'm here to help! You can ask about courses, certificates, career support, or any feature of the website.")
}

export default function Chatbot({ onClose }: { onClose: () => void }) {
	const [messages, setMessages] = useState([
		{ from: "bot", text: "Hi! 👋 I'm SRM LEARN Assistant. Ask me anything about courses, certificates, or career support!" },
	])
	const [input, setInput] = useState("")
	const [loading, setLoading] = useState(false)
	const chatEndRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [messages])

	const handleSend = async () => {
		if (!input.trim()) return
		setMessages([...messages, { from: "user", text: input }])
		setLoading(true)
		const userInput = input
		setInput("")
		setTimeout(async () => {
			const answer = await getBotResponse(userInput)
			setMessages(msgs => [...msgs, { from: "bot", text: answer }])
			setLoading(false)
		}, 600)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") handleSend()
	}

	return (
		<div className="fixed bottom-6 right-6 z-50">
			<Card className="w-80 shadow-2xl border-2 border-primary animate-fade-in-up">
				<CardHeader className="bg-primary text-white rounded-t-lg flex flex-row items-center gap-2">
					<Sparkles className="h-5 w-5 animate-spin" />
					<CardTitle className="text-lg flex-1">SRM ChatBot</CardTitle>
					<Button variant="ghost" size="icon" onClick={onClose} aria-label="Close Chatbot">
						<X className="h-5 w-5" />
					</Button>
				</CardHeader>
				<CardContent className="bg-white h-96 overflow-y-auto flex flex-col space-y-2 py-4 px-2">
					{messages.map((msg, idx) => (
						<div
							key={idx}
							className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
						>
							<div
								className={`max-w-[80%] px-3 py-2 rounded-lg shadow text-sm ${
									msg.from === "user"
										? "bg-blue-100 text-blue-900 flex items-center gap-1"
										: "bg-gray-100 text-gray-800 flex items-center gap-1"
								}`}
							>
								{msg.from === "bot" ? <Bot className="h-4 w-4 mr-1" /> : <User className="h-4 w-4 mr-1" />}
								<span>{msg.text}</span>
							</div>
						</div>
					))}
					{loading && (
						<div className="flex justify-start">
							<div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg shadow flex items-center gap-1">
								<Bot className="h-4 w-4 mr-1" />
								<Loader2 className="h-4 w-4 animate-spin" />
								<span>Typing...</span>
							</div>
						</div>
					)}
					<div ref={chatEndRef} />
				</CardContent>
				<div className="flex items-center border-t px-2 py-2 bg-gray-50">
					<Input
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Ask me anything..."
						className="flex-1 mr-2"
						disabled={loading}
					/>
					<Button onClick={handleSend} disabled={loading || !input.trim()} size="icon" variant="primary">
						<Send className="h-5 w-5" />
					</Button>
				</div>
				<div className="text-xs text-gray-400 text-center pb-2">
					<MessageCircle className="inline h-3 w-3 mr-1" />
					Try: "How do I get a certificate?" or "Recommend a course"
				</div>
			</Card>
		</div>
	)
}
