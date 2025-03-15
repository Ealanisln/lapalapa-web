// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const alt = 'Lapalapa - Los mejores mariscos frescos...'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{/* Estilos */}}>
        <div>Lapalapa</div>
        <div>Mariscos Frescos</div>
      </div>
    ),
    { ...size }
  )
}