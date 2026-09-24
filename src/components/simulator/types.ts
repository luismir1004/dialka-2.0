export interface VehiclePreset {
  label: string;
  tons: number;
  desc: string;
}

export const VEHICLE_PRESETS: VehiclePreset[] = [
  { label: "Báscula en Cero", tons: 0.0, desc: "Plataforma libre · 0 kg" },
  { label: "Camión 350", tons: 4.2, desc: "Vehículo liviano · 4.200 kg" },
  { label: "Chuto Mack 2 Ejes", tons: 16.5, desc: "Chuto vacío · 16.500 kg" },
  { label: "Gándola Batea", tons: 38.8, desc: "Granelera estándar · 38.800 kg" },
  { label: "Tolva 4 Ejes", tons: 58.4, desc: "Agroindustrial · 58.400 kg" },
  { label: "Sobrecarga Crítica", tons: 76.5, desc: "Alerta máxima · >70.000 kg" },
];

export interface LiveWeighingSimulatorProps {
  initialTons?: number;
  maxTons?: number;
  className?: string;
}

export interface WeightMetrics {
  rawKg: number;
  tareKg: number;
  netKg: number;
  displayedKg: number;
  displayedTons: string;
}
