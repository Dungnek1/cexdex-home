/* Why Choose CEXDEX — Figma 1253:175773: header gap 12, subtitle 36/44, cards p-24 gap-24 */

import { DoubleDiamonds } from './section-header'

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

function FeatureCard({ title, description, iconSrc }: { title: string; description: string; iconSrc: string }) {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-[#6353aa] bg-black p-[24px] min-w-0">
      <div className="h-[90px] w-[100px] flex items-center justify-center shrink-0">
        <img src={iconSrc} alt="" className="h-[90px] w-[100px] object-contain object-left" />
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
    <section>
      <div className="w-full section-px">
        <div className="flex flex-col gap-10 tablet:gap-[40px] lg:gap-[50px]">
          <div className="flex flex-col gap-3 tablet:gap-[12px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[20px] leading-[30px] text-[#f1f1f1]">
                Why choose <span className="text-[#f1f1f1]">CEXDEX</span>
              </p>
              <DoubleDiamonds size={8} />
            </div>
            <p className="text-[36px] tablet:text-[36px] lg:text-[48px] leading-[44px] tablet:leading-[44px] lg:leading-[60px] tracking-[-0.72px] tablet:tracking-[-0.72px] lg:tracking-[-0.96px] text-[#f1f1f1] max-w-[545px] tablet:max-w-[580px] lg:max-w-[792px]">
              The reasons global traders trust CEXDEX for reliable market{'\u00A0'}access
            </p>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 gap-6 tablet:gap-[24px] lg:gap-[24px]">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} iconSrc={WHY_CHOSE_ICONS[i]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
