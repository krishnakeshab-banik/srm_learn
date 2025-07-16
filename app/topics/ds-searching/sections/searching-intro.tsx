"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  Search, 
  Zap, 
  Target, 
  Play, 
  BookOpen, 
  Code, 
  Users, 
  Trophy,
  Sparkles,
  ArrowRight,
  Clock,
  TrendingUp
} from "lucide-react"

export default function SearchingIntroSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const [searchValue, setSearchValue] = useState("")

  const concepts = [
    {
      title: "Sequential Access",
      description: "Examining elements one by one in order",
      icon: <Search className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      example: "Like reading a book page by page"
    },
    {
      title: "Random Access",
      description: "Directly accessing elements at any position",
      icon: <Zap className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      example: "Like jumping to any page in a book"
    },
    {
      title: "Key Comparisons",
      description: "Comparing elements with the search key",
      icon: <Target className="h-8 w-8" />,
      color: "from-purple-500 to-violet-500",
      example: "Like matching faces in a crowd"
    }
  ]

  const realWorldExamples = [
    {
      icon: "📱",
      title: "Phone Contacts",
      description: "Finding a contact by name",
      algorithm: "Linear Search",
      time: "O(n)"
    },
    {
      icon: "📚",
      title: "Library Catalog",
      description: "Locating books by title or author",
      algorithm: "Binary Search",
      time: "O(log n)"
    },
    {
      icon: "🌐",
      title: "Web Search",
      description: "Finding relevant web pages",
      algorithm: "Advanced Indexing",
      time: "O(1) avg"
    },
    {
      icon: "💳",
      title: "Database Queries",
      description: "Retrieving customer records",
      algorithm: "Hash Tables",
      time: "O(1) avg"
    },
    {
      icon: "🎵",
      title: "Music Streaming",
      description: "Finding songs by title or artist",
      algorithm: "Trie + Binary Search",
      time: "O(log n)"
    },
    {
      icon: "🛒",
      title: "E-commerce",
      description: "Product search and filtering",
      algorithm: "Elasticsearch",
      time: "O(log n)"
    }
  ]

  const learningStats = [
    { value: "99%", label: "Student Success Rate", icon: <Trophy className="h-5 w-5" /> },
    { value: "5 mins", label: "Average Learn Time", icon: <Clock className="h-5 w-5" /> },
    { value: "100+", label: "Practice Problems", icon: <Code className="h-5 w-5" /> },
    { value: "24/7", label: "Expert Support", icon: <Users className="h-5 w-5" /> }
  ]

  const demoArray = [3, 7, 1, 9, 4, 6, 8, 2, 5]

  const runSearchDemo = () => {
    setActiveDemo("searching")
    setTimeout(() => setActiveDemo(null), 3000)
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white"
      >
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-8 py-12">
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mr-4"
            >
              <Search className="h-12 w-12 text-yellow-400" />
            </motion.div>
            <h3 className="text-4xl font-bold">
              Master Search Algorithms
            </h3>
          </div>
          
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            Discover the fascinating world of search algorithms! From finding your favorite song to powering Google's search engine, these algorithms are the invisible heroes of our digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runSearchDemo}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <Play className="h-5 w-5" />
              <span>Try Interactive Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span>Start Learning</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Interactive Demo Section */}
      {activeDemo && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-gray-50 rounded-xl p-6"
        >
          <h4 className="text-xl font-semibold mb-4 text-center">🎯 Live Search Demo</h4>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              {demoArray.map((num, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: i === Math.floor(Math.random() * demoArray.length) ? 1.2 : 1,
                    backgroundColor: i === Math.floor(Math.random() * demoArray.length) ? "#10b981" : "#ffffff"
                  }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-300 rounded-lg text-lg font-bold"
                >
                  {num}
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-600">Searching for random element...</p>
          </div>
        </motion.div>
      )}

      {/* Core Concepts */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h4 className="text-2xl font-bold mb-2">🧠 Core Concepts</h4>
          <p className="text-gray-600">Understand the fundamental principles behind search algorithms</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${concept.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${concept.color} text-white mb-4`}>
                    {concept.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{concept.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{concept.description}</p>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-xs text-gray-500">💡 Think of it like:</p>
                    <p className="text-sm font-medium text-gray-700">{concept.example}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Real-world Applications */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h4 className="text-2xl font-bold mb-2">🌍 Real-World Applications</h4>
          <p className="text-gray-600">See how search algorithms power our daily digital experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realWorldExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-start space-x-4">
                <span className="text-3xl">{example.icon}</span>
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-1">{example.title}</h5>
                  <p className="text-sm text-gray-600 mb-3">{example.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {example.algorithm}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {example.time}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white"
      >
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold mb-2">📊 Learning Success</h4>
          <p className="text-indigo-100">Join thousands of students mastering search algorithms</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {learningStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-indigo-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learning Path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold mb-2">🎯 Your Learning Journey</h4>
          <p className="text-gray-600">Follow our structured path to master search algorithms</p>
        </div>
        
        <div className="space-y-4">
          {[
            { step: 1, title: "Understand basic search concepts", desc: "Learn what searching means and why it matters" },
            { step: 2, title: "Master linear and binary search", desc: "Practice the fundamental algorithms with hands-on examples" },
            { step: 3, title: "Explore advanced search algorithms", desc: "Discover jump, interpolation, and exponential search" },
            { step: 4, title: "Practice with real-world examples", desc: "Apply your knowledge to solve practical problems" }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="flex-1">
                <h5 className="font-semibold mb-1">{item.title}</h5>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 mx-auto hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            <Sparkles className="h-5 w-5" />
            <span>Start Your Journey</span>
            <TrendingUp className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
