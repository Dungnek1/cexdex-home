/* Trusted Globally — Figma 1253:175758: tablet 744, title + subtitle stack, gradient 120px */

const PARTNER_LOGOS: { name: string; src: string; height?: number }[] = [
  { name: 'Tracxn', src: '/trustedlogo/tracxn.svg' },
  { name: 'ODAILY', src: '/trustedlogo/odaily.svg', height: 52 },
  { name: 'Bitget', src: '/trustedlogo/bitget.svg' },
  { name: 'BINANCE', src: '/trustedlogo/binance.svg' },
  { name: 'ROOTDATA', src: '/trustedlogo/rootda.svg' },
]

const LOGO_SLOT_MIN_WIDTH = 180
const DEFAULT_LOGO_HEIGHT = 36

function LogoItem({ name, src, height = DEFAULT_LOGO_HEIGHT }: { name: string; src: string; height?: number }) {
  return (
    <div className="flex h-[66px] shrink-0 items-center justify-center px-10" style={{ minWidth: LOGO_SLOT_MIN_WIDTH }}>
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-auto object-contain object-center opacity-70"
          style={{ height, maxWidth: height * 4 }}
        />
      ) : (
        <span className="text-[18px] font-medium text-[#939393] tracking-wider">{name}</span>
      )}
    </div>
  )
}

function LogoCarousel() {
  const sets = [0, 1, 2, 3]
  return (
    <div className="trusted-marquee flex w-max">
      {sets.map((s) =>
        PARTNER_LOGOS.map((logo, i) => (
          <LogoItem key={`${s}-${i}`} name={logo.name} src={logo.src} height={logo.height} />
        ))
      )}
    </div>
  )
}

export default function TrustedGlobally() {
  return (
    <section className="bg-[var(--Base-Black)]">
      {/* Figma 1253:175758: tablet 696px, title + subtitle stack vertical; desktop: row */}
      <div className="w-full px-6 tablet:px-6 lg:px-10 xl:px-[120px]">
        <div className="flex flex-col gap-8 tablet:flex-col tablet:gap-4 tablet:items-start tablet:max-w-[696px] tablet:mx-auto lg:max-w-none lg:mx-0 lg:flex-row lg:items-center lg:gap-[120px]">
          {/* Title block — Figma: 2 diamonds 12px gap 8, title 30px, w-226 */}
          <div className="flex flex-col gap-2.5 tablet:gap-[10px] shrink-0 tablet:w-[226px] lg:w-[226px]">
            <div className="flex gap-1 tablet:gap-2 items-center">
              <span className="inline-block w-2 h-2 tablet:w-3 tablet:h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
              <span className="inline-block w-2 h-2 tablet:w-3 tablet:h-3 rotate-45 bg-[#f1f1f1]" aria-hidden />
            </div>
            <h2 className="text-[30px] leading-[38px] text-[#f1f1f1] font-normal">
              Trusted Globally
            </h2>
          </div>
          {/* Subtitle — Figma: 20px leading 30px, full width below title on tablet */}
          <div className="flex flex-col justify-center min-w-0 tablet:w-full">
            <p className="text-[18px] tablet:text-[20px] leading-[28px] tablet:leading-[30px] font-light text-[#939393]">
              Powered by trusted partners, built for global compliance
            </p>
          </div>
        </div>
      </div>

      {/* Partner strip — Figma: h-90, gradient 120px (#050505) */}
      <div className="pt-[30px] tablet:pt-[40px]">
        <div className="relative border-t border-b border-[#303030] h-[90px] overflow-hidden">
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <LogoCarousel />
          </div>
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-[120px] z-10"
            style={{ background: 'linear-gradient(to right, #050505, rgba(5,5,5,0))' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-[120px] z-10"
            style={{ background: 'linear-gradient(to left, #050505, rgba(5,5,5,0))' }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
