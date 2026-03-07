/* Reusable section header with double diamond dots + title */

function DoubleDiamonds({ size = 12 }: { size?: number }) {
  return (
    <div className="flex gap-2 items-center">
      <span
        className="inline-block rotate-45"
        style={{ width: size, height: size, background: '#f1f1f1' }}
        aria-hidden
      />
      <span
        className="inline-block rotate-45"
        style={{ width: size, height: size, background: '#f1f1f1' }}
        aria-hidden
      />
    </div>
  )
}

export default function SectionHeader({
  title,
  diamondSize = 12,
}: {
  title: string
  diamondSize?: number
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <DoubleDiamonds size={diamondSize} />
      <h2 className="text-[24px] tablet:text-[30px] leading-[32px] tablet:leading-[38px] text-[#f1f1f1] font-normal">
        {title}
      </h2>
    </div>
  )
}

export { DoubleDiamonds }
