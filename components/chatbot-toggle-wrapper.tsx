"use client"
import React from "react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import Chatbot from "@/components/chatbot"

export default function ChatbotToggleWrapper({ children }: { children: React.ReactNode }) {
  const [showChatbot, setShowChatbot] = React.useState(false)
  
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MainHeader />
        <div className="flex-1 pt-16">{children}</div>
        <MainFooter />
      </div>
      
      {!showChatbot && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg p-4 hover:bg-primary/90 transition-all flex items-center gap-2"
          aria-label="Open Chatbot"
          onClick={() => setShowChatbot(true)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={2} fill="none" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} fill="none" />
          </svg>
          Chat
        </button>
      )}
      
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  )
}
