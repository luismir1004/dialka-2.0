import { describe, it, expect } from "vitest";
import {
  sanitizeInput,
  validateEmail,
  validateVenezuelanPhone,
} from "../validation";

describe("Validación y Sanitización de Contacto", () => {
  describe("sanitizeInput", () => {
    it("elimina etiquetas HTML y previene inyección de scripts", () => {
      const malicious = '<script>alert("xss")</script>Hola <b>Mundo</b>';
      const clean = sanitizeInput(malicious);
      expect(clean).not.toContain("<script>");
      expect(clean).not.toContain("<b>");
      expect(clean).toBe('alert("xss")Hola Mundo');
    });

    it("previene pseudo-protocolos javascript:", () => {
      const input = "javascript:void(0)";
      expect(sanitizeInput(input)).toBe("void(0)");
    });

    it("recorta espacios en blanco en los extremos", () => {
      expect(sanitizeInput("   Carlos Perez   ")).toBe("Carlos Perez");
    });
  });

  describe("validateEmail", () => {
    it("acepta correos electrónicos válidos", () => {
      expect(validateEmail("contacto@dialka.com.ve").valid).toBe(true);
      expect(validateEmail("empresa_123@gmail.com").valid).toBe(true);
    });

    it("rechaza correos mal formados", () => {
      expect(validateEmail("invalido").valid).toBe(false);
      expect(validateEmail("sin_arroba.com").valid).toBe(false);
      expect(validateEmail("").valid).toBe(false);
    });
  });

  describe("validateVenezuelanPhone", () => {
    it("acepta números móviles venezolanos con diferentes operadores", () => {
      expect(validateVenezuelanPhone("0414-123.45.67").valid).toBe(true);
      expect(validateVenezuelanPhone("0424 7654321").valid).toBe(true);
      expect(validateVenezuelanPhone("04129876543").valid).toBe(true);
      expect(validateVenezuelanPhone("0416-5551234").valid).toBe(true);
      expect(validateVenezuelanPhone("0426 1234567").valid).toBe(true);
    });

    it("acepta números con código internacional de Venezuela +58", () => {
      expect(validateVenezuelanPhone("+58 414 1234567").valid).toBe(true);
      expect(validateVenezuelanPhone("+584121234567").valid).toBe(true);
    });

    it("acepta números fijos regionales principales (Caracas 0212, Maracay 0243)", () => {
      expect(validateVenezuelanPhone("0212-2770024").valid).toBe(true);
      expect(validateVenezuelanPhone("0243-2343360").valid).toBe(true);
    });

    it("rechaza teléfonos inválidos o incompletos", () => {
      expect(validateVenezuelanPhone("12345").valid).toBe(false);
      expect(validateVenezuelanPhone("0999-1234567").valid).toBe(false);
      expect(validateVenezuelanPhone("").valid).toBe(false);
    });
  });
});
