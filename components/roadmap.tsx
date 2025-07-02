export default function Roadmap() {
  return (
    <div className="p-4 text-white">
      <h3 className="text-2xl font-bold mb-6 text-center">Course Roadmap</h3>
      <div className="relative">
        <div className="h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-500 rounded-full mb-8" />
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="relative">
              <div className="absolute -top-10 w-8 h-8 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center text-black">
                {step}
              </div>
              <div className="mt-4 w-32">
                <h4 className="font-semibold mb-2 text-white">Step {step}</h4>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

