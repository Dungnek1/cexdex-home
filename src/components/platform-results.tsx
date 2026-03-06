/* Platform Results - key statistics showcase */

const stats = [
  { value: '500k', label: 'Active Users', description: 'Global traders using our platform' },
  { value: '$80B+', label: 'Total Volume', description: 'All time trading volume processed' },
  { value: '$600M+', label: '24h Volume', description: 'Trading activity over the past 24h' },
  { value: '350+', label: 'Trading Pairs', description: 'Number of available crypto markets' },
]

export default function PlatformResults() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg text-white font-medium mb-10">
          <span className="text-purple-400 mr-2">●●</span>
          Platform Results
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
