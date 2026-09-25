/**
 * DIALKA 2.0 — Utilidades generales y helpers del sistema
 */

/**
 * Sanitiza cualquier formato de teléfono venezolano a un enlace tel: seguro
 * compatible con todos los navegadores y discadores móviles (Android, iOS, VoIP).
 * Ejemplo: "(+58 414) 277.00.24" -> "tel:+584142770024"
 * Ejemplo: "0243-234.33.60 / 234.33.72" -> "tel:+582432343360"
 */
export function cleanTelHref(phone: string): string {
  if (!phone) return "tel:";
  // Si tiene múltiples números separados por '/', tomamos el primero
  const firstNumber = phone.split("/")[0].trim();
  
  // Extraer el signo + si existe al inicio y todos los dígitos
  const hasPlus = firstNumber.startsWith("+");
  const digits = firstNumber.replace(/\D/g, "");
  
  if (hasPlus) {
    return `tel:+${digits}`;
  }
  
  // Si empieza con 0 (ej. 0212... o 0243... o 0414...), en formato internacional es +58
  if (digits.startsWith("0")) {
    return `tel:+58${digits.slice(1)}`;
  }
  
  if (digits.startsWith("58")) {
    return `tel:+${digits}`;
  }
  
  return `tel:${digits}`;
}

export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  detailText: string;
}

/**
 * Determina si las sedes físicas de Dialka están abiertas en este momento
 * tomando en consideración el huso horario oficial de Venezuela (America/Caracas, UTC-4).
 * Horario oficial de sedes: Lunes a Viernes, 08:00 a 17:00.
 */
export function getBusinessStatusVenezuela(date: Date = new Date()): BusinessStatus {
  try {
    // Obtener la hora actual en Venezuela (UTC-4)
    const veTimeString = date.toLocaleString("en-US", { timeZone: "America/Caracas" });
    const veDate = new Date(veTimeString);
    
    const day = veDate.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const hour = veDate.getHours();
    
    // Lunes (1) a Viernes (5)
    const isWeekday = day >= 1 && day <= 5;
    // Entre las 8:00 y las 16:59:59 (cierre a las 17:00)
    const isWorkHours = hour >= 8 && hour < 17;
    
    if (isWeekday && isWorkHours) {
      return {
        isOpen: true,
        statusText: "Abiertas",
        detailText: "(08:00–17:00)",
      };
    }
    
    // Si es fin de semana o fuera de horario
    return {
      isOpen: false,
      statusText: "Cerradas",
      detailText: isWeekday && hour < 8 ? "(Abrimos 08:00)" : "(Guardia WhatsApp)",
    };
  } catch {
    // Fallback defensivo si no está disponible la zona horaria en el runtime
    return {
      isOpen: true,
      statusText: "Atención",
      detailText: "(08:00–17:00)",
    };
  }
}
