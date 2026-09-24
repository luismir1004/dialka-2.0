import { describe, it, expect } from "vitest";
import { VEHICLE_PRESETS } from "../types";

describe("Simulator Presets & Metrology Constants", () => {
  it("contiene los 6 presets industriales estándar", () => {
    expect(VEHICLE_PRESETS).toHaveLength(6);
  });

  it("inicia con el preset de báscula en cero (0.0 TN)", () => {
    const zeroPreset = VEHICLE_PRESETS[0];
    expect(zeroPreset.label).toBe("Báscula en Cero");
    expect(zeroPreset.tons).toBe(0.0);
  });

  it("incluye el preset de alerta de sobrecarga crítica (>70 TN)", () => {
    const overloadPreset = VEHICLE_PRESETS.find((p) => p.label.includes("Sobrecarga"));
    expect(overloadPreset).toBeDefined();
    expect(overloadPreset!.tons).toBeGreaterThanOrEqual(70.0);
  });

  it("todos los presets tienen descripciones técnicas válidas", () => {
    VEHICLE_PRESETS.forEach((preset) => {
      expect(preset.label.trim().length).toBeGreaterThan(0);
      expect(preset.desc.trim().length).toBeGreaterThan(0);
      expect(preset.tons).toBeGreaterThanOrEqual(0);
    });
  });
});
