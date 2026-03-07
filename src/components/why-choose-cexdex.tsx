/* Why Choose CEXDEX — Figma 1253:175773: header gap 12, subtitle 36/44, cards p-24 gap-24 */

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
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-[#6353aa] bg-black p-[24px] min-w-0">
      <div className="h-[90px] w-[100px] flex items-center justify-center shrink-0">
        {iconSlot}
      </div>
      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[24px] leading-[32px] text-[var(--gray-10,#f1f1f1)] font-normal">
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
      {/* Figma 1253:175773: gap 12 header, subtitle 36/44 tablet, 545px max; cards gap 24 */}
      <div className="w-full px-6 tablet:px-6 lg:px-10 xl:px-[120px]">
        <div className="flex flex-col gap-10 tablet:gap-[40px] lg:gap-[50px]">
          {/* Header — Figma: gap 12, Why choose CEXDEX 20/30, diamonds 12px gap 8 */}
          <div className="flex flex-col gap-3 tablet:gap-[12px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[20px] leading-[30px] text-[#f1f1f1]">
                Why choose <span className="text-[#f1f1f1]">CEXDEX</span>
              </p>
              <div className="flex gap-1 tablet:gap-2 items-center">
                <span className="inline-block w-2 h-2 tablet:w-3 tablet:h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
                <span className="inline-block w-2 h-2 tablet:w-3 tablet:h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
              </div>
            </div>
            <p className="text-[36px] tablet:text-[36px] lg:text-[48px] leading-[44px] tablet:leading-[44px] lg:leading-[60px] tracking-[-0.72px] tablet:tracking-[-0.72px] lg:tracking-[-0.96px] text-[#f1f1f1] max-w-[545px] tablet:max-w-[580px] lg:max-w-[792px]">
              The reasons global traders trust CEXDEX for reliable market{'\u00A0'}access
            </p>
          </div>

          {/* Grid 2x3 — Figma: gap 24 */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 gap-6 tablet:gap-[24px] lg:gap-[24px]">
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
