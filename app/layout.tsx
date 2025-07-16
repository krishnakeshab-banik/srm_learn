import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import ChatbotToggleWrapper from "@/components/chatbot-toggle-wrapper"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "SRM LEARN - Online Learning Platform",
  description: "Empower your learning journey with our diverse courses",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ChatbotToggleWrapper>{children}</ChatbotToggleWrapper>
      </body>
    </html>
  )
}

