export interface RubroEquipment {
  id: string;
  name: string;
  model: string;
  specs: string;
  badge: string;
  image: string;
  defaultQty?: number;
}

export interface RubroSector {
  id: string;
  title: string;
  shortTitle: string;
  emoji: string;
  tagline: string;
  description: string;
  equipment: RubroEquipment[];
}

export interface EquipmentSelectionState {
  selected: boolean;
  qty: number;
}

export type EquipmentSelectionMap = Record<string, EquipmentSelectionState>;

export const MIN_EQUIPMENT_QTY = 1;
export const MAX_EQUIPMENT_QTY = 50;

/**
 * Normaliza y acota de forma segura la cantidad solicitada para un equipo.
 */
export function clampQuantity(qty: number, min = MIN_EQUIPMENT_QTY, max = MAX_EQUIPMENT_QTY): number {
  if (isNaN(qty) || !isFinite(qty)) return min;
  return Math.max(min, Math.min(max, Math.round(qty)));
}
