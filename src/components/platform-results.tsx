/* Platform Results — Figma 1247:141261: gradient số, border, typography; mô tả sáng hơn để đỡ chìm */

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
    <div className="flex flex-col gap-5 w-full min-w-0 max-w-[407px]">
      {/* Gạch dưới chân — ẩn ít (cao 68px để chỉ chân chữ bị cắt nhẹ) */}
      <div className="h-[68px] relative overflow-hidden border-b border-[#303030]">
        <span
          className="absolute left-0 top-0 bg-clip-text bg-gradient-to-b from-[#a8bfff] to-[#402c96] text-transparent text-[56px] md:text-[72px] font-medium leading-[90px] tracking-[-1.44px]"
          style={{ fontFamily: 'inherit' }}
        >
          {value}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4">
        <p className="text-[18px] leading-[28px] font-light text-[#f1f1f1] whitespace-nowrap shrink-0">
          {label}
        </p>
        <div className="text-[14px] leading-[20px] font-light text-[#b5b5b5] min-w-0 max-w-[200px]">
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
    <section className="bg-[var(--Base-Black)] py-20">
      {/* 1440: content 1200px centered (120px margin); smaller: px */}
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-0">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-[120px]">
          {/* Trái: Platform Results — 226px, Display sm 30px */}
          <div className="flex flex-col gap-2.5 pt-1.5 md:w-[226px] md:shrink-0">
            <div className="flex gap-1 items-center">
              <span className="inline-block w-2 h-2 rotate-45 bg-[#f1f1f1]" aria-hidden />
              <span className="inline-block w-2 h-2 rotate-45 bg-[#f1f1f1]" aria-hidden />
            </div>
            <h2 className="text-[30px] leading-[38px] text-[#f1f1f1] font-normal">
              Platform Results
            </h2>
          </div>

          {/* Phải: 2x2 grid — gap row 70, gap col 40 (Figma 854px block) */}
          <div className="flex-1 min-w-0 flex flex-col gap-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-8">
              {statsTop.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-8">
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
