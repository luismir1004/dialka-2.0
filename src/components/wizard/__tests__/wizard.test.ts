import { describe, it, expect } from "vitest";
import { clampQuantity, MIN_EQUIPMENT_QTY, MAX_EQUIPMENT_QTY } from "../types";
import { RUBROS_DATA } from "../wizardData";

describe("IndustryQuoteWizard Types & Quantity Helper", () => {
  it("clamps quantity correctly within min and max boundaries", () => {
    expect(clampQuantity(0)).toBe(MIN_EQUIPMENT_QTY);
    expect(clampQuantity(-10)).toBe(MIN_EQUIPMENT_QTY);
    expect(clampQuantity(5)).toBe(5);
    expect(clampQuantity(MAX_EQUIPMENT_QTY)).toBe(MAX_EQUIPMENT_QTY);
    expect(clampQuantity(MAX_EQUIPMENT_QTY + 100)).toBe(MAX_EQUIPMENT_QTY);
  });

  it("handles non-finite or NaN quantity input gracefully", () => {
    expect(clampQuantity(NaN)).toBe(MIN_EQUIPMENT_QTY);
    expect(clampQuantity(Infinity)).toBe(MIN_EQUIPMENT_QTY);
  });

  it("rounds decimal numbers to integer quantities", () => {
    expect(clampQuantity(3.7)).toBe(4);
    expect(clampQuantity(3.2)).toBe(3);
  });
});

describe("RUBROS_DATA Catalog Data Integrity", () => {
  const expectedSectorIds = [
    "carniceria",
    "supermercado",
    "agroindustria",
    "gastronomia",
    "laboratorio",
    "logistica",
  ];

  it("includes all 6 industrial business sectors", () => {
    const sectorIds = RUBROS_DATA.map((s) => s.id);
    expect(sectorIds).toEqual(expectedSectorIds);
  });

  it("ensures every sector has valid equipment items with required metadata", () => {
    for (const sector of RUBROS_DATA) {
      expect(sector.title).toBeTruthy();
      expect(sector.emoji).toBeTruthy();
      expect(sector.equipment.length).toBeGreaterThan(0);

      for (const eq of sector.equipment) {
        expect(eq.id).toBeTruthy();
        expect(eq.name).toBeTruthy();
        expect(eq.model).toBeTruthy();
        expect(eq.specs).toBeTruthy();
        expect(eq.badge).toBeTruthy();
        expect(eq.image).toBeTruthy();
      }
    }
  });
});
