/* Market Platform — py-120, title 60px center, 3 cards h-500 */

import Container from './ui/Container'

export default function MarketPlatform() {
  return (
    <section className="py-[120px] bg-[var(--Base-Black)]">
      <h2 className="text-center text-[60px] mb-[80px]">
        Market Platform
      </h2>
      <Container>
        <div className="grid grid-cols-3 gap-[24px]">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="border border-[#333] p-[40px] h-[500px]"
            >
              <h3 className="text-xl mb-4">
                Advanced Trading
              </h3>
              <p className="text-gray-400 mb-[40px]">
                Powerful tools designed for professional traders
              </p>
              <button className="text-purple-400 flex items-center gap-2">
                Custody Now →
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
