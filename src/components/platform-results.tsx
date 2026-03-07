/* Platform Results — Figma 1253:157097 mobile, 175711 tablet/desktop */

const statsTop = [
  { value: '500k', label: 'Active Users', description: ['Global traders using', 'our platform'] },
  { value: '$80B+', label: 'Total Volume', description: ['All-time trading', 'volume processed'] },
]

const statsBottom = [
  { value: '$600M+', label: '24h Volume', description: ['Trading activity over', 'the last 24h'] },
  { value: '350+', label: 'Trading Pairs', description: ['Number of available', 'crypto markets'] },
]

function StatBlock({
  value,
  label,
  description,
}: {
  value: string
  label: string
  description: string[]
}) {
  return (
    <div className="flex flex-col gap-[20px] tablet:gap-5 lg:gap-5 w-full min-w-0 max-w-[407px] flex-1 min-h-0">
      {/* Number + line — mobile: 36px/44px h-60; tablet+: 72px h-60/68 */}
      <div className="platform-stat-number-wrap h-[60px] tablet:h-[60px] lg:h-[68px] relative overflow-hidden border-b border-[#303030]">
        <span
          className="platform-stat-number absolute left-0 bg-clip-text bg-gradient-to-b from-[#a8bfff] to-[#402c96] text-transparent text-[36px] tablet:text-[72px] lg:text-[72px] font-medium leading-[44px] tablet:leading-[90px] lg:leading-[90px] tracking-[-0.72px] tablet:tracking-[-1.44px]"
          style={{ fontFamily: 'inherit' }}
        >
          {value}
        </span>
      </div>
      <div className="flex flex-col tablet:flex-col tablet:items-stretch tablet:gap-1 lg:flex-row lg:items-start lg:justify-between lg:gap-4 platform-stat-text">
        <p className="text-[16px] tablet:text-[18px] leading-[24px] tablet:leading-[28px] font-light text-[#f1f1f1] w-full tablet:w-full lg:w-[107px] lg:shrink-0 whitespace-nowrap">
          {label}
        </p>
        <div className="text-[12px] tablet:text-[14px] leading-[18px] tablet:leading-[20px] font-light text-[#939393] w-full min-w-0 tablet:max-w-none lg:max-w-[150px] pt-[4px]">
          {description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PlatformResults() {
  return (
    <section className="bg-[var(--Base-Black)]">
      {/* 1440: content 1200px; tablet 744: 24px padding, content 696px */}
      <div className="w-full px-[24px] tablet:px-6 lg:px-10 xl:px-[120px]">
        <div className="flex flex-col gap-[10px] tablet:gap-[40px] lg:flex-row lg:items-start lg:gap-[120px]">
          {/* Left: mobile 24px gap 8; tablet+ 30px */}
          <div className="flex flex-col gap-[10px] tablet:gap-[10px] pt-[6px] lg:w-[226px] lg:shrink-0">
            <div className="flex gap-[8px] items-center">
              <span className="inline-block w-3 h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
              <span className="inline-block w-3 h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
            </div>
            <h2 className="text-[24px] tablet:text-[30px] leading-[32px] tablet:leading-[38px] text-[#f1f1f1] font-normal">
              Platform Results
            </h2>
          </div>

          {/* Right: mobile 2x2 gap 30/20; tablet+ gap 40 col, 50/70 row */}
          <div className="flex-1 min-w-0 flex flex-col gap-5 tablet:gap-[50px] lg:gap-[70px]">
            <div className="grid grid-cols-2 tablet:grid-cols-2 gap-x-[30px] tablet:gap-x-[40px] gap-y-5 tablet:gap-y-0">
              {statsTop.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 tablet:grid-cols-2 gap-x-[30px] tablet:gap-x-[40px] gap-y-5 tablet:gap-y-0">
              {statsBottom.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
