"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Zap, Target, TrendingUp, Clock, Star, ChevronDown, ChevronUp } from "lucide-react"

export default function SearchingTypesSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const searchTypes = [
    {
      id: "linear",
      name: "Linear Search",
      icon: <Search className="h-6 w-6" />,
      description: "Sequentially checks each element until the target is found or the end is reached.",
      complexity: "O(n)",
      pros: ["Simple to implement", "Works on unsorted data", "No extra memory needed"],
      cons: ["Slow for large datasets", "Inefficient for sorted data"],
      realWorld: "Finding a contact in an unsorted phone book",
      color: "bg-blue-500",
      demo: [1, 5, 3, 8, 2, 9, 7],
      target: 8
    },
    {
      id: "binary",
      name: "Binary Search",
      icon: <Zap className="h-6 w-6" />,
      description: "Efficiently searches a sorted array by repeatedly dividing the search interval in half.",
      complexity: "O(log n)",
      pros: ["Very fast for sorted data", "Efficient memory usage", "Predictable performance"],
      cons: ["Requires sorted data", "More complex implementation"],
      realWorld: "Finding a word in a dictionary",
      color: "bg-green-500",
      demo: [1, 2, 3, 5, 7, 8, 9],
      target: 5
    },
    {
      id: "jump",
      name: "Jump Search",
      icon: <Target className="h-6 w-6" />,
      description: "Jumps ahead by fixed steps and then does linear search in a block.",
      complexity: "O(√n)",
      pros: ["Better than linear for large arrays", "Works on sorted data", "Simple to understand"],
      cons: ["Slower than binary search", "Requires sorted data"],
      realWorld: "Searching through library catalog sections",
      color: "bg-purple-500",
      demo: [1, 2, 3, 5, 7, 8, 9, 12, 15, 18],
      target: 15
    },
    {
      id: "interpolation",
      name: "Interpolation Search",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Improves binary search for uniformly distributed data by predicting position.",
      complexity: "O(log log n)",
      pros: ["Faster than binary for uniform data", "Smart position prediction", "Efficient for large datasets"],
      cons: ["Works best with uniform distribution", "Complex implementation"],
      realWorld: "Finding a page in a book by estimating position",
      color: "bg-orange-500",
      demo: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      target: 70
    },
    {
      id: "exponential",
      name: "Exponential Search",
      icon: <Clock className="h-6 w-6" />,
      description: "Finds range where element may exist, then does binary search in that range.",
      complexity: "O(log n)",
      pros: ["Good for unbounded arrays", "Combines with binary search", "Efficient for unknown array size"],
      cons: ["Requires sorted data", "Two-phase approach"],
      realWorld: "Finding a specific timestamp in logs",
      color: "bg-red-500",
      demo: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
      target: 64
    },
    {
      id: "fibonacci",
      name: "Fibonacci Search",
      icon: <Star className="h-6 w-6" />,
      description: "Uses Fibonacci numbers to divide the array for searching efficiently.",
      complexity: "O(log n)",
      pros: ["No division operations", "Works well with slow processors", "Elegant mathematical approach"],
      cons: ["Complex implementation", "Requires sorted data"],
      realWorld: "Optimizing search in embedded systems",
      color: "bg-pink-500",
      demo: [1, 3, 5, 8, 13, 21, 34, 55, 89, 144],
      target: 21
    }
  ]

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const runDemo = (id: string) => {
    setActiveDemo(id)
    setTimeout(() => setActiveDemo(null), 3000)
  }

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🔍 Types of Searching Algorithms
        </h3>
        <p className="text-gray-600 text-lg">Discover the different approaches to finding data efficiently</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchTypes.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-l-4 ${type.color.replace('bg-', 'border-')}`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${type.color} text-white`}>
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{type.name}</h4>
                </div>
                <motion.button
                  onClick={() => toggleCard(type.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {expandedCard === type.id ? <ChevronUp /> : <ChevronDown />}
                </motion.button>
              </div>

              <p className="text-gray-600 mb-4">{type.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Complexity:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${type.color} text-white`}>
                    {type.complexity}
                  </span>
                </div>
                <motion.button
                  onClick={() => runDemo(type.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${type.color} hover:opacity-90 transition-opacity`}
                >
                  {activeDemo === type.id ? "Running..." : "Demo"}
                </motion.button>
              </div>

              {/* Demo Animation */}
              {activeDemo === type.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-4 p-3 bg-gray-50 rounded-lg"
                >
                  <p className="text-sm font-medium mb-2">Searching for: {type.target}</p>
                  <div className="flex space-x-1">
                    {type.demo.map((num, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 1 }}
                        animate={num === type.target ? { scale: 1.2, backgroundColor: "#10b981" } : { scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="w-8 h-8 flex items-center justify-center bg-white border rounded text-sm font-medium"
                      >
                        {num}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Expanded Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: expandedCard === type.id ? 1 : 0,
                  height: expandedCard === type.id ? "auto" : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">✅ Pros:</h5>
                    <ul className="text-sm space-y-1">
                      {type.pros.map((pro, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">❌ Cons:</h5>
                    <ul className="text-sm space-y-1">
                      {type.cons.map((con, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-blue-600 mb-1">🌍 Real World:</h5>
                    <p className="text-sm text-blue-700">{type.realWorld}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl text-white"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Star className="h-8 w-8" />
          <h4 className="text-2xl font-bold">Fun Fact! 🎯</h4>
        </div>
        <p className="text-center text-lg">
          Binary search is so efficient that it can find any element in a sorted array of 1 billion items in just 30 steps! 
          That's the power of logarithmic time complexity! 🚀
        </p>
      </motion.div>
    </section>
  )
}
