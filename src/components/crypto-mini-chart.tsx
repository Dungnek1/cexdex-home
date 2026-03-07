import { useMemo } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const CHART_HEIGHT = 50
const CHART_WIDTH = 180

function generateSparklineData(up: boolean, points = 80): number[] {
  const data: number[] = []
  let value = 90 + Math.random() * 20
  for (let i = 0; i <= points; i++) {
    const move = (Math.random() - 0.5) * 16
    value = up
      ? value + move * 0.6 + (Math.random() - 0.3) * 4
      : value - move * 0.6 - (Math.random() - 0.3) * 4
    data.push(Math.max(40, Math.min(160, value)))
  }
  return data
}

export default function CryptoMiniChart({ up }: { up: boolean }) {
  const data = useMemo(() => generateSparklineData(up), [up])
  const color = up ? '#42ec8c' : '#d25535'

  return (
    <div
      className="shrink-0 overflow-hidden rounded"
      style={{ width: CHART_WIDTH, height: CHART_HEIGHT }}
      aria-hidden
    >
      <Sparklines
        data={data}
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
        margin={4}
        style={{ display: 'block' }}
      >
        <SparklinesLine
          color={color}
          style={{
            fill: 'none',
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        />
      </Sparklines>
    </div>
  )
}
