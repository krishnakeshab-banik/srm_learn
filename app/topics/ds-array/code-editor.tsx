"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Play, RotateCcw } from "lucide-react"

interface CodeEditorProps {
  initialCode: string
  language: string
  title: string
  description?: string
}

export default function CodeEditor({ initialCode, language, title, description }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const runCode = () => {
    setIsRunning(true)
    setOutput("")
    setError("")

    // For JavaScript code, we can actually execute it
    if (language === "javascript") {
      try {
        // Create a safe console.log replacement to capture output
        const originalConsoleLog = console.log
        const outputs: string[] = []
        
        // Override console.log to capture output
        console.log = (...args) => {
          const output = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          ).join(' ')
          outputs.push(output)
        }
        
        // Execute the code
        // eslint-disable-next-line no-new-func
        new Function(code)()
        
        // Restore original console.log
        console.log = originalConsoleLog
        
        setOutput(outputs.join('\n'))
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      }
    } else {
      // For other languages, we'll just simulate execution
      setOutput(`[Simulated ${language.toUpperCase()} execution]\n\nArray operations completed successfully.`)
    }
    
    setIsRunning(false)
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput("")
    setError("")
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 p-3 border-b">
        <h3 className="font-medium">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
      
      <Tabs defaultValue="code" className="w-full">
        <div className="bg-gray-50 px-4 pt-2 border-b">
          <TabsList>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="output">Output</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="code" className="m-0">
          <div className="relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-gray-100 focus:outline-none resize-none"
              spellCheck="false"
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button 
                onClick={resetCode} 
                variant="outline" 
                size="sm"
                className="bg-white hover:bg-gray-100"
              >
                <RotateCcw className="h-4 w-4 mr-1" /> Reset
              </Button>
              <Button 
                onClick={runCode} 
                size="sm"
                disabled={isRunning}
              >
                <Play className="h-4 w-4 mr-1" /> Run
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="output" className="m-0">
          <div className="h-64 p-4 font-mono text-sm bg-black text-white overflow-auto">
            {isRunning ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                <span>Running code...</span>
              </div>
            ) : error ? (
              <div className="text-red-400">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-4 w-4 mr-1" /> Error:
                </div>
                {error}
              </div>
            ) : output ? (
              <pre>{output}</pre>
            ) : (
              <div className="text-gray-400 flex items-center justify-center h-full">
                Click "Run" to execute the code
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}