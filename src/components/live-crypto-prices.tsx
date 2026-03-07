/* Live Crypto Market Prices — Figma 1253:142984: Hot Crypto Coin + table */
import CryptoMiniChart from './crypto-mini-chart'

const COINS = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '/coinlogo/Bitcoin.svg', price: '$118,860.00', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'Ethereum', symbol: 'ETH', icon: '/coinlogo/Ethereum.svg', price: '$4,385.00', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'XRP', symbol: 'XRP', icon: '/coinlogo/XRP.svg', price: '$2.88', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'BNB', symbol: 'BNB', icon: '/coinlogo/BNB.svg', price: '$845.00', change: '-0.67%', changePositive: false, volume: '224.636M' },
  { name: 'Solana', symbol: 'SOL', icon: '/coinlogo/SOL.svg', price: '$186.00', change: '-0.67%', changePositive: false, volume: '224.636M' },
]

function DiamondIcon() {
  return (
    <span
      className="w-3 h-3 rotate-45 shrink-0"
      style={{ background: 'var(--gray-10, #f1f1f1)' }}
      aria-hidden
    />
  )
}

function CoinLogo({ src, name }: { src: string; name: string }) {
  return (
    <img
      src={src}
      alt={name}
      className="rounded-full w-8 h-8 shrink-0 object-cover"
    />
  )
}

const ELLIPSE_GLOW = '/livecrypt/Ellipse%202128.svg'

export default function LiveCryptoPrices() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full pt-10 pb-20"
      style={{ background: 'var(--base-black, #000)' }}
    >

      {/* Ellipse glow — full width, h-120 (Figma 1528:172671) */}
      <div className="w-full h-[120px] overflow-hidden relative mb-10">
        <img
          src={ELLIPSE_GLOW}
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[120px] object-cover object-top"
          aria-hidden
        />
      </div>

      {/* 1440: content 1200px centered */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-0 flex flex-col gap-[40px]">
        {/* Header — diamond + "Hot Crypto Coin" + diamond, then title (Figma 1253:142986) */}
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="flex items-center justify-center gap-4 h-[30px]">
            <DiamondIcon />
            <p
              className="text-[20px] leading-[30px] font-normal whitespace-nowrap"
              style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
            >
              Hot Crypto Coin
            </p>
            <DiamondIcon />
          </div>
          <p
            className="text-[48px] leading-[60px] tracking-[-0.96px] text-center whitespace-nowrap"
            style={{
              fontFamily: 'inherit',
              color: 'var(--gray-10, #f1f1f1)',
            }}
          >
            Live Crypto Market Prices
          </p>
        </div>

        {/* Table container — border #303030, rounded 12px (Figma 1253:142994) */}
        <div
          className="border border-solid rounded-[12px] overflow-hidden w-full"
          style={{ borderColor: 'var(--gray-90, #303030)' }}
        >
          {/* Table header — h-70px, 5 columns, Manrope 18px #939393 */}
          <div
            className="flex items-center w-full border-b border-solid"
            style={{ borderColor: 'var(--gray-90, #303030)', minHeight: 70 }}
          >
            <div className="flex-1 min-w-0 h-[70px] flex items-center px-7">
              <p
                className="text-[18px] leading-[28px] font-normal"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-50, #939393)' }}
              >
                Asset Name
              </p>
            </div>
            <div className="flex-1 min-w-0 h-[70px] flex items-center justify-center px-7">
              <p
                className="text-[18px] leading-[28px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-50, #939393)' }}
              >
                Chart
              </p>
            </div>
            <div className="flex-1 min-w-0 h-[70px] flex items-center justify-center px-7">
              <p
                className="text-[18px] leading-[28px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-50, #939393)' }}
              >
                Price
              </p>
            </div>
            <div className="flex-1 min-w-0 h-[70px] flex items-center justify-center px-7">
              <p
                className="text-[18px] leading-[28px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-50, #939393)' }}
              >
                24h Change
              </p>
            </div>
            <div className="flex-1 min-w-0 h-[70px] flex items-center justify-center px-7">
              <p
                className="text-[18px] leading-[28px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-50, #939393)' }}
              >
                24h Volume
              </p>
            </div>
          </div>

          {/* Body rows — h-100px each, border-b between rows */}
          <div className="flex flex-col">
            {COINS.map((coin) => (
              <div key={coin.symbol}>
                <div
                  className="flex items-center w-full min-h-[100px] border-b border-solid last:border-b-0"
                  style={{ borderColor: 'var(--gray-90, #303030)' }}
                >
                  <div className="flex-1 min-w-0 h-[100px] flex items-center px-7">
                    <div className="flex items-center gap-3">
                      <CoinLogo src={coin.icon} name={coin.name} />
                      <span
                        className="text-[16px] leading-[24px] font-semibold whitespace-nowrap"
                        style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
                      >
                        {coin.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 h-[100px] flex items-center justify-center p-3.5">
                    <CryptoMiniChart up={coin.changePositive} />
                  </div>
                  <div className="flex-1 min-w-0 h-[100px] flex items-center justify-center p-3.5">
                    <span
                      className="text-[16px] leading-[24px] font-semibold whitespace-nowrap text-right"
                      style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
                    >
                      {coin.price}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 h-[100px] flex items-center justify-center p-3.5">
                    <span
                      className="text-[16px] leading-[24px] font-semibold whitespace-nowrap text-right"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        color: coin.changePositive ? 'var(--green-40, #42ec8c)' : 'var(--red-40, #d25535)',
                      }}
                    >
                      {coin.change}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 h-[100px] flex items-center justify-center p-3.5">
                    <span
                      className="text-[16px] leading-[24px] font-semibold whitespace-nowrap text-right"
                      style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
                    >
                      {coin.volume}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
