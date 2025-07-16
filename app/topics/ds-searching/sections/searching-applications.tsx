"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Database, 
  Folder, 
  Globe, 
  Type, 
  FileText, 
  Gamepad2, 
  Network, 
  ShoppingCart,
  Music,
  MapPin,
  Shield,
  Brain,
  Heart,
  Sparkles
} from "lucide-react"

export default function SearchingApplicationsSection() {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)

  const applications = [
    {
      id: "database",
      title: "Database Systems",
      icon: <Database className="h-8 w-8" />,
      description: "Finding records, indexing, query optimization",
      examples: ["SQL SELECT queries", "NoSQL document search", "Data warehouse analytics"],
      color: "from-blue-500 to-cyan-500",
      stats: "Processes billions of queries daily",
      impact: "Powers modern applications and business intelligence"
    },
    {
      id: "filesystem",
      title: "File Systems",
      icon: <Folder className="h-8 w-8" />,
      description: "Searching files, directories, and metadata",
      examples: ["File explorer search", "Command line find", "Cloud storage indexing"],
      color: "from-green-500 to-emerald-500",
      stats: "Manages trillions of files worldwide",
      impact: "Enables efficient data organization and retrieval"
    },
    {
      id: "web",
      title: "Web Search Engines",
      icon: <Globe className="h-8 w-8" />,
      description: "Crawling, indexing, and ranking web content",
      examples: ["Google Search", "Bing", "DuckDuckGo", "Elasticsearch"],
      color: "from-purple-500 to-violet-500",
      stats: "8.5 billion searches per day",
      impact: "Democratizes access to human knowledge"
    },
    {
      id: "autocomplete",
      title: "Auto-complete & Spell Check",
      icon: <Type className="h-8 w-8" />,
      description: "Predictive text and error correction",
      examples: ["Google suggestions", "IDE autocomplete", "Mobile keyboards"],
      color: "from-yellow-500 to-orange-500",
      stats: "Saves 25% typing time",
      impact: "Improves user experience and productivity"
    },
    {
      id: "texteditor",
      title: "Text Editors & IDEs",
      icon: <FileText className="h-8 w-8" />,
      description: "Find & replace, pattern matching, code search",
      examples: ["VS Code search", "Regex patterns", "Code refactoring"],
      color: "from-red-500 to-pink-500",
      stats: "Used by 50M+ developers",
      impact: "Essential for software development workflow"
    },
    {
      id: "gaming",
      title: "Game Development",
      icon: <Gamepad2 className="h-8 w-8" />,
      description: "AI pathfinding, player matching, asset loading",
      examples: ["A* pathfinding", "Matchmaking systems", "Asset streaming"],
      color: "from-indigo-500 to-purple-500",
      stats: "Powers 3.2 billion gamers",
      impact: "Creates immersive gaming experiences"
    },
    {
      id: "network",
      title: "Network Routing",
      icon: <Network className="h-8 w-8" />,
      description: "Finding optimal paths, load balancing",
      examples: ["Internet routing", "CDN optimization", "Network topology"],
      color: "from-teal-500 to-cyan-500",
      stats: "Routes 5 billion packets/second",
      impact: "Enables global internet connectivity"
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Product search, recommendation engines",
      examples: ["Amazon search", "Filter systems", "Price comparison"],
      color: "from-orange-500 to-red-500",
      stats: "$4.9 trillion online sales",
      impact: "Transforms retail and commerce"
    },
    {
      id: "music",
      title: "Music & Media",
      icon: <Music className="h-8 w-8" />,
      description: "Content discovery, audio fingerprinting",
      examples: ["Spotify search", "Shazam identification", "Content matching"],
      color: "from-pink-500 to-rose-500",
      stats: "500M+ songs indexed",
      impact: "Revolutionizes music discovery"
    },
    {
      id: "maps",
      title: "Navigation Systems",
      icon: <MapPin className="h-8 w-8" />,
      description: "Route finding, location search, POI discovery",
      examples: ["Google Maps", "GPS navigation", "Location services"],
      color: "from-emerald-500 to-green-500",
      stats: "1 billion+ locations",
      impact: "Enables global mobility and logistics"
    },
    {
      id: "security",
      title: "Cybersecurity",
      icon: <Shield className="h-8 w-8" />,
      description: "Threat detection, pattern analysis, forensics",
      examples: ["Antivirus scanning", "Intrusion detection", "Log analysis"],
      color: "from-slate-500 to-gray-500",
      stats: "Scans 350,000 malware/day",
      impact: "Protects digital infrastructure"
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8" />,
      description: "Feature selection, neural architecture search",
      examples: ["Hyperparameter tuning", "Model search", "Data mining"],
      color: "from-violet-500 to-purple-500",
      stats: "Powers 37% of businesses",
      impact: "Drives AI innovation and automation"
    }
  ]

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🌟 Real-World Applications
        </h3>
        <p className="text-gray-600 text-lg">Discover how searching algorithms power our digital world</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setHoveredApp(app.id)}
            onHoverEnd={() => setHoveredApp(null)}
            className="relative group"
          >
            <div className={`bg-gradient-to-br ${app.color} p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    animate={{ 
                      rotate: hoveredApp === app.id ? 360 : 0,
                      scale: hoveredApp === app.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {app.icon}
                  </motion.div>
                  <Sparkles className="h-5 w-5 opacity-70" />
                </div>
                
                <h4 className="text-xl font-bold mb-2">{app.title}</h4>
                <p className="text-sm opacity-90 mb-3">{app.description}</p>
                
                <div className="space-y-2">
                  <div className="text-xs font-semibold bg-white/20 rounded-full px-2 py-1 inline-block">
                    {app.stats}
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: hoveredApp === app.id ? 1 : 0,
                  y: hoveredApp === app.id ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-center"
              >
                <div className="text-center">
                  <h5 className="font-bold mb-3">Examples:</h5>
                  <ul className="text-sm space-y-1 mb-4">
                    {app.examples.map((example, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <Heart className="h-3 w-3 text-red-400" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/20 rounded-lg p-2">
                    <p className="text-xs font-medium">{app.impact}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-2xl text-white"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Globe className="h-12 w-12" />
          </motion.div>
          <h4 className="text-3xl font-bold mb-4">🚀 Mind-Blowing Facts!</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">0.15 seconds</div>
              <div className="text-sm">Average Google search time</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">30 billion</div>
              <div className="text-sm">Web pages indexed by Google</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-sm">Search engine uptime</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
