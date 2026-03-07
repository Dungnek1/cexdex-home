/* Hero — Figma 1253:175684 (tablet 744): 800px desktop, 465px tablet */

import DiamondIcon from './diamond-icon'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col min-h-[800px] h-[800px] tablet:min-h-[465px] tablet:h-[465px] lg:min-h-[800px] lg:h-[800px]"
      style={{ background: 'var(--base-black, #000)' }}
    >
      {/* Background — full width, height scales proportionally */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
        style={{
          backgroundImage: 'url(/bannerhero.svg)',
          backgroundSize: '100% auto',
        }}
      />

      {/* Strip "TRADING NOW" — Figma tablet: h-88, text 139.5px, tracking -5.58px */}
      <div
        className="hero-trading-strip absolute left-0 right-0 h-[160px] tablet:h-[88px] lg:h-[160px] overflow-hidden pointer-events-none z-0 border-b border-[var(--gray-80,#484848)]"
        style={{ top: 'calc(50% - 30px)', transform: 'translateY(-50%)' }}
      >
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="hero-trading-marquee flex gap-[14px] tablet:gap-[14px] lg:gap-6 w-max whitespace-nowrap text-[color:var(--gray-80,#484848)]">
            <span className="font-normal leading-none tracking-[-0.04em] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[120px] tablet:text-[140px] lg:text-[240px]">TRADING</span>
            <span className="font-normal leading-none tracking-[-0.04em] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[120px] tablet:text-[140px] lg:text-[240px]">NOW</span>
            <span className="font-normal leading-none tracking-[-0.04em] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[120px] tablet:text-[140px] lg:text-[240px]">TRADING</span>
            <span className="font-normal leading-none tracking-[-0.04em] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[120px] tablet:text-[140px] lg:text-[240px]">NOW</span>
          </div>
        </div>
      </div>

      {/* Coin — Figma: 510 desktop, 303×310 tablet 744 */}
      <div
        className="hero-coin-container absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 h-[280px] w-[280px] sm:w-[303px] tablet:h-[310px] tablet:w-[303px] lg:h-[520px] lg:w-[510px]"
        style={{ top: 'calc(50% - 30px)' }}
      >
        <div className="relative w-full h-full flex items-end justify-center">
          <img
            src="/Ellipse 2600.svg"
            alt=""
            aria-hidden
            className="absolute bottom-0 left-1/2 w-[90%] max-w-[464px] -translate-x-1/2 opacity-80"
          />
          <img
            src="/CEXDEX coin 1.svg"
            alt="CEXDEX"
            className="relative z-10 w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom row — BUILT FOR TRADERS + CTA; tablet: top 377px, px-24 */}
      <div className="absolute inset-x-0 bottom-0 top-[630px] tablet:top-[377px] flex items-end justify-center z-10">
        <div className="w-full px-6 tablet:px-6 lg:px-10 xl:px-[120px] flex flex-col tablet:flex-row tablet:items-end tablet:justify-between lg:flex-row gap-6 lg:gap-0 lg:items-end lg:justify-between pb-[50px] tablet:pb-[6px] lg:pb-[50px]">
          {/* Left: headline — Figma: 48px desktop, 26px tablet 744 */}
          <div className="flex flex-col items-start shrink-0">
            <p
              className="font-normal leading-[60px] tablet:leading-[32px] tracking-[-0.96px] tablet:tracking-[-0.52px] uppercase whitespace-nowrap text-[2rem] tablet:text-[26px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-0.96px]"
              style={{
                fontFamily: 'inherit',
                background: 'linear-gradient(180deg, #aeaeae 0%, rgba(255,255,255,0.6) 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BUILT FOR TRADERS
            </p>
            <p
              className="font-normal leading-[60px] tablet:leading-[32px] tracking-[-0.96px] tablet:tracking-[-0.52px] uppercase whitespace-nowrap text-[2rem] tablet:text-[26px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-0.96px]"
              style={{
                fontFamily: 'inherit',
                background: 'linear-gradient(180deg, #aeaeae 0%, rgba(255,255,255,0.6) 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              WHO DEMAND PERFORMANCE
            </p>
          </div>

          {/* Right: CTA — Figma tablet: diamond 6px, label 12px, input 180×36, gap 8 */}
          <div
            className="flex flex-col gap-2 tablet:gap-2 lg:gap-3 w-full tablet:max-w-[280px] lg:max-w-none lg:w-[415px] shrink-0 pb-3 tablet:pb-[6px] lg:pb-3"
          >
            <div className="flex items-center gap-2">
              <div className="shrink-0 tablet:scale-50 lg:scale-100 origin-center">
                <DiamondIcon size={12} />
              </div>
              <span
                className="text-[12px] tablet:text-[12px] tablet:leading-[18px] lg:text-[18px] lg:leading-[28px] font-normal whitespace-nowrap"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--gray-30, #c9c9c9)',
                }}
              >
                Create your trading account
              </span>
            </div>
            <div className="flex gap-1 tablet:gap-1 lg:gap-3 items-center">
              <div
                className="relative h-9 tablet:h-9 lg:h-10 w-[180px] tablet:w-[180px] lg:w-[300px] shrink-0 rounded-lg overflow-hidden flex items-center px-3 backdrop-blur-[5px]"
                style={{ background: 'rgba(0,0,0,0.25)' }}
              >
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="w-full bg-transparent text-[14px] leading-5 text-white placeholder:text-[var(--gray-60,#787878)] focus:outline-none font-light"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: 'var(--brand-40, #6353aa)' }}
                />
              </div>
              <button
                type="button"
                className="h-9 tablet:h-9 lg:h-10 px-3 tablet:px-3 lg:px-[14px] py-2 rounded-lg font-semibold text-[14px] leading-5 text-[var(--gray-10,#f1f1f1)] whitespace-nowrap transition-colors cursor-pointer hover:opacity-90"
                style={{
                  background: 'var(--brand-50, #402c96)',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
