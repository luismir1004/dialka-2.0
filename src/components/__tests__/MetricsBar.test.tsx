import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MetricsBar } from "../MetricsBar";

describe("MetricsBar Component", () => {
  it("renderiza correctamente las etiquetas de las 4 métricas metrológicas", () => {
    render(<MetricsBar />);

    expect(screen.getByText("Años de Trayectoria")).toBeInTheDocument();
    expect(screen.getByText("Proyectos Concluidos")).toBeInTheDocument();
    expect(screen.getByText("Desarrollos de Software")).toBeInTheDocument();
    expect(screen.getByText("Calidad y Precisión")).toBeInTheDocument();
  });

  it("renderiza los subtítulos explicativos de cada métrica", () => {
    render(<MetricsBar />);

    expect(screen.getByText("Desde 2001 en Venezuela")).toBeInTheDocument();
    expect(screen.getByText("Industria y agro venezolano")).toBeInTheDocument();
    expect(screen.getByText("Sistemas en producción")).toBeInTheDocument();
    expect(screen.getByText("Trazabilidad metrológica")).toBeInTheDocument();
  });
});
