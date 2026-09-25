import { describe, it, expect } from "vitest";
import { cleanTelHref, getBusinessStatusVenezuela } from "../utils";

describe("cleanTelHref", () => {
  it("sanitiza teléfonos móviles venezolanos con formato (+58 414) 277.00.24", () => {
    expect(cleanTelHref("(+58 414) 277.00.24")).toBe("tel:+584142770024");
  });

  it("sanitiza teléfonos locales con código 0 (0212 381.18.23)", () => {
    expect(cleanTelHref("(0212) 381.18.23")).toBe("tel:+582123811823");
  });

  it("toma el primer número cuando hay múltiples separados por slash", () => {
    expect(cleanTelHref("0243-234.33.60 / 234.33.72")).toBe("tel:+582432343360");
  });

  it("maneja números vacíos de forma segura", () => {
    expect(cleanTelHref("")).toBe("tel:");
  });
});

describe("getBusinessStatusVenezuela", () => {
  it("marca Abiertas en horario laboral de semana (miércoles 10:00 am Caracas)", () => {
    // 2026-09-23T14:00:00Z -> 10:00 am en Caracas (UTC-4)
    const testDate = new Date("2026-09-23T14:00:00Z");
    const status = getBusinessStatusVenezuela(testDate);
    expect(status.isOpen).toBe(true);
    expect(status.statusText).toBe("Abiertas");
  });

  it("marca Cerradas un domingo", () => {
    // 2026-09-20T16:00:00Z -> Domingo en Caracas
    const testDate = new Date("2026-09-20T16:00:00Z");
    const status = getBusinessStatusVenezuela(testDate);
    expect(status.isOpen).toBe(false);
    expect(status.statusText).toBe("Cerradas");
  });

  it("marca Cerradas a las 8:00 pm un jueves", () => {
    // 2026-09-24T00:00:00Z (20:00 del día anterior en Caracas)
    const testDate = new Date("2026-09-25T01:00:00Z"); // 21:00 jueves en Caracas
    const status = getBusinessStatusVenezuela(testDate);
    expect(status.isOpen).toBe(false);
    expect(status.statusText).toBe("Cerradas");
  });
});
