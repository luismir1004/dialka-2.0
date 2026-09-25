"use client";

import { Video } from "lucide-react";

export interface FieldVideo {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
}

interface ProjectsVideoGalleryProps {
  videos: FieldVideo[];
}

export function ProjectsVideoGallery({ videos }: ProjectsVideoGalleryProps) {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-500/30 text-xs font-bold uppercase tracking-wider text-red-300 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Video size={14} className="text-red-400" />
            <span>Registro Visual en Campo</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Videos Reales de Obras en Campo
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            Material audiovisual capturado durante operativos de instalación, montaje y calibración de básculas camioneras por el equipo técnico de Dialka.
          </p>
        </div>

        {/* Indicador táctil para mobile */}
        <div className="sm:hidden flex items-center justify-between mb-3 text-[11px] text-slate-400 font-medium">
          <span>{videos.length} videos en campo</span>
          <span className="text-red-400 font-bold flex items-center gap-1">
            Desliza para ver más →
          </span>
        </div>

        {/* Video Grid / Carrusel Táctil */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-5 lg:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-[84vw] max-w-[320px] shrink-0 sm:w-auto sm:max-w-none snap-center group bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Video Player Contenido */}
              <div className="relative w-full aspect-[4/5] max-h-[420px] bg-black overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  poster={video.poster}
                  controls
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                >
                  <source src={video.src} type="video/mp4" />
                  Su navegador no soporta la reproducción de video.
                </video>

                {/* Badge distintivo superior */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Operativo en Sitio</span>
                  </span>
                </div>
              </div>

              {/* Video Info nivelado */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-slate-800/50">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-2 min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
