/**
 * Utilidades de validación y sanitización para formularios de contacto de Dialka 2.0
 */

/**
 * Sanitiza una cadena de texto eliminando etiquetas HTML y caracteres potencialmente peligrosos.
 */
export function sanitizeInput(input: string): string {
  if (!input) return "";
  return input
    .replace(/<[^>]*>/g, "") // Remueve etiquetas HTML completas
    .replace(/[<>]/g, "") // Remueve caracteres angulares sueltos
    .replace(/javascript:/gi, "") // Previene pseudo-protocolo javascript
    .trim();
}

/**
 * Valida un correo electrónico según estándar RFC 5322 simplificado.
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  const sanitized = sanitizeInput(email);
  if (!sanitized) {
    return { valid: false, error: "El correo electrónico es requerido." };
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(sanitized)) {
    return { valid: false, error: "Ingrese un correo electrónico válido (ej: contacto@empresa.com)." };
  }
  return { valid: true };
}

/**
 * Valida formatos de teléfono comunes en Venezuela:
 * Móviles: 0414, 0424, 0412, 0416, 0426
 * Fijos: 0212 (Caracas), 0243 (Maracay), 0241 (Valencia), etc.
 * Internacional: +58 414..., +58 424..., etc.
 */
export function validateVenezuelanPhone(phone: string): { valid: boolean; error?: string } {
  const sanitized = sanitizeInput(phone);
  if (!sanitized) {
    return { valid: false, error: "El número de teléfono es requerido." };
  }

  // Eliminar espacios, guiones y puntos para validación numérica
  const cleanDigits = sanitized.replace(/[\s\-.()]/g, "");

  // Patrón internacional +58... o nacional 04... / 02...
  const phoneRegex = /^(\+?58)?[0]?(414|424|412|416|426|212|243|241|251|261|276|281|286|295)\d{7}$/;

  if (!phoneRegex.test(cleanDigits)) {
    return {
      valid: false,
      error: "Ingrese un teléfono válido (ej: 0414-1234567 o +58 412 9876543).",
    };
  }

  return { valid: true };
}
