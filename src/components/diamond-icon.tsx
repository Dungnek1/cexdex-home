export default function DiamondIcon({ size = 12, color = 'var(--gray-10, #f1f1f1)' }: { size?: number; color?: string }) {
  return (
    <span
      className="shrink-0 rotate-45 inline-block"
      style={{ width: size, height: size, background: color }}
      aria-hidden
    />
  )
}
