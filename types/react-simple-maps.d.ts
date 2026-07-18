declare module 'react-simple-maps' {
  import { ReactNode } from 'react'

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      rotation?: [number, number, number]
    }
    width?: number
    height?: number
    className?: string
    style?: React.CSSProperties
    children?: ReactNode
  }

  export interface GeographiesProps {
    geography?: string | object
    children?: (args: { geographies: any[] }) => ReactNode
  }

  export interface GeographyProps {
    geography?: any
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    className?: string
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement, MouseEvent>) => void
  }

  export const ComposableMap: React.FC<ComposableMapProps>
  export const Geographies: React.FC<GeographiesProps>
  export const Geography: React.FC<GeographyProps>
}

