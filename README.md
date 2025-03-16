# La Palapa - Restaurante de Mariscos

![Logo La Palapa](/public/images/logo.png)

## Descripción

Sitio web oficial del restaurante de mariscos La Palapa. Esta aplicación web permite a los clientes conocer nuestras especialidades, menú completo, información de contacto y hacer reservaciones para disfrutar de la mejor experiencia gastronómica.

## Tecnologías

- [Next.js 15.1.6](https://nextjs.org/) con [Turbopack](https://turbo.build/pack)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3.4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) - Iconos
- [shadcn/ui](https://ui.shadcn.com/) - Componentes reutilizables
- [@vercel/og](https://vercel.com/docs/functions/og-image-generation) - Generación de imágenes Open Graph
- Despliegue optimizado con Cloudflare Pages

## Estructura del Proyecto

```
├── public/               # Archivos estáticos y recursos
│   ├── images/           # Imágenes y recursos visuales
│   │   ├── hero/         # Imágenes para la sección principal
│   │   └── logo.png      # Logo del restaurante
├── src/
│   ├── app/              # Rutas de la aplicación (Next.js App Router)
│   │   ├── contacto/     # Página de contacto
│   │   ├── especialidades/ # Páginas de especialidades
│   │   │   ├── bebidas/  # Sección de bebidas
│   │   │   ├── calientes/ # Platos calientes
│   │   │   └── mariscos/ # Especialidades de mariscos
│   │   ├── menu/         # Página de menú completo
│   │   ├── page.tsx      # Página principal (Home)
│   │   └── ...           # Configuración de metadatos y OG
│   └── components/       # Componentes reutilizables
│       ├── Contacto/     # Formulario de contacto
│       ├── Especialidades/ # Sección de especialidades
│       ├── Eventos/      # Información de eventos
│       ├── Footer/       # Pie de página
│       ├── Header/       # Encabezado y navegación
│       ├── Hero/         # Sección principal
│       ├── Logo/         # Componente del logo
│       ├── MenuCompleto/ # Visualización del menú
│       ├── Reservar/     # Sistema de reservaciones
│       └── SobreNosotros/ # Información sobre el restaurante
```

## Características Principales

- **Diseño Responsivo**: Experiencia óptima en dispositivos móviles, tablets y escritorio
- **Menú Interactivo**: Exploración de especialidades organizadas por categorías
- **Sistema de Reservas**: Formulario para hacer reservaciones en el restaurante
- **Optimización SEO**: Configuración de metadatos y Open Graph para mejor visibilidad en búsquedas y redes sociales
- **Contacto Directo**: Formulario de contacto para consultas y feedback

## Páginas Principales

- **Inicio**: Presentación del restaurante con sección Hero
- **Menú**: Catálogo completo de platillos y bebidas
- **Especialidades**: Secciones dedicadas a nuestras especialidades
  - Mariscos
  - Platos Calientes
  - Bebidas
- **Contacto**: Información de ubicación, teléfono y formulario de contacto

## Instalación y Desarrollo

### Requisitos Previos

- Node.js 18.17 o superior
- pnpm (recomendado) o npm

### Pasos de Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/lapalapa-web.git
   cd lapalapa-web
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar servidor de desarrollo con Turbopack:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

### Comandos Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Turbopack
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia la aplicación en modo producción
- `npm run lint`: Ejecuta el linter para verificar la calidad del código
- `npm run deploy`: Construye y despliega la aplicación en Cloudflare Pages

## Despliegue

Este proyecto está configurado para ser desplegado en Cloudflare Pages, aunque también es compatible con Vercel.

### Despliegue en Cloudflare Pages

1. Asegúrate de tener configurada tu cuenta de Cloudflare y las credenciales de Wrangler
2. Ejecuta el comando de despliegue:
   ```bash
   npm run deploy
   ```
3. Tu sitio estará disponible en la URL proporcionada por Cloudflare Pages

### Despliegue alternativo en Vercel

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente la configuración de Next.js y Turbopack
3. ¡Listo! Tu sitio estará disponible en la URL proporcionada por Vercel

## Personalización

### Tailwind CSS

La configuración de Tailwind se encuentra en `tailwind.config.ts`. Puedes personalizar:

- Colores del tema
- Fuentes
- Espaciados
- Breakpoints para diseño responsivo

### Componentes shadcn/ui

Los componentes de shadcn/ui pueden ser personalizados según la identidad visual del restaurante.

## Contribución

1. Hacer fork del repositorio
2. Crear una rama para tu feature: `git checkout -b feature/nueva-caracteristica`
3. Commit de tus cambios: `git commit -m 'Añadir nueva característica'`
4. Push a la rama: `git push origin feature/nueva-caracteristica`
5. Abrir un Pull Request

## Licencia

[MIT](LICENSE)

---

Desarrollado con ❤️ para La Palapa Restaurante de Mariscos