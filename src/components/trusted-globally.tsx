/* Trusted Globally — Figma 1247:141308: header + logo carousel, gradient fade hai bên */

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
  /* 4 copies to ensure seamless loop on wide screens (5 logos x 180px = 900px per set) */
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
      {/* 1440: content 1200px centered */}
      <div className="w-full px-6 md:px-10 xl:px-[120px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-[120px]">
          <div className="flex flex-col gap-2.5 shrink-0 sm:w-[226px]">
            <div className="flex gap-2 items-center">
              <span className="flex gap-1" aria-hidden>
                <span className="inline-block w-2 h-2 rotate-45 bg-[#f1f1f1]" />
                <span className="inline-block w-2 h-2 rotate-45 bg-[#f1f1f1]" />
              </span>
            </div>
            <h2 className="text-[30px] leading-[38px] text-[#f1f1f1] font-normal">
              Trusted Globally
            </h2>
          </div>
          <div className="flex flex-col gap-2.5 justify-center min-w-0">
            <div className="flex gap-2 items-center">
              <span className="flex gap-1" aria-hidden>
                <span className="inline-block w-2 h-2 rotate-45 bg-[#939393]" />
                <span className="inline-block w-2 h-2 rotate-45 bg-[#939393]" />
              </span>
            </div>
            <p className="text-[20px] leading-[30px] font-light text-[#939393]">
              Powered by trusted partners, built for global compliance
            </p>
          </div>
        </div>
      </div>

      {/* Partner strip — full width, h-90, gradient 150px (Figma) */}
      <div className="pt-[30px]">
        <div className="relative border-t border-b border-[#303030] h-[90px] overflow-hidden">
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <LogoCarousel />
          </div>
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-[150px] z-10"
            style={{ background: 'linear-gradient(to right, var(--Base-Black), transparent)' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-[150px] z-10"
            style={{ background: 'linear-gradient(to left, var(--Base-Black), transparent)' }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
