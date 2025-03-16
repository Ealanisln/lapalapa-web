import { ImageResponse } from 'next/og'
 
// Tamaño de la imagen (Twitter recomienda 1:1 o 2:1)
export const size = {
  width: 1200,
  height: 600,
}

// Tipo de contenido
export const contentType = 'image/png'

// Texto alternativo para la imagen
export const alt = 'Lapalapa Mariscos Frescos en San Juan de los Lagos'

// Función para generar la imagen de Twitter
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#1E293B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: 24,
          }}
        >
          LAPALAPA
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 32,
            opacity: 0.9,
            marginTop: 12,
          }}
        >
          Mariscos Frescos • Cocina del Mar
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}