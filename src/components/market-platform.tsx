/* Market Platform - large heading + 3 trading option cards */

const cards = [
  {
    tag: 'Spot Trading',
    title: 'Instant crypto trading at transparent market prices',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    tag: 'Future Trading',
    title: 'Leverage trades to profit in rising and falling markets',
    gradient: 'from-pink-500/20 to-orange-500/20',
  },
  {
    tag: 'AI Bot',
    title: 'Activate AI bots to trade automatically 24/7',
    gradient: 'from-green-500/20 to-cyan-500/20',
  },
]

export default function MarketPlatform() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large decorative heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white text-center mb-16 italic opacity-90">
          Market Platform
        </h2>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 flex flex-col justify-between min-h-[200px] hover:border-gray-700 transition-colors"
            >
              <div>
                <span className="inline-block text-xs text-purple-400 font-semibold mb-3">
                  ● {card.tag}
                </span>
                <p className="text-white text-sm leading-relaxed">{card.title}</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-purple-400 font-medium cursor-pointer hover:text-purple-300 transition-colors">
                  Custody Now
                </span>
                <span className="text-gray-500">→</span>
              </div>
              {/* Decorative gradient chart placeholder */}
              <div className={`mt-4 h-16 rounded-lg bg-gradient-to-r ${card.gradient} opacity-60`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
