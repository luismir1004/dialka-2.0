# Testing Guide - Dialka 2.0

## Overview
Este documento describe la estrategia de testing recomendada para el proyecto Dialka 2.0.

## Testing Setup (Para implementar cuando sea necesario)

### 1. Instalar dependencias de testing
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom @types/jest
```

### 2. Configurar Jest
Crear `jest.config.js`:
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

### 3. Crear jest.setup.js
```javascript
import '@testing-library/jest-dom'
```

### 4. Añadir scripts en package.json
```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

## Componentes Prioritarios para Testing

### 1. MetricsBar (Test de renderizado)
```typescript
// src/components/__tests__/MetricsBar.test.tsx
import { render, screen } from '@testing-library/react'
import { MetricsBar } from '../MetricsBar'

describe('MetricsBar', () => {
  it('renders all 4 metrics', () => {
    render(<MetricsBar />)
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('5.000')).toBeInTheDocument()
    expect(screen.getByText('307')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })
})
```

### 2. AnimatedCounter (Test de animación)
```typescript
// src/components/__tests__/AnimatedCounter.test.tsx
import { render, screen } from '@testing-library/react'
import { AnimatedCounter } from '../AnimatedCounter'

describe('AnimatedCounter', () => {
  it('renders initial value', () => {
    render(<AnimatedCounter value="25" />)
    expect(screen.getByText('25')).toBeInTheDocument()
  })
})
```

### 3. ToastContext (Test de notificaciones)
```typescript
// src/context/__tests__/ToastContext.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import { ToastProvider, useToast } from '../ToastContext'

describe('ToastContext', () => {
  it('shows toast notification', async () => {
    const TestComponent = () => {
      const { toast } = useToast()
      return (
        <button onClick={() => toast({ title: 'Test', type: 'success' })}>
          Show Toast
        </button>
      )
    }

    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    // Click button and verify toast appears
  })
})
```

## E2E Testing con Playwright (Opcional)

### Instalación
```bash
npm install --save-dev @playwright/test
```

### Ejemplo de test E2E
```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle(/Balanzas y Servicios Dialka/)
})

test('navigation works', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('text=Productos')
  await expect(page).toHaveURL(/\/productos/)
})
```

## Manual Testing Checklist

### Performance
- [ ] Verificar que los componentes pesados cargan con loading states
- [ ] Validar lazy loading de imágenes
- [ ] Comprobar code splitting en DevTools

### Accesibilidad
- [ ] Probar navegación por teclado (Tab)
- [ ] Verificar contraste de colores con axe DevTools
- [ ] Testear screen reader (NVDA/VoiceOver)
- [ ] Validar skip links funcionan

### Responsive Design
- [ ] Testear en móvil (375px)
- [ ] Testear en tablet (768px)
- [ ] Testear en desktop (1920px)

### Cross-Browser
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## CI/CD Integration

### GitHub Actions (Futuro)
```yaml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run lint
      - run: npm run build
```

## Notas Importantes

1. **Prioridad**: Enfocarse en componentes interactivos críticos primero
2. **Coverage**: Apuntar a 80%+ de coverage en componentes clave
3. **Mantenimiento**: Mantener tests actualizados con cambios de código
4. **Performance**: Tests no deben impactar el tiempo de build significativamente
