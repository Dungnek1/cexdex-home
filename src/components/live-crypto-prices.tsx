/* Live Crypto Market Prices — Figma 1253:157310 mobile only; 1253:175931 tablet+ */
import CryptoMiniChart from './crypto-mini-chart'
import DiamondIcon from './diamond-icon'

const COINS = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '/coinlogo/Bitcoin.svg', price: '$118,860.00', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'Ethereum', symbol: 'ETH', icon: '/coinlogo/Ethereum.svg', price: '$4,385.00', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'XRP', symbol: 'XRP', icon: '/coinlogo/XRP.svg', price: '$2.88', change: '+2.67%', changePositive: true, volume: '224.636M' },
  { name: 'BNB', symbol: 'BNB', icon: '/coinlogo/BNB.svg', price: '$845.00', change: '-0.67%', changePositive: false, volume: '224.636M' },
  { name: 'Solana', symbol: 'SOL', icon: '/coinlogo/SOL.svg', price: '$186.00', change: '-0.67%', changePositive: false, volume: '224.636M' },
]

const TABLE_HEADERS = ['Asset Name', 'Chart', 'Price', '24h Change', '24h Volume']

const ELLIPSE_GLOW = '/livecrypt/Ellipse%202128.svg'

/* Table header cell with consistent styling */
function HeaderCell({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`h-[70px] flex items-center px-[28px] ${className}`}>
      <p className="text-[16px] leading-[24px] font-normal text-center font-manrope text-[var(--gray-50,#939393)]">
        {label}
      </p>
    </div>
  )
}

function CoinRow({ coin }: { coin: typeof COINS[number] }) {
  const changeColor = coin.changePositive ? 'var(--green-40, #42ec8c)' : 'var(--red-40, #d25535)'
  const cellCls = 'flex-1 min-w-0 h-[100px] flex items-center justify-center p-[14px]'
  const valueCls = 'text-[16px] leading-[24px] font-semibold whitespace-nowrap text-right font-manrope'

  return (
    <div
      className="flex items-center w-full min-h-[100px] border-b border-solid last:border-b-0"
      style={{ borderColor: 'var(--gray-90, #303030)' }}
    >
      <div className="h-[100px] flex items-center pl-[28px] w-[147px] shrink-0">
        <div className="flex items-center gap-3">
          <img src={coin.icon} alt={coin.name} className="rounded-full w-8 h-8 shrink-0 object-cover" />
          <span className="text-[16px] leading-[24px] font-semibold whitespace-nowrap font-manrope text-[var(--gray-10,#f1f1f1)]">
            {coin.name}
          </span>
        </div>
      </div>
      <div className="h-[100px] flex items-center justify-center p-[14px] w-[208px] shrink-0">
        <CryptoMiniChart up={coin.changePositive} />
      </div>
      <div className={cellCls}>
        <span className={`${valueCls} text-[var(--gray-10,#f1f1f1)]`}>{coin.price}</span>
      </div>
      <div className={cellCls}>
        <span className={valueCls} style={{ color: changeColor }}>{coin.change}</span>
      </div>
      <div className={cellCls}>
        <span className={`${valueCls} text-[var(--gray-10,#f1f1f1)]`}>{coin.volume}</span>
      </div>
    </div>
  )
}

export default function LiveCryptoPrices() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full relative"
      style={{ background: 'var(--base-black, #000)' }}
    >
      <div className="w-full overflow-hidden relative">
        <div className="h-[130px] tablet:h-[65px] overflow-hidden relative">
          <img
            src={ELLIPSE_GLOW}
            alt=""
            className="absolute left-0 right-0 top-0 w-full h-[130px] object-cover object-top"
            aria-hidden
          />
        </div>

        <div className="flex flex-col gap-[30px] tablet:gap-[40px] w-full">
          <div className="relative z-10 -mt-[65px] tablet:mt-0 w-full section-px tablet:pt-10">
            <div className="flex flex-col gap-[10px] tablet:gap-[16px] items-center justify-center w-full pt-[30px] pb-5 tablet:pt-0 tablet:pb-0 rounded-none border-0 bg-[var(--base-black,#000)] tablet:bg-transparent">
              <div className="flex items-center justify-center gap-2 tablet:gap-[16px]">
                <span className="tablet:hidden"><DiamondIcon size={8} /></span>
                <span className="hidden tablet:inline-block"><DiamondIcon size={12} /></span>
                <p className="text-[14px] tablet:text-[20px] leading-[20px] tablet:leading-[30px] font-normal whitespace-nowrap font-manrope text-[var(--gray-10,#f1f1f1)]">
                  Hot Crypto Coin
                </p>
                <span className="tablet:hidden"><DiamondIcon size={8} /></span>
                <span className="hidden tablet:inline-block"><DiamondIcon size={12} /></span>
              </div>
              <p className="text-[24px] tablet:text-[48px] leading-[32px] tablet:leading-[60px] tracking-[-0.96px] text-center whitespace-nowrap text-[var(--gray-10,#f1f1f1)]">
                Live Crypto Market Prices
              </p>
            </div>
          </div>

          <div className="w-full section-px pb-[20px] tablet:pb-5 lg:pb-5">
            <div className="w-full overflow-x-auto overflow-y-hidden scroll-smooth tablet:overflow-visible scrollbar-hidden">
              <div
                className="border border-solid rounded-[12px] overflow-hidden min-w-[880px] tablet:min-w-0 w-full"
                style={{ borderColor: 'var(--gray-90, #303030)' }}
              >
                <div
                  className="flex items-center w-full border-b border-solid"
                  style={{ borderColor: 'var(--gray-90, #303030)', minHeight: 70 }}
                >
                  <HeaderCell label={TABLE_HEADERS[0]} className="pl-[28px] w-[147px] shrink-0" />
                  <HeaderCell label={TABLE_HEADERS[1]} className="justify-center w-[208px] shrink-0" />
                  <HeaderCell label={TABLE_HEADERS[2]} className="flex-1 min-w-0 justify-center" />
                  <HeaderCell label={TABLE_HEADERS[3]} className="flex-1 min-w-0 justify-center" />
                  <HeaderCell label={TABLE_HEADERS[4]} className="flex-1 min-w-0 justify-center" />
                </div>

                <div className="flex flex-col">
                  {COINS.map((coin) => (
                    <CoinRow key={coin.symbol} coin={coin} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
