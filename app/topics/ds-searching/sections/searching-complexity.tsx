"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  TrendingDown, 
  TrendingUp, 
  Zap, 
  Clock, 
  Calculator,
  Target,
  Award,
  AlertTriangle,
  Info,
  Cpu
} from "lucide-react"

export default function SearchingComplexitySection() {
  const [selectedMetric, setSelectedMetric] = useState<'time' | 'space'>('time')
  const [hoveredAlgorithm, setHoveredAlgorithm] = useState<string | null>(null)

  const algorithms = [
    {
      id: "linear",
      name: "Linear Search",
      icon: <BarChart3 className="h-5 w-5" />,
      timeComplexity: {
        best: "O(1)",
        average: "O(n)",
        worst: "O(n)",
        bestDesc: "Element found at first position",
        avgDesc: "Element found at middle position",
        worstDesc: "Element at last position or not found"
      },
      spaceComplexity: "O(1)",
      color: "bg-blue-500",
      pros: ["Simple implementation", "Works on unsorted data"],
      cons: ["Slow for large datasets"],
      chartData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      id: "binary",
      name: "Binary Search",
      icon: <Zap className="h-5 w-5" />,
      timeComplexity: {
        best: "O(1)",
        average: "O(log n)",
        worst: "O(log n)",
        bestDesc: "Element found at middle position",
        avgDesc: "Element found after few divisions",
        worstDesc: "Element at extreme position"
      },
      spaceComplexity: "O(1)",
      color: "bg-green-500",
      pros: ["Very fast", "Efficient for sorted data"],
      cons: ["Requires sorted array"],
      chartData: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    },
    {
      id: "jump",
      name: "Jump Search",
      icon: <Target className="h-5 w-5" />,
      timeComplexity: {
        best: "O(1)",
        average: "O(√n)",
        worst: "O(√n)",
        bestDesc: "Element found at first jump",
        avgDesc: "Element found after moderate jumps",
        worstDesc: "Element at last block"
      },
      spaceComplexity: "O(1)",
      color: "bg-purple-500",
      pros: ["Better than linear", "Simple logic"],
      cons: ["Slower than binary search"],
      chartData: [1, 2, 3, 3, 4, 4, 4, 5, 5, 5]
    },
    {
      id: "interpolation",
      name: "Interpolation Search",
      icon: <TrendingUp className="h-5 w-5" />,
      timeComplexity: {
        best: "O(1)",
        average: "O(log log n)",
        worst: "O(n)",
        bestDesc: "Perfect interpolation match",
        avgDesc: "Good interpolation estimate",
        worstDesc: "Poor distribution or worst case"
      },
      spaceComplexity: "O(1)",
      color: "bg-orange-500",
      pros: ["Fastest for uniform data", "Smart positioning"],
      cons: ["Worst case is O(n)"],
      chartData: [1, 1, 2, 2, 2, 3, 3, 3, 3, 4]
    },
    {
      id: "exponential",
      name: "Exponential Search",
      icon: <TrendingDown className="h-5 w-5" />,
      timeComplexity: {
        best: "O(1)",
        average: "O(log n)",
        worst: "O(log n)",
        bestDesc: "Element found in first range",
        avgDesc: "Element found after range detection",
        worstDesc: "Element at boundary position"
      },
      spaceComplexity: "O(1)",
      color: "bg-red-500",
      pros: ["Good for unbounded arrays", "Combines with binary search"],
      cons: ["Two-phase approach"],
      chartData: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    },
    {
      id: "fibonacci",
      name: "Fibonacci Search",
      icon: <Award className="h-5 w-5" />,
      timeComplexity: {
        best: "O(1)",
        average: "O(log n)",
        worst: "O(log n)",
        bestDesc: "Element found at first Fibonacci position",
        avgDesc: "Element found with Fibonacci divisions",
        worstDesc: "Element requires full Fibonacci sequence"
      },
      spaceComplexity: "O(1)",
      color: "bg-pink-500",
      pros: ["No division operations", "Elegant approach"],
      cons: ["Complex implementation"],
      chartData: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    }
  ]

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "O(1)": return "bg-green-500"
      case "O(log n)": return "bg-blue-500"
      case "O(log log n)": return "bg-cyan-500"
      case "O(√n)": return "bg-yellow-500"
      case "O(n)": return "bg-orange-500"
      case "O(n log n)": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  // Helper to get complexity values based on selected metric
  const getComplexityValue = (algorithm: typeof algorithms[0], caseType: 'best' | 'average' | 'worst') => {
    if (selectedMetric === 'time') {
      return algorithm.timeComplexity[caseType]
    } else {
      // For space complexity, only one value exists, so return it for all cases
      return algorithm.spaceComplexity
    }
  }

  const getComplexityRank = (complexity: string) => {
    const ranks = {
      "O(1)": 1,
      "O(log log n)": 2,
      "O(log n)": 3,
      "O(√n)": 4,
      "O(n)": 5,
      "O(n log n)": 6
    }
    return ranks[complexity as keyof typeof ranks] || 7
  }

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          ⚡ Complexity Analysis
        </h3>
        <p className="text-gray-600 text-lg">Understanding the performance characteristics of search algorithms</p>
      </motion.div>

      {/* Metric Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedMetric('time')}
            className={`px-4 py-2 rounded-md transition-all ${
              selectedMetric === 'time' 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Clock className="h-4 w-4 inline mr-2" />
            Time Complexity
          </button>
          <button
            onClick={() => setSelectedMetric('space')}
            className={`px-4 py-2 rounded-md transition-all ${
              selectedMetric === 'space' 
                ? 'bg-purple-500 text-white shadow-md' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Cpu className="h-4 w-4 inline mr-2" />
            Space Complexity
          </button>
        </div>
      </div>

      {/* Interactive Complexity Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Algorithm</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>Best Case</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-blue-500" />
                    <span>Average Case</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingDown className="h-4 w-4 text-red-500" />
                    <span>Worst Case</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <Cpu className="h-4 w-4 text-purple-500" />
                    <span>Space</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {algorithms.map((algorithm, index) => (
                <motion.tr
                  key={algorithm.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredAlgorithm(algorithm.id)}
                  onHoverEnd={() => setHoveredAlgorithm(null)}
                  className={`border-b hover:bg-gray-50 transition-colors cursor-pointer ${
                    hoveredAlgorithm === algorithm.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${algorithm.color} text-white`}>
                        {algorithm.icon}
                      </div>
                      <span className="font-medium">{algorithm.name}</span>
                    </div>
                  </td>
              <td className="px-6 py-4 text-center">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getComplexityColor(getComplexityValue(algorithm, 'best'))}`}>
                  {getComplexityValue(algorithm, 'best')}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getComplexityColor(getComplexityValue(algorithm, 'average'))}`}>
                  {getComplexityValue(algorithm, 'average')}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getComplexityColor(getComplexityValue(algorithm, 'worst'))}`}>
                  {getComplexityValue(algorithm, 'worst')}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getComplexityColor(algorithm.spaceComplexity)}`}>
                  {algorithm.spaceComplexity}
                </span>
              </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Complexity Visualization */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-blue-500" />
            Performance Comparison
          </h4>
          <div className="space-y-4">
          {algorithms.slice(0, 3).map((algorithm) => {
            const complexityValue = selectedMetric === 'time' ? algorithm.timeComplexity.average : algorithm.spaceComplexity;
            return (
              <div key={algorithm.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{algorithm.name}</span>
                  <span className="text-sm text-gray-600">{complexityValue}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(6 - getComplexityRank(complexityValue)) * 20}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-2 rounded-full ${algorithm.color}`}
                  />
                </div>
              </div>
            )
          })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            <Info className="h-5 w-5 mr-2 text-green-500" />
            Complexity Legend
          </h4>
          <div className="space-y-3">
            {[
              { complexity: "O(1)", desc: "Constant time - Best possible!", color: "bg-green-500" },
              { complexity: "O(log n)", desc: "Logarithmic - Very efficient", color: "bg-blue-500" },
              { complexity: "O(log log n)", desc: "Double logarithmic - Extremely efficient", color: "bg-cyan-500" },
              { complexity: "O(√n)", desc: "Square root - Moderate", color: "bg-yellow-500" },
              { complexity: "O(n)", desc: "Linear - Acceptable for small data", color: "bg-orange-500" },
              { complexity: "O(n log n)", desc: "Linearithmic - Slower", color: "bg-red-500" }
            ].map((item) => (
              <div key={item.complexity} className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${item.color}`} />
                <span className="font-medium">{item.complexity}</span>
                <span className="text-sm text-gray-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-xl text-white"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <AlertTriangle className="h-8 w-8" />
          <h4 className="text-2xl font-bold">Key Insights 🎯</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold mb-2">🚀 Performance Tips:</h5>
            <ul className="text-sm space-y-1">
              <li>• Use binary search for sorted data</li>
              <li>• Linear search for small arrays ({"<"}100 elements)</li>
              <li>• Interpolation search for uniformly distributed data</li>
              <li>• Consider space-time tradeoffs</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">⚠️ Important Notes:</h5>
            <ul className="text-sm space-y-1">
              <li>• Binary search requires sorted data</li>
              <li>• Worst case matters for critical systems</li>
              <li>• Space complexity is usually O(1) for searching</li>
              <li>• Real-world performance depends on cache locality</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
