/* Why Choose CEXDEX — Figma 1247:141328: header + 6 cards, border #6353aa, icons from public/whychose */

const WHY_CHOSE_ICONS = [
  '/whychose/Frame (1).svg',
  '/whychose/Frame 2.png',
  '/whychose/Frame (3).svg',
  '/whychose/Frame (4).svg',
  '/whychose/Frame.png',
  '/whychose/support-3d-icon-png-download-8688992 1.svg',
] as const

const FEATURES: { title: string; description: string }[] = [
  {
    title: 'Buy & Sell Crypto',
    description: 'AI engine analyzes markets, enabling faster and more accurate trading',
  },
  {
    title: 'Trade Assets',
    description: 'We transform ideas into simple solutions reaching potential customers',
  },
  {
    title: 'Earn Rewards for Trading',
    description: 'We simplify ideas, making them usable and reaching potential customers',
  },
  {
    title: 'Fast Execution',
    description: 'Ultra-low latency technology processes all transactions within milliseconds',
  },
  {
    title: 'Safe & Reliable',
    description: 'Cold wallets, multi-layer signatures, and regular audits keep your assets safe',
  },
  {
    title: '24/7 Support',
    description: 'Support is always available 24/7, on both desktop and mobile devices',
  },
]

function FeatureCard({ title, description, iconSlot }: { title: string; description: string; iconSlot: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#6353aa] bg-black p-10 min-w-0">
      <div className="h-[90px] w-[100px] flex items-center justify-center shrink-0">
        {iconSlot}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[24px] leading-[32px] text-[#402c96] font-normal">
          {title}
        </h3>
        <p className="text-[16px] leading-6 font-light text-[#aeaeae]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function WhyChooseCexdex() {
  return (
    <section className="bg-[var(--Base-Black)]">
      {/* 1440: content 1200px; inner 776px header block, grid 1200 */}
      <div className="w-full px-6 md:px-10 xl:px-[120px]">
        <div className="flex flex-col gap-[50px]">
          {/* Header — Why choose CEXDEX (30px) + subtitle 792px max, Display lg 48/60 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between w-full">
              <p className="text-[20px] leading-[30px] text-[#f1f1f1]">
                Why choose <span className="text-[#f1f1f1]">CEXDEX</span>
              </p>
              <div className="flex gap-1 items-center">
                <span className="inline-block w-2 h-2 rotate-45 bg-[#f1f1f1]" aria-hidden />
                <span className="inline-block w-2 h-2 rotate-45 bg-[#f1f1f1]" aria-hidden />
              </div>
            </div>
            <p className="text-[48px] leading-[60px] tracking-[-0.96px] text-[#f1f1f1] max-w-[792px]">
              The reasons global traders trust CEXDEX for reliable market access
            </p>
          </div>

          {/* Grid 2x3 — gap 24px, cards 384x270 (Figma Gird) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                iconSlot={
                  <img
                    src={WHY_CHOSE_ICONS[i]}
                    alt=""
                    className="h-[90px] w-[100px] object-contain object-left"
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
