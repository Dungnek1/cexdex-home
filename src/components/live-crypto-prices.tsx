/* Live Crypto Market Prices — Figma 1253:175931: header gap 16, title 48/60, table pl-28 */
import CryptoMiniChart from './crypto-mini-chart'
import DiamondIcon from './diamond-icon'

const COINS = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '/coinlogo/Bitcoin.svg', price: '$118,860.00', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'Ethereum', symbol: 'ETH', icon: '/coinlogo/Ethereum.svg', price: '$4,385.00', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'XRP', symbol: 'XRP', icon: '/coinlogo/XRP.svg', price: '$2.88', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'BNB', symbol: 'BNB', icon: '/coinlogo/BNB.svg', price: '$845.00', change: '-0.67%', changePositive: false, volume: '224.636M' },
  { name: 'Solana', symbol: 'SOL', icon: '/coinlogo/SOL.svg', price: '$186.00', change: '-0.67%', changePositive: false, volume: '224.636M' },
]

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
      className="flex flex-col items-center justify-center w-full relative"
      style={{ background: 'var(--base-black, #000)' }}
    >
      {/* Ellipse glow — cạnh trên khối padding là đường cắt: nửa trên hiện, nửa dưới bị clip */}
      <div className="w-full overflow-hidden relative">
        {/* Vùng hiển thị nửa trên ellipse — chiều cao = nửa ellipse (65px) */}
        <div className="h-[65px] overflow-hidden relative">
          <img
            src={ELLIPSE_GLOW}
            alt=""
            className="absolute left-0 right-0 top-0 w-full h-[130px]"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
            aria-hidden
          />
        </div>

        {/* Khối padding — cạnh trên chính là đường cắt ellipse */}
        <div className="w-full px-6 tablet:px-6 lg:px-10 xl:px-[120px] flex flex-col gap-[40px] pt-10 tablet:pt-10 tablet:pb-5 lg:pt-10 lg:pb-5 bg-[var(--base-black,#000)]">
        {/* Header — Figma: gap 16, diamond 12px + Hot Crypto Coin + diamond, title 48/60 */}
        <div className="flex flex-col gap-4 tablet:gap-[16px] items-center justify-center w-full">
          <div className="flex items-center justify-center gap-4 tablet:gap-[16px] h-[30px]">
            <DiamondIcon size={12} />
            <p
              className="text-[20px] leading-[30px] font-normal whitespace-nowrap"
              style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
            >
              Hot Crypto Coin
            </p>
            <DiamondIcon size={12} />
          </div>
          <p
            className="text-[36px] tablet:text-[48px] lg:text-[48px] leading-[44px] tablet:leading-[60px] lg:leading-[60px] tracking-[-0.96px] text-center whitespace-nowrap"
            style={{
              fontFamily: 'inherit',
              color: 'var(--gray-10, #f1f1f1)',
            }}
          >
            Live Crypto Market Prices
          </p>
        </div>

        {/* Mobile card layout — hidden on tablet (744px)+ */}
        <div className="flex flex-col gap-4 tablet:hidden">
          {COINS.map((coin) => (
            <div
              key={coin.symbol}
              className="rounded-[12px] border border-solid p-5 flex flex-col gap-4"
              style={{ borderColor: 'var(--gray-90, #303030)' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CoinLogo src={coin.icon} name={coin.name} />
                  <span
                    className="text-[16px] leading-[24px] font-semibold"
                    style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
                  >
                    {coin.name}
                  </span>
                </div>
                <span
                  className="text-[16px] leading-[24px] font-semibold"
                  style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
                >
                  {coin.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <CryptoMiniChart up={coin.changePositive} />
                <div className="flex gap-6">
                  <span
                    className="text-[14px] font-semibold"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      color: coin.changePositive ? 'var(--green-40, #42ec8c)' : 'var(--red-40, #d25535)',
                    }}
                  >
                    {coin.change}
                  </span>
                  <span
                    className="text-[14px] font-semibold"
                    style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
                  >
                    {coin.volume}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet table — Figma 1253:175931: header h-70, Asset 147px pl-28, Chart 208px, row p-14 */}
        <div
          className="hidden tablet:block border border-solid rounded-[12px] overflow-hidden w-full"
          style={{ borderColor: 'var(--gray-90, #303030)' }}
        >
          {/* Table header — h-70, 16px #939393 */}
          <div
            className="flex items-center w-full border-b border-solid"
            style={{ borderColor: 'var(--gray-90, #303030)', minHeight: 70 }}
          >
            <div className="h-[70px] flex items-center pl-[28px] w-[147px] shrink-0">
              <p
                className="text-[16px] leading-[24px] font-normal"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
              >
                Asset Name
              </p>
            </div>
            <div className="h-[70px] flex items-center justify-center px-[28px] w-[208px] shrink-0">
              <p
                className="text-[16px] leading-[24px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
              >
                Chart
              </p>
            </div>
            <div className="flex-1 min-w-0 h-[70px] flex items-center justify-center px-[28px]">
              <p
                className="text-[16px] leading-[24px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
              >
                Price
              </p>
            </div>
            <div className="flex-1 min-w-0 h-[70px] flex items-center justify-center px-[28px]">
              <p
                className="text-[16px] leading-[24px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
              >
                24h Change
              </p>
            </div>
            <div className="flex-1 min-w-0 h-[70px] flex items-center justify-center px-[28px]">
              <p
                className="text-[16px] leading-[24px] font-normal text-center"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
              >
                24h Volume
              </p>
            </div>
          </div>

          {/* Body rows — h-100, pl-28 asset, p-14 others */}
          <div className="flex flex-col">
            {COINS.map((coin) => (
              <div key={coin.symbol}>
                <div
                  className="flex items-center w-full min-h-[100px] border-b border-solid last:border-b-0"
                  style={{ borderColor: 'var(--gray-90, #303030)' }}
                >
                  <div className="h-[100px] flex items-center pl-[28px] w-[147px] shrink-0">
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
                  <div className="h-[100px] flex items-center justify-center p-[14px] w-[208px] shrink-0">
                    <CryptoMiniChart up={coin.changePositive} />
                  </div>
                  <div className="flex-1 min-w-0 h-[100px] flex items-center justify-center p-[14px]">
                    <span
                      className="text-[16px] leading-[24px] font-semibold whitespace-nowrap text-right"
                      style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--gray-10, #f1f1f1)' }}
                    >
                      {coin.price}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 h-[100px] flex items-center justify-center p-[14px]">
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
                  <div className="flex-1 min-w-0 h-[100px] flex items-center justify-center p-[14px]">
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
      </div>
    </section>
  )
}
