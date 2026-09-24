# Balanzas y Servicios Dialka C.A. — Dialka 2.0

> Plataforma web integral de metrología industrial, automatización comercial y soporte técnico especializado en Venezuela. Desarrollada con **Next.js 16**, **React 19**, **Tailwind CSS v4** y **Vitest**.

---

## 🌟 Características Principales

### 1. Simulador Metrológico Interactivo (`src/components/simulator/`)
* **Dial analógico en tiempo real** con aguja dinámica, divisiones de escala y amortiguación de lectura.
* **Display digital de alta luminosidad** estilo indicador industrial LED con tara, cero y sobrecarga metrológica.
* **Visualizador de báscula camionera** con detección de carga distribuida en fosa/sobresuelo y representación de vehículos industriales (Gandola Chuto + Batea, Camión 350, Volqueta, etc.).
* **Controles por presets de vehículos** y perturbación aleatoria de pesaje calibrado.

### 2. Configurador de Presupuestos por Sector (`src/components/wizard/`)
* **6 sectores industriales venezolanos**:
  1. Carnicerías, Charcuterías & Frigoríficos
  2. Supermercados, Bodegones & Minimarkets
  3. Agroindustria, Silos & Ganadería
  4. Restaurantes, Panaderías & Gastronomía
  5. Laboratorios, Farmacias & Química
  6. Industria Pesada, Almacenes & Logística
* Selección interactiva de paquetes de equipamiento con validación de cantidades (1 a 50 unidades).
* Generador de mensajes con cotización estructurada directa a **WhatsApp** al cambio oficial BCV.

### 3. Catálogo Inteligente con Búsqueda por Sinónimos (`src/components/ProductsCatalog.tsx`)
* **Diccionario de sinónimos industriales venezolanos**: Búsquedas automáticas para términos comunes (*"romana"*, *"brete"*, *"gramera"*, *"fosa"*, *"ganado"*, *"colgante"*, etc.).
* **Selector de ordenamiento**: Por destacados, nombre ascendente (A-Z), descendente (Z-A) y categoría.
* **Chips de sugerencia interactivos** cuando no se encuentran resultados exactos.

### 4. Formulario de Contacto Seguro (`src/components/contact/`)
* **Sanitización anti-XSS** en entradas de texto para prevenir inyecciones maliciosas.
* **Validación estricta de telefonía venezolana**: Acepta formatos nacionales móviles y fijos (`0414`, `0424`, `0412`, `0416`, `0426`, `0212`, etc., con o sin prefijo internacional `+58`).
* **WhatsApp Live Preview**: Previsualización instantánea del mensaje que recibirá el asesor técnico.

### 5. Accesibilidad & Calidad Visual
* Relación de contraste de color optimizada para cumplimiento **WCAG AAA (> 7:1)** en elementos informativos.
* Arquitectura híbrida **Server Components + Client Components** para tiempos de carga ultrarrápidos y mínimo JavaScript en el cliente.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología | Versión |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router, Turbopack) | `16.3.5` |
| **Biblioteca UI** | React / React DOM | `19.2.8` |
| **Estilos** | Tailwind CSS | `v4` |
| **Iconografía** | Lucide React | `^1.16.0` |
| **Testing** | Vitest + Testing Library + jsdom | `^5.0.1` |
| **Tipado** | TypeScript (Strict Mode) | `^5` |
| **Linter** | ESLint + Flat Config | `^9` |

---

## 📁 Estructura del Proyecto

```text
dialka-2.0/
├── src/
│   ├── app/                         # App Router de Next.js 16
│   │   ├── layout.tsx               # Layout raíz con SEO, JSON-LD y fuentes
│   │   ├── page.tsx                 # Página principal (Home)
│   │   ├── productos/               # Catálogo de balanzas y equipos
│   │   ├── servicios/               # Calibración, mantenimiento y pesaje
│   │   ├── sencamer/                # Información regulatoria y acreditación
│   │   ├── software/                # Software de pesaje vehicular WeighMaster
│   │   ├── alquiler/                # Alquiler de básculas para zafra e inventarios
│   │   ├── proyectos/               # Obras y montajes industriales realizados
│   │   └── contacto/                # Formulario dinámico y sedes en Venezuela
│   ├── components/                  # Componentes modulares
│   │   ├── simulator/               # Simulador de pesaje metrológico
│   │   ├── wizard/                  # Cotizador por sectores comerciales
│   │   ├── contact/                 # Formulario, validación anti-XSS y preview
│   │   ├── ProductsCatalog.tsx      # Catálogo con sinónimos y ordenamiento
│   │   ├── Footer.tsx               # Server Component del pie de página
│   │   ├── FooterSedes.tsx          # Selector de sedes interactivo
│   │   └── ...                      # Modales, contadores animados, etc.
│   ├── context/                     # Contextos globales (ToastContext)
│   └── lib/                         # Datos del negocio, tipos y analytics
├── public/                          # Activos estáticos, imágenes de productos y logos
├── vitest.config.mts                # Configuración de Vitest para React 19
├── vitest.setup.ts                  # Setup de entorno y mocks (IntersectionObserver)
└── package.json
```

---

## 🚀 Guía de Desarrollo

### Requisitos previos
* **Node.js** v20+ o v22+
* **npm** v10+

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Iniciar el servidor local de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 3. Ejecutar la suite de pruebas automatizadas (Vitest)
```bash
# Ejecutar todas las pruebas una vez
npm test

# Modo interactivo con watch
npx vitest
```

### 4. Análisis estático y linter
```bash
npm run lint
```

### 5. Compilación para producción (Build)
```bash
npm run build
```
Genera las rutas estáticas prerenderizadas en `.next` mediante Turbopack.

---

## ⚖️ Metrología Legal y Soporte en Venezuela

Dialka ofrece equipos y servicios conformes con las regulaciones de la República Bolivariana de Venezuela:
* **SENCAMER**: Homologación y control metrológico de instrumentos de pesar para uso en transacciones comerciales.
* **Trazabilidad**: Calibraciones referenciadas con masas patrón clase F1 y M1.
* **Cobertura nacional**: Sedes y asistencia técnica en Caracas, Valencia y Barquisimeto.
