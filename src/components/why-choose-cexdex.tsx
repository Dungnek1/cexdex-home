/* Why Choose CEXDEX - 6 feature cards grid */

const features = [
  {
    icon: '💰',
    title: 'Buy & Sell Crypto',
    description: 'AI engine analyzes markets, enabling faster and more accurate trading.',
    color: 'text-purple-400',
  },
  {
    icon: '📊',
    title: 'Track Assets',
    description: 'We transform ideas into simple solutions reaching potential customers.',
    color: 'text-pink-400',
  },
  {
    icon: '🎁',
    title: 'Earn Rewards for Trading',
    description: "We identify ideas, making them usable and reaching potential customers.",
    color: 'text-yellow-400',
  },
  {
    icon: '⚡',
    title: 'Fast Execution',
    description: 'Ultra low latency technology processes all trades within milliseconds.',
    color: 'text-blue-400',
  },
  {
    icon: '🛡️',
    title: 'Safe & Reliable',
    description: 'Cold wallets, multi-layer signatures, and regular audit keep your assets safe.',
    color: 'text-green-400',
  },
  {
    icon: '🕐',
    title: '24/7 Support',
    description: 'Support is always available 24/7 on both desktop and mobile devices.',
    color: 'text-cyan-400',
  },
]

export default function WhyChooseCexdex() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 mb-3">Why choose CEXDEX</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-12">
          The reasons global traders trust<br />
          CEXDEX for reliable market access
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className={`text-sm font-semibold mb-2 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
