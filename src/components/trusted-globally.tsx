/* Trusted Globally - partner logos section */

const partners = ['Tracxn', 'ODAILY', 'Bitget', 'BINANCE', 'ROOTDATA']

export default function TrustedGlobally() {
  return (
    <section className="bg-gray-950 py-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <h2 className="text-lg text-white font-medium">
            <span className="text-purple-400 mr-2">●●</span>
            Trusted Globally
          </h2>
          <p className="text-sm text-gray-500">
            Powered by trusted partners, built for global compliance
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-gray-400 text-lg md:text-xl font-bold tracking-wide opacity-60 hover:opacity-100 transition-opacity"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
