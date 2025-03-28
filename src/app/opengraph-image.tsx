import { ImageResponse } from 'next/og'
 
// Tamaño de la imagen
export const size = {
  width: 1200,
  height: 630,
}

// Tipo de contenido
export const contentType = 'image/png'

// Texto alternativo para la imagen
export const alt = 'Lapalapa Mariscos Frescos en San Juan de los Lagos'

// Función para generar la imagen de OpenGraph
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
            fontSize: 72,
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
            fontSize: 36,
            opacity: 0.9,
            marginTop: 12,
          }}
        >
          Restaurante de Mariscos Frescos
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            opacity: 0.8,
            marginTop: 32,
          }}
        >
          San Juan de los Lagos, Jalisco
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}