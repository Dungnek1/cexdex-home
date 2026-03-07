/* Hero — Figma 1528:172953 Group (Banner): 800px, strip, coin, CTA at 630px */

function DiamondIcon({ size = 12 }: { size?: number }) {
  return (
    <span
      className="shrink-0 rotate-45"
      style={{
        width: size,
        height: size,
        background: 'var(--gray-10, #f1f1f1)',
      }}
      aria-hidden
    />
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{
        background: 'var(--base-black, #000)',
        minHeight: 800,
        height: 800,
      }}
    >
      {/* Background — Figma 1528:172955 */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-cover pointer-events-none"
        style={{ backgroundImage: 'url(/bannerhero.svg)' }}
      />

      {/* Strip "TRADING NOW" — Figma 1528:172973: h-150, top calc(50%-25px), border-b */}
      <div
        className="absolute left-0 right-0 overflow-hidden pointer-events-none z-0 border-b border-solid"
        style={{
          top: 'calc(50% - 25px)',
          height: 150,
          borderColor: 'var(--gray-80, #484848)',
        }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
          style={{ top: 12, width: 1540, maxWidth: '100%', height: 174 }}
        >
          <div
            className="absolute left-0 w-max flex gap-6 whitespace-nowrap -translate-y-1/2"
            style={{ top: 'calc(50% + 6px)' }}
          >
            <div className="hero-trading-marquee flex gap-6">
              <span className="font-normal leading-none tracking-[-0.04em] md:tracking-[-9.6px] select-none text-[120px] md:text-[180px] lg:text-[240px] text-[color:var(--gray-80,#484848)]">
                TRADING
              </span>
              <span className="font-normal leading-none tracking-[-0.04em] md:tracking-[-9.6px] select-none text-[120px] md:text-[180px] lg:text-[240px] text-[color:var(--gray-80,#484848)]">
                NOW
              </span>
              <span className="font-normal leading-none tracking-[-0.04em] md:tracking-[-9.6px] select-none text-[120px] md:text-[180px] lg:text-[240px] text-[color:var(--gray-80,#484848)]">
                TRADING
              </span>
              <span className="font-normal leading-none tracking-[-0.04em] md:tracking-[-9.6px] select-none text-[120px] md:text-[180px] lg:text-[240px] text-[color:var(--gray-80,#484848)]">
                NOW
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Coin — Figma 1528:172975: 510x520, top calc(50%-30px), center */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[280px] sm:w-[380px] lg:w-[510px]"
        style={{
          top: 'calc(50% - 30px)',
          height: 'clamp(280px, 65vw, 520px)',
          maxHeight: 520,
        }}
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

      {/* Bottom row — Figma 1528:172956: top 630px, 1200px, items-end justify-between */}
      <div
        className="absolute left-0 right-0 flex items-end justify-center z-10"
        style={{ top: 630, bottom: 0 }}
      >
        <div className="content-wrap w-full flex flex-col lg:flex-row gap-6 lg:gap-0 lg:items-end lg:justify-between pb-0">
          {/* Left: headline — Figma 1528:172957–172961: 48px, gradient, two lines */}
          <div className="flex flex-col items-start shrink-0">
            <p
              className="font-normal leading-[60px] tracking-[-0.96px] uppercase whitespace-nowrap text-[2rem] md:text-[48px]"
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
              className="font-normal leading-[60px] tracking-[-0.96px] uppercase whitespace-nowrap text-[2rem] md:text-[48px]"
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

          {/* Right: CTA — Figma 1528:172962: w-415, gap-12, pb-12 */}
          <div
            className="flex flex-col gap-3 w-full lg:w-[415px] shrink-0"
            style={{ paddingBottom: 12 }}
          >
            <div className="flex items-center gap-2">
              <DiamondIcon size={12} />
              <span
                className="text-[18px] leading-[28px] font-normal whitespace-nowrap"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--gray-30, #c9c9c9)',
                }}
              >
                Create your trading account
              </span>
            </div>
            <div className="flex gap-1 items-end flex-wrap">
              <div
                className="relative h-10 shrink-0 rounded-lg overflow-hidden flex items-center px-3 backdrop-blur-[5px]"
                style={{
                  width: 300,
                  background: 'rgba(0,0,0,0.25)',
                }}
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
                className="h-10 px-[14px] py-[10px] rounded-lg font-semibold text-[14px] leading-5 text-[var(--gray-10,#f1f1f1)] whitespace-nowrap transition-colors cursor-pointer hover:opacity-90"
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
