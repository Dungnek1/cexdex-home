import HeroSection from './components/hero-section'
import PlatformResults from './components/platform-results'
import TrustedGlobally from './components/trusted-globally'
import WhyChooseCexdex from './components/why-choose-cexdex'
import MarketPlatform from './components/market-platform'
import LiveCryptoPrices from './components/live-crypto-prices'
import FaqSection from './components/faq-section'

function App() {
  return (
    <div className="min-h-screen bg-[var(--Base-Black)] text-white flex flex-col gap-[40px]">
      <HeroSection />
      <PlatformResults />
      <TrustedGlobally />
      <WhyChooseCexdex />
      <MarketPlatform />
      <LiveCryptoPrices />
      <FaqSection />
    </div>
  )
}

export default App
