/* Live Crypto Market Prices - price table with top coins */

const coins = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '₿', price: '$118,860.00', change: '+2.67%', changePositive: true, volume: '224.63M' },
  { name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', price: '$4,385.00', change: '+2.67%', changePositive: true, volume: '224.63M' },
  { name: 'XRP', symbol: 'XRP', icon: '✕', price: '$2.88', change: '+2.67%', changePositive: true, volume: '224.63M' },
  { name: 'BNB', symbol: 'BNB', icon: '◆', price: '$845.00', change: '-0.67%', changePositive: false, volume: '224.63M' },
  { name: 'Solana', symbol: 'SOL', icon: '◎', price: '$186.00', change: '-0.67%', changePositive: false, volume: '224.63M' },
]

export default function LiveCryptoPrices() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-purple-400 mb-2">
            ● Hot Crypto Coin ●
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Live Crypto Market Prices
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 text-xs border-b border-gray-800">
                <th className="text-left py-3 font-medium">Asset Name</th>
                <th className="text-left py-3 font-medium">Chart</th>
                <th className="text-right py-3 font-medium">Price</th>
                <th className="text-right py-3 font-medium">24h Change</th>
                <th className="text-right py-3 font-medium">24h Volume</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.symbol} className="border-b border-gray-800/50 hover:bg-gray-900/40 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{coin.icon}</span>
                      <div>
                        <span className="text-white font-medium text-sm">{coin.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    {/* Mini chart placeholder */}
                    <div className="w-24 h-8">
                      <svg viewBox="0 0 100 30" className="w-full h-full">
                        <polyline
                          fill="none"
                          stroke={coin.changePositive ? '#22c55e' : '#ef4444'}
                          strokeWidth="2"
                          points={coin.changePositive
                            ? '0,25 15,20 30,22 45,15 60,18 75,10 100,5'
                            : '0,5 15,10 30,8 45,15 60,12 75,22 100,25'
                          }
                        />
                      </svg>
                    </div>
                  </td>
                  <td className="text-right py-4 text-white text-sm font-medium">{coin.price}</td>
                  <td className={`text-right py-4 text-sm font-medium ${coin.changePositive ? 'text-green-400' : 'text-red-400'}`}>
                    {coin.change}
                  </td>
                  <td className="text-right py-4 text-gray-400 text-sm">{coin.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
