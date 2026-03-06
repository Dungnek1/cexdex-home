/* Hero section - main banner with 3D cube, tagline, and email CTA */
export default function HeroSection() {
  return (
    <section className="relative bg-gray-950 overflow-hidden pt-16 pb-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950" />

      {/* 3D Cube decorative element */}
      <div className="relative flex justify-center mb-12">
        <div className="w-32 h-32 relative">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-blue-500 to-purple-600 rounded-2xl rotate-12 shadow-2xl shadow-purple-500/30" />
          <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-blue-600 rounded-xl -rotate-6 opacity-80" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          BUILT FOR TRADERS<br />
          WHO DEMAND PERFORMANCE
        </h1>

        {/* Email input + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 max-w-lg">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2 sm:mb-0">
            <span className="text-purple-400">✦</span>
            <span>Create your trading account</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mt-3">
          <input
            type="email"
            placeholder="Email or phone"
            className="flex-1 px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
