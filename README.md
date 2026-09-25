# Balanzas y Servicios Dialka C.A. — Dialka 2.0

[![Production](https://img.shields.io/badge/Status-En_Producci%C3%B3n-success?style=for-the-badge&logo=vercel)](https://dialka-2-0.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.5_(Turbopack)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-20%2F20_Passing-emerald?style=for-the-badge&logo=vitest)](https://vitest.dev/)

> **Plataforma web integral de metrología industrial, automatización comercial y soporte técnico especializado en Venezuela.**  
> URL en Producción: **[https://dialka-2-0.vercel.app](https://dialka-2-0.vercel.app)**

---

## 🌟 Características Principales

### 1. Catálogo Oficial Homologado SENCAMER (`src/components/SencamerCatalog.tsx`)
* **Filtros en tiempo real**: Búsqueda instantánea por capacidad máxima, división ($e=d$) o ámbito de uso (comercial, industrial, laboratorios, agropecuario).
* **Diseño híbrido responsive**:
  * **Móvil (`sm:hidden`)**: Tarjetas táctiles verticales con especificaciones claras y botón de cotización directa por WhatsApp.
  * **Escritorio (`hidden sm:block`)**: Tabla comparativa corporativa con sellos de acreditación oficial.

### 2. Registro Audiovisual y Obras en Campo (`src/components/ProjectsVideoGallery.tsx` y `ProjectsGallery.tsx`)
* **Videos reales de instalaciones**: Registros audiovisuales de montajes de básculas camioneras, obras civiles y calibraciones en campo.
* **Carrusel táctil con `snap-x`**: Desplazamiento horizontal fluido en smartphones con aspect ratio adaptativo (`4/5` en móvil, `9/14` en desktop).
* **Lightbox de alta resolución táctil**: Modal con soporte de gestos touch (swipe con el dedo), navegación por teclado y fichas técnicas completas.

### 3. Cotizador Inteligente por Sector Industrial (`src/components/wizard/`)
* **6 sectores productivos venezolanos**:
  1. Carnicerías, Charcuterías & Frigoríficos
  2. Supermercados, Bodegones & Minimarkets
  3. Agroindustria, Silos & Ganadería
  4. Restaurantes, Panaderías & Gastronomía
  5. Laboratorios, Farmacias & Química
  6. Industria Pesada, Almacenes & Logística
* Cálculo de paquetes recomendados con validación de cantidades (1 a 50 unidades).
* **Sticky Bottom Bar móvil**: Barra flotante inferior de cotización en smartphones para un embudo de conversión sin fricción hacia WhatsApp.

### 4. Catálogo Inteligente con Búsqueda por Sinónimos (`src/components/ProductsCatalog.tsx`)
* **Diccionario de sinónimos industriales venezolanos**: Búsquedas automáticas para términos comunes (*"romana"*, *"brete"*, *"gramera"*, *"fosa"*, *"ganado"*, *"colgante"*, etc.).
* **Botonera táctica móvil**: Tarjetas condensadas en móvil con botón principal expandido de WhatsApp y acceso directo a ficha técnica sin saturar la pantalla.
* **Selector de ordenamiento**: Por destacados, nombre alfabético (A-Z / Z-A) y categoría.

### 5. Formulario de Contacto Seguro & Validación Antifraude (`src/components/contact/`)
* **Sanitización anti-XSS**: Protección en entradas de texto para prevenir inyecciones maliciosas.
* **Validación estricta de telefonía venezolana**: Formatos móviles y fijos (`0414`, `0424`, `0412`, `0416`, `0426`, `0212`, `0243`, etc., con o sin prefijo internacional `+58`).
* **WhatsApp Live Preview**: Previsualización en tiempo real del mensaje que recibirá el asesor técnico.

---

## 🛠️ Stack Tecnológico

| Capa | Herramienta | Versión | Propósito |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router, Turbopack) | `16.3.5` | Arquitectura moderna con Server & Client Components |
| **Librería UI** | React / React DOM | `19.2.8` | Interfaz reactiva con soporte para Server Actions |
| **Estilos** | Tailwind CSS | `v4` | Motor de estilos de alto rendimiento |
| **Iconografía** | Lucide React | `^1.16.0` | Iconos vectoriales limpios y accesibles |
| **Testing** | Vitest + Testing Library + jsdom | `^5.0.1` | Pruebas unitarias de componentes, lógica y formularios |
| **Tipado** | TypeScript (Strict Mode) | `^5` | Seguridad de tipos en todo el código |
| **Despliegue** | Vercel Edge Network | Global | CI/CD automático, CDN global y SSL automático |

---

## 📁 Estructura del Proyecto

```text
dialka-2.0/
├── src/
│   ├── app/                         # App Router de Next.js 16
│   │   ├── layout.tsx               # Layout raíz con SEO, metadatos PWA y JSON-LD
│   │   ├── page.tsx                 # Página principal (Home comercial optimizado)
│   │   ├── productos/               # Catálogo completo de balanzas y equipos
│   │   ├── servicios/               # Calibración, mantenimiento y pesaje continuo
│   │   ├── sencamer/                # Catálogo interactivo de modelos homologados
│   │   ├── software/                # Software de pesaje vehicular WeighMaster
│   │   ├── alquiler/                # Alquiler de básculas para zafra e inventarios
│   │   ├── proyectos/               # Galería de obras y videos de campo reales
│   │   └── contacto/                # Formulario dinámico y sedes en Venezuela
│   ├── components/                  # Componentes modulares
│   │   ├── wizard/                  # Cotizador interactivo por industria con sticky bar
│   │   ├── contact/                 # Validación de formularios y WhatsApp preview
│   │   ├── ProductsCatalog.tsx      # Vitrina de productos con sinónimos y ordenamiento
│   │   ├── SencamerCatalog.tsx      # Catálogo SENCAMER con vista híbrida móvil/desktop
│   │   ├── ProjectsVideoGallery.tsx # Galería de videos con carrusel táctil snap-x
│   │   ├── ImageLightbox.tsx        # Visor modal con soporte de gestos táctiles (swipe)
│   │   ├── FloatingWhatsApp.tsx     # Botón flotante proactivo con bloqueo en modales
│   │   └── Header.tsx / Footer.tsx  # Navegación y pie de página institucional
│   ├── context/                     # Contextos globales (ToastContext)
│   └── lib/                         # Configuración (teléfonos, sedes), datos y analytics
├── public/                          # Activos estáticos, fotografías de obras y videos
├── vitest.config.mts                # Configuración de Vitest para React 19
├── vitest.setup.ts                  # Entorno de pruebas y mocks (IntersectionObserver)
└── package.json
```

---

## 🚀 Guía de Instalación y Desarrollo

### Requisitos previos
* **Node.js** v20+ o v22+
* **npm** v10+

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone https://github.com/luismir1004/dialka-2.0.git
cd dialka-2.0
npm install
```

### 2. Iniciar el servidor local de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 3. Ejecutar las pruebas automatizadas (Vitest)
```bash
# Ejecutar todas las pruebas una vez (20/20)
npm test

# Modo interactivo con watch
npx vitest
```

### 4. Compilación para producción (Build)
```bash
npm run build
```
Genera las 14 rutas estáticas prerenderizadas en `.next` mediante Turbopack con 0 errores de compilación.

---

## ⚖️ Metrología Legal y Sedes en Venezuela

**Balanzas y Servicios Dialka, C.A.** opera conforme al marco normativo metrológico de la República Bolivariana de Venezuela:
* **Acreditación SENCAMER**: Cumplimiento de la norma **COVENIN 2548** para instrumentos de pesar de funcionamiento no automático.
* **Trazabilidad Metrológica**: Patrones de masa certificados con trazabilidad internacional clase F1 y M1.
* **Presencia Física**:
  * **Sede Central Caracas**: Av. Ppal de Boleíta Norte, Edif. Centro Industrial. Central: `(0212) 238-2322`.
  * **Sede Centro Maracay**: Zona Industrial San Vicente, Calle G. Atención técnica: `(0414) 250-7170`.
  * **Atención y despacho**: Cobertura operativa a nivel nacional en las 24 entidades federales.
