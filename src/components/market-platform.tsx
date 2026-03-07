/* Market Platform — Figma 1528:172599 */

const MARKET_ICONS = {
  spot: '/market/fast-money-transfer-3d-icon-png-download-12460335%201.svg',
  future: '/market/bitcoin-growth-3d-icon-png-download-10326910%201.svg',
  aiBot: '/market/ai-bot-3d-icon-png-download-11536855-2%202.svg',
} as const

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const cards = [
  {
    tag: 'Spot Trading',
    title: 'Instant crypto trading at transparent market prices',
    icon: MARKET_ICONS.spot,
  },
  {
    tag: 'Future Trading',
    title: 'Leverage trades to profit in rising and falling markets',
    icon: MARKET_ICONS.future,
  },
  {
    tag: 'AI Bot',
    title: 'Activate AI bots to trade automatically 24/7',
    icon: MARKET_ICONS.aiBot,
  },
]

export default function MarketPlatform() {
  return (
    <section
      className="flex flex-col items-center gap-[70px] w-full min-h-[500px] py-[70px]"
      style={{ background: 'var(--base-black, #000)' }}
    >
      <div
        className="w-full h-[80px] tablet:h-[120px] lg:h-[154px] relative overflow-hidden flex items-center justify-center"
        style={{ borderColor: 'var(--gray-90, #303030)' }}
      >
        <div
          className="absolute left-0 right-0 bottom-0 tablet:bottom-[8px] lg:bottom-[16px] h-px z-[2]"
          style={{ background: 'var(--gray-90, #303030)' }}
          aria-hidden
        />
        <div className="market-platform-header-content absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="market-platform-label absolute left-0 right-0 text-[40px] tablet:text-[80px] lg:text-[120px] font-normal whitespace-nowrap tracking-[-1.6px] tablet:tracking-[-3.2px] lg:tracking-[-4.8px] leading-none text-center"
          style={{
            fontFamily: '"PolySans Neutral", "PolySans Trial", inherit',
            background: 'linear-gradient(180deg, #aeaeae 0%, rgba(255,255,255,0.6) 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            top: '100%',
            transform: 'translateY(calc(-50% - 12px))',
          }}
        >
          Market Platform
        </span>
        </div>
      </div>

      <div className="w-full px-6 tablet:px-6 lg:px-10 xl:px-[120px] overflow-x-auto tablet:overflow-visible lg:overflow-visible scroll-smooth">
        <div className="flex flex-row tablet:flex-col lg:flex-row gap-6 tablet:gap-8 lg:gap-6 w-full min-w-max tablet:min-w-0 lg:min-w-0">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="flex flex-col justify-between rounded-[12px] p-6 tablet:p-10 min-w-[240px] tablet:min-w-0 tablet:w-full lg:min-w-0 lg:flex-1 h-[380px] tablet:h-[500px] shrink-0 tablet:shrink lg:shrink"
              style={{ background: 'var(--base-bg-2, #141414)' }}
            >
            <div className="flex flex-col gap-2 tablet:gap-[14px]">
              <div className="flex gap-2 tablet:gap-[10px] items-center">
                <span
                  className="w-2.5 h-2.5 tablet:w-3 tablet:h-3 shrink-0 rotate-45"
                  style={{ background: 'var(--gray-10, #f1f1f1)' }}
                  aria-hidden
                />
                <p
                  className="text-[16px] tablet:text-[20px] leading-[24px] tablet:leading-[30px] font-extrabold whitespace-nowrap shrink-0"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--gray-10, #f1f1f1)',
                  }}
                >
                  {card.tag}
                </p>
              </div>
              <p
                className="text-[18px] tablet:text-[24px] leading-[26px] tablet:leading-[32px] font-normal w-full"
                style={{
                  fontFamily: 'inherit',
                  color: 'var(--gray-50, #939393)',
                }}
              >
                {card.title}
              </p>
            </div>

            <div
              className="flex items-center justify-between pb-[12px] border-b border-solid"
              style={{ borderColor: 'var(--gray-80, #484848)' }}
            >
              <span
                className="text-[16px] font-semibold leading-[24px]"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--gray-10, #f1f1f1)',
                }}
              >
                Custody Now
              </span>
              <span className="text-[var(--gray-10,#f1f1f1)]">
                <ArrowIcon />
              </span>
            </div>

            <div className="h-[70px] tablet:h-[100px] w-[110px] tablet:w-[132px] flex items-end justify-start shrink-0">
              <img
                src={card.icon}
                alt=""
                className="h-full max-h-[70px] tablet:max-h-[100px] w-auto object-contain object-left-bottom"
              />
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}



