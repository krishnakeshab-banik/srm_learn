import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"

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
        <div className="flex flex-col min-h-screen">
          <MainHeader />
          <div className="flex-1 pt-16">{children}</div>
          <MainFooter />
        </div>
      </body>
    </html>
  )
}

