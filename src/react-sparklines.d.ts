declare module 'react-sparklines' {
  import { Component, CSSProperties } from 'react'

  interface SparklinesProps {
    data: number[]
    width?: number
    height?: number
    margin?: number
    style?: CSSProperties
    children?: React.ReactNode
  }

  interface SparklinesLineProps {
    color?: string
    style?: CSSProperties
  }

  export class Sparklines extends Component<SparklinesProps> {}
  export class SparklinesLine extends Component<SparklinesLineProps> {}
}
