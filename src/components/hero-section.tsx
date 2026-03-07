/* Hero — Figma mobile 1253:157064, tablet 175684, desktop 800px */

import DiamondIcon from './diamond-icon'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col min-h-[600px] h-[600px] tablet:min-h-[465px] tablet:h-[465px] lg:min-h-[800px] lg:h-[800px]"
      style={{ background: 'var(--base-black, #000)' }}
    >
      {/* Banner — Figma 1253:157065 "Screen Recording...": 959×600, centered, cover */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center pointer-events-none overflow-hidden"
        style={{
          backgroundImage: 'url(/bannerhero.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Strip "TRADING NOW" — line nâng lên, chữ giữ nguyên vị trí */}
      <div
        className="hero-trading-strip absolute left-0 right-0 h-[88px] tablet:h-[88px] lg:h-[160px] overflow-hidden pointer-events-none z-0"
        style={{ top: 'calc(50% - 40px)', transform: 'translateY(-50%)' }}
      >
        <div
          className="absolute left-0 right-0 bottom-[24px] tablet:bottom-[8px] lg:bottom-[16px] h-px z-[2]"
          style={{ background: 'var(--gray-80, #484848)' }}
          aria-hidden
        />
        <div className="hero-trading-content absolute inset-0 flex items-center overflow-hidden">
          <div className="hero-trading-marquee flex gap-[14px] tablet:gap-[14px] lg:gap-6 w-max whitespace-nowrap text-[color:var(--gray-80,#484848)]">
            <span className="font-normal leading-none tracking-[-2.56px] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[64px] tablet:text-[140px] lg:text-[240px]">TRADING</span>
            <span className="font-normal leading-none tracking-[-2.56px] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[64px] tablet:text-[140px] lg:text-[240px]">NOW</span>
            <span className="font-normal leading-none tracking-[-2.56px] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[64px] tablet:text-[140px] lg:text-[240px]">TRADING</span>
            <span className="font-normal leading-none tracking-[-2.56px] tablet:tracking-[-5.58px] lg:tracking-[-9.6px] select-none text-[64px] tablet:text-[140px] lg:text-[240px]">NOW</span>
          </div>
        </div>
      </div>

      {/* Coin — mobile: 215×220; tablet: 303×310; desktop: 510×520 */}
      <div
        className="hero-coin-container absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 h-[220px] w-[215px] tablet:h-[310px] tablet:w-[303px] lg:h-[520px] lg:w-[510px]"
        style={{ top: 'calc(50% - 40px)' }}
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

      {/* Bottom row — mobile: stacked px-24 pb-20 gap-12; tablet+: row */}
      <div className="absolute inset-x-0 bottom-0 top-[380px] tablet:top-[377px] lg:top-[630px] flex items-end justify-center z-10">
        <div className="w-full px-[24px] tablet:px-[24px] lg:px-10 xl:px-[120px] flex flex-col tablet:flex-row tablet:items-end tablet:justify-between lg:flex-row gap-[12px] tablet:gap-6 lg:gap-0 lg:items-end lg:justify-between pb-5 tablet:pb-[6px] lg:pb-[50px]">
          {/* Left: headline — mobile: 28px 3 lines; tablet: 26px; desktop: 48px */}
          <div className="flex flex-col items-start shrink-0">
            <p
              className="font-normal leading-[1.2] tablet:leading-[32px] lg:leading-[60px] tracking-[-0.56px] tablet:tracking-[-0.52px] lg:tracking-[-0.96px] uppercase whitespace-nowrap text-[28px] tablet:text-[26px] lg:text-[48px]"
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
              className="font-normal leading-[1.2] tablet:leading-[32px] lg:leading-[60px] tracking-[-0.56px] tablet:tracking-[-0.52px] lg:tracking-[-0.96px] uppercase whitespace-nowrap text-[28px] tablet:text-[26px] lg:text-[48px] hidden tablet:block"
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
            <p
              className="font-normal leading-[1.2] tracking-[-0.56px] uppercase whitespace-nowrap text-[28px] tablet:hidden"
              style={{
                fontFamily: 'inherit',
                background: 'linear-gradient(180deg, #aeaeae 0%, rgba(255,255,255,0.6) 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              WHO DEMAND
            </p>
            <p
              className="font-normal leading-[1.2] tracking-[-0.56px] uppercase whitespace-nowrap text-[28px] tablet:hidden"
              style={{
                fontFamily: 'inherit',
                background: 'linear-gradient(180deg, #aeaeae 0%, rgba(255,255,255,0.6) 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              PERFORMANCE
            </p>
          </div>

          {/* Right: CTA — mobile: diamond 6px, stacked, gap-8; tablet+: row */}
          <div
            className="flex flex-col gap-2 tablet:gap-2 lg:gap-3 w-full tablet:max-w-[280px] lg:max-w-none lg:w-[415px] shrink-0 pb-0 tablet:pb-[6px] lg:pb-3"
          >
            <div className="flex items-center gap-1 tablet:gap-2">
              <div className="shrink-0 scale-50 tablet:scale-50 lg:scale-100 origin-center">
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
            <div className="flex gap-1 tablet:gap-1 lg:gap-3 items-end w-full tablet:w-auto">
              <div
                className="relative h-9 tablet:h-9 lg:h-10 flex-1 tablet:flex-none tablet:w-[180px] lg:w-[300px] min-w-0 rounded-lg overflow-hidden flex items-center px-3 backdrop-blur-[5px]"
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
