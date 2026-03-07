/* Market Platform — Figma 1253:142911: header + 3 cards, icons from public/market */

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
      className="flex flex-col items-center gap-[70px] w-full min-h-[500px]"
      style={{ background: 'var(--base-black, #000)' }}
    >
      {/* Header strip — title chìm: nửa dưới bị cắt bởi overflow */}
      <div
        className="w-full h-[154px] relative overflow-hidden border-b border-solid flex items-center justify-center"
        style={{ borderColor: 'var(--gray-90, #303030)' }}
      >
        <span
          className="absolute left-0 right-0 text-[120px] font-normal whitespace-nowrap tracking-[-4.8px] leading-none text-center"
          style={{
            fontFamily: '"PolySans Neutral", "PolySans Trial", inherit',
            background: 'linear-gradient(180deg, #aeaeae 0%, rgba(255,255,255,0.6) 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            top: 'calc(50% + 39px)',
            transform: 'translateY(-50%)',
          }}
        >
          Market Platform
        </span>
      </div>

      {/* 1200 content, 3 cards, gap 24 */}
      <div className="w-full px-6 md:px-10 xl:px-[120px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.tag}
            className="flex flex-col justify-between rounded-[12px] p-10 h-[500px] min-h-[400px]"
            style={{ background: 'var(--base-bg-2, #141414)' }}
          >
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3 h-3 rotate-45 shrink-0"
                  style={{ background: 'var(--gray-10, #f1f1f1)' }}
                  aria-hidden
                />
                <p
                  className="text-[20px] leading-[30px] font-extrabold whitespace-nowrap shrink-0"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--gray-10, #f1f1f1)',
                  }}
                >
                  {card.tag}
                </p>
              </div>
              <p
                className="text-[24px] leading-[32px] font-normal w-full"
                style={{
                  fontFamily: 'inherit',
                  color: 'var(--gray-50, #939393)',
                }}
              >
                {card.title}
              </p>
            </div>

            <div
              className="flex items-center justify-between pb-3 border-b border-solid"
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

            <div className="h-[100px] flex items-end justify-start shrink-0">
              <img
                src={card.icon}
                alt=""
                className="h-full max-h-[100px] w-auto object-contain object-left-bottom"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
