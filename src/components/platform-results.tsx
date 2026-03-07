/* Platform Results — Figma 1253:175711: tablet layout, description xuống dòng */

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
    <div className="flex flex-col gap-5 tablet:gap-5 lg:gap-5 w-full min-w-0 max-w-[407px] flex-1 min-h-0">
      <div className="h-[68px] tablet:h-[60px] lg:h-[68px] relative overflow-hidden border-b border-[#303030]">
        <span
          className="absolute left-0 top-0 -translate-y-2 bg-clip-text bg-gradient-to-b from-[#a8bfff] to-[#402c96] text-transparent text-[56px] tablet:text-[72px] lg:text-[72px] font-medium leading-[90px] tracking-[-1.44px]"
          style={{ fontFamily: 'inherit' }}
        >
          {value}
        </span>
      </div>
      {/* Tablet: label 1 hàng ngang full width, description ngay dưới; desktop: side-by-side */}
      <div className="flex flex-col tablet:flex-col tablet:items-stretch tablet:gap-1 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
        <p className="text-[18px] leading-[28px] font-light text-[#f1f1f1] w-full tablet:w-full lg:w-[107px] lg:shrink-0 whitespace-nowrap">
          {label}
        </p>
        <div className="text-[14px] leading-[20px] font-light text-[#939393] w-full min-w-0 tablet:max-w-none lg:max-w-[150px] pt-[4px]">
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
      <div className="w-full px-6 tablet:px-6 lg:px-10 xl:px-[120px]">
        <div className="flex flex-col gap-10 tablet:gap-[40px] lg:flex-row lg:items-start lg:gap-[120px]">
          {/* Left: Platform Results — Figma 1253:175712: 2 diamonds 12px, gap 8, title 30px, w-226 */}
          <div className="flex flex-col gap-2.5 tablet:gap-[10px] pt-1.5 tablet:pt-[6px] lg:w-[226px] lg:shrink-0">
            <div className="flex gap-1 tablet:gap-2 items-center">
              <span className="inline-block w-2 h-2 tablet:w-3 tablet:h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
              <span className="inline-block w-2 h-2 tablet:w-3 tablet:h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
            </div>
            <h2 className="text-[30px] leading-[38px] text-[#f1f1f1] font-normal">
              Platform Results
            </h2>
          </div>

          {/* Right: 2x2 grid — Figma: gap 40 col, 50 row */}
          <div className="flex-1 min-w-0 flex flex-col gap-[50px] tablet:gap-[50px] lg:gap-[70px]">
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-[20px] tablet:gap-x-[40px] lg:gap-x-[40px] gap-y-8 tablet:gap-y-0">
              {statsTop.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-[20px] tablet:gap-x-[40px] lg:gap-x-[40px] gap-y-8 tablet:gap-y-0">
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
